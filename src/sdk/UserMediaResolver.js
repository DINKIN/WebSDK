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
    'phenix-rtc'
], function (_, assert, RTC) {
    'use strict';

    // ToDo: Add supported frame rates [30, 15]
    var aspectRatios = [
        {
            '16x9': [
                {2160: 3840}, // 4k (UHD)
                {1080: 1920}, // 1080p (FHD)
                {768: 1366}, //
                {720: 1280}, // 720p(HD)
                {576: 1024},
                {480: 853}, // 480p
                {360: 640}, // 360p (nHD)
                {180: 320}
            ]
        },
        {
            '4x3': [
                {1200: 1600}, // UXGA
                {1080: 1440},
                {720: 960},
                {600: 800}, // SVGA
                {576: 768},
                {480: 640}, // VGA
                {360: 480},
                {240: 320}, // QVGA
                {120: 160} // QQVGA
            ]
        }
    ];

    function UserMediaResolver(pcast, defaultAspectRatio, defaultResolutionHeight, defaultFrameRate) {
        assert.isObject(pcast, 'pcast');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._defaultAspectRatio = defaultAspectRatio || '16x9';
        this._defaultResolutionHeight = defaultResolutionHeight || 720;
        this._defaultFrameRate = defaultFrameRate || 15;
    }

    UserMediaResolver.prototype.getUserMedia = function getUserMedia(deviceOptions, callback) {
        assert.isObject(deviceOptions, 'deviceOptions');

        var aspectRatioHeights = getObjectValueInArray(this._defaultAspectRatio, aspectRatios);
        var width = getObjectValueInArray(this._defaultResolutionHeight, aspectRatioHeights) || calculateWidthByAspectRatio(this._defaultResolutionHeight, this._defaultAspectRatio);
        var resolution = {
            height: this._defaultResolutionHeight,
            width: width,
            aspectRatio: this._defaultAspectRatio
        };

        getUserMediaWithOptions.call(this, deviceOptions, resolution, this._defaultFrameRate, callback);
    };

    UserMediaResolver.prototype.getVendorSpecificConstraints = function getVendorSpecificConstraints(deviceOptions, resolution, frameRate) {
        resolution = resolution || {};

        if (!deviceOptions || (!deviceOptions.audio && ! deviceOptions.video && !deviceOptions.screen)) {
            throw new Error('Invalid device options. Must pass in at least one device option.');
        }

        if ((RTC.browser === 'Firefox' && RTC.browserVersion > 38)
            || (RTC.browser === 'Chrome' && RTC.browserVersion > 52)
            || (RTC.browser === 'Safari' && RTC.browserVersion > 10)
            || (RTC.browser === 'Opera' && RTC.browserVersion > 40)) {
            return setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate);
        }

        if (RTC.browser === 'Edge') {
            return setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate);
        }

        return setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate);
    };

    function calculateWidthByAspectRatio(height, aspectRatio) {
        switch (aspectRatio) {
        case '16x9':
            return roundUpToNearestEvenNumber((16 / 9) * height);
        case '4x3':
            return roundUpToNearestEvenNumber((4 / 3) * height);
        default:
            throw new Error('Aspect Ratio not supported');
        }
    }

    function roundUpToNearestEvenNumber(value) {
        assert.isNumber(value, 'value');

        return 2 * Math.floor((value + 1) / 2);
    }

    function setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: height,
                width: width,
                frameRate: frameRate
            };

            if (video.deviceId) {
                constraints.video.deviceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = true;

            if (audio.deviceId) {
                constraints.audio = {deviceId: audio.deviceId};
            }
        }

        if (screen) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.deviceId = {exact: video.deviceId};
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = true;

            if (audio.deviceId) {
                constraints.audio = {deviceId: {exact: audio.deviceId}};
            }
        }

        if (screen) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.mandatory.sourceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.mandatory.minWidth;
                delete constraints.video.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.video.mandatory.minHeight;
                delete constraints.video.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.video.mandatory.maxFrameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            if (audio.deviceId) {
                constraints.audio = {mandatory: {sourceId: audio.deviceId}};
            }
        }

        return constraints;
    }

    function getUserMediaWithOptions(deviceOptions, resolution, frameRate, callback) {
        var constraints = this.getVendorSpecificConstraints(deviceOptions, resolution || {}, frameRate);
        var hasVideo = !!constraints.video;
        var that = this;

        this._pcast.getUserMedia(constraints, function (pcast, status, userMedia, error) {
            if (status === 'ok') {
                return callback(null, {
                    userMedia: userMedia,
                    options: {
                        frameRate: hasVideo ? frameRate : null,
                        resolution: hasVideo ? resolution.height : null,
                        aspectRatio: hasVideo ? resolution.aspectRatio : null
                    }
                });
            }

            var nextResolution = resolution;
            var nextFrameRate = frameRate;
            var constraintName = getConstraintNameFromError(error);

            if (error && (error.name === 'ConstraintNotSatisfiedError' || error.name === 'OverconstrainedError') || error.constructor.name === 'OverconstrainedError') {
                switch (constraintName.toLowerCase()) {
                case 'width':
                case 'height':
                    if (!resolution) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, callback);
                case 'framerate':
                default:
                    // Always try without frame rate if constraint name not defined

                    if (!frameRate) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] and framerate [%s]. Retrying without frame rate constraint.', constraintName, frameRate);
                    nextFrameRate = null;

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, callback);
                }
            }

            that._logger.error('Unable to get user media with status [%s]', status, error);

            return callback(error);
        });
    }

    function getConstraintNameFromError(error) {
        if (error.constraintName) {
            return error.constraintName;
        }

        if (error.constraint) {
            return error.constraint;
        }

        return '';
    }

    function getNextResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);

        if (!_.isNumber(heightIndex)) {
            heightIndex = getClosestKeyIndex(height, aspectRatioHeights);
        } else {
            if (heightIndex === aspectRatioHeights.length - 1) {
                heightIndex = 0;

                if (heightIndex === aspectRatioHeights.length - 1) {
                    return null;
                }

                aspectRatioIndex++;
            } else {
                heightIndex++;
            }
        }

        var newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        var newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        var newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        var newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight),
            width: parseInt(newWidth)
        };
    }

    function getObjectValueInArray(value, collection) {
        var valueObject = _.find(collection, function (item) {
            return item.hasOwnProperty(value);
        });

        return valueObject ? valueObject[value] : null;
    }

    function getIndexInArray(value, collection) {
        return _.findIndex(collection, function (item) {
            return item.hasOwnProperty(value);
        });
    }

    function getIndexKey(index, collection) {
        var keys = _.keys(collection[index]);

        return keys[0];
    }

    function getIndexValue(index, collection) {
        var keys = _.keys(collection[index]);

        return collection[index][keys[0]];
    }

    function getClosestKeyIndex(value, collection) {
        _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    return UserMediaResolver;
});