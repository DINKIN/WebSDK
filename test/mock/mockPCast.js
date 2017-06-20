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
    'sdk/observable/Observable',
    'sdk/logging/Logger',
    'sdk/PCastProtocol',
    'sdk/PCast'
], function (Observable, Logger, Protocol, PCast) {
    return function MockPCast () {
        var pcast = sinon.createStubInstance(PCast);
        var logger = sinon.createStubInstance(Logger);
        var protocol = sinon.createStubInstance(Protocol);
        var sessionId = new Observable('mockSessionId');
        var status = new Observable('online');

        pcast.getLogger = function() { return logger; };
        pcast.getProtocol = function() { return protocol; };
        pcast.getStatus = function() { return 'online'; };
        pcast.getObservableStatus = function() { return status; };
        protocol.getSessionId = function() { return 'mockSessionId'; };
        protocol.getObservableSessionId = function() { return sessionId; };

        return pcast;
    }
});