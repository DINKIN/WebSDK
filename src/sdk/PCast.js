/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    'phenix-web-lodash-light',
    'phenix-web-assert',
    'phenix-web-observable',
    'phenix-web-disposable',
    './logging/pcastLoggerFactory',
    'phenix-web-http',
    './audio/AudioContext',
    './PCastProtocol',
    './PCastEndPoint',
    './userMedia/ScreenShareExtensionManager',
    './userMedia/UserMediaProvider',
    './streaming/PeerConnectionMonitor',
    './DimensionsChangedMonitor',
    './telemetry/metricsTransmitterFactory',
    './telemetry/StreamTelemetry',
    './telemetry/SessionTelemetry',
    './streaming/PeerConnection',
    './streaming/StreamWrapper',
    './streaming/PhenixLiveStream',
    './streaming/PhenixRealTimeStream',
    './streaming/stream.json',
    'phenix-rtc',
    './sdpUtil'
], function(_, assert, observable, disposable, pcastLoggerFactory, http, AudioContext, PCastProtocol, PCastEndPoint, ScreenShareExtensionManager, UserMediaProvider, PeerConnectionMonitor, DimensionsChangedMonitor, metricsTransmitterFactory, StreamTelemetry, SessionTelemetry, PeerConnection, StreamWrapper, PhenixLiveStream, PhenixRealTimeStream, streamEnums, phenixRTC, sdpUtil) {
    'use strict';

    var sdkVersion = '%SDKVERSION%';

    function PCast(options) {
        options = options || {};

        assert.isObject(options, 'options');

        if (options.streamingSourceMapping) {
            assert.isObject(options.streamingSourceMapping, 'options.streamingSourceMapping');
            assert.isStringNotEmpty(options.streamingSourceMapping.replacement, 'options.streamingSourceMapping.replacement');

            if (!(options.streamingSourceMapping.patternToReplace instanceof RegExp)) {
                assert.isStringNotEmpty(options.streamingSourceMapping.patternToReplace, 'options.streamingSourceMapping.patternToReplace');
            }
        }

        if (!_.isNullOrUndefined(options.disableMultiplePCastInstanceWarning)) {
            assert.isBoolean(options.disableMultiplePCastInstanceWarning, 'options.disableMultiplePCastInstanceWarning');
        }

        this._observableStatus = new observable.Observable('offline');
        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._deviceId = options.deviceId || '';
        this._version = sdkVersion;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri, options.disableConsoleLogging);
        this._metricsTransmitter = options.metricsTransmitter || metricsTransmitterFactory.createMetricsTransmitter(this._baseUri);
        this._screenShareExtensionManager = new ScreenShareExtensionManager(options, this._logger);
        this._shaka = options.shaka;
        this._videojs = options.videojs || phenixRTC.global.videojs;
        this._rtmpOptions = options.rtmp || {};
        this._status = 'offline';
        this._streamingSourceMapping = options.streamingSourceMapping;
        this._disposables = new disposable.DisposableList();
        this._disableMultiplePCastInstanceWarning = options.disableMultiplePCastInstanceWarning;
        this._canPlaybackAudio = true;
        this._h264ProfileIds = [];

        var that = this;

        _.addEventListener(phenixRTC.global, 'unload', function() {
            that._logger.info('Window Unload Event Triggered');

            return that.stop();
        });

        if (!options.disableBeforeUnload) {
            _.addEventListener(phenixRTC.global, 'beforeunload', function() {
                that._logger.info('Window Before Unload Event Triggered');

                return that.stop();
            });
        }

        if (!phenixRTC.webrtcSupported && phenixRTC.browser === 'ReactNative') {
            phenixRTC.shim();
        }

        if (phenixRTC.webrtcSupported) {
            setEnvironmentCodecDefaults.call(this);
            setAudioState.call(this);

            if (PhenixLiveStream.canPlaybackType(streamEnums.types.rtmp.name)) {
                this._logger.info('Flash detected');
            }
        }
    }

    PCast.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCast.prototype.getStatus = function() {
        return this._observableStatus.getValue();
    };

    PCast.prototype.getObservableStatus = function() {
        return this._observableStatus;
    };

    PCast.prototype.isStarted = function() {
        return this._started;
    };

    PCast.prototype.reAuthenticate = function(authToken) {
        assert.isStringNotEmpty(authToken, 'authToken');

        if (this._observableStatus.getValue() === 'online') {
            return this._logger.warn('Already authenticated. Denying request to re-authenticate');
        }

        this._logger.info('Attempting to re-authenticate with new auth token [%s]', authToken);

        this._authToken = authToken;

        reconnected.call(this);
    };

    PCast.prototype.start = function(authToken, authenticationCallback, onlineCallback, offlineCallback) {
        if (typeof authToken !== 'string') {
            throw new Error('"authToken" must be a string');
        }

        if (typeof authenticationCallback !== 'function') {
            throw new Error('"authenticationCallback" must be a function');
        }

        if (typeof onlineCallback !== 'function') {
            throw new Error('"onlineCallback" must be a function');
        }

        if (typeof offlineCallback !== 'function') {
            throw new Error('"offlineCallback" must be a function');
        }

        if (this._started) {
            throw new Error('"Already started"');
        }

        if (!_.isNumber(phenixRTC.global.__phenixInstantiatedPCastCount)) {
            phenixRTC.global.__phenixInstantiatedPCastCount = 1;
        } else {
            phenixRTC.global.__phenixInstantiatedPCastCount++;
        }

        if (phenixRTC.global.__phenixInstantiatedPCastCount > 1 && !this._disableMultiplePCastInstanceWarning) {
            this._logger.warn('Avoid using multiple instances of PCast as this uses unnecessary resources and will reduce performance. This is your [%s] simultaneous instance. Remember to dispose all resources when done with them by calling .stop() or .dispose()',
                phenixRTC.global.__phenixInstantiatedPCastCount);
        }

        this._stopped = false;
        this._started = true;
        this._authToken = authToken;
        this._authenticationCallback = authenticationCallback;
        this._onlineCallback = onlineCallback;
        this._offlineCallback = offlineCallback;
        this._sessionTelemetry = new SessionTelemetry(this._logger, this._metricsTransmitter);
        this._endPoint = new PCastEndPoint(this._version, this._baseUri, this._logger, this._sessionTelemetry);

        transitionToStatus.call(this, 'connecting');

        this._peerConnections = {};
        this._mediaStreams = {};
        this._publishers = {};
        this._gumStreams = [];

        this._disposables.add(this._endPoint);
        this._disposables.add(this._sessionTelemetry);

        var that = this;

        that._endPoint.resolveUri(function(err, endPoint) {
            if (err) {
                that._logger.error('Failed to connect to [%s]', that._baseUri, err);

                transitionToStatus.call(that, 'offline');

                switch (err.code) {
                case 0:
                    that._authenticationCallback.call(that, that, 'network-unavailable', '');

                    break;
                case 503:
                    that._authenticationCallback.call(that, that, 'capacity', '');

                    break;
                default:
                    that._authenticationCallback.call(that, that, 'failed', '');

                    break;
                }

                that._stopped = true;
                that._started = false;

                return;
            }

            that._logger.info('Discovered end point [%s] with RTT [%s]', endPoint.uri, endPoint.roundTripTime);

            that._networkOneWayLatency = endPoint.roundTripTime / 2;
            that._resolvedEndPoint = endPoint.uri;

            instantiateProtocol.call(that, endPoint.uri);
        });
    };

    PCast.prototype.stop = function() {
        if (!this._started) {
            return;
        }

        this._stopped = true;
        this._started = false;

        delete this._authenticationCallback;

        try {
            var reason = '';
            var that = this;

            _.forOwn(this._mediaStreams, function(mediaStream, streamId) {
                endStream.call(that, streamId, reason);
            });
            _.forOwn(this._publishers, function(publisher, publisherStreamId) {
                endStream.call(that, publisherStreamId, reason);

                if (!_.includes(publisher.getOptions(), 'detached')) {
                    publisher.stop(reason, true);
                }
            });
            _.forOwn(this._peerConnections, function(mediaStream, peerConnectionStreamId) {
                endStream.call(that, peerConnectionStreamId, reason);
            });
            _.forEach(this._gumStreams, function(gumStream) {
                var tracks = gumStream.getTracks();

                _.forEach(tracks, function(track) {
                    track.stop();
                });
            });
        } finally {
            if (this._protocol) {
                this._protocol.disconnect();

                this._protocol = null;
            }

            if (this._logger.setObservableSessionId) {
                this._logger.setObservableSessionId(null);
            }

            if (this._sessionTelemetrySubscription) {
                this._sessionTelemetrySubscription.dispose();
                this._sessionTelemetry.setSessionId(null);
            }

            phenixRTC.global.__phenixInstantiatedPCastCount--;

            this._disposables.dispose();
        }
    };

    PCast.prototype.getUserMedia = function(options, callback, onScreenShare) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        var userMediaProvider = new UserMediaProvider(this._logger, this._screenShareExtensionManager, onScreenShare);

        return userMediaProvider.getUserMedia(options, callback);
    };

    PCast.prototype.publish = function(streamToken, streamToPublish, callback, tags, options) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        if (!this._started) {
            throw new Error('PCast not started. Unable to publish. Please start pcast first.');
        }

        if (typeof streamToken !== 'string') {
            throw new Error('"streamToken" must be a string');
        }

        if (typeof streamToPublish !== 'object' && typeof streamToPublish !== 'string') {
            throw new Error('"streamToPublish" must be an object or URI');
        }

        if (typeof callback !== 'function') {
            throw new Error('"callback" must be a function');
        }

        tags = tags || [];

        if (!Array.isArray(tags)) {
            throw new Error('"tags" must be an array');
        }

        options = options || {};

        if (typeof options !== 'object') {
            throw new Error('"options" must be an object');
        }

        var that = this;
        var streamType = 'upload';
        var setupStreamOptions = _.assign({}, options, {negotiate: true});

        if (typeof streamToPublish === 'string') {
            setupStreamOptions.negotiate = false;
            setupStreamOptions.connectUri = streamToPublish;
        } else {
            setupStreamOptions.connectUri = options.connectUri;
        }

        if (tags.length > 0) {
            setupStreamOptions.tags = tags;
        }

        var streamTelemetry = new StreamTelemetry(this.getProtocol().getSessionId(), this._logger, this._metricsTransmitter);

        streamTelemetry.setProperty('resource', streamType);

        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
            if (error) {
                that._logger.error('Failed to create uploader [%s]', error);

                return callback.call(that, that, 'failed');
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to create uploader, status [%s]', response.status);

                switch (response.status) {
                case 'timeout':
                case 'capacity':
                case 'unauthorized':
                    return callback.call(that, that, response.status);
                default:
                    return callback.call(that, that, 'failed');
                }
            } else {
                var streamId = response.createStreamResponse.streamId;

                streamTelemetry.setStreamId(streamId);
                streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                streamTelemetry.recordMetric('Provisioned');
                streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                    resource: that._resolvedEndPoint,
                    kind: 'https'
                });

                if (setupStreamOptions.negotiate === true) {
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));

                    if (phenixRTC.browser === 'Opera' && that._h264ProfileIds.length > 0) {
                        // For publishing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new publisher h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing publisher h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return createPublisherPeerConnection.call(that, peerConnectionConfig, streamToPublish, streamId, offerSdp, streamTelemetry, function(phenixPublisher, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixPublisher);
                        }
                    }, options, response.createStreamResponse.options);
                }

                return createPublisher.call(that, streamId, function(phenixPublisher, error) {
                    streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                    if (error) {
                        callback.call(that, that, 'failed', null);
                    } else {
                        callback.call(that, that, 'ok', phenixPublisher);
                    }
                }, response.createStreamResponse.options);
            }
        });
    };

    PCast.prototype.subscribe = function(streamToken, callback, options) {
        if (!this._started) {
            throw new Error('PCast not started. Unable to subscribe. Please start pcast first.');
        }

        if (typeof streamToken !== 'string') {
            throw new Error('"streamToken" must be a string');
        }

        if (typeof callback !== 'function') {
            throw new Error('"callback" must be a function');
        }

        options = options || {};

        if (typeof options !== 'object') {
            throw new Error('"options" must be an object');
        }

        var that = this;

        setAudioState.call(that, function() {
            var streamType = 'download';
            var setupStreamOptions = _.assign({}, options, {negotiate: options.negotiate !== false});
            var streamTelemetry = new StreamTelemetry(that.getProtocol().getSessionId(), that._logger, that._metricsTransmitter);
            var createStreamOptions = _.assign({}, options);

            createStreamOptions.canPlaybackAudio = that._canPlaybackAudio;

            if (!that._canPlaybackAudio && options.disableAudioIfNoOutputFound && options.receiveAudio !== false) {
                setupStreamOptions.receiveAudio = false;
                createStreamOptions.receiveAudio = false;
                createStreamOptions.forcedAudioDisabled = true;
            }

            streamTelemetry.setProperty('resource', streamType);

            that._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
                if (error) {
                    that._logger.error('Failed to create downloader [%s]', error);

                    return callback.call(that, that, 'failed');
                } else if (response.status !== 'ok') {
                    that._logger.warn('Failed to create downloader, status [%s]', response.status);

                    switch (response.status) {
                    case 'capacity':
                    case 'stream-ended':
                    case 'origin-stream-ended':
                    case 'streaming-not-available':
                    case 'unauthorized':
                    case 'timeout':
                        return callback.call(that, that, response.status);
                    default:
                        return callback.call(that, that, 'failed');
                    }
                } else {
                    var streamId = response.createStreamResponse.streamId;
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));
                    var create = _.bind(createViewerPeerConnection, that, peerConnectionConfig);
                    var isLive = offerSdp.match(/a=x-playlist:/);

                    if (isLive) {
                        create = createLiveViewer;
                    }

                    streamTelemetry.setStreamId(streamId);
                    streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                    streamTelemetry.recordMetric('Provisioned');
                    streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                        resource: that.getBaseUri(),
                        kind: 'https'
                    });

                    createStreamOptions.originStartTime = _.now() - response.createStreamResponse.offset + that._networkOneWayLatency;

                    if (!isLive && ((phenixRTC.browser === 'Chrome' && phenixRTC.browserVersion >= 62 && isMobile()) || phenixRTC.browser === 'Opera') && that._h264ProfileIds.length > 0) {
                        // For subscribing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new subscriber h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing subscriber h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return create.call(that, streamId, offerSdp, streamTelemetry, function(phenixMediaStream, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixMediaStream);
                        }
                    }, createStreamOptions);
                }
            });
        });
    };

    PCast.prototype.getProtocol = function() {
        return this._protocol;
    };

    PCast.prototype.getLogger = function() {
        return this._logger;
    };

    PCast.prototype.toString = function() {
        var protocol = this.getProtocol();
        var sessionId = protocol ? protocol.getSessionId() : '';

        return 'PCast[' + sessionId || 'unauthenticated' + ',' + (protocol ? protocol.toString() : 'uninitialized') + ']';
    };

    function instantiateProtocol(uri) {
        this._protocol = new PCastProtocol(uri, this._deviceId, this._version, this._logger);

        this._protocol.onEvent('connected', _.bind(connected, this));
        this._protocol.onEvent('reconnecting', _.bind(reconnecting, this));
        this._protocol.onEvent('reconnected', _.bind(reconnected, this));
        this._protocol.onEvent('disconnected', _.bind(disconnected, this));
        this._protocol.onEvent('pcast.StreamEnded', _.bind(streamEnded, this));
        this._protocol.onEvent('pcast.StreamDataQuality', _.bind(dataQuality, this));

        if (this._logger.setObservableSessionId) {
            this._logger.setObservableSessionId(this._protocol.getObservableSessionId());
        }

        if (this._sessionTelemetrySubscription) {
            this._sessionTelemetrySubscription.dispose();
            this._sessionTelemetry.setSessionId(null);
        }

        this._sessionTelemetrySubscription = this._protocol.getObservableSessionId().subscribe(_.bind(this._sessionTelemetry.setSessionId, this._sessionTelemetry));
    }

    function connected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'offline') {
            this._logger.warn('[PCast] connected after being offline. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop();
        }

        var that = this;

        this._connected = true;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                if (that._authenticationCallback) {
                    if (error) {
                        that._logger.error('Failed to authenticate [%s]', error);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to authenticate, status [%s]', response.status);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else {
                        transitionToStatus.call(that, 'online');

                        that._authenticationCallback.call(that, that, response.status, response.sessionId);
                    }
                }
            });
        }
    }

    function reconnecting() {
        transitionToStatus.call(this, 'reconnecting');
    }

    function reconnected() {
        transitionToStatus.call(this, 'reconnected');

        this._logger.info('Attempting to re-authenticate after reconnect event');

        reAuthenticate.call(this);
    }

    function reAuthenticate() {
        var that = this;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                var suppressCallbackIfNeverDisconnected = that._connected === true;

                if (error) {
                    that._logger.error('Unable to authenticate after reconnect to WebSocket [%s]', error);

                    return transitionToStatus.call(that, 'reconnect-failed');
                }

                if (response.status !== 'ok') {
                    that._logger.warn('Unable to authenticate after reconnect to WebSocket, status [%s]', response.status);

                    var reason = response.status === 'capacity' ? response.status : 'reconnect-failed';

                    return transitionToStatus.call(that, reason);
                }

                that._connected = true;

                that._logger.info('Successfully authenticated after reconnect to WebSocket');

                return transitionToStatus.call(that, 'online', null, suppressCallbackIfNeverDisconnected);
            });
        }
    }

    function disconnected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'reconnecting') {
            this._logger.warn('[PCast] disconnected after attempting to reconnect. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop();
        }

        this._connected = false;
        transitionToStatus.call(this, 'offline');
    }

    function areAllPeerConnectionsOffline() {
        return _.reduce(this._peerConnections, function(isOffline, peerConnection) {
            if (!isOffline) {
                return isOffline;
            }

            return peerConnection.iceConnectionState === 'closed';
        }, true);
    }

    function getStreamEndedReason(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        default:
            return 'custom';
        }
    }

    function streamEnded(event) {
        var streamId = event.streamId;
        var reason = event.reason;

        return endStream.call(this, streamId, reason);
    }

    function dataQuality(event) {
        var streamId = event.streamId;
        var status = event.status;
        var reason = event.reason;

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.dataQualityChangedCallback(status, reason);
        }

        var publisher = this._publishers[streamId];

        if (publisher && typeof publisher.dataQualityChangedCallback === 'function') {
            publisher.dataQualityChangedCallback(publisher, status, reason);
        }
    }

    function endStream(streamId, reason) {
        this._logger.info('[%s] Stream ended with reason [%s]', streamId, reason);

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason, true);
        }

        delete this._mediaStreams[streamId];

        var publisher = this._publishers[streamId];

        if (publisher && typeof publisher.publisherEndedCallback === 'function') {
            publisher.publisherEndedCallback(publisher, getStreamEndedReason(reason), reason);
        }

        delete this._publishers[streamId];

        var peerConnection = this._peerConnections[streamId];

        if (peerConnection) {
            closePeerConnection.call(this, streamId, peerConnection, 'ended');
        }

        delete this._peerConnections[streamId];
    }

    function setupStreamAddedListener(streamId, state, peerConnection, streamTelemetry, callback, options) {
        var that = this;
        var onAddStream = function onAddStream(event) {
            if (state.failed) {
                return;
            }

            var masterStream = event.stream;
            var kind = 'real-time';

            if (!masterStream) {
                state.failed = true;
                that._logger.warn('[%s] No remote stream', streamId);

                return callback.call(that, undefined, 'failed');
            }

            that._logger.info('[%s] Got remote stream', streamId);

            streamTelemetry.setProperty('kind', kind);

            var streamOptions = _.assign({networkLag: that._networkOneWayLatency}, options);
            var realTimeStream = new PhenixRealTimeStream(streamId, masterStream, peerConnection, streamTelemetry, streamOptions, that._logger);
            var realTimeStreamDecorator = new StreamWrapper(kind, realTimeStream, that._logger);

            var onError = function onError(source, event) {
                that._logger.warn('Phenix Real-Time Stream Error [%s] [%s]', source, event);

                realTimeStreamDecorator.streamErrorCallback(kind, event);
            };

            var onStop = function destroyMasterMediaStream(reason) {
                if (state.stopped) {
                    return;
                }

                that._logger.info('[%s] stop media stream', streamId);

                closePeerConnection.call(that, streamId, peerConnection, 'stop');

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            };

            realTimeStreamDecorator.on(streamEnums.streamEvents.playerError.name, onError);
            realTimeStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

            that._mediaStreams[streamId] = realTimeStreamDecorator;

            callback.call(that, realTimeStream);
        };

        _.addEventListener(peerConnection, 'addstream', onAddStream);
    }

    function setupIceCandidateListener(streamId, peerConnection, callback) {
        var that = this;
        var onIceCandidate = function onIceCandidate(event) {
            var candidate = event.candidate;

            if (candidate) {
                that._logger.debug('[%s] ICE candidate: [%s] [%s] [%s]', streamId, candidate.sdpMid, candidate.sdpMLineIndex, candidate.candidate);
            } else {
                that._logger.info('[%s] ICE candidate discovery complete', streamId);
            }

            if (callback) {
                callback(candidate);
            }
        };

        _.addEventListener(peerConnection, 'icecandidate', onIceCandidate);
    }

    function setupStateListener(streamId, peerConnection) {
        var that = this;
        var onNegotiationNeeded = function onNegotiationNeeded(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Negotiation needed');
        };

        var onIceConnectionStateChanged = function onIceConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE connection state changed [%s]', streamId, peerConnection.iceConnectionState);
        };

        var onIceGatheringStateChanged = function onIceGatheringStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE gathering state changed [%s]', streamId, peerConnection.iceGatheringState);
        };

        var onSignalingStateChanged = function onSignalingStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Signaling state changed [%s]', streamId, peerConnection.signalingState);
        };

        var onConnectionStateChanged = function onConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Connection state changed [%s]', streamId, peerConnection.connectionState);
        };

        _.addEventListener(peerConnection, 'negotiationneeded', onNegotiationNeeded);
        _.addEventListener(peerConnection, 'iceconnectionstatechange', onIceConnectionStateChanged);
        _.addEventListener(peerConnection, 'icegatheringstatechange ', onIceGatheringStateChanged);
        _.addEventListener(peerConnection, 'signalingstatechange', onSignalingStateChanged);
        _.addEventListener(peerConnection, 'connectionstatechange', onConnectionStateChanged);
    }

    function createPublisher(streamId, callback, streamOptions) {
        var that = this;
        var state = {stopped: false};

        var publisher = {
            getStreamId: function getStreamId() {
                return streamId;
            },

            getStream: function getStream() {
                that._logger.debug('[%s] Unable to get stream on publisher of remote origin.', streamId);

                return null;
            },

            getStats: function getStats() {
                that._logger.debug('[%s] Unable to get stream stats on publisher of remote origin.', streamId);

                return null;
            },

            isActive: function isActive() {
                return !state.stopped;
            },

            hasEnded: function hasEnded() {
                return state.stopped;
            },

            stop: function stop(reason) {
                if (state.stopped) {
                    return;
                }

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            },

            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }

                this.publisherEndedCallback = callback;
            },

            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }

                this.dataQualityChangedCallback = callback;
            },

            getOptions: function getOptions() {
                return streamOptions;
            },

            monitor: function monitor(options, callback) {
                if (typeof options !== 'object') {
                    throw new Error('"options" must be an object');
                }

                if (typeof callback !== 'function') {
                    throw new Error('"callback" must be a function');
                }
            },

            getMonitor: function getMonitor() {
                return null;
            }
        };

        that._publishers[streamId] = publisher;

        callback(publisher);
    }

    function setEnvironmentCodecDefaults() {
        var that = this;
        var peerConnection = new phenixRTC.RTCPeerConnection();

        // TODO(DY) remove when updating to webrtc-adapter version 5.0.5 or greater
        if (phenixRTC.browser === 'Safari' && phenixRTC.browserVersion > 10) {
            peerConnection.addTransceiver('audio');
            peerConnection.addTransceiver('video');
        }

        peerConnection.createOffer(function(offer) {
            var h264ProfileIds = sdpUtil.getH264ProfileIds(offer.sdp);

            if (h264ProfileIds.length === 0) {
                return that._logger.info('Unable to find local h264 profile level id');
            }

            that._logger.info('Found local h264 profile level ids [%s]', h264ProfileIds, offer.sdp);

            that._h264ProfileIds = h264ProfileIds;
        }, function(e) {
            that._logger.error('Unable to create offer to get local h264 profile level id', e);
        }, {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
        });
    }

    function setAudioState(done) {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Edge':
            return phenixRTC.getDestinations(function(destinations) {
                var audioDestinations = _.filter(destinations, function(destination) {
                    return destination.kind === 'audio';
                });

                if (audioDestinations.length === 0) {
                    if (that._canPlaybackAudio) {
                        that._logger.info('Detected no audio devices attached to machine');
                    }

                    that._canPlaybackAudio = false;
                } else {
                    that._canPlaybackAudio = true;
                }

                if (done) {
                    done();
                }
            });
        default:
            if (done) {
                done();
            }

            break;
        }
    }

    function createPublisherPeerConnection(peerConnectionConfig, mediaStream, streamId, offerSdp, streamTelemetry, callback, createOptions, streamOptions) {
        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var remoteMediaStream = null;
        var onIceCandidateCallback = null;
        var publisherMonitor = null;

        that._peerConnections[streamId] = peerConnection;

        peerConnection.addStream(mediaStream);

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        function onSetRemoteDescriptionSuccess() {
            that._logger.info('Set remote description (offer)');

            function onCreateAnswerSuccess(answerSdp) {
                that._logger.info('Created answer [%s]', answerSdp.sdp);

                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
                    if (error) {
                        that._logger.error('Failed to set answer description [%s]', error);

                        return onFailure();
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to set answer description, status [%s]', response.status);

                        return onFailure(response.status);
                    }

                    function onSetLocalDescriptionSuccess() {
                        var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
                        var video = /(mid:video)([\n\r]*)/gi;

                        that._logger.info('Set local description (answer)');

                        var limit = 0;
                        var bandwithAttribute = bandwidthAttribute.exec(offerSdp);

                        if (bandwithAttribute && bandwithAttribute.length >= 3) {
                            limit = bandwithAttribute[2] * 1000;
                        }

                        var publisher = {
                            getStreamId: function getStreamId() {
                                return streamId;
                            },

                            getStream: function getStream() {
                                return mediaStream;
                            },

                            isActive: function isActive() {
                                return !state.stopped;
                            },

                            hasEnded: function hasEnded() {
                                switch (peerConnection.iceConnectionState) {
                                case 'new':
                                case 'checking':
                                case 'connected':
                                case 'completed':
                                    return false;
                                case 'disconnected':
                                case 'failed':
                                case 'closed':
                                    return true;
                                default:
                                    return true;
                                }
                            },

                            stop: function stop(reason) {
                                if (state.stopped) {
                                    return;
                                }

                                closePeerConnection.call(that, streamId, peerConnection, 'closed');

                                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                                    if (error) {
                                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                                        return;
                                    } else if (response.status !== 'ok') {
                                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                                        return;
                                    }

                                    that._logger.info('[%s] destroyed stream', streamId);
                                });

                                state.stopped = true;
                            },

                            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.publisherEndedCallback = callback;
                            },

                            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.dataQualityChangedCallback = callback;
                            },

                            limitBandwidth: function limitBandwidth(bandwidthLimit) {
                                if (phenixRTC.browser === 'Edge') {
                                    return that._logger.warn('Limit bandwidth not support on [%s]', phenixRTC.browser);
                                }

                                if (typeof bandwidthLimit !== 'number') {
                                    throw new Error('"bandwidthLimit" must be a number');
                                }

                                var newLimit = limit ? Math.min(bandwidthLimit, limit) : bandwidthLimit;
                                var remoteDescription = peerConnection.remoteDescription;

                                that._logger.info('Changing bandwidth limit to [%s]', newLimit);

                                var updatedSdp = remoteDescription.sdp.replace(bandwidthAttribute, '');

                                // Add new limit in kbps
                                updatedSdp = updatedSdp.replace(video, function(match, videoLine, lineEnding, offset, sdp) { // eslint-disable-line no-unused-vars
                                    return [videoLine, lineEnding, 'b=AS:', Math.ceil(newLimit / 1000), lineEnding].join('');
                                });

                                var updatedRemoteDescription = new phenixRTC.RTCSessionDescription({
                                    type: remoteDescription.type,
                                    sdp: updatedSdp
                                });

                                peerConnection.setRemoteDescription(updatedRemoteDescription);

                                return {
                                    dispose: function() {
                                        peerConnection.setRemoteDescription(remoteDescription);
                                    }
                                };
                            },

                            getMonitor: function getMonitor() {
                                return publisherMonitor;
                            },

                            monitor: function monitor(options, callback) {
                                if (typeof options !== 'object') {
                                    throw new Error('"options" must be an object');
                                }

                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

                                options.direction = 'outbound';

                                monitor.start(options, function activeCallback() {
                                    return that._publishers[streamId] === publisher && !state.stopped;
                                }, function monitorCallback(error, monitorEvent) {
                                    if (error) {
                                        that._logger.warn('[%s] Publisher monitor triggered unrecoverable error [%s]', error);
                                    }

                                    that._logger.warn('[%s] Publisher triggered monitor condition for [%s]', streamId, monitorEvent.type);

                                    return callback(publisher, 'client-side-failure', monitorEvent);
                                });

                                _.forEach(mediaStream.getTracks(), function(track) {
                                    _.addEventListener(track, 'readystatechange', function() {
                                        if (track.readyState === 'ended') {
                                            that._logger.warn('[%s] Publisher track has failed [%s]', streamId, track);

                                            return callback(publisher, 'camera-track-failure', {
                                                type: track.kind + '-track-ended',
                                                message: 'Publisher ' + track.kind + ' track has ended in an unrecoverable way. This may require reconfiguring your camera or microphone.'
                                            });
                                        }
                                    });
                                });

                                publisherMonitor = monitor;

                                return monitor;
                            },

                            setRemoteMediaStreamCallback: function setRemoteMediaStreamCallback(callback) {
                                if (typeof callback !== 'function') {
                                    throw new Error('"callback" must be a function');
                                }

                                this.remoteMediaStreamCallback = callback;

                                if (remoteMediaStream) {
                                    callback(publisher, remoteMediaStream);
                                }
                            },

                            getOptions: function getOptions() {
                                return streamOptions;
                            },

                            getStats: function getStats(callback) {
                                assert.isFunction(callback, 'callback');

                                if (!this._lastStats) {
                                    this._lastStats = {};
                                }

                                var that = this;

                                return phenixRTC.getStats(peerConnection, null, function(stats) {
                                    callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
                                });
                            }
                        };

                        that._publishers[streamId] = publisher;

                        callback.call(that, publisher);
                    }

                    if (_.includes(response.options, 'ice-candidates')) {
                        onIceCandidateCallback = function(candidate) {
                            var candidates = [];
                            var options = [];

                            if (candidate) {
                                candidates.push(candidate);
                            } else {
                                options.push('completed');
                            }

                            that._protocol.addIceCandidates(streamId, candidates, options, function(error, response) {
                                if (error) {
                                    that._logger.error('Failed to add ICE candidate [%s]', error);

                                    return;
                                } else if (response.status !== 'ok') {
                                    that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);

                                    return;
                                }

                                if (_.includes(response.options, 'cancel')) {
                                    onIceCandidateCallback = null;
                                }
                            });
                        };
                    }

                    var sessionDescription = new phenixRTC.RTCSessionDescription({
                        type: 'answer',
                        sdp: response.sessionDescription.sdp
                    });

                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
                });
            }

            var mediaConstraints = {mandatory: {}};

            if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
                mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo === true;
                mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio === true;
            } else {
                mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo === true;
                mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio === true;
            }

            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
        }

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, function(mediaStream) {
            var publisher = that._publishers[streamId];

            remoteMediaStream = mediaStream;

            if (publisher && publisher.remoteMediaStreamCallback) {
                publisher.remoteMediaStreamCallback(publisher, mediaStream);
            }
        }, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (onIceCandidateCallback) {
                onIceCandidateCallback(candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });

        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
    }

    function createViewerPeerConnection(peerConnectionConfig, streamId, offerSdp, streamTelemetry, callback, createOptions) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Subscribing in real-time not supported on IE without the PhenixP2P Plugin');
        }

        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var onIceCandidateCallback = null;

        that._peerConnections[streamId] = peerConnection;

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        if (phenixRTC.browser === 'ReactNative') {
            offerSdp = setGroupLineOrderToMatchMediaSectionOrder(offerSdp);
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        function onSetRemoteDescriptionSuccess() {
            that._logger.debug('Set remote description (offer)');

            function onCreateAnswerSuccess(answerSdp) {
                that._logger.info('Created answer [%s]', answerSdp.sdp);

                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
                    if (error) {
                        that._logger.error('Failed to set answer description [%s]', error);

                        return onFailure();
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to set answer description, status [%s]', response.status);

                        return onFailure(response.status);
                    }

                    function onSetLocalDescriptionSuccess() {
                        that._logger.debug('Set local description (answer)');
                    }

                    if (_.includes(response.options, 'ice-candidates')) {
                        onIceCandidateCallback = function(candidate) {
                            var candidates = [];
                            var iceCandidatesOptions = [];

                            if (candidate) {
                                candidates.push(candidate);
                            } else {
                                iceCandidatesOptions.push('completed');
                            }

                            that._protocol.addIceCandidates(streamId, candidate, iceCandidatesOptions, function(error, response) {
                                if (error) {
                                    that._logger.error('Failed to add ICE candidate [%s]', error);

                                    return;
                                } else if (response.status !== 'ok') {
                                    that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);

                                    return;
                                }

                                if (_.includes(response.options, 'cancel')) {
                                    onIceCandidateCallback = null;
                                }
                            });
                        };
                    }

                    var localSdp = response.sessionDescription.sdp;

                    if (isIOS()) {
                        var version = _.get(getIOSVersion(), ['major']);

                        that._logger.info('iOS Version is [%s]', version);

                        if (version < 11) {
                            localSdp = localSdp.replace('BUNDLE audio video', 'BUNDLE video audio'); // Without this only video-only streams work on iOS 10
                        }
                    }

                    var sessionDescription = new phenixRTC.RTCSessionDescription({
                        type: 'answer',
                        sdp: localSdp
                    });

                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
                });
            }

            var mediaConstraints = {mandatory: {}};

            if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
                mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo !== false;
                mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio !== false;
            } else {
                mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo !== false;
                mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio !== false;
            }

            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
        }

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, callback, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (onIceCandidateCallback) {
                onIceCandidateCallback(candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });

        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
    }

    function createLiveViewer(streamId, offerSdp, streamTelemetry, callback, options) {
        var that = this;

        var rtmpQuery = /a=x-rtmp:(rtmp:\/\/[^\n]*)/m;
        var rtmpMatch = offerSdp.match(rtmpQuery);
        var dashMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]mpd\??[^\s]*)/m);
        var hlsMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]m3u8\??[^\s]*)/m);
        var manifestUrl = _.get(dashMatch, [1], '');
        var playlistUrl = _.get(hlsMatch, [1], '');
        var dashManifestOffered = dashMatch && dashMatch.length === 2;
        var hlsPlaylistOffered = hlsMatch && hlsMatch.length === 2;
        var preferHls = isIOS() || phenixRTC.browser === 'Safari';
        var canPlaybackRtmp = PhenixLiveStream.canPlaybackType(streamEnums.types.rtmp.name);
        var canPlaybackDash = PhenixLiveStream.canPlaybackType(streamEnums.types.dash.name);
        var canPlaybackHls = PhenixLiveStream.canPlaybackType(streamEnums.types.hls.name);

        if (this._streamingSourceMapping) {
            manifestUrl = manifestUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
            playlistUrl = playlistUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
        }

        if (rtmpMatch && canPlaybackRtmp) {
            var rtmpUris = [];

            while (rtmpMatch) {
                var rtmpUriAndAttributes = _.get(rtmpMatch, [1], '');
                var rtmpUri = _.get(rtmpUriAndAttributes.match(/(rtmp:\/\/[^\n\s]*)/), [0]);
                var bitrate = _.get(rtmpUriAndAttributes.match(/bitrate=([^\n\s;]*)/), [1]);
                var resolution = _.get(rtmpUriAndAttributes.match(/resolution=([^\n\s;]*)/), [1]);

                offerSdp = offerSdp.replace(rtmpUriAndAttributes, '');

                if (rtmpUri) {
                    rtmpUris.push({
                        uri: rtmpUri,
                        bitrate: bitrate,
                        resolution: resolution
                    });
                }

                rtmpMatch = offerSdp.match(rtmpQuery);
            }

            return createLiveViewerOfKind.call(that, streamId, rtmpUris, streamEnums.types.rtmp.name, streamTelemetry, callback, _.assign({}, this._rtmpOptions, options));
        } else if (dashManifestOffered && canPlaybackDash && !preferHls) {
            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(manifestUrl) || /x-widevine-service-certificate/.test(offerSdp);

            if (options.isDrmProtectedContent) {
                options.widevineServiceCertificateUrl = offerSdp.match(/a=x-widevine-service-certificate:([^\n][^\s]*)/m)[1];
                options.playreadyLicenseUrl = offerSdp.match(/a=x-playready-license-url:([^\n][^\s]*)/m)[1];
            }

            if (this._shaka && !this._shaka.Player.isBrowserSupported()) {
                this._logger.warn('[%s] Shaka does not support this browser', streamId);

                return callback.call(this, undefined, 'browser-unsupported');
            }

            return createLiveViewerOfKind.call(that, streamId, manifestUrl, streamEnums.types.dash.name, streamTelemetry, callback, options);
        } else if (hlsPlaylistOffered && canPlaybackHls) {
            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(playlistUrl);

            if (options.hlsTargetDuration) {
                assert.isNumber(options.hlsTargetDuration, 'options.hlsTargetDuration');

                playlistUrl = playlistUrl + (playlistUrl.indexOf('?') > -1 ? '&' : '?') + 'targetDuration=' + options.hlsTargetDuration;
            }

            return createLiveViewerOfKind.call(that, streamId, playlistUrl, streamEnums.types.hls.name, streamTelemetry, callback, _.assign({preferNative: preferHls}, options));
        }

        if (!dashManifestOffered && !hlsPlaylistOffered) {
            that._logger.warn('[%s] Offer does not contain a supported manifest [%s]. Creating live viewer stream failed.', streamId, offerSdp);
        } else if (!canPlaybackDash && !canPlaybackHls) {
            that._logger.warn('[%s] Device does not support either Dash or Hls playback. Creating live viewer stream failed.', streamId);
        } else if (!canPlaybackDash) {
            that._logger.warn('[%s] Device does not support Dash playback. Creating live viewer stream failed.', streamId);
        } else if (!canPlaybackHls) {
            that._logger.warn('[%s] Device does not support Hls playback. Creating live viewer stream failed.', streamId);
        }

        return callback.call(that, undefined, 'failed');
    }

    function createLiveViewerOfKind(streamId, uri, kind, streamTelemetry, callback, options) {
        var that = this;
        var liveStream = new PhenixLiveStream(kind, streamId, uri, streamTelemetry, options, this._shaka, this._logger);
        var liveStreamDecorator = new StreamWrapper(kind, liveStream, this._logger);

        var onPlayerError = function onPlayerError(source, event) {
            that._logger.warn('Phenix Live Stream Player Error [%s] [%s]', source, event);

            liveStreamDecorator.streamErrorCallback(source, event);
        };

        var onStop = function onStop(reason) {
            that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                if (error) {
                    that._logger.error('[%s] failed to destroy stream, [%s]', streamId, error);

                    return;
                } else if (response.status !== 'ok') {
                    that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                    return;
                }
            });
        };

        streamTelemetry.setProperty('kind', kind);

        liveStreamDecorator.on(streamEnums.streamEvents.playerError.name, onPlayerError);
        liveStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

        this._mediaStreams[streamId] = liveStreamDecorator;

        callback.call(this, liveStreamDecorator.getPhenixMediaStream());
    }

    function transitionToStatus(newStatus, reason, suppressCallback) {
        var oldStatus = this.getStatus();

        if (oldStatus !== newStatus && !(isOfflineStatus(oldStatus) && newStatus === 'offline')) {
            this._observableStatus.setValue(newStatus);

            if (suppressCallback) {
                return;
            }

            switch (newStatus) {
            case 'connecting':
            case 'reconnecting':
            case 'reconnected':
                break;
            case 'critical-network-issue':
            case 'unauthorized':
            case 'reconnect-failed':
            case 'offline':
                return this._offlineCallback.call(this);
            case 'online':
                return this._onlineCallback.call(this);
            default:
                break;
            }
        }
    }

    function isOfflineStatus(status) {
        return status === 'critical-network-issue' || status === 'offline';
    }

    function closePeerConnection(streamId, peerConnection, reason) {
        if (peerConnection.signalingState !== 'closed' && !peerConnection.__closing) {
            this._logger.debug('[%s] close peer connection [%s]', streamId, reason);
            peerConnection.close();
            peerConnection.__closing = true;
        }
    }

    function parseProtobufMessage(message) {
        if (!message) {
            return message;
        }

        var parsedMessage = _.isArray(message) ? [] : {};
        var processIndexOrKey = _.bind(removeNullValuesAndParseEnums, null, parsedMessage);

        if (_.isArray(message)) {
            _.forEach(message, processIndexOrKey);
        } else {
            _.forOwn(message, processIndexOrKey);
        }

        return parsedMessage;
    }

    function removeNullValuesAndParseEnums(parsedMessage, value, key) {
        if (value === null) {
            return;
        }

        if (_.isObject(value) || _.isArray(value)) {
            return parsedMessage[key] = parseProtobufMessage(value);
        }

        if (!_.isString(value) || !_.isString(key)) {
            return parsedMessage[key] = value;
        }

        var prefixedByKey = _.startsWith(value.toLowerCase(), key.toLowerCase());
        var valueParsedWithoutKey = prefixedByKey ? value.substring(key.length, value.length).toLowerCase() : value;

        parsedMessage[key] = valueParsedWithoutKey;
    }

    function applyVendorSpecificLogic(config) {
        if (phenixRTC.browser === 'Firefox') {
            removeTurnsServers(config);
        }

        return config;
    }

    function removeTurnsServers(config) {
        if (!config) {
            return config;
        }

        _.forEach(config.iceServers, function(server) {
            server.urls = _.filter(server.urls, function(url) {
                return !_.startsWith(url, 'turns');
            });
        });

        return config;
    }

    var isMobile = function() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        return isIOS() || /Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent);
    };

    var isIOS = function() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        return /iPad|iPhone|iPod/.test(userAgent) && !phenixRTC.global.MSStream;
    };

    function getIOSVersion() {
        var userAgent = _.get(phenixRTC, ['global', 'navigator', 'userAgent'], '');

        if (/iP(hone|od|ad)/.test(userAgent)) {
            var version = userAgent.match(/.*OS (\d+)_(\d+)_?(\d+)? like Mac OS X/);

            return {
                major: parseInt(_.get(version, [1], 0), 10),
                minor: parseInt(_.get(version, [2], 0), 10),
                patch: parseInt(_.get(version, [3], 0), 10)
            };
        }
    }

    var setGroupLineOrderToMatchMediaSectionOrder = function(sdp) {
        var groupLineSegment = sdp.match(/(?=a=group:BUNDLE).*/);
        var mediaSegmentNamesString = _.get(_.get(groupLineSegment, [0], '').split('a=group:BUNDLE '), [1], '');
        var mediaSegmentNames = mediaSegmentNamesString.split(' ');

        var sortedMediaSegmentNames = mediaSegmentNames.sort(function(nameA, nameB) {
            return sdp.indexOf('m=' + nameA) > sdp.indexOf('m=' + nameB);
        });

        if (sortedMediaSegmentNames.length > 0) {
            sdp = sdp.replace(mediaSegmentNamesString, sortedMediaSegmentNames.join(' '));
        }

        return sdp;
    };

    return PCast;
});