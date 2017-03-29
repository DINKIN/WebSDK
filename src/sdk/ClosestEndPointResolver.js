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
    './Http',
    './Time'
], function (Http, Time) {
    'use strict';

    var measurementsPerEndPoint = 4;

    function ClosestEndPointResolver(onClosestEndpointFound, version, baseUri, logger) {
        this._done = false;
        this._minTime = Number.MAX_VALUE;
        this._minResponseText = '';
        this._onClosestEndpointFound = onClosestEndpointFound;
        this._logger = logger;
        this._version = version;
        this._http = new Http(version, baseUri, logger);
    }

    ClosestEndPointResolver.prototype.isResolved = function isResolved() {
        return this._done;
    };

    ClosestEndPointResolver.prototype.measurementCallback = function measurementCallback(endPoint, time, responseText) {
        if (time < this._minTime) {
            this._logger.info('Current closest end point is [%s] with latency of [%s] ms', responseText, time);
            this._minTime = time;
            this._minResponseText = responseText;
        }

        return this.isResolved();
    };

    ClosestEndPointResolver.prototype.completeCallback = function completeCallback(endPoint) {
        if (this._minResponseText && this._minTime < Number.MAX_VALUE && !this.isResolved()) {
            this._done = true;
            return this._onClosestEndpointFound(undefined, this._minResponseText);
        }
    };

    ClosestEndPointResolver.prototype.resolveAll = function resolveAll(endPoints) {
        for (var i = 0; i < endPoints.length; i++) {
            this.resolve(endPoints[i], measurementsPerEndPoint);
        }
    };

    ClosestEndPointResolver.prototype.resolve = function resolve(endPoint, measurements) {
        var that = this;
        var measurement = 1;

        var nextMeasurement = function nextMeasurement(endPoint) {
            var maxAttempts = 1;
            var start = Time.now();

            that._logger.info('[%s] Checking end point [%s]', measurement, endPoint);

            that._http.httpGetWithRetry.call(that, endPoint, function (err, responseText) {
                var end = Time.now();
                var time = end - start;

                that._logger.info('[%s] End point [%s] latency is [%s] ms', measurement, endPoint, time);

                measurement++;

                if (!err) {
                    if (that.measurementCallback(endPoint, time, responseText)) {
                        // done
                        return;
                    }
                }

                if (measurement <= measurements && !that.isResolved()) {
                    if (err) {
                        that._logger.info('Retrying after failure to resolve end point [%s]', endPoint, err);
                    }

                    return nextMeasurement(endPoint);
                } else {
                    return that.completeCallback(endPoint);
                }
            }, maxAttempts);
        };

        nextMeasurement(endPoint);
    };

    return ClosestEndPointResolver;
});
