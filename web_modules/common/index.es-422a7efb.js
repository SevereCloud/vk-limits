/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * Creates counter interface.
 */
function createCounter() {
    return {
        current: 0,
        next: function () {
            return ++this.current;
        },
    };
}
/**
 * Creates interface for resolving request promises by request id's (or not).
 */
function createRequestResolver() {
    var counter = createCounter();
    var promiseControllers = {};
    return {
        /**
         * Adds new controller with resolve/reject methods.
         *
         * @param controller Object with `resolve` and `reject` functions
         * @param customId Custom `request_id`
         * @returns New request id of the added controller.
         */
        add: function (controller, customId) {
            var id = customId != null ? customId : counter.next();
            promiseControllers[id] = controller;
            return id;
        },
        /**
         * Resolves/rejects an added promise by request id and the `isSuccess`
         * predicate.
         *
         * @param requestId Request ID.
         * @param data Data to pass to the resolve- or reject-function.
         * @param isSuccess Predicate to select the desired function.
         */
        resolve: function (requestId, data, isSuccess) {
            var requestPromise = promiseControllers[requestId];
            if (requestPromise) {
                if (isSuccess(data)) {
                    requestPromise.resolve(data);
                }
                else {
                    requestPromise.reject(data);
                }
                promiseControllers[requestId] = null;
            }
        },
    };
}
/**
 * Returns send function that returns promises.
 *
 * @param sendEvent Send event function.
 * @param subscribe Subscribe event function.
 * @returns Send function which returns the Promise object.
 */
function promisifySend(sendEvent, subscribe) {
    var requestResolver = createRequestResolver();
    // Subscribe to receive a data
    subscribe(function (event) {
        if (!event.detail || !event.detail.data || typeof event.detail.data !== 'object') {
            return;
        }
        // There is no request_id in receive-only events, so we check its existence.
        if ('request_id' in event.detail.data) {
            var _a = event.detail.data, requestId = _a.request_id, data = __rest(_a, ["request_id"]);
            if (requestId) {
                requestResolver.resolve(requestId, data, function (data) { return !('error_type' in data); });
            }
        }
    });
    return function promisifiedSend(method, props) {
        if (props === void 0) { props = {}; }
        return new Promise(function (resolve, reject) {
            var requestId = requestResolver.add({ resolve: resolve, reject: reject }, props.request_id);
            sendEvent(method, __assign(__assign({}, props), { request_id: requestId }));
        });
    };
}

/** Is the client side runtime environment */
var IS_CLIENT_SIDE = typeof window !== 'undefined';
/** Is the runtime environment an Android app */
var IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge);
/** Is the runtime environment an iOS app */
var IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE &&
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.VKWebAppClose);
/** Is the runtime environment a browser */
var IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW;
/** Is the runtime environment m.vk.com */
var IS_MVK = IS_WEB && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search);
/** Is the runtime environment vk.com */
var IS_DESKTOP_VK = IS_WEB && !IS_MVK;
/** Type of subscribe event */
var EVENT_TYPE = IS_WEB ? 'message' : 'VKWebAppEvent';
/** Methods supported on the desktop */
var DESKTOP_METHODS = __spreadArrays([
    'VKWebAppInit',
    'VKWebAppGetCommunityAuthToken',
    'VKWebAppAddToCommunity',
    'VKWebAppAddToHomeScreenInfo',
    'VKWebAppClose',
    'VKWebAppCopyText',
    'VKWebAppGetUserInfo',
    'VKWebAppSetLocation',
    'VKWebAppSendToClient',
    'VKWebAppGetClientVersion',
    'VKWebAppGetPhoneNumber',
    'VKWebAppGetEmail',
    'VKWebAppGetGroupInfo',
    'VKWebAppGetGeodata',
    'VKWebAppGetCommunityToken',
    'VKWebAppSetTitle',
    'VKWebAppGetAuthToken',
    'VKWebAppCallAPIMethod',
    'VKWebAppJoinGroup',
    'VKWebAppLeaveGroup',
    'VKWebAppAllowMessagesFromGroup',
    'VKWebAppDenyNotifications',
    'VKWebAppAllowNotifications',
    'VKWebAppOpenPayForm',
    'VKWebAppOpenApp',
    'VKWebAppShare',
    'VKWebAppShowWallPostBox',
    'VKWebAppScroll',
    'VKWebAppShowOrderBox',
    'VKWebAppShowLeaderBoardBox',
    'VKWebAppShowInviteBox',
    'VKWebAppShowRequestBox',
    'VKWebAppAddToFavorites',
    'VKWebAppShowCommunityWidgetPreviewBox',
    'VKWebAppShowStoryBox',
    'VKWebAppStorageGet',
    'VKWebAppStorageGetKeys',
    'VKWebAppStorageSet',
    'VKWebAppFlashGetInfo',
    'VKWebAppSubscribeStoryApp',
    'VKWebAppOpenWallPost',
    'VKWebAppCheckAllowedScopes',
    'VKWebAppShowNativeAds'
], (IS_DESKTOP_VK ? ['VKWebAppResizeWindow', 'VKWebAppAddToMenu', 'VKWebAppShowSubscriptionBox', 'VKWebAppShowInstallPushBox', 'VKWebAppGetFriends'] : ['VKWebAppShowImages']));
/** Android VK Bridge interface. */
var androidBridge = IS_CLIENT_SIDE
    ? window.AndroidBridge
    : undefined;
/** iOS VK Bridge interface. */
var iosBridge = IS_IOS_WEBVIEW
    ? window.webkit.messageHandlers
    : undefined;
/**
 * Creates a VK Bridge API that holds functions for interact with runtime
 * environment.
 *
 * @param version Version of the package
 */
function createVKBridge(version) {
    /** Current frame id. */
    var webFrameId = undefined;
    /** List of functions that subscribed on events. */
    var subscribers = [];
    /**
     * Sends an event to the runtime env. In the case of Android/iOS application
     * env is the application itself. In the case of the browser, the parent
     * frame in which the event handlers is located.
     *
     * @param method The method (event) name to send
     * @param [props] Method properties
     */
    function send(method, props) {
        // Sending data through Android bridge
        if (androidBridge && androidBridge[method]) {
            androidBridge[method](JSON.stringify(props));
        }
        // Sending data through iOS bridge
        else if (iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function') {
            iosBridge[method].postMessage(props);
        }
        // Sending data through web bridge
        else if (IS_WEB) {
            parent.postMessage({
                handler: method,
                params: props,
                type: 'vk-connect',
                webFrameId: webFrameId,
                connectVersion: version,
            }, '*');
        }
    }
    /**
     * Adds an event listener. It will be called any time a data is received.
     *
     * @param listener A callback to be invoked on every event receive.
     */
    function subscribe(listener) {
        subscribers.push(listener);
    }
    /**
     * Removes an event listener which has been subscribed for event listening.
     *
     * @param listener A callback to unsubscribe.
     */
    function unsubscribe(listener) {
        var index = subscribers.indexOf(listener);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    }
    /**
     * Checks if a method is supported on runtime platform.
     *
     * @param method Method (event) name to check.
     * @returns Result of checking.
     */
    function supports(method) {
        if (IS_ANDROID_WEBVIEW) {
            // Android support check
            return !!(androidBridge && typeof androidBridge[method] === 'function');
        }
        else if (IS_IOS_WEBVIEW) {
            // iOS support check
            return !!(iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function');
        }
        else if (IS_WEB) {
            // Web support check
            return DESKTOP_METHODS.indexOf(method) > -1;
            // if (!webSdkHandlers) {
            //   console.error('You should call bridge.send("VKWebAppInit") first');
            //   return false;
            // }
            // return webSdkHandlers.includes(method);
        }
        return false;
    }
    /**
     * Checks whether the runtime is a WebView.
     *
     * @returns Result of checking.
     */
    function isWebView() {
        return IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW;
    }
    /**
     * Checks whether the runtime is an iframe.
     *
     * @returns Result of checking.
     */
    function isIframe() {
        return IS_WEB && window.parent !== window;
    }
    /**
     * Checks whether the runtime is embedded.
     *
     * @returns Result of checking.
     */
    function isEmbedded() {
        return isWebView() || isIframe();
    }
    /**
     * Checks whether the runtime is standalone.
     *
     * @returns Result of checking.
     */
    function isStandalone() {
        return !isEmbedded();
    }
    // Subscribes to listening messages from a runtime for calling each
    // subscribed event listener.
    if (typeof window !== 'undefined' && 'addEventListener' in window) {
        window.addEventListener(EVENT_TYPE, function (event) {
            if (IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW) {
                // If it's webview
                return __spreadArrays(subscribers).map(function (fn) { return fn.call(null, event); });
            }
            else if (IS_WEB && event && event.data) {
                // If it's web
                var _a = event.data, type_1 = _a.type, data_1 = _a.data, frameId = _a.frameId;
                if (type_1 && type_1 === 'SetSupportedHandlers') ;
                else if (type_1 && type_1 === 'VKWebAppSettings') {
                    webFrameId = frameId;
                }
                else {
                    __spreadArrays(subscribers).map(function (fn) { return fn({ detail: { type: type_1, data: data_1 } }); });
                }
            }
        });
    }
    /**
     * Enhanced send functions for the ability to receive response data in
     * the Promise object.
     */
    var sendPromise = promisifySend(send, subscribe);
    return {
        send: sendPromise,
        sendPromise: sendPromise,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        supports: supports,
        isWebView: isWebView,
        isIframe: isIframe,
        isEmbedded: isEmbedded,
        isStandalone: isStandalone,
    };
}

/**
 * Creates the CustomEvent polyfill. VK apps use the CustomEvent for transfer
 * data.
 */
function createCustomEventPolyfill() {
    function CustomEvent(typeArg, eventInitDict) {
        var params = eventInitDict || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(typeArg, !!params.bubbles, !!params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = Event.prototype;
    return CustomEvent;
}

var version = "2.4.8";

// Applying CustomEvent polyfill
if (typeof window !== 'undefined' && !window.CustomEvent) {
    window.CustomEvent = createCustomEventPolyfill();
}
// VK Bridge API
var bridge = createVKBridge(version);

export { bridge as b };
