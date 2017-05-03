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
    '../Logger',
    '../authentication/AuthenticationService',
    './Room',
    './Member',
    '../chat/RoomChatService',
    './room.json',
    './member.json'
], function (_, assert, Observable, ObservableArray, Logger, AuthenticationService, Room, Member, RoomChatService, room, member) {
    'use strict';

    function RoomService(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol =  pcast.getProtocol();

        this._self = new Observable(null);
        this._activeRoom = new Observable(null);
        this._cachedRoom = new Observable(null);
        this._roomChatService = null;

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');

        this._authService = new AuthenticationService(this._pcast);
    };

    RoomService.prototype.start = function start(role, screenName) {
        assert.stringNotEmpty(role, 'role');
        assert.stringNotEmpty(screenName, 'screenName');

        this._authService.start();

        var myState = member.states.passive.name;
        var mySessionId = this._authService.getPCastSessionId();
        var myScreenName = screenName;
        var myStreams = [];
        var myLastUpdate = _.now();

        var self = new Member(myState, mySessionId, myScreenName, role, myStreams, myLastUpdate);

        this._self = new Observable(self);
        this._disposables = [];

        var disposeOfRoomEventHandler = this._protocol.on('roomEvent', _.bind(onRoomEvent, this));

        this._disposables.push(disposeOfRoomEventHandler);

        setupSubscriptions.call(this);

        return self;
    };

    RoomService.prototype.getRoomInfo = function getRoomInfo(roomId, alias, callback) {
        if (roomId) {
            assert.stringNotEmpty('roomId', roomId);
        } else {
            assert.stringNotEmpty('alias', alias);
        }
        assert.isFunction(callback);

        getRoomInfoRequest.call(this, roomId, alias, callback);
    };

    RoomService.prototype.createRoom = function createRoom(name, type, description, callback) {
        assert.isString(name, 'name');
        assert.isString(type, 'type');
        assert.isString(description, 'description');
        assert.isFunction(callback);

        createRoomRequest.call(this, name, type, description,
            function createRoomSuccess(response) {
                callback(response.room);
            }
        );
    };

    RoomService.prototype.enterRoom = function enterRoom(roomId, alias, callback) {
        if (roomId) {
            assert.stringNotEmpty('roomId', roomId);
        } else {
            assert.stringNotEmpty('alias', alias);
        }
        assert.isFunction(callback);

        enterRoomRequest.call(this, roomId, alias, _.bind(enterRoomSuccess, this, callback));
    };

    RoomService.prototype.leaveRoom = function leaveRoom(callback) {
        var that = this;

        return leaveRoomRequest.call(that,
            function leaveRoomSuccess(status) {
                if (that._roomChatService) {
                    that._roomChatService.stop();
                }

                that._roomChatService = null;

                that._activeRoom.setValue(null);
                that._cachedRoom.setValue(null);
                callback(status);
            }
        );
    };

    RoomService.prototype.getRoomChatService = function getRoomChatService() {
        if (!this._roomChatService && this._activeRoom.getValue()) {
            this._roomChatService = new RoomChatService(this);
        }

        return this._roomChatService;
    };

    RoomService.prototype.getSelf = function getSelf() {
        return this._self.getValue();
    };

    RoomService.prototype.getObservableActiveRoom = function getObservableActiveRoom() {
        return this._activeRoom;
    };

    RoomService.prototype.updateSelf = function updateSelf(callback) {
        assert.isFunction(callback);

        updateMemberRequest.call(this, this.getSelf(), callback);
    };

    RoomService.prototype.updateMember = function updateMember(member, callback) {
        assert.isFunction(callback);
        assert.isObject(member);

        updateMemberRequest.call(this, member, callback);
    };

    RoomService.prototype.updateRoom = function updateRoom(callback) {
        assert.isFunction(callback);

        updateRoomRequest.call(this, callback);
    };

    RoomService.prototype.revertRoomChanges = function revertRoomChanges() {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || !cachedRoom) {
            return this._logger.warn('Unable to revert changes to room. Not currently in a room.');
        }

        activeRoom._update(cachedRoom.toJson());
    };

    RoomService.prototype.revertMemberChanges = function revertMemberChanges(member) {
        assert.isObject(member);

        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);
        var activeMember = findMemberInObservableRoom(member.getSessionId(), this._activeRoom);

        if (!cachedMember || !activeMember) {
            return this._logger.warn('Unable to revert changes to member. Member is currently not in room.');
        }

        activeMember._update(cachedMember.toJson());
    };

    RoomService.prototype.toString = function toString() {
        return 'RoomService';
    };

    RoomService.prototype.stop = function stop() {
        this._authService.stop();

        disposeOfArray(this._disposables);
    };

    function resetSelf(sessionId) {
        var self = this._self.getValue().toJson();

        this._self.setValue(new Member(self.state, sessionId, self.screenName, self.role, self.streams, self.lastUpdate, this));
    }

    function resetRoom() {
        var that = this;

        var activeRoom = that._activeRoom.getValue();

        if (!_.isObject(activeRoom)) {
            return;
        }

        var roomId = activeRoom.getRoomId();
        var alias = activeRoom.getObservableAlias().getValue();

        that.leaveRoom(function() {
            that.enterRoom(roomId, alias, function() {
                that._logger.info('Room Reset Completed');
            });
        });
    }

    function enterRoomSuccess(callback, response) {
        var roomInfo = response.room;
        var members = response.members;

        var room = new Room(roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin, this);
        var cachedRoom = new Room(roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin, this);

        replaceSelfInstanceInRoom.call(this, room);

        this._activeRoom.setValue(room);
        this._cachedRoom.setValue(cachedRoom);

        callback(room, 'ok', null);
    }

    function replaceSelfInstanceInRoom(room) {
        var self = this._self.getValue();
        var members = room.getObservableMembers().getValue();

        var selfIndex = _.findIndex(members, function(member) {
            return self.getSessionId() === member.getSessionId();
        });

        if (!_.isNumber(selfIndex)) {
            throw new Error('Invalid Room State: Self member not in room list of members.');
        }

        self._update(members[selfIndex].toJson());

        members[selfIndex] = self;

        room.getObservableMembers().setValue(members);
    }

    // handle events
    function onRoomEvent(event) {
        assert.isObject(event, 'event');
        assert.isString(event.roomId, 'event.roomId');
        assert.isString(event.eventType, 'event.eventType');
        assert.isArray(event.members, 'event.members');

        _.forEach(event.members, function(member) {
            assert.isObject(member, 'member');
        });

        var that = this;

        switch (event.eventType) {
            case room.events.memberJoined.name:
                that._logger.debug('[%s] Member joined [%s]', event.roomId, event.members);
                return onMembersJoinsRoom.call(that, event.roomId, event.members);
            case room.events.memberLeft.name:
                that._logger.debug('[%s] Member left [%s]', event.roomId, event.members);
                return onMembersLeavesRoom.call(that, event.roomId, event.members);
            case room.events.memberUpdated.name:
                that._logger.debug('[%s] Member updated [%s]', event.roomId, event.members);
                return onMembersUpdated.call(that, event.roomId, event.members);
            case room.events.roomUpdated.name:
                that._logger.debug('[%s] Room updated [%s]', event.roomId, event.room);
                return onRoomUpdated.call(that, event.roomId, event.room);
            case room.events.roomEnded.name:
                that._logger.info('[%s] Room ended', event.roomId);
                break;
            default:
                that._logger.warn('Unsupported room event [%s]', event.eventType);
        }
    }

    function onMembersJoinsRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._removeMembers(members);
        room._addMembers(members);

        cachedRoom._removeMembers(members);
        cachedRoom._addMembers(members);

        this._logger.info('[%s] Room has now [%d] members', roomId, room.getObservableMembers().getValue().length);
    }

    function onMembersLeavesRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._removeMembers(members);
        cachedRoom._removeMembers(members);

        this._logger.info('[%s] Room has now [%d] members', roomId, room.getObservableMembers().getValue().length);
    }

    function onMembersUpdated(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._updateMembers(members);
        cachedRoom._updateMembers(members);

        this._logger.info('[%s] Room has [%d] updated members', roomId, members.length);
    }

    function onRoomUpdated(roomId, room) {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || activeRoom.getRoomId() !== roomId) {
            return;
        }

        cachedRoom._update(room);
        activeRoom._update(room);
    }

    function handlePCastSessionIdChanged(sessionId) {
        resetSelf.call(this, sessionId);
    }

    function findMemberInObservableRoom(sessionId, observableRoom) {
        var room = observableRoom.getValue();
        var members = room.getObservableMembers().getValue();
        return findMemberInMembers(sessionId, members);
    }

    function findMemberInMembers(sessionId, members) {
        return _.find(members, function(member) {
            return sessionId === member.getSessionId();
        });
    }

    function handlePCastStatusChange(status) {
        this._logger.info('PCast status changed to [%s]', status);

        if (status.toLowerCase() !== 'offline' && this._lastPcastStatus === 'offline') {
            // ToDo (dcy) disabled until we determine what to do when the client goes back online
            // resetRoom.call(this);
        } else if (status.toLowerCase() === 'offline' && this._lastPcastStatus !== 'offline' && !_.isNullOrUndefined(this._lastPcastStatus)) {
            // ToDo (dcy) disabled until we determine what to do when the client goes offline
        }

        this._lastPcastStatus = status;
    }

    function setupSubscriptions() {
        var selfSubscription = this._self.subscribe(_.bind(resetRoom, this));

        var pcastStatusSubscription = this._authService.getObservableStatus().subscribe(_.bind(handlePCastStatusChange, this));
        var pcastSessionIdSubscription = this._authService.getObservableSessionId().subscribe(_.bind(handlePCastSessionIdChanged, this));

        this._disposables.push(selfSubscription.dispose);
        this._disposables.push(pcastStatusSubscription.dispose);
        this._disposables.push(pcastSessionIdSubscription.dispose);
    }

    function disposeOfArray(arrayOfDisposables) {
        if (!_.isArray(arrayOfDisposables)) {
            return;
        }

        for (var i = 0; i < arrayOfDisposables.length; i++) {
            if (typeof arrayOfDisposables[i] === 'function') {
                arrayOfDisposables[i]();
            }
        }
    }

    // Requests to server
    function buildMemberForRequest(member, memberToCompare) {
        var memberForRequest = findDifferencesInSelf(member, memberToCompare);

        memberForRequest.sessionId = member.getSessionId();
        // last valid update from server. Handles collisions.
        memberForRequest.lastUpdate = memberToCompare ? memberToCompare.getLastUpdate() : _.now();

        return memberForRequest;
    }

    function findDifferencesInSelf(member, memberToCompare) {
        if (memberToCompare === null) {
            return member.toJson();
        }

        var memberForRequest = {};
        var newMember = member.toJson();
        var cachedMember = memberToCompare.toJson();
        var differences = _.findDifferences(newMember, cachedMember, true);

        _.forEach(differences, function(key) {
            memberForRequest[key] = newMember[key];
        });

        return memberForRequest;
    }

    function getRoomInfoRequest(roomId, alias, callback) {
        this._authService.assertAuthorized();

        this._protocol.getRoomInfo(roomId, alias,
            function handleCreateRoomResponse(response) {
                if (response.status !== 'ok') {
                    return callback(response.room, response.status, response.reason);
                }

                callback(response.room, response.status, null);
            }
        );
    }

    function createRoomRequest(roomName, type, description, callback) {
        this._authService.assertAuthorized();

        this._protocol.createRoom(roomName, type, description,
            function handleCreateRoomResponse(response) {
                if (response.status !== 'ok' && response.status !== 'already-exists') {
                    throw new Error(response.reason);
                }

                callback(response);
            }
        );
    }

    function enterRoomRequest(roomId, alias, callback) {
        this._authService.assertAuthorized();

        var self = this._self.getValue();

        var screenName = self.getObservableScreenName().getValue();
        var role = self.getObservableRole().getValue();
        var selfForRequest = buildMemberForRequest.call(this, self, null);
        var timestamp = _.now();

        this._logger.info('Enter room [%s]/[%s] with screen name [%s] and role [%s]', roomId, alias, screenName, role);

        this._protocol.enterRoom(roomId, alias, selfForRequest, timestamp,
            function handleEnterRoomResponse(response) {
                if (response.status !== 'ok') {
                    throw new Error('Joining of room failed: ' + response.status);
                }

                callback(response);
            }
        );
    }

    function leaveRoomRequest(callback) {
        if (!this._activeRoom.getValue()) {
            return this._logger.warn('Unable to leave room. Not currently in a room.');
        }

        this._authService.assertAuthorized();

        var roomId = this._activeRoom.getValue().getRoomId();
        var timestamp = _.now();

        this._logger.info('Leave room [%s]', roomId);

        this._protocol.leaveRoom(roomId, timestamp,
            function handleLeaveRoomResponse(response) {
                if (response.status !== 'ok') {
                    throw new Error('Leaving room failed: ' + response.status);
                }

                callback(response.status);
            }
        );
    }

    var notInRoomError = 'Not in a room. Please Enter a room before updating self.';

    function updateMemberRequest(member, callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('notInRoomError');

            return callback('not-in-room', notInRoomError);
        }

        this._authService.assertAuthorized();

        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);
        var memberForRequest = buildMemberForRequest.call(this, member, cachedMember);
        var timestamp = _.now();

        this._logger.info('Updating member info for active room');

        var that = this;

        this._protocol.updateMember(memberForRequest, timestamp,
            function handleUpdateMemberResponse(response) {
                if (response.status !== 'ok') {
                    that._logger.warn('Update of member failed: ' + response.status);

                    return callback('failed', 'Update of member failed: ' + response.status);
                }

                return callback('ok', null)
            }
        );
    }

    function updateRoomRequest(callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('notInRoomError');

            return callback('not-in-room', notInRoomError);
        }

        this._authService.assertAuthorized();

        var room = this._activeRoom.getValue();
        var timestamp = _.now();

        var that = this;

        this._protocol.updateRoom(room.toJson(), timestamp,
            function handleUpdateMemberResponse(response) {
                if (response.status !== 'ok') {
                    that._logger.warn('Update of room failed: ' + response.status);

                    return callback('failed', 'Update of member failed: ' + response.status);
                }

                return callback(response.status, null);
            }
        );
    }

    return RoomService;
});
