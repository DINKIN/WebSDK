/**
 * Copyright 2017 PhenixP2P Inc. All Rights Reserved.
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
    './PCastExpress',
    '../room/room.json',
    '../room/member.json'
], function (_, assert, PCastExpress, roomEnums, memberEnums) {
    'use strict';

    function RoomExpress(options) {
        assert.isObject(options, 'options');
        assert.stringNotEmpty(options.backendUri, 'options.backendUri');
        assert.isObject(options.authenticationData, 'options.authenticationData');

        this._pcastExpress = new PCastExpress(options);
        this._roomServices = [];
    }

    RoomExpress.prototype.stop = function stop() {
        this._pcastExpress.stop();
    };

    RoomExpress.prototype.getPCastExpress = function getPCastExpress() {
        return this._pcastExpress;
    };

    RoomExpress.prototype.createRoom = function createRoom(options, callback) {
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');
        assert.stringNotEmpty(options.room.name, 'options.room.name');
        assert.stringNotEmpty(options.room.type, 'options.room.type');

        if (options.room.description) {
            assert.stringNotEmpty(options.room.description, 'options.room.description');
        }

        var roomDescription = options.room.description || getDefaultRoomDescription(options.room.type);

        this._pcastExpress.createRoomService(function(error, roomServiceResponse) {
            if (error) {
                return callback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return callback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;
            var roomToCreate = _.assign({}, options.room);

            if (!roomToCreate.description) {
                roomToCreate.description = roomDescription;
            }

            roomService.createRoom(roomToCreate, function (error, roomResponse) {
                if (error) {
                    roomService.stop();

                    return callback(error);
                }

                if (roomResponse.status !== 'already-exists' && roomResponse.status !== 'ok') {
                    roomService.stop();
                }

                roomResponse.roomService = roomService;

                return callback(null, roomResponse);
            });
        });
    };

    RoomExpress.prototype.createChannel = function createChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isObject(options.room, 'options.room');

        var createRoomOptions = _.assign({}, options);

        createRoomOptions.room.type = roomEnums.types.channel.name;

        this.createRoom(createRoomOptions, callback);
    };

    RoomExpress.prototype.joinRoom = function joinRoom(options, joinRoomCallback, membersChangedCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinRoomCallback, 'joinRoomCallback');
        assert.isFunction(membersChangedCallback, 'membersChangedCallback');
        assert.stringNotEmpty(options.role, 'options.role');

        if (options.screenName) {
            assert.stringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.roomId) {
            assert.stringNotEmpty(options.roomId, 'options.roomId');
        }

        if (options.alias) {
            assert.stringNotEmpty(options.alias, 'options.alias');
        }

        var that = this;
        var role = options.role;
        var screenName = options.screenName || _.uniqueId();

        this._pcastExpress.createRoomService(function(error, roomServiceResponse) {
            if (error) {
                return joinRoomCallback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return joinRoomCallback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;

            that._roomServices.push(roomService);

            roomService.start(role, screenName);

            roomService.enterRoom(options.roomId, options.alias, function(error, roomResponse) {
                if (error) {
                    roomService.stop();

                    return joinRoomCallback(error);
                }

                if (roomResponse.status === 'not-found') {
                    roomService.stop();

                    return joinRoomCallback(null, {status: 'room-not-found'});
                }

                if (roomResponse.status !== 'ok') {
                    roomService.stop();

                    return joinRoomCallback(null, roomResponse);
                }

                var room = roomResponse.room;
                var roomServiceLeaveRoom = roomService.leaveRoom;

                roomService.leaveRoom = function leaveRoom(callback) {
                    roomServiceLeaveRoom.call(roomService, function(error, response) {
                        if (error) {
                            roomService.stop();

                            return callback(error);
                        }

                        if (response.status !== 'ok') {
                            return callback(null, response);
                        }

                        roomService.stop();
                    });
                };

                joinRoomCallback(null, {
                    status: 'ok',
                    roomService: roomService
                });

                that._membersSubscription = room.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});
            });
        });
    };

    RoomExpress.prototype.joinChannel = function joinChannel(options, joinChannelCallback, subscriberCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinChannelCallback, 'joinChannelCallback');
        assert.isFunction(subscriberCallback, 'subscriberCallback');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        var channelOptions = _.assign({
            type: roomEnums.types.channel.name,
            role: memberEnums.roles.audience.name
        }, options);
        var lastMediaStream;
        var lastStreamId;
        var that = this;

        var joinRoomCallback = function(error, response) {
            var channelResponse = !response || _.assign({}, response);

            if (response && response.roomService) {
                var leaveRoom = response.roomService.leaveRoom;

                channelResponse.roomService.leaveRoom = function(callback) {
                    if (lastMediaStream) {
                        lastMediaStream.stop();
                    }

                    leaveRoom(callback);
                };
            }

            joinChannelCallback(error, channelResponse);
        };

        this.joinRoom(channelOptions, joinRoomCallback, function membersChangedCallback(members) {
            var presenters = _.filter(members, function(member) {
                return member.getObservableRole().getValue() === memberEnums.roles.presenter.name;
            });
            var mostRecentPresenter = _.reduce(presenters, function(presenterA, presenterB) {
                if (!presenterA) {
                    return presenterB;
                }

                return presenterA.getLastUpdate() > presenterB.getLastUpdate() ? presenterA : presenterB;
            });

            if (!mostRecentPresenter) {
                return subscriberCallback(null, {status: 'no-stream-playing'});
            }

            var presenterStream = mostRecentPresenter.getObservableStreams().getValue()[0];

            if (!presenterStream) {
                return subscriberCallback(null, {status: 'no-stream-playing'});
            }

            var streamId = parsePcastFromStream(presenterStream.getUri());

            if (!streamId) {
                return subscriberCallback(null, {status: 'no-stream-playing'});
            }

            if (streamId === lastStreamId) {
                return;
            } else if (lastStreamId) {
                lastMediaStream.stop();
            }

            var subscribeOptions = {
                capabilities: options.capabilities,
                videoElement: options.videoElement,
                streamId: streamId,
                monitor: {
                    callback: _.bind(monitorSubsciberOrPublisher, that, subscriberCallback),
                    options: {conditionCountForNotificationThreshold: 8}
                }
            };

            var successReason = lastStreamId ? 'stream-override' : 'stream-started';

            lastStreamId = streamId;

            var mediaStreamCallback = function mediaStreamCallback(error, response) {
                if (response && response.mediaStream) {
                    lastMediaStream = response.mediaStream;
                } else {
                    lastStreamId = null;
                    lastMediaStream = null;
                }

                subscriberCallback(error, response);
            };

            subscribeToMemberStream.call(that, subscribeOptions, mediaStreamCallback, successReason);
        });
    };

    RoomExpress.prototype.publishToRoom = function publishToRoom(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');

        if (options.streamUri) {
            assert.stringNotEmpty(options.streamUri, 'options.streamUri');
        } else if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.screenName) {
            assert.stringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.capabilities) {
            assert.isArray(options.capabilities);
        }

        if (options.tags) {
            assert.isArray(options.tags);
        }

        var that = this;
        var role = memberEnums.roles.audience.name;
        var screenName = options.screenName || _.uniqueId();

        this.createRoom(options, function(error, createRoomResponse) {
            if (error) {
                return callback(error);
            }

            if (createRoomResponse.status !== 'ok' && createRoomResponse.status !== 'already-exists') {
                return callback(null, createRoomResponse);
            }

            var roomService = createRoomResponse.roomService;
            var room = createRoomResponse.room;

            roomService.start(role, screenName);

            var publishOptions = _.assign({
                monitor: {
                    callback: _.bind(monitorSubsciberOrPublisher, that, callback),
                    options: {conditionCountForNotificationThreshold: 8}
                }
            }, options);

            if (options.streamUri) {
                var remoteOptions = _.assign({connectOptions: []}, publishOptions);
                var hasRoomConnectOptions = _.find(remoteOptions.connectOptions, function(option) {
                    return option.startsWith('room-id');
                });

                if (!hasRoomConnectOptions) {
                    remoteOptions.connectOptions = remoteOptions.connectOptions.concat([
                        'room-id=' + room.getRoomId(),
                        'member-role=Presenter',
                        'member-stream-type=Presentation',
                        'screen-name=' + screenName
                    ]);
                }

                that._pcastExpress.publishRemote(remoteOptions, callback);
            } else if (room.getObservableType().getValue() === roomEnums.types.channel.name) {
                var localOptions = _.assign({tags: []}, publishOptions);
                var hasChannelTag = _.find(localOptions.tags, function(tag) {
                    return tag.startsWith('channelId');
                });

                if (!hasChannelTag) {
                    localOptions.tags = localOptions.tags.concat([
                        'channelId:' + room.getRoomId()
                    ]);
                }

                if (!_.includes(localOptions.capabilities, 'channel')) {
                    localOptions.capabilities.push('channel');
                }

                that._pcastExpress.publish(localOptions, callback);
            }
        });
    };

    RoomExpress.prototype.publishToChannel = function publishToChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var channelOptions = _.assign({}, options);

        options.room.type = roomEnums.types.channel.name;

        this.publishToRoom(channelOptions, callback);
    };

    function subscribeToMemberStream(subscribeOptions, callback, successReason) {
        var that = this;

        var count = 0;

        that._pcastExpress.subscribe(subscribeOptions, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok' && response.status !== 'streaming-not-ready') {
                return callback(null, response);
            }

            count++;

            if (response.status === 'streaming-not-ready' && count < 3) {
                return setTimeout(response.retry, count * count * 1000);
            } else if (response.status === 'streaming-not-ready' && count >= 3) {
                return callback(null, {status: response.status});
            }

            var subscribeResponse = _.assign({}, response, {
                status: 'ok',
                reason: successReason
            });

            if (count > 1) {
                subscribeResponse.reason = 'stream-failure-recovered';

                return callback(null, subscribeResponse);
            }

            callback(null, subscribeResponse);
        });
    }

    function monitorSubsciberOrPublisher(callback, error, response) {
        if (error) {
            return callback(error);
        }

        if (response.retry) {
            return response.retry();
        }

        callback(error, response);
    }

    function getDefaultRoomDescription(type) {
        switch(type) {
        case roomEnums.types.channel.name:
            return 'Room Channel';
        case roomEnums.types.moderatedChat.name:
            return 'Moderated Chat';
        case roomEnums.types.multiPartyChat.name:
            return 'Multi Party Chat';
        case roomEnums.types.townHall.name:
            return 'Town Hall';
        case roomEnums.types.directChat.name:
            return 'Direct Chat';
        default:
            throw new Error('Unsupported Room Type');
        }
    }

    var pcastStreamPrefix = 'pcast://phenixp2p.com/';

    function parsePcastFromStream(uri) {
        var hasPrefix = uri.indexOf(pcastStreamPrefix) > -1;

        if (!hasPrefix) {
            return null;
        }

        return uri.replace(pcastStreamPrefix, '');
    }

    function addPublishedStreams(publishedStream) { // eslint-disable-line no-unused-vars
        var self = this._roomService.getSelf();
        var streams = self.getStreams();

        publishedStream.uri = 'pcast://phenixp2p.com/' + publishedStream.uri;
        streams.push(publishedStream);
        self.setStreams(streams);
    }

    return RoomExpress;
});