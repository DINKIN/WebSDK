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
    '../LodashLight',
    '../assert',
    '../http',
    'ByteBuffer',
    '../MQProtocol',
    'phenix-rtc',
    './logging.json'
], function (_, assert, http, ByteBuffer, MQProtocol, rtc, logging) {

    function AnalytixAppender() {
        this._environmentName = '%ENVIRONMENT%' || '?';
        this._environmentVersion = '%VERSION%' || '?';
        this._loggingUrl = '/analytix/logs';
        this._source = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._protocol = new MQProtocol();
        this._maxAttempts = 3;
        this._maxBufferedRecords = 1000;
        this._maxBatchSize = 100;
        this._records = [];
        this._pending = false;
        this._userId = '';
        this._baseUri = '';
        this._minLevel = logging.level.TRACE;
        this._isEnabled = true;
    }

    AnalytixAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level);

        this._minLevel = level;
    };

    AnalytixAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    AnalytixAppender.prototype.setUri = function setUri(uri) {
        assert.stringNotEmpty(uri, 'uri');

        this._baseUri = uri;
    };

    AnalytixAppender.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    AnalytixAppender.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled);

        this._isEnabled = enabled;
    };

    AnalytixAppender.prototype.log = function log(since, level, category, messages, sessionId, userId, context) {
        if (context.level < this._minLevel) {
            return;
        }

        assert.isArray(messages);

        addMessagesToRecords.call(this, since, level, category, messages, sessionId, userId);

        deleteRecordsIfAtCapacity.call(this, since, sessionId, userId);

        sendBatchMessagesIfNonePending.call(this);
    };

    function addMessagesToRecords(since, level, category, messages, sessionId, userId) {
        var message = messages.join(' ');
        var record = {
            level: level,
            timestamp: _.now().toString(),
            category: category,
            message: message,
            source: this._source,
            sessionId: sessionId,
            userId: userId,
            environment: this._environmentName,
            version: this._environmentVersion,
            runtime: since
        };

        this._records.push(record);
    }

    function deleteRecordsIfAtCapacity(since, sessionId, userId) {
        if (this._records.length > this._maxBufferedRecords) {
            var deleteRecords = this._records.length - (this._maxBufferedRecords / 2);

            this._records = this._records.slice(deleteRecords);
            this._records.unshift({
                level: 'Warn',
                timestamp: _.now().toString(),
                category: 'websdk/analytixLogger',
                message: 'Deleted ' + deleteRecords + ' records',
                source: 'Browser',
                sessionId: sessionId,
                userId: userId,
                environment: this._environmentName,
                version: this._environmentVersion,
                runtime: since
            });
        }
    }

    function sendBatchMessagesIfNonePending() {
        if (this._pending || !this._baseUri || !this._isEnabled) {
            return;
        }

        var storeLogRecords = {
            records: _.take(this._records, this._maxBatchSize)
        };

        this._records = this._records.slice(this._maxBatchSize);
        this._pending = true;

        try {
            sendEncodedHttpRequest.call(this, this._baseUri + this._loggingUrl, storeLogRecords);
        } catch (e) {
            this._pending = false;

            throw e;
        }
    }

    function sendEncodedHttpRequest(url, dataToEncode) {
        var that = this;

        var data = this._protocol.encode('analytix.StoreLogRecords', dataToEncode).toBinary();

        function handlePost(error, result) {
            that._pending = false;

            if (error) {
                return {storedRecords: 0, status: 'error'};
            }

            return that._protocol.decode('analytix.StoreLogRecordsResponse', ByteBuffer.fromBinary(result));
        }

        http.postWithRetry(url, 'protobuf', data, handlePost, this._maxAttempts);
    }

    return AnalytixAppender;
});