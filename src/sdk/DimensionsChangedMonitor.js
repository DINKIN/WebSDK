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
], function () {
    'use strict';

    var defaultPollFrequency = 500;
    var minimumPollFrequency = 15;

    function DimensionsChangedMonitor(logger) {
        if (!logger) {
            throw new Error("'logger' must be specified.");
        }
        this._logger = logger;
        this._dimensionsChangedIntervalId = null;
        this._videoDisplayDimensionsChangedCallback = null;
        this._toBeStarted = false;
        this._videoElement = null;
        this._dimensionsChangedData = {
            pollFrequency: defaultPollFrequency,
            previousWidth: 0,
            previousHeight: 0
        };
        this._renderer = null;
    }

    DimensionsChangedMonitor.prototype.start = function start(renderer, element) {
        startMonitor.call(this, renderer, element);
    };

    DimensionsChangedMonitor.prototype.stop = function stop() {
        stopMonitor.call(this);
    };

    DimensionsChangedMonitor.prototype.setVideoDisplayDimensionsChangedCallback = function setVideoDisplayDimensionsChangedCallback(callback, options) {
        updateVideoDisplayDimensionsChangedCallback.call(this, callback, options);
    };

    DimensionsChangedMonitor.prototype.toString = function () {
        return 'DimensionsChangedMonitor[pollFrequency=' + this._dimensionsChangedData.pollFrequency +
            ', previousHeight=' + this._dimensionsChangedData.previousHeight +
            ', previousWidth=' + this._dimensionsChangedData.previousHeight +
            ', state=' + (this._dimensionsChangedIntervalId ? 'running' : 'stopped') + ']';
    };

    function startMonitor(renderer, element) {
        if (!element || element.videoWidth === undefined) {
            this._logger.warn("Attempting to start dimensions changed monitor without providing proper 'video' element.");
        }

        this._renderer = renderer;
        this._videoElement = element;
        this._toBeStarted = true;
        startInterval.call(this);
    }

    function stopMonitor() {
        this._toBeStarted = false;
        if (this._dimensionsChangedIntervalId) {
            clearInterval(this._dimensionsChangedIntervalId);
            this._dimensionsChangedIntervalId = null;
        }
    }

    function updateVideoDisplayDimensionsChangedCallback(callback, options) {
        if (callback === null) {
            this._videoDisplayDimensionsChangedCallback = null;
            stopMonitor.call(this);
            return;
        }

        if (typeof callback !== 'function') {
            throw new Error('"callback" must be a function');
        }

        this._videoDisplayDimensionsChangedCallback = callback;
        if (options && options.pollFrequency) {
            this._dimensionsChangedData.pollFrequency = options.pollFrequency >= minimumPollFrequency ? options.pollFrequency : minimumPollFrequency;
        }
        startInterval.call(this);
    }

    function startInterval() {
        //return if either:
        // - start hasn't been called yet
        // - the interval is already running
        // - there is no callback yet
        if (!this._toBeStarted || this._dimensionsChangedIntervalId || !this._videoDisplayDimensionsChangedCallback) {
            return;
        }

        var that = this;
        this._dimensionsChangedData.previousWidth = this._videoElement.videoWidth;
        this._dimensionsChangedData.previousHeight = this._videoElement.videoHeight;

        this._dimensionsChangedIntervalId = setInterval(function checkVideoDimensions() {
            if (that._videoElement.videoWidth !== that._dimensionsChangedData.previousWidth || that._videoElement.videoHeight !== that._dimensionsChangedData.previousHeight) {
                that._dimensionsChangedData.previousWidth = that._videoElement.videoWidth;
                that._dimensionsChangedData.previousHeight = that._videoElement.videoHeight;
                that._videoDisplayDimensionsChangedCallback(that._renderer, {
                    width: that._videoElement.videoWidth,
                    height: that._videoElement.videoHeight
                });
            }
        }, that._dimensionsChangedData.pollFrequency);
    }

    return DimensionsChangedMonitor;
});
