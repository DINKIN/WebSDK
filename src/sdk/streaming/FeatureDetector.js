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
    'phenix-rtc',
    './PhenixLiveStream',
    './stream.json'
], function(_, assert, rtc, PhenixLiveStream, streamEnums) {
    'use strict';

    var defaultFeatures = [
        streamEnums.types.realTime.name,
        streamEnums.types.rtmp.name,
        streamEnums.types.dash.name,
        streamEnums.types.hls.name
    ];

    function FeatureDetector(features) {
        features = features || defaultFeatures;

        assert.isArray(features, 'features');

        _.forEach(features, function(feature) {
            assert.isValidType(feature, streamEnums.types, 'streamType');
        });

        this._features = features;
    }

    FeatureDetector.isFeatureSupported = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        switch (feature) {
        case streamEnums.types.realTime.name:
            return rtc.webrtcSupported;
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
        case streamEnums.types.rtmp.name:
            return PhenixLiveStream.canPlaybackType(feature);
        default:
            return false;
        }
    };

    FeatureDetector.mapFeatureToPCastCapability = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        switch (feature) {
        case streamEnums.types.realTime.name:
            return 'real-time';
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
            return 'streaming';
        case streamEnums.types.rtmp.name:
            return 'rtmp';
        default:
            return '';
        }
    };

    FeatureDetector.mapPCastCapabilitiesToFeatures = function(capabilities) {
        assert.isArray(capabilities, 'capabilities');

        return _.reduce(capabilities, function(features, capability) {
            return features.concat(FeatureDetector.mapPCastCapabilityToFeatures(capability));
        }, []);
    };

    FeatureDetector.mapPCastCapabilityToFeatures = function(capability) {
        if (capability) {
            assert.isStringNotEmpty(capability, 'capability');
        }

        if (capability === 'real-time') {
            return [streamEnums.types.realTime.name];
        }

        if (capability === 'streaming') {
            return [streamEnums.types.dash.name, streamEnums.types.dash.name];
        }

        if (capability === 'rtmp') {
            return [streamEnums.types.rtmp.name];
        }

        return [];
    };

    FeatureDetector.prototype.getFeaturePCastCapabilities = function() {
        var capabilities = _.map(this._features, FeatureDetector.mapFeatureToPCastCapability);

        return _.reduce(capabilities, removeDuplicates, []);
    };

    FeatureDetector.prototype.getPreferredFeatureFromPublisherCapabilities = function(capabilities, excludeRealTime) {
        assert.isArray(capabilities, 'capabilities');

        var preferredFeature = _.reduce(this._features, function(candidateFeature, feature) {
            var featureCapability = FeatureDetector.mapFeatureToPCastCapability(feature);
            var isFeatureAvailableAndCanPlayBack = FeatureDetector.isFeatureSupported(feature) && (_.includes(capabilities, featureCapability) || (feature === 'real-time' && !excludeRealTime));
            var nextFeature = isFeatureAvailableAndCanPlayBack ? feature : null;

            return candidateFeature || nextFeature;
        }, null);

        if (preferredFeature === streamEnums.types.dash.name && FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.hls.name)) && _.includes(this._features, streamEnums.types.hls.name)) {
            preferredFeature = streamEnums.types.hls.name;
        } else if (preferredFeature === streamEnums.types.hls.name && !FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.dash.name)) && _.includes(this._features, streamEnums.types.dash.name)) {
            preferredFeature = streamEnums.types.dash.name;
        }

        return preferredFeature;
    };

    FeatureDetector.shouldUseNativeHls = isIOS() || rtc.browser === 'Safari';

    function isIOS() {
        var userAgent = _.get(rtc, ['global', 'navigator', 'userAgent'], '');

        return /iPad|iPhone|iPod/.test(userAgent) && !rtc.global.MSStream;
    }

    function removeDuplicates(list, item) {
        if (!_.includes(list, item)) {
            list.push(item);
        }

        return list;
    }

    return FeatureDetector;
});