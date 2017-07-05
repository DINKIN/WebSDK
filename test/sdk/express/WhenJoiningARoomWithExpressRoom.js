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
    'sdk/express/RoomExpress',
    '../../../test/mock/mockPCast',
    'sdk/room/room.json',
    'sdk/room/member.json',
], function (RoomExpress, MockPCast, room, member) {
    describe('When Joining a Room with ExpressRoom', function () {
        var mockBackendUri = 'https://mockUri';
        var mockAuthData = {name: 'mockUser', password: 'somePassword'};
        var mockRoom = {roomId:'TestRoom123',alias:'',name:'Test123',description:'My Test Room',bridgeId:'',pin:'',type: room.types.multiPartyChat.name, members:[]};

        var requests = [];

        before(function() {
            this.xhr = sinon.useFakeXMLHttpRequest();

            var authResponse = {status: 'ok', authenticationToken: 'newToken'};

            this.xhr.onCreate = function (req) {
                requests.push(req);
                req.respond(200, null, authResponse);
            };
        });
        after(function() {
            this.xhr.restore();
        });
        afterEach(function() {
            requests = [];
        });

        var roomExpress;
        var protocol;
        var response;

        beforeEach(function() {
            roomExpress = new RoomExpress({backendUri: mockBackendUri, authenticationData: mockAuthData});

            MockPCast.buildUpMockPCast(roomExpress.getPCastExpress().getPCast());

            protocol = roomExpress.getPCastExpress().getPCast().getProtocol();

            response = {
                status: 'ok',
                room: mockRoom,
                members: []
            };

            protocol.enterRoom.restore();
            protocol.enterRoom = sinon.stub(protocol, 'enterRoom', function (roomId, alias, selfForRequest, timestamp, callback) {
                callback(null, response);
            });
        });

        afterEach(function() {
            roomExpress.stop();
        });

        it('Has method joinRoom', function () {
            expect(roomExpress.joinRoom).to.be.a('function');
        });

        it('Expect joinRoom protocol to be called with just roomId', function () {
            protocol.enterRoom.restore();
            protocol.enterRoom = sinon.stub(protocol, 'enterRoom', function (roomId, alias, selfForRequest, timestamp, callback) {
                expect(roomId).to.be.equal(mockRoom.roomId);
            });

            roomExpress.joinRoom({roomId: mockRoom.roomId, role: member.roles.participant.name}, function(error, response) {}, function(){});
        });

        it('Expect joinRoom protocol to be called with just alias', function () {
            protocol.enterRoom.restore();
            protocol.enterRoom = sinon.stub(protocol, 'enterRoom', function (roomId, alias, selfForRequest, timestamp, callback) {
                expect(alias).to.be.equal(mockRoom.alias);
            });

            roomExpress.joinRoom({alias: mockRoom.alias, role: member.roles.participant.name}, function(error, response) {}, function(){});
        });

        it('Expect joinRoom protocol without alias or roomId to throw an error', function () {
            protocol.enterRoom.restore();
            protocol.enterRoom = sinon.stub(protocol, 'enterRoom', function (roomId, alias, selfForRequest, timestamp, callback) {
                expect(alias).to.be.equal(mockRoom.alias);
            });

            expect(function () {
                roomExpress.joinRoom({role: member.roles.participant.name}, function(error, response) {}, function(){});
            }).to.throw(Error);
        });

        it('Expect createRoom protocol to be called with default description value', function () {
            roomExpress.joinRoom({role: member.roles.participant.name}, function(error, response) {
                expect(response.roomService).to.exist;
                expect(response.roomService.getObservableActiveRoom().getValue()).to.exist;
            }, function(){});
        });

        it('Expect createRoom protocol to be called with default description value', function (done) {
            roomExpress.joinRoom({role: member.roles.participant.name}, function(error, response) {
                response.roomService.getObservableActiveRoom().getValue().getObservableMembers().setValue([{}]);
            }, function(members){
                expect(members.length).to.be.equal(1);

                done()
            });
        });
    });
});