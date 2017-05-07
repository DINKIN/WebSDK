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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("phenix-web-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["phenix-web-sdk"] = factory();
	else
		root["phenix-web-sdk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(2),
	    __webpack_require__(24),
	    __webpack_require__(38),
	    __webpack_require__(42),
	    __webpack_require__(4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (rtc, PhenixPCast, RoomService, AudioSpeakerDetector, BandwidthMonitor, Logger) {
	    window.PhenixPCast = PhenixPCast;

	    return {
	        PCast: PhenixPCast,
	        RoomService: RoomService,
	        AudioSpeakerDetector: AudioSpeakerDetector,
	        BandwidthMonitor: BandwidthMonitor,
	        Logger: Logger,
	        RTC: rtc
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	!function(a,b){if(true)module.exports=b();else if("function"==typeof define&&define.amd)define([],b);else{var c=b();for(var d in c)("object"==typeof exports?exports:a)[d]=c[d]}}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){var d,e;d=[c(1),c(7)],e=function(a,b){return a.onLoaded=function(){b(a)},a.onLoaded(),a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(2),c(3),c(4)],e=function(a,b,c){"use strict";var d=new a(navigator.userAgent).detect(),e={RTCPeerConnection:b.RTCPeerConnection,RTCSessionDescription:b.RTCSessionDescription,RTCIceCandidate:b.RTCIceCandidate,getSources:b.getSources,getUserMedia:b.getUserMedia,getStats:b.getStats,attachMediaStream:b.attachMediaStream,reattachMediaStream:b.reattachMediaStream,browser:d.browser,browserVersion:d.version,webrtcSupported:b.webrtcSupported,phenixSupported:!1,isPhenixEnabled:function(){return!1},onLoaded:void 0};if(c.isSupported()){e.phenixSupported=!0;var f=new c,g=function(){e.RTCPeerConnection=f.getRTCPeerConnectionConstructor(),e.RTCSessionDescription=f.getRTCSessionDescriptionConstructor(),e.RTCIceCandidate=f.getRTCIceCandidateConstructor(),e.getSources=f.getSourcesDelegate(),e.getUserMedia=f.getUserMediaDelegate(),e.getStats=f.getStatsDelegate(),Function.prototype.bind?(e.attachMediaStream=f.attachMediaStream.bind(f),e.reattachMediaStream=f.reattachMediaStream.bind(f),e.isPhenixEnabled=f.isEnabled.bind(f)):(e.attachMediaStream=function(){f.attachMediaStream.apply(f,arguments)},e.reattachMediaStream=function(){f.reattachMediaStream.apply(f,arguments)},e.isPhenixEnabled=function(){return f.isEnabled()}),e.webrtcSupported=!0,e.phenixSupported=!0,e.phenixVersion=f.getVersion(),e.onLoaded&&e.onLoaded.call()};f.isEnabled()?g():f.onReady(function(a){a&&(g(),e.onload&&"function"==typeof e.onload&&e.onload())}),f.onLoaded(function(){g()})}else e.phenixSupported=!1;return e.addEventListener=function(a,b,c,d){a.phenixSetEventListener?a.phenixSetEventListener(b,c):a.addEventListener?a.addEventListener(b,c,d===!0):a.attachEvent("on"+b,c)},e.removeEventListener=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d===!0):a.detachEvent("on"+b,c)},e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){"use strict";function a(a){this._userAgent=a}return a.prototype.detect=function(){var a="Unknown",b="?",c=this._userAgent.match(/(Chrome|Chromium|Firefox|Opera|Safari)+\//),d=this._userAgent.match(/(Chrome|Chromium|Firefox|Version)+\/([0-9]+)\./);return c&&c.length>=2?a=c[1]:this._userAgent.match(/^\(?Mozilla/)&&(a="Mozilla",(this._userAgent.match(/MSIE/)||this._userAgent.match(/; Trident\/.*rv:[0-9]+/))&&(a="IE",(d=this._userAgent.match(/MSIE ([0-9]+)/))?(b=parseInt(d[1],10),(d=this._userAgent.match(/MSIE [0-9]+.*MSIE ([0-9]+)/))&&(b=parseInt(d[1],10))):(d=this._userAgent.match(/rv:([0-9]+)/))&&(b=parseInt(d[1],10)))),"Chrome"===a&&this._userAgent.match(/OPR\//)?(a="Opera",d=this._userAgent.match(/(OPR)\/([0-9]+)\./)):"Chrome"===a&&this._userAgent.match(/Edge\//)?(a="Edge",d=this._userAgent.match(/(Edge)\/([0-9]+)\./)):"Firefox"!==a&&"IE"!==a||!this._userAgent.match(/Opera/)||(a="Opera",d=this._userAgent.match(/(Opera) ([0-9]+)\./)),"IE"!==a&&d&&d.length>=3&&(b=parseInt(d[2],10)),{browser:a,version:b}},a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(2)],e=function(a){"use strict";var b=function(){console.log.apply(console,arguments)}||function(){},c=null,d=null,e=null,f=null,g=null,h=null,i=null,j=null,k=null,l=!1,m=function(a){navigator.mediaDevices.enumerateDevices().then(function(b){var c=[];b.forEach(function(a){"audioinput"===a.kind?c.push({kind:"audio",id:a.deviceId,label:a.label}):"videoinput"===a.kind&&c.push({kind:"video",id:a.deviceId,label:a.label})}),a(c)})};navigator.mozGetUserMedia?(b("Firefox detected",navigator.userAgent),c=mozRTCPeerConnection,d=mozRTCSessionDescription,e=mozRTCIceCandidate,g=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(a,b,c){navigator.mediaDevices.getUserMedia(a).then(b)["catch"](c)}:navigator.mozGetUserMedia.bind(navigator),h=function(a,b,c){var d=a.getStats(b).then(c);if("rejected"===d.state)throw new Error(d.message)},k=function(b,c,d){var e=null,f=b.split(":");if(0===f[0].indexOf("stun"))e={url:b};else if(0===f[0].indexOf("turn")){var g=new a(navigator.userAgent).detect();if(g.version<27){var h=b.split("?");0===h[1].indexOf("transport=udp")&&(e={url:h[0],credential:d,username:c})}else e={url:b,credential:d,username:c}}return e},i=function(a,c){b("Attaching media stream");var d=a.muted;return a.mozSrcObject=c,a.play(),d===!0&&(a.muted=!0),a},j=function(a,c){b("Reattaching media stream");var d=a.muted;return a.mozSrcObject=c.mozSrcObject,a.play(),d===!0&&(a.muted=!0),a},MediaStream.prototype.getVideoTracks||(MediaStream.prototype.getVideoTracks=function(){return[]}),MediaStream.prototype.getAudioTracks||(MediaStream.prototype.getAudioTracks=function(){return[]}),f=navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?m:MediaStreamTrack.getSources?MediaStreamTrack.getSources.bind(MediaStreamTrack):function(a){setTimeout(function(){a([{kind:"audio",id:"default",label:"",facing:""},{kind:"video",id:"default",label:"",facing:""}])},0)},l=!0):navigator.webkitGetUserMedia?(b("Webkit detected",navigator.userAgent),k=function(a,b,c){var d=null,e=a.split(":");return 0===e[0].indexOf("stun")?d={url:a}:0===e[0].indexOf("turn")&&(d={url:a,credential:c,username:b}),d},c=window.webkitRTCPeerConnection,d=window.RTCSessionDescription,e=window.RTCIceCandidate,g=function(a,c,d){var e=function(a){setTimeout(function(){for(var e=a.getTracks(),f=0;f<e.length;f++){var g=e[f];if(g.onended=function(a){b(a.timeStamp,"Track",g.id,g.label,"ended")},b("Track",g.id,g.label,e[f].kind,"readyState=",e[f].readyState),"ended"===g.readyState){try{var h=new Error("User media not available");h.code="unavailable",d(h)}finally{for(var i=0;i<e.length;i++)e[i].stop()}return}}c(a)},100)};navigator.webkitGetUserMedia(a,e,d)},h=function(a,b,c,d){a.getStats(c,b,d)},i=function(a,c){return"undefined"!=typeof a.srcObject?a.srcObject=c:"undefined"!=typeof a.mozSrcObject?a.mozSrcObject=c:"undefined"!=typeof a.src?a.src=URL.createObjectURL(c):b("Error attaching stream to element."),a.play(),a},j=function(a,b){return a.src=b.src,a},f=navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?m:MediaStreamTrack.getSources.bind(MediaStreamTrack),l=!0):b("Browser does not appear to be WebRTC-capable",navigator.userAgent);var n={RTCPeerConnection:c,RTCSessionDescription:d,RTCIceCandidate:e,getSources:f,getUserMedia:g,getStats:h,attachMediaStream:i,reattachMediaStream:j,webrtcSupported:l};return n.exportGlobal=function(){window.RTCPeerConnection=n.RTCPeerConnection,window.RTCSessionDescription=n.RTCSessionDescription,window.RTCIceCandidate=n.RTCIceCandidate},n}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(5),c(6)],e=function(a,b){"use strict";function c(){var b=this;this._root=e(),this._version="?";var c=function(a){b._loaded=!0,b._enabled=a===!0,b._version=b._phenixRTC.phenixVersion||"?.?.?.?",h(a?"Phenix RTC "+b._version:"No Phenix RTC"),b._onReady&&b._onReady(b._enabled)};try{this._phenixRTC=f(this._root),this._phenixRTC.onunload=function(){b._loaded=!1};var d=new a;d.waitForReady(this._phenixRTC,c)}catch(g){i("Error while loading Phenix RTC"+g),loaded(!1)}}function d(){this._root&&document.getElementById("phenixRTC")!==this._root&&(document.body.appendChild(this._root),this._onLoaded&&this._onLoaded.call(this))}function e(){var a=document.createElement("div");return a.id="phenixRTC",a.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",document.body.appendChild(a),a}function f(a){var b=document.createElement("object");return b.type="application/x-phenix-rtc",a.appendChild(b),b}function g(a,c){if(!a)throw new Error("Can not attach a stream to a undefined element");if(a.phenixVersion)return a.src=c,a;var d=new b(a,c);return d.getElement().phenixPresenter=d,d.getElement()}var h=function(){console.log.apply(console,arguments)}||function(){},i=function(){console.error.apply(console,arguments)}||h;return c.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},c.prototype.onLoaded=function(a){this._onLoaded=a},c.prototype.isLoaded=function(){return this._loaded===!0},c.isSupported=function(){if(navigator.plugins)for(var a=navigator.plugins,b=0;b<a.length;b++)if(a[b].name.indexOf("PhenixRTC")>=0)return!0;if(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))try{new ActiveXObject("PhenixP2P.RTC");return!0}catch(c){return!1}return!1},c.prototype.isEnabled=function(){return d.call(this),this._phenixRTC&&void 0!=this._phenixRTC.phenixVersion},c.prototype.getVersion=function(){return d.call(this),this._version},c.prototype.getRTCPeerConnectionConstructor=function(){return d.call(this),this._phenixRTC.RTCPeerConnection},c.prototype.getRTCSessionDescriptionConstructor=function(){return d.call(this),this._phenixRTC.RTCSessionDescription},c.prototype.getRTCIceCandidateConstructor=function(){return d.call(this),this._phenixRTC.RTCIceCandidate},c.prototype.getSourcesDelegate=function(){var a=this;return function(b){return d.call(a),a._phenixRTC.getSources(b)}},c.prototype.getUserMediaDelegate=function(){var a=this;return function(b,c,e){return d.call(a),a._phenixRTC.getUserMedia(b,c,e)}},c.prototype.getStatsDelegate=function(){return function(a,b,c,d){return a.getStats(b,c,d)}},c.prototype.attachMediaStream=function(a,b){return d.call(this),g.call(this,a,b)},c.prototype.reattachMediaStream=function(a,b){return d.call(this),this.attachMediaStream(a,b.src)},c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(2)],e=function(a){"use strict";function b(a){this._timeout=a||15e3}var c=new a(navigator.userAgent).detect(),d=4,e=function(){console.error.apply(console,arguments)}||log;return b.prototype.waitForReadyWithTimeout=function(a,b,f){var g=!1,h=1,i=h,j=function(a){g||(g=!0,b(a))},k=function l(){a.readyState===d?j(!0):a.phenixVersion?j(!0):(h=Math.min(h+1e3,2*h),i+=h,i>f?(e("Timed out while waiting for <object> to load"),j(!1)):setTimeout(l,h))};a.hasOwnProperty&&a.hasOwnProperty("onload")||"IE"!==c.browser&&e("No means of detecting when <object> is loaded"),a.onload=function(){j(!0)},k()},b.prototype.waitForReady=function(a,b){a.phenixVersion?b(!0):this.waitForReadyWithTimeout(a,b,this._timeout)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(5)],e=function(a){"use strict";function b(b,d){var e=this;this._ghost=b,this._stream=d,this._events={};var f=function(a){e._loaded=!0,e._enabled=a===!0,a?h.call(e):m("Failed to create Phenix video element"),e._onReady&&e._onReady(e._enabled)};try{this._video=c(),this._video.className=this._ghost.className,this._video.height=this._ghost.height,this._video.width=this._ghost.width,this._ghost.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",this._video.onunload=function(){e._loaded=!1},j.call(this),document.body&&document.body.contains||l("document.body.contains is not supported"),document.body&&document.body.contains&&document.body.contains(this._ghost)&&this._ghost.parentNode.replaceChild(this._video,this._ghost);var g=new a;g.waitForReady(this._video,f)}catch(i){m("Error while loading Phenix RTC"+i),f(!1)}}function c(){var a=document.createElement("object");return a.type="application/x-phenix-video",a}function d(a,b,c){var d=this._events[a];d||(d=this._events[a]=[],this._loaded&&f.call(this,a)),d.push(b)}function e(a,b,c){var d=this._events[a];if(d){var e=d.indexOf(b);e>=0&&(d=d.splice(e,1),d.length>0?this._events[a]=d:delete this._events[a])}}function f(a){function b(){var b=c._events[a];if(b)for(var d=0;d<b.length;d++)b[d].apply(c,arguments)}var c=this;c._video.phenixSetEventListener(a,b)}function g(a,b){var c;document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0)):(c=document.createEventObject(),c.eventType=b),c.eventName=b,setTimeout(function(){document.createEvent?a.dispatchEvent(c):a.fireEvent("on"+c.eventType,c)})}function h(){for(var a=Object.keys(this._events),b=0;b<a.length;b++)f.call(this,a[b]);this.hookUpEvents(),i.call(this),this._video.id=this._ghost.id,this._video.style.cssText=this._ghost.cssText,this._video.className=this._ghost.className,this._video.innerHtml=this._ghost.innerHtml,this._video.width=this._ghost.width,this._video.height=this._ghost.height,this._video.autoplay=this._ghost.autoplay,this._video.muted=this._ghost.muted,this._video.defaultMuted=this._ghost.defaultMuted,this._video.volume=this._ghost.volume,this._stream&&(this._video.src=this._stream)}function i(){var a=this,b=["style"];if(window.MutationObserver){var c=new MutationObserver(function(c){c.forEach(function(c){"attributes"===c.type&&c.target===a._ghost&&b.indexOf(c.attributeName)===-1&&(a._video[c.attributeName]=a._ghost[c.attributeName])})}),d={attributes:!0};c.observe(a._ghost,d)}else l("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details."),a._ghost.addEventListener?a._ghost.addEventListener("DOMAttrModified",function(b){a._video[b.target.tagName]=a._ghost[b.target.tagName]},!1):a._ghost.attachEvent("onpropertychange",function(b){a._video[b.target.tagName]=a._ghost[b.target.tagName]})}function j(){var a=this;if(window.MutationObserver){var b=new MutationObserver(function(b){b.forEach(function(b){if("childList"===b.type)for(var c=0;c<b.addedNodes.length;c++){var d=b.addedNodes[c];b.target!==a._video&&(d===a._ghost?(b.target.replaceChild(a._video,a._ghost),h.call(a)):k(b.target,a._ghost)&&(a._ghost.parentNode.replaceChild(a._video,a._ghost),h.call(a)))}})}),c={childList:!0,attributes:!1,characterData:!1,subtree:!0};b.observe(document.body,c)}else l("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details."),d(a._ghost,"DOMNodeInserted",function(b){a._ghost.parentNode.replaceChild(a._video,a._ghost)},!1)}function k(a,b){for(var c=b.parentNode;null!=c;){if(c==a)return!0;c=c.parentNode}return!1}var l=function(){console.log.apply(console,arguments)}||function(){},m=function(){console.error.apply(console,arguments)}||l;return b.prototype.hookUpEvents=function(){var a=this,b=this._ghost;this.addEventListener("error",function(){g(b,"error")}),this.addEventListener("mute",function(){b.muted=a._video.muted,g(b,"mute")}),this.addEventListener("unmute",function(){b.muted=a._video.muted,g(b,"unmute")}),this.addEventListener("ended",function(){b.ended=a._video.ended,g(b,"ended")}),this.addEventListener("loadedmetadata",function(){l("Video loaded metadata",a._video.videoWidth,a._video.videoHeight),b.width=a._video.width,b.height=a._video.height,g(b,"loadedmetadata")}),this.addEventListener("loadeddata",function(){b.width=a._video.width,b.height=a._video.height,g(b,"loadeddata")}),this.addEventListener("resize",function(){b.width=a._video.width,b.height=a._video.height,g(b,"resize")})},b.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},b.prototype.getElement=function(){return this._video},b.prototype.addEventListener=function(a,b,c){d.call(this,a,b,c)},b.prototype.removeEventListener=function(a,b,c){e.call(this,a,b,c)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){"use strict";var a=function(a){window.RTCPeerConnection=a.RTCPeerConnection,window.RTCSessionDescription=a.RTCSessionDescription,window.RTCIceCandidate=a.RTCIceCandidate};return a}.apply(b,d),!(void 0!==e&&(a.exports=e))}])});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(4),
	    __webpack_require__(5),
	    __webpack_require__(19),
	    __webpack_require__(22),
	    __webpack_require__(23),
	    __webpack_require__(1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, Logger, PCastProtocol, PCastEndPoint, PeerConnectionMonitor, DimensionsChangedMonitor, phenixRTC) {
	    'use strict';

	    var NetworkStates = _.freeze({
	        'NETWORK_EMPTY': 0,
	        'NETWORK_IDLE': 1,
	        'NETWORK_LOADING': 2,
	        'NETWORK_NO_SOURCE': 3
	    });
	    var peerConnectionConfig = _.freeze({
	        'iceServers': [
	            {
	                urls: 'stun:stun.l.google.com:19302'
	            }, {
	                urls: 'stun:stun1.l.google.com:19302'
	            }, {
	                urls: 'stun:stun2.l.google.com:19302'
	            }, {
	                urls: 'stun:stun3.l.google.com:19302'
	            }, {
	                urls: 'stun:stun4.l.google.com:19302'
	            }
	        ]
	    });
	    var sdkVersion = '2017-05-07T21:36:24Z';
	    var defaultChromePCastScreenSharingExtensionId = 'icngjadgidcmifnehjcielbmiapkhjpn';
	    var defaultFirefoxPCastScreenSharingAddOn = _.freeze({
	        url: 'https://addons.mozilla.org/firefox/downloads/file/474686/pcast_screen_sharing-1.0.3-an+fx.xpi',
	        iconUrl: 'https://phenixp2p.com/public/images/phenix-logo-unicolor-64x64.png',
	        hash: 'sha256:4972e9718ea7f7c896abc12d1a9e664d5f3efe498539b082ab7694f9d7af4f3b'
	    });
	    var firefoxInstallationCheckInterval = 100;
	    var firefoxMaxInstallationChecks = 450;

	    function PhenixPCast(options) {
	        options = options || {};
	        this._logger = options.logger || new Logger();
	        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
	        this._deviceId = options.deviceId || '';
	        this._version = sdkVersion;
	        this._endPoint = new PCastEndPoint(this._version, this._baseUri, this._logger);
	        this._screenSharingExtensionId = options.screenSharingExtensionId || defaultChromePCastScreenSharingExtensionId;
	        this._screenSharingAddOn = options.screenSharingAddOn || defaultFirefoxPCastScreenSharingAddOn;
	        this._screenSharingEnabled = false;
	        this._shaka = options.shaka || window.shaka;
	        this._videojs = options.videojs || window.videojs;
	        this._status = 'offline';

	        if (phenixRTC.browser === 'Chrome' && this._screenSharingExtensionId) {
	            addLinkHeaderElement.call(this);
	        }

	        phenixRTC.addEventListener(window, 'unload', function (pcast) {
	            return function () {
	                pcast.stop();
	            }
	        }(this));
	    }

	    PhenixPCast.prototype.getBaseUri = function () {
	        return this._endPoint.getBaseUri();
	    };

	    PhenixPCast.prototype.getStatus = function () {
	        return this._status;
	    };

	    PhenixPCast.prototype.start = function (authToken, authenticationCallback, onlineCallback, offlineCallback) {
	        if (typeof authToken !== 'string') {
	            throw new Error('"authToken" must be a string');
	        }
	        if (typeof authenticationCallback !== 'function') {
	            throw new Error('"authenticationCallback" must be a function');
	        }
	        if (typeof onlineCallback !== 'function') {
	            throw new Error('"onlineCallback" must be a function');
	        }
	        if (typeof offlineCallback !== 'function') {
	            throw new Error('"offlineCallback" must be a function');
	        }

	        if (this._started) {
	            throw new Error('"Already started"');
	        }

	        this._stopped = false;
	        this._started = true;
	        this._authToken = authToken;
	        this._authenticationCallback = authenticationCallback;
	        this._onlineCallback = onlineCallback;
	        this._offlineCallback = offlineCallback;
	        this._status = 'connecting';

	        this._peerConnections = {};
	        this._mediaStreams = {};
	        this._publishers = {};
	        this._gumStreams = [];

	        var that = this;

	        checkForScreenSharingCapability.call(that, function (screenSharingEnabled) {
	            that._screenSharingEnabled = screenSharingEnabled;

	            that._endPoint.resolveUri(function (err, uri) {
	                if (err) {
	                    that._logger.error('Failed to connect to [%s]', that._baseUri, err);

	                    transitionToStatus.call(that, 'offline');

	                    switch (err.code) {
	                        case 0:
	                            that._authenticationCallback.call(that, that, 'network-unavailable', '');
	                            break;
	                        case 503:
	                            that._authenticationCallback.call(that, that, 'capacity', '');
	                            break;
	                        default:
	                            that._authenticationCallback.call(that, that, 'failed', '');
	                            break;
	                    }

	                    that._stopped = true;
	                    that._started = false;

	                    return;
	                }

	                that._logger.info('Discovered end point [%s]', uri);

	                that._protocol = new PCastProtocol(uri, that._deviceId, that._version, that._logger);

	                that._protocol.on('connected', _.bind(connected, that));
	                that._protocol.on('disconnected', _.bind(disconnected, that));
	                that._protocol.on('streamEnded', _.bind(streamEnded, that));
	                that._protocol.on('dataQuality', _.bind(dataQuality, that));
	            });
	        });
	    };

	    PhenixPCast.prototype.stop = function () {
	        if (!this._started) {
	            return;
	        }

	        this._stopped = true;
	        this._started = false;

	        delete this._authenticationCallback;

	        try {
	            var reason = '';

	            for (var streamId in this._mediaStreams) {
	                if (this._mediaStreams.hasOwnProperty(streamId)) {
	                    endStream.call(this, streamId, reason);
	                }
	            }

	            for (var streamId in this._publishers) {
	                if (this._publishers.hasOwnProperty(streamId)) {
	                    var publisher = this._publishers[streamId];

	                    endStream.call(this, streamId, reason);

	                    if (!_.includes(publisher.getOptions(), 'detached')) {
	                        publisher.stop(reason);
	                    }
	                }
	            }

	            for (var streamId in this._peerConnections) {
	                if (this._peerConnections.hasOwnProperty(streamId)) {
	                    endStream.call(this, streamId, reason);
	                }
	            }

	            for (var i = 0; i < this._gumStreams.length; i++) {
	                var tracks = this._gumStreams[i].getTracks();

	                for (var j = 0; j < tracks.length; j++) {
	                    tracks[j].stop();
	                }
	            }
	        } finally {
	            if (this._protocol) {
	                this._protocol.disconnect();
	            }
	        }
	    };

	    PhenixPCast.prototype.getUserMedia = function (options, callback) {
	        if (typeof options !== 'object') {
	            throw new Error('"options" must be an object');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        return getUserMedia.call(this, options, callback);
	    };

	    PhenixPCast.prototype.publish = function (streamToken, streamToPublish, callback, tags, options) {
	        if (typeof streamToken !== 'string') {
	            throw new Error('"streamToken" must be a string');
	        }
	        if (typeof streamToPublish !== 'object' && typeof streamToPublish !== 'string') {
	            throw new Error('"streamToPublish" must be an object or URI');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }
	        tags = tags || [];
	        if (!Array.isArray(tags)) {
	            throw new Error('"tags" must be an array');
	        }
	        options = options || {};
	        if (typeof options !== 'object') {
	            throw new Error('"options" must be an object');
	        }

	        var that = this;
	        var streamType = 'upload';
	        var setupStreamOptions = {
	            negotiate: true,
	            connectOptions: options.connectOptions
	        };

	        if (typeof streamToPublish === 'string') {
	            setupStreamOptions.negotiate = false;
	            setupStreamOptions.connectUri = streamToPublish;
	        } else {
	            setupStreamOptions.connectUri = options.connectUri
	        }

	        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, function (response, error) {
	            if (error) {
	                that._logger.warn('Failed to create uploader', error);

	                switch (error.status) {
	                    case 'capacity':
	                        return callback.call(that, that, error.status);
	                    default:
	                        return callback.call(that, that, 'failed');
	                }
	            } else {
	                var streamId = response.createStreamResponse.streamId;

	                if (setupStreamOptions.negotiate === true) {
	                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;

	                    return createPublisherPeerConnection.call(that, streamToPublish, streamId, offerSdp, function (phenixPublisher, error) {
	                        if (error) {
	                            callback.call(that, that, 'failed', null);
	                        } else {
	                            callback.call(that, that, 'ok', phenixPublisher);
	                        }
	                    }, options, response.createStreamResponse.options);
	                }

	                return createPublisher.call(that, streamId, function (phenixPublisher, error) {
	                    if (error) {
	                        callback.call(that, that, 'failed', null);
	                    } else {
	                        callback.call(that, that, 'ok', phenixPublisher);
	                    }
	                }, response.createStreamResponse.options);
	            }
	        });
	    };

	    PhenixPCast.prototype.subscribe = function (streamToken, callback, options) {
	        if (typeof streamToken !== 'string') {
	            throw new Error('"streamToken" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }
	        options = options || {};
	        if (typeof options !== 'object') {
	            throw new Error('"options" must be an object');
	        }

	        var that = this;
	        var streamType = 'download';
	        var setupStreamOptions = {
	            negotiate: options.negotiate !== false,
	            connectUri: options.connectUri,
	            connectOptions: options.connectOptions
	        };

	        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, function (response, error) {
	            if (error) {
	                that._logger.warn('Failed to create downloader', error);

	                switch (error.status) {
	                    case 'capacity':
	                    case 'stream-ended':
	                    case 'origin-stream-ended':
	                    case 'streaming-not-available':
	                        return callback.call(that, that, error.status);
	                    default:
	                        return callback.call(that, that, 'failed');
	                }
	            } else {
	                var streamId = response.createStreamResponse.streamId;
	                var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
	                var create = createViewerPeerConnection;

	                if (offerSdp.match(/a=x-playlist:/)) {
	                    create = createLiveViewer;
	                }

	                return create.call(that, streamId, offerSdp, function (phenixMediaStream, error) {
	                    if (error) {
	                        callback.call(that, that, 'failed', null);
	                    } else {
	                        callback.call(that, that, 'ok', phenixMediaStream);
	                    }
	                }, options);
	            }
	        });
	    };

	    PhenixPCast.prototype.getProtocol = function () {
	        return this._protocol;
	    };

	    PhenixPCast.prototype.getLogger = function () {
	        return this._logger;
	    };

	    PhenixPCast.prototype.getStatus = function () {
	        return this._status;
	    };

	    PhenixPCast.prototype.toString = function () {
	        return 'PhenixPCast[' + this._sessionId + ',' + (this._protocol ? this._protocol.toString() : 'uninitialized') + ']';
	    };

	    function checkForScreenSharingCapability(callback) {
	        var that = this;

	        if (phenixRTC.browser === 'Chrome' && that._screenSharingExtensionId) {
	            try {
	                chrome.runtime.sendMessage(that._screenSharingExtensionId, {type: 'version'}, function (response) {
	                    if (response && response.status === 'ok') {
	                        that._logger.info('Screen sharing enabled using version [%s]', response.version);
	                        callback(true);
	                    } else {
	                        that._logger.info('Screen sharing NOT available');
	                        callback(false);
	                    }
	                });
	            } catch (e) {
	                if (e.message) {
	                    that._logger.warn(e.message, e);
	                }

	                callback(false);
	            }
	        } else if (phenixRTC.browser === 'Firefox' && typeof window.PCastScreenSharing === 'object') {
	            callback(true);
	        } else {
	            callback(false);
	        }
	    }

	    function getChromeWebStoreLink() {
	        return 'https://chrome.google.com/webstore/detail/' + this._screenSharingExtensionId;
	    }

	    function addLinkHeaderElement() {
	        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

	        var links = document.getElementsByTagName('link');

	        for (var i = 0; i < links.length; i++) {
	            if (links[i].href === chromeWebStoreUrl) {
	                // Link already present
	                return;
	            }
	        }

	        this._logger.debug('Adding Chrome Web Store link [%s]', chromeWebStoreUrl);

	        var link = document.createElement('link');

	        link.rel = 'chrome-webstore-item';
	        link.href = chromeWebStoreUrl;

	        document.getElementsByTagName('head')[0].appendChild(link);
	    }

	    function tryInstallChromeScreenSharingExtension(callback) {
	        var that = this;
	        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

	        try {
	            chrome.webstore.install(chromeWebStoreUrl, function successCallback() {
	                return callback('ok');
	            }, function failureCallback(reason) {
	                if (reason) {
	                    if (reason.match(/cancelled/ig)) {
	                        that._logger.info('User cancelled screen sharing');

	                        return callback('cancelled', new Error(reason));
	                    }

	                    that._logger.warn(reason);
	                }

	                return callback('failed', new Error(reason || 'failed'));
	            });
	        } catch (e) {
	            if (e.message) {
	                that._logger.warn(e.message);
	            }

	            callback('failed', e);
	        }
	    }

	    function tryInstallFirefoxScreenSharingExtension(callback) {
	        try {
	            var params = {
	                "PCast Screen Sharing": {
	                    URL: this._screenSharingAddOn.url,
	                    IconURL: this._screenSharingAddOn.iconUrl,
	                    Hash: this._screenSharingAddOn.hash,
	                    toString: function () {
	                        return this.URL;
	                    }
	                }
	            };
	            var attemptsLeft = firefoxMaxInstallationChecks;
	            var intervalId;
	            var success = function success() {
	                if (intervalId) {
	                    clearInterval(intervalId);
	                }
	                callback('ok');
	            };
	            var failure = function failure() {
	                if (intervalId) {
	                    clearInterval(intervalId);
	                }
	                callback('failed', new Error('failed'));
	            };

	            intervalId = setInterval(function () {
	                if (typeof window.PCastScreenSharing === 'object') {
	                    return success();
	                }
	                if (attemptsLeft-- < 0) {
	                    return failure();
	                }
	            }, firefoxInstallationCheckInterval);

	            InstallTrigger.install(params, function xpiInstallCallback(url, status) {
	                // Callback only works for verified sites
	                if (status === 0) {
	                    success();
	                } else {
	                    failure();
	                }
	            });
	        } catch (e) {
	            if (e.message) {
	                this._logger.warn(e.message);
	            }

	            callback('failed', e);
	        }
	    }

	    function getScreenSharingConstraints(options, callback) {
	        var that = this;

	        switch (phenixRTC.browser) {
	            case 'Chrome':
	                try {
	                    chrome.runtime.sendMessage(that._screenSharingExtensionId, {type: 'get-desktop-media'}, function (response) {
	                        if (response.status !== 'ok') {
	                            return callback(response.status, undefined, new Error(response.status));
	                        }

	                        var constraints = {
	                            video: {}
	                        };

	                        if (typeof options === 'object' && typeof options.screen === 'object') {
	                            constraints.video = options.screen;
	                        }

	                        if (typeof constraints.video.mandatory !== 'object') {
	                            constraints.video.mandatory = {};
	                        }

	                        constraints.video.mandatory.chromeMediaSource = 'desktop';
	                        constraints.video.mandatory.chromeMediaSourceId = response.streamId;

	                        callback('ok', constraints, undefined);
	                    });
	                } catch (e) {
	                    if (e.message) {
	                        that._logger.warn(e.message);
	                    }

	                    callback('failed', undefined, e);
	                }
	                break;
	            case 'Firefox':
	                var constraints = {
	                    video: {}
	                };

	                if (typeof options === 'object' && typeof options.screen === 'object') {
	                    constraints.video = options.screen;
	                }

	                constraints.video.mediaSource = 'window';

	                callback('ok', constraints, undefined);
	                break;
	            default:
	                callback('not-supported', undefined, new Error('not-supported'));
	                break;
	        }
	    }

	    function getUserMediaConstraints(options, callback) {
	        var that = this;

	        if (options.screen) {
	            if (!that._screenSharingEnabled) {
	                var installCallback = function installCallback(status) {
	                    if (status === 'cancelled') {
	                        return callback(status, 'cancelled');
	                    }
	                    if (status !== 'ok') {
	                        return callback(status, undefined, new Error('screen-sharing-installation-failed'));
	                    }

	                    checkForScreenSharingCapability.call(that, function (screenSharingEnabled) {
	                        that._screenSharingEnabled = screenSharingEnabled;

	                        if (!that._screenSharingEnabled) {
	                            return callback(status, undefined, new Error('screen-sharing-installation-failed'));
	                        }

	                        getScreenSharingConstraints.call(that, options, callback);
	                    });
	                };

	                switch (phenixRTC.browser) {
	                    case 'Chrome':
	                        tryInstallChromeScreenSharingExtension.call(that, installCallback);
	                        break;
	                    case 'Firefox':
	                        tryInstallFirefoxScreenSharingExtension.call(that, installCallback);
	                        break;
	                    default:
	                        callback('not-supported', undefined, new Error('not-supported'));
	                        break;
	                }
	            } else {
	                getScreenSharingConstraints.call(that, options, callback);
	            }
	        } else {
	            var constraints = {
	                audio: options.audio || false,
	                video: options.video || false
	            };

	            callback('ok', constraints, undefined);
	        }
	    }

	    function getUserMedia(options, callback) {
	        var that = this;

	        var onUserMediaSuccess = function onUserMediaSuccess(status, stream) {
	            that._gumStreams.push(stream);
	            callback(that, status, stream);
	        };

	        var onUserMediaFailure = function onUserMediaFailure(status, stream, error) {
	            callback(that, status, stream, error);
	        };

	        var hasScreen = options.screen;
	        var hasVideoOrAudio = options.video || options.audio;

	        if (!(hasScreen && hasVideoOrAudio)) {
	            return getUserMediaStream.call(that, options, onUserMediaSuccess, onUserMediaFailure);
	        }

	        return getUserMediaStream.call(that, {
	            screen: options.screen
	        }, function success(status, screenStream) {
	            return getUserMediaStream.call(that, {
	                audio: options.audio,
	                video: options.video
	            }, function screenSuccess(status, stream) {
	                addTracksToWebRTCStream(stream, screenStream.getTracks());

	                onUserMediaSuccess(status, stream);
	            }, function failure(status, stream, error) {
	                stopWebRTCStream(screenStream);

	                onUserMediaFailure(status, stream, error);
	            });
	        }, onUserMediaFailure);
	    }

	    function getUserMediaStream(options, successCallback, failureCallback) {
	        var onUserMediaCancelled = function onUserMediaCancelled() {
	            failureCallback('cancelled', null);
	        };

	        var onUserMediaFailure = function onUserMediaFailure(e) {
	            failureCallback(getUserMediaErrorStatus(e), undefined, e);
	        };

	        var onUserMediaSuccess = function onUserMediaSuccess(stream) {
	            successCallback('ok', stream);
	        };

	        return getUserMediaConstraints.call(this, options, function (status, constraints, error) {
	            if (status === 'cancelled') {
	                return onUserMediaCancelled();
	            }

	            if (status !== 'ok') {
	                return onUserMediaFailure(error);
	            }

	            try {
	                phenixRTC.getUserMedia(constraints, onUserMediaSuccess, onUserMediaFailure);
	            } catch (e) {
	                onUserMediaFailure(e);
	            }
	        });
	    }


	    var getUserMediaErrorStatus = function getUserMediaErrorStatus(e) {
	        var status;

	        if (e.code === 'unavailable') {
	            status = 'conflict';
	        } else if (e.message === 'permission-denied') {
	            status = 'permission-denied';
	        } else if (e.name === 'PermissionDeniedError') { // Chrome
	            status = 'permission-denied';
	        } else if (e.name === 'InternalError' && e.message === 'Starting video failed') { // FF (old getUserMedia API)
	            status = 'conflict';
	        } else if (e.name === 'SourceUnavailableError') { // FF
	            status = 'conflict';
	        } else if (e.name === 'SecurityError' && e.message === 'The operation is insecure.') { // FF
	            status = 'permission-denied';
	        } else {
	            status = 'failed';
	        }

	        return status;
	    };

	    function connected() {
	        var that = this;

	        this._connected = true;

	        if (!that._stopped) {
	            that._protocol.authenticate(that._authToken, function (result, error) {
	                if (that._authenticationCallback) {
	                    if (error) {
	                        that._logger.warn('Failed to authenticate', error);
	                        transitionToStatus.call(that, 'offline');
	                        that._authenticationCallback.call(that, that, 'unauthorized', '');
	                        that.stop('unauthorized');
	                    } else {
	                        transitionToStatus.call(that, 'online');
	                        that._authenticationCallback.call(that, that, result.status, result.sessionId);
	                    }
	                }
	            });
	        }
	    }

	    function disconnected() {
	        this._connected = false;
	        transitionToStatus.call(this, 'offline');
	    }

	    function getStreamEndedReason(value) {
	        switch (value) {
	            case '':
	            case 'none':
	            case 'ended':
	                return 'ended';
	            case 'server-error':
	            case 'not-ready':
	            case 'error':
	                return 'failed';
	            case 'censored':
	                return 'censored';
	            case 'maintenance':
	                return 'maintenance';
	            case 'capacity':
	                return 'capacity';
	            case 'app-background':
	                return 'app-background';
	            default:
	                return 'custom';
	        }
	    }

	    function streamEnded(event) {
	        var streamId = event.streamId;
	        var reason = event.reason;

	        return endStream.call(this, streamId, reason);
	    }

	    function dataQuality(event) {
	        var streamId = event.streamId;
	        var status = event.status;
	        var reason = event.reason;

	        var internalMediaStream = this._mediaStreams[streamId];

	        if (internalMediaStream) {
	            internalMediaStream.dataQualityChangedCallback(status, reason);
	        }

	        var publisher = this._publishers[streamId];

	        if (publisher && typeof publisher.dataQualityChangedCallback === 'function') {
	            publisher.dataQualityChangedCallback(publisher, status, reason);
	        }
	    }

	    function endStream(streamId, reason) {
	        this._logger.info('[%s] Stream ended with reason [%s]', streamId, reason);

	        var internalMediaStream = this._mediaStreams[streamId];

	        if (internalMediaStream) {
	            internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason);
	        }

	        delete this._mediaStreams[streamId];

	        var publisher = this._publishers[streamId];

	        if (publisher && typeof publisher.publisherEndedCallback === 'function') {
	            publisher.publisherEndedCallback(publisher, getStreamEndedReason(reason), reason);
	        }

	        delete this._publishers[streamId];

	        var peerConnection = this._peerConnections[streamId];

	        if (peerConnection) {
	            closePeerConnection.call(this, streamId, peerConnection, 'ended');
	        }

	        delete this._peerConnections[streamId];
	    }

	    function setupStreamAddedListener(streamId, state, peerConnection, callback, options) {
	        var that = this;
	        var onAddStream = function onAddStream(event) {
	            if (state.failed) {
	                return;
	            }

	            var masterStream = event.stream;

	            if (!masterStream) {
	                state.failed = true;
	                that._logger.warn('[%s] No remote stream', streamId);

	                return callback.call(that, undefined, 'failed');
	            }

	            that._logger.info('[%s] Got remote stream', streamId);

	            var createMediaStream = function createMediaStream(stream) {
	                var internalMediaStream = {
	                    children: [],
	                    renderer: null,
	                    isStopped: false,
	                    isStreamEnded: false,

	                    mediaStream: {
	                        createRenderer: function createRenderer() {
	                            var element = null;
	                            var dimensionsChangedMonitor = new DimensionsChangedMonitor(that._logger);

	                            return {
	                                start: function start(elementToAttachTo) {
	                                    element = phenixRTC.attachMediaStream(elementToAttachTo, stream);

	                                    if (options.receiveAudio === false) {
	                                        element.muted = true;
	                                    }

	                                    internalMediaStream.renderer = this;

	                                    dimensionsChangedMonitor.start(this, element);

	                                    return element;
	                                },

	                                stop: function stop() {
	                                    dimensionsChangedMonitor.stop();

	                                    if (element) {
	                                        if (typeof element.pause === 'function') {
	                                            element.pause();
	                                        }

	                                        if (element.src) {
	                                            element.src = '';
	                                        }

	                                        if (element.srcObject) {
	                                            element.srcObject = null;
	                                        }

	                                        element = null;
	                                    }

	                                    internalMediaStream.renderer = null;
	                                },

	                                getStats: function getStats() {
	                                    if (!element) {
	                                        return {
	                                            width: 0,
	                                            height: 0,
	                                            currentTime: 0.0,
	                                            networkState: NetworkStates.NETWORK_NO_SOURCE
	                                        }
	                                    }

	                                    return {
	                                        width: element.videoWidth || element.width,
	                                        height: element.videoHeight || element.height,
	                                        currentTime: element.currentTime,
	                                        networkState: element.networkState
	                                    }
	                                },

	                                setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
	                                    if (typeof callback !== 'function') {
	                                        throw new Error('"callback" must be a function');
	                                    }

	                                    this.dataQualityChangedCallback = callback;
	                                },

	                                setVideoDisplayDimensionsChangedCallback: function setVideoDisplayDimensionsChangedCallback(callback, options) {
	                                    dimensionsChangedMonitor.setVideoDisplayDimensionsChangedCallback(callback, options);
	                                }
	                            };
	                        },

	                        setStreamEndedCallback: function setStreamEndedCallback(callback) {
	                            if (typeof callback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }

	                            this.streamEndedCallback = callback;
	                        },

	                        setStreamErrorCallback: function setStreamErrorCallback(callback) {
	                            if (typeof callback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }
	                            this.streamErrorCallback = callback;
	                        },

	                        stop: function stop(reason) {
	                            if (internalMediaStream.isStopped) {
	                                return;
	                            }

	                            stopWebRTCStream(stream);

	                            if (noTracksAreActiveInMaster()) {
	                                destroyMasterMediaStream(reason);
	                            }

	                            internalMediaStream.isStopped = true;
	                        },

	                        monitor: function monitor(options, callback) {
	                            if (typeof options !== 'object') {
	                                throw new Error('"options" must be an object');
	                            }

	                            if (typeof callback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }

	                            var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

	                            options.direction = 'inbound';

	                            monitor.start(options, function activeCallback() {
	                                return internalMediaStream.mediaStream.isActive();
	                            }, function monitorCallback(reason) {
	                                that._logger.warn('[%s] Media stream triggered monitor condition for [%s]', streamId, reason);

	                                return callback(internalMediaStream.mediaStream, 'client-side-failure', reason);
	                            });
	                        },

	                        getStream: function getStream() {
	                            return stream;
	                        },

	                        isActive: function isActive() {
	                            var isMasterStreamStopped = state.stopped;
	                            var isMasterStreamDestroyed = typeof that._mediaStreams[streamId] !== 'object';
	                            var isCurrentStreamStopped = internalMediaStream.isStopped;

	                            return !isMasterStreamStopped && !isMasterStreamDestroyed && !isCurrentStreamStopped;
	                        },

	                        getStreamId: function getStreamId() {
	                            return streamId;
	                        },

	                        select: function select(trackSelectCallback) {
	                            if (typeof trackSelectCallback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }

	                            if (typeof window.MediaStream !== 'function') {
	                                throw new Error('MediaStream not supported in current browser');
	                            }

	                            var tracks = masterStream.getTracks();
	                            var streamToAttach = new window.MediaStream();

	                            for (var i = 0; i < tracks.length; i++) {
	                                if (trackSelectCallback(tracks[i], i)) {
	                                    streamToAttach.addTrack(tracks[i]);
	                                }
	                            }

	                            if (streamToAttach.getTracks().length === 0) {
	                                return that._logger.warn('No tracks selected');
	                            }

	                            var newMediaStream = createMediaStream(streamToAttach);
	                            internalMediaStream.children.push(newMediaStream);

	                            return newMediaStream.mediaStream;
	                        }
	                    },

	                    streamErrorCallback: function (status, reason) {
	                        // recursively calls all children error callbacks
	                        for (var i = 0; i < internalMediaStream.children.length; i++) {
	                            internalMediaStream.children[i].streamErrorCallback(status, reason);
	                        }

	                        var mediaStream = internalMediaStream.mediaStream;

	                        if (typeof mediaStream.streamErrorCallback === 'function') {
	                            mediaStream.streamErrorCallback(mediaStream, status, reason);
	                        }
	                    },

	                    streamEndedCallback: function (status, reason) {
	                        // recursively calls all children ended callbacks
	                        for (var i = 0; i < internalMediaStream.children.length; i++) {
	                            internalMediaStream.children[i].streamEndedCallback(status, reason);
	                        }

	                        if (internalMediaStream.isStreamEnded) {
	                            return;
	                        }

	                        var mediaStream = internalMediaStream.mediaStream;

	                        internalMediaStream.isStreamEnded = true;

	                        if (typeof mediaStream.streamEndedCallback === 'function') {
	                            mediaStream.streamEndedCallback(mediaStream, status, reason);
	                        }

	                        mediaStream.stop();

	                        if (internalMediaStream.renderer) {
	                            internalMediaStream.renderer.stop();
	                        }
	                    },

	                    dataQualityChangedCallback: function (status, reason) {
	                        for (var i = 0; i < internalMediaStream.children.length; i++) {
	                            internalMediaStream.children[i].dataQualityChangedCallback(status, reason);
	                        }

	                        var renderer = internalMediaStream.renderer;

	                        if (!renderer) {
	                            return;
	                        }

	                        if (typeof renderer.dataQualityChangedCallback === 'function') {
	                            renderer.dataQualityChangedCallback(renderer, status, reason);
	                        }
	                    }
	                };

	                return internalMediaStream;
	            };

	            function noTracksAreActiveInMaster() {
	                var tracks = masterStream.getTracks();

	                for (var i = 0; i < tracks.length; i++) {
	                    var track = tracks[i];

	                    if (!isTrackStopped(track)) {
	                        return false;
	                    }
	                }

	                return true;
	            }

	            function destroyMasterMediaStream(reason) {
	                if (state.stopped) {
	                    return;
	                }

	                that._logger.info('[%s] stop media stream', streamId);

	                closePeerConnection.call(that, streamId, peerConnection, 'stop');

	                that._protocol.destroyStream(streamId, reason || '', function (value, error) {
	                    if (error) {
	                        that._logger.error('[%s] failed to destroy stream', streamId);
	                        return;
	                    }

	                    that._logger.info('[%s] destroyed stream', streamId);
	                });

	                state.stopped = true;
	            }

	            var internalMediaStream = createMediaStream(masterStream);

	            that._mediaStreams[streamId] = internalMediaStream;

	            callback.call(that, internalMediaStream.mediaStream);
	        };

	        phenixRTC.addEventListener(peerConnection, 'addstream', onAddStream);
	    }

	    function setupIceCandidateListener(streamId, peerConnection, callback) {
	        var that = this;
	        var onIceCandidate = function onIceCandidate(event) {
	            var candidate = event.candidate;

	            if (candidate) {
	                that._logger.debug('[%s] ICE candidate: [%s] [%s] [%s]', streamId, candidate.sdpMid, candidate.sdpMLineIndex, candidate.candidate);
	            } else {
	                that._logger.info('[%s] ICE candidate discovery complete', streamId);
	            }

	            if (callback) {
	                callback(candidate);
	            }
	        };

	        phenixRTC.addEventListener(peerConnection, 'icecandidate', onIceCandidate);
	    }

	    function setupStateListener(streamId, peerConnection) {
	        var that = this;
	        var onNegotiationNeeded = function onNegotiationNeeded(event) {
	            that._logger.info('[%s] Negotiation needed');
	        };
	        var onIceConnectionStateChanged = function onIceConnectionStateChanged(event) {
	            that._logger.info('[%s] ICE connection state changed [%s]', streamId, peerConnection.iceConnectionState);
	        };
	        var onIceGatheringStateChanged = function onIceGatheringStateChanged(event) {
	            that._logger.info('[%s] ICE gathering state changed [%s]', streamId, peerConnection.iceGatheringState);
	        };
	        var onSignalingStateChanged = function onSignalingStateChanged(event) {
	            that._logger.info('[%s] Signaling state changed [%s]', streamId, peerConnection.signalingState);
	        };
	        var onConnectionStateChanged = function onConnectionStateChanged(event) {
	            that._logger.info('[%s] Connection state changed [%s]', streamId, peerConnection.connectionState);
	        };

	        phenixRTC.addEventListener(peerConnection, 'negotiationneeded', onNegotiationNeeded);
	        phenixRTC.addEventListener(peerConnection, 'iceconnectionstatechange', onIceConnectionStateChanged);
	        phenixRTC.addEventListener(peerConnection, 'icegatheringstatechange ', onIceGatheringStateChanged);
	        phenixRTC.addEventListener(peerConnection, 'signalingstatechange', onSignalingStateChanged);
	        phenixRTC.addEventListener(peerConnection, 'connectionstatechange', onConnectionStateChanged);
	    }

	    function createPublisher(streamId, callback, streamOptions) {
	        var that = this;
	        var state = {
	            stopped: false
	        };

	        var publisher = {
	            getStreamId: function getStreamId() {
	                return streamId;
	            },

	            isActive: function isActive() {
	                return !state.stopped;
	            },

	            hasEnded: function hasEnded() {
	                return state.stopped;
	            },

	            stop: function stop(reason) {
	                if (state.stopped) {
	                    return;
	                }

	                that._protocol.destroyStream(streamId, reason || '', function (value, error) {
	                    if (error) {
	                        that._logger.error('[%s] failed to destroy stream', streamId);
	                        return;
	                    }

	                    that._logger.info('[%s] destroyed stream', streamId);
	                });

	                state.stopped = true;
	            },

	            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
	                if (typeof callback !== 'function') {
	                    throw new Error('"callback" must be a function');
	                }

	                this.publisherEndedCallback = callback;
	            },

	            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
	                if (typeof callback !== 'function') {
	                    throw new Error('"callback" must be a function');
	                }

	                this.dataQualityChangedCallback = callback;
	            },

	            getOptions: function getOptions() {
	                return streamOptions;
	            }
	        };

	        that._publishers[streamId] = publisher;

	        callback(publisher);
	    }

	    function createPublisherPeerConnection(mediaStream, streamId, offerSdp, callback, options, streamOptions) {
	        var that = this;
	        var state = {
	            failed: false,
	            stopped: false
	        };
	        var hasCrypto = offerSdp.match(/a=crypto:/i);
	        var hasDataChannel = offerSdp.match(/m=application /i);
	        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
	            'optional': [
	                {
	                    DtlsSrtpKeyAgreement: !hasCrypto
	                }, {
	                    RtpDataChannels: hasDataChannel
	                }
	            ]
	        });
	        var remoteMediaStream = null;
	        var onIceCandidateCallback = null;

	        that._peerConnections[streamId] = peerConnection;

	        peerConnection.addStream(mediaStream);

	        var onFailure = function onFailure() {
	            if (state.failed) {
	                return;
	            }

	            state.failed = true;
	            state.stopped = true;

	            delete that._peerConnections[streamId];

	            closePeerConnection.call(that, streamId, peerConnection, 'failure');

	            callback.call(that, undefined, 'failed');
	        };

	        function onSetRemoteDescriptionSuccess() {
	            that._logger.info('Set remote description (offer)');

	            function onCreateAnswerSuccess(answerSdp) {
	                that._logger.info('Created answer [%s]', answerSdp.sdp);

	                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function (response, error) {
	                    if (error) {
	                        that._logger.warn('Failed to set answer description', error);
	                        return onFailure();
	                    }

	                    function onSetLocalDescriptionSuccess() {
	                        var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
	                        var video = /(mid:video)([\n\r]*)/gi;

	                        that._logger.info('Set local description (answer)');

	                        var limit = 0;
	                        var bandwithAttribute = bandwidthAttribute.exec(offerSdp);

	                        if (bandwithAttribute && bandwithAttribute.length >= 3) {
	                            limit = bandwithAttribute[2] * 1000;
	                        }

	                        var publisher = {
	                            getStreamId: function getStreamId() {
	                                return streamId;
	                            },

	                            isActive: function isActive() {
	                                return !state.stopped;
	                            },

	                            hasEnded: function hasEnded() {
	                                switch (peerConnection.iceConnectionState) {
	                                    case 'new':
	                                    case 'checking':
	                                    case 'connected':
	                                    case 'completed':
	                                        return false;
	                                    case 'disconnected':
	                                    case 'failed':
	                                    case 'closed':
	                                        return true;
	                                    default:
	                                        return true;
	                                }
	                            },

	                            stop: function stop(reason) {
	                                if (state.stopped) {
	                                    return;
	                                }

	                                closePeerConnection.call(that, streamId, peerConnection, 'closed');

	                                that._protocol.destroyStream(streamId, reason || '', function (value, error) {
	                                    if (error) {
	                                        that._logger.error('[%s] failed to destroy stream', streamId);
	                                        return;
	                                    }

	                                    that._logger.info('[%s] destroyed stream', streamId);
	                                });

	                                state.stopped = true;
	                            },

	                            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
	                                if (typeof callback !== 'function') {
	                                    throw new Error('"callback" must be a function');
	                                }

	                                this.publisherEndedCallback = callback;
	                            },

	                            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
	                                if (typeof callback !== 'function') {
	                                    throw new Error('"callback" must be a function');
	                                }

	                                this.dataQualityChangedCallback = callback;
	                            },

	                            setDetectSpeakingCallback: function setDetectSpeakingCallback() {

	                            },

	                            limitBandwidth: function limitBandwidth(bandwidthLimit) {
	                                if (typeof bandwidthLimit !== 'number') {
	                                    throw new Error('"bandwidthLimit" must be a number');
	                                }

	                                var newLimit = limit ? Math.min(bandwidthLimit, limit) : bandwidthLimit;
	                                var remoteDescription = peerConnection.remoteDescription;

	                                that._logger.info('Changing bandwidth limit to [%s]', newLimit);

	                                var updatedSdp = remoteDescription.sdp.replace(bandwidthAttribute, '');

	                                // Add new limit in kbps
	                                updatedSdp = updatedSdp.replace(video, function (match, videoLine, lineEnding, offset, sdp) {
	                                    return [videoLine, lineEnding, 'b=AS:', Math.ceil(newLimit / 1000), lineEnding].join('');
	                                });

	                                var updatedRemoteDescription = new phenixRTC.RTCSessionDescription({
	                                    type: remoteDescription.type,
	                                    sdp: updatedSdp
	                                });

	                                peerConnection.setRemoteDescription(updatedRemoteDescription);

	                                return {
	                                    dispose: function () {
	                                        peerConnection.setRemoteDescription(remoteDescription);
	                                    }
	                                }
	                            },

	                            monitor: function monitor(options, callback) {
	                                if (typeof options !== 'object') {
	                                    throw new Error('"options" must be an object');
	                                }
	                                if (typeof callback !== 'function') {
	                                    throw new Error('"callback" must be a function');
	                                }

	                                var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

	                                options.direction = 'outbound';

	                                monitor.start(options, function activeCallback() {
	                                    return that._publishers[streamId] === publisher && !state.stopped;
	                                }, function monitorCallback(reason) {
	                                    that._logger.warn('[%s] Publisher triggered monitor condition for [%s]', streamId, reason);

	                                    return callback(publisher, 'client-side-failure', reason);
	                                });
	                            },

	                            setRemoteMediaStreamCallback: function setRemoteMediaStreamCallback(callback) {
	                                if (typeof callback !== 'function') {
	                                    throw new Error('"callback" must be a function');
	                                }

	                                this.remoteMediaStreamCallback = callback;

	                                if (remoteMediaStream) {
	                                    callback(publisher, remoteMediaStream);
	                                }
	                            },

	                            getOptions: function getOptions() {
	                                return streamOptions;
	                            }
	                        };

	                        that._publishers[streamId] = publisher;

	                        callback.call(that, publisher);
	                    }

	                    if (_.includes(response.options, 'ice-candidates')) {
	                        onIceCandidateCallback = function (candidate) {
	                            var candidates = [];
	                            var options = [];

	                            if (candidate) {
	                                candidates.push(candidate);
	                            } else {
	                                options.push('completed');
	                            }

	                            that._protocol.addIceCandidates(streamId, candidates, options, function (response, error) {
	                                if (error) {
	                                    that._logger.warn('Failed to add ICE candidate', error);
	                                    return;
	                                }

	                                if (_.includes(response.options, 'cancel')) {
	                                    onIceCandidateCallback = null;
	                                }
	                            });
	                        };
	                    }

	                    var sessionDescription = new phenixRTC.RTCSessionDescription({
	                        type: 'answer',
	                        sdp: response.sessionDescription.sdp
	                    });

	                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
	                });
	            }

	            var mediaConstraints = {mandatory: {}};

	            if (phenixRTC.browser === 'Chrome') {
	                mediaConstraints.mandatory.OfferToReceiveVideo = options.receiveVideo === true;
	                mediaConstraints.mandatory.OfferToReceiveAudio = options.receiveAudio === true;
	            } else {
	                mediaConstraints.mandatory.offerToReceiveVideo = options.receiveVideo === true;
	                mediaConstraints.mandatory.offerToReceiveAudio = options.receiveAudio === true;
	            }

	            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
	        }

	        setupStreamAddedListener.call(that, streamId, state, peerConnection, function (mediaStream) {
	            var publisher = that._publishers[streamId];

	            remoteMediaStream = mediaStream;

	            if (publisher && publisher.remoteMediaStreamCallback) {
	                publisher.remoteMediaStreamCallback(publisher, mediaStream);
	            }
	        }, options);
	        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
	            if (onIceCandidateCallback) {
	                onIceCandidateCallback(candidate);
	            }
	        });
	        setupStateListener.call(that, streamId, peerConnection);

	        var offerSessionDescription = new phenixRTC.RTCSessionDescription({type: 'offer', sdp: offerSdp});

	        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
	    }

	    function createViewerPeerConnection(streamId, offerSdp, callback, options) {
	        var that = this;
	        var state = {
	            failed: false,
	            stopped: false
	        };
	        var hasCrypto = offerSdp.match(/a=crypto:/i);
	        var hasDataChannel = offerSdp.match(/m=application /i);
	        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
	            'optional': [
	                {
	                    DtlsSrtpKeyAgreement: !hasCrypto
	                }, {
	                    RtpDataChannels: hasDataChannel
	                }
	            ]
	        });
	        var onIceCandidateCallback = null;

	        that._peerConnections[streamId] = peerConnection;

	        var onFailure = function onFailure() {
	            if (state.failed) {
	                return;
	            }

	            state.failed = true;
	            state.stopped = true;

	            delete that._peerConnections[streamId];

	            closePeerConnection.call(that, streamId, peerConnection, 'failure');

	            callback.call(that, undefined, 'failed');
	        };

	        function onSetRemoteDescriptionSuccess() {
	            that._logger.debug('Set remote description (offer)');

	            function onCreateAnswerSuccess(answerSdp) {
	                that._logger.info('Created answer [%s]', answerSdp.sdp);

	                that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function (response, error) {
	                    if (error) {
	                        that._logger.warn('Failed to set answer description', error);

	                        return onFailure();
	                    }

	                    function onSetLocalDescriptionSuccess() {
	                        that._logger.debug('Set local description (answer)');
	                    }

	                    if (_.includes(response.options, 'ice-candidates')) {
	                        onIceCandidateCallback = function (candidate) {
	                            var candidates = [];
	                            var options = [];

	                            if (candidate) {
	                                candidates.push(candidate);
	                            } else {
	                                options.push('completed');
	                            }

	                            that._protocol.addIceCandidates(streamId, candidate, options, function (response, error) {
	                                if (error) {
	                                    that._logger.warn('Failed to add ICE candidate', error);
	                                    return;
	                                }

	                                if (_.includes(response.options, 'cancel')) {
	                                    onIceCandidateCallback = null;
	                                }
	                            });
	                        };
	                    }

	                    var sessionDescription = new phenixRTC.RTCSessionDescription({
	                        type: 'answer',
	                        sdp: response.sessionDescription.sdp
	                    });

	                    peerConnection.setLocalDescription(sessionDescription, onSetLocalDescriptionSuccess, onFailure);
	                });
	            }

	            var mediaConstraints = {mandatory: {}};

	            if (phenixRTC.browser === 'Chrome') {
	                mediaConstraints.mandatory.OfferToReceiveVideo = options.receiveVideo !== false;
	                mediaConstraints.mandatory.OfferToReceiveAudio = options.receiveAudio !== false;
	            } else {
	                mediaConstraints.mandatory.offerToReceiveVideo = options.receiveVideo !== false;
	                mediaConstraints.mandatory.offerToReceiveAudio = options.receiveAudio !== false;
	            }

	            peerConnection.createAnswer(onCreateAnswerSuccess, onFailure, mediaConstraints);
	        }

	        setupStreamAddedListener.call(that, streamId, state, peerConnection, callback, options);
	        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
	            if (onIceCandidateCallback) {
	                onIceCandidateCallback(candidate);
	            }
	        });
	        setupStateListener.call(that, streamId, peerConnection);

	        var offerSessionDescription = new phenixRTC.RTCSessionDescription({type: 'offer', sdp: offerSdp});

	        peerConnection.setRemoteDescription(offerSessionDescription, onSetRemoteDescriptionSuccess, onFailure);
	    }

	    function createLiveViewer(streamId, offerSdp, callback, options) {
	        var that = this;

	        var dashMatch = offerSdp.match('a=x-playlist:([^\n]*[.]mpd)');
	        var hlsMatch = offerSdp.match('a=x-playlist:([^\n]*[.]m3u8)');

	        if (dashMatch && dashMatch.length === 2 && that._shaka && that._shaka.Player.isBrowserSupported()) {
	            return createShakaLiveViewer.call(that, streamId, dashMatch[1], callback, options);
	        } else if (hlsMatch && hlsMatch.length === 2 && document.createElement('video').canPlayType('application/vnd.apple.mpegURL') === 'maybe') {
	            return createHlsLiveViewer.call(that, streamId, hlsMatch[1], callback, options);
	        } else {
	            that._logger.warn('[%s] Offer does not contain a supported manifest', streamId, offerSdp);

	            return callback.call(that, undefined, 'failed');
	        }
	    }

	    function createShakaLiveViewer(streamId, uri, callback, options) {
	        var that = this;

	        if (!that._shaka) {
	            that._logger.warn('[%s] Shaka player not available', streamId);

	            return callback.call(that, undefined, 'live-player-missing');
	        }

	        if (!that._shaka.Player.isBrowserSupported()) {
	            that._logger.warn('[%s] Shaka does not support this browser', streamId);

	            return callback.call(that, undefined, 'browser-unsupported');
	        }

	        var shaka = that._shaka;
	        var manifestUri = encodeURI(uri).replace(/[#]/g, '%23');

	        var onPlayerError = function onPlayerError(event) {
	            var mediaStream = internalMediaStream;

	            if (!mediaStream.streamErrorCallback) {
	                that._logger.error('[%s] DASH live stream error event [%s]', streamId, event.detail);
	            } else {
	                that._logger.debug('[%s] DASH live stream error event [%s]', streamId, event.detail);

	                mediaStream.streamErrorCallback(mediaStream, 'shaka', event.detail);
	            }
	        };

	        var internalMediaStream = {
	            renderer: null,
	            isStreamEnded: false,
	            isStopped: false,

	            mediaStream: {
	                createRenderer: function createRenderer() {
	                    var player = null;
	                    var dimensionsChangedMonitor = new DimensionsChangedMonitor(that._logger);

	                    return {
	                        start: function start(elementToAttachTo) {
	                            player = new shaka.Player(elementToAttachTo);

	                            player.configure({
	                                manifest: {
	                                    retryParameters: {
	                                        timeout: 10000
	                                    }
	                                },
	                                streaming: {
	                                    rebufferingGoal: 2,
	                                    bufferingGoal: 10,
	                                    bufferBehind: 30,
	                                    retryParameters: {
	                                        timeout: 10000
	                                    }
	                                }
	                            });

	                            if (options.receiveAudio === false) {
	                                elementToAttachTo.muted = true;
	                            }

	                            internalMediaStream.renderer = this;

	                            player.addEventListener('error', onPlayerError);

	                            var load = player.load(manifestUri).then(function () {
	                                that._logger.info('[%s] DASH live stream has been loaded', streamId);

	                                if (typeof elementToAttachTo.play === 'function') {
	                                    elementToAttachTo.play();
	                                }
	                            }).catch(function (e) {
	                                that._logger.error('[%s] Error while loading DASH live stream [%s]', streamId, e.code, e);

	                                internalMediaStream.streamErrorCallback('shaka', e);
	                            });

	                            dimensionsChangedMonitor.start(this, elementToAttachTo);

	                            return elementToAttachTo;
	                        },

	                        stop: function stop() {
	                            dimensionsChangedMonitor.stop();

	                            if (player) {
	                                var finalizeStreamEnded = function finalizeStreamEnded() {
	                                    var reason = '';

	                                    internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason);

	                                    player = null;
	                                };

	                                var destroy = player.destroy()
	                                    .then(function () {
	                                        that._logger.info('[%s] DASH live stream has been destroyed', streamId);
	                                    }).then(function () {
	                                        finalizeStreamEnded();
	                                    }).catch(function (e) {
	                                        that._logger.error('[%s] Error while destroying DASH live stream [%s]', streamId, e.code, e);

	                                        finalizeStreamEnded();

	                                        internalMediaStream.streamErrorCallback('shaka', e);
	                                    });
	                            }

	                            internalMediaStream.renderer = null;
	                        },

	                        getStats: function getStats() {
	                            if (!player) {
	                                return {
	                                    width: 0,
	                                    height: 0,
	                                    currentTime: 0.0,
	                                    networkState: NetworkStates.NETWORK_NO_SOURCE
	                                };
	                            }

	                            var stat = player.getStats();

	                            stat.currentTime = stat.playTime + stat.bufferingTime;

	                            if (stat.estimatedBandwidth > 0) {
	                                stat.networkState = NetworkStates.NETWORK_LOADING;
	                            } else if (stat.playTime > 0) {
	                                stat.networkState = NetworkStates.NETWORK_IDLE;
	                            } else if (stat.video) {
	                                stat.networkState = NetworkStates.NETWORK_EMPTY;
	                            } else {
	                                stat.networkState = NetworkStates.NETWORK_NO_SOURCE;
	                            }

	                            return stat;
	                        },

	                        setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
	                            if (typeof callback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }

	                            this.dataQualityChangedCallback = callback;
	                        },

	                        getPlayer: function getPlayer() {
	                            return player;
	                        },

	                        isActive: function isActive() {
	                            return !internalMediaStream.isStopped;
	                        },

	                        getStreamId: function getStreamId() {
	                            return streamId;
	                        },

	                        setVideoDisplayDimensionsChangedCallback: function setVideoDisplayDimensionsChangedCallback(callback, options) {
	                            dimensionsChangedMonitor.setVideoDisplayDimensionsChangedCallback(callback, options);
	                        }
	                    };
	                },

	                select: function select(trackSelectCallback) {
	                    that._logger.warn('[%s] selection of tracks not supported for shaka live streams', streamId);

	                    return this;
	                },

	                setStreamEndedCallback: function setStreamEndedCallback(callback) {
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }

	                    this.streamEndedCallback = callback;
	                },

	                setStreamErrorCallback: function setStreamErrorCallback(callback) {
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }

	                    this.streamErrorCallback = callback;
	                },

	                stop: function stop(reason) {
	                    if (internalMediaStream.isStopped) {
	                        return;
	                    }

	                    that._logger.info('[%s] stop media stream', streamId);

	                    that._protocol.destroyStream(streamId, reason || '', function (value, error) {
	                        if (error) {
	                            that._logger.error('[%s] failed to destroy stream', streamId);
	                            return;
	                        }

	                        that._logger.info('[%s] destroyed stream', streamId);
	                    });

	                    internalMediaStream.isStopped = true;
	                },

	                monitor: function monitor(options, callback) {
	                    if (typeof options !== 'object') {
	                        throw new Error('"options" must be an object');
	                    }
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }
	                }
	            },

	            streamErrorCallback: function (status, reason) {
	                var mediaStream = internalMediaStream.mediaStream;

	                if (typeof mediaStream.streamErrorCallback === 'function') {
	                    mediaStream.streamErrorCallback(mediaStream, status, reason);
	                }
	            },

	            streamEndedCallback: function (status, reason) {
	                if (internalMediaStream.isStreamEnded) {
	                    return;
	                }

	                var mediaStream = internalMediaStream.mediaStream;

	                internalMediaStream.isStreamEnded = true;

	                if (typeof mediaStream.streamEndedCallback === 'function') {
	                    mediaStream.streamEndedCallback(mediaStream, status, reason);
	                }

	                mediaStream.stop();

	                if (internalMediaStream.renderer) {
	                    internalMediaStream.renderer.stop();
	                }
	            },

	            dataQualityChangedCallback: function (status, reason) {
	                var renderer = internalMediaStream.renderer;

	                if (!renderer) {
	                    return;
	                }

	                if (typeof renderer.dataQualityChangedCallback === 'function') {
	                    renderer.dataQualityChangedCallback(renderer, status, reason);
	                }
	            }
	        };

	        that._mediaStreams[streamId] = internalMediaStream;

	        callback.call(that, internalMediaStream.mediaStream);
	    }

	    function createHlsLiveViewer(streamId, uri, callback, options) {
	        var that = this;

	        var manifestUri = encodeURI(uri).replace(/[#]/g, '%23');

	        var onPlayerError = function onPlayerError(event) {
	            var mediaStream = internalMediaStream.mediaStream;

	            if (!mediaStream.streamErrorCallback) {
	                that._logger.error('[%s] HLS live stream error event [%s]', streamId, event.detail);
	            } else {
	                that._logger.debug('[%s] HLS live stream error event [%s]', streamId, event.detail);
	                mediaStream.streamErrorCallback(mediaStream, 'hls', event.detail);
	            }
	        };

	        var internalMediaStream = {
	            renderer: null,
	            isStreamEnded: false,
	            isStopped: false,

	            mediaStream: {
	                createRenderer: function createRenderer() {
	                    var element = null;
	                    var dimensionsChangedMonitor = new DimensionsChangedMonitor(that._logger);

	                    return {
	                        start: function start(elementToAttachTo) {
	                            try {
	                                elementToAttachTo.src = manifestUri;

	                                if (options.receiveAudio === false) {
	                                    elementToAttachTo.muted = true;
	                                }

	                                internalMediaStream.renderer = this;

	                                elementToAttachTo.addEventListener('error', onPlayerError);
	                                elementToAttachTo.play();

	                                element = elementToAttachTo;

	                                dimensionsChangedMonitor.start(this, element);

	                                return elementToAttachTo;
	                            } catch (e) {
	                                that._logger.error('[%s] Error while loading HLS live stream [%s]', streamId, e.code, e);

	                                internalMediaStream.streamErrorCallback('hls', e);
	                            }
	                        },

	                        stop: function stop() {
	                            dimensionsChangedMonitor.stop();

	                            if (element) {
	                                var finalizeStreamEnded = function finalizeStreamEnded() {
	                                    element = null;

	                                    var reason = '';

	                                    internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason);

	                                };

	                                try {
	                                    element.pause();

	                                    that._logger.info('[%s] HLS live stream has been destroyed', streamId);

	                                    finalizeStreamEnded();
	                                } catch (e) {
	                                    that._logger.error('[%s] Error while destroying HLS live stream [%s]', streamId, e.code, e);

	                                    finalizeStreamEnded();

	                                    internalMediaStream.streamErrorCallback('hls', e);
	                                }
	                            }

	                            internalMediaStream.renderer = null;
	                        },

	                        getStats: function getStats() {
	                            if (!element) {
	                                return {
	                                    width: 0,
	                                    height: 0,
	                                    currentTime: 0.0,
	                                    networkState: NetworkStates.NETWORK_NO_SOURCE
	                                };
	                            }

	                            return {
	                                width: element.videoWidth || element.width,
	                                height: element.videoHeight || element.height,
	                                currentTime: element.currentTime,
	                                networkState: element.networkState
	                            }
	                        },

	                        setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
	                            if (typeof callback !== 'function') {
	                                throw new Error('"callback" must be a function');
	                            }

	                            this.dataQualityChangedCallback = callback;
	                        },

	                        setVideoDisplayDimensionsChangedCallback: function setVideoDisplayDimensionsChangedCallback(callback, options) {
	                            dimensionsChangedMonitor.setVideoDisplayDimensionsChangedCallback(callback, options);
	                        }
	                    };
	                },

	                select: function select(trackSelectCallback) {
	                    that._logger.warn('[%s] selection of tracks not supported for HLS live streams', streamId);

	                    return this;
	                },

	                setStreamEndedCallback: function setStreamEndedCallback(callback) {
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }

	                    this.streamEndedCallback = callback;
	                },

	                setStreamErrorCallback: function setStreamErrorCallback(callback) {
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }

	                    this.streamErrorCallback = callback;
	                },

	                stop: function stop(reason) {
	                    if (internalMediaStream.isStopped) {
	                        return;
	                    }

	                    that._logger.info('[%s] stop media stream', streamId);

	                    that._protocol.destroyStream(streamId, reason || '', function (value, error) {
	                        if (error) {
	                            that._logger.error('[%s] failed to destroy stream', streamId);
	                            return;
	                        }

	                        that._logger.info('[%s] destroyed stream', streamId);
	                    });

	                    internalMediaStream.isStopped = true;
	                },

	                monitor: function monitor(options, callback) {
	                    if (typeof options !== 'object') {
	                        throw new Error('"options" must be an object');
	                    }
	                    if (typeof callback !== 'function') {
	                        throw new Error('"callback" must be a function');
	                    }
	                },

	                isActive: function isActive() {
	                    return !internalMediaStream.isStopped;
	                },

	                getStreamId: function getStreamId() {
	                    return streamId;
	                }
	            },

	            streamErrorCallback: function (status, reason) {
	                var mediaStream = internalMediaStream.mediaStream;

	                if (typeof mediaStream.streamErrorCallback === 'function') {
	                    mediaStream.streamErrorCallback(mediaStream, status, reason);
	                }
	            },

	            streamEndedCallback: function (status, reason) {
	                if (internalMediaStream.isStreamEnded) {
	                    return;
	                }

	                var mediaStream = internalMediaStream.mediaStream;

	                internalMediaStream.isStreamEnded = true;

	                if (typeof mediaStream.streamEndedCallback === 'function') {
	                    mediaStream.streamEndedCallback(mediaStream, status, reason);
	                }

	                mediaStream.stop();

	                if (internalMediaStream.renderer) {
	                    internalMediaStream.renderer.stop();
	                }
	            },

	            dataQualityChangedCallback: function (status, reason) {
	                var renderer = internalMediaStream.renderer;

	                if (!renderer) {
	                    return;
	                }

	                if (typeof renderer.dataQualityChangedCallback === 'function') {
	                    renderer.dataQualityChangedCallback(renderer, status, reason);
	                }
	            }
	        };

	        that._mediaStreams[streamId] = internalMediaStream;

	        callback.call(that, internalMediaStream.mediaStream);
	    }

	    function transitionToStatus(newStatus) {
	        if (this._status !== newStatus) {
	            this._status = newStatus;

	            switch (newStatus) {
	                case 'connecting':
	                    break;
	                case 'offline':
	                    this._offlineCallback.call(this);
	                    break;
	                case 'online':
	                    this._onlineCallback.call(this);
	                    break;
	            }
	        }
	    }

	    function addTracksToWebRTCStream(stream, tracks) {
	        if (typeof stream !== 'object') {
	            return;
	        }
	        if (typeof tracks !== 'object') {
	            return;
	        }
	        if (tracks.constructor !== Array) {
	            return;
	        }

	        for (var i = 0; i < tracks.length; i++) {
	            stream.addTrack(tracks[i]);
	        }
	    }

	    function stopWebRTCStream(stream) {
	        if (stream && typeof stream.getTracks === 'function') {
	            var tracks = stream.getTracks();

	            for (var i = 0; i < tracks.length; i++) {
	                var track = tracks[i];

	                track.stop();
	            }
	        }
	    }

	    function isTrackStopped(track) {
	        if (typeof track !== 'object') {
	            throw new Error('Invalid track.');
	        }
	        return track.readyState === 'ended';
	    }

	    function closePeerConnection(streamId, peerConnection, reason) {
	        if (peerConnection.signalingState !== 'closed' && !peerConnection.__closing) {
	            this._logger.debug('[%s] close peer connection [%s]', streamId, reason);
	            peerConnection.close();
	            peerConnection.__closing = true;
	        }
	    }

	    return PhenixPCast;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var _ = function() {};

	    _.bind = function bind(callback, that) {
	        var argsAfterContext = Array.prototype.slice.call(arguments, 2);

	        return function boundFunction() {
	            if (!_.isFunction(callback)) {
	                throw new TypeError('_.bind - callback must be a function');
	            }

	            var combinedArguments = argsAfterContext.concat(Array.prototype.slice.call(arguments));

	            return callback.apply(that, combinedArguments);
	        };
	    };

	    _.now = function now() {
	        return new Date().getTime();
	    };

	    _.utc = function utc(date) {
	        if (_.isNumber(date)) {
	            return date;
	        }

	        return Math.floor(date);
	    };

	    _.map = function map(collection, callback) {
	        if (!_.isObject(collection)) {
	            throw new Error('Collection must be an object or array.');
	        }

	        var newArray = [];

	        if (collection.constructor === Array) {
	            _.forEach(collection, function mapCollection(item) {
	                if (_.isString(callback) && _.isObject(item)) {
	                    newArray.push(item[callback]);
	                } else if (_.isFunction(callback)) {
	                    newArray.push(callback(item));
	                }
	            });
	        } else {
	            _.forOwn(collection, function mapCollection(value) {
	                if (_.isFunction(callback)) {
	                    newArray.push(callback(value));
	                }
	            });
	        }

	        return newArray;
	    };

	    _.forEach = function forEach(collection, callback) {
	        if (!_.isFunction(callback)) {
	            throw new Error('Callback must be a function');
	        }
	        assertIsArray(collection);

	        for (var i = 0; i < collection.length; i++) {
	            callback(collection[i], i);
	        }
	    };

	    _.forOwn = function forOwn(objectWithProperties, callback) {
	        if (!_.isFunction(callback)) {
	            throw new Error('Callback must be a function');
	        }
	        if (!_.isObject(objectWithProperties)) {
	            throw new Error('objectWithProperties must be an object.');
	        }

	        var keys = Object.keys(objectWithProperties);

	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];

	            if (objectWithProperties.hasOwnProperty(key)) {
	                callback(objectWithProperties[key], key);
	            }
	        }
	    };

	    _.includes = function includes(collection, value) {
	        if (!_.isObject(collection)) {
	            throw new Error('collection type not supported. Collection must be an array or object.');
	        }

	        var hasValue = false;

	        var checkCollection = function checkCollection(currentValue) {
	            if (currentValue === value) {
	                hasValue = true;
	            }
	        };

	        if (collection.constructor === Array) {
	            _.forEach(collection, checkCollection);
	        } else {
	            _.forOwn(collection, checkCollection);
	        }

	        return hasValue;
	    };

	    _.reduce = function reduce(collection, callback, initialValue) {
	        if (!_.isObject(collection)) {
	            throw new Error('collection type not supported. Collection must be an array or object.');
	        }

	        var result = initialValue || null;

	        if (collection.constructor === Array) {
	            _.forEach(collection, function (item) {
	                result = callback(result, item);
	            });
	        } else {
	            _.forOwn(collection, function (value, key) {
	                result = callback(result, value, key);
	            });
	        }

	        return result;
	    };

	    _.sample = function sample(collection) {
	        assertIsArray(collection);

	        return collection[Math.floor(Math.random()*collection.length)];
	    };

	    _.uniqueId = function() {
	        return (_.now() * Math.random()).toString();
	    };

	    _.find = function find(collection, callback, initialIndex) {
	        assertIsArray(collection);

	        var hasItem;

	        _.forEach(collection, function findInCollection(value, index) {
	            if (callback(value) && index >= (initialIndex || 0)) {
	                hasItem = value;
	                return hasItem;
	            }
	        });

	        return hasItem;
	    };

	    _.findIndex = function find(collection, callback, initialIndex) {
	        assertIsArray(collection);

	        var hasItem;

	        _.forEach(collection, function findInCollection(value, index) {
	            if (callback(value) && index >= (initialIndex || 0)) {
	                hasItem = index;
	                return hasItem;
	            }
	        });

	        return hasItem;
	    };

	    _.filter = function filter(collection, callback) {
	        assertIsArray(collection);

	        var newCollection = [];

	        _.forEach(collection, function findInCollection(value) {
	            if (callback(value)) {
	                newCollection.push(value);
	            }
	        });

	        return newCollection;
	    };

	    _.remove = function remove(collection, callback) {
	        assertIsArray(collection);

	        var filterCallback = function filterCallback(value) {
	            return !callback(value);
	        };

	        return _.filter(collection, filterCallback);
	    };

	    _.hasDifferences = function hasDifferences(collectionA, collectionB, deep) {
	        return _.findDifferences(collectionA, collectionB, deep).length > 0;
	    };

	    _.findDifferences = function findDifferences(collectionA, collectionB, deep) {
	        var differences = [];
	        var visitedKeys = {};

	        function getDifferences(value, indexOrKey) {
	            visitedKeys[indexOrKey] = 1;

	            if ((_.isObject(value) || _.isArray(value)) && deep) {
	                if (!_.hasIndexOrKey(collectionB, indexOrKey)) {
	                    differences.push(indexOrKey);
	                } else if (!_.sameTypes(collectionA[indexOrKey], collectionB[indexOrKey])) {
	                    differences.push(indexOrKey);
	                } else if (_.hasDifferences(collectionA[indexOrKey], collectionB[indexOrKey], deep)) {
	                    differences.push(indexOrKey);
	                }
	            } else if (collectionA[indexOrKey] !== collectionB[indexOrKey]) {
	                differences.push(indexOrKey);
	            }
	        }

	        if (_.isArray(collectionA) && _.isArray(collectionB)) {
	            if (collectionA.length > collectionB.length) {
	                _.forEach(collectionA, getDifferences);
	            } else {
	                _.forEach(collectionB, getDifferences);
	            }
	        } else if (_.isObject(collectionA) && _.isObject(collectionB) && !_.isArray(collectionA) && !_.isArray(collectionB)) {
	            _.forOwn(collectionA, getDifferences);

	            _.forOwn(collectionB, function(value, key) {
	                if (!visitedKeys.hasOwnProperty(key)) {
	                    differences.push(key);
	                }
	            });
	        } else {
	            throw new Error('Object types do not match');
	        }

	        return differences;
	    };

	    _.hasIndexOrKey = function hasIndexOrKey(collection, indexOrKey) {
	        if (_.isArray(collection)) {
	            return collection.length > parseInt(indexOrKey);
	        } else if (_.isObject(collection)) {
	            return collection.hasOwnProperty(indexOrKey)
	        }
	        return false;
	    };

	    _.sameTypes = function sameTypes(first, second) {
	        if (_.isNullOrUndefined(first) || _.isNullOrUndefined(second)) {
	            return _.isNullOrUndefined(first) && _.isNullOrUndefined(second);
	        }
	        if (_.isArray(first) || _.isArray(second)) {
	            return _.isArray(first) && _.isArray(second);
	        }

	        return typeof first === typeof second;
	    };

	    _.freeze = function freeze(obj) {
	        if ('freeze' in Object) {
	            return Object.freeze(obj);
	        }

	        return obj;
	    };

	    _.noop = function() {
	        return undefined;
	    };

	    _.isObject = function isObject(obj) {
	        if (obj === null) {
	            return false;
	        }

	        return typeof obj === 'object';
	    };

	    _.isArray = function isArray(array) {
	        if (!_.isObject(array)) {
	            return false;
	        }

	        return array.constructor === Array;
	    };

	    _.isString = function isString(string) {
	        return typeof string === 'string';
	    };

	    _.isNumber = function isNumber(number) {
	        if (isNaN(number)) {
	            return false;
	        }

	        return typeof number === 'number';
	    };

	    _.isFunction = function isFunction(func) {
	        return typeof func === 'function';
	    };

	    _.isNullOrUndefined = function isNullOrUndefined(value) {
	        return value === null || value === undefined;
	    };

	    _.getEnumName = function getEnumName(enums, nameOrId) {
	        var enumObject = null;

	        var enumArray = _.map(enums, function(value) {
	            return value;
	        });

	        if (_.isNumber(nameOrId)) {
	            enumObject = _.find(enumArray, function(current) {
	                return current.id === nameOrId;
	            });
	        } else if (_.isString(nameOrId)) {
	            enumObject = _.find(enumArray, function(current) {
	                return current.name.toLowerCase() === nameOrId.toLowerCase();
	            });
	        }

	        if (enumObject) {
	            return enumObject.name;
	        }

	        return null;
	    };

	    var assertIsArray = function isArray(collection) {
	        if (!_.isArray(collection)) {
	            throw new Error('Array must be an array.');
	        }
	    };

	    return _;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ ], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var log = function () {
	            console.log.apply(console, arguments);
	        } || function () {
	        };
	    var logError = function () {
	            console.error.apply(console, arguments);
	        } || log;

	    function Logger() {
	    }

	    Logger.prototype.trace = function (/*formatStr, [parameter], ...*/) {
	        return log(arguments);
	    };

	    Logger.prototype.debug = function (/*formatStr, [parameter], ...*/) {
	        return log(arguments);
	    };

	    Logger.prototype.info = function (/*formatStr, [parameter], ...*/) {
	        return log(arguments);
	    };

	    Logger.prototype.warn = function (/*formatStr, [parameter], ...*/) {
	        return logError(arguments);
	    };

	    Logger.prototype.error = function (/*formatStr, [parameter], ...*/) {
	        return logError(arguments);
	    };

	    Logger.prototype.fatal = function (/*formatStr, [parameter], ...*/) {
	        return logError(arguments);
	    };

	    return Logger;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(7),
	    __webpack_require__(12),
	    __webpack_require__(1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, MQProtocol, ByteBuffer, phenixRTC) {
	    'use strict';

	    function PCastProtocol(uri, deviceId, version, logger) {
	        if (typeof uri !== 'string') {
	            throw new Error('Must pass a valid "uri"');
	        }
	        if (typeof deviceId !== 'string') {
	            throw new Error('Must pass a valid "deviceId"');
	        }
	        if (typeof version !== 'string') {
	            throw new Error('Must pass a valid "version"');
	        }
	        if (typeof logger !== 'object') {
	            throw new Error('Must pass a valid "logger"');
	        }
	        this._uri = uri;
	        this._deviceId = deviceId;
	        this._version = version;
	        this._logger = logger;
	        this._mqProtocol = new MQProtocol(this._logger);

	        this._logger.info('Connecting to [%s]', uri);
	        this._webSocket = new WebSocket(uri);
	        this._webSocket.onopen = _.bind(onOpen, this);
	        this._webSocket.onclose = _.bind(onClose, this);
	        this._webSocket.onmessage = _.bind(onMessage, this);
	        this._webSocket.onerror = _.bind(onError, this);

	        this._nextRequestId = 0;
	        this._events = {};
	        this._requests = {};
	    }

	    PCastProtocol.prototype.on = function (eventName, handler) {
	        if (typeof eventName !== 'string') {
	            throw new Error('"eventName" must be a string');
	        }
	        if (typeof handler !== 'function') {
	            throw new Error('"handler" must be a function');
	        }

	        var handlers = getEventHandlers.call(this, eventName);

	        handlers.push(handler);

	        return _.bind(removeEventHandler, this, eventName, handler);
	    };

	    PCastProtocol.prototype.authenticate = function (authToken, callback) {
	        if (typeof authToken !== 'string') {
	            throw new Error('"authToken" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var authenticate = {
	            apiVersion: this._mqProtocol.getApiVersion(),
	            clientVersion: this._version,
	            deviceId: this._deviceId,
	            platform: phenixRTC.browser,
	            platformVersion: phenixRTC.browserVersion.toString(),
	            authenticationToken: authToken
	        };

	        if (this._sessionId) {
	            auth.sessionId = this._sessionId;
	        }

	        return sendRequest.call(this, 'pcast.Authenticate', authenticate, callback);
	    };

	    PCastProtocol.prototype.getSessionId = function () {
	        return this._sessionId;
	    };

	    PCastProtocol.prototype.disconnect = function () {
	        delete this._sessionId;

	        return this._webSocket.close(1000, 'byebye');
	    };

	    PCastProtocol.prototype.bye = function (reason, callback) {
	        if (typeof reason !== 'string') {
	            throw new Error('"reason" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var bye = {
	            sessionId: this._sessionId,
	            reason: reason
	        };

	        return sendRequest.call(this, 'pcast.Bye', bye, callback);
	    };

	    PCastProtocol.prototype.setupStream = function (streamType, streamToken, options, callback) {
	        if (typeof streamType !== 'string') {
	            throw new Error('"streamType" must be a string');
	        }
	        if (typeof streamToken !== 'string') {
	            throw new Error('"streamToken" must be a string');
	        }
	        if (typeof options !== 'object') {
	            throw new Error('"options" must be an object');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var browser = phenixRTC.browser || 'UnknownBrowser';
	        var browserWithVersion = browser + '-' + (phenixRTC.browserVersion || 0);
	        var setupStream = {
	            streamToken: streamToken,
	            createStream: {
	                sessionId: this._sessionId,
	                options: ['data-quality-notifications'],
	                connectUri: options.connectUri,
	                connectOptions: options.connectOptions || []
	            }
	        };

	        if (options.negotiate) {
	            setupStream.createStream.createOfferDescription = {
	                streamId: '',
	                options: [streamType, browser, browserWithVersion],
	                apiVersion: this._mqProtocol.getApiVersion()
	            }
	        }

	        return sendRequest.call(this, 'pcast.SetupStream', setupStream, callback);
	    };

	    PCastProtocol.prototype.setAnswerDescription = function (streamId, sdp, callback) {
	        if (typeof streamId !== 'string') {
	            throw new Error('"streamId" must be a string');
	        }
	        if (typeof sdp !== 'string') {
	            throw new Error('"sdp" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var setRemoteDescription = {
	            streamId: streamId,
	            sessionDescription: {
	                type: 'Answer',
	                sdp: sdp
	            },
	            apiVersion: this._mqProtocol.getApiVersion()
	        };

	        return sendRequest.call(this, 'pcast.SetRemoteDescription', setRemoteDescription, callback);
	    };

	    PCastProtocol.prototype.addIceCandidates = function (streamId, candidates, options, callback) {
	        if (typeof streamId !== 'string') {
	            throw new Error('"streamId" must be a string');
	        }
	        if (!(candidates instanceof Array)) {
	            throw new Error('"candidates" must be an array');
	        }
	        if (!(options instanceof Array)) {
	            throw new Error('"options" must be an array');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var sanitizedCandidates = [];
	        for (var i = 0; i < candidates.length; i++) {
	            var candidate = candidates[i];

	            if (typeof candidate.candidate !== 'string') {
	                throw new Error('"candidates[' + i + '].candidate" must be a string');
	            }
	            if (typeof candidate.sdpMLineIndex !== 'number') {
	                throw new Error('"candidates[' + i + '].sdpMLineIndex" must be a number');
	            }
	            if (typeof candidate.sdpMid !== 'string') {
	                throw new Error('"candidates[' + i + '].sdpMid" must be a string');
	            }

	            sanitizedCandidates.push({
	                candidate: candidate.candidate,
	                sdpMLineIndex: candidate.sdpMLineIndex,
	                sdpMid: candidate.sdpMid
	            });
	        }

	        var addIceCandidates = {
	            streamId: streamId,
	            candidates: sanitizedCandidates,
	            options: options,
	            apiVersion: this._mqProtocol.getApiVersion()
	        };

	        return sendRequest.call(this, 'pcast.AddIceCandidates', addIceCandidates, callback);
	    };

	    PCastProtocol.prototype.updateStreamState = function (streamId, signalingState, iceGatheringState, iceConnectionState, callback) {
	        if (typeof streamId !== 'string') {
	            throw new Error('"streamId" must be a string');
	        }
	        if (typeof signalingState !== 'string') {
	            throw new Error('"signalingState" must be a string');
	        }
	        if (typeof iceGatheringState !== 'string') {
	            throw new Error('"iceGatheringState" must be a string');
	        }
	        if (typeof iceConnectionState !== 'string') {
	            throw new Error('"iceConnectionState" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var updateStreamState = {
	            streamId: streamId,
	            signalingState: signalingState,
	            iceGatheringState: iceGatheringState,
	            iceConnectionState: iceConnectionState,
	            apiVersion: this._mqProtocol.getApiVersion()
	        };

	        return sendRequest.call(this, 'pcast.UpdateStreamState', updateStreamState, callback);
	    };

	    PCastProtocol.prototype.destroyStream = function (streamId, reason, callback) {
	        if (typeof streamId !== 'string') {
	            throw new Error('"streamId" must be a string');
	        }
	        if (typeof reason !== 'string') {
	            throw new Error('"reason" must be a string');
	        }
	        if (typeof callback !== 'function') {
	            throw new Error('"callback" must be a function');
	        }

	        var destroyStream = {
	            streamId: streamId,
	            reason: reason
	        };

	        return sendRequest.call(this, 'pcast.DestroyStream', destroyStream, callback);
	    };

	    PCastProtocol.prototype.getRoomInfo = function (roomId, alias, callback) {
	        if (roomId) {
	            assert.isString(roomId, 'roomId');
	        } else {
	            assert.isString(alias, 'alias');
	        }
	        assert.isFunction(callback, 'callback');

	        var getRoomInfo = {
	            roomId: roomId,
	            alias: alias,
	            sessionId: this._sessionId
	        };

	        return sendRequest.call(this, 'chat.GetRoomInfo', getRoomInfo, function(message, response) {
	            if (message) {
	                if (message.status) {
	                    return callback(message);
	                }
	            }

	            callback(response);
	        });
	    };

	    PCastProtocol.prototype.createRoom = function (roomName, type, description, callback) {
	        assert.isString(roomName, 'roomName');
	        assert.isString(type, 'type');
	        assert.isString(description, 'description');
	        assert.isFunction(callback, 'callback');

	        var createRoom = {
	            sessionId: this._sessionId,
	            room: {
	                name: roomName,
	                description: description,
	                type: type
	            }
	        };

	        return sendRequest.call(this, 'chat.CreateRoom', createRoom, function(message, response) {
	            if (message) {
	                if (message.status) {
	                    return callback(message);
	                }
	            }

	            callback(response);
	        });
	    };

	    PCastProtocol.prototype.enterRoom = function (roomId, alias, member, timestamp, callback) {
	        if (roomId) {
	            assert.isString(roomId, 'roomId');
	        } else {
	            assert.isString(alias, 'alias');
	        }
	        assert.isObject(member, 'member');
	        assert.isNumber(timestamp, 'timestamp');
	        assert.isFunction(callback, 'callback');

	        var joinRoom = {
	            roomId: roomId,
	            alias: alias,
	            sessionId: this._sessionId,
	            member: member,
	            timestamp: timestamp
	        };

	        return sendRequest.call(this, 'chat.JoinRoom', joinRoom, function(message, response) {
	            if (message) {
	                if (message.status) {
	                    return callback(message);
	                }
	            }

	            callback(response);
	        });
	    };

	    PCastProtocol.prototype.leaveRoom = function (roomId, timestamp, callback) {
	        assert.isString(roomId, 'roomId');
	        assert.isNumber(timestamp, 'timestamp');
	        assert.isFunction(callback, 'callback');

	        var leaveRoom = {
	            roomId: roomId,
	            sessionId: this._sessionId,
	            timestamp: timestamp
	        };

	        return sendRequest.call(this, 'chat.LeaveRoom', leaveRoom, callback);
	    };

	    PCastProtocol.prototype.updateMember = function (member, timestamp, callback) {
	        assert.isObject(member, 'member');
	        assert.isNumber(timestamp, 'timestamp');
	        assert.isFunction(callback, 'callback');

	        member.updateStreams = member.hasOwnProperty('streams');

	        var updateMember = {
	            sessionId: this._sessionId,
	            member: member,
	            timestamp: timestamp
	        };

	        return sendRequest.call(this, 'chat.UpdateMember', updateMember, function(message, response) {
	            if (message) {
	                if (message.status) {
	                    return callback(message);
	                }
	            }

	            callback(response);
	        });
	    };

	    PCastProtocol.prototype.updateRoom = function (room, timestamp, callback) {
	        assert.isObject(room, 'room');
	        assert.isNumber(timestamp, 'timestamp');
	        assert.isFunction(callback, 'callback');

	        var updateRoom = {
	            sessionId: this._sessionId,
	            room: room,
	            timestamp: timestamp
	        };

	        return sendRequest.call(this, 'chat.UpdateRoom', updateRoom, callback);
	    };

	    PCastProtocol.prototype.sendMessageToRoom = function (roomId, chatMessage, callback) {
	        assert.stringNotEmpty(roomId, 'roomId');
	        assert.isObject(chatMessage, 'chatMessage');

	        var sendMessage = {
	            roomId: roomId,
	            chatMessage: chatMessage
	        };

	        return sendRequest.call(this, 'chat.SendMessageToRoom', sendMessage, callback);
	    };

	    PCastProtocol.prototype.subscribeToRoomConversation = function (sessionId, roomId, batchSize, callback) {
	        assert.stringNotEmpty(sessionId, 'sessionId');
	        assert.stringNotEmpty(roomId, 'roomId');
	        assert.isNumber(batchSize, 'batchSize');

	        var fetchRoomConversation = {
	            sessionId: sessionId,
	            roomId: roomId,
	            limit: batchSize,
	            options: ['Subscribe']
	        };

	        return sendRequest.call(this, 'chat.FetchRoomConversation', fetchRoomConversation, callback);
	    };

	    PCastProtocol.prototype.getMessages = function (sessionId, roomId, batchSize, afterMessageId, beforeMessageId, callback) {
	        assert.stringNotEmpty(sessionId, 'sessionId');
	        assert.stringNotEmpty(roomId, 'roomId');

	        if (!beforeMessageId || !afterMessageId) {
	            assert.isNumber(batchSize, 'batchSize');
	        }

	        var fetchRoomConversation = {
	            sessionId: sessionId,
	            roomId: roomId,
	            limit: batchSize || 0,
	            options: []
	        };

	        if (beforeMessageId) {
	            assert.stringNotEmpty(beforeMessageId, 'beforeMessageId');

	            fetchRoomConversation.beforeMessageId = beforeMessageId;
	        }

	        if (afterMessageId) {
	            assert.stringNotEmpty(afterMessageId, 'afterMessageId');

	            fetchRoomConversation.afterMessageId = afterMessageId;
	        }

	        return sendRequest.call(this, 'chat.FetchRoomConversation', fetchRoomConversation, callback);
	    };

	    PCastProtocol.prototype.toString = function () {
	        return 'PCastProtocol[' + this._uri + ',' + this._webSocket.readyState + ']';
	    };

	    function sendRequest(type, message, callback) {
	        var requestId = (this._nextRequestId++).toString();
	        var request = {
	            requestId: requestId,
	            type: type,
	            payload: this._mqProtocol.encode(type, message)
	        };

	        this._requests[requestId] = callback;

	        return this._webSocket.send(this._mqProtocol.encode('mq.Request', request).toString('base64'));
	    }

	    function getEventHandlers(eventName) {
	        var handlers = this._events[eventName];

	        if (!handlers) {
	            this._events[eventName] = handlers = [];
	        }

	        return handlers;
	    }

	    function removeEventHandler(eventName, handler) {
	        var handlers = this._events[eventName];

	        _.remove(handlers, function removeHandler(currentHandler) {
	            return currentHandler === handler;
	        });

	        this._events[eventName] = handlers;
	    }

	    function triggerEvent(eventName, args) {
	        var handlers = this._events[eventName];

	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].apply(this, args);
	            }
	        }
	    }

	    function onOpen(evt) {
	        this._logger.info('Connected');
	        triggerEvent.call(this, 'connected');
	    }

	    function onClose(evt) {
	        this._logger.info('Disconnected [%s]: [%s]', evt.code, evt.reason);
	        triggerEvent.call(this, 'disconnected', [evt.code, evt.reason]);
	    }

	    function onMessage(evt) {
	        this._logger.debug('>> [%s]', evt.data);

	        var response = this._mqProtocol.decode('mq.Response', ByteBuffer.wrap(evt.data, 'base64'));
	        this._logger.info('>> [%s]', response.type);

	        var message = this._mqProtocol.decode(response.type, response.payload);

	        if (response.type === 'pcast.AuthenticateResponse') {
	            this._sessionId = message.sessionId;
	        } else if (response.type === 'pcast.StreamEnded') {
	            triggerEvent.call(this, 'streamEnded', [message]);
	        } else if (response.type === 'pcast.StreamDataQuality') {
	            triggerEvent.call(this, 'dataQuality', [message]);
	        } else if (response.type === 'chat.RoomEvent') {
	            triggerEvent.call(this, 'roomEvent', [message]);
	        } else if (response.type === 'chat.RoomConversationEvent') {
	            triggerEvent.call(this, 'roomChatEvent', [message]);
	        }

	        var callback = this._requests[response.requestId];

	        if (callback) {
	            delete this._requests[response.requestId];

	            if (response.type === 'mq.Error' || message.status !== 'ok') {
	                callback(undefined, message);
	            } else {
	                callback(message);
	            }
	        }
	    }

	    function onError(evt) {
	        this._logger.error('An error occurred', evt.data);
	    }

	    return PCastProtocol;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var Assert = function() {};

	    Assert.prototype.isObject = function isObject(obj, name) {
	        var error = '"' + name + '" must be an object';

	        if (!_.isObject(obj)) {
	            throw new Error(error);
	        }
	    };

	    Assert.prototype.isArray = function isArray(array, name) {
	        var error = '"' + name + '" must be an array';

	        if (!_.isArray(array)) {
	            throw new Error(error);
	        }
	    };

	    Assert.prototype.isString = function isString(string, name) {
	        var error = '"' + name + '" must be a string';

	        if (!_.isString(string)) {
	            throw new Error(error);
	        }
	    };

	    Assert.prototype.isNumber = function isNumber(number, name) {
	        var error = '"' + name + '" must be a number';

	        if (!_.isNumber(number)) {
	            throw new Error(error);
	        }
	    };

	    Assert.prototype.isFunction = function isFunction(callback, name) {
	        var error = '"' + name + '" must be a function';

	        if (!_.isFunction(callback)) {
	            throw new Error(error);
	        }
	    };

	    Assert.prototype.stringNotEmpty = function stringNotEmpty(string, name) {
	        var error = '"' + name + '" must not be empty';

	        this.isString(string, name);

	        if (string === '') {
	            throw new Error(error);
	        }
	    };

	    return new Assert();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(8),
	    __webpack_require__(16),
	    __webpack_require__(17),
	    __webpack_require__(18)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function (Logger, ProtoBuf, mqProto, pcastProto, chatProto) {
	    'use strict';

	    function MQProtocol(logger) {
	        this._logger = logger || new Logger();
	        var builder = ProtoBuf.loadJson(mqProto);

	        builder = ProtoBuf.loadJson(pcastProto, builder);
	        builder = ProtoBuf.loadJson(chatProto, builder);

	        this._builders = builder.build();
	        this._apiVersion = 3;
	    }

	    MQProtocol.prototype.getApiVersion = function () {
	        return this._apiVersion;
	    };

	    MQProtocol.prototype.encode = function (type, data) {
	        if (typeof type !== 'string') {
	            throw new Error("'type' must be a string");
	        }
	        if (typeof data !== 'object') {
	            throw new Error("'data' must be an object");
	        }

	        var builder = getBuilder.call(this, type);

	        return builder.encode(data);
	    };

	    MQProtocol.prototype.decode = function (type, value) {
	        if (typeof type !== 'string') {
	            throw new Error("'type' must be a string");
	        }

	        var builder = getBuilder.call(this, type);

	        return stringifyEnums(builder.decode(value));
	    };

	    function getBuilder(type) {
	        var fragments = type.split('.');
	        var builder = this._builders;

	        for (var i = 0; i < fragments.length - 1; i++) {
	            builder = builder[fragments[i]];

	            if (!builder) {
	                throw new Error('Unsupported type "' + type + '"');
	            }
	        }

	        builder = builder[fragments[fragments.length - 1]];

	        if (typeof builder !== 'function') {
	            throw new Error('Unsupported type "' + type + '"');
	        }

	        return builder;
	    }

	    function stringifyEnums(message) {
	        if (message && message.$type && message.$type.children) {
	            for (var key in message.$type.children) {
	                var child = message.$type.children[key];
	                var value = message[child.name];
	                var type = child && child.element ? child.element.resolvedType : null;

	                if (type && type.className === 'Message' && type.children) {
	                    message[child.name] = stringifyEnums(value);
	                } else if (type && type.className === 'Enum' && type.children) {
	                    var metaValue = null;

	                    for (var i = 0; i < type.children.length; i++) {
	                        if (type.children[i].id === value) {
	                            metaValue = type.children[i];
	                            break;
	                        }
	                    }

	                    if (metaValue && metaValue.name) {
	                        message[child.name] = metaValue.name;
	                    }
	                }
	            }
	        }

	        return message;
	    }

	    return MQProtocol;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, module) {/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license ProtoBuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/ProtoBuf.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if ("function" === 'function' && __webpack_require__(11)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* CommonJS */ else if ("function" === "function" && typeof module === "object" && module && module["exports"])
	        module["exports"] = factory(__webpack_require__(12), true);
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ProtoBuf"] = factory(global["dcodeIO"]["ByteBuffer"]);

	})(this, function(ByteBuffer, isCommonJS) {
	    "use strict";

	    /**
	     * The ProtoBuf namespace.
	     * @exports ProtoBuf
	     * @namespace
	     * @expose
	     */
	    var ProtoBuf = {};

	    /**
	     * @type {!function(new: ByteBuffer, ...[*])}
	     * @expose
	     */
	    ProtoBuf.ByteBuffer = ByteBuffer;

	    /**
	     * @type {?function(new: Long, ...[*])}
	     * @expose
	     */
	    ProtoBuf.Long = ByteBuffer.Long || null;

	    /**
	     * ProtoBuf.js version.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ProtoBuf.VERSION = "4.1.2";

	    /**
	     * Wire types.
	     * @type {Object.<string,number>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES = {};

	    /**
	     * Varint wire type.
	     * @type {number}
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.VARINT = 0;

	    /**
	     * Fixed 64 bits wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.BITS64 = 1;

	    /**
	     * Length delimited wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.LDELIM = 2;

	    /**
	     * Start group wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.STARTGROUP = 3;

	    /**
	     * End group wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.ENDGROUP = 4;

	    /**
	     * Fixed 32 bits wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.BITS32 = 5;

	    /**
	     * Packable wire types.
	     * @type {!Array.<number>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.PACKABLE_WIRE_TYPES = [
	        ProtoBuf.WIRE_TYPES.VARINT,
	        ProtoBuf.WIRE_TYPES.BITS64,
	        ProtoBuf.WIRE_TYPES.BITS32
	    ];

	    /**
	     * Types.
	     * @dict
	     * @type {!Object.<string,{name: string, wireType: number, defaultValue: *}>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.TYPES = {
	        // According to the protobuf spec.
	        "int32": {
	            name: "int32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "uint32": {
	            name: "uint32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "sint32": {
	            name: "sint32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "int64": {
	            name: "int64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "uint64": {
	            name: "uint64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
	        },
	        "sint64": {
	            name: "sint64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "bool": {
	            name: "bool",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: false
	        },
	        "double": {
	            name: "double",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue: 0
	        },
	        "string": {
	            name: "string",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: ""
	        },
	        "bytes": {
	            name: "bytes",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: null // overridden in the code, must be a unique instance
	        },
	        "fixed32": {
	            name: "fixed32",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "sfixed32": {
	            name: "sfixed32",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "fixed64": {
	            name: "fixed64",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue:  ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
	        },
	        "sfixed64": {
	            name: "sfixed64",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "float": {
	            name: "float",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "enum": {
	            name: "enum",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "message": {
	            name: "message",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: null
	        },
	        "group": {
	            name: "group",
	            wireType: ProtoBuf.WIRE_TYPES.STARTGROUP,
	            defaultValue: null
	        }
	    };

	    /**
	     * Valid map key types.
	     * @type {!Array.<!Object.<string,{name: string, wireType: number, defaultValue: *}>>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.MAP_KEY_TYPES = [
	        ProtoBuf.TYPES["int32"],
	        ProtoBuf.TYPES["sint32"],
	        ProtoBuf.TYPES["sfixed32"],
	        ProtoBuf.TYPES["uint32"],
	        ProtoBuf.TYPES["fixed32"],
	        ProtoBuf.TYPES["int64"],
	        ProtoBuf.TYPES["sint64"],
	        ProtoBuf.TYPES["sfixed64"],
	        ProtoBuf.TYPES["uint64"],
	        ProtoBuf.TYPES["fixed64"],
	        ProtoBuf.TYPES["bool"],
	        ProtoBuf.TYPES["string"],
	        ProtoBuf.TYPES["bytes"]
	    ];

	    /**
	     * Minimum field id.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.ID_MIN = 1;

	    /**
	     * Maximum field id.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.ID_MAX = 0x1FFFFFFF;

	    /**
	     * If set to `true`, field names will be converted from underscore notation to camel case. Defaults to `false`.
	     *  Must be set prior to parsing.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.convertFieldsToCamelCase = false;

	    /**
	     * By default, messages are populated with (setX, set_x) accessors for each field. This can be disabled by
	     *  setting this to `false` prior to building messages.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.populateAccessors = true;

	    /**
	     * By default, messages are populated with default values if a field is not present on the wire. To disable
	     *  this behavior, set this setting to `false`.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.populateDefaults = true;

	    /**
	     * @alias ProtoBuf.Util
	     * @expose
	     */
	    ProtoBuf.Util = (function() {
	        "use strict";

	        /**
	         * ProtoBuf utilities.
	         * @exports ProtoBuf.Util
	         * @namespace
	         */
	        var Util = {};

	        /**
	         * Flag if running in node or not.
	         * @type {boolean}
	         * @const
	         * @expose
	         */
	        Util.IS_NODE = !!(
	            typeof process === 'object' && process+'' === '[object process]' && !process['browser']
	        );

	        /**
	         * Constructs a XMLHttpRequest object.
	         * @return {XMLHttpRequest}
	         * @throws {Error} If XMLHttpRequest is not supported
	         * @expose
	         */
	        Util.XHR = function() {
	            // No dependencies please, ref: http://www.quirksmode.org/js/xmlhttp.html
	            var XMLHttpFactories = [
	                function () {return new XMLHttpRequest()},
	                function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	                function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	                function () {return new ActiveXObject("Microsoft.XMLHTTP")}
	            ];
	            /** @type {?XMLHttpRequest} */
	            var xhr = null;
	            for (var i=0;i<XMLHttpFactories.length;i++) {
	                try { xhr = XMLHttpFactories[i](); }
	                catch (e) { continue; }
	                break;
	            }
	            if (!xhr)
	                throw Error("XMLHttpRequest is not supported");
	            return xhr;
	        };

	        /**
	         * Fetches a resource.
	         * @param {string} path Resource path
	         * @param {function(?string)=} callback Callback receiving the resource's contents. If omitted the resource will
	         *   be fetched synchronously. If the request failed, contents will be null.
	         * @return {?string|undefined} Resource contents if callback is omitted (null if the request failed), else undefined.
	         * @expose
	         */
	        Util.fetch = function(path, callback) {
	            if (callback && typeof callback != 'function')
	                callback = null;
	            if (Util.IS_NODE) {
	                var fs = __webpack_require__(14);
	                if (callback) {
	                    fs.readFile(path, function(err, data) {
	                        if (err)
	                            callback(null);
	                        else
	                            callback(""+data);
	                    });
	                } else
	                    try {
	                        return fs.readFileSync(path);
	                    } catch (e) {
	                        return null;
	                    }
	            } else {
	                var xhr = Util.XHR();
	                xhr.open('GET', path, callback ? true : false);
	                // xhr.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
	                xhr.setRequestHeader('Accept', 'text/plain');
	                if (typeof xhr.overrideMimeType === 'function') xhr.overrideMimeType('text/plain');
	                if (callback) {
	                    xhr.onreadystatechange = function() {
	                        if (xhr.readyState != 4) return;
	                        if (/* remote */ xhr.status == 200 || /* local */ (xhr.status == 0 && typeof xhr.responseText === 'string'))
	                            callback(xhr.responseText);
	                        else
	                            callback(null);
	                    };
	                    if (xhr.readyState == 4)
	                        return;
	                    xhr.send(null);
	                } else {
	                    xhr.send(null);
	                    if (/* remote */ xhr.status == 200 || /* local */ (xhr.status == 0 && typeof xhr.responseText === 'string'))
	                        return xhr.responseText;
	                    return null;
	                }
	            }
	        };

	        /**
	         * Converts a string to camel case.
	         * @param {string} str
	         * @returns {string}
	         * @expose
	         */
	        Util.toCamelCase = function(str) {
	            return str.replace(/_([a-zA-Z])/g, function ($0, $1) {
	                return $1.toUpperCase();
	            });
	        };

	        return Util;
	    })();

	    /**
	     * Language expressions.
	     * @type {!Object.<string,!RegExp>}
	     * @expose
	     */
	    ProtoBuf.Lang = {

	        // Characters always ending a statement
	        DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,

	        // Field rules
	        RULE: /^(?:required|optional|repeated|map)$/,

	        // Field types
	        TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,

	        // Names
	        NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,

	        // Type definitions
	        TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,

	        // Type references
	        TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,

	        // Fully qualified type references
	        FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,

	        // All numbers
	        NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,

	        // Decimal numbers
	        NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,

	        // Hexadecimal numbers
	        NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,

	        // Octal numbers
	        NUMBER_OCT: /^0[0-7]+$/,

	        // Floating point numbers
	        NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,

	        // Booleans
	        BOOL: /^(?:true|false)$/i,

	        // Id numbers
	        ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,

	        // Negative id numbers (enum values)
	        NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,

	        // Whitespaces
	        WHITESPACE: /\s/,

	        // All strings
	        STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,

	        // Double quoted strings
	        STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,

	        // Single quoted strings
	        STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
	    };

	    /**
	     * @alias ProtoBuf.DotProto
	     * @expose
	     */
	    ProtoBuf.DotProto = (function(ProtoBuf, Lang) {
	        "use strict";

	        /**
	         * Utilities to parse .proto files.
	         * @exports ProtoBuf.DotProto
	         * @namespace
	         */
	        var DotProto = {};

	        /**
	         * Constructs a new Tokenizer.
	         * @exports ProtoBuf.DotProto.Tokenizer
	         * @class prototype tokenizer
	         * @param {string} proto Proto to tokenize
	         * @constructor
	         */
	        var Tokenizer = function(proto) {

	            /**
	             * Source to parse.
	             * @type {string}
	             * @expose
	             */
	            this.source = proto+"";

	            /**
	             * Current index.
	             * @type {number}
	             * @expose
	             */
	            this.index = 0;

	            /**
	             * Current line.
	             * @type {number}
	             * @expose
	             */
	            this.line = 1;

	            /**
	             * Token stack.
	             * @type {!Array.<string>}
	             * @expose
	             */
	            this.stack = [];

	            /**
	             * Opening character of the current string read, if any.
	             * @type {?string}
	             * @private
	             */
	            this._stringOpen = null;
	        };

	        /**
	         * @alias ProtoBuf.DotProto.Tokenizer.prototype
	         * @inner
	         */
	        var TokenizerPrototype = Tokenizer.prototype;

	        /**
	         * Reads a string beginning at the current index.
	         * @return {string}
	         * @private
	         */
	        TokenizerPrototype._readString = function() {
	            var re = this._stringOpen === '"'
	                ? Lang.STRING_DQ
	                : Lang.STRING_SQ;
	            re.lastIndex = this.index - 1; // Include the open quote
	            var match = re.exec(this.source);
	            if (!match)
	                throw Error("unterminated string");
	            this.index = re.lastIndex;
	            this.stack.push(this._stringOpen);
	            this._stringOpen = null;
	            return match[1];
	        };

	        /**
	         * Gets the next token and advances by one.
	         * @return {?string} Token or `null` on EOF
	         * @expose
	         */
	        TokenizerPrototype.next = function() {
	            if (this.stack.length > 0)
	                return this.stack.shift();
	            if (this.index >= this.source.length)
	                return null;
	            if (this._stringOpen !== null)
	                return this._readString();

	            var repeat,
	                prev,
	                next;
	            do {
	                repeat = false;

	                // Strip white spaces
	                while (Lang.WHITESPACE.test(next = this.source.charAt(this.index))) {
	                    if (next === '\n')
	                        ++this.line;
	                    if (++this.index === this.source.length)
	                        return null;
	                }

	                // Strip comments
	                if (this.source.charAt(this.index) === '/') {
	                    ++this.index;
	                    if (this.source.charAt(this.index) === '/') { // Line
	                        while (this.source.charAt(++this.index) !== '\n')
	                            if (this.index == this.source.length)
	                                return null;
	                        ++this.index;
	                        ++this.line;
	                        repeat = true;
	                    } else if ((next = this.source.charAt(this.index)) === '*') { /* Block */
	                        do {
	                            if (next === '\n')
	                                ++this.line;
	                            if (++this.index === this.source.length)
	                                return null;
	                            prev = next;
	                            next = this.source.charAt(this.index);
	                        } while (prev !== '*' || next !== '/');
	                        ++this.index;
	                        repeat = true;
	                    } else
	                        return '/';
	                }
	            } while (repeat);

	            if (this.index === this.source.length)
	                return null;

	            // Read the next token
	            var end = this.index;
	            Lang.DELIM.lastIndex = 0;
	            var delim = Lang.DELIM.test(this.source.charAt(end++));
	            if (!delim)
	                while(end < this.source.length && !Lang.DELIM.test(this.source.charAt(end)))
	                    ++end;
	            var token = this.source.substring(this.index, this.index = end);
	            if (token === '"' || token === "'")
	                this._stringOpen = token;
	            return token;
	        };

	        /**
	         * Peeks for the next token.
	         * @return {?string} Token or `null` on EOF
	         * @expose
	         */
	        TokenizerPrototype.peek = function() {
	            if (this.stack.length === 0) {
	                var token = this.next();
	                if (token === null)
	                    return null;
	                this.stack.push(token);
	            }
	            return this.stack[0];
	        };

	        /**
	         * Skips a specific token and throws if it differs.
	         * @param {string} expected Expected token
	         * @throws {Error} If the actual token differs
	         */
	        TokenizerPrototype.skip = function(expected) {
	            var actual = this.next();
	            if (actual !== expected)
	                throw Error("illegal '"+actual+"', '"+expected+"' expected");
	        };

	        /**
	         * Omits an optional token.
	         * @param {string} expected Expected optional token
	         * @returns {boolean} `true` if the token exists
	         */
	        TokenizerPrototype.omit = function(expected) {
	            if (this.peek() === expected) {
	                this.next();
	                return true;
	            }
	            return false;
	        };

	        /**
	         * Returns a string representation of this object.
	         * @return {string} String representation as of "Tokenizer(index/length)"
	         * @expose
	         */
	        TokenizerPrototype.toString = function() {
	            return "Tokenizer ("+this.index+"/"+this.source.length+" at line "+this.line+")";
	        };

	        /**
	         * @alias ProtoBuf.DotProto.Tokenizer
	         * @expose
	         */
	        DotProto.Tokenizer = Tokenizer;

	        /**
	         * Constructs a new Parser.
	         * @exports ProtoBuf.DotProto.Parser
	         * @class prototype parser
	         * @param {string} source Source
	         * @constructor
	         */
	        var Parser = function(source) {

	            /**
	             * Tokenizer.
	             * @type {!ProtoBuf.DotProto.Tokenizer}
	             * @expose
	             */
	            this.tn = new Tokenizer(source);

	            /**
	             * Whether parsing proto3 or not.
	             * @type {boolean}
	             */
	            this.proto3 = false;
	        };

	        /**
	         * @alias ProtoBuf.DotProto.Parser.prototype
	         * @inner
	         */
	        var ParserPrototype = Parser.prototype;

	        /**
	         * Parses the source.
	         * @returns {!Object}
	         * @throws {Error} If the source cannot be parsed
	         * @expose
	         */
	        ParserPrototype.parse = function() {
	            var topLevel = {
	                "name": "[ROOT]", // temporary
	                "package": null,
	                "messages": [],
	                "enums": [],
	                "imports": [],
	                "options": {},
	                "services": []
	                // "syntax": undefined
	            };
	            var token,
	                head = true;
	            try {
	                while (token = this.tn.next()) {
	                    switch (token) {
	                        case 'package':
	                            if (!head || topLevel["package"] !== null)
	                                throw Error("unexpected 'package'");
	                            token = this.tn.next();
	                            if (!Lang.TYPEREF.test(token))
	                                throw Error("illegal package name: " + token);
	                            this.tn.skip(";");
	                            topLevel["package"] = token;
	                            break;
	                        case 'import':
	                            if (!head)
	                                throw Error("unexpected 'import'");
	                            token = this.tn.peek();
	                            if (token === "public") // ignored
	                                this.tn.next();
	                            token = this._readString();
	                            this.tn.skip(";");
	                            topLevel["imports"].push(token);
	                            break;
	                        case 'syntax':
	                            if (!head)
	                                throw Error("unexpected 'syntax'");
	                            this.tn.skip("=");
	                            if ((topLevel["syntax"] = this._readString()) === "proto3")
	                                this.proto3 = true;
	                            this.tn.skip(";");
	                            break;
	                        case 'message':
	                            this._parseMessage(topLevel, null);
	                            head = false;
	                            break;
	                        case 'enum':
	                            this._parseEnum(topLevel);
	                            head = false;
	                            break;
	                        case 'option':
	                            this._parseOption(topLevel);
	                            break;
	                        case 'service':
	                            this._parseService(topLevel);
	                            break;
	                        case 'extend':
	                            this._parseExtend(topLevel);
	                            break;
	                        default:
	                            throw Error("unexpected '" + token + "'");
	                    }
	                }
	            } catch (e) {
	                e.message = "Parse error at line "+this.tn.line+": " + e.message;
	                throw e;
	            }
	            delete topLevel["name"];
	            return topLevel;
	        };

	        /**
	         * Parses the specified source.
	         * @returns {!Object}
	         * @throws {Error} If the source cannot be parsed
	         * @expose
	         */
	        Parser.parse = function(source) {
	            return new Parser(source).parse();
	        };

	        // ----- Conversion ------

	        /**
	         * Converts a numerical string to an id.
	         * @param {string} value
	         * @param {boolean=} mayBeNegative
	         * @returns {number}
	         * @inner
	         */
	        function mkId(value, mayBeNegative) {
	            var id = -1,
	                sign = 1;
	            if (value.charAt(0) == '-') {
	                sign = -1;
	                value = value.substring(1);
	            }
	            if (Lang.NUMBER_DEC.test(value))
	                id = parseInt(value);
	            else if (Lang.NUMBER_HEX.test(value))
	                id = parseInt(value.substring(2), 16);
	            else if (Lang.NUMBER_OCT.test(value))
	                id = parseInt(value.substring(1), 8);
	            else
	                throw Error("illegal id value: " + (sign < 0 ? '-' : '') + value);
	            id = (sign*id)|0; // Force to 32bit
	            if (!mayBeNegative && id < 0)
	                throw Error("illegal id value: " + (sign < 0 ? '-' : '') + value);
	            return id;
	        }

	        /**
	         * Converts a numerical string to a number.
	         * @param {string} val
	         * @returns {number}
	         * @inner
	         */
	        function mkNumber(val) {
	            var sign = 1;
	            if (val.charAt(0) == '-') {
	                sign = -1;
	                val = val.substring(1);
	            }
	            if (Lang.NUMBER_DEC.test(val))
	                return sign * parseInt(val, 10);
	            else if (Lang.NUMBER_HEX.test(val))
	                return sign * parseInt(val.substring(2), 16);
	            else if (Lang.NUMBER_OCT.test(val))
	                return sign * parseInt(val.substring(1), 8);
	            else if (val === 'inf')
	                return sign * Infinity;
	            else if (val === 'nan')
	                return NaN;
	            else if (Lang.NUMBER_FLT.test(val))
	                return sign * parseFloat(val);
	            throw Error("illegal number value: " + (sign < 0 ? '-' : '') + val);
	        }

	        // ----- Reading ------

	        /**
	         * Reads a string.
	         * @returns {string}
	         * @private
	         */
	        ParserPrototype._readString = function() {
	            var value = "",
	                token,
	                delim;
	            do {
	                delim = this.tn.next();
	                if (delim !== "'" && delim !== '"')
	                    throw Error("illegal string delimiter: "+delim);
	                value += this.tn.next();
	                this.tn.skip(delim);
	                token = this.tn.peek();
	            } while (token === '"' || token === '"'); // multi line?
	            return value;
	        };

	        /**
	         * Reads a value.
	         * @param {boolean=} mayBeTypeRef
	         * @returns {number|boolean|string}
	         * @private
	         */
	        ParserPrototype._readValue = function(mayBeTypeRef) {
	            var token = this.tn.peek(),
	                value;
	            if (token === '"' || token === "'")
	                return this._readString();
	            this.tn.next();
	            if (Lang.NUMBER.test(token))
	                return mkNumber(token);
	            if (Lang.BOOL.test(token))
	                return (token.toLowerCase() === 'true');
	            if (mayBeTypeRef && Lang.TYPEREF.test(token))
	                return token;
	            throw Error("illegal value: "+token);

	        };

	        // ----- Parsing constructs -----

	        /**
	         * Parses a namespace option.
	         * @param {!Object} parent Parent definition
	         * @param {boolean=} isList
	         * @private
	         */
	        ParserPrototype._parseOption = function(parent, isList) {
	            var token = this.tn.next(),
	                custom = false;
	            if (token === '(') {
	                custom = true;
	                token = this.tn.next();
	            }
	            if (!Lang.TYPEREF.test(token))
	                // we can allow options of the form google.protobuf.* since they will just get ignored anyways
	                // if (!/google\.protobuf\./.test(token)) // FIXME: Why should that not be a valid typeref?
	                    throw Error("illegal option name: "+token);
	            var name = token;
	            if (custom) { // (my_method_option).foo, (my_method_option), some_method_option, (foo.my_option).bar
	                this.tn.skip(')');
	                name = '('+name+')';
	                token = this.tn.peek();
	                if (Lang.FQTYPEREF.test(token)) {
	                    name += token;
	                    this.tn.next();
	                }
	            }
	            this.tn.skip('=');
	            this._parseOptionValue(parent, name);
	            if (!isList)
	                this.tn.skip(";");
	        };

	        /**
	         * Sets an option on the specified options object.
	         * @param {!Object.<string,*>} options
	         * @param {string} name
	         * @param {string|number|boolean} value
	         * @inner
	         */
	        function setOption(options, name, value) {
	            if (typeof options[name] === 'undefined')
	                options[name] = value;
	            else {
	                if (!Array.isArray(options[name]))
	                    options[name] = [ options[name] ];
	                options[name].push(value);
	            }
	        }

	        /**
	         * Parses an option value.
	         * @param {!Object} parent
	         * @param {string} name
	         * @private
	         */
	        ParserPrototype._parseOptionValue = function(parent, name) {
	            var token = this.tn.peek();
	            if (token !== '{') { // Plain value
	                setOption(parent["options"], name, this._readValue(true));
	            } else { // Aggregate options
	                this.tn.skip("{");
	                while ((token = this.tn.next()) !== '}') {
	                    if (!Lang.NAME.test(token))
	                        throw Error("illegal option name: " + name + "." + token);
	                    if (this.tn.omit(":"))
	                        setOption(parent["options"], name + "." + token, this._readValue(true));
	                    else
	                        this._parseOptionValue(parent, name + "." + token);
	                }
	            }
	        };

	        /**
	         * Parses a service definition.
	         * @param {!Object} parent Parent definition
	         * @private
	         */
	        ParserPrototype._parseService = function(parent) {
	            var token = this.tn.next();
	            if (!Lang.NAME.test(token))
	                throw Error("illegal service name at line "+this.tn.line+": "+token);
	            var name = token;
	            var svc = {
	                "name": name,
	                "rpc": {},
	                "options": {}
	            };
	            this.tn.skip("{");
	            while ((token = this.tn.next()) !== '}') {
	                if (token === "option")
	                    this._parseOption(svc);
	                else if (token === 'rpc')
	                    this._parseServiceRPC(svc);
	                else
	                    throw Error("illegal service token: "+token);
	            }
	            this.tn.omit(";");
	            parent["services"].push(svc);
	        };

	        /**
	         * Parses a RPC service definition of the form ['rpc', name, (request), 'returns', (response)].
	         * @param {!Object} svc Service definition
	         * @private
	         */
	        ParserPrototype._parseServiceRPC = function(svc) {
	            var type = "rpc",
	                token = this.tn.next();
	            if (!Lang.NAME.test(token))
	                throw Error("illegal rpc service method name: "+token);
	            var name = token;
	            var method = {
	                "request": null,
	                "response": null,
	                "request_stream": false,
	                "response_stream": false,
	                "options": {}
	            };
	            this.tn.skip("(");
	            token = this.tn.next();
	            if (token.toLowerCase() === "stream") {
	              method["request_stream"] = true;
	              token = this.tn.next();
	            }
	            if (!Lang.TYPEREF.test(token))
	                throw Error("illegal rpc service request type: "+token);
	            method["request"] = token;
	            this.tn.skip(")");
	            token = this.tn.next();
	            if (token.toLowerCase() !== "returns")
	                throw Error("illegal rpc service request type delimiter: "+token);
	            this.tn.skip("(");
	            token = this.tn.next();
	            if (token.toLowerCase() === "stream") {
	              method["response_stream"] = true;
	              token = this.tn.next();
	            }
	            method["response"] = token;
	            this.tn.skip(")");
	            token = this.tn.peek();
	            if (token === '{') {
	                this.tn.next();
	                while ((token = this.tn.next()) !== '}') {
	                    if (token === 'option')
	                        this._parseOption(method);
	                    else
	                        throw Error("illegal rpc service token: " + token);
	                }
	                this.tn.omit(";");
	            } else
	                this.tn.skip(";");
	            if (typeof svc[type] === 'undefined')
	                svc[type] = {};
	            svc[type][name] = method;
	        };

	        /**
	         * Parses a message definition.
	         * @param {!Object} parent Parent definition
	         * @param {!Object=} fld Field definition if this is a group
	         * @returns {!Object}
	         * @private
	         */
	        ParserPrototype._parseMessage = function(parent, fld) {
	            var isGroup = !!fld,
	                token = this.tn.next();
	            var msg = {
	                "name": "",
	                "fields": [],
	                "enums": [],
	                "messages": [],
	                "options": {},
	                "oneofs": {}
	                // "extensions": undefined
	            };
	            if (!Lang.NAME.test(token))
	                throw Error("illegal "+(isGroup ? "group" : "message")+" name: "+token);
	            msg["name"] = token;
	            if (isGroup) {
	                this.tn.skip("=");
	                fld["id"] = mkId(this.tn.next());
	                msg["isGroup"] = true;
	            }
	            token = this.tn.peek();
	            if (token === '[' && fld)
	                this._parseFieldOptions(fld);
	            this.tn.skip("{");
	            while ((token = this.tn.next()) !== '}') {
	                if (Lang.RULE.test(token))
	                    this._parseMessageField(msg, token);
	                else if (token === "oneof")
	                    this._parseMessageOneOf(msg);
	                else if (token === "enum")
	                    this._parseEnum(msg);
	                else if (token === "message")
	                    this._parseMessage(msg);
	                else if (token === "option")
	                    this._parseOption(msg);
	                else if (token === "extensions")
	                    this._parseExtensions(msg);
	                else if (token === "extend")
	                    this._parseExtend(msg);
	                else if (Lang.TYPEREF.test(token)) {
	                    if (!this.proto3)
	                        throw Error("illegal field rule: "+token);
	                    this._parseMessageField(msg, "optional", token);
	                } else
	                    throw Error("illegal message token: "+token);
	            }
	            this.tn.omit(";");
	            parent["messages"].push(msg);
	            return msg;
	        };

	        /**
	         * Parses a message field.
	         * @param {!Object} msg Message definition
	         * @param {string} rule Field rule
	         * @param {string=} type Field type if already known (never known for maps)
	         * @returns {!Object} Field descriptor
	         * @private
	         */
	        ParserPrototype._parseMessageField = function(msg, rule, type) {
	            if (!Lang.RULE.test(rule))
	                throw Error("illegal message field rule: "+rule);
	            var fld = {
	                "rule": rule,
	                "type": "",
	                "name": "",
	                "options": {},
	                "id": 0
	            };
	            var token;
	            if (rule === "map") {

	                if (type)
	                    throw Error("illegal type: " + type);
	                this.tn.skip('<');
	                token = this.tn.next();
	                if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token))
	                    throw Error("illegal message field type: " + token);
	                fld["keytype"] = token;
	                this.tn.skip(',');
	                token = this.tn.next();
	                if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token))
	                    throw Error("illegal message field: " + token);
	                fld["type"] = token;
	                this.tn.skip('>');
	                token = this.tn.next();
	                if (!Lang.NAME.test(token))
	                    throw Error("illegal message field name: " + token);
	                fld["name"] = token;
	                this.tn.skip("=");
	                fld["id"] = mkId(this.tn.next());
	                token = this.tn.peek();
	                if (token === '[')
	                    this._parseFieldOptions(fld);
	                this.tn.skip(";");

	            } else {

	                type = typeof type !== 'undefined' ? type : this.tn.next();

	                if (type === "group") {

	                    // "A [legacy] group simply combines a nested message type and a field into a single declaration. In your
	                    // code, you can treat this message just as if it had a Result type field called result (the latter name is
	                    // converted to lower-case so that it does not conflict with the former)."
	                    var grp = this._parseMessage(msg, fld);
	                    if (!/^[A-Z]/.test(grp["name"]))
	                        throw Error('illegal group name: '+grp["name"]);
	                    fld["type"] = grp["name"];
	                    fld["name"] = grp["name"].toLowerCase();
	                    this.tn.omit(";");

	                } else {

	                    if (!Lang.TYPE.test(type) && !Lang.TYPEREF.test(type))
	                        throw Error("illegal message field type: " + type);
	                    fld["type"] = type;
	                    token = this.tn.next();
	                    if (!Lang.NAME.test(token))
	                        throw Error("illegal message field name: " + token);
	                    fld["name"] = token;
	                    this.tn.skip("=");
	                    fld["id"] = mkId(this.tn.next());
	                    token = this.tn.peek();
	                    if (token === "[")
	                        this._parseFieldOptions(fld);
	                    this.tn.skip(";");

	                }
	            }
	            msg["fields"].push(fld);
	            return fld;
	        };

	        /**
	         * Parses a message oneof.
	         * @param {!Object} msg Message definition
	         * @private
	         */
	        ParserPrototype._parseMessageOneOf = function(msg) {
	            var token = this.tn.next();
	            if (!Lang.NAME.test(token))
	                throw Error("illegal oneof name: "+token);
	            var name = token,
	                fld;
	            var fields = [];
	            this.tn.skip("{");
	            while ((token = this.tn.next()) !== "}") {
	                fld = this._parseMessageField(msg, "optional", token);
	                fld["oneof"] = name;
	                fields.push(fld["id"]);
	            }
	            this.tn.omit(";");
	            msg["oneofs"][name] = fields;
	        };

	        /**
	         * Parses a set of field option definitions.
	         * @param {!Object} fld Field definition
	         * @private
	         */
	        ParserPrototype._parseFieldOptions = function(fld) {
	            this.tn.skip("[");
	            var token,
	                first = true;
	            while ((token = this.tn.peek()) !== ']') {
	                if (!first)
	                    this.tn.skip(",");
	                this._parseOption(fld, true);
	                first = false;
	            }
	            this.tn.next();
	        };

	        /**
	         * Parses an enum.
	         * @param {!Object} msg Message definition
	         * @private
	         */
	        ParserPrototype._parseEnum = function(msg) {
	            var enm = {
	                "name": "",
	                "values": [],
	                "options": {}
	            };
	            var token = this.tn.next();
	            if (!Lang.NAME.test(token))
	                throw Error("illegal name: "+token);
	            enm["name"] = token;
	            this.tn.skip("{");
	            while ((token = this.tn.next()) !== '}') {
	                if (token === "option")
	                    this._parseOption(enm);
	                else {
	                    if (!Lang.NAME.test(token))
	                        throw Error("illegal name: "+token);
	                    this.tn.skip("=");
	                    var val = {
	                        "name": token,
	                        "id": mkId(this.tn.next(), true)
	                    };
	                    token = this.tn.peek();
	                    if (token === "[")
	                        this._parseFieldOptions({ "options": {} });
	                    this.tn.skip(";");
	                    enm["values"].push(val);
	                }
	            }
	            this.tn.omit(";");
	            msg["enums"].push(enm);
	        };

	        /**
	         * Parses an extensions statement.
	         * @param {!Object} msg Message object
	         * @private
	         */
	        ParserPrototype._parseExtensions = function(msg) {
	            var token = this.tn.next(),
	                range = [];
	            if (token === "min")
	                range.push(ProtoBuf.ID_MIN);
	            else if (token === "max")
	                range.push(ProtoBuf.ID_MAX);
	            else
	                range.push(mkNumber(token));
	            this.tn.skip("to");
	            token = this.tn.next();
	            if (token === "min")
	                range.push(ProtoBuf.ID_MIN);
	            else if (token === "max")
	                range.push(ProtoBuf.ID_MAX);
	            else
	                range.push(mkNumber(token));
	            this.tn.skip(";");
	            msg["extensions"] = range;
	        };

	        /**
	         * Parses an extend block.
	         * @param {!Object} parent Parent object
	         * @private
	         */
	        ParserPrototype._parseExtend = function(parent) {
	            var token = this.tn.next();
	            if (!Lang.TYPEREF.test(token))
	                throw Error("illegal extend reference: "+token);
	            var ext = {
	                "ref": token,
	                "fields": []
	            };
	            this.tn.skip("{");
	            while ((token = this.tn.next()) !== '}') {
	                if (Lang.RULE.test(token))
	                    this._parseMessageField(ext, token);
	                else if (Lang.TYPEREF.test(token)) {
	                    if (!this.proto3)
	                        throw Error("illegal field rule: "+token);
	                    this._parseMessageField(ext, "optional", token);
	                } else
	                    throw Error("illegal extend token: "+token);
	            }
	            this.tn.omit(";");
	            parent["messages"].push(ext);
	            return ext;
	        };

	        // ----- General -----

	        /**
	         * Returns a string representation of this parser.
	         * @returns {string}
	         */
	        ParserPrototype.toString = function() {
	            return "Parser at line "+this.tn.line;
	        };

	        /**
	         * @alias ProtoBuf.DotProto.Parser
	         * @expose
	         */
	        DotProto.Parser = Parser;

	        return DotProto;

	    })(ProtoBuf, ProtoBuf.Lang);

	    /**
	     * @alias ProtoBuf.Reflect
	     * @expose
	     */
	    ProtoBuf.Reflect = (function(ProtoBuf) {
	        "use strict";

	        /**
	         * Reflection types.
	         * @exports ProtoBuf.Reflect
	         * @namespace
	         */
	        var Reflect = {};

	        /**
	         * Constructs a Reflect base class.
	         * @exports ProtoBuf.Reflect.T
	         * @constructor
	         * @abstract
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {?ProtoBuf.Reflect.T} parent Parent object
	         * @param {string} name Object name
	         */
	        var T = function(builder, parent, name) {

	            /**
	             * Builder reference.
	             * @type {!ProtoBuf.Builder}
	             * @expose
	             */
	            this.builder = builder;

	            /**
	             * Parent object.
	             * @type {?ProtoBuf.Reflect.T}
	             * @expose
	             */
	            this.parent = parent;

	            /**
	             * Object name in namespace.
	             * @type {string}
	             * @expose
	             */
	            this.name = name;

	            /**
	             * Fully qualified class name
	             * @type {string}
	             * @expose
	             */
	            this.className;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.T.prototype
	         * @inner
	         */
	        var TPrototype = T.prototype;

	        /**
	         * Returns the fully qualified name of this object.
	         * @returns {string} Fully qualified name as of ".PATH.TO.THIS"
	         * @expose
	         */
	        TPrototype.fqn = function() {
	            var name = this.name,
	                ptr = this;
	            do {
	                ptr = ptr.parent;
	                if (ptr == null)
	                    break;
	                name = ptr.name+"."+name;
	            } while (true);
	            return name;
	        };

	        /**
	         * Returns a string representation of this Reflect object (its fully qualified name).
	         * @param {boolean=} includeClass Set to true to include the class name. Defaults to false.
	         * @return String representation
	         * @expose
	         */
	        TPrototype.toString = function(includeClass) {
	            return (includeClass ? this.className + " " : "") + this.fqn();
	        };

	        /**
	         * Builds this type.
	         * @throws {Error} If this type cannot be built directly
	         * @expose
	         */
	        TPrototype.build = function() {
	            throw Error(this.toString(true)+" cannot be built directly");
	        };

	        /**
	         * @alias ProtoBuf.Reflect.T
	         * @expose
	         */
	        Reflect.T = T;

	        /**
	         * Constructs a new Namespace.
	         * @exports ProtoBuf.Reflect.Namespace
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {?ProtoBuf.Reflect.Namespace} parent Namespace parent
	         * @param {string} name Namespace name
	         * @param {Object.<string,*>=} options Namespace options
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Namespace = function(builder, parent, name, options, syntax) {
	            T.call(this, builder, parent, name);

	            /**
	             * @override
	             */
	            this.className = "Namespace";

	            /**
	             * Children inside the namespace.
	             * @type {!Array.<ProtoBuf.Reflect.T>}
	             */
	            this.children = [];

	            /**
	             * Options.
	             * @type {!Object.<string, *>}
	             */
	            this.options = options || {};

	            /**
	             * Syntax level (e.g., proto2 or proto3).
	             * @type {!string}
	             */
	            this.syntax = syntax || "proto2";
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Namespace.prototype
	         * @inner
	         */
	        var NamespacePrototype = Namespace.prototype = Object.create(T.prototype);

	        /**
	         * Returns an array of the namespace's children.
	         * @param {ProtoBuf.Reflect.T=} type Filter type (returns instances of this type only). Defaults to null (all children).
	         * @return {Array.<ProtoBuf.Reflect.T>}
	         * @expose
	         */
	        NamespacePrototype.getChildren = function(type) {
	            type = type || null;
	            if (type == null)
	                return this.children.slice();
	            var children = [];
	            for (var i=0, k=this.children.length; i<k; ++i)
	                if (this.children[i] instanceof type)
	                    children.push(this.children[i]);
	            return children;
	        };

	        /**
	         * Adds a child to the namespace.
	         * @param {ProtoBuf.Reflect.T} child Child
	         * @throws {Error} If the child cannot be added (duplicate)
	         * @expose
	         */
	        NamespacePrototype.addChild = function(child) {
	            var other;
	            if (other = this.getChild(child.name)) {
	                // Try to revert camelcase transformation on collision
	                if (other instanceof Message.Field && other.name !== other.originalName && this.getChild(other.originalName) === null)
	                    other.name = other.originalName; // Revert previous first (effectively keeps both originals)
	                else if (child instanceof Message.Field && child.name !== child.originalName && this.getChild(child.originalName) === null)
	                    child.name = child.originalName;
	                else
	                    throw Error("Duplicate name in namespace "+this.toString(true)+": "+child.name);
	            }
	            this.children.push(child);
	        };

	        /**
	         * Gets a child by its name or id.
	         * @param {string|number} nameOrId Child name or id
	         * @return {?ProtoBuf.Reflect.T} The child or null if not found
	         * @expose
	         */
	        NamespacePrototype.getChild = function(nameOrId) {
	            var key = typeof nameOrId === 'number' ? 'id' : 'name';
	            for (var i=0, k=this.children.length; i<k; ++i)
	                if (this.children[i][key] === nameOrId)
	                    return this.children[i];
	            return null;
	        };

	        /**
	         * Resolves a reflect object inside of this namespace.
	         * @param {string|!Array.<string>} qn Qualified name to resolve
	         * @param {boolean=} excludeNonNamespace Excludes non-namespace types, defaults to `false`
	         * @return {?ProtoBuf.Reflect.Namespace} The resolved type or null if not found
	         * @expose
	         */
	        NamespacePrototype.resolve = function(qn, excludeNonNamespace) {
	            var part = typeof qn === 'string' ? qn.split(".") : qn,
	                ptr = this,
	                i = 0;
	            if (part[i] === "") { // Fully qualified name, e.g. ".My.Message'
	                while (ptr.parent !== null)
	                    ptr = ptr.parent;
	                i++;
	            }
	            var child;
	            do {
	                do {
	                    if (!(ptr instanceof Reflect.Namespace)) {
	                        ptr = null;
	                        break;
	                    }
	                    child = ptr.getChild(part[i]);
	                    if (!child || !(child instanceof Reflect.T) || (excludeNonNamespace && !(child instanceof Reflect.Namespace))) {
	                        ptr = null;
	                        break;
	                    }
	                    ptr = child; i++;
	                } while (i < part.length);
	                if (ptr != null)
	                    break; // Found
	                // Else search the parent
	                if (this.parent !== null)
	                    return this.parent.resolve(qn, excludeNonNamespace);
	            } while (ptr != null);
	            return ptr;
	        };

	        /**
	         * Determines the shortest qualified name of the specified type, if any, relative to this namespace.
	         * @param {!ProtoBuf.Reflect.T} t Reflection type
	         * @returns {string} The shortest qualified name or, if there is none, the fqn
	         * @expose
	         */
	        NamespacePrototype.qn = function(t) {
	            var part = [], ptr = t;
	            do {
	                part.unshift(ptr.name);
	                ptr = ptr.parent;
	            } while (ptr !== null);
	            for (var len=1; len <= part.length; len++) {
	                var qn = part.slice(part.length-len);
	                if (t === this.resolve(qn, t instanceof Reflect.Namespace))
	                    return qn.join(".");
	            }
	            return t.fqn();
	        };

	        /**
	         * Builds the namespace and returns the runtime counterpart.
	         * @return {Object.<string,Function|Object>} Runtime namespace
	         * @expose
	         */
	        NamespacePrototype.build = function() {
	            /** @dict */
	            var ns = {};
	            var children = this.children;
	            for (var i=0, k=children.length, child; i<k; ++i) {
	                child = children[i];
	                if (child instanceof Namespace)
	                    ns[child.name] = child.build();
	            }
	            if (Object.defineProperty)
	                Object.defineProperty(ns, "$options", { "value": this.buildOpt() });
	            return ns;
	        };

	        /**
	         * Builds the namespace's '$options' property.
	         * @return {Object.<string,*>}
	         */
	        NamespacePrototype.buildOpt = function() {
	            var opt = {},
	                keys = Object.keys(this.options);
	            for (var i=0, k=keys.length; i<k; ++i) {
	                var key = keys[i],
	                    val = this.options[keys[i]];
	                // TODO: Options are not resolved, yet.
	                // if (val instanceof Namespace) {
	                //     opt[key] = val.build();
	                // } else {
	                opt[key] = val;
	                // }
	            }
	            return opt;
	        };

	        /**
	         * Gets the value assigned to the option with the specified name.
	         * @param {string=} name Returns the option value if specified, otherwise all options are returned.
	         * @return {*|Object.<string,*>}null} Option value or NULL if there is no such option
	         */
	        NamespacePrototype.getOption = function(name) {
	            if (typeof name === 'undefined')
	                return this.options;
	            return typeof this.options[name] !== 'undefined' ? this.options[name] : null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Namespace
	         * @expose
	         */
	        Reflect.Namespace = Namespace;

	        /**
	         * Constructs a new Element implementation that checks and converts values for a
	         * particular field type, as appropriate.
	         *
	         * An Element represents a single value: either the value of a singular field,
	         * or a value contained in one entry of a repeated field or map field. This
	         * class does not implement these higher-level concepts; it only encapsulates
	         * the low-level typechecking and conversion.
	         *
	         * @exports ProtoBuf.Reflect.Element
	         * @param {{name: string, wireType: number}} type Resolved data type
	         * @param {ProtoBuf.Reflect.T|null} resolvedType Resolved type, if relevant
	         * (e.g. submessage field).
	         * @param {boolean} isMapKey Is this element a Map key? The value will be
	         * converted to string form if so.
	         * @param {string} syntax Syntax level of defining message type, e.g.,
	         * proto2 or proto3.
	         * @constructor
	         */
	        var Element = function(type, resolvedType, isMapKey, syntax) {

	            /**
	             * Element type, as a string (e.g., int32).
	             * @type {{name: string, wireType: number}}
	             */
	            this.type = type;

	            /**
	             * Element type reference to submessage or enum definition, if needed.
	             * @type {ProtoBuf.Reflect.T|null}
	             */
	            this.resolvedType = resolvedType;

	            /**
	             * Element is a map key.
	             * @type {boolean}
	             */
	            this.isMapKey = isMapKey;

	            /**
	             * Syntax level of defining message type, e.g., proto2 or proto3.
	             * @type {string}
	             */
	            this.syntax = syntax;

	            if (isMapKey && ProtoBuf.MAP_KEY_TYPES.indexOf(type) < 0)
	                throw Error("Invalid map key type: " + type.name);
	        };

	        var ElementPrototype = Element.prototype;

	        /**
	         * Obtains a (new) default value for the specified type.
	         * @param type {string|{name: string, wireType: number}} Field type
	         * @returns {*} Default value
	         * @inner
	         */
	        function mkDefault(type) {
	            if (typeof type === 'string')
	                type = ProtoBuf.TYPES[type];
	            if (typeof type.defaultValue === 'undefined')
	                throw Error("default value for type "+type.name+" is not supported");
	            if (type == ProtoBuf.TYPES["bytes"])
	                return new ByteBuffer(0);
	            return type.defaultValue;
	        }

	        /**
	         * Returns the default value for this field in proto3.
	         * @function
	         * @param type {string|{name: string, wireType: number}} the field type
	         * @returns {*} Default value
	         */
	        Element.defaultFieldValue = mkDefault;

	        /**
	         * Makes a Long from a value.
	         * @param {{low: number, high: number, unsigned: boolean}|string|number} value Value
	         * @param {boolean=} unsigned Whether unsigned or not, defaults to reuse it from Long-like objects or to signed for
	         *  strings and numbers
	         * @returns {!Long}
	         * @throws {Error} If the value cannot be converted to a Long
	         * @inner
	         */
	        function mkLong(value, unsigned) {
	            if (value && typeof value.low === 'number' && typeof value.high === 'number' && typeof value.unsigned === 'boolean'
	                && value.low === value.low && value.high === value.high)
	                return new ProtoBuf.Long(value.low, value.high, typeof unsigned === 'undefined' ? value.unsigned : unsigned);
	            if (typeof value === 'string')
	                return ProtoBuf.Long.fromString(value, unsigned || false, 10);
	            if (typeof value === 'number')
	                return ProtoBuf.Long.fromNumber(value, unsigned || false);
	            throw Error("not convertible to Long");
	        }

	        /**
	         * Checks if the given value can be set for an element of this type (singular
	         * field or one element of a repeated field or map).
	         * @param {*} value Value to check
	         * @return {*} Verified, maybe adjusted, value
	         * @throws {Error} If the value cannot be verified for this element slot
	         * @expose
	         */
	        ElementPrototype.verifyValue = function(value) {
	            var fail = function(val, msg) {
	                throw Error("Illegal value for "+this.toString(true)+" of type "+this.type.name+": "+val+" ("+msg+")");
	            }.bind(this);
	            switch (this.type) {
	                // Signed 32bit
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                    // Account for !NaN: value === value
	                    if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                        fail(typeof value, "not an integer");
	                    return value > 4294967295 ? value | 0 : value;

	                // Unsigned 32bit
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                        fail(typeof value, "not an integer");
	                    return value < 0 ? value >>> 0 : value;

	                // Signed 64bit
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]: {
	                    if (ProtoBuf.Long)
	                        try {
	                            return mkLong(value, false);
	                        } catch (e) {
	                            fail(typeof value, e.message);
	                        }
	                    else
	                        fail(typeof value, "requires Long.js");
	                }

	                // Unsigned 64bit
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]: {
	                    if (ProtoBuf.Long)
	                        try {
	                            return mkLong(value, true);
	                        } catch (e) {
	                            fail(typeof value, e.message);
	                        }
	                    else
	                        fail(typeof value, "requires Long.js");
	                }

	                // Bool
	                case ProtoBuf.TYPES["bool"]:
	                    if (typeof value !== 'boolean')
	                        fail(typeof value, "not a boolean");
	                    return value;

	                // Float
	                case ProtoBuf.TYPES["float"]:
	                case ProtoBuf.TYPES["double"]:
	                    if (typeof value !== 'number')
	                        fail(typeof value, "not a number");
	                    return value;

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    if (typeof value !== 'string' && !(value && value instanceof String))
	                        fail(typeof value, "not a string");
	                    return ""+value; // Convert String object to string

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]:
	                    if (ByteBuffer.isByteBuffer(value))
	                        return value;
	                    return ByteBuffer.wrap(value, "base64");

	                // Constant enum value
	                case ProtoBuf.TYPES["enum"]: {
	                    var values = this.resolvedType.getChildren(ProtoBuf.Reflect.Enum.Value);
	                    for (i=0; i<values.length; i++)
	                        if (values[i].name == value)
	                            return values[i].id;
	                        else if (values[i].id == value)
	                            return values[i].id;

	                    if (this.syntax === 'proto3') {
	                        // proto3: just make sure it's an integer.
	                        if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                            fail(typeof value, "not an integer");
	                        if (value > 4294967295 || value < 0)
	                            fail(typeof value, "not in range for uint32")
	                        return value;
	                    } else {
	                        // proto2 requires enum values to be valid.
	                        fail(value, "not a valid enum value");
	                    }
	                }
	                // Embedded message
	                case ProtoBuf.TYPES["group"]:
	                case ProtoBuf.TYPES["message"]: {
	                    if (!value || typeof value !== 'object')
	                        fail(typeof value, "object expected");
	                    if (value instanceof this.resolvedType.clazz)
	                        return value;
	                    if (value instanceof ProtoBuf.Builder.Message) {
	                        // Mismatched type: Convert to object (see: https://github.com/dcodeIO/ProtoBuf.js/issues/180)
	                        var obj = {};
	                        for (var i in value)
	                            if (value.hasOwnProperty(i))
	                                obj[i] = value[i];
	                        value = obj;
	                    }
	                    // Else let's try to construct one from a key-value object
	                    return new (this.resolvedType.clazz)(value); // May throw for a hundred of reasons
	                }
	            }

	            // We should never end here
	            throw Error("[INTERNAL] Illegal value for "+this.toString(true)+": "+value+" (undefined type "+this.type+")");
	        };

	        /**
	         * Calculates the byte length of an element on the wire.
	         * @param {number} id Field number
	         * @param {*} value Field value
	         * @returns {number} Byte length
	         * @throws {Error} If the value cannot be calculated
	         * @expose
	         */
	        ElementPrototype.calculateLength = function(id, value) {
	            if (value === null) return 0; // Nothing to encode
	            // Tag has already been written
	            var n;
	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                    return value < 0 ? ByteBuffer.calculateVarint64(value) : ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["uint32"]:
	                    return ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["sint32"]:
	                    return ByteBuffer.calculateVarint32(ByteBuffer.zigZagEncode32(value));
	                case ProtoBuf.TYPES["fixed32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["float"]:
	                    return 4;
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                    return ByteBuffer.calculateVarint64(value);
	                case ProtoBuf.TYPES["sint64"]:
	                    return ByteBuffer.calculateVarint64(ByteBuffer.zigZagEncode64(value));
	                case ProtoBuf.TYPES["fixed64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                    return 8;
	                case ProtoBuf.TYPES["bool"]:
	                    return 1;
	                case ProtoBuf.TYPES["enum"]:
	                    return ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["double"]:
	                    return 8;
	                case ProtoBuf.TYPES["string"]:
	                    n = ByteBuffer.calculateUTF8Bytes(value);
	                    return ByteBuffer.calculateVarint32(n) + n;
	                case ProtoBuf.TYPES["bytes"]:
	                    if (value.remaining() < 0)
	                        throw Error("Illegal value for "+this.toString(true)+": "+value.remaining()+" bytes remaining");
	                    return ByteBuffer.calculateVarint32(value.remaining()) + value.remaining();
	                case ProtoBuf.TYPES["message"]:
	                    n = this.resolvedType.calculate(value);
	                    return ByteBuffer.calculateVarint32(n) + n;
	                case ProtoBuf.TYPES["group"]:
	                    n = this.resolvedType.calculate(value);
	                    return n + ByteBuffer.calculateVarint32((id << 3) | ProtoBuf.WIRE_TYPES.ENDGROUP);
	            }
	            // We should never end here
	            throw Error("[INTERNAL] Illegal value to encode in "+this.toString(true)+": "+value+" (unknown type)");
	        };

	        /**
	         * Encodes a value to the specified buffer. Does not encode the key.
	         * @param {number} id Field number
	         * @param {*} value Field value
	         * @param {ByteBuffer} buffer ByteBuffer to encode to
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If the value cannot be encoded
	         * @expose
	         */
	        ElementPrototype.encodeValue = function(id, value, buffer) {
	            if (value === null) return buffer; // Nothing to encode
	            // Tag has already been written

	            switch (this.type) {
	                // 32bit signed varint
	                case ProtoBuf.TYPES["int32"]:
	                    // "If you use int32 or int64 as the type for a negative number, the resulting varint is always ten bytes
	                    // long – it is, effectively, treated like a very large unsigned integer." (see #122)
	                    if (value < 0)
	                        buffer.writeVarint64(value);
	                    else
	                        buffer.writeVarint32(value);
	                    break;

	                // 32bit unsigned varint
	                case ProtoBuf.TYPES["uint32"]:
	                    buffer.writeVarint32(value);
	                    break;

	                // 32bit varint zig-zag
	                case ProtoBuf.TYPES["sint32"]:
	                    buffer.writeVarint32ZigZag(value);
	                    break;

	                // Fixed unsigned 32bit
	                case ProtoBuf.TYPES["fixed32"]:
	                    buffer.writeUint32(value);
	                    break;

	                // Fixed signed 32bit
	                case ProtoBuf.TYPES["sfixed32"]:
	                    buffer.writeInt32(value);
	                    break;

	                // 64bit varint as-is
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                    buffer.writeVarint64(value); // throws
	                    break;

	                // 64bit varint zig-zag
	                case ProtoBuf.TYPES["sint64"]:
	                    buffer.writeVarint64ZigZag(value); // throws
	                    break;

	                // Fixed unsigned 64bit
	                case ProtoBuf.TYPES["fixed64"]:
	                    buffer.writeUint64(value); // throws
	                    break;

	                // Fixed signed 64bit
	                case ProtoBuf.TYPES["sfixed64"]:
	                    buffer.writeInt64(value); // throws
	                    break;

	                // Bool
	                case ProtoBuf.TYPES["bool"]:
	                    if (typeof value === 'string')
	                        buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : !!value);
	                    else
	                        buffer.writeVarint32(value ? 1 : 0);
	                    break;

	                // Constant enum value
	                case ProtoBuf.TYPES["enum"]:
	                    buffer.writeVarint32(value);
	                    break;

	                // 32bit float
	                case ProtoBuf.TYPES["float"]:
	                    buffer.writeFloat32(value);
	                    break;

	                // 64bit float
	                case ProtoBuf.TYPES["double"]:
	                    buffer.writeFloat64(value);
	                    break;

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    buffer.writeVString(value);
	                    break;

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]:
	                    if (value.remaining() < 0)
	                        throw Error("Illegal value for "+this.toString(true)+": "+value.remaining()+" bytes remaining");
	                    var prevOffset = value.offset;
	                    buffer.writeVarint32(value.remaining());
	                    buffer.append(value);
	                    value.offset = prevOffset;
	                    break;

	                // Embedded message
	                case ProtoBuf.TYPES["message"]:
	                    var bb = new ByteBuffer().LE();
	                    this.resolvedType.encode(value, bb);
	                    buffer.writeVarint32(bb.offset);
	                    buffer.append(bb.flip());
	                    break;

	                // Legacy group
	                case ProtoBuf.TYPES["group"]:
	                    this.resolvedType.encode(value, buffer);
	                    buffer.writeVarint32((id << 3) | ProtoBuf.WIRE_TYPES.ENDGROUP);
	                    break;

	                default:
	                    // We should never end here
	                    throw Error("[INTERNAL] Illegal value to encode in "+this.toString(true)+": "+value+" (unknown type)");
	            }
	            return buffer;
	        };

	        /**
	         * Decode one element value from the specified buffer.
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {number} wireType The field wire type
	         * @param {number} id The field number
	         * @return {*} Decoded value
	         * @throws {Error} If the field cannot be decoded
	         * @expose
	         */
	        ElementPrototype.decode = function(buffer, wireType, id) {
	            if (wireType != this.type.wireType)
	                throw Error("Unexpected wire type for element");

	            var value, nBytes;
	            switch (this.type) {
	                // 32bit signed varint
	                case ProtoBuf.TYPES["int32"]:
	                    return buffer.readVarint32() | 0;

	                // 32bit unsigned varint
	                case ProtoBuf.TYPES["uint32"]:
	                    return buffer.readVarint32() >>> 0;

	                // 32bit signed varint zig-zag
	                case ProtoBuf.TYPES["sint32"]:
	                    return buffer.readVarint32ZigZag() | 0;

	                // Fixed 32bit unsigned
	                case ProtoBuf.TYPES["fixed32"]:
	                    return buffer.readUint32() >>> 0;

	                case ProtoBuf.TYPES["sfixed32"]:
	                    return buffer.readInt32() | 0;

	                // 64bit signed varint
	                case ProtoBuf.TYPES["int64"]:
	                    return buffer.readVarint64();

	                // 64bit unsigned varint
	                case ProtoBuf.TYPES["uint64"]:
	                    return buffer.readVarint64().toUnsigned();

	                // 64bit signed varint zig-zag
	                case ProtoBuf.TYPES["sint64"]:
	                    return buffer.readVarint64ZigZag();

	                // Fixed 64bit unsigned
	                case ProtoBuf.TYPES["fixed64"]:
	                    return buffer.readUint64();

	                // Fixed 64bit signed
	                case ProtoBuf.TYPES["sfixed64"]:
	                    return buffer.readInt64();

	                // Bool varint
	                case ProtoBuf.TYPES["bool"]:
	                    return !!buffer.readVarint32();

	                // Constant enum value (varint)
	                case ProtoBuf.TYPES["enum"]:
	                    // The following Builder.Message#set will already throw
	                    return buffer.readVarint32();

	                // 32bit float
	                case ProtoBuf.TYPES["float"]:
	                    return buffer.readFloat();

	                // 64bit float
	                case ProtoBuf.TYPES["double"]:
	                    return buffer.readDouble();

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    return buffer.readVString();

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]: {
	                    nBytes = buffer.readVarint32();
	                    if (buffer.remaining() < nBytes)
	                        throw Error("Illegal number of bytes for "+this.toString(true)+": "+nBytes+" required but got only "+buffer.remaining());
	                    value = buffer.clone(); // Offset already set
	                    value.limit = value.offset+nBytes;
	                    buffer.offset += nBytes;
	                    return value;
	                }

	                // Length-delimited embedded message
	                case ProtoBuf.TYPES["message"]: {
	                    nBytes = buffer.readVarint32();
	                    return this.resolvedType.decode(buffer, nBytes);
	                }

	                // Legacy group
	                case ProtoBuf.TYPES["group"]:
	                    return this.resolvedType.decode(buffer, -1, id);
	            }

	            // We should never end here
	            throw Error("[INTERNAL] Illegal decode type");
	        };

	        /**
	         * Converts a value from a string to the canonical element type.
	         *
	         * Legal only when isMapKey is true.
	         *
	         * @param {string} str The string value
	         * @returns {*} The value
	         */
	        ElementPrototype.valueFromString = function(str) {
	            if (!this.isMapKey) {
	                throw Error("valueFromString() called on non-map-key element");
	            }

	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    return this.verifyValue(parseInt(str));

	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]:
	                      // Long-based fields support conversions from string already.
	                      return this.verifyValue(str);

	                case ProtoBuf.TYPES["bool"]:
	                      return str === "true";

	                case ProtoBuf.TYPES["string"]:
	                      return this.verifyValue(str);

	                case ProtoBuf.TYPES["bytes"]:
	                      return ByteBuffer.fromBinary(str);
	            }
	        };

	        /**
	         * Converts a value from the canonical element type to a string.
	         *
	         * It should be the case that `valueFromString(valueToString(val))` returns
	         * a value equivalent to `verifyValue(val)` for every legal value of `val`
	         * according to this element type.
	         *
	         * This may be used when the element must be stored or used as a string,
	         * e.g., as a map key on an Object.
	         *
	         * Legal only when isMapKey is true.
	         *
	         * @param {*} val The value
	         * @returns {string} The string form of the value.
	         */
	        ElementPrototype.valueToString = function(value) {
	            if (!this.isMapKey) {
	                throw Error("valueToString() called on non-map-key element");
	            }

	            if (this.type === ProtoBuf.TYPES["bytes"]) {
	                return value.toString("binary");
	            } else {
	                return value.toString();
	            }
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Element
	         * @expose
	         */
	        Reflect.Element = Element;

	        /**
	         * Constructs a new Message.
	         * @exports ProtoBuf.Reflect.Message
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Namespace} parent Parent message or namespace
	         * @param {string} name Message name
	         * @param {Object.<string,*>=} options Message options
	         * @param {boolean=} isGroup `true` if this is a legacy group
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Message = function(builder, parent, name, options, isGroup, syntax) {
	            Namespace.call(this, builder, parent, name, options, syntax);

	            /**
	             * @override
	             */
	            this.className = "Message";

	            /**
	             * Extensions range.
	             * @type {!Array.<number>}
	             * @expose
	             */
	            this.extensions = [ProtoBuf.ID_MIN, ProtoBuf.ID_MAX];

	            /**
	             * Runtime message class.
	             * @type {?function(new:ProtoBuf.Builder.Message)}
	             * @expose
	             */
	            this.clazz = null;

	            /**
	             * Whether this is a legacy group or not.
	             * @type {boolean}
	             * @expose
	             */
	            this.isGroup = !!isGroup;

	            // The following cached collections are used to efficiently iterate over or look up fields when decoding.

	            /**
	             * Cached fields.
	             * @type {?Array.<!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fields = null;

	            /**
	             * Cached fields by id.
	             * @type {?Object.<number,!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fieldsById = null;

	            /**
	             * Cached fields by name.
	             * @type {?Object.<string,!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fieldsByName = null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.prototype
	         * @inner
	         */
	        var MessagePrototype = Message.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds the message and returns the runtime counterpart, which is a fully functional class.
	         * @see ProtoBuf.Builder.Message
	         * @param {boolean=} rebuild Whether to rebuild or not, defaults to false
	         * @return {ProtoBuf.Reflect.Message} Message class
	         * @throws {Error} If the message cannot be built
	         * @expose
	         */
	        MessagePrototype.build = function(rebuild) {
	            if (this.clazz && !rebuild)
	                return this.clazz;

	            // Create the runtime Message class in its own scope
	            var clazz = (function(ProtoBuf, T) {

	                var fields = T.getChildren(ProtoBuf.Reflect.Message.Field),
	                    oneofs = T.getChildren(ProtoBuf.Reflect.Message.OneOf);

	                /**
	                 * Constructs a new runtime Message.
	                 * @name ProtoBuf.Builder.Message
	                 * @class Barebone of all runtime messages.
	                 * @param {!Object.<string,*>|string} values Preset values
	                 * @param {...string} var_args
	                 * @constructor
	                 * @throws {Error} If the message cannot be created
	                 */
	                var Message = function(values, var_args) {
	                    ProtoBuf.Builder.Message.call(this);

	                    // Create virtual oneof properties
	                    for (var i=0, k=oneofs.length; i<k; ++i)
	                        this[oneofs[i].name] = null;
	                    // Create fields and set default values
	                    for (i=0, k=fields.length; i<k; ++i) {
	                        var field = fields[i];
	                        this[field.name] =
	                            field.repeated ? [] :
	                            (field.map ? new ProtoBuf.Map(field) : null);
	                        if ((field.required || T.syntax === 'proto3') &&
	                            field.defaultValue !== null)
	                            this[field.name] = field.defaultValue;
	                    }

	                    if (arguments.length > 0) {
	                        var value;
	                        // Set field values from a values object
	                        if (arguments.length === 1 && values !== null && typeof values === 'object' &&
	                            /* not _another_ Message */ (typeof values.encode !== 'function' || values instanceof Message) &&
	                            /* not a repeated field */ !Array.isArray(values) &&
	                            /* not a Map */ !(values instanceof ProtoBuf.Map) &&
	                            /* not a ByteBuffer */ !ByteBuffer.isByteBuffer(values) &&
	                            /* not an ArrayBuffer */ !(values instanceof ArrayBuffer) &&
	                            /* not a Long */ !(ProtoBuf.Long && values instanceof ProtoBuf.Long)) {
	                            this.$set(values);
	                        } else // Set field values from arguments, in declaration order
	                            for (i=0, k=arguments.length; i<k; ++i)
	                                if (typeof (value = arguments[i]) !== 'undefined')
	                                    this.$set(fields[i].name, value); // May throw
	                    }
	                };

	                /**
	                 * @alias ProtoBuf.Builder.Message.prototype
	                 * @inner
	                 */
	                var MessagePrototype = Message.prototype = Object.create(ProtoBuf.Builder.Message.prototype);

	                /**
	                 * Adds a value to a repeated field.
	                 * @name ProtoBuf.Builder.Message#add
	                 * @function
	                 * @param {string} key Field name
	                 * @param {*} value Value to add
	                 * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be added
	                 * @expose
	                 */
	                MessagePrototype.add = function(key, value, noAssert) {
	                    var field = T._fieldsByName[key];
	                    if (!noAssert) {
	                        if (!field)
	                            throw Error(this+"#"+key+" is undefined");
	                        if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                            throw Error(this+"#"+key+" is not a field: "+field.toString(true)); // May throw if it's an enum or embedded message
	                        if (!field.repeated)
	                            throw Error(this+"#"+key+" is not a repeated field");
	                        value = field.verifyValue(value, true);
	                    }
	                    if (this[key] === null)
	                        this[key] = [];
	                    this[key].push(value);
	                    return this;
	                };

	                /**
	                 * Adds a value to a repeated field. This is an alias for {@link ProtoBuf.Builder.Message#add}.
	                 * @name ProtoBuf.Builder.Message#$add
	                 * @function
	                 * @param {string} key Field name
	                 * @param {*} value Value to add
	                 * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be added
	                 * @expose
	                 */
	                MessagePrototype.$add = MessagePrototype.add;

	                /**
	                 * Sets a field's value.
	                 * @name ProtoBuf.Builder.Message#set
	                 * @function
	                 * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
	                 * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
	                 * @param {boolean=} noAssert Whether to not assert for an actual field / proper value type, defaults to `false`
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be set
	                 * @expose
	                 */
	                MessagePrototype.set = function(keyOrObj, value, noAssert) {
	                    if (keyOrObj && typeof keyOrObj === 'object') {
	                        noAssert = value;
	                        for (var ikey in keyOrObj)
	                            if (keyOrObj.hasOwnProperty(ikey) && typeof (value = keyOrObj[ikey]) !== 'undefined')
	                                this.$set(ikey, value, noAssert);
	                        return this;
	                    }
	                    var field = T._fieldsByName[keyOrObj];
	                    if (!noAssert) {
	                        if (!field)
	                            throw Error(this+"#"+keyOrObj+" is not a field: undefined");
	                        if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                            throw Error(this+"#"+keyOrObj+" is not a field: "+field.toString(true));
	                        this[field.name] = (value = field.verifyValue(value)); // May throw
	                    } else
	                        this[keyOrObj] = value;
	                    if (field && field.oneof) { // Field is part of an OneOf (not a virtual OneOf field)
	                        var currentField = this[field.oneof.name]; // Virtual field references currently set field
	                        if (value !== null) {
	                            if (currentField !== null && currentField !== field.name)
	                                this[currentField] = null; // Clear currently set field
	                            this[field.oneof.name] = field.name; // Point virtual field at this field
	                        } else if (/* value === null && */currentField === keyOrObj)
	                            this[field.oneof.name] = null; // Clear virtual field (current field explicitly cleared)
	                    }
	                    return this;
	                };

	                /**
	                 * Sets a field's value. This is an alias for [@link ProtoBuf.Builder.Message#set}.
	                 * @name ProtoBuf.Builder.Message#$set
	                 * @function
	                 * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
	                 * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
	                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                 * @throws {Error} If the value cannot be set
	                 * @expose
	                 */
	                MessagePrototype.$set = MessagePrototype.set;

	                /**
	                 * Gets a field's value.
	                 * @name ProtoBuf.Builder.Message#get
	                 * @function
	                 * @param {string} key Key
	                 * @param {boolean=} noAssert Whether to not assert for an actual field, defaults to `false`
	                 * @return {*} Value
	                 * @throws {Error} If there is no such field
	                 * @expose
	                 */
	                MessagePrototype.get = function(key, noAssert) {
	                    if (noAssert)
	                        return this[key];
	                    var field = T._fieldsByName[key];
	                    if (!field || !(field instanceof ProtoBuf.Reflect.Message.Field))
	                        throw Error(this+"#"+key+" is not a field: undefined");
	                    if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                        throw Error(this+"#"+key+" is not a field: "+field.toString(true));
	                    return this[field.name];
	                };

	                /**
	                 * Gets a field's value. This is an alias for {@link ProtoBuf.Builder.Message#$get}.
	                 * @name ProtoBuf.Builder.Message#$get
	                 * @function
	                 * @param {string} key Key
	                 * @return {*} Value
	                 * @throws {Error} If there is no such field
	                 * @expose
	                 */
	                MessagePrototype.$get = MessagePrototype.get;

	                // Getters and setters

	                for (var i=0; i<fields.length; i++) {
	                    var field = fields[i];
	                    // no setters for extension fields as these are named by their fqn
	                    if (field instanceof ProtoBuf.Reflect.Message.ExtensionField)
	                        continue;

	                    if (T.builder.options['populateAccessors'])
	                        (function(field) {
	                            // set/get[SomeValue]
	                            var Name = field.originalName.replace(/(_[a-zA-Z])/g, function(match) {
	                                return match.toUpperCase().replace('_','');
	                            });
	                            Name = Name.substring(0,1).toUpperCase() + Name.substring(1);

	                            // set/get_[some_value] FIXME: Do we really need these?
	                            var name = field.originalName.replace(/([A-Z])/g, function(match) {
	                                return "_"+match;
	                            });

	                            /**
	                             * The current field's unbound setter function.
	                             * @function
	                             * @param {*} value
	                             * @param {boolean=} noAssert
	                             * @returns {!ProtoBuf.Builder.Message}
	                             * @inner
	                             */
	                            var setter = function(value, noAssert) {
	                                this[field.name] = noAssert ? value : field.verifyValue(value);
	                                return this;
	                            };

	                            /**
	                             * The current field's unbound getter function.
	                             * @function
	                             * @returns {*}
	                             * @inner
	                             */
	                            var getter = function() {
	                                return this[field.name];
	                            };

	                            if (T.getChild("set"+Name) === null)
	                                /**
	                                 * Sets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#set[SomeField]
	                                 * @function
	                                 * @param {*} value Value to set
	                                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                                 * @returns {!ProtoBuf.Builder.Message} this
	                                 * @abstract
	                                 * @throws {Error} If the value cannot be set
	                                 */
	                                MessagePrototype["set"+Name] = setter;

	                            if (T.getChild("set_"+name) === null)
	                                /**
	                                 * Sets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#set_[some_field]
	                                 * @function
	                                 * @param {*} value Value to set
	                                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                                 * @returns {!ProtoBuf.Builder.Message} this
	                                 * @abstract
	                                 * @throws {Error} If the value cannot be set
	                                 */
	                                MessagePrototype["set_"+name] = setter;

	                            if (T.getChild("get"+Name) === null)
	                                /**
	                                 * Gets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#get[SomeField]
	                                 * @function
	                                 * @abstract
	                                 * @return {*} The value
	                                 */
	                                MessagePrototype["get"+Name] = getter;

	                            if (T.getChild("get_"+name) === null)
	                                /**
	                                 * Gets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#get_[some_field]
	                                 * @function
	                                 * @return {*} The value
	                                 * @abstract
	                                 */
	                                MessagePrototype["get_"+name] = getter;

	                        })(field);
	                }

	                // En-/decoding

	                /**
	                 * Encodes the message.
	                 * @name ProtoBuf.Builder.Message#$encode
	                 * @function
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ByteBuffer in the `encoded` property on the error.
	                 * @expose
	                 * @see ProtoBuf.Builder.Message#encode64
	                 * @see ProtoBuf.Builder.Message#encodeHex
	                 * @see ProtoBuf.Builder.Message#encodeAB
	                 */
	                MessagePrototype.encode = function(buffer, noVerify) {
	                    if (typeof buffer === 'boolean')
	                        noVerify = buffer,
	                        buffer = undefined;
	                    var isNew = false;
	                    if (!buffer)
	                        buffer = new ByteBuffer(),
	                        isNew = true;
	                    var le = buffer.littleEndian;
	                    try {
	                        T.encode(this, buffer.LE(), noVerify);
	                        return (isNew ? buffer.flip() : buffer).LE(le);
	                    } catch (e) {
	                        buffer.LE(le);
	                        throw(e);
	                    }
	                };

	                /**
	                 * Encodes a message using the specified data payload.
	                 * @param {!Object.<string,*>} data Data payload
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @expose
	                 */
	                Message.encode = function(data, buffer, noVerify) {
	                    return new Message(data).encode(buffer, noVerify);
	                };

	                /**
	                 * Calculates the byte length of the message.
	                 * @name ProtoBuf.Builder.Message#calculate
	                 * @function
	                 * @returns {number} Byte length
	                 * @throws {Error} If the message cannot be calculated or if required fields are missing.
	                 * @expose
	                 */
	                MessagePrototype.calculate = function() {
	                    return T.calculate(this);
	                };

	                /**
	                 * Encodes the varint32 length-delimited message.
	                 * @name ProtoBuf.Builder.Message#encodeDelimited
	                 * @function
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ByteBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeDelimited = function(buffer) {
	                    var isNew = false;
	                    if (!buffer)
	                        buffer = new ByteBuffer(),
	                        isNew = true;
	                    var enc = new ByteBuffer().LE();
	                    T.encode(this, enc).flip();
	                    buffer.writeVarint32(enc.remaining());
	                    buffer.append(enc);
	                    return isNew ? buffer.flip() : buffer;
	                };

	                /**
	                 * Directly encodes the message to an ArrayBuffer.
	                 * @name ProtoBuf.Builder.Message#encodeAB
	                 * @function
	                 * @return {ArrayBuffer} Encoded message as ArrayBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ArrayBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeAB = function() {
	                    try {
	                        return this.encode().toArrayBuffer();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toArrayBuffer();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as an ArrayBuffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeAB}.
	                 * @name ProtoBuf.Builder.Message#toArrayBuffer
	                 * @function
	                 * @return {ArrayBuffer} Encoded message as ArrayBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ArrayBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toArrayBuffer = MessagePrototype.encodeAB;

	                /**
	                 * Directly encodes the message to a node Buffer.
	                 * @name ProtoBuf.Builder.Message#encodeNB
	                 * @function
	                 * @return {!Buffer}
	                 * @throws {Error} If the message cannot be encoded, not running under node.js or if required fields are
	                 *  missing. The later still returns the encoded node Buffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeNB = function() {
	                    try {
	                        return this.encode().toBuffer();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toBuffer();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a node Buffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeNB}.
	                 * @name ProtoBuf.Builder.Message#toBuffer
	                 * @function
	                 * @return {!Buffer}
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded node Buffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toBuffer = MessagePrototype.encodeNB;

	                /**
	                 * Directly encodes the message to a base64 encoded string.
	                 * @name ProtoBuf.Builder.Message#encode64
	                 * @function
	                 * @return {string} Base64 encoded string
	                 * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
	                 *  still returns the encoded base64 string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encode64 = function() {
	                    try {
	                        return this.encode().toBase64();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toBase64();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a base64 encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encode64}.
	                 * @name ProtoBuf.Builder.Message#toBase64
	                 * @function
	                 * @return {string} Base64 encoded string
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded base64 string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toBase64 = MessagePrototype.encode64;

	                /**
	                 * Directly encodes the message to a hex encoded string.
	                 * @name ProtoBuf.Builder.Message#encodeHex
	                 * @function
	                 * @return {string} Hex encoded string
	                 * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
	                 *  still returns the encoded hex string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeHex = function() {
	                    try {
	                        return this.encode().toHex();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toHex();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a hex encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encodeHex}.
	                 * @name ProtoBuf.Builder.Message#toHex
	                 * @function
	                 * @return {string} Hex encoded string
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded hex string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toHex = MessagePrototype.encodeHex;

	                /**
	                 * Clones a message object or field value to a raw object.
	                 * @param {*} obj Object to clone
	                 * @param {boolean} binaryAsBase64 Whether to include binary data as base64 strings or as a buffer otherwise
	                 * @param {boolean} longsAsStrings Whether to encode longs as strings
	                 * @param {!ProtoBuf.Reflect.T=} resolvedType The resolved field type if a field
	                 * @returns {*} Cloned object
	                 * @inner
	                 */
	                function cloneRaw(obj, binaryAsBase64, longsAsStrings, resolvedType) {
	                    if (obj === null || typeof obj !== 'object') {
	                        // Convert enum values to their respective names
	                        if (resolvedType && resolvedType instanceof ProtoBuf.Reflect.Enum) {
	                            var name = ProtoBuf.Reflect.Enum.getName(resolvedType.object, obj);
	                            if (name !== null)
	                                return name;
	                        }
	                        // Pass-through string, number, boolean, null...
	                        return obj;
	                    }
	                    // Convert ByteBuffers to raw buffer or strings
	                    if (ByteBuffer.isByteBuffer(obj))
	                        return binaryAsBase64 ? obj.toBase64() : obj.toBuffer();
	                    // Convert Longs to proper objects or strings
	                    if (ProtoBuf.Long.isLong(obj))
	                        return longsAsStrings ? obj.toString() : new ProtoBuf.Long(obj);
	                    var clone;
	                    // Clone arrays
	                    if (Array.isArray(obj)) {
	                        clone = [];
	                        obj.forEach(function(v, k) {
	                            clone[k] = cloneRaw(v, binaryAsBase64, longsAsStrings, resolvedType);
	                        });
	                        return clone;
	                    }
	                    clone = {};
	                    // Convert maps to objects
	                    if (obj instanceof ProtoBuf.Map) {
	                        var it = obj.entries();
	                        for (var e = it.next(); !e.done; e = it.next())
	                            clone[obj.keyElem.valueToString(e.value[0])] = cloneRaw(e.value[1], binaryAsBase64, longsAsStrings, obj.valueElem.resolvedType);
	                        return clone;
	                    }
	                    // Everything else is a non-null object
	                    var type = obj.$type,
	                        field = undefined;
	                    for (var i in obj)
	                        if (obj.hasOwnProperty(i)) {
	                            if (type && (field = type.getChild(i)))
	                                clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings, field.resolvedType);
	                            else
	                                clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings);
	                        }
	                    return clone;
	                }

	                /**
	                 * Returns the message's raw payload.
	                 * @param {boolean=} binaryAsBase64 Whether to include binary data as base64 strings instead of Buffers, defaults to `false`
	                 * @param {boolean} longsAsStrings Whether to encode longs as strings
	                 * @returns {Object.<string,*>} Raw payload
	                 * @expose
	                 */
	                MessagePrototype.toRaw = function(binaryAsBase64, longsAsStrings) {
	                    return cloneRaw(this, !!binaryAsBase64, !!longsAsStrings, this.$type);
	                };

	                /**
	                 * Encodes a message to JSON.
	                 * @returns {string} JSON string
	                 * @expose
	                 */
	                MessagePrototype.encodeJSON = function() {
	                    return JSON.stringify(
	                        cloneRaw(this,
	                             /* binary-as-base64 */ true,
	                             /* longs-as-strings */ true,
	                             this.$type
	                        )
	                    );
	                };

	                /**
	                 * Decodes a message from the specified buffer or string.
	                 * @name ProtoBuf.Builder.Message.decode
	                 * @function
	                 * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
	                 * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 * @see ProtoBuf.Builder.Message.decode64
	                 * @see ProtoBuf.Builder.Message.decodeHex
	                 */
	                Message.decode = function(buffer, enc) {
	                    if (typeof buffer === 'string')
	                        buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");
	                    buffer = ByteBuffer.isByteBuffer(buffer) ? buffer : ByteBuffer.wrap(buffer); // May throw
	                    var le = buffer.littleEndian;
	                    try {
	                        var msg = T.decode(buffer.LE());
	                        buffer.LE(le);
	                        return msg;
	                    } catch (e) {
	                        buffer.LE(le);
	                        throw(e);
	                    }
	                };

	                /**
	                 * Decodes a varint32 length-delimited message from the specified buffer or string.
	                 * @name ProtoBuf.Builder.Message.decodeDelimited
	                 * @function
	                 * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
	                 * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
	                 * @return {ProtoBuf.Builder.Message} Decoded message or `null` if not enough bytes are available yet
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decodeDelimited = function(buffer, enc) {
	                    if (typeof buffer === 'string')
	                        buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");
	                    buffer = ByteBuffer.isByteBuffer(buffer) ? buffer : ByteBuffer.wrap(buffer); // May throw
	                    if (buffer.remaining() < 1)
	                        return null;
	                    var off = buffer.offset,
	                        len = buffer.readVarint32();
	                    if (buffer.remaining() < len) {
	                        buffer.offset = off;
	                        return null;
	                    }
	                    try {
	                        var msg = T.decode(buffer.slice(buffer.offset, buffer.offset + len).LE());
	                        buffer.offset += len;
	                        return msg;
	                    } catch (err) {
	                        buffer.offset += len;
	                        throw err;
	                    }
	                };

	                /**
	                 * Decodes the message from the specified base64 encoded string.
	                 * @name ProtoBuf.Builder.Message.decode64
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decode64 = function(str) {
	                    return Message.decode(str, "base64");
	                };

	                /**
	                 * Decodes the message from the specified hex encoded string.
	                 * @name ProtoBuf.Builder.Message.decodeHex
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decodeHex = function(str) {
	                    return Message.decode(str, "hex");
	                };

	                /**
	                 * Decodes the message from a JSON string.
	                 * @name ProtoBuf.Builder.Message.decodeJSON
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are
	                 * missing.
	                 * @expose
	                 */
	                Message.decodeJSON = function(str) {
	                    return new Message(JSON.parse(str));
	                };

	                // Utility

	                /**
	                 * Returns a string representation of this Message.
	                 * @name ProtoBuf.Builder.Message#toString
	                 * @function
	                 * @return {string} String representation as of ".Fully.Qualified.MessageName"
	                 * @expose
	                 */
	                MessagePrototype.toString = function() {
	                    return T.toString();
	                };

	                // Properties

	                /**
	                 * Message options.
	                 * @name ProtoBuf.Builder.Message.$options
	                 * @type {Object.<string,*>}
	                 * @expose
	                 */
	                var $optionsS; // cc needs this

	                /**
	                 * Message options.
	                 * @name ProtoBuf.Builder.Message#$options
	                 * @type {Object.<string,*>}
	                 * @expose
	                 */
	                var $options;

	                /**
	                 * Reflection type.
	                 * @name ProtoBuf.Builder.Message.$type
	                 * @type {!ProtoBuf.Reflect.Message}
	                 * @expose
	                 */
	                var $typeS;

	                /**
	                 * Reflection type.
	                 * @name ProtoBuf.Builder.Message#$type
	                 * @type {!ProtoBuf.Reflect.Message}
	                 * @expose
	                 */
	                var $type;

	                if (Object.defineProperty)
	                    Object.defineProperty(Message, '$options', { "value": T.buildOpt() }),
	                    Object.defineProperty(MessagePrototype, "$options", { "value": Message["$options"] }),
	                    Object.defineProperty(Message, "$type", { "value": T }),
	                    Object.defineProperty(MessagePrototype, "$type", { "value": T });

	                return Message;

	            })(ProtoBuf, this);

	            // Static enums and prototyped sub-messages / cached collections
	            this._fields = [];
	            this._fieldsById = {};
	            this._fieldsByName = {};
	            for (var i=0, k=this.children.length, child; i<k; i++) {
	                child = this.children[i];
	                if (child instanceof Enum || child instanceof Message || child instanceof Service) {
	                    if (clazz.hasOwnProperty(child.name))
	                        throw Error("Illegal reflect child of "+this.toString(true)+": "+child.toString(true)+" cannot override static property '"+child.name+"'");
	                    clazz[child.name] = child.build();
	                } else if (child instanceof Message.Field)
	                    child.build(),
	                    this._fields.push(child),
	                    this._fieldsById[child.id] = child,
	                    this._fieldsByName[child.name] = child;
	                else if (!(child instanceof Message.OneOf) && !(child instanceof Extension)) // Not built
	                    throw Error("Illegal reflect child of "+this.toString(true)+": "+this.children[i].toString(true));
	            }

	            return this.clazz = clazz;
	        };

	        /**
	         * Encodes a runtime message's contents to the specified buffer.
	         * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
	         * @param {ByteBuffer} buffer ByteBuffer to write to
	         * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If required fields are missing or the message cannot be encoded for another reason
	         * @expose
	         */
	        MessagePrototype.encode = function(message, buffer, noVerify) {
	            var fieldMissing = null,
	                field;
	            for (var i=0, k=this._fields.length, val; i<k; ++i) {
	                field = this._fields[i];
	                val = message[field.name];
	                if (field.required && val === null) {
	                    if (fieldMissing === null)
	                        fieldMissing = field;
	                } else
	                    field.encode(noVerify ? val : field.verifyValue(val), buffer, message);
	            }
	            if (fieldMissing !== null) {
	                var err = Error("Missing at least one required field for "+this.toString(true)+": "+fieldMissing);
	                err["encoded"] = buffer; // Still expose what we got
	                throw(err);
	            }
	            return buffer;
	        };

	        /**
	         * Calculates a runtime message's byte length.
	         * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
	         * @returns {number} Byte length
	         * @throws {Error} If required fields are missing or the message cannot be calculated for another reason
	         * @expose
	         */
	        MessagePrototype.calculate = function(message) {
	            for (var n=0, i=0, k=this._fields.length, field, val; i<k; ++i) {
	                field = this._fields[i];
	                val = message[field.name];
	                if (field.required && val === null)
	                   throw Error("Missing at least one required field for "+this.toString(true)+": "+field);
	                else
	                    n += field.calculate(val, message);
	            }
	            return n;
	        };

	        /**
	         * Skips all data until the end of the specified group has been reached.
	         * @param {number} expectedId Expected GROUPEND id
	         * @param {!ByteBuffer} buf ByteBuffer
	         * @returns {boolean} `true` if a value as been skipped, `false` if the end has been reached
	         * @throws {Error} If it wasn't possible to find the end of the group (buffer overrun or end tag mismatch)
	         * @inner
	         */
	        function skipTillGroupEnd(expectedId, buf) {
	            var tag = buf.readVarint32(), // Throws on OOB
	                wireType = tag & 0x07,
	                id = tag >>> 3;
	            switch (wireType) {
	                case ProtoBuf.WIRE_TYPES.VARINT:
	                    do tag = buf.readUint8();
	                    while ((tag & 0x80) === 0x80);
	                    break;
	                case ProtoBuf.WIRE_TYPES.BITS64:
	                    buf.offset += 8;
	                    break;
	                case ProtoBuf.WIRE_TYPES.LDELIM:
	                    tag = buf.readVarint32(); // reads the varint
	                    buf.offset += tag;        // skips n bytes
	                    break;
	                case ProtoBuf.WIRE_TYPES.STARTGROUP:
	                    skipTillGroupEnd(id, buf);
	                    break;
	                case ProtoBuf.WIRE_TYPES.ENDGROUP:
	                    if (id === expectedId)
	                        return false;
	                    else
	                        throw Error("Illegal GROUPEND after unknown group: "+id+" ("+expectedId+" expected)");
	                case ProtoBuf.WIRE_TYPES.BITS32:
	                    buf.offset += 4;
	                    break;
	                default:
	                    throw Error("Illegal wire type in unknown group "+expectedId+": "+wireType);
	            }
	            return true;
	        }

	        /**
	         * Decodes an encoded message and returns the decoded message.
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {number=} length Message length. Defaults to decode all the available data.
	         * @param {number=} expectedGroupEndId Expected GROUPEND id if this is a legacy group
	         * @return {ProtoBuf.Builder.Message} Decoded message
	         * @throws {Error} If the message cannot be decoded
	         * @expose
	         */
	        MessagePrototype.decode = function(buffer, length, expectedGroupEndId) {
	            length = typeof length === 'number' ? length : -1;
	            var start = buffer.offset,
	                msg = new (this.clazz)(),
	                tag, wireType, id, field;
	            while (buffer.offset < start+length || (length === -1 && buffer.remaining() > 0)) {
	                tag = buffer.readVarint32();
	                wireType = tag & 0x07;
	                id = tag >>> 3;
	                if (wireType === ProtoBuf.WIRE_TYPES.ENDGROUP) {
	                    if (id !== expectedGroupEndId)
	                        throw Error("Illegal group end indicator for "+this.toString(true)+": "+id+" ("+(expectedGroupEndId ? expectedGroupEndId+" expected" : "not a group")+")");
	                    break;
	                }
	                if (!(field = this._fieldsById[id])) {
	                    // "messages created by your new code can be parsed by your old code: old binaries simply ignore the new field when parsing."
	                    switch (wireType) {
	                        case ProtoBuf.WIRE_TYPES.VARINT:
	                            buffer.readVarint32();
	                            break;
	                        case ProtoBuf.WIRE_TYPES.BITS32:
	                            buffer.offset += 4;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.BITS64:
	                            buffer.offset += 8;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.LDELIM:
	                            var len = buffer.readVarint32();
	                            buffer.offset += len;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.STARTGROUP:
	                            while (skipTillGroupEnd(id, buffer)) {}
	                            break;
	                        default:
	                            throw Error("Illegal wire type for unknown field "+id+" in "+this.toString(true)+"#decode: "+wireType);
	                    }
	                    continue;
	                }
	                if (field.repeated && !field.options["packed"]) {
	                    msg[field.name].push(field.decode(wireType, buffer));
	                } else if (field.map) {
	                    var keyval = field.decode(wireType, buffer);
	                    msg[field.name].set(keyval[0], keyval[1]);
	                } else {
	                    msg[field.name] = field.decode(wireType, buffer);
	                    if (field.oneof) { // Field is part of an OneOf (not a virtual OneOf field)
	                        var currentField = msg[field.oneof.name]; // Virtual field references currently set field
	                        if (currentField !== null && currentField !== field.name)
	                            msg[currentField] = null; // Clear currently set field
	                        msg[field.oneof.name] = field.name; // Point virtual field at this field
	                    }
	                }
	            }

	            // Check if all required fields are present and set default values for optional fields that are not
	            for (var i=0, k=this._fields.length; i<k; ++i) {
	                field = this._fields[i];
	                if (msg[field.name] === null) {
	                    if (this.syntax === "proto3") { // Proto3 sets default values by specification
	                        msg[field.name] = field.defaultValue;
	                    } else if (field.required) {
	                        var err = Error("Missing at least one required field for " + this.toString(true) + ": " + field.name);
	                        err["decoded"] = msg; // Still expose what we got
	                        throw(err);
	                    } else if (ProtoBuf.populateDefaults && field.defaultValue !== null)
	                        msg[field.name] = field.defaultValue;
	                }
	            }
	            return msg;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message
	         * @expose
	         */
	        Reflect.Message = Message;

	        /**
	         * Constructs a new Message Field.
	         * @exports ProtoBuf.Reflect.Message.Field
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} rule Rule, one of requried, optional, repeated
	         * @param {string?} keytype Key data type, if any.
	         * @param {string} type Data type, e.g. int32
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @param {Object.<string,*>=} options Options
	         * @param {!ProtoBuf.Reflect.Message.OneOf=} oneof Enclosing OneOf
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Field = function(builder, message, rule, keytype, type, name, id, options, oneof, syntax) {
	            T.call(this, builder, message, name);

	            /**
	             * @override
	             */
	            this.className = "Message.Field";

	            /**
	             * Message field required flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.required = rule === "required";

	            /**
	             * Message field repeated flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.repeated = rule === "repeated";

	            /**
	             * Message field map flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.map = rule === "map";

	            /**
	             * Message field key type. Type reference string if unresolved, protobuf
	             * type if resolved. Valid only if this.map === true, null otherwise.
	             * @type {string|{name: string, wireType: number}|null}
	             * @expose
	             */
	            this.keyType = keytype || null;

	            /**
	             * Message field type. Type reference string if unresolved, protobuf type if
	             * resolved. In a map field, this is the value type.
	             * @type {string|{name: string, wireType: number}}
	             * @expose
	             */
	            this.type = type;

	            /**
	             * Resolved type reference inside the global namespace.
	             * @type {ProtoBuf.Reflect.T|null}
	             * @expose
	             */
	            this.resolvedType = null;

	            /**
	             * Unique message field id.
	             * @type {number}
	             * @expose
	             */
	            this.id = id;

	            /**
	             * Message field options.
	             * @type {!Object.<string,*>}
	             * @dict
	             * @expose
	             */
	            this.options = options || {};

	            /**
	             * Default value.
	             * @type {*}
	             * @expose
	             */
	            this.defaultValue = null;

	            /**
	             * Enclosing OneOf.
	             * @type {?ProtoBuf.Reflect.Message.OneOf}
	             * @expose
	             */
	            this.oneof = oneof || null;

	            /**
	             * Syntax level of this definition (e.g., proto3).
	             * @type {string}
	             * @expose
	             */
	            this.syntax = syntax || 'proto2';

	            /**
	             * Original field name.
	             * @type {string}
	             * @expose
	             */
	            this.originalName = this.name; // Used to revert camelcase transformation on naming collisions

	            /**
	             * Element implementation. Created in build() after types are resolved.
	             * @type {ProtoBuf.Element}
	             * @expose
	             */
	            this.element = null;

	            /**
	             * Key element implementation, for map fields. Created in build() after
	             * types are resolved.
	             * @type {ProtoBuf.Element}
	             * @expose
	             */
	            this.keyElement = null;

	            // Convert field names to camel case notation if the override is set
	            if (this.builder.options['convertFieldsToCamelCase'] && !(this instanceof Message.ExtensionField))
	                this.name = ProtoBuf.Util.toCamelCase(this.name);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.Field.prototype
	         * @inner
	         */
	        var FieldPrototype = Field.prototype = Object.create(T.prototype);

	        /**
	         * Builds the field.
	         * @override
	         * @expose
	         */
	        FieldPrototype.build = function() {
	            this.element = new Element(this.type, this.resolvedType, false, this.syntax);
	            if (this.map)
	                this.keyElement = new Element(this.keyType, undefined, true, this.syntax);

	            // In proto3, fields do not have field presence, and every field is set to
	            // its type's default value ("", 0, 0.0, or false).
	            if (this.syntax === 'proto3' && !this.repeated && !this.map)
	                this.defaultValue = Element.defaultFieldValue(this.type);

	            // Otherwise, default values are present when explicitly specified
	            else if (typeof this.options['default'] !== 'undefined')
	                this.defaultValue = this.verifyValue(this.options['default']);
	        };

	        /**
	         * Checks if the given value can be set for this field.
	         * @param {*} value Value to check
	         * @param {boolean=} skipRepeated Whether to skip the repeated value check or not. Defaults to false.
	         * @return {*} Verified, maybe adjusted, value
	         * @throws {Error} If the value cannot be set for this field
	         * @expose
	         */
	        FieldPrototype.verifyValue = function(value, skipRepeated) {
	            skipRepeated = skipRepeated || false;
	            var fail = function(val, msg) {
	                throw Error("Illegal value for "+this.toString(true)+" of type "+this.type.name+": "+val+" ("+msg+")");
	            }.bind(this);
	            if (value === null) { // NULL values for optional fields
	                if (this.required)
	                    fail(typeof value, "required");
	                if (this.syntax === 'proto3' && this.type !== ProtoBuf.TYPES["message"])
	                    fail(typeof value, "proto3 field without field presence cannot be null");
	                return null;
	            }
	            var i;
	            if (this.repeated && !skipRepeated) { // Repeated values as arrays
	                if (!Array.isArray(value))
	                    value = [value];
	                var res = [];
	                for (i=0; i<value.length; i++)
	                    res.push(this.element.verifyValue(value[i]));
	                return res;
	            }
	            if (this.map && !skipRepeated) { // Map values as objects
	                if (!(value instanceof ProtoBuf.Map)) {
	                    // If not already a Map, attempt to convert.
	                    if (!(value instanceof Object)) {
	                        fail(typeof value,
	                             "expected ProtoBuf.Map or raw object for map field");
	                    }
	                    return new ProtoBuf.Map(this, value);
	                } else {
	                    return value;
	                }
	            }
	            // All non-repeated fields expect no array
	            if (!this.repeated && Array.isArray(value))
	                fail(typeof value, "no array expected");

	            return this.element.verifyValue(value);
	        };

	        /**
	         * Determines whether the field will have a presence on the wire given its
	         * value.
	         * @param {*} value Verified field value
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @return {boolean} Whether the field will be present on the wire
	         */
	        FieldPrototype.hasWirePresence = function(value, message) {
	            if (this.syntax !== 'proto3')
	                return (value !== null);
	            if (this.oneof && message[this.oneof.name] === this.name)
	                return true;
	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    return value !== 0;

	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]:
	                    return value.low !== 0 || value.high !== 0;

	                case ProtoBuf.TYPES["bool"]:
	                    return value;

	                case ProtoBuf.TYPES["float"]:
	                case ProtoBuf.TYPES["double"]:
	                    return value !== 0.0;

	                case ProtoBuf.TYPES["string"]:
	                    return value.length > 0;

	                case ProtoBuf.TYPES["bytes"]:
	                    return value.remaining() > 0;

	                case ProtoBuf.TYPES["enum"]:
	                    return value !== 0;

	                case ProtoBuf.TYPES["message"]:
	                    return value !== null;
	                default:
	                    return true;
	            }
	        };

	        /**
	         * Encodes the specified field value to the specified buffer.
	         * @param {*} value Verified field value
	         * @param {ByteBuffer} buffer ByteBuffer to encode to
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If the field cannot be encoded
	         * @expose
	         */
	        FieldPrototype.encode = function(value, buffer, message) {
	            if (this.type === null || typeof this.type !== 'object')
	                throw Error("[INTERNAL] Unresolved type in "+this.toString(true)+": "+this.type);
	            if (value === null || (this.repeated && value.length == 0))
	                return buffer; // Optional omitted
	            try {
	                if (this.repeated) {
	                    var i;
	                    // "Only repeated fields of primitive numeric types (types which use the varint, 32-bit, or 64-bit wire
	                    // types) can be declared 'packed'."
	                    if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                        // "All of the elements of the field are packed into a single key-value pair with wire type 2
	                        // (length-delimited). Each element is encoded the same way it would be normally, except without a
	                        // tag preceding it."
	                        buffer.writeVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        buffer.ensureCapacity(buffer.offset += 1); // We do not know the length yet, so let's assume a varint of length 1
	                        var start = buffer.offset; // Remember where the contents begin
	                        for (i=0; i<value.length; i++)
	                            this.element.encodeValue(this.id, value[i], buffer);
	                        var len = buffer.offset-start,
	                            varintLen = ByteBuffer.calculateVarint32(len);
	                        if (varintLen > 1) { // We need to move the contents
	                            var contents = buffer.slice(start, buffer.offset);
	                            start += varintLen-1;
	                            buffer.offset = start;
	                            buffer.append(contents);
	                        }
	                        buffer.writeVarint32(len, start-varintLen);
	                    } else {
	                        // "If your message definition has repeated elements (without the [packed=true] option), the encoded
	                        // message has zero or more key-value pairs with the same tag number"
	                        for (i=0; i<value.length; i++)
	                            buffer.writeVarint32((this.id << 3) | this.type.wireType),
	                            this.element.encodeValue(this.id, value[i], buffer);
	                    }
	                } else if (this.map) {
	                    // Write out each map entry as a submessage.
	                    value.forEach(function(val, key, m) {
	                        // Compute the length of the submessage (key, val) pair.
	                        var length =
	                            ByteBuffer.calculateVarint32((1 << 3) | this.keyType.wireType) +
	                            this.keyElement.calculateLength(1, key) +
	                            ByteBuffer.calculateVarint32((2 << 3) | this.type.wireType) +
	                            this.element.calculateLength(2, val);

	                        // Submessage with wire type of length-delimited.
	                        buffer.writeVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        buffer.writeVarint32(length);

	                        // Write out the key and val.
	                        buffer.writeVarint32((1 << 3) | this.keyType.wireType);
	                        this.keyElement.encodeValue(1, key, buffer);
	                        buffer.writeVarint32((2 << 3) | this.type.wireType);
	                        this.element.encodeValue(2, val, buffer);
	                    }, this);
	                } else {
	                    if (this.hasWirePresence(value, message)) {
	                        buffer.writeVarint32((this.id << 3) | this.type.wireType);
	                        this.element.encodeValue(this.id, value, buffer);
	                    }
	                }
	            } catch (e) {
	                throw Error("Illegal value for "+this.toString(true)+": "+value+" ("+e+")");
	            }
	            return buffer;
	        };

	        /**
	         * Calculates the length of this field's value on the network level.
	         * @param {*} value Field value
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @returns {number} Byte length
	         * @expose
	         */
	        FieldPrototype.calculate = function(value, message) {
	            value = this.verifyValue(value); // May throw
	            if (this.type === null || typeof this.type !== 'object')
	                throw Error("[INTERNAL] Unresolved type in "+this.toString(true)+": "+this.type);
	            if (value === null || (this.repeated && value.length == 0))
	                return 0; // Optional omitted
	            var n = 0;
	            try {
	                if (this.repeated) {
	                    var i, ni;
	                    if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                        n += ByteBuffer.calculateVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        ni = 0;
	                        for (i=0; i<value.length; i++)
	                            ni += this.element.calculateLength(this.id, value[i]);
	                        n += ByteBuffer.calculateVarint32(ni);
	                        n += ni;
	                    } else {
	                        for (i=0; i<value.length; i++)
	                            n += ByteBuffer.calculateVarint32((this.id << 3) | this.type.wireType),
	                            n += this.element.calculateLength(this.id, value[i]);
	                    }
	                } else if (this.map) {
	                    // Each map entry becomes a submessage.
	                    value.forEach(function(val, key, m) {
	                        // Compute the length of the submessage (key, val) pair.
	                        var length =
	                            ByteBuffer.calculateVarint32((1 << 3) | this.keyType.wireType) +
	                            this.keyElement.calculateLength(1, key) +
	                            ByteBuffer.calculateVarint32((2 << 3) | this.type.wireType) +
	                            this.element.calculateLength(2, val);

	                        n += ByteBuffer.calculateVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        n += ByteBuffer.calculateVarint32(length);
	                        n += length;
	                    }, this);
	                } else {
	                    if (this.hasWirePresence(value, message)) {
	                        n += ByteBuffer.calculateVarint32((this.id << 3) | this.type.wireType);
	                        n += this.element.calculateLength(this.id, value);
	                    }
	                }
	            } catch (e) {
	                throw Error("Illegal value for "+this.toString(true)+": "+value+" ("+e+")");
	            }
	            return n;
	        };

	        /**
	         * Decode the field value from the specified buffer.
	         * @param {number} wireType Leading wire type
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {boolean=} skipRepeated Whether to skip the repeated check or not. Defaults to false.
	         * @return {*} Decoded value: array for packed repeated fields, [key, value] for
	         *             map fields, or an individual value otherwise.
	         * @throws {Error} If the field cannot be decoded
	         * @expose
	         */
	        FieldPrototype.decode = function(wireType, buffer, skipRepeated) {
	            var value, nBytes;

	            // We expect wireType to match the underlying type's wireType unless we see
	            // a packed repeated field, or unless this is a map field.
	            var wireTypeOK =
	                (!this.map && wireType == this.type.wireType) ||
	                (!skipRepeated && this.repeated && this.options["packed"] &&
	                 wireType == ProtoBuf.WIRE_TYPES.LDELIM) ||
	                (this.map && wireType == ProtoBuf.WIRE_TYPES.LDELIM);
	            if (!wireTypeOK)
	                throw Error("Illegal wire type for field "+this.toString(true)+": "+wireType+" ("+this.type.wireType+" expected)");

	            // Handle packed repeated fields.
	            if (wireType == ProtoBuf.WIRE_TYPES.LDELIM && this.repeated && this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                if (!skipRepeated) {
	                    nBytes = buffer.readVarint32();
	                    nBytes = buffer.offset + nBytes; // Limit
	                    var values = [];
	                    while (buffer.offset < nBytes)
	                        values.push(this.decode(this.type.wireType, buffer, true));
	                    return values;
	                }
	                // Read the next value otherwise...
	            }

	            // Handle maps.
	            if (this.map) {
	                // Read one (key, value) submessage, and return [key, value]
	                var key = Element.defaultFieldValue(this.keyType);
	                value = Element.defaultFieldValue(this.type);

	                // Read the length
	                nBytes = buffer.readVarint32();
	                if (buffer.remaining() < nBytes)
	                    throw Error("Illegal number of bytes for "+this.toString(true)+": "+nBytes+" required but got only "+buffer.remaining());

	                // Get a sub-buffer of this key/value submessage
	                var msgbuf = buffer.clone();
	                msgbuf.limit = msgbuf.offset + nBytes;
	                buffer.offset += nBytes;

	                while (msgbuf.remaining() > 0) {
	                    var tag = msgbuf.readVarint32();
	                    wireType = tag & 0x07;
	                    var id = tag >>> 3;
	                    if (id === 1) {
	                        key = this.keyElement.decode(msgbuf, wireType, id);
	                    } else if (id === 2) {
	                        value = this.element.decode(msgbuf, wireType, id);
	                    } else {
	                        throw Error("Unexpected tag in map field key/value submessage");
	                    }
	                }

	                return [key, value];
	            }

	            // Handle singular and non-packed repeated field values.
	            return this.element.decode(buffer, wireType, this.id);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.Field
	         * @expose
	         */
	        Reflect.Message.Field = Field;

	        /**
	         * Constructs a new Message ExtensionField.
	         * @exports ProtoBuf.Reflect.Message.ExtensionField
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} rule Rule, one of requried, optional, repeated
	         * @param {string} type Data type, e.g. int32
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @param {!Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Message.Field
	         */
	        var ExtensionField = function(builder, message, rule, type, name, id, options) {
	            Field.call(this, builder, message, rule, /* keytype = */ null, type, name, id, options);

	            /**
	             * Extension reference.
	             * @type {!ProtoBuf.Reflect.Extension}
	             * @expose
	             */
	            this.extension;
	        };

	        // Extends Field
	        ExtensionField.prototype = Object.create(Field.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Message.ExtensionField
	         * @expose
	         */
	        Reflect.Message.ExtensionField = ExtensionField;

	        /**
	         * Constructs a new Message OneOf.
	         * @exports ProtoBuf.Reflect.Message.OneOf
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} name OneOf name
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var OneOf = function(builder, message, name) {
	            T.call(this, builder, message, name);

	            /**
	             * Enclosed fields.
	             * @type {!Array.<!ProtoBuf.Reflect.Message.Field>}
	             * @expose
	             */
	            this.fields = [];
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.OneOf
	         * @expose
	         */
	        Reflect.Message.OneOf = OneOf;

	        /**
	         * Constructs a new Enum.
	         * @exports ProtoBuf.Reflect.Enum
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.T} parent Parent Reflect object
	         * @param {string} name Enum name
	         * @param {Object.<string,*>=} options Enum options
	         * @param {string?} syntax The syntax level (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Enum = function(builder, parent, name, options, syntax) {
	            Namespace.call(this, builder, parent, name, options, syntax);

	            /**
	             * @override
	             */
	            this.className = "Enum";

	            /**
	             * Runtime enum object.
	             * @type {Object.<string,number>|null}
	             * @expose
	             */
	            this.object = null;
	        };

	        /**
	         * Gets the string name of an enum value.
	         * @param {!ProtoBuf.Builder.Enum} enm Runtime enum
	         * @param {number} value Enum value
	         * @returns {?string} Name or `null` if not present
	         * @expose
	         */
	        Enum.getName = function(enm, value) {
	            var keys = Object.keys(enm);
	            for (var i=0, key; i<keys.length; ++i)
	                if (enm[key = keys[i]] === value)
	                    return key;
	            return null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Enum.prototype
	         * @inner
	         */
	        var EnumPrototype = Enum.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds this enum and returns the runtime counterpart.
	         * @param {boolean} rebuild Whether to rebuild or not, defaults to false
	         * @returns {!Object.<string,number>}
	         * @expose
	         */
	        EnumPrototype.build = function(rebuild) {
	            if (this.object && !rebuild)
	                return this.object;
	            var enm = new ProtoBuf.Builder.Enum(),
	                values = this.getChildren(Enum.Value);
	            for (var i=0, k=values.length; i<k; ++i)
	                enm[values[i]['name']] = values[i]['id'];
	            if (Object.defineProperty)
	                Object.defineProperty(enm, '$options', {
	                    "value": this.buildOpt(),
	                    "enumerable": false
	                });
	            return this.object = enm;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Enum
	         * @expose
	         */
	        Reflect.Enum = Enum;

	        /**
	         * Constructs a new Enum Value.
	         * @exports ProtoBuf.Reflect.Enum.Value
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Enum} enm Enum reference
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Value = function(builder, enm, name, id) {
	            T.call(this, builder, enm, name);

	            /**
	             * @override
	             */
	            this.className = "Enum.Value";

	            /**
	             * Unique enum value id.
	             * @type {number}
	             * @expose
	             */
	            this.id = id;
	        };

	        // Extends T
	        Value.prototype = Object.create(T.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Enum.Value
	         * @expose
	         */
	        Reflect.Enum.Value = Value;

	        /**
	         * An extension (field).
	         * @exports ProtoBuf.Reflect.Extension
	         * @constructor
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.T} parent Parent object
	         * @param {string} name Object name
	         * @param {!ProtoBuf.Reflect.Message.Field} field Extension field
	         */
	        var Extension = function(builder, parent, name, field) {
	            T.call(this, builder, parent, name);

	            /**
	             * Extended message field.
	             * @type {!ProtoBuf.Reflect.Message.Field}
	             * @expose
	             */
	            this.field = field;
	        };

	        // Extends T
	        Extension.prototype = Object.create(T.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Extension
	         * @expose
	         */
	        Reflect.Extension = Extension;

	        /**
	         * Constructs a new Service.
	         * @exports ProtoBuf.Reflect.Service
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Namespace} root Root
	         * @param {string} name Service name
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Service = function(builder, root, name, options) {
	            Namespace.call(this, builder, root, name, options);

	            /**
	             * @override
	             */
	            this.className = "Service";

	            /**
	             * Built runtime service class.
	             * @type {?function(new:ProtoBuf.Builder.Service)}
	             */
	            this.clazz = null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service.prototype
	         * @inner
	         */
	        var ServicePrototype = Service.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds the service and returns the runtime counterpart, which is a fully functional class.
	         * @see ProtoBuf.Builder.Service
	         * @param {boolean=} rebuild Whether to rebuild or not
	         * @return {Function} Service class
	         * @throws {Error} If the message cannot be built
	         * @expose
	         */
	        ServicePrototype.build = function(rebuild) {
	            if (this.clazz && !rebuild)
	                return this.clazz;

	            // Create the runtime Service class in its own scope
	            return this.clazz = (function(ProtoBuf, T) {

	                /**
	                 * Constructs a new runtime Service.
	                 * @name ProtoBuf.Builder.Service
	                 * @param {function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))=} rpcImpl RPC implementation receiving the method name and the message
	                 * @class Barebone of all runtime services.
	                 * @constructor
	                 * @throws {Error} If the service cannot be created
	                 */
	                var Service = function(rpcImpl) {
	                    ProtoBuf.Builder.Service.call(this);

	                    /**
	                     * Service implementation.
	                     * @name ProtoBuf.Builder.Service#rpcImpl
	                     * @type {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))}
	                     * @expose
	                     */
	                    this.rpcImpl = rpcImpl || function(name, msg, callback) {
	                        // This is what a user has to implement: A function receiving the method name, the actual message to
	                        // send (type checked) and the callback that's either provided with the error as its first
	                        // argument or null and the actual response message.
	                        setTimeout(callback.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0); // Must be async!
	                    };
	                };

	                /**
	                 * @alias ProtoBuf.Builder.Service.prototype
	                 * @inner
	                 */
	                var ServicePrototype = Service.prototype = Object.create(ProtoBuf.Builder.Service.prototype);

	                /**
	                 * Asynchronously performs an RPC call using the given RPC implementation.
	                 * @name ProtoBuf.Builder.Service.[Method]
	                 * @function
	                 * @param {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))} rpcImpl RPC implementation
	                 * @param {ProtoBuf.Builder.Message} req Request
	                 * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
	                 *  the error if any and the response either as a pre-parsed message or as its raw bytes
	                 * @abstract
	                 */

	                /**
	                 * Asynchronously performs an RPC call using the instance's RPC implementation.
	                 * @name ProtoBuf.Builder.Service#[Method]
	                 * @function
	                 * @param {ProtoBuf.Builder.Message} req Request
	                 * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
	                 *  the error if any and the response either as a pre-parsed message or as its raw bytes
	                 * @abstract
	                 */

	                var rpc = T.getChildren(ProtoBuf.Reflect.Service.RPCMethod);
	                for (var i=0; i<rpc.length; i++) {
	                    (function(method) {

	                        // service#Method(message, callback)
	                        ServicePrototype[method.name] = function(req, callback) {
	                            try {
	                                try {
	                                    // If given as a buffer, decode the request. Will throw a TypeError if not a valid buffer.
	                                    req = method.resolvedRequestType.clazz.decode(ByteBuffer.wrap(req));
	                                } catch (err) {
	                                    if (!(err instanceof TypeError))
	                                        throw err;
	                                }
	                                if (req === null || typeof req !== 'object')
	                                    throw Error("Illegal arguments");
	                                if (!(req instanceof method.resolvedRequestType.clazz))
	                                    req = new method.resolvedRequestType.clazz(req);
	                                this.rpcImpl(method.fqn(), req, function(err, res) { // Assumes that this is properly async
	                                    if (err) {
	                                        callback(err);
	                                        return;
	                                    }
	                                    try { res = method.resolvedResponseType.clazz.decode(res); } catch (notABuffer) {}
	                                    if (!res || !(res instanceof method.resolvedResponseType.clazz)) {
	                                        callback(Error("Illegal response type received in service method "+ T.name+"#"+method.name));
	                                        return;
	                                    }
	                                    callback(null, res);
	                                });
	                            } catch (err) {
	                                setTimeout(callback.bind(this, err), 0);
	                            }
	                        };

	                        // Service.Method(rpcImpl, message, callback)
	                        Service[method.name] = function(rpcImpl, req, callback) {
	                            new Service(rpcImpl)[method.name](req, callback);
	                        };

	                        if (Object.defineProperty)
	                            Object.defineProperty(Service[method.name], "$options", { "value": method.buildOpt() }),
	                            Object.defineProperty(ServicePrototype[method.name], "$options", { "value": Service[method.name]["$options"] });
	                    })(rpc[i]);
	                }

	                // Properties

	                /**
	                 * Service options.
	                 * @name ProtoBuf.Builder.Service.$options
	                 * @type {Object.<string,*>}
	                 * @expose
	                 */
	                var $optionsS; // cc needs this

	                /**
	                 * Service options.
	                 * @name ProtoBuf.Builder.Service#$options
	                 * @type {Object.<string,*>}
	                 * @expose
	                 */
	                var $options;

	                /**
	                 * Reflection type.
	                 * @name ProtoBuf.Builder.Service.$type
	                 * @type {!ProtoBuf.Reflect.Service}
	                 * @expose
	                 */
	                var $typeS;

	                /**
	                 * Reflection type.
	                 * @name ProtoBuf.Builder.Service#$type
	                 * @type {!ProtoBuf.Reflect.Service}
	                 * @expose
	                 */
	                var $type;

	                if (Object.defineProperty)
	                    Object.defineProperty(Service, "$options", { "value": T.buildOpt() }),
	                    Object.defineProperty(ServicePrototype, "$options", { "value": Service["$options"] }),
	                    Object.defineProperty(Service, "$type", { "value": T }),
	                    Object.defineProperty(ServicePrototype, "$type", { "value": T });

	                return Service;

	            })(ProtoBuf, this);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service
	         * @expose
	         */
	        Reflect.Service = Service;

	        /**
	         * Abstract service method.
	         * @exports ProtoBuf.Reflect.Service.Method
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Service} svc Service
	         * @param {string} name Method name
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Method = function(builder, svc, name, options) {
	            T.call(this, builder, svc, name);

	            /**
	             * @override
	             */
	            this.className = "Service.Method";

	            /**
	             * Options.
	             * @type {Object.<string, *>}
	             * @expose
	             */
	            this.options = options || {};
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service.Method.prototype
	         * @inner
	         */
	        var MethodPrototype = Method.prototype = Object.create(T.prototype);

	        /**
	         * Builds the method's '$options' property.
	         * @name ProtoBuf.Reflect.Service.Method#buildOpt
	         * @function
	         * @return {Object.<string,*>}
	         */
	        MethodPrototype.buildOpt = NamespacePrototype.buildOpt;

	        /**
	         * @alias ProtoBuf.Reflect.Service.Method
	         * @expose
	         */
	        Reflect.Service.Method = Method;

	        /**
	         * RPC service method.
	         * @exports ProtoBuf.Reflect.Service.RPCMethod
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Service} svc Service
	         * @param {string} name Method name
	         * @param {string} request Request message name
	         * @param {string} response Response message name
	         * @param {boolean} request_stream Whether requests are streamed
	         * @param {boolean} response_stream Whether responses are streamed
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Service.Method
	         */
	        var RPCMethod = function(builder, svc, name, request, response, request_stream, response_stream, options) {
	            Method.call(this, builder, svc, name, options);

	            /**
	             * @override
	             */
	            this.className = "Service.RPCMethod";

	            /**
	             * Request message name.
	             * @type {string}
	             * @expose
	             */
	            this.requestName = request;

	            /**
	             * Response message name.
	             * @type {string}
	             * @expose
	             */
	            this.responseName = response;

	            /**
	             * Whether requests are streamed
	             * @type {bool}
	             * @expose
	             */
	            this.requestStream = request_stream;

	            /**
	             * Whether responses are streamed
	             * @type {bool}
	             * @expose
	             */
	            this.responseStream = response_stream;

	            /**
	             * Resolved request message type.
	             * @type {ProtoBuf.Reflect.Message}
	             * @expose
	             */
	            this.resolvedRequestType = null;

	            /**
	             * Resolved response message type.
	             * @type {ProtoBuf.Reflect.Message}
	             * @expose
	             */
	            this.resolvedResponseType = null;
	        };

	        // Extends Method
	        RPCMethod.prototype = Object.create(Method.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Service.RPCMethod
	         * @expose
	         */
	        Reflect.Service.RPCMethod = RPCMethod;

	        return Reflect;

	    })(ProtoBuf);

	    /**
	     * @alias ProtoBuf.Builder
	     * @expose
	     */
	    ProtoBuf.Builder = (function(ProtoBuf, Lang, Reflect) {
	        "use strict";

	        /**
	         * Constructs a new Builder.
	         * @exports ProtoBuf.Builder
	         * @class Provides the functionality to build protocol messages.
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         */
	        var Builder = function(options) {

	            /**
	             * Namespace.
	             * @type {ProtoBuf.Reflect.Namespace}
	             * @expose
	             */
	            this.ns = new Reflect.Namespace(this, null, ""); // Global namespace

	            /**
	             * Namespace pointer.
	             * @type {ProtoBuf.Reflect.T}
	             * @expose
	             */
	            this.ptr = this.ns;

	            /**
	             * Resolved flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.resolved = false;

	            /**
	             * The current building result.
	             * @type {Object.<string,ProtoBuf.Builder.Message|Object>|null}
	             * @expose
	             */
	            this.result = null;

	            /**
	             * Imported files.
	             * @type {Array.<string>}
	             * @expose
	             */
	            this.files = {};

	            /**
	             * Import root override.
	             * @type {?string}
	             * @expose
	             */
	            this.importRoot = null;

	            /**
	             * Options.
	             * @type {!Object.<string, *>}
	             * @expose
	             */
	            this.options = options || {};
	        };

	        /**
	         * @alias ProtoBuf.Builder.prototype
	         * @inner
	         */
	        var BuilderPrototype = Builder.prototype;

	        // ----- Definition tests -----

	        /**
	         * Tests if a definition most likely describes a message.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isMessage = function(def) {
	            // Messages require a string name
	            if (typeof def["name"] !== 'string')
	                return false;
	            // Messages do not contain values (enum) or rpc methods (service)
	            if (typeof def["values"] !== 'undefined' || typeof def["rpc"] !== 'undefined')
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes a message field.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isMessageField = function(def) {
	            // Message fields require a string rule, name and type and an id
	            if (typeof def["rule"] !== 'string' || typeof def["name"] !== 'string' || typeof def["type"] !== 'string' || typeof def["id"] === 'undefined')
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes an enum.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isEnum = function(def) {
	            // Enums require a string name
	            if (typeof def["name"] !== 'string')
	                return false;
	            // Enums require at least one value
	            if (typeof def["values"] === 'undefined' || !Array.isArray(def["values"]) || def["values"].length === 0)
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes a service.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isService = function(def) {
	            // Services require a string name and an rpc object
	            if (typeof def["name"] !== 'string' || typeof def["rpc"] !== 'object' || !def["rpc"])
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes an extended message
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isExtend = function(def) {
	            // Extends rquire a string ref
	            if (typeof def["ref"] !== 'string')
	                return false;
	            return true;
	        };

	        // ----- Building -----

	        /**
	         * Resets the pointer to the root namespace.
	         * @returns {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.reset = function() {
	            this.ptr = this.ns;
	            return this;
	        };

	        /**
	         * Defines a namespace on top of the current pointer position and places the pointer on it.
	         * @param {string} namespace
	         * @return {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.define = function(namespace) {
	            if (typeof namespace !== 'string' || !Lang.TYPEREF.test(namespace))
	                throw Error("illegal namespace: "+namespace);
	            namespace.split(".").forEach(function(part) {
	                var ns = this.ptr.getChild(part);
	                if (ns === null) // Keep existing
	                    this.ptr.addChild(ns = new Reflect.Namespace(this, this.ptr, part));
	                this.ptr = ns;
	            }, this);
	            return this;
	        };

	        /**
	         * Creates the specified definitions at the current pointer position.
	         * @param {!Array.<!Object>} defs Messages, enums or services to create
	         * @returns {!ProtoBuf.Builder} this
	         * @throws {Error} If a message definition is invalid
	         * @expose
	         */
	        BuilderPrototype.create = function(defs) {
	            if (!defs)
	                return this; // Nothing to create
	            if (!Array.isArray(defs))
	                defs = [defs];
	            else {
	                if (defs.length === 0)
	                    return this;
	                defs = defs.slice();
	            }

	            // It's quite hard to keep track of scopes and memory here, so let's do this iteratively.
	            var stack = [defs];
	            while (stack.length > 0) {
	                defs = stack.pop();

	                if (!Array.isArray(defs)) // Stack always contains entire namespaces
	                    throw Error("not a valid namespace: "+JSON.stringify(defs));

	                while (defs.length > 0) {
	                    var def = defs.shift(); // Namespaces always contain an array of messages, enums and services

	                    if (Builder.isMessage(def)) {
	                        var obj = new Reflect.Message(this, this.ptr, def["name"], def["options"], def["isGroup"], def["syntax"]);

	                        // Create OneOfs
	                        var oneofs = {};
	                        if (def["oneofs"])
	                            Object.keys(def["oneofs"]).forEach(function(name) {
	                                obj.addChild(oneofs[name] = new Reflect.Message.OneOf(this, obj, name));
	                            }, this);

	                        // Create fields
	                        if (def["fields"])
	                            def["fields"].forEach(function(fld) {
	                                if (obj.getChild(fld["id"]|0) !== null)
	                                    throw Error("duplicate or invalid field id in "+obj.name+": "+fld['id']);
	                                if (fld["options"] && typeof fld["options"] !== 'object')
	                                    throw Error("illegal field options in "+obj.name+"#"+fld["name"]);
	                                var oneof = null;
	                                if (typeof fld["oneof"] === 'string' && !(oneof = oneofs[fld["oneof"]]))
	                                    throw Error("illegal oneof in "+obj.name+"#"+fld["name"]+": "+fld["oneof"]);
	                                fld = new Reflect.Message.Field(this, obj, fld["rule"], fld["keytype"], fld["type"], fld["name"], fld["id"], fld["options"], oneof, def["syntax"]);
	                                if (oneof)
	                                    oneof.fields.push(fld);
	                                obj.addChild(fld);
	                            }, this);

	                        // Push children to stack
	                        var subObj = [];
	                        if (def["enums"])
	                            def["enums"].forEach(function(enm) {
	                                subObj.push(enm);
	                            });
	                        if (def["messages"])
	                            def["messages"].forEach(function(msg) {
	                                subObj.push(msg);
	                            });
	                        if (def["services"])
	                            def["services"].forEach(function(svc) {
	                                subObj.push(svc);
	                            });

	                        // Set extension range
	                        if (def["extensions"]) {
	                            obj.extensions = def["extensions"];
	                            if (obj.extensions[0] < ProtoBuf.ID_MIN)
	                                obj.extensions[0] = ProtoBuf.ID_MIN;
	                            if (obj.extensions[1] > ProtoBuf.ID_MAX)
	                                obj.extensions[1] = ProtoBuf.ID_MAX;
	                        }

	                        // Create on top of current namespace
	                        this.ptr.addChild(obj);
	                        if (subObj.length > 0) {
	                            stack.push(defs); // Push the current level back
	                            defs = subObj; // Continue processing sub level
	                            subObj = null;
	                            this.ptr = obj; // And move the pointer to this namespace
	                            obj = null;
	                            continue;
	                        }
	                        subObj = null;

	                    } else if (Builder.isEnum(def)) {

	                        obj = new Reflect.Enum(this, this.ptr, def["name"], def["options"], def["syntax"]);
	                        def["values"].forEach(function(val) {
	                            obj.addChild(new Reflect.Enum.Value(this, obj, val["name"], val["id"]));
	                        }, this);
	                        this.ptr.addChild(obj);

	                    } else if (Builder.isService(def)) {

	                        obj = new Reflect.Service(this, this.ptr, def["name"], def["options"]);
	                        Object.keys(def["rpc"]).forEach(function(name) {
	                            var mtd = def["rpc"][name];
	                            obj.addChild(new Reflect.Service.RPCMethod(this, obj, name, mtd["request"], mtd["response"], !!mtd["request_stream"], !!mtd["response_stream"], mtd["options"]));
	                        }, this);
	                        this.ptr.addChild(obj);

	                    } else if (Builder.isExtend(def)) {

	                        obj = this.ptr.resolve(def["ref"], true);
	                        if (obj) {
	                            def["fields"].forEach(function(fld) {
	                                if (obj.getChild(fld['id']|0) !== null)
	                                    throw Error("duplicate extended field id in "+obj.name+": "+fld['id']);
	                                if (fld['id'] < obj.extensions[0] || fld['id'] > obj.extensions[1])
	                                    throw Error("illegal extended field id in "+obj.name+": "+fld['id']+" ("+obj.extensions.join(' to ')+" expected)");
	                                // Convert extension field names to camel case notation if the override is set
	                                var name = fld["name"];
	                                if (this.options['convertFieldsToCamelCase'])
	                                    name = ProtoBuf.Util.toCamelCase(name);
	                                // see #161: Extensions use their fully qualified name as their runtime key and...
	                                var field = new Reflect.Message.ExtensionField(this, obj, fld["rule"], fld["type"], this.ptr.fqn()+'.'+name, fld["id"], fld["options"]);
	                                // ...are added on top of the current namespace as an extension which is used for
	                                // resolving their type later on (the extension always keeps the original name to
	                                // prevent naming collisions)
	                                var ext = new Reflect.Extension(this, this.ptr, fld["name"], field);
	                                field.extension = ext;
	                                this.ptr.addChild(ext);
	                                obj.addChild(field);
	                            }, this);

	                        } else if (!/\.?google\.protobuf\./.test(def["ref"])) // Silently skip internal extensions
	                            throw Error("extended message "+def["ref"]+" is not defined");

	                    } else
	                        throw Error("not a valid definition: "+JSON.stringify(def));

	                    def = null;
	                    obj = null;
	                }
	                // Break goes here
	                defs = null;
	                this.ptr = this.ptr.parent; // Namespace done, continue at parent
	            }
	            this.resolved = false; // Require re-resolve
	            this.result = null; // Require re-build
	            return this;
	        };

	        /**
	         * Propagates syntax to all children.
	         * @param {!Object} parent
	         * @inner
	         */
	        function propagateSyntax(parent) {
	            if (parent['messages']) {
	                parent['messages'].forEach(function(child) {
	                    child["syntax"] = parent["syntax"];
	                    propagateSyntax(child);
	                });
	            }
	            if (parent['enums']) {
	                parent['enums'].forEach(function(child) {
	                    child["syntax"] = parent["syntax"];
	                });
	            }
	        }

	        /**
	         * Imports another definition into this builder.
	         * @param {Object.<string,*>} json Parsed import
	         * @param {(string|{root: string, file: string})=} filename Imported file name
	         * @returns {!ProtoBuf.Builder} this
	         * @throws {Error} If the definition or file cannot be imported
	         * @expose
	         */
	        BuilderPrototype["import"] = function(json, filename) {
	            var delim = '/';

	            // Make sure to skip duplicate imports

	            if (typeof filename === 'string') {

	                if (ProtoBuf.Util.IS_NODE)
	                    filename = __webpack_require__(15)['resolve'](filename);
	                if (this.files[filename] === true)
	                    return this.reset();
	                this.files[filename] = true;

	            } else if (typeof filename === 'object') { // Object with root, file.

	                var root = filename.root;
	                if (ProtoBuf.Util.IS_NODE)
	                    root = __webpack_require__(15)['resolve'](root);
	                if (root.indexOf("\\") >= 0 || filename.file.indexOf("\\") >= 0)
	                    delim = '\\';
	                var fname = root + delim + filename.file;
	                if (this.files[fname] === true)
	                    return this.reset();
	                this.files[fname] = true;
	            }

	            // Import imports

	            if (json['imports'] && json['imports'].length > 0) {
	                var importRoot,
	                    resetRoot = false;

	                if (typeof filename === 'object') { // If an import root is specified, override

	                    this.importRoot = filename["root"]; resetRoot = true; // ... and reset afterwards
	                    importRoot = this.importRoot;
	                    filename = filename["file"];
	                    if (importRoot.indexOf("\\") >= 0 || filename.indexOf("\\") >= 0)
	                        delim = '\\';

	                } else if (typeof filename === 'string') {

	                    if (this.importRoot) // If import root is overridden, use it
	                        importRoot = this.importRoot;
	                    else { // Otherwise compute from filename
	                        if (filename.indexOf("/") >= 0) { // Unix
	                            importRoot = filename.replace(/\/[^\/]*$/, "");
	                            if (/* /file.proto */ importRoot === "")
	                                importRoot = "/";
	                        } else if (filename.indexOf("\\") >= 0) { // Windows
	                            importRoot = filename.replace(/\\[^\\]*$/, "");
	                            delim = '\\';
	                        } else
	                            importRoot = ".";
	                    }

	                } else
	                    importRoot = null;

	                for (var i=0; i<json['imports'].length; i++) {
	                    if (typeof json['imports'][i] === 'string') { // Import file
	                        if (!importRoot)
	                            throw Error("cannot determine import root");
	                        var importFilename = json['imports'][i];
	                        if (importFilename === "google/protobuf/descriptor.proto")
	                            continue; // Not needed and therefore not used
	                        importFilename = importRoot + delim + importFilename;
	                        if (this.files[importFilename] === true)
	                            continue; // Already imported
	                        if (/\.proto$/i.test(importFilename) && !ProtoBuf.DotProto)       // If this is a light build
	                            importFilename = importFilename.replace(/\.proto$/, ".json"); // always load the JSON file
	                        var contents = ProtoBuf.Util.fetch(importFilename);
	                        if (contents === null)
	                            throw Error("failed to import '"+importFilename+"' in '"+filename+"': file not found");
	                        if (/\.json$/i.test(importFilename)) // Always possible
	                            this["import"](JSON.parse(contents+""), importFilename); // May throw
	                        else
	                            this["import"](ProtoBuf.DotProto.Parser.parse(contents), importFilename); // May throw
	                    } else // Import structure
	                        if (!filename)
	                            this["import"](json['imports'][i]);
	                        else if (/\.(\w+)$/.test(filename)) // With extension: Append _importN to the name portion to make it unique
	                            this["import"](json['imports'][i], filename.replace(/^(.+)\.(\w+)$/, function($0, $1, $2) { return $1+"_import"+i+"."+$2; }));
	                        else // Without extension: Append _importN to make it unique
	                            this["import"](json['imports'][i], filename+"_import"+i);
	                }
	                if (resetRoot) // Reset import root override when all imports are done
	                    this.importRoot = null;
	            }

	            // Import structures

	            if (json['package'])
	                this.define(json['package']);
	            if (json['syntax'])
	                propagateSyntax(json);
	            var base = this.ptr;
	            if (json['options'])
	                Object.keys(json['options']).forEach(function(key) {
	                    base.options[key] = json['options'][key];
	                });
	            if (json['messages'])
	                this.create(json['messages']),
	                this.ptr = base;
	            if (json['enums'])
	                this.create(json['enums']),
	                this.ptr = base;
	            if (json['services'])
	                this.create(json['services']),
	                this.ptr = base;
	            if (json['extends'])
	                this.create(json['extends']);

	            return this.reset();
	        };

	        /**
	         * Resolves all namespace objects.
	         * @throws {Error} If a type cannot be resolved
	         * @returns {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.resolveAll = function() {
	            // Resolve all reflected objects
	            var res;
	            if (this.ptr == null || typeof this.ptr.type === 'object')
	                return this; // Done (already resolved)

	            if (this.ptr instanceof Reflect.Namespace) { // Resolve children

	                this.ptr.children.forEach(function(child) {
	                    this.ptr = child;
	                    this.resolveAll();
	                }, this);

	            } else if (this.ptr instanceof Reflect.Message.Field) { // Resolve type

	                if (!Lang.TYPE.test(this.ptr.type)) {
	                    if (!Lang.TYPEREF.test(this.ptr.type))
	                        throw Error("illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                    res = (this.ptr instanceof Reflect.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, true);
	                    if (!res)
	                        throw Error("unresolvable type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                    this.ptr.resolvedType = res;
	                    if (res instanceof Reflect.Enum) {
	                        this.ptr.type = ProtoBuf.TYPES["enum"];
	                        if (this.ptr.syntax === 'proto3' && res.syntax !== 'proto3')
	                            throw Error("proto3 message cannot reference proto2 enum");
	                    }
	                    else if (res instanceof Reflect.Message)
	                        this.ptr.type = res.isGroup ? ProtoBuf.TYPES["group"] : ProtoBuf.TYPES["message"];
	                    else
	                        throw Error("illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                } else
	                    this.ptr.type = ProtoBuf.TYPES[this.ptr.type];

	                // If it's a map field, also resolve the key type. The key type can be only a numeric, string, or bool type
	                // (i.e., no enums or messages), so we don't need to resolve against the current namespace.
	                if (this.ptr.map) {
	                    if (!Lang.TYPE.test(this.ptr.keyType))
	                        throw Error("illegal key type for map field in "+this.ptr.toString(true)+": "+this.ptr.keyType);
	                    this.ptr.keyType = ProtoBuf.TYPES[this.ptr.keyType];
	                }

	            } else if (this.ptr instanceof ProtoBuf.Reflect.Service.Method) {

	                if (this.ptr instanceof ProtoBuf.Reflect.Service.RPCMethod) {
	                    res = this.ptr.parent.resolve(this.ptr.requestName, true);
	                    if (!res || !(res instanceof ProtoBuf.Reflect.Message))
	                        throw Error("Illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.requestName);
	                    this.ptr.resolvedRequestType = res;
	                    res = this.ptr.parent.resolve(this.ptr.responseName, true);
	                    if (!res || !(res instanceof ProtoBuf.Reflect.Message))
	                        throw Error("Illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.responseName);
	                    this.ptr.resolvedResponseType = res;
	                } else // Should not happen as nothing else is implemented
	                    throw Error("illegal service type in "+this.ptr.toString(true));

	            } else if (
	                !(this.ptr instanceof ProtoBuf.Reflect.Message.OneOf) && // Not built
	                !(this.ptr instanceof ProtoBuf.Reflect.Extension) && // Not built
	                !(this.ptr instanceof ProtoBuf.Reflect.Enum.Value) // Built in enum
	            )
	                throw Error("illegal object in namespace: "+typeof(this.ptr)+": "+this.ptr);

	            return this.reset();
	        };

	        /**
	         * Builds the protocol. This will first try to resolve all definitions and, if this has been successful,
	         * return the built package.
	         * @param {(string|Array.<string>)=} path Specifies what to return. If omitted, the entire namespace will be returned.
	         * @returns {!ProtoBuf.Builder.Message|!Object.<string,*>}
	         * @throws {Error} If a type could not be resolved
	         * @expose
	         */
	        BuilderPrototype.build = function(path) {
	            this.reset();
	            if (!this.resolved)
	                this.resolveAll(),
	                this.resolved = true,
	                this.result = null; // Require re-build
	            if (this.result === null) // (Re-)Build
	                this.result = this.ns.build();
	            if (!path)
	                return this.result;
	            var part = typeof path === 'string' ? path.split(".") : path,
	                ptr = this.result; // Build namespace pointer (no hasChild etc.)
	            for (var i=0; i<part.length; i++)
	                if (ptr[part[i]])
	                    ptr = ptr[part[i]];
	                else {
	                    ptr = null;
	                    break;
	                }
	            return ptr;
	        };

	        /**
	         * Similar to {@link ProtoBuf.Builder#build}, but looks up the internal reflection descriptor.
	         * @param {string=} path Specifies what to return. If omitted, the entire namespace wiil be returned.
	         * @param {boolean=} excludeNonNamespace Excludes non-namespace types like fields, defaults to `false`
	         * @returns {?ProtoBuf.Reflect.T} Reflection descriptor or `null` if not found
	         */
	        BuilderPrototype.lookup = function(path, excludeNonNamespace) {
	            return path ? this.ns.resolve(path, excludeNonNamespace) : this.ns;
	        };

	        /**
	         * Returns a string representation of this object.
	         * @return {string} String representation as of "Builder"
	         * @expose
	         */
	        BuilderPrototype.toString = function() {
	            return "Builder";
	        };

	        // ----- Base classes -----
	        // Exist for the sole purpose of being able to "... instanceof ProtoBuf.Builder.Message" etc.

	        /**
	         * @alias ProtoBuf.Builder.Message
	         */
	        Builder.Message = function() {};

	        /**
	         * @alias ProtoBuf.Builder.Enum
	         */
	        Builder.Enum = function() {};

	        /**
	         * @alias ProtoBuf.Builder.Message
	         */
	        Builder.Service = function() {};

	        return Builder;

	    })(ProtoBuf, ProtoBuf.Lang, ProtoBuf.Reflect);

	    /**
	     * @alias ProtoBuf.Map
	     * @expose
	     */
	    ProtoBuf.Map = (function(ProtoBuf, Reflect) {
	        "use strict";

	        /**
	         * Constructs a new Map. A Map is a container that is used to implement map
	         * fields on message objects. It closely follows the ES6 Map API; however,
	         * it is distinct because we do not want to depend on external polyfills or
	         * on ES6 itself.
	         *
	         * @exports ProtoBuf.Map
	         * @param {!ProtoBuf.Reflect.Field} field Map field
	         * @param {Object.<string,*>=} contents Initial contents
	         * @constructor
	         */
	        var Map = function(field, contents) {
	            if (!field.map)
	                throw Error("field is not a map");

	            /**
	             * The field corresponding to this map.
	             * @type {!ProtoBuf.Reflect.Field}
	             */
	            this.field = field;

	            /**
	             * Element instance corresponding to key type.
	             * @type {!ProtoBuf.Reflect.Element}
	             */
	            this.keyElem = new Reflect.Element(field.keyType, null, true, field.syntax);

	            /**
	             * Element instance corresponding to value type.
	             * @type {!ProtoBuf.Reflect.Element}
	             */
	            this.valueElem = new Reflect.Element(field.type, field.resolvedType, false, field.syntax);

	            /**
	             * Internal map: stores mapping of (string form of key) -> (key, value)
	             * pair.
	             *
	             * We provide map semantics for arbitrary key types, but we build on top
	             * of an Object, which has only string keys. In order to avoid the need
	             * to convert a string key back to its native type in many situations,
	             * we store the native key value alongside the value. Thus, we only need
	             * a one-way mapping from a key type to its string form that guarantees
	             * uniqueness and equality (i.e., str(K1) === str(K2) if and only if K1
	             * === K2).
	             *
	             * @type {!Object<string, {key: *, value: *}>}
	             */
	            this.map = {};

	            /**
	             * Returns the number of elements in the map.
	             */
	            Object.defineProperty(this, "size", {
	                get: function() { return Object.keys(this.map).length; }
	            });

	            // Fill initial contents from a raw object.
	            if (contents) {
	                var keys = Object.keys(contents);
	                for (var i = 0; i < keys.length; i++) {
	                    var key = this.keyElem.valueFromString(keys[i]);
	                    var val = this.valueElem.verifyValue(contents[keys[i]]);
	                    this.map[this.keyElem.valueToString(key)] =
	                        { key: key, value: val };
	                }
	            }
	        };

	        var MapPrototype = Map.prototype;

	        /**
	         * Helper: return an iterator over an array.
	         * @param {!Array<*>} arr the array
	         * @returns {!Object} an iterator
	         * @inner
	         */
	        function arrayIterator(arr) {
	            var idx = 0;
	            return {
	                next: function() {
	                    if (idx < arr.length)
	                        return { done: false, value: arr[idx++] };
	                    return { done: true };
	                }
	            }
	        }

	        /**
	         * Clears the map.
	         */
	        MapPrototype.clear = function() {
	            this.map = {};
	        };

	        /**
	         * Deletes a particular key from the map.
	         * @returns {boolean} Whether any entry with this key was deleted.
	         */
	        MapPrototype["delete"] = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            var hadKey = keyValue in this.map;
	            delete this.map[keyValue];
	            return hadKey;
	        };

	        /**
	         * Returns an iterator over [key, value] pairs in the map.
	         * @returns {Object} The iterator
	         */
	        MapPrototype.entries = function() {
	            var entries = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0, entry; i < strKeys.length; i++)
	                entries.push([(entry=this.map[strKeys[i]]).key, entry.value]);
	            return arrayIterator(entries);
	        };

	        /**
	         * Returns an iterator over keys in the map.
	         * @returns {Object} The iterator
	         */
	        MapPrototype.keys = function() {
	            var keys = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0; i < strKeys.length; i++)
	                keys.push(this.map[strKeys[i]].key);
	            return arrayIterator(keys);
	        };

	        /**
	         * Returns an iterator over values in the map.
	         * @returns {!Object} The iterator
	         */
	        MapPrototype.values = function() {
	            var values = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0; i < strKeys.length; i++)
	                values.push(this.map[strKeys[i]].value);
	            return arrayIterator(values);
	        };

	        /**
	         * Iterates over entries in the map, calling a function on each.
	         * @param {function(this:*, *, *, *)} cb The callback to invoke with value, key, and map arguments.
	         * @param {Object=} thisArg The `this` value for the callback
	         */
	        MapPrototype.forEach = function(cb, thisArg) {
	            var strKeys = Object.keys(this.map);
	            for (var i = 0, entry; i < strKeys.length; i++)
	                cb.call(thisArg, (entry=this.map[strKeys[i]]).value, entry.key, this);
	        };

	        /**
	         * Sets a key in the map to the given value.
	         * @param {*} key The key
	         * @param {*} value The value
	         * @returns {!ProtoBuf.Map} The map instance
	         */
	        MapPrototype.set = function(key, value) {
	            var keyValue = this.keyElem.verifyValue(key);
	            var valValue = this.valueElem.verifyValue(value);
	            this.map[this.keyElem.valueToString(keyValue)] =
	                { key: keyValue, value: valValue };
	            return this;
	        };

	        /**
	         * Gets the value corresponding to a key in the map.
	         * @param {*} key The key
	         * @returns {*|undefined} The value, or `undefined` if key not present
	         */
	        MapPrototype.get = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            if (!(keyValue in this.map))
	                return undefined;
	            return this.map[keyValue].value;
	        };

	        /**
	         * Determines whether the given key is present in the map.
	         * @param {*} key The key
	         * @returns {boolean} `true` if the key is present
	         */
	        MapPrototype.has = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            return (keyValue in this.map);
	        };

	        return Map;
	    })(ProtoBuf, ProtoBuf.Reflect);


	    /**
	     * Loads a .proto string and returns the Builder.
	     * @param {string} proto .proto file contents
	     * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
	     * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
	     * @return {ProtoBuf.Builder} Builder to create new messages
	     * @throws {Error} If the definition cannot be parsed or built
	     * @expose
	     */
	    ProtoBuf.loadProto = function(proto, builder, filename) {
	        if (typeof builder === 'string' || (builder && typeof builder["file"] === 'string' && typeof builder["root"] === 'string'))
	            filename = builder,
	            builder = undefined;
	        return ProtoBuf.loadJson(ProtoBuf.DotProto.Parser.parse(proto), builder, filename);
	    };

	    /**
	     * Loads a .proto string and returns the Builder. This is an alias of {@link ProtoBuf.loadProto}.
	     * @function
	     * @param {string} proto .proto file contents
	     * @param {(ProtoBuf.Builder|string)=} builder Builder to append to. Will create a new one if omitted.
	     * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
	     * @return {ProtoBuf.Builder} Builder to create new messages
	     * @throws {Error} If the definition cannot be parsed or built
	     * @expose
	     */
	    ProtoBuf.protoFromString = ProtoBuf.loadProto; // Legacy

	    /**
	     * Loads a .proto file and returns the Builder.
	     * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
	     *  an overridden 'root' path for all imported files.
	     * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
	     *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
	     *  file will be read synchronously and this function will return the Builder.
	     * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
	     * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
	     *   request has failed), else undefined
	     * @expose
	     */
	    ProtoBuf.loadProtoFile = function(filename, callback, builder) {
	        if (callback && typeof callback === 'object')
	            builder = callback,
	            callback = null;
	        else if (!callback || typeof callback !== 'function')
	            callback = null;
	        if (callback)
	            return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"]+"/"+filename["file"], function(contents) {
	                if (contents === null) {
	                    callback(Error("Failed to fetch file"));
	                    return;
	                }
	                try {
	                    callback(null, ProtoBuf.loadProto(contents, builder, filename));
	                } catch (e) {
	                    callback(e);
	                }
	            });
	        var contents = ProtoBuf.Util.fetch(typeof filename === 'object' ? filename["root"]+"/"+filename["file"] : filename);
	        return contents === null ? null : ProtoBuf.loadProto(contents, builder, filename);
	    };

	    /**
	     * Loads a .proto file and returns the Builder. This is an alias of {@link ProtoBuf.loadProtoFile}.
	     * @function
	     * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
	     *  an overridden 'root' path for all imported files.
	     * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
	     *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
	     *  file will be read synchronously and this function will return the Builder.
	     * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
	     * @return {!ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
	     *   request has failed), else undefined
	     * @expose
	     */
	    ProtoBuf.protoFromFile = ProtoBuf.loadProtoFile; // Legacy


	    /**
	     * Constructs a new empty Builder.
	     * @param {Object.<string,*>=} options Builder options, defaults to global options set on ProtoBuf
	     * @return {!ProtoBuf.Builder} Builder
	     * @expose
	     */
	    ProtoBuf.newBuilder = function(options) {
	        options = options || {};
	        if (typeof options['convertFieldsToCamelCase'] === 'undefined')
	            options['convertFieldsToCamelCase'] = ProtoBuf.convertFieldsToCamelCase;
	        if (typeof options['populateAccessors'] === 'undefined')
	            options['populateAccessors'] = ProtoBuf.populateAccessors;
	        return new ProtoBuf.Builder(options);
	    };

	    /**
	     * Loads a .json definition and returns the Builder.
	     * @param {!*|string} json JSON definition
	     * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
	     * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
	     * @return {ProtoBuf.Builder} Builder to create new messages
	     * @throws {Error} If the definition cannot be parsed or built
	     * @expose
	     */
	    ProtoBuf.loadJson = function(json, builder, filename) {
	        if (typeof builder === 'string' || (builder && typeof builder["file"] === 'string' && typeof builder["root"] === 'string'))
	            filename = builder,
	            builder = null;
	        if (!builder || typeof builder !== 'object')
	            builder = ProtoBuf.newBuilder();
	        if (typeof json === 'string')
	            json = JSON.parse(json);
	        builder["import"](json, filename);
	        builder.resolveAll();
	        return builder;
	    };

	    /**
	     * Loads a .json file and returns the Builder.
	     * @param {string|!{root: string, file: string}} filename Path to json file or an object specifying 'file' with
	     *  an overridden 'root' path for all imported files.
	     * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
	     *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
	     *  file will be read synchronously and this function will return the Builder.
	     * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
	     * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
	     *   request has failed), else undefined
	     * @expose
	     */
	    ProtoBuf.loadJsonFile = function(filename, callback, builder) {
	        if (callback && typeof callback === 'object')
	            builder = callback,
	            callback = null;
	        else if (!callback || typeof callback !== 'function')
	            callback = null;
	        if (callback)
	            return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"]+"/"+filename["file"], function(contents) {
	                if (contents === null) {
	                    callback(Error("Failed to fetch file"));
	                    return;
	                }
	                try {
	                    callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
	                } catch (e) {
	                    callback(e);
	                }
	            });
	        var contents = ProtoBuf.Util.fetch(typeof filename === 'object' ? filename["root"]+"/"+filename["file"] : filename);
	        return contents === null ? null : ProtoBuf.loadJson(JSON.parse(contents), builder, filename);
	    };

	    return ProtoBuf;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(10)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license ByteBuffer.js (c) 2013-2014 Daniel Wirtz <dcode@dcode.io>
	 * This version of ByteBuffer.js uses an ArrayBuffer as its backing buffer which is accessed through a DataView and is
	 * compatible with modern browsers.
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/ByteBuffer.js for details
	 */ //
	(function(global) {
	    "use strict";

	    /**
	     * @param {function(new: Long, number, number, boolean=)=} Long
	     * @returns {function(new: ByteBuffer, number=, boolean=, boolean=)}}
	     * @inner
	     */
	    function loadByteBuffer(Long) {

	        /**
	         * Constructs a new ByteBuffer.
	         * @class The swiss army knife for binary data in JavaScript.
	         * @exports ByteBuffer
	         * @constructor
	         * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @expose
	         */
	        var ByteBuffer = function(capacity, littleEndian, noAssert) {
	            if (typeof capacity     === 'undefined') capacity     = ByteBuffer.DEFAULT_CAPACITY;
	            if (typeof littleEndian === 'undefined') littleEndian = ByteBuffer.DEFAULT_ENDIAN;
	            if (typeof noAssert     === 'undefined') noAssert     = ByteBuffer.DEFAULT_NOASSERT;
	            if (!noAssert) {
	                capacity = capacity | 0;
	                if (capacity < 0)
	                    throw RangeError("Illegal capacity");
	                littleEndian = !!littleEndian;
	                noAssert = !!noAssert;
	            }

	            /**
	             * Backing buffer.
	             * @type {!ArrayBuffer}
	             * @expose
	             */
	            this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);

	            /**
	             * Data view to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
	             * @type {?DataView}
	             * @expose
	             */
	            this.view = capacity === 0 ? null : new DataView(this.buffer);

	            /**
	             * Absolute read/write offset.
	             * @type {number}
	             * @expose
	             * @see ByteBuffer#flip
	             * @see ByteBuffer#clear
	             */
	            this.offset = 0;

	            /**
	             * Marked offset.
	             * @type {number}
	             * @expose
	             * @see ByteBuffer#mark
	             * @see ByteBuffer#reset
	             */
	            this.markedOffset = -1;

	            /**
	             * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
	             * @type {number}
	             * @expose
	             * @see ByteBuffer#flip
	             * @see ByteBuffer#clear
	             */
	            this.limit = capacity;

	            /**
	             * Whether to use little endian byte order, defaults to `false` for big endian.
	             * @type {boolean}
	             * @expose
	             */
	            this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : false;

	            /**
	             * Whether to skip assertions of offsets and values, defaults to `false`.
	             * @type {boolean}
	             * @expose
	             */
	            this.noAssert = !!noAssert;
	        };

	        /**
	         * ByteBuffer version.
	         * @type {string}
	         * @const
	         * @expose
	         */
	        ByteBuffer.VERSION = "3.5.5";

	        /**
	         * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
	         * @type {boolean}
	         * @const
	         * @expose
	         */
	        ByteBuffer.LITTLE_ENDIAN = true;

	        /**
	         * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
	         * @type {boolean}
	         * @const
	         * @expose
	         */
	        ByteBuffer.BIG_ENDIAN = false;

	        /**
	         * Default initial capacity of `16`.
	         * @type {number}
	         * @expose
	         */
	        ByteBuffer.DEFAULT_CAPACITY = 16;

	        /**
	         * Default endianess of `false` for big endian.
	         * @type {boolean}
	         * @expose
	         */
	        ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;

	        /**
	         * Default no assertions flag of `false`.
	         * @type {boolean}
	         * @expose
	         */
	        ByteBuffer.DEFAULT_NOASSERT = false;

	        /**
	         * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
	         *  and int64 support is not available.
	         * @type {?Long}
	         * @const
	         * @see https://github.com/dcodeIO/Long.js
	         * @expose
	         */
	        ByteBuffer.Long = Long || null;

	        /**
	         * @alias ByteBuffer.prototype
	         * @inner
	         */
	        var ByteBufferPrototype = ByteBuffer.prototype;

	        // helpers

	        /**
	         * @type {!ArrayBuffer}
	         * @inner
	         */
	        var EMPTY_BUFFER = new ArrayBuffer(0);

	        /**
	         * String.fromCharCode reference for compile-time renaming.
	         * @type {function(...number):string}
	         * @inner
	         */
	        var stringFromCharCode = String.fromCharCode;

	        /**
	         * Creates a source function for a string.
	         * @param {string} s String to read from
	         * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
	         *  no more characters left.
	         * @throws {TypeError} If the argument is invalid
	         * @inner
	         */
	        function stringSource(s) {
	            var i=0; return function() {
	                return i < s.length ? s.charCodeAt(i++) : null;
	            };
	        }

	        /**
	         * Creates a destination function for a string.
	         * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
	         *  Returns the final string when called without arguments.
	         * @inner
	         */
	        function stringDestination() {
	            var cs = [], ps = []; return function() {
	                if (arguments.length === 0)
	                    return ps.join('')+stringFromCharCode.apply(String, cs);
	                if (cs.length + arguments.length > 1024)
	                    ps.push(stringFromCharCode.apply(String, cs)),
	                        cs.length = 0;
	                Array.prototype.push.apply(cs, arguments);
	            };
	        }

	        /**
	         * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
	         * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer}
	         * @expose
	         */
	        ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
	            return new ByteBuffer(capacity, littleEndian, noAssert);
	        };

	        /**
	         * Concatenates multiple ByteBuffers into one.
	         * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
	         * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
	         *  defaults to "utf8")
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
	         *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} Concatenated ByteBuffer
	         * @expose
	         */
	        ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
	            if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
	                noAssert = littleEndian;
	                littleEndian = encoding;
	                encoding = undefined;
	            }
	            var capacity = 0;
	            for (var i=0, k=buffers.length, length; i<k; ++i) {
	                if (!ByteBuffer.isByteBuffer(buffers[i]))
	                    buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
	                length = buffers[i].limit - buffers[i].offset;
	                if (length > 0) capacity += length;
	            }
	            if (capacity === 0)
	                return new ByteBuffer(0, littleEndian, noAssert);
	            var bb = new ByteBuffer(capacity, littleEndian, noAssert),
	                bi;
	            var view = new Uint8Array(bb.buffer);
	            i=0; while (i<k) {
	                bi = buffers[i++];
	                length = bi.limit - bi.offset;
	                if (length <= 0) continue;
	                view.set(new Uint8Array(bi.buffer).subarray(bi.offset, bi.limit), bb.offset);
	                bb.offset += length;
	            }
	            bb.limit = bb.offset;
	            bb.offset = 0;
	            return bb;
	        };

	        /**
	         * Tests if the specified type is a ByteBuffer.
	         * @param {*} bb ByteBuffer to test
	         * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
	         * @expose
	         */
	        ByteBuffer.isByteBuffer = function(bb) {
	            return (bb && bb instanceof ByteBuffer) === true;
	        };
	        /**
	         * Gets the backing buffer type.
	         * @returns {Function} `Buffer` for NB builds, `ArrayBuffer` for AB builds (classes)
	         * @expose
	         */
	        ByteBuffer.type = function() {
	            return ArrayBuffer;
	        };

	        /**
	         * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
	         *  {@link ByteBuffer#limit} to the length of the wrapped data.
	         * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
	         * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
	         *  "utf8")
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
	         * @expose
	         */
	        ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
	            if (typeof encoding !== 'string') {
	                noAssert = littleEndian;
	                littleEndian = encoding;
	                encoding = undefined;
	            }
	            if (typeof buffer === 'string') {
	                if (typeof encoding === 'undefined')
	                    encoding = "utf8";
	                switch (encoding) {
	                    case "base64":
	                        return ByteBuffer.fromBase64(buffer, littleEndian);
	                    case "hex":
	                        return ByteBuffer.fromHex(buffer, littleEndian);
	                    case "binary":
	                        return ByteBuffer.fromBinary(buffer, littleEndian);
	                    case "utf8":
	                        return ByteBuffer.fromUTF8(buffer, littleEndian);
	                    case "debug":
	                        return ByteBuffer.fromDebug(buffer, littleEndian);
	                    default:
	                        throw Error("Unsupported encoding: "+encoding);
	                }
	            }
	            if (buffer === null || typeof buffer !== 'object')
	                throw TypeError("Illegal buffer");
	            var bb;
	            if (ByteBuffer.isByteBuffer(buffer)) {
	                bb = ByteBufferPrototype.clone.call(buffer);
	                bb.markedOffset = -1;
	                return bb;
	            }
	            if (buffer instanceof Uint8Array) { // Extract ArrayBuffer from Uint8Array
	                bb = new ByteBuffer(0, littleEndian, noAssert);
	                if (buffer.length > 0) { // Avoid references to more than one EMPTY_BUFFER
	                    bb.buffer = buffer.buffer;
	                    bb.offset = buffer.byteOffset;
	                    bb.limit = buffer.byteOffset + buffer.length;
	                    bb.view = buffer.length > 0 ? new DataView(buffer.buffer) : null;
	                }
	            } else if (buffer instanceof ArrayBuffer) { // Reuse ArrayBuffer
	                bb = new ByteBuffer(0, littleEndian, noAssert);
	                if (buffer.byteLength > 0) {
	                    bb.buffer = buffer;
	                    bb.offset = 0;
	                    bb.limit = buffer.byteLength;
	                    bb.view = buffer.byteLength > 0 ? new DataView(buffer) : null;
	                }
	            } else if (Object.prototype.toString.call(buffer) === "[object Array]") { // Create from octets
	                bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
	                bb.limit = buffer.length;
	                for (i=0; i<buffer.length; ++i)
	                    bb.view.setUint8(i, buffer[i]);
	            } else
	                throw TypeError("Illegal buffer"); // Otherwise fail
	            return bb;
	        };

	        // types/ints/int8

	        /**
	         * Writes an 8bit signed integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeInt8 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value |= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 1;
	            var capacity0 = this.buffer.byteLength;
	            if (offset > capacity0)
	                this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
	            offset -= 1;
	            this.view.setInt8(offset, value);
	            if (relative) this.offset += 1;
	            return this;
	        };

	        /**
	         * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
	         * @function
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;

	        /**
	         * Reads an 8bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readInt8 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getInt8(offset);
	            if (relative) this.offset += 1;
	            return value;
	        };

	        /**
	         * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;

	        /**
	         * Writes an 8bit unsigned integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUint8 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value >>>= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 1;
	            var capacity1 = this.buffer.byteLength;
	            if (offset > capacity1)
	                this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
	            offset -= 1;
	            this.view.setUint8(offset, value);
	            if (relative) this.offset += 1;
	            return this;
	        };

	        /**
	         * Reads an 8bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readUint8 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getUint8(offset);
	            if (relative) this.offset += 1;
	            return value;
	        };

	        // types/ints/int16

	        /**
	         * Writes a 16bit signed integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @throws {TypeError} If `offset` or `value` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.writeInt16 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value |= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 2;
	            var capacity2 = this.buffer.byteLength;
	            if (offset > capacity2)
	                this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
	            offset -= 2;
	            this.view.setInt16(offset, value, this.littleEndian);
	            if (relative) this.offset += 2;
	            return this;
	        };

	        /**
	         * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
	         * @function
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @throws {TypeError} If `offset` or `value` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;

	        /**
	         * Reads a 16bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @returns {number} Value read
	         * @throws {TypeError} If `offset` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.readInt16 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getInt16(offset, this.littleEndian);
	            if (relative) this.offset += 2;
	            return value;
	        };

	        /**
	         * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @returns {number} Value read
	         * @throws {TypeError} If `offset` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;

	        /**
	         * Writes a 16bit unsigned integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @throws {TypeError} If `offset` or `value` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.writeUint16 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value >>>= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 2;
	            var capacity3 = this.buffer.byteLength;
	            if (offset > capacity3)
	                this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
	            offset -= 2;
	            this.view.setUint16(offset, value, this.littleEndian);
	            if (relative) this.offset += 2;
	            return this;
	        };

	        /**
	         * Reads a 16bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	         * @returns {number} Value read
	         * @throws {TypeError} If `offset` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @expose
	         */
	        ByteBufferPrototype.readUint16 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getUint16(offset, this.littleEndian);
	            if (relative) this.offset += 2;
	            return value;
	        };

	        // types/ints/int32

	        /**
	         * Writes a 32bit signed integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @expose
	         */
	        ByteBufferPrototype.writeInt32 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value |= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 4;
	            var capacity4 = this.buffer.byteLength;
	            if (offset > capacity4)
	                this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
	            offset -= 4;
	            this.view.setInt32(offset, value, this.littleEndian);
	            if (relative) this.offset += 4;
	            return this;
	        };

	        /**
	         * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @expose
	         */
	        ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;

	        /**
	         * Reads a 32bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readInt32 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getInt32(offset, this.littleEndian);
	            if (relative) this.offset += 4;
	            return value;
	        };

	        /**
	         * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
	         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;

	        /**
	         * Writes a 32bit unsigned integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @expose
	         */
	        ByteBufferPrototype.writeUint32 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value >>>= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 4;
	            var capacity5 = this.buffer.byteLength;
	            if (offset > capacity5)
	                this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
	            offset -= 4;
	            this.view.setUint32(offset, value, this.littleEndian);
	            if (relative) this.offset += 4;
	            return this;
	        };

	        /**
	         * Reads a 32bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {number} Value read
	         * @expose
	         */
	        ByteBufferPrototype.readUint32 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getUint32(offset, this.littleEndian);
	            if (relative) this.offset += 4;
	            return value;
	        };

	        // types/ints/int64

	        if (Long) {

	            /**
	             * Writes a 64bit signed integer.
	             * @param {number|!Long} value Value to write
	             * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!ByteBuffer} this
	             * @expose
	             */
	            ByteBufferPrototype.writeInt64 = function(value, offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof value === 'number')
	                        value = Long.fromNumber(value);
	                    else if (typeof value === 'string')
	                        value = Long.fromString(value);
	                    else if (!(value && value instanceof Long))
	                        throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	                }
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                offset += 8;
	                var capacity6 = this.buffer.byteLength;
	                if (offset > capacity6)
	                    this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
	                offset -= 8;
	                if (this.littleEndian) {
	                    this.view.setInt32(offset  , value.low , true);
	                    this.view.setInt32(offset+4, value.high, true);
	                } else {
	                    this.view.setInt32(offset  , value.high, false);
	                    this.view.setInt32(offset+4, value.low , false);
	                }
	                if (relative) this.offset += 8;
	                return this;
	            };

	            /**
	             * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
	             * @param {number|!Long} value Value to write
	             * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!ByteBuffer} this
	             * @expose
	             */
	            ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;

	            /**
	             * Reads a 64bit signed integer.
	             * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!Long}
	             * @expose
	             */
	            ByteBufferPrototype.readInt64 = function(offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	                }
	                var value = this.littleEndian
	                    ? new Long(this.view.getInt32(offset  , true ), this.view.getInt32(offset+4, true ), false)
	                    : new Long(this.view.getInt32(offset+4, false), this.view.getInt32(offset  , false), false);
	                if (relative) this.offset += 8;
	                return value;
	            };

	            /**
	             * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
	             * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!Long}
	             * @expose
	             */
	            ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;

	            /**
	             * Writes a 64bit unsigned integer.
	             * @param {number|!Long} value Value to write
	             * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!ByteBuffer} this
	             * @expose
	             */
	            ByteBufferPrototype.writeUint64 = function(value, offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof value === 'number')
	                        value = Long.fromNumber(value);
	                    else if (typeof value === 'string')
	                        value = Long.fromString(value);
	                    else if (!(value && value instanceof Long))
	                        throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	                }
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                offset += 8;
	                var capacity7 = this.buffer.byteLength;
	                if (offset > capacity7)
	                    this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
	                offset -= 8;
	                if (this.littleEndian) {
	                    this.view.setInt32(offset  , value.low , true);
	                    this.view.setInt32(offset+4, value.high, true);
	                } else {
	                    this.view.setInt32(offset  , value.high, false);
	                    this.view.setInt32(offset+4, value.low , false);
	                }
	                if (relative) this.offset += 8;
	                return this;
	            };

	            /**
	             * Reads a 64bit unsigned integer.
	             * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	             * @returns {!Long}
	             * @expose
	             */
	            ByteBufferPrototype.readUint64 = function(offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	                }
	                var value = this.littleEndian
	                    ? new Long(this.view.getInt32(offset  , true ), this.view.getInt32(offset+4, true ), true)
	                    : new Long(this.view.getInt32(offset+4, false), this.view.getInt32(offset  , false), true);
	                if (relative) this.offset += 8;
	                return value;
	            };

	        } // Long


	        // types/floats/float32

	        /**
	         * Writes a 32bit float.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeFloat32 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number')
	                    throw TypeError("Illegal value: "+value+" (not a number)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 4;
	            var capacity8 = this.buffer.byteLength;
	            if (offset > capacity8)
	                this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
	            offset -= 4;
	            this.view.setFloat32(offset, value, this.littleEndian);
	            if (relative) this.offset += 4;
	            return this;
	        };

	        /**
	         * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
	         * @function
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;

	        /**
	         * Reads a 32bit float.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {number}
	         * @expose
	         */
	        ByteBufferPrototype.readFloat32 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getFloat32(offset, this.littleEndian);
	            if (relative) this.offset += 4;
	            return value;
	        };

	        /**
	         * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	         * @returns {number}
	         * @expose
	         */
	        ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;

	        // types/floats/float64

	        /**
	         * Writes a 64bit float.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeFloat64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number')
	                    throw TypeError("Illegal value: "+value+" (not a number)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            offset += 8;
	            var capacity9 = this.buffer.byteLength;
	            if (offset > capacity9)
	                this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
	            offset -= 8;
	            this.view.setFloat64(offset, value, this.littleEndian);
	            if (relative) this.offset += 8;
	            return this;
	        };

	        /**
	         * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
	         * @function
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;

	        /**
	         * Reads a 64bit float.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {number}
	         * @expose
	         */
	        ByteBufferPrototype.readFloat64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var value = this.view.getFloat64(offset, this.littleEndian);
	            if (relative) this.offset += 8;
	            return value;
	        };

	        /**
	         * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {number}
	         * @expose
	         */
	        ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;


	        // types/varints/varint32

	        /**
	         * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
	         * @type {number}
	         * @const
	         * @expose
	         */
	        ByteBuffer.MAX_VARINT32_BYTES = 5;

	        /**
	         * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
	         * @param {number} value Value to encode
	         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
	         * @expose
	         */
	        ByteBuffer.calculateVarint32 = function(value) {
	            // ref: src/google/protobuf/io/coded_stream.cc
	            value = value >>> 0;
	                 if (value < 1 << 7 ) return 1;
	            else if (value < 1 << 14) return 2;
	            else if (value < 1 << 21) return 3;
	            else if (value < 1 << 28) return 4;
	            else                      return 5;
	        };

	        /**
	         * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
	         * @param {number} n Signed 32bit integer
	         * @returns {number} Unsigned zigzag encoded 32bit integer
	         * @expose
	         */
	        ByteBuffer.zigZagEncode32 = function(n) {
	            return (((n |= 0) << 1) ^ (n >> 31)) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
	        };

	        /**
	         * Decodes a zigzag encoded signed 32bit integer.
	         * @param {number} n Unsigned zigzag encoded 32bit integer
	         * @returns {number} Signed 32bit integer
	         * @expose
	         */
	        ByteBuffer.zigZagDecode32 = function(n) {
	            return ((n >>> 1) ^ -(n & 1)) | 0; // // ref: src/google/protobuf/wire_format_lite.h
	        };

	        /**
	         * Writes a 32bit base 128 variable-length integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint32 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value |= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            var size = ByteBuffer.calculateVarint32(value),
	                b;
	            offset += size;
	            var capacity10 = this.buffer.byteLength;
	            if (offset > capacity10)
	                this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
	            offset -= size;
	            // ref: http://code.google.com/searchframe#WTeibokF6gE/trunk/src/google/protobuf/io/coded_stream.cc
	            this.view.setUint8(offset, b = value | 0x80);
	            value >>>= 0;
	            if (value >= 1 << 7) {
	                b = (value >> 7) | 0x80;
	                this.view.setUint8(offset+1, b);
	                if (value >= 1 << 14) {
	                    b = (value >> 14) | 0x80;
	                    this.view.setUint8(offset+2, b);
	                    if (value >= 1 << 21) {
	                        b = (value >> 21) | 0x80;
	                        this.view.setUint8(offset+3, b);
	                        if (value >= 1 << 28) {
	                            this.view.setUint8(offset+4, (value >> 28) & 0x0F);
	                            size = 5;
	                        } else {
	                            this.view.setUint8(offset+3, b & 0x7F);
	                            size = 4;
	                        }
	                    } else {
	                        this.view.setUint8(offset+2, b & 0x7F);
	                        size = 3;
	                    }
	                } else {
	                    this.view.setUint8(offset+1, b & 0x7F);
	                    size = 2;
	                }
	            } else {
	                this.view.setUint8(offset, b & 0x7F);
	                size = 1;
	            }
	            if (relative) {
	                this.offset += size;
	                return this;
	            }
	            return size;
	        };

	        /**
	         * Writes a zig-zag encoded 32bit base 128 variable-length integer.
	         * @param {number} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
	            return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
	        };

	        /**
	         * Reads a 32bit base 128 variable-length integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	         *  and the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
	         *  to fully decode the varint.
	         * @expose
	         */
	        ByteBufferPrototype.readVarint32 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var size = 0,
	                value = 0 >>> 0,
	                temp,
	                ioffset;
	            do {
	                ioffset = offset+size;
	                if (!this.noAssert && ioffset > this.limit) {
	                    var err = Error("Truncated");
	                    err['truncated'] = true;
	                    throw err;
	                }
	                temp = this.view.getUint8(ioffset);
	                if (size < 5)
	                    value |= ((temp&0x7F)<<(7*size)) >>> 0;
	                ++size;
	            } while ((temp & 0x80) === 0x80);
	            value = value | 0; // Make sure to discard the higher order bits
	            if (relative) {
	                this.offset += size;
	                return value;
	            }
	            return {
	                "value": value,
	                "length": size
	            };
	        };

	        /**
	         * Reads a zig-zag encoded 32bit base 128 variable-length integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	         *  and the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint32ZigZag = function(offset) {
	            var val = this.readVarint32(offset);
	            if (typeof val === 'object')
	                val["value"] = ByteBuffer.zigZagDecode32(val["value"]);
	            else
	                val = ByteBuffer.zigZagDecode32(val);
	            return val;
	        };

	        // types/varints/varint64

	        if (Long) {

	            /**
	             * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
	             * @type {number}
	             * @const
	             * @expose
	             */
	            ByteBuffer.MAX_VARINT64_BYTES = 10;

	            /**
	             * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
	             * @param {number|!Long} value Value to encode
	             * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
	             * @expose
	             */
	            ByteBuffer.calculateVarint64 = function(value) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                // ref: src/google/protobuf/io/coded_stream.cc
	                var part0 = value.toInt() >>> 0,
	                    part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                    part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	                if (part2 == 0) {
	                    if (part1 == 0) {
	                        if (part0 < 1 << 14)
	                            return part0 < 1 << 7 ? 1 : 2;
	                        else
	                            return part0 < 1 << 21 ? 3 : 4;
	                    } else {
	                        if (part1 < 1 << 14)
	                            return part1 < 1 << 7 ? 5 : 6;
	                        else
	                            return part1 < 1 << 21 ? 7 : 8;
	                    }
	                } else
	                    return part2 < 1 << 7 ? 9 : 10;
	            };

	            /**
	             * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
	             * @param {number|!Long} value Signed long
	             * @returns {!Long} Unsigned zigzag encoded long
	             * @expose
	             */
	            ByteBuffer.zigZagEncode64 = function(value) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value, false);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value, false);
	                else if (value.unsigned !== false) value = value.toSigned();
	                // ref: src/google/protobuf/wire_format_lite.h
	                return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	            };

	            /**
	             * Decodes a zigzag encoded signed 64bit integer.
	             * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
	             * @returns {!Long} Signed long
	             * @expose
	             */
	            ByteBuffer.zigZagDecode64 = function(value) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value, false);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value, false);
	                else if (value.unsigned !== false) value = value.toSigned();
	                // ref: src/google/protobuf/wire_format_lite.h
	                return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	            };

	            /**
	             * Writes a 64bit base 128 variable-length integer.
	             * @param {number|Long} value Value to write
	             * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	             *  written if omitted.
	             * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	             * @expose
	             */
	            ByteBufferPrototype.writeVarint64 = function(value, offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof value === 'number')
	                        value = Long.fromNumber(value);
	                    else if (typeof value === 'string')
	                        value = Long.fromString(value);
	                    else if (!(value && value instanceof Long))
	                        throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	                }
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value, false);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value, false);
	                else if (value.unsigned !== false) value = value.toSigned();
	                var size = ByteBuffer.calculateVarint64(value),
	                    part0 = value.toInt() >>> 0,
	                    part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                    part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	                offset += size;
	                var capacity11 = this.buffer.byteLength;
	                if (offset > capacity11)
	                    this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
	                offset -= size;
	                switch (size) {
	                    case 10: this.view.setUint8(offset+9, (part2 >>>  7) & 0x01);
	                    case 9 : this.view.setUint8(offset+8, size !== 9 ? (part2       ) | 0x80 : (part2       ) & 0x7F);
	                    case 8 : this.view.setUint8(offset+7, size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F);
	                    case 7 : this.view.setUint8(offset+6, size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F);
	                    case 6 : this.view.setUint8(offset+5, size !== 6 ? (part1 >>>  7) | 0x80 : (part1 >>>  7) & 0x7F);
	                    case 5 : this.view.setUint8(offset+4, size !== 5 ? (part1       ) | 0x80 : (part1       ) & 0x7F);
	                    case 4 : this.view.setUint8(offset+3, size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F);
	                    case 3 : this.view.setUint8(offset+2, size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F);
	                    case 2 : this.view.setUint8(offset+1, size !== 2 ? (part0 >>>  7) | 0x80 : (part0 >>>  7) & 0x7F);
	                    case 1 : this.view.setUint8(offset  , size !== 1 ? (part0       ) | 0x80 : (part0       ) & 0x7F);
	                }
	                if (relative) {
	                    this.offset += size;
	                    return this;
	                } else {
	                    return size;
	                }
	            };

	            /**
	             * Writes a zig-zag encoded 64bit base 128 variable-length integer.
	             * @param {number|Long} value Value to write
	             * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	             *  written if omitted.
	             * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	             * @expose
	             */
	            ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
	                return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
	            };

	            /**
	             * Reads a 64bit base 128 variable-length integer. Requires Long.js.
	             * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	             *  read if omitted.
	             * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	             *  the actual number of bytes read.
	             * @throws {Error} If it's not a valid varint
	             * @expose
	             */
	            ByteBufferPrototype.readVarint64 = function(offset) {
	                var relative = typeof offset === 'undefined';
	                if (relative) offset = this.offset;
	                if (!this.noAssert) {
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	                }
	                // ref: src/google/protobuf/io/coded_stream.cc
	                var start = offset,
	                    part0 = 0,
	                    part1 = 0,
	                    part2 = 0,
	                    b  = 0;
	                b = this.view.getUint8(offset++); part0  = (b & 0x7F)      ; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part0 |= (b & 0x7F) <<  7; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part0 |= (b & 0x7F) << 21; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part1  = (b & 0x7F)      ; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part1 |= (b & 0x7F) <<  7; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part1 |= (b & 0x7F) << 21; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part2  = (b & 0x7F)      ; if (b & 0x80) {
	                b = this.view.getUint8(offset++); part2 |= (b & 0x7F) <<  7; if (b & 0x80) {
	                throw Error("Buffer overrun"); }}}}}}}}}}
	                var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, false);
	                if (relative) {
	                    this.offset = offset;
	                    return value;
	                } else {
	                    return {
	                        'value': value,
	                        'length': offset-start
	                    };
	                }
	            };

	            /**
	             * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
	             * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	             *  read if omitted.
	             * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	             *  the actual number of bytes read.
	             * @throws {Error} If it's not a valid varint
	             * @expose
	             */
	            ByteBufferPrototype.readVarint64ZigZag = function(offset) {
	                var val = this.readVarint64(offset);
	                if (val && val['value'] instanceof Long)
	                    val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
	                else
	                    val = ByteBuffer.zigZagDecode64(val);
	                return val;
	            };

	        } // Long


	        // types/strings/cstring

	        /**
	         * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
	         *  characters itself.
	         * @param {string} str String to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  contained in `str` + 1 if omitted.
	         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
	         * @expose
	         */
	        ByteBufferPrototype.writeCString = function(str, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            var i,
	                k = str.length;
	            if (!this.noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	                for (i=0; i<k; ++i) {
	                    if (str.charCodeAt(i) === 0)
	                        throw RangeError("Illegal str: Contains NULL-characters");
	                }
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            // UTF8 strings do not contain zero bytes in between except for the zero character, so:
	            k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	            offset += k+1;
	            var capacity12 = this.buffer.byteLength;
	            if (offset > capacity12)
	                this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
	            offset -= k+1;
	            utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	                this.view.setUint8(offset++, b);
	            }.bind(this));
	            this.view.setUint8(offset++, 0);
	            if (relative) {
	                this.offset = offset;
	                return this;
	            }
	            return k;
	        };

	        /**
	         * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
	         *  itself.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	         *  read and the actual number of bytes read.
	         * @expose
	         */
	        ByteBufferPrototype.readCString = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            var start = offset,
	                temp;
	            // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
	            var sd, b = -1;
	            utfx.decodeUTF8toUTF16(function() {
	                if (b === 0) return null;
	                if (offset >= this.limit)
	                    throw RangeError("Illegal range: Truncated data, "+offset+" < "+this.limit);
	                return (b = this.view.getUint8(offset++)) === 0 ? null : b;
	            }.bind(this), sd = stringDestination(), true);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    "string": sd(),
	                    "length": offset - start
	                };
	            }
	        };

	        // types/strings/istring

	        /**
	         * Writes a length as uint32 prefixed UTF8 encoded string.
	         * @param {string} str String to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	         * @expose
	         * @see ByteBuffer#writeVarint32
	         */
	        ByteBufferPrototype.writeIString = function(str, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            var start = offset,
	                k;
	            k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	            offset += 4+k;
	            var capacity13 = this.buffer.byteLength;
	            if (offset > capacity13)
	                this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
	            offset -= 4+k;
	            this.view.setUint32(offset, k, this.littleEndian);
	            offset += 4;
	            utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	                this.view.setUint8(offset++, b);
	            }.bind(this));
	            if (offset !== start + 4 + k)
	                throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+4+k));
	            if (relative) {
	                this.offset = offset;
	                return this;
	            }
	            return offset - start;
	        };

	        /**
	         * Reads a length as uint32 prefixed UTF8 encoded string.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	         *  read and the actual number of bytes read.
	         * @expose
	         * @see ByteBuffer#readVarint32
	         */
	        ByteBufferPrototype.readIString = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	            }
	            var temp = 0,
	                start = offset,
	                str;
	            temp = this.view.getUint32(offset, this.littleEndian);
	            offset += 4;
	            var k = offset + temp,
	                sd;
	            utfx.decodeUTF8toUTF16(function() {
	                return offset < k ? this.view.getUint8(offset++) : null;
	            }.bind(this), sd = stringDestination(), this.noAssert);
	            str = sd();
	            if (relative) {
	                this.offset = offset;
	                return str;
	            } else {
	                return {
	                    'string': str,
	                    'length': offset - start
	                };
	            }
	        };

	        // types/strings/utf8string

	        /**
	         * Metrics representing number of UTF8 characters. Evaluates to `c`.
	         * @type {string}
	         * @const
	         * @expose
	         */
	        ByteBuffer.METRICS_CHARS = 'c';

	        /**
	         * Metrics representing number of bytes. Evaluates to `b`.
	         * @type {string}
	         * @const
	         * @expose
	         */
	        ByteBuffer.METRICS_BYTES = 'b';

	        /**
	         * Writes an UTF8 encoded string.
	         * @param {string} str String to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeUTF8String = function(str, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            var k;
	            var start = offset;
	            k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	            offset += k;
	            var capacity14 = this.buffer.byteLength;
	            if (offset > capacity14)
	                this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
	            offset -= k;
	            utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	                this.view.setUint8(offset++, b);
	            }.bind(this));
	            if (relative) {
	                this.offset = offset;
	                return this;
	            }
	            return offset - start;
	        };

	        /**
	         * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
	         * @function
	         * @param {string} str String to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;

	        /**
	         * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
	         *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
	         * @function
	         * @param {string} str String to calculate
	         * @returns {number} Number of UTF8 characters
	         * @expose
	         */
	        ByteBuffer.calculateUTF8Chars = function(str) {
	            return utfx.calculateUTF16asUTF8(stringSource(str))[0];
	        };

	        /**
	         * Calculates the number of UTF8 bytes of a string.
	         * @function
	         * @param {string} str String to calculate
	         * @returns {number} Number of UTF8 bytes
	         * @expose
	         */
	        ByteBuffer.calculateUTF8Bytes = function(str) {
	            return utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        };

	        /**
	         * Reads an UTF8 encoded string.
	         * @param {number} length Number of characters or bytes to read.
	         * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
	         *  {@link ByteBuffer.METRICS_CHARS}.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	         *  read and the actual number of bytes read.
	         * @expose
	         */
	        ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
	            if (typeof metrics === 'number') {
	                offset = metrics;
	                metrics = undefined;
	            }
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
	            if (!this.noAssert) {
	                if (typeof length !== 'number' || length % 1 !== 0)
	                    throw TypeError("Illegal length: "+length+" (not an integer)");
	                length |= 0;
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            var i = 0,
	                start = offset,
	                sd;
	            if (metrics === ByteBuffer.METRICS_CHARS) { // The same for node and the browser
	                sd = stringDestination();
	                utfx.decodeUTF8(function() {
	                    return i < length && offset < this.limit ? this.view.getUint8(offset++) : null;
	                }.bind(this), function(cp) {
	                    ++i; utfx.UTF8toUTF16(cp, sd);
	                }.bind(this));
	                if (i !== length)
	                    throw RangeError("Illegal range: Truncated data, "+i+" == "+length);
	                if (relative) {
	                    this.offset = offset;
	                    return sd();
	                } else {
	                    return {
	                        "string": sd(),
	                        "length": offset - start
	                    };
	                }
	            } else if (metrics === ByteBuffer.METRICS_BYTES) {
	                if (!this.noAssert) {
	                    if (typeof offset !== 'number' || offset % 1 !== 0)
	                        throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                    offset >>>= 0;
	                    if (offset < 0 || offset + length > this.buffer.byteLength)
	                        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	                }
	                var k = offset + length;
	                utfx.decodeUTF8toUTF16(function() {
	                    return offset < k ? this.view.getUint8(offset++) : null;
	                }.bind(this), sd = stringDestination(), this.noAssert);
	                if (offset !== k)
	                    throw RangeError("Illegal range: Truncated data, "+offset+" == "+k);
	                if (relative) {
	                    this.offset = offset;
	                    return sd();
	                } else {
	                    return {
	                        'string': sd(),
	                        'length': offset - start
	                    };
	                }
	            } else
	                throw TypeError("Unsupported metrics: "+metrics);
	        };

	        /**
	         * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
	         * @function
	         * @param {number} length Number of characters or bytes to read
	         * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
	         *  {@link ByteBuffer.METRICS_CHARS}.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	         *  read and the actual number of bytes read.
	         * @expose
	         */
	        ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;

	        // types/strings/vstring

	        /**
	         * Writes a length as varint32 prefixed UTF8 encoded string.
	         * @param {string} str String to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	         * @expose
	         * @see ByteBuffer#writeVarint32
	         */
	        ByteBufferPrototype.writeVString = function(str, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            var start = offset,
	                k, l;
	            k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	            l = ByteBuffer.calculateVarint32(k);
	            offset += l+k;
	            var capacity15 = this.buffer.byteLength;
	            if (offset > capacity15)
	                this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
	            offset -= l+k;
	            offset += this.writeVarint32(k, offset);
	            utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	                this.view.setUint8(offset++, b);
	            }.bind(this));
	            if (offset !== start+k+l)
	                throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+k+l));
	            if (relative) {
	                this.offset = offset;
	                return this;
	            }
	            return offset - start;
	        };

	        /**
	         * Reads a length as varint32 prefixed UTF8 encoded string.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	         *  read and the actual number of bytes read.
	         * @expose
	         * @see ByteBuffer#readVarint32
	         */
	        ByteBufferPrototype.readVString = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            var temp = this.readVarint32(offset),
	                start = offset,
	                str;
	            offset += temp['length'];
	            temp = temp['value'];
	            var k = offset + temp,
	                sd = stringDestination();
	            utfx.decodeUTF8toUTF16(function() {
	                return offset < k ? this.view.getUint8(offset++) : null;
	            }.bind(this), sd, this.noAssert);
	            str = sd();
	            if (relative) {
	                this.offset = offset;
	                return str;
	            } else {
	                return {
	                    'string': str,
	                    'length': offset - start
	                };
	            }
	        };


	        /**
	         * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
	         *  data's length.
	         * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
	         *  will be modified according to the performed read operation.
	         * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	         * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
	         * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
	         */
	        ByteBufferPrototype.append = function(source, encoding, offset) {
	            if (typeof encoding === 'number' || typeof encoding !== 'string') {
	                offset = encoding;
	                encoding = undefined;
	            }
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (!(source instanceof ByteBuffer))
	                source = ByteBuffer.wrap(source, encoding);
	            var length = source.limit - source.offset;
	            if (length <= 0) return this; // Nothing to append
	            offset += length;
	            var capacity16 = this.buffer.byteLength;
	            if (offset > capacity16)
	                this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
	            offset -= length;
	            new Uint8Array(this.buffer, offset).set(new Uint8Array(source.buffer).subarray(source.offset, source.limit));
	            source.offset += length;
	            if (relative) this.offset += length;
	            return this;
	        };

	        /**
	         * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
	            specified offset up to the length of this ByteBuffer's data.
	         * @param {!ByteBuffer} target Target ByteBuffer
	         * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         * @see ByteBuffer#append
	         */
	        ByteBufferPrototype.appendTo = function(target, offset) {
	            target.append(this, offset);
	            return this;
	        };

	        /**
	         * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
	         *  disable them if your code already makes sure that everything is valid.
	         * @param {boolean} assert `true` to enable assertions, otherwise `false`
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.assert = function(assert) {
	            this.noAssert = !assert;
	            return this;
	        };

	        /**
	         * Gets the capacity of this ByteBuffer's backing buffer.
	         * @returns {number} Capacity of the backing buffer
	         * @expose
	         */
	        ByteBufferPrototype.capacity = function() {
	            return this.buffer.byteLength;
	        };

	        /**
	         * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
	         *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.clear = function() {
	            this.offset = 0;
	            this.limit = this.buffer.byteLength;
	            this.markedOffset = -1;
	            return this;
	        };

	        /**
	         * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
	         *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
	         * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
	         * @returns {!ByteBuffer} Cloned instance
	         * @expose
	         */
	        ByteBufferPrototype.clone = function(copy) {
	            var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
	            if (copy) {
	                var buffer = new ArrayBuffer(this.buffer.byteLength);
	                new Uint8Array(buffer).set(this.buffer);
	                bb.buffer = buffer;
	                bb.view = new DataView(buffer);
	            } else {
	                bb.buffer = this.buffer;
	                bb.view = this.view;
	            }
	            bb.offset = this.offset;
	            bb.markedOffset = this.markedOffset;
	            bb.limit = this.limit;
	            return bb;
	        };

	        /**
	         * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
	         *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
	         *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
	         * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.compact = function(begin, end) {
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            if (begin === 0 && end === this.buffer.byteLength)
	                return this; // Already compacted
	            var len = end - begin;
	            if (len === 0) {
	                this.buffer = EMPTY_BUFFER;
	                this.view = null;
	                if (this.markedOffset >= 0) this.markedOffset -= begin;
	                this.offset = 0;
	                this.limit = 0;
	                return this;
	            }
	            var buffer = new ArrayBuffer(len);
	            new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(begin, end));
	            this.buffer = buffer;
	            this.view = new DataView(buffer);
	            if (this.markedOffset >= 0) this.markedOffset -= begin;
	            this.offset = 0;
	            this.limit = len;
	            return this;
	        };

	        /**
	         * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
	         *  {@link ByteBuffer#limit}.
	         * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	         * @returns {!ByteBuffer} Copy
	         * @expose
	         */
	        ByteBufferPrototype.copy = function(begin, end) {
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            if (begin === end)
	                return new ByteBuffer(0, this.littleEndian, this.noAssert);
	            var capacity = end - begin,
	                bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
	            bb.offset = 0;
	            bb.limit = capacity;
	            if (bb.markedOffset >= 0) bb.markedOffset -= begin;
	            this.copyTo(bb, 0, begin, end);
	            return bb;
	        };

	        /**
	         * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
	         *  {@link ByteBuffer#limit}.
	         * @param {!ByteBuffer} target Target ByteBuffer
	         * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
	         *  by the number of bytes copied if omitted.
	         * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
	         *  number of bytes copied if omitted.
	         * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
	            var relative,
	                targetRelative;
	            if (!this.noAssert) {
	                if (!ByteBuffer.isByteBuffer(target))
	                    throw TypeError("Illegal target: Not a ByteBuffer");
	            }
	            targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
	            sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
	            sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;

	            if (targetOffset < 0 || targetOffset > target.buffer.byteLength)
	                throw RangeError("Illegal target range: 0 <= "+targetOffset+" <= "+target.buffer.byteLength);
	            if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength)
	                throw RangeError("Illegal source range: 0 <= "+sourceOffset+" <= "+this.buffer.byteLength);

	            var len = sourceLimit - sourceOffset;
	            if (len === 0)
	                return target; // Nothing to copy

	            target.ensureCapacity(targetOffset + len);

	            new Uint8Array(target.buffer).set(new Uint8Array(this.buffer).subarray(sourceOffset, sourceLimit), targetOffset);

	            if (relative) this.offset += len;
	            if (targetRelative) target.offset += len;

	            return this;
	        };

	        /**
	         * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
	         *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
	         *  the required capacity will be used instead.
	         * @param {number} capacity Required capacity
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.ensureCapacity = function(capacity) {
	            var current = this.buffer.byteLength;
	            if (current < capacity)
	                return this.resize((current *= 2) > capacity ? current : capacity);
	            return this;
	        };

	        /**
	         * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
	         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	         * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
	         * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted. defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	         * @returns {!ByteBuffer} this
	         * @expose
	         * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
	         */
	        ByteBufferPrototype.fill = function(value, begin, end) {
	            var relative = typeof begin === 'undefined';
	            if (relative) begin = this.offset;
	            if (typeof value === 'string' && value.length > 0)
	                value = value.charCodeAt(0);
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof value !== 'number' || value % 1 !== 0)
	                    throw TypeError("Illegal value: "+value+" (not an integer)");
	                value |= 0;
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            if (begin >= end)
	                return this; // Nothing to fill
	            while (begin < end) this.view.setUint8(begin++, value);
	            if (relative) this.offset = begin;
	            return this;
	        };

	        /**
	         * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
	         *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.flip = function() {
	            this.limit = this.offset;
	            this.offset = 0;
	            return this;
	        };
	        /**
	         * Marks an offset on this ByteBuffer to be used later.
	         * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
	         * @returns {!ByteBuffer} this
	         * @throws {TypeError} If `offset` is not a valid number
	         * @throws {RangeError} If `offset` is out of bounds
	         * @see ByteBuffer#reset
	         * @expose
	         */
	        ByteBufferPrototype.mark = function(offset) {
	            offset = typeof offset === 'undefined' ? this.offset : offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            this.markedOffset = offset;
	            return this;
	        };
	        /**
	         * Sets the byte order.
	         * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.order = function(littleEndian) {
	            if (!this.noAssert) {
	                if (typeof littleEndian !== 'boolean')
	                    throw TypeError("Illegal littleEndian: Not a boolean");
	            }
	            this.littleEndian = !!littleEndian;
	            return this;
	        };

	        /**
	         * Switches (to) little endian byte order.
	         * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.LE = function(littleEndian) {
	            this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
	            return this;
	        };

	        /**
	         * Switches (to) big endian byte order.
	         * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.BE = function(bigEndian) {
	            this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
	            return this;
	        };
	        /**
	         * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
	         *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	         *  will be resized and its contents moved accordingly.
	         * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
	         *  modified according to the performed read operation.
	         * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	         * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	         *  prepended if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
	         * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
	         */
	        ByteBufferPrototype.prepend = function(source, encoding, offset) {
	            if (typeof encoding === 'number' || typeof encoding !== 'string') {
	                offset = encoding;
	                encoding = undefined;
	            }
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (!(source instanceof ByteBuffer))
	                source = ByteBuffer.wrap(source, encoding);
	            var len = source.limit - source.offset;
	            if (len <= 0) return this; // Nothing to prepend
	            var diff = len - offset;
	            var arrayView;
	            if (diff > 0) { // Not enough space before offset, so resize + move
	                var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
	                arrayView = new Uint8Array(buffer);
	                arrayView.set(new Uint8Array(this.buffer).subarray(offset, this.buffer.byteLength), len);
	                this.buffer = buffer;
	                this.view = new DataView(buffer);
	                this.offset += diff;
	                if (this.markedOffset >= 0) this.markedOffset += diff;
	                this.limit += diff;
	                offset += diff;
	            } else {
	                arrayView = new Uint8Array(this.buffer);
	            }
	            arrayView.set(new Uint8Array(source.buffer).subarray(source.offset, source.limit), offset - len);
	            source.offset = source.limit;
	            if (relative)
	                this.offset -= len;
	            return this;
	        };

	        /**
	         * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
	         *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	         *  will be resized and its contents moved accordingly.
	         * @param {!ByteBuffer} target Target ByteBuffer
	         * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	         *  prepended if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         * @see ByteBuffer#prepend
	         */
	        ByteBufferPrototype.prependTo = function(target, offset) {
	            target.prepend(this, offset);
	            return this;
	        };
	        /**
	         * Prints debug information about this ByteBuffer's contents.
	         * @param {function(string)=} out Output function to call, defaults to console.log
	         * @expose
	         */
	        ByteBufferPrototype.printDebug = function(out) {
	            if (typeof out !== 'function') out = console.log.bind(console);
	            out(
	                this.toString()+"\n"+
	                "-------------------------------------------------------------------\n"+
	                this.toDebug(/* columns */ true)
	            );
	        };

	        /**
	         * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
	         *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
	         * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
	         * @expose
	         */
	        ByteBufferPrototype.remaining = function() {
	            return this.limit - this.offset;
	        };
	        /**
	         * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
	         *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
	         *  marked, sets `offset = 0`.
	         * @returns {!ByteBuffer} this
	         * @see ByteBuffer#mark
	         * @expose
	         */
	        ByteBufferPrototype.reset = function() {
	            if (this.markedOffset >= 0) {
	                this.offset = this.markedOffset;
	                this.markedOffset = -1;
	            } else {
	                this.offset = 0;
	            }
	            return this;
	        };
	        /**
	         * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
	         *  large or larger.
	         * @param {number} capacity Capacity required
	         * @returns {!ByteBuffer} this
	         * @throws {TypeError} If `capacity` is not a number
	         * @throws {RangeError} If `capacity < 0`
	         * @expose
	         */
	        ByteBufferPrototype.resize = function(capacity) {
	            if (!this.noAssert) {
	                if (typeof capacity !== 'number' || capacity % 1 !== 0)
	                    throw TypeError("Illegal capacity: "+capacity+" (not an integer)");
	                capacity |= 0;
	                if (capacity < 0)
	                    throw RangeError("Illegal capacity: 0 <= "+capacity);
	            }
	            if (this.buffer.byteLength < capacity) {
	                var buffer = new ArrayBuffer(capacity);
	                new Uint8Array(buffer).set(new Uint8Array(this.buffer));
	                this.buffer = buffer;
	                this.view = new DataView(buffer);
	            }
	            return this;
	        };
	        /**
	         * Reverses this ByteBuffer's contents.
	         * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.reverse = function(begin, end) {
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            if (begin === end)
	                return this; // Nothing to reverse
	            Array.prototype.reverse.call(new Uint8Array(this.buffer).subarray(begin, end));
	            this.view = new DataView(this.buffer); // FIXME: Why exactly is this necessary?
	            return this;
	        };
	        /**
	         * Skips the next `length` bytes. This will just advance
	         * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.skip = function(length) {
	            if (!this.noAssert) {
	                if (typeof length !== 'number' || length % 1 !== 0)
	                    throw TypeError("Illegal length: "+length+" (not an integer)");
	                length |= 0;
	            }
	            var offset = this.offset + length;
	            if (!this.noAssert) {
	                if (offset < 0 || offset > this.buffer.byteLength)
	                    throw RangeError("Illegal length: 0 <= "+this.offset+" + "+length+" <= "+this.buffer.byteLength);
	            }
	            this.offset = offset;
	            return this;
	        };

	        /**
	         * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
	         * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	         * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
	         * @expose
	         */
	        ByteBufferPrototype.slice = function(begin, end) {
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            var bb = this.clone();
	            bb.offset = begin;
	            bb.limit = end;
	            return bb;
	        };
	        /**
	         * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
	         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will transparently {@link ByteBuffer#flip} this
	         *  ByteBuffer if `offset > limit` but the actual offsets remain untouched.
	         * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
	         *  possible. Defaults to `false`
	         * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	         * @expose
	         */
	        ByteBufferPrototype.toBuffer = function(forceCopy) {
	            var offset = this.offset,
	                limit = this.limit;
	            if (offset > limit) {
	                var t = offset;
	                offset = limit;
	                limit = t;
	            }
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: Not an integer");
	                offset >>>= 0;
	                if (typeof limit !== 'number' || limit % 1 !== 0)
	                    throw TypeError("Illegal limit: Not an integer");
	                limit >>>= 0;
	                if (offset < 0 || offset > limit || limit > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+offset+" <= "+limit+" <= "+this.buffer.byteLength);
	            }
	            // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
	            // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
	            if (!forceCopy && offset === 0 && limit === this.buffer.byteLength) {
	                return this.buffer;
	            }
	            if (offset === limit) {
	                return EMPTY_BUFFER;
	            }
	            var buffer = new ArrayBuffer(limit - offset);
	            new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
	            return buffer;
	        };

	        /**
	         * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
	         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will transparently {@link ByteBuffer#flip} this
	         *  ByteBuffer if `offset > limit` but the actual offsets remain untouched. This is an alias of
	         *  {@link ByteBuffer#toBuffer}.
	         * @function
	         * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
	         *  Defaults to `false`
	         * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	         * @expose
	         */
	        ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;


	        /**
	         * Converts the ByteBuffer's contents to a string.
	         * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
	         *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
	         *  highlighted offsets.
	         * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
	         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	         * @returns {string} String representation
	         * @throws {Error} If `encoding` is invalid
	         * @expose
	         */
	        ByteBufferPrototype.toString = function(encoding, begin, end) {
	            if (typeof encoding === 'undefined')
	                return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";
	            if (typeof encoding === 'number')
	                encoding = "utf8",
	                begin = encoding,
	                end = begin;
	            switch (encoding) {
	                case "utf8":
	                    return this.toUTF8(begin, end);
	                case "base64":
	                    return this.toBase64(begin, end);
	                case "hex":
	                    return this.toHex(begin, end);
	                case "binary":
	                    return this.toBinary(begin, end);
	                case "debug":
	                    return this.toDebug();
	                case "columns":
	                    return this.toColumns();
	                default:
	                    throw Error("Unsupported encoding: "+encoding);
	            }
	        };

	        // lxiv-embeddable

	        /**
	         * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	         * Released under the Apache License, Version 2.0
	         * see: https://github.com/dcodeIO/lxiv for details
	         */
	        var lxiv = function() {
	            "use strict";

	            /**
	             * lxiv namespace.
	             * @type {!Object.<string,*>}
	             * @exports lxiv
	             */
	            var lxiv = {};

	            /**
	             * Character codes for output.
	             * @type {!Array.<number>}
	             * @inner
	             */
	            var aout = [
	                65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
	                81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
	                103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
	                119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
	            ];

	            /**
	             * Character codes for input.
	             * @type {!Array.<number>}
	             * @inner
	             */
	            var ain = [];
	            for (var i=0, k=aout.length; i<k; ++i)
	                ain[aout[i]] = i;

	            /**
	             * Encodes bytes to base64 char codes.
	             * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
	             *  there are no more bytes left.
	             * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
	             *  code.
	             */
	            lxiv.encode = function(src, dst) {
	                var b, t;
	                while ((b = src()) !== null) {
	                    dst(aout[(b>>2)&0x3f]);
	                    t = (b&0x3)<<4;
	                    if ((b = src()) !== null) {
	                        t |= (b>>4)&0xf;
	                        dst(aout[(t|((b>>4)&0xf))&0x3f]);
	                        t = (b&0xf)<<2;
	                        if ((b = src()) !== null)
	                            dst(aout[(t|((b>>6)&0x3))&0x3f]),
	                            dst(aout[b&0x3f]);
	                        else
	                            dst(aout[t&0x3f]),
	                            dst(61);
	                    } else
	                        dst(aout[t&0x3f]),
	                        dst(61),
	                        dst(61);
	                }
	            };

	            /**
	             * Decodes base64 char codes to bytes.
	             * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	             *  `null` if there are no more characters left.
	             * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	             * @throws {Error} If a character code is invalid
	             */
	            lxiv.decode = function(src, dst) {
	                var c, t1, t2;
	                function fail(c) {
	                    throw Error("Illegal character code: "+c);
	                }
	                while ((c = src()) !== null) {
	                    t1 = ain[c];
	                    if (typeof t1 === 'undefined') fail(c);
	                    if ((c = src()) !== null) {
	                        t2 = ain[c];
	                        if (typeof t2 === 'undefined') fail(c);
	                        dst((t1<<2)>>>0|(t2&0x30)>>4);
	                        if ((c = src()) !== null) {
	                            t1 = ain[c];
	                            if (typeof t1 === 'undefined')
	                                if (c === 61) break; else fail(c);
	                            dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
	                            if ((c = src()) !== null) {
	                                t2 = ain[c];
	                                if (typeof t2 === 'undefined')
	                                    if (c === 61) break; else fail(c);
	                                dst(((t1&0x3)<<6)>>>0|t2);
	                            }
	                        }
	                    }
	                }
	            };

	            /**
	             * Tests if a string is valid base64.
	             * @param {string} str String to test
	             * @returns {boolean} `true` if valid, otherwise `false`
	             */
	            lxiv.test = function(str) {
	                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
	            };

	            return lxiv;
	        }();

	        // encodings/base64

	        /**
	         * Encodes this ByteBuffer's contents to a base64 encoded string.
	         * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
	         * @returns {string} Base64 encoded string
	         * @expose
	         */
	        ByteBufferPrototype.toBase64 = function(begin, end) {
	            if (typeof begin === 'undefined')
	                begin = this.offset;
	            if (typeof end === 'undefined')
	                end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            var sd; lxiv.encode(function() {
	                return begin < end ? this.view.getUint8(begin++) : null;
	            }.bind(this), sd = stringDestination());
	            return sd();
	        };

	        /**
	         * Decodes a base64 encoded string to a ByteBuffer.
	         * @param {string} str String to decode
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} ByteBuffer
	         * @expose
	         */
	        ByteBuffer.fromBase64 = function(str, littleEndian, noAssert) {
	            if (!noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	                if (str.length % 4 !== 0)
	                    throw TypeError("Illegal str: Length not a multiple of 4");
	            }
	            var bb = new ByteBuffer(str.length/4*3, littleEndian, noAssert),
	                i = 0;
	            lxiv.decode(stringSource(str), function(b) {
	                bb.view.setUint8(i++, b);
	            });
	            bb.limit = i;
	            return bb;
	        };

	        /**
	         * Encodes a binary string to base64 like `window.btoa` does.
	         * @param {string} str Binary string
	         * @returns {string} Base64 encoded string
	         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
	         * @expose
	         */
	        ByteBuffer.btoa = function(str) {
	            return ByteBuffer.fromBinary(str).toBase64();
	        };

	        /**
	         * Decodes a base64 encoded string to binary like `window.atob` does.
	         * @param {string} b64 Base64 encoded string
	         * @returns {string} Binary string
	         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
	         * @expose
	         */
	        ByteBuffer.atob = function(b64) {
	            return ByteBuffer.fromBase64(b64).toBinary();
	        };

	        // encodings/binary

	        /**
	         * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
	         * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	         * @returns {string} Binary encoded string
	         * @throws {RangeError} If `offset > limit`
	         * @expose
	         */
	        ByteBufferPrototype.toBinary = function(begin, end) {
	            begin = typeof begin === 'undefined' ? this.offset : begin;
	            end = typeof end === 'undefined' ? this.limit : end;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            if (begin === end)
	                return "";
	            var cc = [], pt = [];
	            while (begin < end) {
	                cc.push(this.view.getUint8(begin++));
	                if (cc.length >= 1024)
	                    pt.push(String.fromCharCode.apply(String, cc)),
	                    cc = [];
	            }
	            return pt.join('') + String.fromCharCode.apply(String, cc);
	        };

	        /**
	         * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
	         * @param {string} str String to decode
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} ByteBuffer
	         * @expose
	         */
	        ByteBuffer.fromBinary = function(str, littleEndian, noAssert) {
	            if (!noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	            }
	            var i = 0, k = str.length, charCode,
	                bb = new ByteBuffer(k, littleEndian, noAssert);
	            while (i<k) {
	                charCode = str.charCodeAt(i);
	                if (!noAssert && charCode > 255)
	                    throw RangeError("Illegal charCode at "+i+": 0 <= "+charCode+" <= 255");
	                bb.view.setUint8(i++, charCode);
	            }
	            bb.limit = k;
	            return bb;
	        };

	        // encodings/debug

	        /**
	         * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
	         * * `<` : offset,
	         * * `'` : markedOffset,
	         * * `>` : limit,
	         * * `|` : offset and limit,
	         * * `[` : offset and markedOffset,
	         * * `]` : markedOffset and limit,
	         * * `!` : offset, markedOffset and limit
	         * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
	         * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
	         * @expose
	         * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
	         * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
	         * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
	         * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
	         */
	        ByteBufferPrototype.toDebug = function(columns) {
	            var i = -1,
	                k = this.buffer.byteLength,
	                b,
	                hex = "",
	                asc = "",
	                out = "";
	            while (i<k) {
	                if (i !== -1) {
	                    b = this.view.getUint8(i);
	                    if (b < 0x10) hex += "0"+b.toString(16).toUpperCase();
	                    else hex += b.toString(16).toUpperCase();
	                    if (columns) {
	                        asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
	                    }
	                }
	                ++i;
	                if (columns) {
	                    if (i > 0 && i % 16 === 0 && i !== k) {
	                        while (hex.length < 3*16+3) hex += " ";
	                        out += hex+asc+"\n";
	                        hex = asc = "";
	                    }
	                }
	                if (i === this.offset && i === this.limit)
	                    hex += i === this.markedOffset ? "!" : "|";
	                else if (i === this.offset)
	                    hex += i === this.markedOffset ? "[" : "<";
	                else if (i === this.limit)
	                    hex += i === this.markedOffset ? "]" : ">";
	                else
	                    hex += i === this.markedOffset ? "'" : (columns || (i !== 0 && i !== k) ? " " : "");
	            }
	            if (columns && hex !== " ") {
	                while (hex.length < 3*16+3) hex += " ";
	                out += hex+asc+"\n";
	            }
	            return columns ? out : hex;
	        };

	        /**
	         * Decodes a hex encoded string with marked offsets to a ByteBuffer.
	         * @param {string} str Debug string to decode (not be generated with `columns = true`)
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} ByteBuffer
	         * @expose
	         * @see ByteBuffer#toDebug
	         */
	        ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
	            var k = str.length,
	                bb = new ByteBuffer(((k+1)/3)|0, littleEndian, noAssert);
	            var i = 0, j = 0, ch, b,
	                rs = false, // Require symbol next
	                ho = false, hm = false, hl = false, // Already has offset, markedOffset, limit?
	                fail = false;
	            while (i<k) {
	                switch (ch = str.charAt(i++)) {
	                    case '!':
	                        if (!noAssert) {
	                            if (ho || hm || hl) {
	                                fail = true; break;
	                            }
	                            ho = hm = hl = true;
	                        }
	                        bb.offset = bb.markedOffset = bb.limit = j;
	                        rs = false;
	                        break;
	                    case '|':
	                        if (!noAssert) {
	                            if (ho || hl) {
	                                fail = true; break;
	                            }
	                            ho = hl = true;
	                        }
	                        bb.offset = bb.limit = j;
	                        rs = false;
	                        break;
	                    case '[':
	                        if (!noAssert) {
	                            if (ho || hm) {
	                                fail = true; break;
	                            }
	                            ho = hm = true;
	                        }
	                        bb.offset = bb.markedOffset = j;
	                        rs = false;
	                        break;
	                    case '<':
	                        if (!noAssert) {
	                            if (ho) {
	                                fail = true; break;
	                            }
	                            ho = true;
	                        }
	                        bb.offset = j;
	                        rs = false;
	                        break;
	                    case ']':
	                        if (!noAssert) {
	                            if (hl || hm) {
	                                fail = true; break;
	                            }
	                            hl = hm = true;
	                        }
	                        bb.limit = bb.markedOffset = j;
	                        rs = false;
	                        break;
	                    case '>':
	                        if (!noAssert) {
	                            if (hl) {
	                                fail = true; break;
	                            }
	                            hl = true;
	                        }
	                        bb.limit = j;
	                        rs = false;
	                        break;
	                    case "'":
	                        if (!noAssert) {
	                            if (hm) {
	                                fail = true; break;
	                            }
	                            hm = true;
	                        }
	                        bb.markedOffset = j;
	                        rs = false;
	                        break;
	                    case ' ':
	                        rs = false;
	                        break;
	                    default:
	                        if (!noAssert) {
	                            if (rs) {
	                                fail = true; break;
	                            }
	                        }
	                        b = parseInt(ch+str.charAt(i++), 16);
	                        if (!noAssert) {
	                            if (isNaN(b) || b < 0 || b > 255)
	                                throw TypeError("Illegal str: Not a debug encoded string");
	                        }
	                        bb.view.setUint8(j++, b);
	                        rs = true;
	                }
	                if (fail)
	                    throw TypeError("Illegal str: Invalid symbol at "+i);
	            }
	            if (!noAssert) {
	                if (!ho || !hl)
	                    throw TypeError("Illegal str: Missing offset or limit");
	                if (j<bb.buffer.byteLength)
	                    throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+j+" < "+k);
	            }
	            return bb;
	        };

	        // encodings/hex

	        /**
	         * Encodes this ByteBuffer's contents to a hex encoded string.
	         * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	         * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	         * @returns {string} Hex encoded string
	         * @expose
	         */
	        ByteBufferPrototype.toHex = function(begin, end) {
	            begin = typeof begin === 'undefined' ? this.offset : begin;
	            end = typeof end === 'undefined' ? this.limit : end;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            var out = new Array(end - begin),
	                b;
	            while (begin < end) {
	                b = this.view.getUint8(begin++);
	                if (b < 0x10)
	                    out.push("0", b.toString(16));
	                else out.push(b.toString(16));
	            }
	            return out.join('');
	        };

	        /**
	         * Decodes a hex encoded string to a ByteBuffer.
	         * @param {string} str String to decode
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} ByteBuffer
	         * @expose
	         */
	        ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
	            if (!noAssert) {
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	                if (str.length % 2 !== 0)
	                    throw TypeError("Illegal str: Length not a multiple of 2");
	            }
	            var k = str.length,
	                bb = new ByteBuffer((k / 2) | 0, littleEndian),
	                b;
	            for (var i=0, j=0; i<k; i+=2) {
	                b = parseInt(str.substring(i, i+2), 16);
	                if (!noAssert)
	                    if (!isFinite(b) || b < 0 || b > 255)
	                        throw TypeError("Illegal str: Contains non-hex characters");
	                bb.view.setUint8(j++, b);
	            }
	            bb.limit = j;
	            return bb;
	        };

	        // utfx-embeddable

	        /**
	         * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	         * Released under the Apache License, Version 2.0
	         * see: https://github.com/dcodeIO/utfx for details
	         */
	        var utfx = function() {
	            "use strict";

	            /**
	             * utfx namespace.
	             * @inner
	             * @type {!Object.<string,*>}
	             */
	            var utfx = {};

	            /**
	             * Maximum valid code point.
	             * @type {number}
	             * @const
	             */
	            utfx.MAX_CODEPOINT = 0x10FFFF;

	            /**
	             * Encodes UTF8 code points to UTF8 bytes.
	             * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	             *  respectively `null` if there are no more code points left or a single numeric code point.
	             * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
	             */
	            utfx.encodeUTF8 = function(src, dst) {
	                var cp = null;
	                if (typeof src === 'number')
	                    cp = src,
	                    src = function() { return null; };
	                while (cp !== null || (cp = src()) !== null) {
	                    if (cp < 0x80)
	                        dst(cp&0x7F);
	                    else if (cp < 0x800)
	                        dst(((cp>>6)&0x1F)|0xC0),
	                        dst((cp&0x3F)|0x80);
	                    else if (cp < 0x10000)
	                        dst(((cp>>12)&0x0F)|0xE0),
	                        dst(((cp>>6)&0x3F)|0x80),
	                        dst((cp&0x3F)|0x80);
	                    else
	                        dst(((cp>>18)&0x07)|0xF0),
	                        dst(((cp>>12)&0x3F)|0x80),
	                        dst(((cp>>6)&0x3F)|0x80),
	                        dst((cp&0x3F)|0x80);
	                    cp = null;
	                }
	            };

	            /**
	             * Decodes UTF8 bytes to UTF8 code points.
	             * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	             *  are no more bytes left.
	             * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
	             * @throws {RangeError} If a starting byte is invalid in UTF8
	             * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
	             *  remaining bytes.
	             */
	            utfx.decodeUTF8 = function(src, dst) {
	                var a, b, c, d, fail = function(b) {
	                    b = b.slice(0, b.indexOf(null));
	                    var err = Error(b.toString());
	                    err.name = "TruncatedError";
	                    err['bytes'] = b;
	                    throw err;
	                };
	                while ((a = src()) !== null) {
	                    if ((a&0x80) === 0)
	                        dst(a);
	                    else if ((a&0xE0) === 0xC0)
	                        ((b = src()) === null) && fail([a, b]),
	                        dst(((a&0x1F)<<6) | (b&0x3F));
	                    else if ((a&0xF0) === 0xE0)
	                        ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
	                        dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
	                    else if ((a&0xF8) === 0xF0)
	                        ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
	                        dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
	                    else throw RangeError("Illegal starting byte: "+a);
	                }
	            };

	            /**
	             * Converts UTF16 characters to UTF8 code points.
	             * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	             *  `null` if there are no more characters left.
	             * @param {!function(number)} dst Code points destination as a function successively called with each converted code
	             *  point.
	             */
	            utfx.UTF16toUTF8 = function(src, dst) {
	                var c1, c2 = null;
	                while (true) {
	                    if ((c1 = c2 !== null ? c2 : src()) === null)
	                        break;
	                    if (c1 >= 0xD800 && c1 <= 0xDFFF) {
	                        if ((c2 = src()) !== null) {
	                            if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
	                                dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
	                                c2 = null; continue;
	                            }
	                        }
	                    }
	                    dst(c1);
	                }
	                if (c2 !== null) dst(c2);
	            };

	            /**
	             * Converts UTF8 code points to UTF16 characters.
	             * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	             *  respectively `null` if there are no more code points left or a single numeric code point.
	             * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	             * @throws {RangeError} If a code point is out of range
	             */
	            utfx.UTF8toUTF16 = function(src, dst) {
	                var cp = null;
	                if (typeof src === 'number')
	                    cp = src, src = function() { return null; };
	                while (cp !== null || (cp = src()) !== null) {
	                    if (cp <= 0xFFFF)
	                        dst(cp);
	                    else
	                        cp -= 0x10000,
	                        dst((cp>>10)+0xD800),
	                        dst((cp%0x400)+0xDC00);
	                    cp = null;
	                }
	            };

	            /**
	             * Converts and encodes UTF16 characters to UTF8 bytes.
	             * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
	             *  if there are no more characters left.
	             * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	             */
	            utfx.encodeUTF16toUTF8 = function(src, dst) {
	                utfx.UTF16toUTF8(src, function(cp) {
	                    utfx.encodeUTF8(cp, dst);
	                });
	            };

	            /**
	             * Decodes and converts UTF8 bytes to UTF16 characters.
	             * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	             *  are no more bytes left.
	             * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	             * @throws {RangeError} If a starting byte is invalid in UTF8
	             * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
	             */
	            utfx.decodeUTF8toUTF16 = function(src, dst) {
	                utfx.decodeUTF8(src, function(cp) {
	                    utfx.UTF8toUTF16(cp, dst);
	                });
	            };

	            /**
	             * Calculates the byte length of an UTF8 code point.
	             * @param {number} cp UTF8 code point
	             * @returns {number} Byte length
	             */
	            utfx.calculateCodePoint = function(cp) {
	                return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            };

	            /**
	             * Calculates the number of UTF8 bytes required to store UTF8 code points.
	             * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
	             *  `null` if there are no more code points left.
	             * @returns {number} The number of UTF8 bytes required
	             */
	            utfx.calculateUTF8 = function(src) {
	                var cp, l=0;
	                while ((cp = src()) !== null)
	                    l += utfx.calculateCodePoint(cp);
	                return l;
	            };

	            /**
	             * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
	             * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
	             *  `null` if there are no more characters left.
	             * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
	             */
	            utfx.calculateUTF16asUTF8 = function(src) {
	                var n=0, l=0;
	                utfx.UTF16toUTF8(src, function(cp) {
	                    ++n; l += utfx.calculateCodePoint(cp);
	                });
	                return [n,l];
	            };

	            return utfx;
	        }();

	        // encodings/utf8

	        /**
	         * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
	         *  string.
	         * @returns {string} Hex encoded string
	         * @throws {RangeError} If `offset > limit`
	         * @expose
	         */
	        ByteBufferPrototype.toUTF8 = function(begin, end) {
	            if (typeof begin === 'undefined') begin = this.offset;
	            if (typeof end === 'undefined') end = this.limit;
	            if (!this.noAssert) {
	                if (typeof begin !== 'number' || begin % 1 !== 0)
	                    throw TypeError("Illegal begin: Not an integer");
	                begin >>>= 0;
	                if (typeof end !== 'number' || end % 1 !== 0)
	                    throw TypeError("Illegal end: Not an integer");
	                end >>>= 0;
	                if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                    throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	            }
	            var sd; try {
	                utfx.decodeUTF8toUTF16(function() {
	                    return begin < end ? this.view.getUint8(begin++) : null;
	                }.bind(this), sd = stringDestination());
	            } catch (e) {
	                if (begin !== end)
	                    throw RangeError("Illegal range: Truncated data, "+begin+" != "+end);
	            }
	            return sd();
	        };

	        /**
	         * Decodes an UTF8 encoded string to a ByteBuffer.
	         * @param {string} str String to decode
	         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	         * @returns {!ByteBuffer} ByteBuffer
	         * @expose
	         */
	        ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
	            if (!noAssert)
	                if (typeof str !== 'string')
	                    throw TypeError("Illegal str: Not a string");
	            var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
	                i = 0;
	            utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	                bb.view.setUint8(i++, b);
	            });
	            bb.limit = i;
	            return bb;
	        };


	        return ByteBuffer;
	    }

	    /* CommonJS */ if ("function" === 'function' && typeof module === 'object' && module && typeof exports === 'object' && exports)
	        module['exports'] = (function() {
	            var Long; try { Long = __webpack_require__(13); } catch (e) {}
	            return loadByteBuffer(Long);
	        })();
	    /* AMD */ else if ("function" === 'function' && __webpack_require__(11)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Long) { return loadByteBuffer(Long); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = loadByteBuffer(global["dcodeIO"]["Long"]);

	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
	 Copyright 2009 The Closure Library Authors. All Rights Reserved.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS-IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/long.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if ("function" === 'function' && __webpack_require__(11)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* CommonJS */ else if ("function" === 'function' && typeof module === "object" && module && module["exports"])
	        module["exports"] = factory();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();

	})(this, function() {
	    "use strict";

	    /**
	     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	     *  See the from* functions below for more convenient ways of constructing Longs.
	     * @exports Long
	     * @class A Long class for representing a 64 bit two's-complement integer value.
	     * @param {number} low The low (signed) 32 bits of the long
	     * @param {number} high The high (signed) 32 bits of the long
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @constructor
	     */
	    function Long(low, high, unsigned) {

	        /**
	         * The low 32 bits as a signed value.
	         * @type {number}
	         */
	        this.low = low | 0;

	        /**
	         * The high 32 bits as a signed value.
	         * @type {number}
	         */
	        this.high = high | 0;

	        /**
	         * Whether unsigned or not.
	         * @type {boolean}
	         */
	        this.unsigned = !!unsigned;
	    }

	    // The internal representation of a long is the two given signed, 32-bit values.
	    // We use 32-bit pieces because these are the size of integers on which
	    // Javascript performs bit-operations.  For operations like addition and
	    // multiplication, we split each number into 16 bit pieces, which can easily be
	    // multiplied within Javascript's floating-point representation without overflow
	    // or change in sign.
	    //
	    // In the algorithms below, we frequently reduce the negative case to the
	    // positive case by negating the input(s) and then post-processing the result.
	    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
	    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	    // a positive number, it overflows back into a negative).  Not handling this
	    // case would often result in infinite recursion.
	    //
	    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	    // methods on which they depend.

	    /**
	     * An indicator used to reliably determine if an object is a Long or not.
	     * @type {boolean}
	     * @const
	     * @private
	     */
	    Long.prototype.__isLong__;

	    Object.defineProperty(Long.prototype, "__isLong__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });

	    /**
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     * @inner
	     */
	    function isLong(obj) {
	        return (obj && obj["__isLong__"]) === true;
	    }

	    /**
	     * Tests if the specified object is a Long.
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     */
	    Long.isLong = isLong;

	    /**
	     * A cache of the Long representations of small integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var INT_CACHE = {};

	    /**
	     * A cache of the Long representations of small unsigned integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var UINT_CACHE = {};

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromInt(value, unsigned) {
	        var obj, cachedObj, cache;
	        if (unsigned) {
	            value >>>= 0;
	            if (cache = (0 <= value && value < 256)) {
	                cachedObj = UINT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	            if (cache)
	                UINT_CACHE[value] = obj;
	            return obj;
	        } else {
	            value |= 0;
	            if (cache = (-128 <= value && value < 128)) {
	                cachedObj = INT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, value < 0 ? -1 : 0, false);
	            if (cache)
	                INT_CACHE[value] = obj;
	            return obj;
	        }
	    }

	    /**
	     * Returns a Long representing the given 32 bit integer value.
	     * @function
	     * @param {number} value The 32 bit integer in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromInt = fromInt;

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromNumber(value, unsigned) {
	        if (isNaN(value) || !isFinite(value))
	            return unsigned ? UZERO : ZERO;
	        if (unsigned) {
	            if (value < 0)
	                return UZERO;
	            if (value >= TWO_PWR_64_DBL)
	                return MAX_UNSIGNED_VALUE;
	        } else {
	            if (value <= -TWO_PWR_63_DBL)
	                return MIN_VALUE;
	            if (value + 1 >= TWO_PWR_63_DBL)
	                return MAX_VALUE;
	        }
	        if (value < 0)
	            return fromNumber(-value, unsigned).neg();
	        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	    }

	    /**
	     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	     * @function
	     * @param {number} value The number in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromNumber = fromNumber;

	    /**
	     * @param {number} lowBits
	     * @param {number} highBits
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromBits(lowBits, highBits, unsigned) {
	        return new Long(lowBits, highBits, unsigned);
	    }

	    /**
	     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	     *  assumed to use 32 bits.
	     * @function
	     * @param {number} lowBits The low 32 bits
	     * @param {number} highBits The high 32 bits
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromBits = fromBits;

	    /**
	     * @function
	     * @param {number} base
	     * @param {number} exponent
	     * @returns {number}
	     * @inner
	     */
	    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

	    /**
	     * @param {string} str
	     * @param {(boolean|number)=} unsigned
	     * @param {number=} radix
	     * @returns {!Long}
	     * @inner
	     */
	    function fromString(str, unsigned, radix) {
	        if (str.length === 0)
	            throw Error('empty string');
	        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	            return ZERO;
	        if (typeof unsigned === 'number') {
	            // For goog.math.long compatibility
	            radix = unsigned,
	            unsigned = false;
	        } else {
	            unsigned = !! unsigned;
	        }
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');

	        var p;
	        if ((p = str.indexOf('-')) > 0)
	            throw Error('interior hyphen');
	        else if (p === 0) {
	            return fromString(str.substring(1), unsigned, radix).neg();
	        }

	        // Do several (8) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 8));

	        var result = ZERO;
	        for (var i = 0; i < str.length; i += 8) {
	            var size = Math.min(8, str.length - i),
	                value = parseInt(str.substring(i, i + size), radix);
	            if (size < 8) {
	                var power = fromNumber(pow_dbl(radix, size));
	                result = result.mul(power).add(fromNumber(value));
	            } else {
	                result = result.mul(radixToPower);
	                result = result.add(fromNumber(value));
	            }
	        }
	        result.unsigned = unsigned;
	        return result;
	    }

	    /**
	     * Returns a Long representation of the given string, written using the specified radix.
	     * @function
	     * @param {string} str The textual representation of the Long
	     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromString = fromString;

	    /**
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	     * @returns {!Long}
	     * @inner
	     */
	    function fromValue(val) {
	        if (val /* is compatible */ instanceof Long)
	            return val;
	        if (typeof val === 'number')
	            return fromNumber(val);
	        if (typeof val === 'string')
	            return fromString(val);
	        // Throws for non-objects, converts non-instanceof Long:
	        return fromBits(val.low, val.high, val.unsigned);
	    }

	    /**
	     * Converts the specified value to a Long.
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	     * @returns {!Long}
	     */
	    Long.fromValue = fromValue;

	    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	    // no runtime penalty for these.

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_16_DBL = 1 << 16;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24_DBL = 1 << 24;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

	    /**
	     * @type {!Long}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ZERO = fromInt(0);

	    /**
	     * Signed zero.
	     * @type {!Long}
	     */
	    Long.ZERO = ZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UZERO = fromInt(0, true);

	    /**
	     * Unsigned zero.
	     * @type {!Long}
	     */
	    Long.UZERO = UZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ONE = fromInt(1);

	    /**
	     * Signed one.
	     * @type {!Long}
	     */
	    Long.ONE = ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UONE = fromInt(1, true);

	    /**
	     * Unsigned one.
	     * @type {!Long}
	     */
	    Long.UONE = UONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var NEG_ONE = fromInt(-1);

	    /**
	     * Signed negative one.
	     * @type {!Long}
	     */
	    Long.NEG_ONE = NEG_ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

	    /**
	     * Maximum signed value.
	     * @type {!Long}
	     */
	    Long.MAX_VALUE = MAX_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

	    /**
	     * Maximum unsigned value.
	     * @type {!Long}
	     */
	    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

	    /**
	     * Minimum signed value.
	     * @type {!Long}
	     */
	    Long.MIN_VALUE = MIN_VALUE;

	    /**
	     * @alias Long.prototype
	     * @inner
	     */
	    var LongPrototype = Long.prototype;

	    /**
	     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	     * @returns {number}
	     */
	    LongPrototype.toInt = function toInt() {
	        return this.unsigned ? this.low >>> 0 : this.low;
	    };

	    /**
	     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	     * @returns {number}
	     */
	    LongPrototype.toNumber = function toNumber() {
	        if (this.unsigned)
	            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	    };

	    /**
	     * Converts the Long to a string written in the specified radix.
	     * @param {number=} radix Radix (2-36), defaults to 10
	     * @returns {string}
	     * @override
	     * @throws {RangeError} If `radix` is out of range
	     */
	    LongPrototype.toString = function toString(radix) {
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        if (this.isZero())
	            return '0';
	        if (this.isNegative()) { // Unsigned Longs are never negative
	            if (this.eq(MIN_VALUE)) {
	                // We need to change the Long value before it can be negated, so we remove
	                // the bottom-most digit in this base and then recurse to do the rest.
	                var radixLong = fromNumber(radix),
	                    div = this.div(radixLong),
	                    rem1 = div.mul(radixLong).sub(this);
	                return div.toString(radix) + rem1.toInt().toString(radix);
	            } else
	                return '-' + this.neg().toString(radix);
	        }

	        // Do several (6) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	            rem = this;
	        var result = '';
	        while (true) {
	            var remDiv = rem.div(radixToPower),
	                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	                digits = intval.toString(radix);
	            rem = remDiv;
	            if (rem.isZero())
	                return digits + result;
	            else {
	                while (digits.length < 6)
	                    digits = '0' + digits;
	                result = '' + digits + result;
	            }
	        }
	    };

	    /**
	     * Gets the high 32 bits as a signed integer.
	     * @returns {number} Signed high bits
	     */
	    LongPrototype.getHighBits = function getHighBits() {
	        return this.high;
	    };

	    /**
	     * Gets the high 32 bits as an unsigned integer.
	     * @returns {number} Unsigned high bits
	     */
	    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	        return this.high >>> 0;
	    };

	    /**
	     * Gets the low 32 bits as a signed integer.
	     * @returns {number} Signed low bits
	     */
	    LongPrototype.getLowBits = function getLowBits() {
	        return this.low;
	    };

	    /**
	     * Gets the low 32 bits as an unsigned integer.
	     * @returns {number} Unsigned low bits
	     */
	    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	        return this.low >>> 0;
	    };

	    /**
	     * Gets the number of bits needed to represent the absolute value of this Long.
	     * @returns {number}
	     */
	    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	        if (this.isNegative()) // Unsigned Longs are never negative
	            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	        var val = this.high != 0 ? this.high : this.low;
	        for (var bit = 31; bit > 0; bit--)
	            if ((val & (1 << bit)) != 0)
	                break;
	        return this.high != 0 ? bit + 33 : bit + 1;
	    };

	    /**
	     * Tests if this Long's value equals zero.
	     * @returns {boolean}
	     */
	    LongPrototype.isZero = function isZero() {
	        return this.high === 0 && this.low === 0;
	    };

	    /**
	     * Tests if this Long's value is negative.
	     * @returns {boolean}
	     */
	    LongPrototype.isNegative = function isNegative() {
	        return !this.unsigned && this.high < 0;
	    };

	    /**
	     * Tests if this Long's value is positive.
	     * @returns {boolean}
	     */
	    LongPrototype.isPositive = function isPositive() {
	        return this.unsigned || this.high >= 0;
	    };

	    /**
	     * Tests if this Long's value is odd.
	     * @returns {boolean}
	     */
	    LongPrototype.isOdd = function isOdd() {
	        return (this.low & 1) === 1;
	    };

	    /**
	     * Tests if this Long's value is even.
	     * @returns {boolean}
	     */
	    LongPrototype.isEven = function isEven() {
	        return (this.low & 1) === 0;
	    };

	    /**
	     * Tests if this Long's value equals the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.equals = function equals(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	            return false;
	        return this.high === other.high && this.low === other.low;
	    };

	    /**
	     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.eq = LongPrototype.equals;

	    /**
	     * Tests if this Long's value differs from the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.notEquals = function notEquals(other) {
	        return !this.eq(/* validates */ other);
	    };

	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.neq = LongPrototype.notEquals;

	    /**
	     * Tests if this Long's value is less than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThan = function lessThan(other) {
	        return this.comp(/* validates */ other) < 0;
	    };

	    /**
	     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lt = LongPrototype.lessThan;

	    /**
	     * Tests if this Long's value is less than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	        return this.comp(/* validates */ other) <= 0;
	    };

	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lte = LongPrototype.lessThanOrEqual;

	    /**
	     * Tests if this Long's value is greater than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThan = function greaterThan(other) {
	        return this.comp(/* validates */ other) > 0;
	    };

	    /**
	     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gt = LongPrototype.greaterThan;

	    /**
	     * Tests if this Long's value is greater than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	        return this.comp(/* validates */ other) >= 0;
	    };

	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

	    /**
	     * Compares this Long's value with the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.compare = function compare(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.eq(other))
	            return 0;
	        var thisNeg = this.isNegative(),
	            otherNeg = other.isNegative();
	        if (thisNeg && !otherNeg)
	            return -1;
	        if (!thisNeg && otherNeg)
	            return 1;
	        // At this point the sign bits are the same
	        if (!this.unsigned)
	            return this.sub(other).isNegative() ? -1 : 1;
	        // Both are positive if at least one is unsigned
	        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	    };

	    /**
	     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.comp = LongPrototype.compare;

	    /**
	     * Negates this Long's value.
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.negate = function negate() {
	        if (!this.unsigned && this.eq(MIN_VALUE))
	            return MIN_VALUE;
	        return this.not().add(ONE);
	    };

	    /**
	     * Negates this Long's value. This is an alias of {@link Long#negate}.
	     * @function
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.neg = LongPrototype.negate;

	    /**
	     * Returns the sum of this and the specified Long.
	     * @param {!Long|number|string} addend Addend
	     * @returns {!Long} Sum
	     */
	    LongPrototype.add = function add(addend) {
	        if (!isLong(addend))
	            addend = fromValue(addend);

	        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = addend.high >>> 16;
	        var b32 = addend.high & 0xFFFF;
	        var b16 = addend.low >>> 16;
	        var b00 = addend.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 + b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 + b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 + b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 + b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the difference of this and the specified Long.
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.subtract = function subtract(subtrahend) {
	        if (!isLong(subtrahend))
	            subtrahend = fromValue(subtrahend);
	        return this.add(subtrahend.neg());
	    };

	    /**
	     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	     * @function
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.sub = LongPrototype.subtract;

	    /**
	     * Returns the product of this and the specified Long.
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.multiply = function multiply(multiplier) {
	        if (this.isZero())
	            return ZERO;
	        if (!isLong(multiplier))
	            multiplier = fromValue(multiplier);
	        if (multiplier.isZero())
	            return ZERO;
	        if (this.eq(MIN_VALUE))
	            return multiplier.isOdd() ? MIN_VALUE : ZERO;
	        if (multiplier.eq(MIN_VALUE))
	            return this.isOdd() ? MIN_VALUE : ZERO;

	        if (this.isNegative()) {
	            if (multiplier.isNegative())
	                return this.neg().mul(multiplier.neg());
	            else
	                return this.neg().mul(multiplier).neg();
	        } else if (multiplier.isNegative())
	            return this.mul(multiplier.neg()).neg();

	        // If both longs are small, use float multiplication
	        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

	        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	        // We can skip products that would overflow.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = multiplier.high >>> 16;
	        var b32 = multiplier.high & 0xFFFF;
	        var b16 = multiplier.low >>> 16;
	        var b00 = multiplier.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 * b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 * b00;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c16 += a00 * b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 * b00;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a16 * b16;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a00 * b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	     * @function
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.mul = LongPrototype.multiply;

	    /**
	     * Returns this Long divided by the specified. The result is signed if this Long is signed or
	     *  unsigned if this Long is unsigned.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.divide = function divide(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        if (divisor.isZero())
	            throw Error('division by zero');
	        if (this.isZero())
	            return this.unsigned ? UZERO : ZERO;
	        var approx, rem, res;
	        if (!this.unsigned) {
	            // This section is only relevant for signed longs and is derived from the
	            // closure library as a whole.
	            if (this.eq(MIN_VALUE)) {
	                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	                else if (divisor.eq(MIN_VALUE))
	                    return ONE;
	                else {
	                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                    var halfThis = this.shr(1);
	                    approx = halfThis.div(divisor).shl(1);
	                    if (approx.eq(ZERO)) {
	                        return divisor.isNegative() ? ONE : NEG_ONE;
	                    } else {
	                        rem = this.sub(divisor.mul(approx));
	                        res = approx.add(rem.div(divisor));
	                        return res;
	                    }
	                }
	            } else if (divisor.eq(MIN_VALUE))
	                return this.unsigned ? UZERO : ZERO;
	            if (this.isNegative()) {
	                if (divisor.isNegative())
	                    return this.neg().div(divisor.neg());
	                return this.neg().div(divisor).neg();
	            } else if (divisor.isNegative())
	                return this.div(divisor.neg()).neg();
	            res = ZERO;
	        } else {
	            // The algorithm below has not been made for unsigned longs. It's therefore
	            // required to take special care of the MSB prior to running it.
	            if (!divisor.unsigned)
	                divisor = divisor.toUnsigned();
	            if (divisor.gt(this))
	                return UZERO;
	            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	                return UONE;
	            res = UZERO;
	        }

	        // Repeat the following until the remainder is less than other:  find a
	        // floating-point that approximates remainder / other *from below*, add this
	        // into the result, and subtract it from the remainder.  It is critical that
	        // the approximate value is less than or equal to the real value so that the
	        // remainder never becomes negative.
	        rem = this;
	        while (rem.gte(divisor)) {
	            // Approximate the result of division. This may be a little greater or
	            // smaller than the actual value.
	            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

	            // We will tweak the approximate result by changing it in the 48-th digit or
	            // the smallest non-fractional digit, whichever is larger.
	            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

	            // Decrease the approximation until it is smaller than the remainder.  Note
	            // that if it is too large, the product overflows and is negative.
	                approxRes = fromNumber(approx),
	                approxRem = approxRes.mul(divisor);
	            while (approxRem.isNegative() || approxRem.gt(rem)) {
	                approx -= delta;
	                approxRes = fromNumber(approx, this.unsigned);
	                approxRem = approxRes.mul(divisor);
	            }

	            // We know the answer can't be zero... and actually, zero would cause
	            // infinite recursion since we would make no progress.
	            if (approxRes.isZero())
	                approxRes = ONE;

	            res = res.add(approxRes);
	            rem = rem.sub(approxRem);
	        }
	        return res;
	    };

	    /**
	     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.div = LongPrototype.divide;

	    /**
	     * Returns this Long modulo the specified.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.modulo = function modulo(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        return this.sub(this.div(divisor).mul(divisor));
	    };

	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.mod = LongPrototype.modulo;

	    /**
	     * Returns the bitwise NOT of this Long.
	     * @returns {!Long}
	     */
	    LongPrototype.not = function not() {
	        return fromBits(~this.low, ~this.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise AND of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.and = function and(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise OR of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.or = function or(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise XOR of this Long and the given one.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.xor = function xor(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftLeft = function shiftLeft(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	        else
	            return fromBits(0, this.low << (numBits - 32), this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shl = LongPrototype.shiftLeft;

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRight = function shiftRight(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	        else
	            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr = LongPrototype.shiftRight;

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        numBits &= 63;
	        if (numBits === 0)
	            return this;
	        else {
	            var high = this.high;
	            if (numBits < 32) {
	                var low = this.low;
	                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	            } else if (numBits === 32)
	                return fromBits(high, 0, this.unsigned);
	            else
	                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	        }
	    };

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

	    /**
	     * Converts this Long to signed.
	     * @returns {!Long} Signed long
	     */
	    LongPrototype.toSigned = function toSigned() {
	        if (!this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, false);
	    };

	    /**
	     * Converts this Long to unsigned.
	     * @returns {!Long} Unsigned long
	     */
	    LongPrototype.toUnsigned = function toUnsigned() {
	        if (this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, true);
	    };

	    /**
	     * Converts this Long to its byte representation.
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {!Array.<number>} Byte representation
	     */
	    LongPrototype.toBytes = function(le) {
	        return le ? this.toBytesLE() : this.toBytesBE();
	    }

	    /**
	     * Converts this Long to its little endian byte representation.
	     * @returns {!Array.<number>} Little endian byte representation
	     */
	    LongPrototype.toBytesLE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	             lo         & 0xff,
	            (lo >>>  8) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>> 24) & 0xff,
	             hi         & 0xff,
	            (hi >>>  8) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>> 24) & 0xff
	        ];
	    }

	    /**
	     * Converts this Long to its big endian byte representation.
	     * @returns {!Array.<number>} Big endian byte representation
	     */
	    LongPrototype.toBytesBE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	            (hi >>> 24) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>>  8) & 0xff,
	             hi         & 0xff,
	            (lo >>> 24) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>>  8) & 0xff,
	             lo         & 0xff
	        ];
	    }

	    return Long;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var mqProto = {
	        "package": "mq",
	        "messages": [
	            {
	                "name": "Request",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "requestId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "type",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "encoding",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "bytes",
	                        "name": "payload",
	                        "id": 5
	                    }
	                ]
	            },
	            {
	                "name": "Response",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "requestId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "type",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "encoding",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "bytes",
	                        "name": "payload",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "double",
	                        "name": "wallTime",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "Error",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "PingPong",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "originTimestamp",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint64",
	                        "name": "count",
	                        "id": 2
	                    }
	                ]
	            }
	        ]
	    };

	    return mqProto;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var pcastProto = {
	        "package": "pcast",
	        "messages": [
	            {
	                "name": "Authenticate",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 9,
	                        "options": {
	                            "default": 0
	                        }
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "clientVersion",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "device",
	                        "id": 12
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "deviceId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "manufacturer",
	                        "id": 13
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "platform",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "platformVersion",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "authenticationToken",
	                        "id": 5
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "connectionId",
	                        "id": 6
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "connectionRouteKey",
	                        "id": 10
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "remoteAddress",
	                        "id": 11
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 7
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 8
	                    }
	                ]
	            },
	            {
	                "name": "AuthenticateResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "redirect",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "roles",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "Bye",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "ByeResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "SessionDescription",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "Type",
	                        "name": "type",
	                        "id": 1,
	                        "options": {
	                            "default": "Offer"
	                        }
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sdp",
	                        "id": 2
	                    }
	                ],
	                "enums": [
	                    {
	                        "name": "Type",
	                        "values": [
	                            {
	                                "name": "Offer",
	                                "id": 0
	                            },
	                            {
	                                "name": "Answer",
	                                "id": 1
	                            }
	                        ]
	                    }
	                ]
	            },
	            {
	                "name": "CreateStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "originStreamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "connectUri",
	                        "id": 8
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "connectOptions",
	                        "id": 9
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "SetRemoteDescription",
	                        "name": "setRemoteDescription",
	                        "id": 5
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "CreateOfferDescription",
	                        "name": "createOfferDescription",
	                        "id": 6
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "CreateAnswerDescription",
	                        "name": "createAnswerDescription",
	                        "id": 7
	                    }
	                ]
	            },
	            {
	                "name": "CreateStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "instanceRouteKey",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "streamUris",
	                        "id": 8
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "SetRemoteDescriptionResponse",
	                        "name": "setRemoteDescriptionResponse",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "CreateOfferDescriptionResponse",
	                        "name": "createOfferDescriptionResponse",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "CreateAnswerDescriptionResponse",
	                        "name": "createAnswerDescriptionResponse",
	                        "id": 6
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 7
	                    }
	                ]
	            },
	            {
	                "name": "SetLocalDescription",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "SessionDescription",
	                        "name": "sessionDescription",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 3,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "SetLocalDescriptionResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "SetRemoteDescription",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "SessionDescription",
	                        "name": "sessionDescription",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 3,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "SetRemoteDescriptionResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "SessionDescription",
	                        "name": "sessionDescription",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "CreateOfferDescription",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 3,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "CreateOfferDescriptionResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "SessionDescription",
	                        "name": "sessionDescription",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "CreateAnswerDescription",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 3,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "CreateAnswerDescriptionResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "SessionDescription",
	                        "name": "sessionDescription",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "IceCandidate",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "candidate",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint32",
	                        "name": "sdpMLineIndex",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sdpMid",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "AddIceCandidates",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "IceCandidate",
	                        "name": "candidates",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 4,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "AddIceCandidatesResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "UpdateStreamState",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "signalingState",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "iceGatheringState",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "iceConnectionState",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 5,
	                        "options": {
	                            "default": 0
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "UpdateStreamStateResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "DestroyStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "DestroyStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "ArchiveStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "ArchiveStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "uri",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "ConnectionDisconnected",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "connectionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint32",
	                        "name": "reasonCode",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "description",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "ConnectionDisconnectedResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "StreamStarted",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "SourceStreamStarted",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "capabilities",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "StreamEnded",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "SourceStreamEnded",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "capabilities",
	                        "id": 4
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 5
	                    }
	                ]
	            },
	            {
	                "name": "StreamEndedResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "StreamIdle",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "StreamArchived",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "uri",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "SessionEnded",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "float",
	                        "name": "duration",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "ForwardToClient",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "connectionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "type",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "bytes",
	                        "name": "payload",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "ForwardToClientResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "SetupStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamToken",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "CreateStream",
	                        "name": "createStream",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "SetupStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "CreateStreamResponse",
	                        "name": "createStreamResponse",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "SetupPlaylistStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamToken",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "tags",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "PlaylistStreamManifest",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "manifest",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "SetupPlaylistStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "PlaylistStreamManifest",
	                        "name": "manifests",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "StreamDataQuality",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "DataQualityStatus",
	                        "name": "status",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "DataQualityReason",
	                        "name": "reason",
	                        "id": 5
	                    }
	                ],
	                "enums": [
	                    {
	                        "name": "DataQualityStatus",
	                        "values": [
	                            {
	                                "name": "NoData",
	                                "id": 0
	                            },
	                            {
	                                "name": "AudioOnly",
	                                "id": 1
	                            },
	                            {
	                                "name": "All",
	                                "id": 2
	                            }
	                        ]
	                    },
	                    {
	                        "name": "DataQualityReason",
	                        "values": [
	                            {
	                                "name": "None",
	                                "id": 0
	                            },
	                            {
	                                "name": "UploadLimited",
	                                "id": 1
	                            },
	                            {
	                                "name": "DownloadLimited",
	                                "id": 2
	                            },
	                            {
	                                "name": "PublisherLimited",
	                                "id": 3
	                            },
	                            {
	                                "name": "NetworkLimited",
	                                "id": 4
	                            }
	                        ]
	                    }
	                ]
	            },
	            {
	                "name": "StreamDataQualityResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "CallbackEvent",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "apiVersion",
	                        "id": 1,
	                        "options": {
	                            "default": 0
	                        }
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "entity",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "what",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "data",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 5
	                    }
	                ]
	            },
	            {
	                "name": "Uri",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "protocol",
	                        "id": 1,
	                        "options": {
	                            "default": "http"
	                        }
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "host",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "port",
	                        "id": 3,
	                        "options": {
	                            "default": 80
	                        }
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "method",
	                        "id": 4,
	                        "options": {
	                            "default": "POST"
	                        }
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "path",
	                        "id": 5,
	                        "options": {
	                            "default": "/"
	                        }
	                    }
	                ]
	            },
	            {
	                "name": "SetApplicationCallback",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "Uri",
	                        "name": "callback",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "SetApplicationCallbackResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "IssueAuthenticationToken",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "capabilities",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "IssueAuthenticationTokenResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "authenticationToken",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "IssueStreamToken",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "originStreamId",
	                        "id": 4
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "capabilities",
	                        "id": 5
	                    }
	                ]
	            },
	            {
	                "name": "IssueStreamTokenResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "streamToken",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "TerminateStream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "reason",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "TerminateStreamResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "Stream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "streamId",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "ListStreams",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "start",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint32",
	                        "name": "length",
	                        "id": 4
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 5
	                    }
	                ]
	            },
	            {
	                "name": "ListStreamsResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "start",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint32",
	                        "name": "length",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Stream",
	                        "name": "streams",
	                        "id": 4
	                    }
	                ]
	            }
	        ]
	    };

	    return pcastProto;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var chatProto = {
	        "package": "chat",
	        "messages": [
	            {
	                "name": "Room",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "alias",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "name",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "description",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "RoomType",
	                        "name": "type",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 6
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "bridgeId",
	                        "id": 7
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "pin",
	                        "id": 8
	                    }
	                ]
	            },
	            {
	                "name": "Stream",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "StreamType",
	                        "name": "type",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "uri",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "TrackState",
	                        "name": "audioState",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "TrackState",
	                        "name": "videoState",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "Member",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "screenName",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "MemberRole",
	                        "name": "role",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Stream",
	                        "name": "streams",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "MemberState",
	                        "name": "state",
	                        "id": 5
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "lastUpdate",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "MemberUpdate",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "screenName",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "MemberRole",
	                        "name": "role",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "bool",
	                        "name": "updateStreams",
	                        "id": 7,
	                        "options": {
	                            "default": false
	                        }
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Stream",
	                        "name": "streams",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "MemberState",
	                        "name": "state",
	                        "id": 5
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "lastUpdate",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "ChatUser",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "screenName",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "MemberRole",
	                        "name": "role",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "lastUpdate",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "ChatMessage",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "messageId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "ChatUser",
	                        "name": "from",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "message",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "CreateRoom",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "CreateRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "JoinRoom",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "alias",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "Member",
	                        "name": "member",
	                        "id": 4
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 5
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "JoinRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Member",
	                        "name": "members",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "UpdateRoom",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "UpdateRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "UpdateMember",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "MemberUpdate",
	                        "name": "member",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 3
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "UpdateMemberResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "uint64",
	                        "name": "lastUpdate",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "LeaveRoom",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "LeaveRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "DestroyRoom",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "DestroyRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "GetRoomInfo",
	                "fields": [
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "alias",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "applicationId",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "secret",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "GetRoomInfoResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 2
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Member",
	                        "name": "members",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "RoomEvent",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "RoomEventType",
	                        "name": "eventType",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "Member",
	                        "name": "members",
	                        "id": 4
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "Room",
	                        "name": "room",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "string",
	                        "name": "options",
	                        "id": 6
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint64",
	                        "name": "timestamp",
	                        "id": 7
	                    }
	                ]
	            },
	            {
	                "name": "SendMessageToRoom",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "ChatMessage",
	                        "name": "chatMessage",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "SendMessageToRoomResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    }
	                ]
	            },
	            {
	                "name": "FetchRoomConversation",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "afterMessageId",
	                        "id": 3
	                    },
	                    {
	                        "rule": "optional",
	                        "type": "string",
	                        "name": "beforeMessageId",
	                        "id": 4
	                    },
	                    {
	                        "rule": "required",
	                        "type": "uint32",
	                        "name": "limit",
	                        "id": 5
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "RoomConversationOption",
	                        "name": "options",
	                        "id": 6
	                    }
	                ]
	            },
	            {
	                "name": "FetchRoomConversationResponse",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "status",
	                        "id": 1
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "ChatMessage",
	                        "name": "chatMessages",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "RoomConversationEvent",
	                "fields": [
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "sessionId",
	                        "id": 1
	                    },
	                    {
	                        "rule": "required",
	                        "type": "string",
	                        "name": "roomId",
	                        "id": 2
	                    },
	                    {
	                        "rule": "required",
	                        "type": "RoomConversationEventType",
	                        "name": "eventType",
	                        "id": 3
	                    },
	                    {
	                        "rule": "repeated",
	                        "type": "ChatMessage",
	                        "name": "chatMessages",
	                        "id": 4
	                    }
	                ]
	            }
	        ],
	        "enums": [
	            {
	                "name": "RoomType",
	                "values": [
	                    {
	                        "name": "DirectChat",
	                        "id": 0
	                    },
	                    {
	                        "name": "MultiPartyChat",
	                        "id": 1
	                    },
	                    {
	                        "name": "ModeratedChat",
	                        "id": 2
	                    },
	                    {
	                        "name": "TownHall",
	                        "id": 3
	                    },
	                    {
	                        "name": "Channel",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "MemberRole",
	                "values": [
	                    {
	                        "name": "Participant",
	                        "id": 0
	                    },
	                    {
	                        "name": "Moderator",
	                        "id": 1
	                    },
	                    {
	                        "name": "Presenter",
	                        "id": 2
	                    },
	                    {
	                        "name": "Audience",
	                        "id": 3
	                    }
	                ]
	            },
	            {
	                "name": "MemberState",
	                "values": [
	                    {
	                        "name": "Active",
	                        "id": 0
	                    },
	                    {
	                        "name": "Passive",
	                        "id": 1
	                    },
	                    {
	                        "name": "HandRaised",
	                        "id": 2
	                    },
	                    {
	                        "name": "Inactive",
	                        "id": 3
	                    },
	                    {
	                        "name": "Offline",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "RoomEventType",
	                "values": [
	                    {
	                        "name": "MemberJoined",
	                        "id": 0
	                    },
	                    {
	                        "name": "MemberLeft",
	                        "id": 1
	                    },
	                    {
	                        "name": "MemberUpdated",
	                        "id": 2
	                    },
	                    {
	                        "name": "RoomUpdated",
	                        "id": 3
	                    },
	                    {
	                        "name": "RoomEnded",
	                        "id": 4
	                    }
	                ]
	            },
	            {
	                "name": "TrackState",
	                "values": [
	                    {
	                        "name": "TrackEnabled",
	                        "id": 0
	                    },
	                    {
	                        "name": "TrackDisabled",
	                        "id": 1
	                    },
	                    {
	                        "name": "TrackEnded",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "StreamType",
	                "values": [
	                    {
	                        "name": "User",
	                        "id": 0
	                    },
	                    {
	                        "name": "Presentation",
	                        "id": 1
	                    },
	                    {
	                        "name": "Audio",
	                        "id": 2
	                    }
	                ]
	            },
	            {
	                "name": "RoomConversationOption",
	                "values": [
	                    {
	                        "name": "Subscribe",
	                        "id": 0
	                    }
	                ]
	            },
	            {
	                "name": "RoomConversationEventType",
	                "values": [
	                    {
	                        "name": "Message",
	                        "id": 0
	                    }
	                ]
	            }
	        ]
	    };

	    return chatProto;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(20),
	    __webpack_require__(21)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (Http, ClosestEndPointResolver) {
	    'use strict';

	    var maxAttempts = 3;

	    function PCastEndPoint(version, baseUri, logger) {
	        if (typeof version !== 'string') {
	            throw new Error('Must pass a valid "version"');
	        }
	        if (typeof baseUri !== 'string') {
	            throw new Error('Must pass a valid "baseUri"');
	        }
	        if (typeof logger !== 'object') {
	            throw new Error('Must pass a valid "logger"');
	        }

	        this._version = version;
	        this._baseUri = baseUri;
	        this._logger = logger;
	        this._http = new Http(version, baseUri, logger);
	    }

	    PCastEndPoint.DefaultPCastUri = 'https://pcast.phenixp2p.com';

	    PCastEndPoint.prototype.getBaseUri = function () {
	        return this._baseUri;
	    };

	    PCastEndPoint.prototype.resolveUri = function (callback /* (error, uri) */) {
	        return resolveUri.call(this, this._baseUri, callback);
	    };

	    PCastEndPoint.prototype.toString = function () {
	        return 'PCastEndPoint[' + this._baseUri + ']';
	    };

	    function resolveUri(baseUri, callback /* (error, uri) */) {
	        if (baseUri.lastIndexOf('wss:', 0) === 0) {
	            // WSS - Specific web socket end point
	            callback(undefined, baseUri + '/ws');
	        } else if (baseUri.lastIndexOf('https:', 0) === 0) {
	            // HTTP - Resolve closest end point
	            var that = this;

	            getEndpoints.call(that, baseUri, function(err, endPoints) {
	                if (err) {
	                    return callback(err);
	                }

	                var closestEndPointResolver = new ClosestEndPointResolver(callback, that._version, that._baseUri, that._logger);

	                closestEndPointResolver.resolveAll(endPoints);
	            });
	        } else {
	            // Not supported
	            callback(new Error('Uri not supported'));
	        }
	    }

	    function getEndpoints(baseUri, callback) {
	        this._http.httpGetWithRetry(baseUri + '/pcast/endPoints', function (err, responseText) {
	            if (err) {
	                return callback(new Error('Failed to resolve an end point', err));
	            }

	            var endPoints = responseText.split(',');

	            if (endPoints.length < 1) {
	                callback(new Error('Failed to discover end points'));
	            }

	            callback(undefined, endPoints);
	        }, maxAttempts);
	    }

	    return PCastEndPoint;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    function Http(version, baseUri, logger) {
	        if (typeof version !== 'string') {
	            throw new Error('Must pass a valid "version"');
	        }
	        if (typeof baseUri !== 'string') {
	            throw new Error('Must pass a valid "baseUri"');
	        }
	        if (typeof logger !== 'object') {
	            throw new Error('Must pass a valid "logger"');
	        }

	        this._version = version;
	        this._baseUri = baseUri;
	        this._logger = logger;
	    }

	    Http.prototype.httpGetWithRetry = function httpGetWithRetry(url, callback, maxAttempts, attempt) {
	        if (attempt === undefined) {
	            attempt = 1;
	        }

	        var that = this;
	        var xhr = new XMLHttpRequest();
	        var requestMethod = 'GET';
	        var requestUrl = url + '?version=' + encodeURIComponent(that._version) + '&_=' + _.now();

	        if ('withCredentials' in xhr) {
	            // Most browsers.
	            xhr.open(requestMethod, requestUrl, true);
	        } else if (typeof XDomainRequest != 'undefined') {
	            // IE8 & IE9
	            xhr = new XDomainRequest();
	            xhr.open(requestMethod, requestUrl);
	        } else {
	            // CORS not supported.
	            var err = new Error('unsupported');

	            err.code = 'unsupported';

	            callback(err);
	        }

	        xhr.addEventListener('readystatechange', function () {
	            if (xhr.readyState === 4 /* DONE */) {
	                if (xhr.status === 200) {
	                    callback(undefined, xhr.responseText);
	                } else if (xhr.status >= 500 && xhr.status < 600 && attempt <= maxAttempts) {
	                    httpGetWithRetry.call(that, url, callback, maxAttempts, attempt + 1);
	                } else {
	                    that._logger.info('HTTP GET [%s] failed with [%s] [%s]', url, xhr.status, xhr.statusText);

	                    var err = new Error(xhr.status === 0 ? 'timeout' : xhr.statusText);

	                    err.code = xhr.status;

	                    callback(err);
	                }
	            }
	        });

	        xhr.timeout = 15000;

	        xhr.send();
	    };

	    return Http;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(20)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, Http) {
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
	            var start = _.now();

	            that._logger.info('[%s] Checking end point [%s]', measurement, endPoint);

	            that._http.httpGetWithRetry.call(that, endPoint, function (err, responseText) {
	                var end = _.now();
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, phenixRTC) {
	    'use strict';

	    var defaultMonitoringInterval = 4000;
	    var defaultConditionMonitoringInterval = 1500;
	    var defaultFrameRateThreshold = 2;
	    var defaultAudioBitRateThreshold = 5000;
	    var defaultVideoBitRateThreshold = 6000;
	    var defaultConditionCountForNotificationThreshold = 3;

	    function PeerConnectionMonitor(name, peerConnection, logger) {
	        if (typeof name !== 'string') {
	            throw new Error('Must pass a valid "name"');
	        }
	        if (typeof peerConnection !== 'object') {
	            throw new Error('Must pass a valid "peerConnection"');
	        }
	        if (typeof logger !== 'object') {
	            throw new Error('Must pass a valid "logger"');
	        }
	        this._name = name;
	        this._peerConnection = peerConnection;
	        this._logger = logger;
	    }

	    PeerConnectionMonitor.prototype.start = function (options, activeCallback, monitorCallback) {
	        return monitorPeerConnection.call(this, this._name, this._peerConnection, options, activeCallback, monitorCallback);
	    };

	    PeerConnectionMonitor.prototype.toString = function () {
	        return 'PeerConnectionMonitor[]';
	    };


	    function monitorPeerConnection(name, peerConnection, options, activeCallback, monitorCallback) {
	        if (typeof name !== 'string') {
	            throw new Error('Must pass a valid "name"');
	        }
	        if (typeof peerConnection !== 'object') {
	            throw new Error('Must pass a valid "peerConnection"');
	        }
	        if (typeof options !== 'object') {
	            throw new Error('Must pass a valid "options"');
	        }
	        if (typeof activeCallback !== 'function') {
	            throw new Error('Must pass a valid "activeCallback"');
	        }
	        if (typeof monitorCallback !== 'function') {
	            throw new Error('Must pass a valid "monitorCallback"');
	        }
	        if (options.direction !== 'inbound' && options.direction !== 'outbound') {
	            throw new Error('Invalid monitoring direction');
	        }

	        var that = this;
	        var conditionCount = 0;
	        var frameRate = undefined;
	        var videoBitRate = undefined;
	        var audioBitRate = undefined;
	        var lastVideoBytes = {time: _.now(), value: 0};
	        var lastAudioBytes = {time: _.now(), value: 0};
	        var frameRateFailureThreshold = options.frameRateThreshold || defaultFrameRateThreshold;
	        var videoBitRateFailureThreshold = options.videoBitRateThreshold || defaultVideoBitRateThreshold;
	        var audioBitRateFailureThreshold = options.audioBitRateThreshold || defaultAudioBitRateThreshold;
	        var conditionCountForNotificationThreshold = options.conditionCountForNotificationThreshold || defaultConditionCountForNotificationThreshold;
	        var monitoringInterval = options.monitoringInterval || defaultMonitoringInterval;
	        var conditionMonitoringInterval = options.monitoringInterval || defaultConditionMonitoringInterval;
	        var monitorFrameRate = options.hasOwnProperty('monitorFrameRate') ? options.monitorFrameRate : true;
	        var monitorBitRate = options.hasOwnProperty('monitorBitRate') ? options.monitorBitRate : true;
	        var monitorState = options.hasOwnProperty('monitorState') ? options.monitorState : true;

	        function nextCheck() {
	            var selector = null;

	            getStats(peerConnection, selector, function successCallback(report) {
	                var hasFrameRate = false;
	                var hasVideoBitRate = false;
	                var hasAudioBitRate = false;
	                var readable = false;
	                var writable = false;

	                function eachStats(stats, reportId) {
	                    switch (phenixRTC.browser) {
	                        case 'Firefox':
	                            writable = readable |= stats.selected && stats.state === 'succeeded';

	                            if (options.direction === 'outbound' && stats.type === 'outboundrtp') {
	                                var currentBytes = {
	                                    time: _.now(),
	                                    value: stats.bytesSent || 0
	                                };

	                                switch (stats.mediaType) {
	                                    case 'video':
	                                        that._logger.debug('[%s] Outbound [%s] [%s] with bitrate [%s], droppedFrames [%s] and frame rate [%s]',
	                                            name, stats.mediaType, stats.ssrc, stats.bitrateMean, stats.droppedFrames, stats.framerateMean);
	                                        hasFrameRate = true;
	                                        frameRate = stats.framerateMean || 0;
	                                        hasVideoBitRate = true;
	                                        videoBitRate = calculateBitRate(currentBytes, lastVideoBytes);
	                                        lastVideoBytes = currentBytes;
	                                        break;
	                                    case 'audio':
	                                        that._logger.debug('[%s] Outbound [%s] [%s]',
	                                            name, stats.mediaType, stats.ssrc);
	                                        hasAudioBitRate = true;
	                                        audioBitRate = calculateBitRate(currentBytes, lastAudioBytes);
	                                        lastAudioBytes = currentBytes;
	                                        break;
	                                }
	                            }
	                            if (options.direction === 'inbound' && stats.type === 'inboundrtp') {
	                                var currentBytes = {
	                                    time: _.now(),
	                                    value: stats.bytesReceived || 0
	                                };

	                                switch (stats.mediaType) {
	                                    case 'video':
	                                        that._logger.debug('[%s] Inbound [%s] [%s] with framerate [%s] and jitter [%s]',
	                                            name, stats.mediaType, stats.ssrc, stats.framerateMean, stats.jitter);

	                                        // Inbound frame rate is not calculated correctly
	                                        // hasFrameRate = true;
	                                        // frameRate = stats.framerateMean || 0;
	                                        hasVideoBitRate = true;
	                                        videoBitRate = calculateBitRate(currentBytes, lastVideoBytes);
	                                        lastVideoBytes = currentBytes;
	                                        break;
	                                    case 'audio':
	                                        that._logger.debug('[%s] Inbound [%s] [%s] with jitter [%s]',
	                                            name, stats.mediaType, stats.ssrc, stats.jitter);
	                                        hasAudioBitRate = true;
	                                        audioBitRate = calculateBitRate(currentBytes, lastAudioBytes);
	                                        lastAudioBytes = currentBytes;
	                                        break;
	                                }
	                            }
	                            break;
	                        default:
	                            if (stats.googWritable === 'true') {
	                                writable = true;
	                            }
	                            if (stats.googReadable === 'true') {
	                                readable = true;
	                            }
	                            if (stats.type !== 'ssrc') {
	                                return;
	                            }
	                            if (options.direction === 'outbound') {
	                                var currentBytes = {
	                                    time: _.now(),
	                                    value: stats.bytesSent || 0
	                                };

	                                switch (stats.mediaType) {
	                                    case 'video':
	                                        that._logger.debug('[%s] Outbound [%s] [%s] with average encoding time [%s] ms (CPU limited=[%s]) and RTT [%s]',
	                                            name, stats.mediaType, stats.ssrc, stats.googAvgEncodeMs, stats.googCpuLimitedResolution, stats.googRtt);
	                                        hasFrameRate = true;
	                                        frameRate = stats.googFrameRateSent || 0;
	                                        hasVideoBitRate = true;
	                                        videoBitRate = calculateBitRate(currentBytes, lastVideoBytes);
	                                        lastVideoBytes = currentBytes;
	                                        break;
	                                    case 'audio':
	                                        that._logger.debug('[%s] Outbound [%s] [%s] with audio input level [%s] and RTT [%s] and jitter [%s]',
	                                            name, stats.mediaType, stats.ssrc, stats.audioInputLevel, stats.googRtt, stats.googJitterReceived);
	                                        hasAudioBitRate = true;
	                                        audioBitRate = calculateBitRate(currentBytes, lastAudioBytes);
	                                        lastAudioBytes = currentBytes;
	                                        break;
	                                }
	                            } else if (options.direction === 'inbound') {
	                                var currentBytes = {
	                                    time: _.now(),
	                                    value: stats.bytesReceived || 0
	                                };

	                                switch (stats.mediaType) {
	                                    case 'video':
	                                        that._logger.debug('[%s] Inbound [%s] [%s] with current delay [%s] ms and target delay [%s] ms',
	                                            name, stats.mediaType, stats.ssrc, stats.googCurrentDelayMs, stats.googTargetDelayMs);
	                                        hasFrameRate = true;
	                                        frameRate = stats.googFrameRateReceived || 0;
	                                        hasVideoBitRate = true;
	                                        videoBitRate = calculateBitRate(currentBytes, lastVideoBytes);
	                                        lastVideoBytes = currentBytes;
	                                        break;
	                                    case 'audio':
	                                        that._logger.debug('[%s] Inbound [%s] [%s] with output level [%s] and jitter [%s] and jitter buffer [%s] ms',
	                                            name, stats.mediaType, stats.ssrc, stats.audioOutputLevel, stats.googJitterReceived, stats.googJitterBufferMs);
	                                        hasAudioBitRate = true;
	                                        audioBitRate = calculateBitRate(currentBytes, lastAudioBytes);
	                                        lastAudioBytes = currentBytes;
	                                        break;
	                                }
	                            }
	                            break;
	                    }
	                }

	                if (report.forEach) {
	                    report.forEach(eachStats);
	                } else {
	                    for (var reportId in report) {
	                        var stats = report[reportId];

	                        eachStats(stats, reportId);
	                    }
	                }

	                if (hasVideoBitRate && videoBitRate === 0 || hasAudioBitRate && audioBitRate === 0 || hasFrameRate && frameRate === 0) {
	                    var medias = getMedias.call(that, peerConnection);

	                    hasVideoBitRate = hasVideoBitRate && medias.video && medias.video.enabled !== false;
	                    hasAudioBitRate = hasAudioBitRate && medias.audio && medias.audio.enabled !== false;
	                    hasFrameRate = hasFrameRate && medias.video && medias.video.enabled !== false;

	                    readable = readable || !(medias.video && medias.video.enabled !== false || medias.audio && medias.audio.enabled !== false);
	                    writable = writable || !(medias.video && medias.video.enabled !== false || medias.audio && medias.audio.enabled !== false);
	                }

	                if (hasAudioBitRate || hasVideoBitRate || hasFrameRate) {
	                    that._logger.debug('[%s] Current bit rate is [%s] bps for audio and [%s] bps for video with [%s] FPS',
	                        name, Math.ceil(audioBitRate || 0), Math.ceil(videoBitRate || 0), frameRate || '?');
	                }

	                if (!activeCallback()) {
	                    that._logger.info('[%s] Finished monitoring of peer connection', name);
	                    return;
	                }

	                if (monitorState
	                    && (peerConnection.connectionState === 'closed'
	                    || peerConnection.connectionState === 'failed'
	                    || peerConnection.iceConnectionState === 'failed')) {
	                    var medias = getMedias.call(that, peerConnection);
	                    var active = 0;
	                    var inactive = 0;

	                    for (var id in medias) {
	                        var media = medias[id];

	                        if (media && media.enabled !== false) {
	                            active++;
	                        } else {
	                            inactive++;
	                        }
	                    }

	                    if (active === 0 && inactive > 0) {
	                        that._logger.info('[%s] Finished monitoring of peer connection with [%s] inactive tracks', name, inactive);
	                        return;
	                    }

	                    conditionCount++;
	                } else if (monitorFrameRate && hasFrameRate && frameRate <= frameRateFailureThreshold) {
	                    conditionCount++;
	                } else if (monitorBitRate && hasAudioBitRate && audioBitRate <= audioBitRateFailureThreshold) {
	                    conditionCount++;
	                } else if (monitorBitRate && hasVideoBitRate && videoBitRate <= videoBitRateFailureThreshold) {
	                    conditionCount++;
	                } else if (!readable || !writable) {
	                    conditionCount++;
	                } else {
	                    conditionCount = 0;
	                }

	                if (conditionCount >= conditionCountForNotificationThreshold) {
	                    if (!monitorCallback('condition', frameRate, videoBitRate, audioBitRate)) {
	                        that._logger.error('[%s] Failure detected with frame rate [%s] FPS and bit rate [%s/%s] bps: [%s]', name, frameRate, audioBitRate, videoBitRate, report);
	                    } else {
	                        // Failure is acknowledged and muted
	                        conditionCount = Number.MIN_VALUE;
	                        setTimeout(nextCheck, monitoringInterval);
	                    }
	                } else {
	                    setTimeout(nextCheck, conditionCount > 0 ? conditionMonitoringInterval : monitoringInterval);
	                }
	            }, function errorCallback(error) {
	                monitorCallback('error', error);
	            });
	        }

	        setTimeout(nextCheck, monitoringInterval);
	    }

	    function normalizeStatsReport(response) {
	        if (phenixRTC.browser === 'Firefox') {
	            return response;
	        }

	        var normalizedReport = {};

	        response.result().forEach(function (report) {
	            var normalizedStatistics = {
	                id: report.id,
	                type: report.type
	            };

	            report.names().forEach(function (name) {
	                normalizedStatistics[name] = report.stat(name);
	            });

	            normalizedReport[normalizedStatistics.id] = normalizedStatistics;
	        });

	        return normalizedReport;
	    }

	    function getStats(peerConnection, selector, successCallback, monitorCallback) {
	        switch (phenixRTC.browser) {
	            case  'Firefox':
	                return peerConnection.getStats(selector)
	                    .then(function (response) {
	                        var report = normalizeStatsReport(response);

	                        successCallback(report);
	                    }).catch(function (e) {
	                        monitorCallback('error', e);
	                    });
	            default:
	                return peerConnection.getStats(function (response) {
	                    var report = normalizeStatsReport(response);

	                    successCallback(report);
	                }, selector, function (e) {
	                    monitorCallback('error', e);
	                });
	        }
	    }

	    function getMedias(peerConnection) {
	        var medias = {};
	        var localSections = peerConnection.localDescription.sdp.split('m=');
	        var remoteSections = peerConnection.remoteDescription.sdp.split('m=');

	        if (localSections.length !== remoteSections.length) {
	            return {};
	        }

	        for (var i = 1; i < localSections.length; i++) {
	            var section = localSections[i];

	            if (section.startsWith('audio')) {
	                medias.audio = {
	                    enabled: section.indexOf('a=inactive') === -1 && remoteSections[i].indexOf('a=inactive') === -1
	                }
	            } else if (section.startsWith('video')) {
	                medias.video = {
	                    enabled: section.indexOf('a=inactive') === -1 && remoteSections[i].indexOf('a=inactive') === -1
	                }
	            }
	        }

	        return medias;
	    }

	    function calculateBitRate(currentBytes, lastBytes) {
	        return (8 * (currentBytes.value - lastBytes.value))
	            / ((currentBytes.time - lastBytes.time) / 1000.0);
	    }

	    return PeerConnectionMonitor;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(27),
	    __webpack_require__(4),
	    __webpack_require__(34),
	    __webpack_require__(25),
	    __webpack_require__(28),
	    __webpack_require__(36),
	    __webpack_require__(33),
	    __webpack_require__(32)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, ObservableArray, Logger, AuthenticationService, Room, Member, RoomChatService, room, member) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(27),
	    __webpack_require__(28),
	    __webpack_require__(33)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, ObservableArray, Member, room) {
	    'use strict';
	    var roomTypes = room.types;

	    function Room(id, alias, name, description, type, members, bridgeId, pin, roomService) {
	        this.init(id, alias, name, description, type, members, bridgeId, pin, roomService);
	    }

	    Room.prototype.init = function init(id, alias, name, description, type, members, bridgeId, pin, roomService) {
	        assert.isString(id, 'id');
	        assert.isString(alias, 'alias');
	        assert.isString(name, 'name');
	        assert.isString(description, 'description');
	        assert.isArray(members, 'members');

	        if (bridgeId) {
	            assert.isString(bridgeId, 'bridgeId');
	        }
	        if (pin) {
	            assert.isString(pin, 'pin');
	        }

	        this._roomId = new Observable(id);
	        this._alias = new Observable(alias);
	        this._name = new Observable(name);
	        this._description = new Observable(description);
	        this._type = new Observable(type, assertIsValidRoomType);
	        this._members = new ObservableArray([]).extend({ method: "notifyWhenChangesStop", timeout: 400 });
	        this._options = new ObservableArray();
	        this._bridgeId = new Observable(bridgeId);
	        this._pin = new Observable(pin);
	        this._roomService = roomService;

	        setMembers.call(this, members);
	    };

	    Room.prototype.getRoomId = function getRoomId() {
	        return this._roomId.getValue();
	    };

	    Room.prototype.getObservableAlias = function getObservableAlias() {
	        return this._alias;
	    };

	    Room.prototype.getObservableName = function getObservableName() {
	        return this._name;
	    };

	    Room.prototype.getObservableDescription = function getObservableDescription() {
	        return this._description;
	    };

	    Room.prototype.getObservableType = function getObservableType() {
	        return this._type;
	    };

	    Room.prototype.getObservableMembers = function getObservableMembers() {
	        return this._members;
	    };

	    Room.prototype.getObservableBridgeId = function getObservableBridgeId() {
	        return this._bridgeId;
	    };

	    Room.prototype.getObservablePin = function getObservablePin() {
	        return this._pin;
	    };

	    Room.prototype.toString = function toString() {
	        return this._type.getValue() + '[' + this._roomId.getValue() + ']';
	    };

	    Room.prototype.toJson = function toJson() {
	        return {
	            roomId: this._roomId.getValue(),
	            alias: this._alias.getValue(),
	            name: this._name.getValue(),
	            description: this._description.getValue(),
	            type: this._type.getValue(),
	            pin: this._pin.getValue(),
	            bridgeId: this._bridgeId.getValue()
	        }
	    };

	    Room.prototype.commitChanges = function commitChanges(callback) {
	        this._roomService.updateRoom(this, callback);
	    };

	    Room.prototype.reload = function reload() {
	        this._roomService.revertRoomChanges(this);
	    };

	    Room.prototype._update = function update(room) {
	        if (!_.isObject(room)) {
	            return;
	        }

	        if (room.roomId) {
	            this._roomId.setValue(room.roomId);
	        }

	        if (room.alias) {
	            this._alias.setValue(room.alias);
	        }

	        if (room.name) {
	            this._name.setValue(room.name);
	        }

	        if (room.description) {
	            this._description.setValue(room.description);
	        }

	        if (room.type) {
	            this._type.setValue(room.type);
	        }

	        if (room.options) {
	            this._options.setValue(room.options);
	        }

	        if (room.bridgeId) {
	            this._bridgeId.setValue(room.bridgeId);
	        }

	        if (room.pin) {
	            this._pin.setValue(room.pin);
	        }

	        if (room.members) {
	            // DO NOTHING -- members updated by member events
	        }
	    };

	    Room.prototype._addMembers = function addMembers(members) {
	        var that = this;

	        var newMembers = mapMembers(members);

	        _.forEach(newMembers, function (member) {
	            that._members.push(member);
	        });
	    };

	    Room.prototype._removeMembers = function removeMembers(members) {
	        var that = this;

	        _.forEach(members, function(member) {
	            that._members.remove(function(observableMember) {
	                return member.sessionId === observableMember.getSessionId()
	                    && member.lastUpdate >= observableMember.getObservableLastUpdate().getValue();
	            });
	        });
	    };

	    Room.prototype._updateMembers = function updateMembers(members) {
	        _.forEach(this._members.getValue(), function (observableMember) {
	            var memberToUpdate = _.find(members, function(member) {
	                return observableMember.getSessionId() === member.sessionId && member.lastUpdate > observableMember.getObservableLastUpdate().getValue();
	            });

	            if (memberToUpdate) {
	                observableMember._update(memberToUpdate);
	            }
	        });
	    };

	    function setMembers(members) {
	        var newMembers = mapMembers(members);

	        this._members.setValue(newMembers);
	    }

	    function mapMembers(members) {
	        return _.map(members, function(member) {
	            return new Member(member.state, member.sessionId, member.screenName, member.role, member.streams, member.lastUpdate);
	        });
	    }

	    function assertIsValidRoomType(type) {
	        type = _.getEnumName(roomTypes, type);

	        if (!type) {
	            throw new Error('"type" must be a valid room type');
	        }

	        return type;
	    }

	    return Room;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    function Observable(initialValue, beforeChange) {
	        this.latestValue = null;
	        this.subscribeCallbacks = {};
	        this.subscriptionTimeout = 100;
	        this.subscriptionCount = 0;
	        this.resetOnChange = false;
	        this.lastChangeTime = 0;
	        this.isPendingChanges = false;
	        this.beforeChange = beforeChange;

	        setLatestValue.call(this, initialValue);
	    }

	    Observable.prototype.getValue = function getValue() {
	        return clone(this.latestValue);
	    };

	    Observable.prototype.setValue = function setValue(value) {
	        if (value !== this.latestValue) {
	            setLatestValue.call(this, value);
	            onSubscribeCallback.call(this, this.subscriptionTimeout);
	        }
	    };

	    Observable.prototype.subscribe = function subscribe(callback, options) {
	        assert.isFunction(callback);

	        if (options) {
	            assert.isObject(options);
	        }

	        var that = this;
	        var key = _.uniqueId();
	        var listenForChanges;

	        that.subscribeCallbacks[key] = callback;
	        that.subscriptionCount += 1;

	        if (options) {
	            if (options.initial === 'notify') {
	                onSubscribeCallback.call(that, that.subscriptionTimeout);
	            }
	            if (options.listenForChanges) {
	                listenForChanges = setInterval(function() {
	                    var valueAtInterval = options.listenForChanges.callback();

	                    if (valueAtInterval !== that.latestValue) {
	                        that.setValue(valueAtInterval);
	                    }
	                }, options.listenForChanges.timeout)
	            }
	        }

	        function dispose() {
	            delete that.subscribeCallbacks[key];

	            if (listenForChanges) {
	                clearInterval(listenForChanges);

	                listenForChanges = null;
	            }

	            that.subscriptionCount -= 1;
	        }

	        return { dispose: dispose };
	    };

	    Observable.prototype.extend = function extend(options) {
	        assert.isObject(options);

	        switch (options.method) {
	            case 'notifyWhenChangesStop':
	                this.subscriptionTimeout = options.timeout;
	                this.resetOnChange = true;
	                break;
	            case 'notifyAtFixedRate':
	                this.subscriptionTimeout = options.timeout;
	                break;
	            default:
	                break;
	        }
	        if (_.isNumber(options.rateLimit)) {
	            this.subscriptionTimeout = options.rateLimit;
	        }

	        return this;
	    };

	    function clone(value) {
	        if (typeof value === 'undefined' || value === null) {
	            return value;
	        }

	        // necessary for observable array. Subsequent comparison must not be equal in order to trigger updates.
	        if (_.isArray(value)) {
	            return value.slice();
	        } else {
	            return value;
	        }
	    }

	    function setLatestValue(value) {
	        var valueToSet = value;

	        if (this.beforeChange) {
	            valueToSet = this.beforeChange(value);
	        }

	        this.latestValue = clone(valueToSet);
	    }

	    function onSubscribeCallback(timeoutLength) {
	        this.lastChangeTime = _.now();

	        if (!this.isPendingChanges && this.subscriptionCount !== 0) {
	            this.isPendingChanges = true;

	            continueAfterTimeout.call(this, timeoutLength)
	        }
	    }

	    function continueAfterTimeout(timeoutLength) {
	        var that = this;

	        setTimeout(function() {
	            var timeElapsedSinceLastChange = _.now() - that.lastChangeTime;

	            if (that.resetOnChange && timeElapsedSinceLastChange < that.subscriptionTimeout) {
	                continueAfterTimeout.call(that, that.subscriptionTimeout - timeElapsedSinceLastChange);
	            } else {
	                try {
	                    executeSubscriptionCallbacks.call(that);
	                } finally {
	                    that.isPendingChanges = false;
	                }
	            }
	        }, timeoutLength);
	    }

	    function executeSubscriptionCallbacks() {
	        var that = this;

	        _.forOwn(that.subscribeCallbacks, function (callback) {
	            if (_.isFunction(callback)) {
	                callback(that.latestValue);
	            }
	        });
	    }

	    return Observable;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable) {
	    'use strict';

	    function ObservableArray(initialValues, beforeChange) {
	        var valuesToSet = initialValues;

	        if (valuesToSet === undefined || valuesToSet === null) {
	            valuesToSet = [];
	        }

	        assert.isArray(valuesToSet);

	        this.observableArray = new Observable(valuesToSet, beforeChange);
	    }

	    ObservableArray.prototype.getValue = function getValue() {
	        return this.observableArray.getValue();
	    };

	    ObservableArray.prototype.setValue = function setValue(values) {
	        if (values === undefined || values === null) {
	            values = [];
	        }

	        if (values !== undefined) {
	            assert.isArray(values);
	        }

	        return this.observableArray.setValue(values);
	    };

	    ObservableArray.prototype.subscribe = function subscribe(callback, options) {
	        return this.observableArray.subscribe(callback, options);
	    };

	    ObservableArray.prototype.push = function push(value) {
	        var array = this.observableArray.getValue();
	        array.push(value);

	        this.observableArray.setValue(array);
	    };

	    ObservableArray.prototype.pop = function pop() {
	        var array = this.observableArray.getValue();
	        var value = array.pop();

	        this.observableArray.setValue(array);

	        return value;
	    };

	    ObservableArray.prototype.remove = function remove(valueOrFunction) {
	        var array = this.observableArray.getValue();

	        var filterFunction = function (value) {
	            return _.isFunction(valueOrFunction) ? valueOrFunction(value) : value === valueOrFunction;
	        };

	        var valuesToRemove = _.filter(array, filterFunction);

	        if (valuesToRemove.length > 0) {
	            this.observableArray.setValue(_.remove(array, filterFunction));
	        }

	        return valuesToRemove;
	    };

	    ObservableArray.prototype.removeAll = function removeAll() {
	        var array = this.observableArray.getValue();

	        this.observableArray.setValue([]);
	        return array;
	    };

	    ObservableArray.prototype.extend = function extend(options) {
	        this.observableArray.extend(options);

	        return this;
	    };

	    function updateArray(array, valuesToRemove, i) {
	        valuesToRemove.push(array[i]);
	        array.splice(i, 1);
	        i--;
	        return i;
	    }

	    return ObservableArray;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(27),
	    __webpack_require__(29),
	    __webpack_require__(32)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, ObservableArray, Stream, member) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(27),
	    __webpack_require__(30),
	    __webpack_require__(31)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, ObservableArray, stream, track) {
	    'use strict';

	    var streamTypes = stream.types;
	    var trackStates = track.states;

	    function Stream(uri, type, audioState, videoState) {
	        this.init(uri, type, audioState, videoState);
	    }

	    Stream.prototype.init = function (uri, type, audioState, videoState) {
	        assert.isString(uri, 'uri');

	        this._uri = new Observable(uri);
	        this._type = new Observable(type, assertIsValidStreamType);
	        this._audioState = new Observable(audioState || trackStates.trackEnabled.name, assertIsValidTrackState);
	        this._videoState = new Observable(videoState || trackStates.trackEnabled.name, assertIsValidTrackState);
	    };

	    Stream.prototype.getUri = function getUri() {
	        return this._uri.getValue();
	    };

	    Stream.prototype.getType = function getType() {
	        return this._type.getValue();
	    };

	    Stream.prototype.getObservableAudioState = function getObservableAudioState() {
	        return this._audioState;
	    };

	    Stream.prototype.getObservableVideoState = function getObservableVideoState() {
	        return this._videoState;
	    };

	    Stream.prototype.toJson = function toJson() {
	        return {
	            uri: this._uri.getValue(),
	            type: this._type.getValue(),
	            audioState: this._audioState.getValue(),
	            videoState: this._videoState.getValue()
	        };
	    };

	    Stream.prototype._update = function update(stream) {
	        if (!_.isObject(stream)) {
	            return;
	        }

	        if (stream.hasOwnProperty('audioState')) {
	            this._audioState.setValue(stream.audioState);
	        }

	        if (stream.hasOwnProperty('videoState')) {
	            this._videoState.setValue(stream.videoState);
	        }
	    };

	    function assertIsValidStreamType(type) {
	        type = _.getEnumName(streamTypes, type);

	        if (!type) {
	            throw new Error('"type" must be a valid stream type');
	        }

	        return type;
	    }

	    function assertIsValidTrackState(state) {
	        state = _.getEnumName(trackStates, state);

	        if (!state) {
	            throw new Error('"state" must be a valid track state');
	        }

	        return state;
	    }

	    return Stream;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var streamEnums = {
	        types: {
	            user: { id: 0, name: 'User' },
	            presentation: { id: 1, name: 'Presentation' },
	            audio: { id: 2, name: 'Audio' },
	        }
	    };

	    return streamEnums;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var trackEnums = {
	        states: {
	            trackEnabled: { id: 0, name: 'TrackEnabled' },
	            trackDisabled: { id: 1, name: 'TrackDisabled' },
	            trackEnded: { id: 2, name: 'TrackEnded' },
	        }
	    };

	    return trackEnums;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var memberEnums = {
	        roles: {
	            participant: {id: 0, name: 'Participant'},
	            moderator: {id: 1, name: 'Moderator'},
	            presenter: {id: 2, name: 'Presenter'},
	            audience: {id: 3, name: 'Audience'}
	        },
	        states: {
	            active: {id: 0, name: 'Active'},
	            passive: {id: 1, name: 'Passive'},
	            handRaised: {id: 2, name: 'HandRaised'},
	            inactive: {id: 3, name: 'Inactive'},
	            offline: {id: 4, name: 'Offline'}
	        }
	    };

	    return memberEnums;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    var roomEnums = {
	        types: {
	            directChat: { id: 0, name: 'DirectChat' },
	            multiPartyChat: { id: 1, name: 'MultiPartyChat' },
	            moderatedChat: { id: 2, name: 'ModeratedChat' },
	            townHall: { id: 3, name: 'TownHall' },
	            channel: { id: 4, name: 'Channel' }
	        },
	        events: {
	            memberJoined: { id: 0, name: 'MemberJoined' },
	            memberLeft: { id: 1, name: 'MemberLeft' },
	            memberUpdated: { id: 2, name: 'MemberUpdated' },
	            roomUpdated: { id: 3, name: 'RoomUpdated' },
	            roomEnded: { id: 4, name: 'RoomEnded' },
	        }
	    }

	    return roomEnums;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(35)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, ObservableMonitor) {
	    'use strict';

	    function AuthenticationService(pcast) {
	        this._sessionId = new Observable();
	        this._status = new Observable();
	        this._sessionIdMonitor = new ObservableMonitor(this._sessionId);
	        this._statusMonitor = new ObservableMonitor(this._status);

	        this.init(pcast);
	    }

	    AuthenticationService.prototype.init = function init(pcast) {
	        assert.isObject(pcast, 'pcast');
	        assert.isFunction(pcast.getStatus, 'pcast.getStatus');
	        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
	        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

	        if (this._pcast === pcast) {
	            return;
	        }

	        this._pcast = pcast;
	        this._logger = pcast.getLogger();
	        this._protocol = pcast.getProtocol();

	        assert.isObject(this._logger, 'this._logger');
	        assert.isObject(this._protocol, 'this._protocol');
	        assert.isFunction(this._protocol.getSessionId, 'this._protocol.getSessionId');
	        assert.isFunction(this._pcast.getStatus, 'this._pcast.getStatus');

	        this._sessionId.setValue(this.getPCastSessionId());
	        this._status.setValue(this.getPCastStatus());
	    };

	    AuthenticationService.prototype.start = function start() {
	        if (!this._sessionIdMonitor.isEnabled()) {
	            this._sessionIdMonitor.start(_.bind(this.getPCastSessionId, this));
	        }

	        if (!this._statusMonitor.isEnabled()) {
	            this._statusMonitor.start(_.bind(this.getPCastStatus, this));
	        }
	    };

	    AuthenticationService.prototype.stop = function stop() {
	        if (this._sessionIdMonitor.isEnabled()) {
	            this._sessionIdMonitor.stop();
	        }
	        if (this._statusMonitor.isEnabled()) {
	            this._statusMonitor.stop();
	        }
	    };

	    AuthenticationService.prototype.assertAuthorized = function assertAuthorized() {
	        if (!validPCastStatus(this.getPCastStatus())) {
	            throw new Error('Unable to perform action. Status [%s]. Please wait to reconnect.', this.getPCastStatus());
	        }

	        if (!validPCastSessionId(this.getPCastSessionId())) {
	            throw new Error('Unable to perform action. Invalid sessionId [%s]', this.getPCastSessionId());
	        }
	    };

	    AuthenticationService.prototype.getObservableSessionId = function getObservableSessionId() {
	        return this._sessionId;
	    };

	    AuthenticationService.prototype.getObservableStatus = function getObservableStatus() {
	        return this._status;
	    };

	    AuthenticationService.prototype.getPCastSessionId = function getPCastSessionId() {
	        return this._protocol.getSessionId();
	    };

	    AuthenticationService.prototype.getPCastStatus = function getPCastStatus() {
	        return this._pcast.getStatus();
	    };

	    function validPCastSessionId(sessionId) {
	        return sessionId !== null && sessionId !== undefined && sessionId !== '';
	    }

	    function validPCastStatus(status) {
	        return status !== null && status !== undefined && status !== '' && status.toLowerCase() !== 'offline';
	    }

	    return AuthenticationService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    function ObservableMonitor(observable) {
	        assert.isObject(observable, 'observable');

	        this._observable = observable;
	        this._listenerSubscription = null;
	        this._isEnabled = false;
	    }

	    ObservableMonitor.prototype.start = function start(checkForChanges, timeout) {
	        this._isEnabled = true;

	        this._listenerSubscription = this._observable.subscribe(_.noop, {
	            listenForChanges: {
	                callback: checkForChanges,
	                timeout: timeout || 500
	            }
	        });
	    };

	    ObservableMonitor.prototype.stop = function stop() {
	        this._isEnabled = false;

	        if (this._listenerSubscription) {
	            this._listenerSubscription.dispose();
	        }

	        this._listenerSubscription = null;
	    };

	    ObservableMonitor.prototype.isEnabled = function isEnabled() {
	        return this._isEnabled;
	    };

	    return ObservableMonitor;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(27),
	    __webpack_require__(37)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, ObservableArray, ChatService) {
	    'use strict';

	    var defaultBatchSize = 0;
	    var maxCachedQueueSize = 100;

	    function RoomChatService(roomService) {
	        assert.isObject(roomService, 'roomService');
	        assert.isObject(roomService._pcast, 'roomService._pcast');
	        assert.isObject(roomService._logger, 'roomService._logger');

	        this._roomService = roomService;
	        this._pcast = roomService._pcast;
	        this._logger = roomService._logger;
	        this._chatService = new ChatService(this._pcast);
	        this._chatMessages = new ObservableArray([]);
	        this._latestMessageQueue = [];
	        this._disposables = [];
	    }

	    RoomChatService.prototype.start = function start(batchSize) {
	        this._batchSize = batchSize || defaultBatchSize;
	        this._chatService.start();

	        setupSubscriptions.call(this);
	        setupMessageSubscription.call(this);
	    };

	    RoomChatService.prototype.stop = function stop() {
	        this._chatService.stop();

	        disposeOfMessageSubscription.call(this);

	        disposeOfArray(this._disposables);
	    };

	    RoomChatService.prototype.getObservableChatMessages = function getObservableChatMessages() {
	        return this._chatMessages;
	    };

	    RoomChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
	        return this._chatService.getObservableChatEnabled();
	    };

	    RoomChatService.prototype.sendMessageToRoom = function sendMessageToRoom(message) {
	        var room = this._roomService.getObservableActiveRoom().getValue();
	        var roomId = room.getRoomId();
	        var self = this._roomService._self.getValue();
	        var screenName = self.getObservableScreenName().getValue();
	        var role = self.getObservableRole().getValue();
	        var lastUpdate = self.getLastUpdate();

	        this._chatService.sendMessageToRoom(roomId, screenName, role, lastUpdate, message);
	    };

	    RoomChatService.prototype.getMessages = function getMessages(batchSize, afterMessageId, beforeMessageId, callback) {
	        var room = this._roomService.getObservableActiveRoom().getValue();
	        var roomId = room.getRoomId();

	        return this._chatService.getMessages(roomId, batchSize, afterMessageId, beforeMessageId, function onReceiveMessages(chatMessages) {
	            callback(chatMessages);
	        })
	    };

	    RoomChatService.prototype.toString = function toString() {
	        return 'RoomChatService';
	    };

	    function onRoomChange(room) {
	        disposeOfMessageSubscription.call(this);

	        if (room) {
	            setupMessageSubscription.call(this);
	        }
	    }

	    function setupSubscriptions() {
	        var roomSubscription = this._roomService.getObservableActiveRoom().subscribe(_.bind(onRoomChange, this));

	        this._disposables.push(roomSubscription.dispose);
	    }

	    function setupMessageSubscription() {
	        disposeOfMessageSubscription.call(this);

	        this._roomChatSubscriptionDispose = subscribeAndLoadMessages.call(this, this._batchSize);
	    }

	    function disposeOfMessageSubscription() {
	        if (this._roomChatSubscriptionDispose) {
	            this._roomChatSubscriptionDispose();
	        }
	    }

	    function subscribeAndLoadMessages(batchSize) {
	        var room = this._roomService.getObservableActiveRoom().getValue();
	        var roomId = room.getRoomId();

	        var that = this;

	        this._chatMessages.setValue([]);

	        return this._chatService.subscribeAndLoadMessages(roomId, batchSize, function onReceiveMessages(chatMessages) {
	            var messages = that._chatMessages.getValue();

	            _.forEach(chatMessages, function addMessage(message) {
	                messages.push(message);
	            });

	            if (messages.length > maxCachedQueueSize) {
	                messages.splice(0, messages.length - maxCachedQueueSize);
	            }

	            that._chatMessages.setValue(messages);
	        });
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

	    return RoomChatService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(26),
	    __webpack_require__(4),
	    __webpack_require__(34)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Observable, Logger, AuthenticationService) {
	    'use strict';

	    function ChatService(pcast) {
	        assert.isObject(pcast, 'pcast');
	        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
	        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

	        this._pcast = pcast;
	        this._logger = pcast.getLogger();
	        this._protocol =  pcast.getProtocol();
	        this._enabled = new Observable(false);

	        assert.isObject(this._logger, 'this._logger');
	        assert.isObject(this._protocol, 'this._protocol');

	        this._authService = new AuthenticationService(this._pcast);
	    };

	    ChatService.prototype.start = function start() {
	        if (this._enabled.getValue()) {
	            return;
	        }

	        this._disposables = [];
	        this._roomMessagesListeners = {};

	        this._enabled.setValue(true);
	        this._authService.start();
	        setupSubscriptions.call(this);

	        var disposeOfConversationHandler = this._protocol.on('roomChatEvent', _.bind(onRoomConversationEvent, this));

	        this._disposables.push(disposeOfConversationHandler);
	    };

	    ChatService.prototype.stop = function stop() {
	        if (!this._enabled.getValue()) {
	            return;
	        }

	        this._authService.stop();

	        disposeOfArray(this._disposables);
	    };

	    ChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
	        return this._enabled;
	    };

	    ChatService.prototype.sendMessageToRoom = function sendMessageToRoom(roomId, screenName, role, lastUpdate, message) {
	        sendMessageRequest.call(this, roomId, screenName, role, lastUpdate, message, _.bind(onSendMessageSuccess, this));
	    };

	    ChatService.prototype.subscribeAndLoadMessages = function subscribeAndLoadMessages(roomId, batchSize, onReceiveMessages) {
	        var disposeOfListener = setupChatListener.call(this, roomId, onReceiveMessages);

	        subscribeToRoomConversationRequest.call(this, roomId, batchSize,
	            _.bind(onSubscribeToRoomConversationSuccess, this, roomId)
	        );

	        return disposeOfListener;
	    };

	    ChatService.prototype.getMessages = function getMessages(roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages) {
	        getMessagesRequest.call(this, roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages);
	    };

	    ChatService.prototype.toString = function toString() {
	        return 'ChatService';
	    };

	    function setupSubscriptions() {
	        var pcastStatusSubscription = this._authService.getObservableStatus().subscribe(_.bind(onStatusChange, this));
	        var pcastSessionIdSubscription = this._authService.getObservableSessionId().subscribe(_.bind(onSessionIdChange, this));

	        this._disposables.push(pcastStatusSubscription.dispose);
	        this._disposables.push(pcastSessionIdSubscription.dispose);
	    }

	    function setupChatListener(roomId, onReceiveMessages) {
	        var that = this;

	        this._roomMessagesListeners[roomId] = onReceiveMessages;

	        var disposeOfHandler = function() {
	            if (that._roomMessagesListeners[roomId] === onReceiveMessages) {
	                delete that._roomMessagesListeners[roomId];
	            }
	        };

	        this._disposables.push(disposeOfHandler);

	        return disposeOfHandler;
	    }

	    function onSendMessageSuccess() {

	    }

	    function onSubscribeToRoomConversationSuccess(roomId, chatMessages) {
	        var onReceiveMessages = this._roomMessagesListeners[roomId];

	        onReceiveMessages(chatMessages);
	    }

	    function onRoomConversationEvent(event) {
	        assert.isObject(event, 'event');
	        assert.stringNotEmpty(event.roomId, 'event.roomId');
	        assert.stringNotEmpty(event.eventType, 'event.eventType');
	        assert.isArray(event.chatMessages, 'event.chatMessages');

	        switch (event.eventType) {
	            case 'Message':
	                this._logger.debug('[%s] Room messages [%s]', event.roomId, event.chatMessages);
	                var listener = this._roomMessagesListeners[event.roomId];

	                convertTimeFromLongInChatMessages(event.chatMessages);

	                if (listener) {
	                    listener(event.chatMessages);
	                }
	                break;
	            default:
	                this._logger.warn('Unsupported room conversation event [%s]', event.eventType)
	        }
	    }

	    function onStatusChange(status) {
	        switch (status.toLowerCase()) {
	            case 'offline':
	                return;
	            case 'online':
	                return refreshMessageSubscriptions.call(this);
	        }
	    }

	    function onSessionIdChange() {
	        refreshMessageSubscriptions.call(this);
	    }

	    function refreshMessageSubscriptions() {
	        var that = this;

	        _.forOwn(this._roomMessagesListeners, function(listener, roomId) {
	            subscribeToRoomConversationRequest.call(that, roomId, 1, listener);
	        });
	    }

	    function getMessagesRequest(roomId, batchSize, afterMessageId, beforeMessageId, callback) {
	        assert.stringNotEmpty(roomId, 'roomId');
	        assert.isFunction(callback, 'callback');

	        if (!beforeMessageId || !afterMessageId) {
	            assert.isNumber(batchSize, 'batchSize');
	        }

	        if (beforeMessageId) {
	            assert.stringNotEmpty(beforeMessageId, 'beforeMessageId');
	        }

	        if (afterMessageId) {
	            assert.stringNotEmpty(afterMessageId, 'afterMessageId');
	        }

	        assertEnabled.call(this);
	        this._authService.assertAuthorized();

	        var sessionId = this._authService.getPCastSessionId();

	        this._protocol.getMessages(sessionId, roomId, batchSize, afterMessageId, beforeMessageId,
	            function (response) {
	                if (response.status !== 'ok') {
	                    throw new Error('Fetch of room conversation failed: ' + response.status);
	                }

	                convertTimeFromLongInChatMessages(response.chatMessages);

	                callback(response.chatMessages);
	            }
	        );
	    }

	    function subscribeToRoomConversationRequest(roomId, batchSize, callback) {
	        assert.stringNotEmpty(roomId, 'roomId');
	        assert.isNumber(batchSize, 'batchSize');
	        assert.isFunction(callback, 'callback');

	        assertEnabled.call(this);
	        this._authService.assertAuthorized();

	        var sessionId = this._authService.getPCastSessionId();

	        var that = this;

	        this._protocol.subscribeToRoomConversation(sessionId, roomId, batchSize, function (response) {
	            if (response.status !== 'ok') {
	                delete that._roomMessagesListeners[roomId];

	                throw new Error('Fetch of room conversation failed: ' + response.status);
	            }

	            convertTimeFromLongInChatMessages(response.chatMessages);

	            callback(response.chatMessages);
	        });
	    }

	    function sendMessageRequest(roomId, screenName, role, lastUpdate, message, callback) {
	        assert.stringNotEmpty(roomId, 'roomId');
	        assert.stringNotEmpty(screenName, 'screenName');
	        assert.stringNotEmpty(role, 'role');
	        assert.isNumber(lastUpdate, 'lastUpdate');
	        assert.stringNotEmpty(message, 'message');

	        assertEnabled.call(this);
	        this._authService.assertAuthorized();

	        var sessionId = this._authService.getPCastSessionId();

	        var chatMessage = {
	            messageId: '',
	            timestamp: 0,
	            from: {
	                sessionId: sessionId,
	                screenName: screenName,
	                role: role,
	                lastUpdate: lastUpdate
	            },
	            message: message
	        };

	        return this._protocol.sendMessageToRoom(roomId, chatMessage, callback);
	    }

	    function assertEnabled() {
	        if (!this._enabled.getValue()) {
	            throw new Error('ChatService not Enabled. Please start before performing actions.');
	        }
	    }

	    function convertTimeFromLongInChatMessages(chatMessages) {
	        _.forEach(chatMessages, function(chatMessage) {
	            convertTimeFromLongInChatMessage(chatMessage);
	        });
	    }

	    function convertTimeFromLongInChatMessage(chatMessage) {
	        if (chatMessage.timestamp) {
	            chatMessage.timestamp = _.utc(chatMessage.timestamp);
	        }
	        if (chatMessage.from) {
	            chatMessage.from.lastUpdate = _.utc(chatMessage.from.lastUpdate);
	        }
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

	    return ChatService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(4),
	    __webpack_require__(39),
	    __webpack_require__(40),
	    __webpack_require__(41)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Logger, AudioContext, AudioVolumeMeter, AudioSpeakerDetectionAlgorithm) {
	    'use strict';

	    function AudioSpeakerDetector(userMediaStreams, options) {
	        assert.isArray(userMediaStreams, 'userMediaStreams');

	        options = options || {};

	        this._logger = options.logger || new Logger();

	        this._audioContext = options.audioContext || new AudioContext();
	        this._nativeAudioContext = this._audioContext.getNativeAudioContext();
	        this._audioVolumeMeters = [];
	        this._onSpeakingChanged = null;
	        this._userMediaStreams = userMediaStreams;
	        this._disposeOfAudioContext = _.isObject(options.audioContext);
	    }

	    AudioSpeakerDetector.prototype.start = function start(options, callback) {
	        assert.isFunction(callback, 'callback');

	        this._onSpeakingChanged = callback;

	        options = options || {};

	        _.forEach(this._userMediaStreams, _.bind(setupSpeakingDetection, this, options));
	    };

	    AudioSpeakerDetector.prototype.stop = function stop() {
	        _.forEach(this._audioVolumeMeters, function stopAudioVolumeMeters(meter) {
	            meter.stop();
	        });

	        this._onSpeakingChanged = null;
	    };

	    AudioSpeakerDetector.prototype.dispose = function dispose() {
	        if (this._disposeOfAudioContext) {
	            this._nativeAudioContext.close();
	        }

	        this._userMediaStreams = null;
	    };

	    AudioSpeakerDetector.prototype.toString = function toString() {
	        return 'AudioSpeakerDetector';
	    };

	    function setupSpeakingDetection(options, stream) {
	        var audioVolumeMeter = new AudioVolumeMeter(this.logger);
	        var audioSpeakerDetectionAlgorithm = new AudioSpeakerDetectionAlgorithm(this.logger);

	        audioVolumeMeter.init(this._nativeAudioContext, options.alpha);
	        audioVolumeMeter.connect(stream);

	        audioSpeakerDetectionAlgorithm.onValue(this._onSpeakingChanged);
	        audioSpeakerDetectionAlgorithm.startDetection(audioVolumeMeter, options);

	        this._audioVolumeMeters.push(audioVolumeMeter)
	    }

	    return AudioSpeakerDetector;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    function AudioContext() {
	        this.init();
	    }

	    AudioContext.prototype.init = function init() {
	        if (!window.AudioContext) {
	            throw new Error('Browser does not support AudioContext')
	        }

	        this._audioContext = new window.AudioContext();
	    };

	    AudioContext.prototype.getNativeAudioContext = function getNativeAudioContext() {
	        return this._audioContext;
	    };

	    AudioContext.prototype.toString = function toString() {
	        return 'AudioContext';
	    };

	    return AudioContext;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    var defaultAlpha = 1/16;

	    function AudioVolumeMeter(logger) {
	        assert.isObject(logger);

	        this._logger = logger;
	    }

	    AudioVolumeMeter.prototype.init = function init(context, alpha) {
	        assert.isObject(context, 'context');
	        assert.isFunction(context.createScriptProcessor, 'context.createScriptProcessor');

	        alpha = parseFloat(alpha || defaultAlpha);
	        assert.isNumber(alpha, 'alpha');

	        this._context = context;
	        this._alpha = alpha;
	        this._value = 0.;
	        this._smoothedValue = 0.;
	        this._smoothedPeakValue = 0.;
	        this._clipped = 0.;
	        this._scriptProcessor = context.createScriptProcessor(4096, 1, 1);
	        this._scriptProcessor.addEventListener('audioprocess', _.bind(onAudioProcess, this));
	    };

	    AudioVolumeMeter.prototype.onValue = function onValue(callback) {
	        this._callback = callback;
	    };

	    AudioVolumeMeter.prototype.getValue = function getValue() {
	        return this._value;
	    };

	    AudioVolumeMeter.prototype.getSmoothedValue = function getSmoothedValue() {
	        return this._smoothedValue;
	    };

	    AudioVolumeMeter.prototype.getSmoothedPeakValue = function getSmoothedPeakValue() {
	        return this._smoothedPeakValue;
	    };

	    AudioVolumeMeter.prototype.connect = function connect(stream) {
	        var that = this;

	        return connectToStream.call(that, stream);
	    };

	    AudioVolumeMeter.prototype.stop = function stop() {
	        return stopConnections.call(this);
	    };

	    AudioVolumeMeter.prototype.toString = function toString() {
	        return 'AudioVolumeMeter';
	    };

	    function onAudioProcess(event) {
	        var input = event.inputBuffer.getChannelData(0);
	        var sum = 0.;
	        var clipped = 0;

	        for (var i = 0; i < input.length; i++) {
	            sum += input[i] * input[i];

	            if (Math.abs(input[i]) > 0.99) {
	                clipped++;
	            }
	        }

	        this._value = Math.sqrt(sum / input.length);
	        this._smoothedValue = this._alpha * this._value + (1. - this._alpha) * this._smoothedValue;
	        this._smoothedPeakValue = Math.max(this._value, this._alpha * this._value + (1. - this._alpha) * this._smoothedPeakValue);
	        this._clipped = clipped;

	        if (this._callback) {
	            this._callback.call(this, {
	                date: _.now(),
	                value: this._value,
	                smoothedValue: this._smoothedValue,
	                smoothedPeakValue: this._smoothedPeakValue,
	                clipped: this._clipped
	            });
	        }
	    }

	    function connectToStream(stream) {
	        assert.isObject(stream, 'stream');

	        var that = this;

	        if (stream.getAudioTracks().length > 0) {
	            that._mediaStreamSource = that._context.createMediaStreamSource(stream);
	            that._mediaStreamSource.connect(that._scriptProcessor);
	            that._scriptProcessor.connect(that._context.destination);
	        } else {
	            that._logger.info('Stream has no audio tracks');
	        }
	    }

	    function stopConnections() {
	        if (this._mediaStreamSource) {
	            this._mediaStreamSource.disconnect();
	        }

	        this._scriptProcessor.disconnect();
	    }

	    return AudioVolumeMeter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    var defaultSpeakingHysteresisInterval = 50;
	    var defaultSilenceHysteresisInterval = 1500;

	    function AudioSpeakerDetectionAlgorithm(logger) {
	        assert.isObject(logger);

	        this._logger = logger;

	        this.init();
	    }

	    AudioSpeakerDetectionAlgorithm.prototype.init = function init() {

	    };

	    AudioSpeakerDetectionAlgorithm.prototype.onValue = function onValue(callback) {
	        this._callback = callback;
	    };

	    AudioSpeakerDetectionAlgorithm.prototype.startDetection = function startDetection(audioVolumeMeter, options) {
	        var that = this;

	        return startAudioDetection.call(that, audioVolumeMeter, options);
	    };

	    AudioSpeakerDetectionAlgorithm.prototype.toString = function toString() {
	        return 'AudioSpeakerDetection';
	    };

	    function startAudioDetection(audioVolumeMeter, options) {
	        assert.isObject(audioVolumeMeter, 'audioVolumeMeter');

	        options = options || {};

	        var that = this;
	        var stopped = false;
	        var speakingHysteresisInterval = options.speakingHysteresisInterval || defaultSpeakingHysteresisInterval;
	        var silenceHysteresisInterval = options.silenceHysteresisInterval || defaultSilenceHysteresisInterval;

	        assert.isNumber(speakingHysteresisInterval, 'options.speakingHysteresisInterval');
	        assert.isNumber(silenceHysteresisInterval, 'options.silenceHysteresisInterval');

	        var speaking = false;
	        var nextSpeakingDeadline = _.now() + speakingHysteresisInterval;
	        var nextSilenceDeadline = _.now() + silenceHysteresisInterval;

	        audioVolumeMeter.onValue(function (value) {
	            if (stopped) {
	                return;
	            }

	            assert.isObject(audioVolumeMeter, 'audioVolumeMeter');
	            assert.isNumber(value.date, 'value.date');
	            assert.isNumber(value.value, 'value.value');
	            assert.isNumber(value.smoothedValue, 'value.smoothedValue');
	            assert.isNumber(value.smoothedPeakValue, 'value.smoothedPeakValue');
	            assert.isNumber(value.clipped, 'value.clipped');

	            var speakingThreshold = value.value > 0.01 && value.value > 2 * value.smoothedValue && value.value > 0.25 * value.smoothedPeakValue;
	            var speakingContinuationThreshold = value.value > 0.8 * value.smoothedValue;
	            var notSpeakingThreshold = value.value < 0.5 * value.smoothedValue;
	            var notSpeakingContinuationThreshold = !speakingThreshold;

	            if ((speakingThreshold || (speaking && speakingContinuationThreshold)) && nextSpeakingDeadline < value.date) {
	                nextSilenceDeadline = _.utc(value.date) + silenceHysteresisInterval;
	                if (!speaking) {
	                    speaking = true;

	                    that._logger.info('Speaking detected');

	                    if (that._callback) {
	                        that._callback('speaking');
	                    }
	                }
	            } else if ((notSpeakingThreshold || (!speaking && notSpeakingContinuationThreshold)) && nextSilenceDeadline < value.date) {
	                nextSpeakingDeadline = _.utc(value.date) + speakingHysteresisInterval;
	                if (speaking) {
	                    speaking = false;

	                    that._logger.info('Silence detected');

	                    if (that._callback) {
	                        that._callback('silence');
	                    }
	                }
	            }
	        });
	    }

	    return AudioSpeakerDetectionAlgorithm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6),
	    __webpack_require__(4),
	    __webpack_require__(43)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert, Logger, PublisherBandwidthAdjuster) {
	    'use strict';

	    function BandwidthMonitor(publishers, options) {
	        assert.isArray(publishers, 'userMediaStreams');

	        options = options || {};

	        this._logger = options.logger || new Logger();
	        this._publisherAdjusters = [];
	        this._publishers = publishers;
	    }

	    BandwidthMonitor.prototype.start = function start(roomService, options) {
	        options = options || {};

	        _.forEach(this._publishers, _.bind(setupPublisherAdjusters, this, roomService, options));
	    };

	    BandwidthMonitor.prototype.stop = function stop() {
	        _.forEach(this._publisherAdjusters, function closePublisherAdjusters(adjuster) {
	            adjuster.close();
	        });

	        this._publisherAdjusters = [];
	    };

	    BandwidthMonitor.prototype.toString = function toString() {
	        return 'BandwidthMonitor';
	    };

	    function setupPublisherAdjusters(roomService, options, publisher) {
	        var publisherAdjuster = new PublisherBandwidthAdjuster(publisher);

	        publisherAdjuster.connect(roomService, options);

	        this._publisherAdjusters.push(publisherAdjuster)
	    }

	    return BandwidthMonitor;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
	    'use strict';

	    var defaultRoomBandwidthLimit = 5000000;

	    function PublisherBandwidthAdjuster(publisher) {
	        this.init(publisher);
	    }

	    PublisherBandwidthAdjuster.prototype.init = function init(publisher) {
	        assert.isObject(publisher, 'publisher');

	        this._publisher = publisher;
	        this._roomMemberCount = 0;
	        this._roomSubscription = null;
	        this._membersSubscription = null;
	    };

	    PublisherBandwidthAdjuster.prototype.connect = function connect(roomService, options) {
	        assert.isObject(roomService, 'roomService');

	        options = options || {};

	        var roomObservable = roomService.getObservableActiveRoom();
	        var roomBandwidthLimit = options.roomBandwidthLimit || defaultRoomBandwidthLimit;

	        this._roomSubscription = roomObservable.subscribe(_.bind(onRoomChange, this, roomBandwidthLimit), {initial:'notify'});
	    };

	    PublisherBandwidthAdjuster.prototype.close = function close() {
	        if (this._roomSubscription) {
	            this._roomSubscription.dispose()
	        }
	        if (this._membersSubscription) {
	            this._membersSubscription.dispose()
	        }

	        this._roomSubscription = null;
	        this._membersSubscription = null;
	    };

	    PublisherBandwidthAdjuster.prototype.toString = function toString() {
	        return 'PublisherBandwidthAdjuster';
	    };

	    function onRoomChange(roomBandwidthLimit, room) {
	        if (this._membersSubscription) {
	            this._membersSubscription.dispose();
	        }
	        if (!room) {
	            return this._publisher.limitBandwidth(roomBandwidthLimit);
	        }

	        var membersObservable = room.getObservableMembers();

	        this._membersSubscription = membersObservable.subscribe(_.bind(onRoomMembersChanged, this, roomBandwidthLimit), {initial:'notify'});
	    }

	    function onRoomMembersChanged(roomBandwidthLimit, members) {
	        if (members.length === this._roomMemberCount) {
	            return;
	        }

	        this._roomMemberCount = members.length;

	        var targetBitRate = roomBandwidthLimit / Math.max(1, this._roomMemberCount - 1);

	        this._publisher.limitBandwidth(targetBitRate);
	    }

	    return PublisherBandwidthAdjuster;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;