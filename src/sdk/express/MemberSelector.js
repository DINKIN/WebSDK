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
    'phenix-web-assert'
], function (_, assert) {
    'use strict';

    var mostRecentStrategy = 'most-recent';
    var highAvailabilityStrategy = 'high-availability';
    var blacklistedTimeoutInterval = 3 * 60 * 1000;

    function MemberSelector(selectionStrategy, logger) {
        if (selectionStrategy) {
            assert.isStringNotEmpty(selectionStrategy, 'selectionStrategy');
        }

        assert.isObject(logger, 'logger');

        this._selectionStrategy = selectionStrategy || mostRecentStrategy;
        this._logger = logger;
        this._lastSelectedMember = null;
        this._blackListedMembers = [];
    }

    MemberSelector.prototype.getNext = function getNext(members, forceNewSelection) {
        var newSelectedMember = getNextMember.call(this, members, forceNewSelection);

        if (this.getNumberOfBlackListedMembers() > 0 && hasExceededBlacklistedTimeoutInterval.call(this) && !newSelectedMember) {
            this._logger.info('Unable to select new member. Clearing [%s] black-listed members and trying again', this.getNumberOfBlackListedMembers());

            this.clearBlackListedMembers();

            return this.getNext(members, forceNewSelection);
        }

        if (this._lastSelectedMember !== newSelectedMember) {
            if (!newSelectedMember) {
                this._logger.info('Unable to select new member');
            } else {
                this._logger.info('Selecting new Member [%s]/[%s]', newSelectedMember.getSessionId(), newSelectedMember.getObservableScreenName().getValue());
            }

            if (this._lastSelectedMember && !isBlackListed.call(this, this._lastSelectedMember)) {
                addBlacklistedMember.call(this, this._lastSelectedMember);
            }
        }

        this._lastSelectedMember = newSelectedMember;

        return newSelectedMember;
    };

    MemberSelector.prototype.getStrategy = function() {
        return this._selectionStrategy;
    };

    MemberSelector.prototype.clearBlackListedMembers = function() {
        this._blackListedMembers = [];
    };

    MemberSelector.prototype.getNumberOfBlackListedMembers = function() {
        return this._blackListedMembers.length;
    };

    MemberSelector.prototype.dispose = function dispose() {
        this._lastSelectedMember = null;
        this._blackListedMembers = [];
    };

    function isBlackListed(member) {
        return !!_.find(this._blackListedMembers, function(blackListedMember) {
            return blackListedMember.key === getMemberKey(member);
        });
    }

    function addBlacklistedMember(member) {
        if (!member) {
            return;
        }

        this._blackListedMembers.push({
            key: getMemberKey(member),
            timestamp: _.now()
        });
    }

    function hasExceededBlacklistedTimeoutInterval() {
        var totalTime = _.reduce(this._blackListedMembers, function(total, blackListedMember) {
            return total + _.now() - blackListedMember.timestamp;
        }, 0);

        return totalTime > blacklistedTimeoutInterval;
    }

    function getMemberKey(member) {
        if (!member) {
            return '';
        }

        return member.getSessionId() + member.getObservableScreenName().getValue();
    }

    function getNextMember(members, forceNewSelection) {
        var that = this;

        switch (this._selectionStrategy) {
        case mostRecentStrategy:
            return getMostRecentMember(members);
        case highAvailabilityStrategy:
            var memberStillInList = that._lastSelectedMember && !!_.find(members, function(member) {
                return member.getObservableScreenName().getValue() === that._lastSelectedMember.getObservableScreenName().getValue();
            });

            if (this._lastSelectedMember && !forceNewSelection && memberStillInList) {
                return this._lastSelectedMember;
            }

            var allowedMembers = getAllowedMembers.call(this, members);

            if (forceNewSelection) {
                allowedMembers = removeMember(allowedMembers, this._lastSelectedMember);
            }

            var candidates = _.filter(allowedMembers, isPrimary);

            if (candidates.length === 0) {
                candidates = _.filter(allowedMembers, isAlternate);
            }

            if (candidates.length === 0) {
                candidates = allowedMembers;
            }

            return _.sample(candidates);
        default:
            throw new Error('Invalid Selection Strategy');
        }
    }

    function getMostRecentMember(members) {
        return _.reduce(members, function (memberA, memberB) {
            if (!memberA) {
                return memberB;
            }

            return memberA.getLastUpdate() > memberB.getLastUpdate() ? memberA : memberB;
        });
    }

    function isPrimary(member) {
        var screenName = member.getObservableScreenName().getValue();
        var primary = /primary/i;

        return primary.test(screenName);
    }

    function isAlternate(member) {
        var screenName = member.getObservableScreenName().getValue();
        var primary = /alternate/i;

        return primary.test(screenName);
    }

    function getAllowedMembers(members) {
        var that = this;

        return _.filter(members, function (member) {
            return !isBlackListed.call(that, member);
        });
    }

    function removeMember(members, memberToRemove) {
        return _.filter(members, function (member) {
            return getMemberKey(member) !== getMemberKey(memberToRemove);
        });
    }

    return MemberSelector;
});