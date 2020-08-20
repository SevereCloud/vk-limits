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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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
var __assign$1 = function () {
  __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

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
    }
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
        } else {
          requestPromise.reject(data);
        }

        promiseControllers[requestId] = null;
      }
    }
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
  var requestResolver = createRequestResolver(); // Subscribe to receive a data

  subscribe(function (event) {
    if (!event.detail || !event.detail.data) {
      return;
    } // There is no request_id in receive-only events, so we check its existence.


    if ('request_id' in event.detail.data) {
      var _a = event.detail.data,
          requestId = _a.request_id,
          data = __rest(_a, ["request_id"]);

      if (requestId) {
        requestResolver.resolve(requestId, data, function (data) {
          return !('error_type' in data);
        });
      }
    }
  });
  return function promisifiedSend(method, props) {
    if (props === void 0) {
      props = {};
    }

    return new Promise(function (resolve, reject) {
      var requestId = requestResolver.add({
        resolve: resolve,
        reject: reject
      }, props.request_id);
      sendEvent(method, __assign$1(__assign$1({}, props), {
        request_id: requestId
      }));
    });
  };
}
/** Is the client side runtime environment */


var IS_CLIENT_SIDE = typeof window !== 'undefined';
/** Is the runtime environment an Android app */

var IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge);
/** Is the runtime environment an iOS app */

var IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose);
/** Is the runtime environment a browser */

var IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW;
/** Is the runtime environment m.vk.com */

var IS_MVK = IS_WEB && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search);
/** Is the runtime environment vk.com */

var IS_DESKTOP_VK = IS_WEB && !IS_MVK;
/** Type of subscribe event */

var EVENT_TYPE = IS_WEB ? 'message' : 'VKWebAppEvent';
/** Methods supported on the desktop */

var DESKTOP_METHODS = __spreadArrays(['VKWebAppInit', 'VKWebAppGetCommunityAuthToken', 'VKWebAppAddToCommunity', 'VKWebAppGetUserInfo', 'VKWebAppSetLocation', 'VKWebAppGetClientVersion', 'VKWebAppGetPhoneNumber', 'VKWebAppGetEmail', 'VKWebAppGetGeodata', 'VKWebAppSetTitle', 'VKWebAppGetAuthToken', 'VKWebAppCallAPIMethod', 'VKWebAppJoinGroup', 'VKWebAppAllowMessagesFromGroup', 'VKWebAppDenyNotifications', 'VKWebAppAllowNotifications', 'VKWebAppOpenPayForm', 'VKWebAppOpenApp', 'VKWebAppShare', 'VKWebAppShowWallPostBox', 'VKWebAppScroll', 'VKWebAppShowOrderBox', 'VKWebAppShowLeaderBoardBox', 'VKWebAppShowInviteBox', 'VKWebAppShowRequestBox', 'VKWebAppAddToFavorites', 'VKWebAppShowCommunityWidgetPreviewBox'], IS_DESKTOP_VK ? ['VKWebAppResizeWindow', 'VKWebAppShowStoryBox'] : []);
/** Android VK Bridge interface. */


var androidBridge = IS_CLIENT_SIDE ? window.AndroidBridge : undefined;
/** iOS VK Bridge interface. */

var iosBridge = IS_IOS_WEBVIEW ? window.webkit.messageHandlers : undefined;
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
    } // Sending data through iOS bridge
    else if (iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function') {
        iosBridge[method].postMessage(props);
      } // Sending data through web bridge
      else if (IS_WEB) {
          parent.postMessage({
            handler: method,
            params: props,
            type: 'vk-connect',
            webFrameId: webFrameId,
            connectVersion: version
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
    } else if (IS_IOS_WEBVIEW) {
      // iOS support check
      return !!(iosBridge && iosBridge[method] && typeof iosBridge[method].postMessage === 'function');
    } else if (IS_WEB) {
      // Web support check
      return DESKTOP_METHODS.indexOf(method) > -1;
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
  } // Subscribes to listening messages from a runtime for calling each
  // subscribed event listener.


  if (typeof window !== 'undefined' && 'addEventListener' in window) {
    window.addEventListener(EVENT_TYPE, function (event) {
      if (IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW) {
        // If it's webview
        return __spreadArrays(subscribers).map(function (fn) {
          return fn.call(null, event);
        });
      } else if (IS_WEB && event && event.data) {
        // If it's web
        var _a = event.data,
            type_1 = _a.type,
            data_1 = _a.data,
            frameId = _a.frameId;

        if (type_1 && type_1 === 'VKWebAppSettings') {
          webFrameId = frameId;
        } else {
          __spreadArrays(subscribers).map(function (fn) {
            return fn({
              detail: {
                type: type_1,
                data: data_1
              }
            });
          });
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
    isWebView: isWebView
  };
}
/**
 * Creates the CustomEvent polyfill. VK apps use the CustomEvent for transfer
 * data.
 */


function createCustomEventPolyfill() {
  function CustomEvent(typeArg, eventInitDict) {
    var params = eventInitDict || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(typeArg, !!params.bubbles, !!params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = Event.prototype;
  return CustomEvent;
}

var version = "2.1.8";


if (typeof window !== 'undefined' && !window.CustomEvent) {
  window.CustomEvent = createCustomEventPolyfill();
} // VK Bridge API


var bridge = createVKBridge(version);

/** @ignore */
var VKBridgeProvider = /** @class */ (function () {
    /** @ignore */
    function VKBridgeProvider(customBridge) {
        this.bridge = customBridge || bridge;
    }
    /**
     * Subscribes to listen events and returns unsubscribe function
     */
    VKBridgeProvider.prototype.subscribeEvent = function (methodName, callback, onSubscribe, onUnsubscribe) {
        var _this = this;
        var fn = function (event) {
            if (event.detail &&
                event.detail.data &&
                event.detail.type.indexOf(methodName) === 0 &&
                !event.detail.type.includes('Failed')) {
                callback(event.detail.data);
            }
        };
        this.bridge.subscribe(fn);
        if (onSubscribe) {
            onSubscribe();
        }
        return function () {
            _this.bridge.unsubscribe(fn);
            if (onUnsubscribe) {
                onUnsubscribe();
            }
        };
    };
    return VKBridgeProvider;
}());

/**
 * Converts attachment list to a attachments string.
 *
 * @param attachments List of attachments
 * @returns Comma-separated list of attachments in the above format
 */
var prepareAttachments = function (attachments) {
    return attachments.map(function (item) { return (typeof item === 'string' ? item : item.type + item.ownerId + '_' + item.mediaId); }).join(',');
};
/**
 * VK Mini apps API. Contains all VK Bridge methods separated by categories
 */
var VKMiniAppAPI = /** @class */ (function (_super) {
    __extends(VKMiniAppAPI, _super);
    function VKMiniAppAPI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Subscribes a function for listening the `VKWebAppUpdateConfig` event.
         *
         * @category Lifecycle
         * @event VKWebAppUpdateConfig
         * @platform iOS, Android
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onUpdateConfig = function (callback) {
            return _this.subscribeEvent('VKWebAppUpdateConfig', callback);
        };
        /**
         * Subscribes a function for listening the `VKWebAppViewHide` event.
         *
         * @category Lifecycle
         * @event VKWebAppViewHide
         * @platform iOS, Android
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onViewHide = function (callback) {
            return _this.subscribeEvent('VKWebAppViewHide', callback);
        };
        /**
         * Subscribes a function for listening the `VKWebAppViewRestore` event.
         *
         * @category Lifecycle
         * @event VKWebAppViewRestore
         * @platform iOS, Android
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onViewRestore = function (callback) {
            return _this.subscribeEvent('VKWebAppViewRestore', callback);
        };
        /**
         * Subscribes a function for listening the `VKWebAppLocationChanged` event.
         *
         * @category Lifecycle
         * @event VKWebAppLocationChanged
         * @platform Web, iOS, Android
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onLocationChanged = function (callback) {
            return _this.subscribeEvent('VKWebAppLocationChanged', callback);
        };
        /**
         * Allows you to call a VK API method on behalf of the application.
         *
         * @remarks
         * Please note: that in order to work with the API, you need to transfer the
         * user access key with the appropriate rights obtained using `getAccessToken`
         * @see {@link getAccessToken}.
         *
         * @category Common
         * @event VKWebAppCallAPIMethod
         * @platform iOS, Android, Web
         *
         * @param method API method name
         * @param params Parameters of the method, including access token
         */
        _this.callAPIMethod = function (method, params) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppCallAPIMethod', {
                            method: method,
                            params: params
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.response];
                }
            });
        }); };
        /**
         * Closes sub app opened via the `openApp` method. Sends data to the parent
         * app if needed.
         *
         * @category Common
         * @event VKWebAppClose
         * @platform iOS
         */
        _this.closeApp = function (status, payload) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // TODO: figure out what openApp's returns
                    return [4 /*yield*/, this.bridge.send('VKWebAppClose', { status: status, payload: payload })];
                    case 1:
                        // TODO: figure out what openApp's returns
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests user's access and returns access token
         *
         * @remarks
         * Please note: the location from which the token is requested must match
         * the URL specified in the app settings.
         *
         * @category Common
         * @event VKWebAppGetAuthToken
         * @platform iOS, Android, Web
         *
         * @param [scope] List of scopes to request access
         * @returns User's access token and list of accessed scopes
         */
        _this.getAccessToken = function (appId, scope) { return __awaiter(_this, void 0, void 0, function () {
            var strScope, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        strScope = Array.isArray(scope) ? scope.join(',') : scope;
                        return [4 /*yield*/, this.bridge.send('VKWebAppGetAuthToken', {
                                app_id: appId,
                                scope: strScope != null ? strScope : ''
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                accessToken: data.access_token,
                                scope: data.scope.split(',')
                            }];
                }
            });
        }); };
        /**
         * Alias of `getAccessToken`
         * @ignore
         * @deprecated
         *
         * @category Common
         * @event VKWebAppGetAuthToken
         * @platform iOS, Android, Web
         */
        _this.getAuthToken = _this.getAccessToken;
        /**
         * Returns client's platform and version
         *
         * @category Common
         * @event VKWebAppGetClientVersion
         * @platform iOS, Android, Web
         */
        _this.getClientVersion = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppGetClientVersion')];
            });
        }); };
        /**
         * Opens sub app
         *
         * @category Common
         * @event VKWebAppOpenApp
         * @platform iOS, Android, Web
         *
         * @param appId App id to open
         * @param locationHash String in location after `#`
         */
        _this.openApp = function (appId, locationHash) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppOpenApp', {
                            app_id: appId,
                            location: locationHash
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests user email
         *
         * @category Common
         * @event VKWebAppGetEmail
         * @platform iOS, Android, Web
         *
         * @returns User email and sign of received data
         */
        _this.getEmail = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppGetEmail')];
            });
        }); };
        /**
         * Displays modal with friend select
         *
         * @category Common
         * @event VKWebAppGetFriends
         * @platform iOS, Android
         *
         * @param isMultiple Multiple choice
         * @returns List of selected users data
         */
        _this.getFriends = function (isMultiple) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppGetFriends', { multi: isMultiple })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.users];
                }
            });
        }); };
        /**
         * Requests user geodata
         *
         * @category Common
         * @event VKWebAppGetGeodata
         * @platform iOS, Android, Web
         *
         * @returns Object with current user geodata
         */
        _this.getGeodata = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppGetGeodata')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                isAvailable: !!data.available,
                                lat: parseFloat(data.lat),
                                long: parseFloat(data.long)
                            }];
                }
            });
        }); };
        /**
         * Requests user to enter some contact data. Depending on the specified
         * parameters, it is possible to request: phone, email, address.
         *
         * @param types Array of required data types: `phone`, `email`, `address`
         *
         * @category Common
         * @event VKWebAppGetPersonalCard
         * @platform iOS >= 5.4, Android >= 5.24
         *
         * @returns Entered user data
         */
        _this.getPersonalCard = function (types) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppGetPersonalCard', { type: types })];
            });
        }); };
        /**
         * Requests user's phone number
         *
         * @category Common
         * @event VKWebAppGetPhoneNumber
         * @platform iOS, Android, Web
         *
         * @returns Phone number and signature of received phone for server-side
         * validation. The signature is SHA256 checksum of concatenating next values
         * App ID, API secret (specified in the settings of your app), User ID,
         * field name (`phone_number`) and field value.
         */
        _this.getPhoneNumber = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppGetPhoneNumber')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                phone: data.phone_number,
                                sign: data.sign
                            }];
                }
            });
        }); };
        /**
         * Requests the main user data
         *
         * @category Common
         * @event VKWebAppGetUserInfo
         * @platform iOS, Android, Web
         *
         * @returns User data
         */
        _this.getUserInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppGetUserInfo')];
            });
        }); };
        /**
         * Opens QR codes and barcodes reader
         *
         * @category Common
         * @event VKWebAppOpenCodeReader
         * @platform iOS, Android
         *
         * @returns Read data
         */
        _this.openCodeReader = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppOpenCodeReader')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.code_data];
                }
            });
        }); };
        /**
         * Opens a selecting contact from the contact list on the user's device.
         * If user has closed the contact list, called the `VKWebAppContactsClosed`
         *
         * event.
         * @category Common
         * @event VKWebAppOpenContacts
         * @platform iOS, Android
         *
         * @returns Selected contact
         */
        _this.openContacts = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppOpenContacts')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                phone: data.phone,
                                firstName: data.first_name,
                                lastName: data.last_name
                            }];
                }
            });
        }); };
        /**
         * Requests the user to share a link on their wall
         *
         * @category Common
         * @event VKWebAppShare
         * @platform iOS, Android, Web
         *
         * @param message The link to share
         * @returns ID of the post with shared link
         */
        _this.shareLink = function (message) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShare', { link: message })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        }); };
        /**
         * Shows specified photos to user
         *
         * @category Common
         * @event VKWebAppShowImages
         * @platform iOS, Android
         */
        _this.showImages = function (images, start_index) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowImages', { images: images, start_index: start_index })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests adding the app to favorites
         *
         * @category Common
         * @event VKWebAppAddToFavorites
         * @platform iOS, Android
         */
        _this.addToFavorites = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppAddToFavorites')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests the user to post to the wall
         *
         * @category Common
         * @event VKWebAppShowWallPostBox
         * @platform iOS, Android, Web
         *
         * @param message Post message. If you want to publish only attachments,
         * specify an empty string.
         * @param [attachments] List of attachments. May be one of the following
         * types:
         * - Array of attachment objects (@see {@link Attachment})
         * - Array of attachments in the following format:
         *   `<type><owner_id>_<media_id>`. E.g. `photo100172_166443618`
         * - Comma-separated list of attachments in the above format. E.g.
         *   `photo100172_166443618,photo-1_265827614`
         * @param [options] Options object (@see {@link PostMessageOptions})
         * @returns Published post ID
         */
        _this.postToWall = function (message, attachments, options) { return __awaiter(_this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = __assign({ message: message, attachments: Array.isArray(attachments) ? prepareAttachments(attachments) : attachments }, (options && {
                            owner_id: options.ownerId,
                            signed: options.isSigned,
                            place_id: options.placeId,
                            lat: options.lat,
                            long: options.long
                        }));
                        return [4 /*yield*/, this.bridge.send('VKWebAppShowWallPostBox', params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.post_id];
                }
            });
        }); };
        /**
         * Asks user for permission to send notifications from app
         *
         * @category Common
         * @event VKWebAppAllowNotifications
         * @platform iOS, Android, Web
         */
        _this.allowNotifications = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppAllowNotifications')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Disallows notifications
         *
         * @category Common
         * @event VKWebAppDenyNotifications
         * @platform iOS, Android, Web
         */
        _this.denyNotifications = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppDenyNotifications')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Opens story editor
         *
         * @category Stories
         * @event VKWebAppShowStoryBox
         * @platform iOS, Android, Web
         *
         * @param storyOptions Open story options
         */
        _this.showStoryBox = function (storyOptions) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowStoryBox', storyOptions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Subscribes to a story updates
         *
         * @category Stories
         * @event VKWebAppSubscribeStoryApp
         * @platform iOS, Android, Web
         *
         *
         * @param story_owner_id Story owner id
         * @param story_id Story id
         * @param sticker_id Clickable sticker id
         * @param [access_key] Private stories access key
         *
         * @returns Access key
         */
        _this.subscribeStoryApp = function (storyOwnerId, storyId, stickerId, accessKey) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppSubscribeStoryApp', {
                            story_owner_id: storyOwnerId,
                            story_id: storyId,
                            sticker_id: stickerId,
                            access_key: accessKey
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.access_key];
                }
            });
        }); };
        /**
         * Request to add the app to a community. Opens a community selection dialog
         *
         * @remarks
         * Please note: to call the method, in the app settings must be checked
         * "Allow installation in communities". Also, the app must be accessible to
         * everyone.
         *
         * @category Community
         * @event VKWebAppAddToCommunity
         * @platform iOS, Android, Web
         *
         * @returns {Promise<number>} ID of group to which the app was added
         */
        _this.addAppToCommunity = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppAddToCommunity')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.group_id];
                }
            });
        }); };
        /**
         * Asks user for permission to send messages from a community
         *
         * @category Community
         * @event VKWebAppAllowMessagesFromGroup
         * @platform iOS, Android, Web
         *
         * @param communityId Id of a community to request permissions for
         * @param [key] Arbitrary string. This parameter can be used to identify
         * the user. Its value will be returned in the message_allow Callback API
         * event.
         */
        _this.allowCommunityMessages = function (communityId, key) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppAllowMessagesFromGroup', {
                            group_id: communityId,
                            key: key
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests community access for working with API on behalf of the community.
         * The community access token can only be received by its admin.
         *
         * For further work, get a user access key with the rights `scope=groups`
         * and make a request to the `groups.get` method with the `filter=admin`
         * parameter to get a list of identifiers of the administrated communities.
         *
         * @category Community
         * @event VKWebAppGetCommunityToken New universal event
         * @event VKWebAppCommunityAccessToken Legacy events for iOS
         * @event VKWebAppCommunityToken Legacy events for Android
         * @event VKWebAppGetCommunityAuthToken Legacy events for Web
         * @platform iOS, Android, Web
         *
         * @param communityId Community ID
         * @param appId App ID
         * @param [scope] List of scopes to request access
         * @returns Community access token
         */
        _this.getCommunityToken = function (communityId, appId, scope) { return __awaiter(_this, void 0, void 0, function () {
            var strScope, availableMethod, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        strScope = Array.isArray(scope) ? scope.join(',') : '';
                        availableMethod = [
                            'VKWebAppCommunityAccessToken',
                            'VKWebAppCommunityToken',
                            'VKWebAppGetCommunityAuthToken',
                            'VKWebAppGetCommunityToken'
                        ].filter(function (method) { return _this.bridge.supports(method); })[0];
                        if (availableMethod == null) {
                            throw new Error("Couldn't find available method to get community token");
                        }
                        return [4 /*yield*/, this.bridge.send(availableMethod, {
                                app_id: appId,
                                group_id: communityId,
                                scope: strScope
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                accessToken: data.access_token
                            }];
                }
            });
        }); };
        /**
         * Requests for join a community
         *
         * @category Community
         * @event VKWebAppJoinGroup
         * @platform iOS, Android, Web
         */
        _this.joinCommunity = function (communityId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppJoinGroup', { group_id: communityId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Sends event to a community
         *
         * @remarks
         * Dispatches the `app_payload` event, which you can receive through
         * `Bots Longpoll` or `callback_api`. The application from which the event is
         * dispatched must be installed in the community.
         *
         * @category Community
         * @event VKWebAppSendPayload
         * @platform iOS, Android, Web
         *
         * @param communityId Community ID
         * @param payload Any data to send as JSON
         */
        _this.sendPayloadToCommunity = function (communityId, payload) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppSendPayload', {
                            group_id: communityId,
                            payload: payload
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Sens request to open a screen with a preview of the widget for a
         * community
         *
         * @category Community
         * @event VKWebAppShowCommunityWidgetPreviewBox
         */
        _this.showCommunityWidgetPreviewBox = function (communityId, type, code) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowCommunityWidgetPreviewBox', {
                            type: type,
                            group_id: communityId,
                            code: code
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Resizes iframe size in web
         *
         * @category Interface
         * @event VKWebAppResizeWindow
         * @platform Web
         *
         * @param width Width of iframe
         * @param [height] Height of iframe
         *
         * @returns Result size of the iframe
         */
        _this.resizeWindow = function (width, height) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppResizeWindow', { width: width, height: height })];
            });
        }); };
        /**
         * Scrolls window to specified point
         *
         * @category Interface
         * @event VKWebAppScroll
         * @platform Web
         *
         * @param offsetTop Offset top
         * @param [speed] Speed of scrolling if need smooth scroll. Default: 0
         *
         * @returns Offset top and height of window after scroll
         */
        _this.scrollTo = function (offsetTop, speed) {
            if (speed === void 0) { speed = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.bridge.send('VKWebAppScroll', { top: offsetTop, speed: speed })];
                });
            });
        };
        /**
         * Sets location hash to the app (vk.com/app123#hash)
         *
         * @category Interface
         * @event VKWebAppSetLocation
         */
        _this.setLocationHash = function (hash) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppSetLocation', { location: hash })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Changes the appearance of the mini app interface in mobile clients
         *
         * @category Interface
         * @event VKWebAppSetViewSettings
         * @platform iOS, Android
         *
         * @param statusBarStyle Status bar style type: `light` or `dark`
         * @param [actionBarColor] HEX Color of action bar
         * @param [navigationBarColor] HEX color of navigation bar (Android only)
         */
        _this.setViewSettings = function (statusBarStyle, actionBarColor, navigationBarColor) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppSetViewSettings', {
                            status_bar_style: statusBarStyle,
                            action_bar_color: actionBarColor,
                            navigation_bar_color: navigationBarColor
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Enables SwipeBack on iOS
         *
         * @category Interface
         * @event VKWebAppEnableSwipeBack
         * @platform iOS
         */
        _this.enableSwipeBack = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppEnableSwipeBack', {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Disables SwipeBack on iOS
         *
         * @category Interface
         * @event VKWebAppDisableSwipeBack
         * @platform iOS
         */
        _this.disableSwipeBack = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppDisableSwipeBack', {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Requests payment to a specified user of the specified amount via VK Pay
         *
         * @category VK Pay
         * @event VKWebAppOpenPayForm
         * @platform iOS, Android, Web
         *
         * @param amount The amount of payment in rubles. The minimum value is 1₽
         * @param userId User ID
         * @param appId App ID
         * @param [description] Description of the payment for user. The text will
         * be shown in payment dialog
         * @returns Payment result data
         */
        _this.payToUser = function (amount, userId, appId, description) { return __awaiter(_this, void 0, void 0, function () {
            var props, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            action: 'pay-to-user',
                            app_id: appId,
                            params: {
                                amount: amount,
                                user_id: userId,
                                description: description
                            }
                        };
                        return [4 /*yield*/, this.bridge.send('VKWebAppOpenPayForm', props)];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, 'result' in resp ? resp.result : resp];
                }
            });
        }); };
        /**
         * Requests payment to a specified community of the specified amount
         * via VK Pay
         *
         * @category VK Pay
         * @event VKWebAppOpenPayForm
         * @platform iOS, Android, Web
         *
         * @param amount The amount of payment in rubles. The minimum value is 1₽
         * @param communityId Community ID
         * @param appId App ID
         * @param [description] Description of the payment for user. The text will
         * be shown in payment dialog
         * @param [data] Dictionary with arbitrary parameters
         * @returns Payment result data
         */
        _this.payToCommunity = function (amount, communityId, appId, description, data) { return __awaiter(_this, void 0, void 0, function () {
            var props, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            action: 'pay-to-group',
                            app_id: appId,
                            params: {
                                amount: amount,
                                group_id: communityId,
                                description: description,
                                data: data
                            }
                        };
                        return [4 /*yield*/, this.bridge.send('VKWebAppOpenPayForm', props)];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, 'result' in resp ? resp.result : resp];
                }
            });
        }); };
        /**
         * Requests transfer an arbitrary amount to a specified user
         *
         * @category VK Pay
         * @event VKWebAppOpenPayForm
         * @platform iOS, Android, Web
         *
         * @param userId User ID to transfer
         * @param appId App ID
         * @returns Payment result data
         */
        _this.transferToUser = function (userId, appId) { return __awaiter(_this, void 0, void 0, function () {
            var props, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            action: 'transfer-to-user',
                            app_id: appId,
                            params: { user_id: userId }
                        };
                        return [4 /*yield*/, this.bridge.send('VKWebAppOpenPayForm', props)];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, 'result' in resp ? resp.result : resp];
                }
            });
        }); };
        /**
         * Requests transfer an arbitrary amount to a specified community
         *
         * @category VK Pay
         * @event VKWebAppOpenPayForm
         * @platform iOS, Android, Web
         *
         * @param communityId Community ID
         * @param appId App ID
         * @returns Payment result data
         */
        _this.transferToCommunity = function (communityId, appId) { return __awaiter(_this, void 0, void 0, function () {
            var props, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            action: 'transfer-to-group',
                            app_id: appId,
                            params: { group_id: communityId }
                        };
                        return [4 /*yield*/, this.bridge.send('VKWebAppOpenPayForm', props)];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, 'result' in resp ? resp.result : resp];
                }
            });
        }); };
        /**
         * Requests device's flashlight information
         *
         * @category Flashlight
         * @event VKWebAppFlashGetInfo
         * @platform iOS, Android
         *
         * @returns Availability and level of the flashlight
         */
        _this.flashGetInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppFlashGetInfo', {})];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                isAvailable: data.is_available,
                                level: data.level
                            }];
                }
            });
        }); };
        /**
         * Sets device's flashlight level
         *
         * @category Flashlight
         * @event VKWebAppFlashSetLevel
         * @platform iOS, Android
         *
         * @param level The flashlight level from 0 to 1
         */
        _this.flashSetLevel = function (level) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppFlashSetLevel', { level: level })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Opens friends list for inviting to the app
         *
         * @category Direct Games
         * @event VKWebAppShowInviteBox
         * @platform iOS, Android
         */
        _this.showInviteBox = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowInviteBox')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Shows leaderboard
         *
         * @remarks
         * The leaderboard can display the progress of users by points or levels
         * (the type of leaderboard is selected in the application settings). To add
         * a level or points to users, use the `secure.addAppEvent` method.
         *
         * @category Direct Games
         * @event VKWebAppShowLeaderBoardBox
         * @platform iOS, Android
         *
         * @param userResult User result
         */
        _this.showLeaderBoardBox = function (userResult) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowLeaderBoardBox', {
                            user_result: userResult
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Shows item order box
         *
         * @category Direct Games
         * @event VKWebAppShowOrderBox
         *
         * @param itemName Name of product. Will be transmitted in the notification
         * of receipt of product information
         * @returns Status of ordering
         */
        _this.showOrderBox = function (itemName) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppShowOrderBox', {
                            type: 'item',
                            item: itemName
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.status];
                }
            });
        }); };
        /**
         * Shows box for sending request to the user
         *
         * @category Direct Games
         * @event VKWebAppShowRequestBox
         *
         * @param userId User Id
         * @param message Request test
         * @param [requestKey] Optional parameter. Custom string to track conversion.
         * It is passed in the application launch parameters in case of launch from
         * the request.
         * @returns Success flag and request key
         */
        _this.showRequestBox = function (userId, message, requestKey) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bridge.send('VKWebAppShowRequestBox', { uid: userId, message: message, requestKey: requestKey })];
            });
        }); };
        /**
         * Requests a value from the storage
         *
         * @category Storage
         * @event VKWebAppStorageGet
         * @platform iOS, Android, Web
         *
         * @param key Keys for getting ([a-zA-Z_\-0-9])
      
         * @returns The stored value or empty string if the value is not found
         */
        _this.storageGet = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppStorageGet', { keys: [key] })];
                    case 1:
                        data = _a.sent();
                        if (!data || !Array.isArray(data.keys) || data.keys.length === 0) {
                            return [2 /*return*/, ''];
                        }
                        return [2 /*return*/, data.keys[0].value];
                }
            });
        }); };
        /**
         * Requests multiple values from the storage
         *
         * @category Storage
         * @event VKWebAppStorageGet
         * @platform iOS, Android, Web
         *
         * @param keys List of keys for getting ([a-zA-Z_\-0-9])
         *
         * @returns Map of key-value
         */
        _this.storageGetMultiple = function (keys) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppStorageGet', { keys: keys })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data && Array.isArray(data.keys) && data.keys.length > 0
                                ? data.keys.reduce(function (acc, item) {
                                    var _a;
                                    return (__assign(__assign({}, acc), (_a = {}, _a[item.key] = item.value, _a)));
                                }, {})
                                : {}];
                }
            });
        }); };
        /**
         * Request list of keys of some stored values
         *
         * @category Storage
         * @event VKWebAppStorageGetKeys
         * @platform iOS, Android, Web
         *
         * @param count Count of keys to get. Max value is 1000
         * @param [offset] The offset required to fetch a specific subset of keys.
         * Default: 0
         */
        _this.storageGetKeys = function (count, offset) {
            if (offset === void 0) { offset = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.bridge.send('VKWebAppStorageGetKeys', { count: count, offset: offset })];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, (data && data.keys) || []];
                    }
                });
            });
        };
        /**
         * Stores value in storage
         *
         * @category Storage
         * @event VKWebAppStorageSet
         * @platform iOS, Android, Web
         *
         * @param key The key of value ([a-zA-Z_\-0-9])
         * @param value Value
         */
        _this.storageSet = function (key, value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppStorageSet', { key: key, value: value })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Triggers impact feedback in Taptic Engine
         *
         * @category Taptic Engine
         * @event VKWebAppTapticImpactOccurred
         * @platform iOS
         */
        _this.impactOccurred = function (power) {
            if (power === void 0) { power = 'medium'; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.bridge.send('VKWebAppTapticImpactOccurred', { style: power })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Triggers notification feedback in Taptic Engine
         *
         * @category Taptic Engine
         * @event VKWebAppTapticNotificationOccurred
         * @platform iOS
         */
        _this.notificationOccurred = function (type) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppTapticNotificationOccurred', { type: type })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Triggers selection feedback in Taptic Engine
         *
         * @category Taptic Engine
         * @event VKWebAppTapticSelectionChanged
         * @platform iOS
         */
        _this.selectionChanged = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bridge.send('VKWebAppTapticSelectionChanged')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Calls `VKWebAppAccelerometerStart` method and subscribes a function for
         * listening the `VKWebAppAccelerometerChanged` event.
         *
         * @category Device sensors
         * @event VKWebAppAccelerometerChanged
         * @platform iOS
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onAccelerometerChanged = function (callback) {
            return _this.subscribeEvent('VKWebAppAccelerometerChanged', callback, function () { return _this.bridge.send('VKWebAppAccelerometerStart'); }, function () { return _this.bridge.send('VKWebAppAccelerometerStop'); });
        };
        /**
         * Calls `VKWebAppGyroscopeStart` method and subscribes a function for
         * listening the `VKWebAppGyroscopeChanged` event.
         *
         * @category Device sensors
         * @event VKWebAppGyroscopeChanged
         * @platform iOS
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onGyroscopeChanged = function (callback) {
            return _this.subscribeEvent('VKWebAppGyroscopeChanged', callback, function () { return _this.bridge.send('VKWebAppGyroscopeStart'); }, function () { return _this.bridge.send('VKWebAppGyroscopeStop'); });
        };
        /**
         * Calls `VKWebAppDeviceMotionStart` method and subscribes a function for
         * listening the `VKWebAppDeviceMotionChanged` event.
         *
         * @category Device sensors
         * @event VKWebAppDeviceMotionChanged
         * @platform iOS
         *
         * @param callback Function to pass received data
         * @returns Function for unsubscribe
         */
        _this.onDeviceMotionChanged = function (callback) {
            return _this.subscribeEvent('VKWebAppDeviceMotionChanged', callback, function () { return _this.bridge.send('VKWebAppDeviceMotionStart'); }, function () { return _this.bridge.send('VKWebAppDeviceMotionStop'); });
        };
        return _this;
    }
    /**
     * Initializes the VK Mini App. Must be called before using any API method
     *
     * @category Common
     * @event VKWebAppInit
     * @platform iOS, Android, Web
     */
    VKMiniAppAPI.prototype.initApp = function () {
        this.bridge.send('VKWebAppInit', {});
    };
    return VKMiniAppAPI;
}(VKBridgeProvider));

export { VKMiniAppAPI };
