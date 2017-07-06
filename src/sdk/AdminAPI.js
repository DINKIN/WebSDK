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
    './LodashLight',
    './assert',
    './http'
], function (_, assert, http) {
    'use strict';

    function AdminAPI(backendUri, authenticationData) {
        assert.stringNotEmpty(backendUri, 'backendUri');
        assert.isObject(authenticationData, 'authenticationData');

        this._backendUri = backendUri;
        this._authenticationData = authenticationData;
    }

    AdminAPI.prototype.createAuthenticationToken = function createAuthenticationToken(callback) {
        var data = appendAuthDataTo.call(this, {});

        http.postWithRetry(this._backendUri + '/auth', 'JSON', JSON.stringify(data), _.bind(handleResponse, this, callback), 1);
    };

    AdminAPI.prototype.createStreamTokenForPublishing = function createStreamTokenForPublishing(sessionId, capabilities, callback) {
        assert.stringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        var data = appendAuthDataTo.call(this, {
            sessionId: sessionId,
            capabilities: capabilities
        });

        http.postWithRetry(this._backendUri + '/stream', 'JSON', JSON.stringify(data), _.bind(handleResponse, this, callback), 1);
    };

    AdminAPI.prototype.createStreamTokenForSubscribing = function createStreamTokenForSubscribing(sessionId, capabilities, streamId, callback) {
        assert.stringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        var data = appendAuthDataTo.call(this, {
            sessionId: sessionId,
            capabilities: capabilities,
            originStreamId: streamId
        });

        http.postWithRetry(this._backendUri + '/stream', 'JSON', JSON.stringify(data), _.bind(handleResponse, this, callback), 1);
    };

    AdminAPI.prototype.getStreams = function getStreams(callback) {
        http.getWithRetry(this._backendUri + '/streams', _.bind(handleResponse, this, callback), 1);
    };

    function appendAuthDataTo(data) {
        return _.assign(data, this._authenticationData);
    }

    function handleResponse(callback, error, response) {
        if (error) {
            return callback(error, {});
        }

        var res = JSON.parse(response);

        if (res.status !== 'ok') {
            return callback(null, {status: res.status});
        }

        return callback(null, res);
    }

    return AdminAPI;
});