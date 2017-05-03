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
    '../observable/Observable',
    '../observable/ObservableArray',
    './Stream',
    './member.json'
], function (_, assert, Observable, ObservableArray, Stream, member) {
    'use strict';
    var memberRoles = member.roles;
    var memberStates = member.states;

    function Member(state, sessionId, screenName, role, streams, lastUpdate, roomService) {
        this.init(state, sessionId, screenName, role, streams, lastUpdate, roomService);
    }

    Member.prototype.init = function init(state, sessionId, screenName, role, streams, lastUpdate, roomService) {
        assert.isString(sessionId, 'sessionId');
        assert.isString(screenName, 'screenName');
        assert.isArray(streams, 'streams');
        assert.isNumber(_.utc(lastUpdate), 'lastUpdate');

        this._sessionId = new Observable(sessionId);
        this._screenName = new Observable(screenName);
        this._streams = new ObservableArray([]);

        this._state = new Observable(state, assertIsValidMemberState).extend({rateLimit:500});
        this._role = new Observable(role, assertIsValidMemberRole);
        this._lastUpdate = new Observable(lastUpdate, _.utc);
        this._roomService = roomService;

        this.setStreams(streams);
    };

    Member.prototype.getObservableState = function getObservableState() {
        return this._state;
    };

    Member.prototype.getSessionId = function getSessionId() {
        return this._sessionId.getValue();
    };

    Member.prototype.getObservableScreenName = function getObservableScreenName() {
        return this._screenName;
    };

    Member.prototype.getObservableRole = function getObservableRole() {
        return this._role;
    };

    Member.prototype.getObservableStreams = function getObservableStreams() {
        return this._streams;
    };

    Member.prototype.getObservableLastUpdate = function getObservableLastUpdate() {
        return this._lastUpdate;
    };

    Member.prototype.getLastUpdate = function getLastUpdate() {
        return this._lastUpdate.getValue();
    };

    Member.prototype.getStreams = function getStreams() {
        return _.map(this._streams.getValue(), function mapToJson(stream) {
            return stream.toJson();
        })
    };

    Member.prototype.commitChanges = function commitChanges(callback) {
        this._roomService.updateMember(this, callback);
    };

    Member.prototype.reload = function reload() {
        this._roomService.revertMemberChanges(this);
    };

    Member.prototype.setStreams = function setStreams(streams) {
        var newStreams = _.map(streams, function(stream) {
            return createNewObservableStream(stream);
        });

        this._streams.setValue(newStreams);
    };

    Member.prototype.toString = function toString() {
        return this.getObservableRole().getValue() + '[' + this.getObservableScreenName().getValue() + ',' + this.getSessionId() + ']';
    };

    Member.prototype.toJson = function toJson() {
        var member = {
            sessionId: this._sessionId.getValue(),
            screenName: this._screenName.getValue(),
            role: this._role.getValue(),
            state: this._state.getValue(),
            streams: [],
            lastUpdate: this._lastUpdate.getValue()
        };

        _.forEach(this._streams.getValue(), function(stream) {
            member.streams.push(stream.toJson());
        });

        return member;
    };

    Member.prototype._update = function update(member) {
        if (!_.isObject(member)) {
            return;
        }

        if (member.hasOwnProperty('state')) {
            this._state.setValue(member.state);
        }

        if (member.hasOwnProperty('screenName')) {
            this._screenName.setValue(member.screenName);
        }

        if (member.hasOwnProperty('role')) {
            this._role.setValue(member.role);
        }

        if (member.hasOwnProperty('lastUpdate')) {
            this._lastUpdate.setValue(member.lastUpdate);
        }

        if (member.hasOwnProperty('streams')) {
            updateStreams.call(this, member.streams);
        }
    };

    function createNewObservableStream(stream) {
        return new Stream(stream.uri, stream.type, stream.audioState, stream.videoState);
    }

    function updateStreams(streams) {
        // iterate through new streams object, update those that have changed, push new ones, remove old ones
        var oldObservableStreams = this._streams.getValue();
        var newObservableStreams = [];

        _.forEach(streams, function (stream) {
            var streamToUpdate = _.find(oldObservableStreams, function(observableStream) {
                return observableStream.getUri() === stream.uri && observableStream.getType() === stream.type;
            });
            if (streamToUpdate) {
                streamToUpdate._update(stream);
            } else {
                streamToUpdate = createNewObservableStream(stream);
            }

            newObservableStreams.push(streamToUpdate);
        });

        this._streams.setValue(newObservableStreams);
    }

    function assertIsValidMemberRole(role) {
        role = _.getEnumName(memberRoles, role);

        if (!role) {
            throw new Error('"role" must be a valid member role');
        }

        return role;
    }

    function assertIsValidMemberState(state) {
        state = _.getEnumName(memberStates, state);

        if (!state) {
            throw new Error('"state" must be a valid member state');
        }

        return state;
    }

    return Member;
});
