import { r as react, c as createCommonjsModule, g as getDefaultExportFromCjs } from '../common/index-50b0b662.js';
import { b as bridge } from '../common/index.es-422a7efb.js';
import { r as reactDom } from '../common/index-ed440ea1.js';
import { e as es6ObjectAssign, b as browserSymbol } from '../common/browser-sprite-29b2ca92.js';
import { u as useIsomorphicLayoutEffect$1, S as SvgIcon, a as addSpriteSymbol, I as IconSettingsProvider } from '../common/SvgIcon-f0a731ff.js';

var viewBox$3 = '0 0 16 16';
var id$3 = 'clear_16';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16"><path d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted$3 = false;

function mountIcon$3() {
  if (!isMounted$3) {
    addSpriteSymbol(new browserSymbol({
      id: id$3,
      viewBox: viewBox$3,
      content: content$3
    }));
    isMounted$3 = true;
  }
}

var Icon16Clear = function Icon16Clear(props) {
  useIsomorphicLayoutEffect$1(function () {
    mountIcon$3();
  }, []);
  return /*#__PURE__*/react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Clear.mountIcon = mountIcon$3;
var Icon16Clear$1 = Icon16Clear;

var viewBox$2 = '0 0 16 16';
var id$2 = 'search_outline_16';
var content$2 = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_outline_16"><path d="M6.5 1a5.5 5.5 0 014.383 8.823l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z" fill="currentColor" /></symbol>';
var isMounted$2 = false;

function mountIcon$2() {
  if (!isMounted$2) {
    addSpriteSymbol(new browserSymbol({
      id: id$2,
      viewBox: viewBox$2,
      content: content$2
    }));
    isMounted$2 = true;
  }
}

var Icon16SearchOutline = function Icon16SearchOutline(props) {
  useIsomorphicLayoutEffect$1(function () {
    mountIcon$2();
  }, []);
  return /*#__PURE__*/react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16SearchOutline.mountIcon = mountIcon$2;
var Icon16SearchOutline$1 = Icon16SearchOutline;

var viewBox$1 = '0 0 24 24';
var id$1 = 'cancel_24';
var content$1 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" fill="currentColor" /></g></symbol>';
var isMounted$1 = false;

function mountIcon$1() {
  if (!isMounted$1) {
    addSpriteSymbol(new browserSymbol({
      id: id$1,
      viewBox: viewBox$1,
      content: content$1
    }));
    isMounted$1 = true;
  }
}

var Icon24Cancel = function Icon24Cancel(props) {
  useIsomorphicLayoutEffect$1(function () {
    mountIcon$1();
  }, []);
  return /*#__PURE__*/react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Cancel.mountIcon = mountIcon$1;
var Icon24Cancel$1 = Icon24Cancel;

var viewBox = '0 0 16 24';
var id = 'chevron_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new browserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Chevron = function Icon24Chevron(props) {
  useIsomorphicLayoutEffect$1(function () {
    mountIcon();
  }, []);
  return /*#__PURE__*/react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Chevron.mountIcon = mountIcon;
var Icon24Chevron$1 = Icon24Chevron;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _extends = /*@__PURE__*/getDefaultExportFromCjs(_extends_1);

// exported for tests =(
var __controller = {
  _noConflict: false,
  _isSet: false,

  get noConflict() {
    return this._noConflict;
  },

  set noConflict(v) {
    if (this._isSet && v !== this.noConflict) {
      setTimeout(function () {
        throw new Error('[vkui]: Single VKUI instance can not have different globalClassName settings');
      }, 0);
    }

    this._noConflict = v;
    this._isSet = true;
  }

};
var classScopingMode = __controller;

var hasTransformable = /\b(?=[A-Z])/g;
var noConflictCache = {};
var legacyCache = {};

function prefixSingle(scopedStyle) {
  var noConflict = classScopingMode.noConflict;
  var cache = noConflict ? noConflictCache : legacyCache;

  if (cache[scopedStyle]) {
    return cache[scopedStyle];
  }

  var prefixed = scopedStyle.replace(hasTransformable, 'vkui');
  var resolved = noConflict || scopedStyle === prefixed ? prefixed : prefixed + ' ' + scopedStyle;
  cache[scopedStyle] = resolved;
  return resolved;
}

function prefixClass(scopedStyle) {
  if (typeof scopedStyle === 'string') {
    return prefixSingle(scopedStyle);
  }

  var resolved = '';

  for (var i = 0; i < scopedStyle.length; i++) {
    var separator = resolved ? ' ' : '';
    resolved += separator + prefixSingle(scopedStyle[i]);
  }

  return resolved;
}

function processProps(props) {
  var newProps = {};

  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'vkuiClass') {
      newProps[key] = props[key];
    }
  }

  if (props.vkuiClass) {
    var className = props.className;
    var resolved = prefixClass(props.vkuiClass);
    newProps.className = className ? className + ' ' + resolved : resolved;
  }

  return newProps;
}

function _createScopedElement(_type, props) {
  var args = arguments;

  if (!props || !('vkuiClass' in props)) {
    return react.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = args[0];
  createElementArgArray[1] = processProps(props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return react.createElement.apply(null, createElementArgArray);
}

_createScopedElement.Fragment = react.Fragment;
var createScopedElement = _createScopedElement;

var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);
var canUseEventListeners = canUseDOM && !!window.addEventListener;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof_1);

var noop$1 = function noop() {}; // eslint-disable-line @typescript-eslint/no-empty-function

var isPassiveEventsSupported = false;

if (canUseEventListeners) {
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        isPassiveEventsSupported = true;
      }
    });
    window.addEventListener('test', noop$1, options);
    window.removeEventListener('test', noop$1, options);
  } catch (e) {}
}

function detectSmoothScrollSupport() {
  if (!canUseDOM) {
    return false;
  }

  var isSupported = false;

  try {
    var div = document.createElement('div');
    div.scrollTo({
      top: 0,

      // @ts-ignore
      get behavior() {
        isSupported = true;
        return 'smooth';
      }

    });
  } catch (e) {}

  return isSupported;
}

detectSmoothScrollSupport();

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _toConsumableArray = /*@__PURE__*/getDefaultExportFromCjs(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass);

function detectIOS(ua) {
  if (!ua) {
    ua = canUseDOM ? navigator.userAgent.toLowerCase() : '';
  }

  var isIPadOS = checkIPadOS(ua);
  var isIPad = isIPadOS || ua.indexOf('ipad') !== -1;
  var isIPhone = !isIPad && ua.search(/iphone|ipod/) !== -1;
  var isIOS = isIPhone || isIPad;
  var iosVersion = isIOS && ua.match(/OS ([\d_]+) like Mac OS X/i);
  var iosMajor = 0;
  var iosMinor = 0;

  if (isIPadOS) {
    iosMajor = 13;
    iosMinor = 0;
  } else if (iosVersion) {
    iosVersion = iosVersion[1].split('_');
    iosMajor = +iosVersion[0];
    iosMinor = +iosVersion[1];
  }

  iosVersion = null;
  var isScrollBasedViewport = iosMajor < 13 && !(iosMajor === 11 && iosMinor < 3);
  var isWKWebView = isIOS && checkWKWebView(ua);
  var isIPhoneX = false;

  if (canUseDOM) {
    isIPhoneX = isIOS && screen.width === 375 && screen.height === 812 && window.devicePixelRatio === 3;
  }

  var isIOSChrome = ua.search(/crios/i) !== -1;
  return {
    isIPad: isIPad,
    isIPhone: isIPhone,
    isIOS: isIOS,
    isIPadOS: isIPadOS,
    iosMajor: iosMajor,
    iosMinor: iosMinor,
    isWKWebView: isWKWebView,
    isScrollBasedViewport: isScrollBasedViewport,
    isIPhoneX: isIPhoneX,
    isIOSChrome: isIOSChrome
  };
}

var _detectIOS = detectIOS(),
    isIOS = _detectIOS.isIOS,
    isIPadOS = _detectIOS.isIPadOS;
// https://stackoverflow.com/questions/28795476/detect-if-page-is-loaded-inside-wkwebview-in-javascript/30495399#30495399

function checkWKWebView(ua) {
  if (!canUseDOM) {
    return false;
  }

  var webkit = window.webkit;

  if (webkit && webkit.messageHandlers) {
    return true;
  }

  var lte9 = /constructor/i.test(String(window.HTMLElement));
  var idb = !!window.indexedDB;

  if (ua.indexOf('safari') !== -1 && ua.indexOf('version') !== -1 && !navigator.standalone) ; else if (!idb && lte9 || !(window.statusbar && window.statusbar.visible)) ; else if (!lte9 || idb) {
    // WKWebView
    return true;
  }

  return false;
}

function checkIPadOS(ua) {
  if (!canUseDOM) {
    return false;
  }

  var notIOS = !/ipad|iphone|ipod/.test(ua);
  var macOS = /mac os/.test(ua);

  if (macOS && notIOS && typeof navigator.standalone === 'boolean') {
    return true;
  }

  return false;
}

var hasMouse;
var hasTouchEvents;
var hasHover;
var hasTouch;

if (canUseDOM) {
  if (isIOS && !isIPadOS) {
    hasMouse = false;
    hasHover = false;
    hasTouchEvents = true;
    hasTouch = true;
  } else {
    hasTouchEvents = 'ontouchstart' in document;
    hasTouch = hasTouchEvents || 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;

    if (hasTouch) {
      var notMobile = !/android|mobile|tablet/i.test(navigator.userAgent);
      hasMouse = window.matchMedia && matchMedia('(pointer)').matches ? matchMedia('(pointer: fine)').matches : notMobile;
      hasHover = hasMouse && (window.matchMedia && matchMedia('(hover)').matches ? matchMedia('(hover: hover)').matches : notMobile);
    } else {
      hasMouse = true;
      hasHover = true;
    }
  }
} else {
  hasMouse = false;
  hasTouchEvents = false;
  hasHover = false;
  hasTouch = false;
}

/* eslint-disable no-restricted-globals */
var getDOM = function getDOM() {
  return {
    window: canUseDOM ? window : null,
    document: canUseDOM ? document : null
  };
};
/* eslint-enable no-restricted-globals */

var DOMContext = /*#__PURE__*/react.createContext(getDOM());
var useDOM = function useDOM() {
  return react.useContext(DOMContext);
};
function withDOM(Component) {
  var WithDOM = function WithDOM(props) {
    var dom = useDOM();
    return createScopedElement(Component, _extends({}, props, dom));
  };

  return WithDOM;
}
function blurActiveElement(document) {
  if (document && document.activeElement) {
    document.activeElement.blur();
  }
}

/* eslint-disable */

if (canUseDOM) {
  var ElementProto = Element.prototype; // Element.prototype.matches

  if (!ElementProto.matches) {
    ElementProto.matches = ElementProto.matchesSelector || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector;
  } // Element.prototype.closest


  if (!ElementProto.closest) {
    ElementProto.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }

      return null;
    };
  }
} // Array.prototype.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }

        k++;
      }

      return false;
    }
  });
} // Array.prototype.find


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        var element = list[i];

        if (callback.call(thisArg, element, i, list)) {
          return element;
        }
      }
    }
  });
}

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectWithoutProperties = /*@__PURE__*/getDefaultExportFromCjs(objectWithoutProperties);

function classNames() {
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];

    if (!item) {
      continue;
    }

    switch (_typeof(item)) {
      case 'string':
        result.push(item);
        break;

      case 'object':
        for (var key in item) {
          if (item[key]) {
            result.push(key);
          }
        }

        break;

      default:
        result.push("".concat(item));
    }
  }

  return result.length > 1 ? result : result[0] || '';
}

var System;

(function (System) {
  System["IOS"] = "ios";
  System["UNKNOWN"] = "";
})(System || (System = {}));

var memoized = {};
function computeBrowserInfo() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  var systemVersion = null;
  var system = System.UNKNOWN;

  var _detectIOS = detectIOS(userAgent),
      isIOS = _detectIOS.isIOS,
      iosMajor = _detectIOS.iosMajor,
      iosMinor = _detectIOS.iosMinor;

  if (isIOS) {
    system = System.IOS;
    systemVersion = {
      major: iosMajor,
      minor: iosMinor
    };
  }

  var browserInfo = {
    userAgent: userAgent,
    system: system,
    systemVersion: systemVersion
  };
  memoized[userAgent] = browserInfo;
  return browserInfo;
}

var Platform;

(function (Platform) {
  Platform["ANDROID"] = "android";
  Platform["IOS"] = "ios";
  Platform["VKCOM"] = "vkcom";
})(Platform || (Platform = {}));

var ANDROID = Platform.ANDROID;
var IOS = Platform.IOS;
var VKCOM = Platform.VKCOM;
function platform(browserInfo) {
  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? IOS : ANDROID;
}
platform();

function getClassName(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}

var Appearance;

(function (Appearance) {
  Appearance["DARK"] = "dark";
  Appearance["LIGHT"] = "light";
})(Appearance || (Appearance = {}));

var Scheme;

(function (Scheme) {
  Scheme["DEPRECATED_CLIENT_LIGHT"] = "client_light";
  Scheme["DEPRECATED_CLIENT_DARK"] = "client_dark";
  Scheme["VKCOM"] = "vkcom";
  Scheme["BRIGHT_LIGHT"] = "bright_light";
  Scheme["SPACE_GRAY"] = "space_gray";
  Scheme["VKCOM_LIGHT"] = "vkcom_light";
  Scheme["VKCOM_DARK"] = "vkcom_dark";
})(Scheme || (Scheme = {}));

var WebviewType;

(function (WebviewType) {
  WebviewType["VKAPPS"] = "vkapps";
  WebviewType["INTERNAL"] = "internal";
})(WebviewType || (WebviewType = {}));

var defaultConfigProviderProps = {
  webviewType: WebviewType.VKAPPS,
  isWebView: bridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  transitionMotionEnabled: true,
  platform: platform() // appearance is auto-detected by default
  // appearance: Appearance.LIGHT,

};
var ConfigProviderContext = /*#__PURE__*/react.createContext(defaultConfigProviderProps);

var objectSpread2 = createCommonjsModule(function (module) {
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectSpread = /*@__PURE__*/getDefaultExportFromCjs(objectSpread2);

var _excluded$n = ["children", "width", "maxWidth", "minWidth", "spaced", "animate", "fixed", "style"];
var SplitColContext = /*#__PURE__*/react.createContext({
  colRef: null,
  animate: true
});
var SplitCol = function SplitCol(props) {
  var children = props.children,
      width = props.width,
      maxWidth = props.maxWidth,
      minWidth = props.minWidth,
      spaced = props.spaced,
      _props$animate = props.animate,
      animate = _props$animate === void 0 ? false : _props$animate,
      fixed = props.fixed,
      style = props.style,
      restProps = _objectWithoutProperties(props, _excluded$n);

  var baseRef = react.useRef();
  var contextValue = react.useMemo(function () {
    return {
      colRef: baseRef,
      animate: animate
    };
  }, [baseRef, animate]);
  return createScopedElement("div", _extends({}, restProps, {
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }),
    ref: baseRef,
    vkuiClass: classNames('SplitCol', {
      'SplitCol--spaced': spaced,
      'SplitCol--fixed': fixed
    })
  }), createScopedElement(SplitColContext.Provider, {
    value: contextValue
  }, fixed ? createScopedElement("div", {
    vkuiClass: "SplitCol__fixedInner"
  }, children) : children));
};

var AppRootContext = /*#__PURE__*/react.createContext({
  portalRoot: null
});

var AppRootPortal = function AppRootPortal(_ref) {
  var _forcePortal;

  var children = _ref.children,
      className = _ref.className,
      forcePortal = _ref.forcePortal;

  var _React$useContext = react.useContext(AppRootContext),
      portalRoot = _React$useContext.portalRoot,
      mode = _React$useContext.mode;

  forcePortal = (_forcePortal = forcePortal) !== null && _forcePortal !== void 0 ? _forcePortal : mode !== 'full';
  return portalRoot && forcePortal ? /*#__PURE__*/reactDom.createPortal(createScopedElement("div", {
    className: className
  }, children), portalRoot) : createScopedElement(react.Fragment, null, children);
};

function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null && value !== '';
}
function isPrimitiveReactNode(node) {
  return typeof node === 'string' || typeof node === 'number';
}
function setRef(element, ref) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      ref.current = element;
    }
  }
}

var noop = function noop() {};

var clamp = function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
};

var ScrollContext = /*#__PURE__*/react.createContext({
  getScroll: function getScroll() {
    return {
      x: 0,
      y: 0
    };
  },
  scrollTo: noop
});
var globalScrollController = function globalScrollController(window, document) {
  return {
    getScroll: function getScroll() {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    },
    scrollTo: function scrollTo() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Some iOS versions do not normalize scroll — do it manually.
      window.scrollTo(x ? clamp(x, 0, document.body.scrollWidth - window.innerWidth) : 0, y ? clamp(y, 0, document.body.scrollHeight - window.innerHeight) : 0);
    }
  };
};
var elementScrollController = function elementScrollController(elRef) {
  return {
    getScroll: function getScroll() {
      return {
        x: elRef.current.scrollLeft,
        y: elRef.current.scrollTop
      };
    },
    scrollTo: function scrollTo() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var el = elRef.current; // Some iOS versions do not normalize scroll — do it manually.

      el.scrollTo(x ? clamp(x, 0, el.scrollWidth - el.clientWidth) : 0, y ? clamp(y, 0, el.scrollHeight - el.clientHeight) : 0);
    }
  };
};

function objectEquals(o1, o2) {
  return Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(function (k) {
    return o1[k] === o2[k];
  });
}
function useObjectMemo(object) {
  var cache = react.useRef(object);

  if (!objectEquals(cache.current, object)) {
    cache.current = object;
  }

  return cache.current;
}

var TransitionContext = /*#__PURE__*/react.createContext({
  entering: false
});
var useNavTransition = function useNavTransition() {
  return react.useContext(TransitionContext);
};
var NavTransitionProvider = function NavTransitionProvider(_ref) {
  var children = _ref.children,
      entering = _ref.entering;
  var parentContext = useNavTransition();
  var contextValue = useObjectMemo({
    entering: parentContext.entering || entering
  });
  return createScopedElement(TransitionContext.Provider, {
    value: contextValue
  }, children);
};

function getNavId(props, warn) {
  var id = props.nav || props.id;

  return id;
}

var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

function useTimeout(cb, duration) {
  var options = react.useRef({
    cb: cb,
    duration: duration
  });
  useIsomorphicLayoutEffect(function () {
    options.current.cb = cb;
    options.current.duration = duration;
  }, [cb, duration]);
  var timeout = react.useRef();
  var clear = react.useCallback(function () {
    return canUseDOM && clearTimeout(timeout.current);
  }, []);
  var set = react.useCallback(function () {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : options.current.duration;
    clear();

    if (canUseDOM) {
      timeout.current = setTimeout(function () {
        var cb = options.current.cb;
        typeof cb === 'function' && cb();
      }, duration);
    }
  }, []);
  useIsomorphicLayoutEffect(function () {
    return clear;
  }, []);
  return {
    set: set,
    clear: clear
  };
}

var SSRContext = /*#__PURE__*/react.createContext({
  platform: null,
  userAgent: '',
  browserInfo: undefined
});

function usePlatform() {
  var ssrContext = react.useContext(SSRContext);

  var _React$useContext = react.useContext(ConfigProviderContext),
      platform = _React$useContext.platform;

  return ssrContext.platform || platform;
}

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized);

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var inherits = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits);

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var isNativeReflectConstruct = createCommonjsModule(function (module) {
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var createSuper = createCommonjsModule(function (module) {
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createSuper = /*@__PURE__*/getDefaultExportFromCjs(createSuper);

var isTesting = Boolean(canUseDOM && window.__isVkuiTesting);

var animationEvent = {
  supported: false
};
var transitionEvent = {
  supported: false,
  name: null
};

if (canUseDOM && !isTesting) {
  if (typeof AnimationEvent !== 'undefined') {
    animationEvent.supported = true;
  } else if (typeof WebKitAnimationEvent !== 'undefined') {
    animationEvent.supported = true;
  }

  if (typeof TransitionEvent !== 'undefined') {
    transitionEvent.supported = true;
    transitionEvent.name = 'transitionend';
  } else if (typeof WebKitTransitionEvent !== 'undefined') {
    transitionEvent.supported = true;
    transitionEvent.name = 'webkitTransitionEnd';
  }
}

/*
 * Получает координату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  if (e.clientX != null) {
    return e.clientX;
  }

  return e.changedTouches && e.changedTouches[0].clientX;
};
/*
 * Получает координату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  if (e.clientY != null) {
    return e.clientY;
  }

  return e.changedTouches && e.changedTouches[0].clientY;
}; // eslint-disable-next-line no-restricted-globals


var touchEnabled = function touchEnabled() {
  return canUseDOM && 'ontouchstart' in window;
};
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */


function getSupportedEvents() {
  if (touchEnabled()) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

function useExternRef() {
  for (var _len = arguments.length, externRefs = new Array(_len), _key = 0; _key < _len; _key++) {
    externRefs[_key] = arguments[_key];
  }

  var stableRef = react.useRef();
  return react.useMemo(function () {
    return {
      get current() {
        return stableRef.current;
      },

      set current(el) {
        stableRef.current = el;
        externRefs.forEach(function (ref) {
          return setRef(el, ref);
        });
      }

    };
  }, externRefs);
}

function useEventListener(event, _cb, _options) {
  var cbRef = react.useRef(_cb);
  useIsomorphicLayoutEffect(function () {
    cbRef.current = _cb;
  }, [_cb]);
  var cb = react.useCallback(function (e) {
    return cbRef.current && cbRef.current(e);
  }, []);
  var detach = react.useRef(noop);
  var remove = react.useCallback(function () {
    detach.current();
    detach.current = noop;
  }, []);
  var add = react.useCallback(function (el) {
    if (!canUseDOM) {
      return;
    }

    remove();

    if (!el) {
      return;
    }

    var options = _objectSpread({}, _options);

    el.addEventListener(event, cb, options);

    detach.current = function () {
      return el.removeEventListener(event, cb, options);
    };
  }, []);
  react.useEffect(function () {
    return remove;
  }, []);
  return {
    add: add,
    remove: remove
  };
}

var _excluded$m = ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "onClickCapture", "usePointerHover", "slideThreshold", "useCapture", "Component", "getRootRef", "noSlideClick", "stopPropagation"];
var Touch = function Touch(_ref) {
  var onStart = _ref.onStart,
      onStartX = _ref.onStartX,
      onStartY = _ref.onStartY,
      _onMove = _ref.onMove,
      onMoveX = _ref.onMoveX,
      onMoveY = _ref.onMoveY,
      onLeave = _ref.onLeave,
      onEnter = _ref.onEnter,
      _onEnd = _ref.onEnd,
      onEndX = _ref.onEndX,
      onEndY = _ref.onEndY,
      onClickCapture = _ref.onClickCapture,
      usePointerHover = _ref.usePointerHover,
      _ref$slideThreshold = _ref.slideThreshold,
      slideThreshold = _ref$slideThreshold === void 0 ? 5 : _ref$slideThreshold,
      _ref$useCapture = _ref.useCapture,
      useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      getRootRef = _ref.getRootRef,
      _ref$noSlideClick = _ref.noSlideClick,
      noSlideClick = _ref$noSlideClick === void 0 ? false : _ref$noSlideClick,
      _ref$stopPropagation = _ref.stopPropagation,
      stopPropagation = _ref$stopPropagation === void 0 ? false : _ref$stopPropagation,
      restProps = _objectWithoutProperties(_ref, _excluded$m);

  var _useDOM = useDOM(),
      document = _useDOM.document;

  var events = react.useMemo(getSupportedEvents, []);
  var didSlide = react.useRef(false);
  var gesture = react.useRef(null);

  var handle = function handle(e, handers) {
    stopPropagation && e.stopPropagation();
    handers.forEach(function (cb) {
      var duration = Date.now() - gesture.current.startT.getTime();
      cb && cb(_objectSpread(_objectSpread({}, gesture.current), {}, {
        duration: duration,
        originalEvent: e
      }));
    });
  };

  var enterHandler = useEventListener(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
  var leaveHandler = useEventListener(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
  var startHandler = useEventListener(events[0], function (e) {
    gesture.current = initGesture(coordX(e), coordY(e));
    handle(e, [onStart, onStartX, onStartY]); // 1 line, 2 bad specs, 2 workarounds:

    subscribe(touchEnabled() // Touch events fire on initial target, and won't bubble if its removed
    // see: #235, #1968, https://stackoverflow.com/a/45760014
    ? e.target // Mouse events fire on the element under pointer, so we lose move / end
    // if pointer goes outside container.
    // Can be fixed by PointerEvents' setPointerCapture later
    : document);
  }, {
    capture: useCapture,
    passive: false
  });
  var containerRef = useExternRef(getRootRef);
  useIsomorphicLayoutEffect(function () {
    var el = containerRef.current;
    enterHandler.add(el);
    leaveHandler.add(el);
    startHandler.add(el);
  }, [Component]);

  function onMove(e) {
    var _gesture$current = gesture.current,
        isPressed = _gesture$current.isPressed,
        isX = _gesture$current.isX,
        isY = _gesture$current.isY,
        startX = _gesture$current.startX,
        startY = _gesture$current.startY;

    if (isPressed) {
      // смещения
      var shiftX = coordX(e) - startX;
      var shiftY = coordY(e) - startY; // абсолютные значения смещений

      var shiftXAbs = Math.abs(shiftX);
      var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

      if (!!e.touches && e.touches.length > 1) {
        return onEnd(e);
      } // если мы ещё не определились


      if (!isX && !isY) {
        var willBeX = shiftXAbs >= slideThreshold && shiftXAbs > shiftYAbs;
        var willBeY = shiftYAbs >= slideThreshold && shiftYAbs > shiftXAbs;
        var willBeSlidedX = willBeX && (!!onMoveX || !!_onMove);
        var willBeSlidedY = willBeY && (!!onMoveY || !!_onMove);
        Object.assign(gesture.current, {
          isY: willBeY,
          isX: willBeX,
          isSlideX: willBeSlidedX,
          isSlideY: willBeSlidedY,
          isSlide: willBeSlidedX || willBeSlidedY
        });
      }

      if (gesture.current.isSlide) {
        Object.assign(gesture.current, {
          shiftX: shiftX,
          shiftY: shiftY,
          shiftXAbs: shiftXAbs,
          shiftYAbs: shiftYAbs
        });
        handle(e, [_onMove, gesture.current.isSlideX && onMoveX, gesture.current.isSlideY && onMoveY]);
      }
    }
  }

  function onEnd(e) {
    var _gesture$current2 = gesture.current,
        isPressed = _gesture$current2.isPressed,
        isSlide = _gesture$current2.isSlide,
        isSlideX = _gesture$current2.isSlideX,
        isSlideY = _gesture$current2.isSlideY;

    if (isPressed) {
      handle(e, [_onEnd, isSlideY && onEndY, isSlideX && onEndX]);
    }

    didSlide.current = isSlide;
    gesture.current = {}; // Если это был тач-евент, симулируем отмену hover

    if (touchEnabled()) {
      onLeave && onLeave(e);
    }

    subscribe(null);
  }

  var listenerParams = {
    capture: useCapture,
    passive: false
  };
  var listeners = [useEventListener(events[1], onMove, listenerParams), useEventListener(events[2], onEnd, listenerParams), useEventListener(events[3], onEnd, listenerParams)];

  function subscribe(el) {
    listeners.forEach(function (l) {
      return l.add(el);
    });
  }
  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   */


  var onDragStart = function onDragStart(e) {
    var target = e.target;

    if (target.tagName === 'A' || target.tagName === 'IMG') {
      e.preventDefault();
    }
  };
  /**
   * Обработчик клика по компоненту
   * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
   */


  var postGestureClick = function postGestureClick(e) {
    if (!didSlide.current) {
      return onClickCapture && onClickCapture(e);
    } // eslint-disable-next-line no-restricted-properties


    if (e.target.closest('a')) {
      e.preventDefault();
    }

    if (noSlideClick) {
      e.stopPropagation();
    } else {
      onClickCapture && onClickCapture(e);
    }

    didSlide.current = false;
  };

  return createScopedElement(Component, _extends({}, restProps, {
    onDragStart: onDragStart,
    onClickCapture: postGestureClick,
    ref: containerRef
  }));
};

function initGesture(startX, startY) {
  return {
    startX: startX,
    startY: startY,
    startT: new Date(),
    duration: 0,
    isPressed: true,
    isY: false,
    isX: false,
    isSlideX: false,
    isSlideY: false,
    isSlide: false,
    shiftX: 0,
    shiftY: 0,
    shiftXAbs: 0,
    shiftYAbs: 0
  };
}

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = react.useContext(SSRContext);

    var _React$useContext = react.useContext(ConfigProviderContext),
        platform = _React$useContext.platform; // @ts-ignore


    return createScopedElement(Component, _extends({}, props, {
      platform: ssrContext.platform || platform
    }));
  }

  return WithPlatform;
}

function withContext(Component, Ctx, prop) {
  function WithContext(props) {
    var context = react.useContext(Ctx); // @ts-ignore

    return createScopedElement(Component, _extends({}, props, _defineProperty({}, prop, context)));
  }

  return WithContext;
}

var swipeBackExcludedSelector = 'input, textarea, [data-vkui-swipe-back=false]';
function swipeBackExcluded(e) {
  var target = e.originalEvent.target;
  return Boolean(target === null || target === void 0 ? void 0 : target.closest(swipeBackExcludedSelector));
}

var _excluded$l = ["popout", "modal", "platform", "activePanel", "splitCol", "configProvider", "history", "nav", "onTransition", "onSwipeBack", "onSwipeBackStart", "onSwipeBackCancel", "window", "document", "scroll"];
var SwipeBackResults;

(function (SwipeBackResults) {
  SwipeBackResults[SwipeBackResults["fail"] = 1] = "fail";
  SwipeBackResults[SwipeBackResults["success"] = 2] = "success";
})(SwipeBackResults || (SwipeBackResults = {}));

var scrollsCache = {};

var View = /*#__PURE__*/function (_React$Component) {
  _inherits(View, _React$Component);

  var _super = _createSuper(View);

  function View(props) {
    var _this;

    _classCallCheck(this, View);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "scrolls", scrollsCache[getNavId(_this.props)] || {});

    _defineProperty(_assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationFinishTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "panelNodes", {});

    _defineProperty(_assertThisInitialized(_this), "transitionEndHandler", function (e) {
      if (!e || ['vkui-animation-ios-next-forward', 'vkui-animation-ios-prev-back', 'vkui-animation-view-next-forward', 'vkui-animation-view-prev-back'].includes(e.animationName)) {
        _this.flushTransition(_this.state.prevPanel, _this.state.isBack);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "swipingBackTransitionEndHandler", function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (!e || e !== null && e !== void 0 && e.propertyName.includes('transform') && (e === null || e === void 0 ? void 0 : e.target) === _this.pickPanel(_this.state.swipeBackNextPanel)) {
        switch (_this.state.swipeBackResult) {
          case SwipeBackResults.fail:
            _this.onSwipeBackCancel();

            break;

          case SwipeBackResults.success:
            _this.onSwipeBackSuccess();

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMoveX", function (e) {
      if (swipeBackExcluded(e)) {
        return;
      }

      var _this$props = _this.props,
          platform = _this$props.platform,
          configProvider = _this$props.configProvider;

      if (platform === IOS && !configProvider.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({
          browserSwipe: true
        });
      }

      if (platform === IOS && configProvider.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.scrolls[_this.state.activePanel] = _this.props.scroll.getScroll().y;

          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0]
          });
        }

        if (_this.state.swipingBack) {
          var swipeBackShift;

          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }

          _this.setState({
            swipeBackShift: swipeBackShift
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEnd", function (e) {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / e.duration * 1000;

        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else if (speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2) {
          _this.setState({
            swipeBackResult: SwipeBackResults.success
          });
        } else {
          _this.setState({
            swipeBackResult: SwipeBackResults.fail
          });
        }
      }
    });

    _this.state = {
      animated: false,
      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,
      browserSwipe: false
    };
    return _this;
  }

  _createClass(View, [{
    key: "document",
    get: function get() {
      return this.props.document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.props.window;
    }
  }, {
    key: "panels",
    get: function get() {
      return react.Children.toArray(this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var id = getNavId(this.props);

      if (id) {
        scrollsCache[id] = this.scrolls;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      this.props.popout && !prevProps.popout && this.blurActiveElement();
      this.props.modal && !prevProps.modal && this.blurActiveElement(); // Нужен переход

      if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
        var firstLayerId = this.panels.map(function (panel) {
          return getNavId(panel.props);
        }).find(function (id) {
          return id === prevProps.activePanel || id === _this2.props.activePanel;
        });
        var isBack = firstLayerId === this.props.activePanel;
        this.scrolls[prevProps.activePanel] = this.props.scroll.getScroll().y;

        if (this.shouldDisableTransitionMotion()) {
          this.flushTransition(prevProps.activePanel, isBack);
        } else {
          this.blurActiveElement();
          this.setState({
            visiblePanels: [prevProps.activePanel, this.props.activePanel],
            prevPanel: prevProps.activePanel,
            nextPanel: this.props.activePanel,
            activePanel: null,
            animated: true,
            isBack: isBack
          }); // Фолбек анимации перехода

          if (!animationEvent.supported) {
            clearTimeout(this.animationFinishTimeout);
            this.animationFinishTimeout = setTimeout(this.transitionEndHandler, this.props.platform === ANDROID || this.props.platform === VKCOM ? 300 : 600);
          }
        }
      } // Закончилась анимация свайпа назад


      if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
        var nextPanel = this.props.activePanel;
        var prevPanel = prevProps.activePanel;
        this.scrolls[prevState.swipeBackPrevPanel] = 0;
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel]
        }, function () {
          _this2.props.scroll.scrollTo(0, _this2.scrolls[_this2.state.activePanel]);

          prevProps.onTransition && prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel
          });
        });
      } // Начался свайп назад


      if (!prevState.swipingBack && this.state.swipingBack) {
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();
      } // Началась анимация завершения свайпа назад.


      if (!prevState.swipeBackResult && this.state.swipeBackResult) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      } // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)


      if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
        this.props.scroll.scrollTo(0, this.scrolls[this.state.activePanel]);
      } // Закончился Safari свайп


      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(elem, eventHandler) {
      if (transitionEvent.supported) {
        elem.removeEventListener(transitionEvent.name, eventHandler);
        elem.addEventListener(transitionEvent.name, eventHandler);
      } else {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID || this.props.platform === VKCOM ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "pickPanel",
    value: function pickPanel(id) {
      return this.panelNodes[id];
    }
  }, {
    key: "flushTransition",
    value: function flushTransition(prevPanel, isBack) {
      var _this3 = this;

      var activePanel = this.props.activePanel;

      if (isBack) {
        this.scrolls[prevPanel] = 0;
      }

      this.setState({
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel: activePanel,
        animated: false,
        isBack: undefined
      }, function () {
        _this3.props.scroll.scrollTo(0, isBack ? _this3.scrolls[activePanel] : 0);

        _this3.props.onTransition && _this3.props.onTransition({
          isBack: isBack,
          from: prevPanel,
          to: activePanel
        });
      });
    }
  }, {
    key: "onSwipeBackSuccess",
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: "onSwipeBackCancel",
    value: function onSwipeBackCancel() {
      this.props.onSwipeBackCancel && this.props.onSwipeBackCancel();
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      });
    }
  }, {
    key: "calcPanelSwipeStyles",
    value: function calcPanelSwipeStyles(panelId) {
      if (!canUseDOM) {
        return {};
      }

      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipeBackResult) {
        return {};
      }

      var prevPanelTranslate = "".concat(this.state.swipeBackShift, "px");
      var nextPanelTranslate = "".concat(-50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2, "%");
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipeBackResult) {
        return isPrev ? {
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        } : {};
      }

      if (isNext) {
        return {
          transform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)")
        };
      }

      if (isPrev) {
        return {
          transform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        };
      }

      return {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          popout = _this$props2.popout,
          modal = _this$props2.modal,
          platform = _this$props2.platform;
          _this$props2.activePanel;
          _this$props2.splitCol;
          _this$props2.configProvider;
          _this$props2.history;
          _this$props2.nav;
          _this$props2.onTransition;
          _this$props2.onSwipeBack;
          _this$props2.onSwipeBackStart;
          _this$props2.onSwipeBackCancel;
          _this$props2.window;
          _this$props2.document;
          _this$props2.scroll;
          var restProps = _objectWithoutProperties(_this$props2, _excluded$l);

      var _this$state = this.state,
          prevPanel = _this$state.prevPanel,
          nextPanel = _this$state.nextPanel,
          activePanel = _this$state.activePanel,
          swipeBackPrevPanel = _this$state.swipeBackPrevPanel,
          swipeBackNextPanel = _this$state.swipeBackNextPanel,
          swipeBackResult = _this$state.swipeBackResult,
          isBack = _this$state.isBack,
          animated = _this$state.animated;
      var hasPopout = !!popout;
      var hasModal = !!modal;
      var panels = this.panels.filter(function (panel) {
        var panelId = getNavId(panel.props);
        return _this4.state.visiblePanels.includes(panelId) || panelId === swipeBackPrevPanel || panelId === swipeBackNextPanel;
      });
      var disableAnimation = this.shouldDisableTransitionMotion();
      var modifiers = {
        'View--animated': !disableAnimation && animated,
        'View--swiping-back': !disableAnimation && this.state.swipingBack,
        'View--no-motion': disableAnimation
      };
      return createScopedElement(Touch, _extends({
        Component: "section"
      }, restProps, {
        vkuiClass: classNames(getClassName('View', platform), modifiers),
        onMoveX: this.onMoveX,
        onEnd: this.onEnd
      }), createScopedElement("div", {
        vkuiClass: "View__panels"
      }, panels.map(function (panel) {
        var panelId = getNavId(panel.props);
        var isPrev = panelId === prevPanel || panelId === swipeBackPrevPanel;
        var isTransitionTarget = animated && panelId === (isBack ? prevPanel : nextPanel);
        var compensateScroll = isPrev || panelId === swipeBackNextPanel || panelId === nextPanel && isBack;
        return createScopedElement("div", {
          vkuiClass: classNames('View__panel', {
            'View__panel--active': panelId === activePanel,
            'View__panel--prev': panelId === prevPanel,
            'View__panel--next': panelId === nextPanel,
            'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
            'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
            'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
            'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail
          }),
          onAnimationEnd: isTransitionTarget ? _this4.transitionEndHandler : null,
          ref: function ref(el) {
            return _this4.panelNodes[panelId] = el;
          },
          style: _this4.calcPanelSwipeStyles(panelId),
          key: panelId
        }, createScopedElement("div", {
          vkuiClass: "View__panel-in",
          style: {
            marginTop: compensateScroll ? -_this4.scrolls[panelId] : null
          }
        }, createScopedElement(NavTransitionProvider, {
          entering: panelId === nextPanel || panelId === swipeBackNextPanel
        }, panel)));
      })), createScopedElement(AppRootPortal, null, hasPopout && createScopedElement("div", {
        vkuiClass: "View__popout"
      }, popout), hasModal && createScopedElement("div", {
        vkuiClass: "View__modal"
      }, modal)));
    }
  }]);

  return View;
}(react.Component);

_defineProperty(View, "defaultProps", {
  history: []
});

var View$1 = withContext(withContext(withContext(withPlatform(withDOM(View)), SplitColContext, 'splitCol'), ConfigProviderContext, 'configProvider'), ScrollContext, 'scroll');

var _excluded$k = ["fixed"];
var tooltipContainerAttr = 'data-tooltip-container';
var TooltipContainer = /*#__PURE__*/react.forwardRef(function TooltipContainer(_ref, ref) {
  var _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? false : _ref$fixed,
      props = _objectWithoutProperties(_ref, _excluded$k);

  props[tooltipContainerAttr] = fixed ? 'fixed' : 'true';
  return createScopedElement("div", _extends({}, props, {
    ref: ref
  }));
});

var SizeType;

(function (SizeType) {
  SizeType["COMPACT"] = "compact";
  SizeType["REGULAR"] = "regular";
})(SizeType || (SizeType = {}));

var ViewWidth;

(function (ViewWidth) {
  ViewWidth[ViewWidth["SMALL_MOBILE"] = 1] = "SMALL_MOBILE";
  ViewWidth[ViewWidth["MOBILE"] = 2] = "MOBILE";
  ViewWidth[ViewWidth["SMALL_TABLET"] = 3] = "SMALL_TABLET";
  ViewWidth[ViewWidth["TABLET"] = 4] = "TABLET";
  ViewWidth[ViewWidth["DESKTOP"] = 5] = "DESKTOP";
})(ViewWidth || (ViewWidth = {}));

var ViewHeight;

(function (ViewHeight) {
  ViewHeight[ViewHeight["EXTRA_SMALL"] = 1] = "EXTRA_SMALL";
  ViewHeight[ViewHeight["SMALL"] = 2] = "SMALL";
  ViewHeight[ViewHeight["MEDIUM"] = 3] = "MEDIUM";
})(ViewHeight || (ViewHeight = {}));

var AdaptivityContext = /*#__PURE__*/react.createContext({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR,
  hasMouse: hasMouse,
  deviceHasHover: hasHover
});

function withAdaptivity(TargetComponent, config) {
  function AdaptivityConsumer(props) {
    var context = react.useContext(AdaptivityContext);
    var update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    var sizeX = props.sizeX || context.sizeX;
    var sizeY = props.sizeY || context.sizeY;
    var viewWidth = context.viewWidth;
    var viewHeight = context.viewHeight;
    var hasMouse = context.hasMouse;
    var deviceHasHover = context.deviceHasHover;
    var adaptivityProps = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined;
    config.viewHeight ? adaptivityProps.viewHeight = viewHeight : undefined;
    config.hasMouse ? adaptivityProps.hasMouse = hasMouse : undefined;
    config.deviceHasHover ? adaptivityProps.deviceHasHover = deviceHasHover : undefined; // @ts-ignore

    var target = createScopedElement(TargetComponent, _extends({}, props, adaptivityProps));

    if (update) {
      return createScopedElement(AdaptivityContext.Provider, {
        value: {
          sizeX: sizeX,
          sizeY: sizeY,
          viewWidth: viewWidth,
          viewHeight: viewHeight,
          hasMouse: hasMouse,
          deviceHasHover: deviceHasHover
        }
      }, target);
    }

    return target;
  }

  return AdaptivityConsumer;
}

var _excluded$j = ["centered", "children", "getRootRef", "sizeX", "nav"];
var Panel = withAdaptivity(function (_ref) {
  var _ref$centered = _ref.centered,
      centered = _ref$centered === void 0 ? false : _ref$centered,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      sizeX = _ref.sizeX;
      _ref.nav;
      var restProps = _objectWithoutProperties(_ref, _excluded$j);

  var platform = usePlatform();
  return createScopedElement("div", _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames(getClassName('Panel', platform), "Panel--".concat(sizeX), _defineProperty({
      'Panel--centered': centered
    }, "Panel--sizeX-".concat(sizeX), true))
  }), createScopedElement(Touch, {
    Component: TooltipContainer,
    vkuiClass: "Panel__in"
  }, platform === IOS && createScopedElement("div", {
    vkuiClass: "Panel__fade"
  }), createScopedElement("div", {
    vkuiClass: "Panel__in-before"
  }), centered ? createScopedElement("div", {
    vkuiClass: "Panel__centered"
  }, children) : children, createScopedElement("div", {
    vkuiClass: "Panel__in-after"
  })));
}, {
  sizeX: true
});

function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = /*#__PURE__*/react.createContext(false);
var TouchRootContext$1 = TouchRootContext;

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

var Keys;

(function (Keys) {
  Keys["ENTER"] = "Enter";
  Keys["SPACE"] = "Space";
  Keys["TAB"] = "Tab";
  Keys["ESCAPE"] = "Escape";
})(Keys || (Keys = {}));

var ACCESSIBLE_KEYS = [{
  code: Keys.ENTER,
  key: ['Enter'],
  keyCode: 13
}, {
  code: Keys.SPACE,
  key: ['Space', 'Spacebar', ' '],
  keyCode: 32
}, {
  code: Keys.TAB,
  key: ['Tab'],
  keyCode: 9
}, {
  code: Keys.ESCAPE,
  key: ['Escape'],
  keyCode: 27
}];
function pressedKey(e) {
  var _ACCESSIBLE_KEYS$find;

  return ((_ACCESSIBLE_KEYS$find = ACCESSIBLE_KEYS.find(function (_ref) {
    var key = _ref.key,
        keyCode = _ref.keyCode;
    return key.includes(e.key) || keyCode === e.keyCode;
  })) === null || _ACCESSIBLE_KEYS$find === void 0 ? void 0 : _ACCESSIBLE_KEYS$find.code) || null;
}
function shouldTriggerClickOnEnterOrSpace(e) {
  var el = e.target;
  var tagName = el.tagName;
  var role = el.getAttribute('role');
  var isValidKeyboardEventTarget = el.isContentEditable !== true && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && (role === 'button' || role === 'link');
  var isNativeAnchorEl = tagName === 'A' && el.hasAttribute('href');
  var keyPressed = pressedKey(e);
  return isValidKeyboardEventTarget && ( // trigger buttons on Space
  keyPressed === Keys.SPACE && role === 'button' || // trigger non-native links and buttons on Enter
  keyPressed === Keys.ENTER && !isNativeAnchorEl);
}

var FocusVisible = function FocusVisible(_ref) {
  var mode = _ref.mode;
  return createScopedElement("span", {
    "aria-hidden": "true",
    vkuiClass: classNames('FocusVisible', "FocusVisible--".concat(mode))
  });
};

var _excluded$i = ["children", "Component", "onClick", "onKeyDown", "activeEffectDelay", "stopPropagation", "getRootRef", "sizeX", "hasMouse", "deviceHasHover", "hasHover", "hoverMode", "hasActive", "activeMode", "focusVisibleMode"];
var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
var activeBus = mitt();
var TapState = {
  none: 0,
  pending: 1,
  active: 2,
  exiting: 3
};
var TappableContext = /*#__PURE__*/react.createContext({
  onHoverChange: noop$1
});

function useActivity(hasActive, stopDelay) {
  var id = react.useMemo(function () {
    return Math.round(Math.random() * 1e8).toString(16);
  }, []);

  var _React$useState = react.useState(TapState.none),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activity = _React$useState2[0],
      setActivity = _React$useState2[1];

  var _stop = function _stop() {
    return setActivity(TapState.none);
  };

  var start = function start() {
    return hasActive && setActivity(TapState.active);
  };

  var delayStart = function delayStart() {
    hasActive && setActivity(TapState.pending);
  };

  var activeTimeout = useTimeout(start, ACTIVE_DELAY);
  var stopTimeout = useTimeout(_stop, stopDelay);
  useIsomorphicLayoutEffect(function () {
    if (activity === TapState.pending) {
      activeTimeout.set();
      return activeTimeout.clear;
    }

    if (activity === TapState.exiting) {
      return stopTimeout.clear;
    }

    if (activity === TapState.active) {
      activeBus.emit('active', id);
    }

    return noop$1;
  }, [activity]);
  useIsomorphicLayoutEffect(function () {
    if (activity === TapState.none) {
      return noop$1;
    }

    var onActiveChange = function onActiveChange(activeId) {
      activeId !== id && _stop();
    };

    activeBus.on('active', onActiveChange);
    return function () {
      return activeBus.off('active', onActiveChange);
    };
  }, [activity === TapState.none]);
  useIsomorphicLayoutEffect(function () {
    !hasActive && _stop();
  }, [hasActive]);

  var stop = function stop(delay) {
    if (delay) {
      setActivity(TapState.exiting);
      return stopTimeout.set(delay);
    }

    _stop();
  };

  return [activity, {
    delayStart: delayStart,
    start: start,
    stop: stop
  }];
}

var Tappable = function Tappable(_ref) {
  var _classNames;

  var children = _ref.children,
      Component = _ref.Component,
      onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      _ref$activeEffectDela = _ref.activeEffectDelay,
      activeEffectDelay = _ref$activeEffectDela === void 0 ? ACTIVE_EFFECT_DELAY : _ref$activeEffectDela,
      _ref$stopPropagation = _ref.stopPropagation,
      stopPropagation = _ref$stopPropagation === void 0 ? false : _ref$stopPropagation,
      getRootRef = _ref.getRootRef,
      sizeX = _ref.sizeX,
      hasMouse = _ref.hasMouse,
      deviceHasHover = _ref.deviceHasHover,
      _ref$hasHover = _ref.hasHover,
      _hasHover = _ref$hasHover === void 0 ? true : _ref$hasHover,
      _ref$hoverMode = _ref.hoverMode,
      hoverMode = _ref$hoverMode === void 0 ? 'background' : _ref$hoverMode,
      _ref$hasActive = _ref.hasActive,
      _hasActive = _ref$hasActive === void 0 ? true : _ref$hasActive,
      _ref$activeMode = _ref.activeMode,
      activeMode = _ref$activeMode === void 0 ? 'background' : _ref$activeMode,
      _ref$focusVisibleMode = _ref.focusVisibleMode,
      focusVisibleMode = _ref$focusVisibleMode === void 0 ? 'inside' : _ref$focusVisibleMode,
      props = _objectWithoutProperties(_ref, _excluded$i);

  Component = Component || (props.href ? 'a' : 'div');

  var _React$useContext = react.useContext(TappableContext),
      onHoverChange = _React$useContext.onHoverChange;

  var insideTouchRoot = react.useContext(TouchRootContext$1);
  var platform = usePlatform();

  var _React$useState3 = react.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      clicks = _React$useState4[0],
      setClicks = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      childHover = _React$useState6[0],
      setChildHover = _React$useState6[1];

  var _React$useState7 = react.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      _hovered = _React$useState8[0],
      setHovered = _React$useState8[1];

  var hovered = _hovered && !props.disabled;
  var hasActive = _hasActive && !childHover && !props.disabled;
  var hasHover = deviceHasHover && _hasHover && !childHover;
  var isCustomElement = Component !== 'a' && Component !== 'button' && !props.contentEditable;
  var isPresetHoverMode = ['opacity', 'background'].includes(hoverMode);
  var isPresetActiveMode = ['opacity', 'background'].includes(activeMode);

  var _useActivity = useActivity(hasActive, activeEffectDelay),
      _useActivity2 = _slicedToArray(_useActivity, 2),
      activity = _useActivity2[0],
      _useActivity2$ = _useActivity2[1],
      start = _useActivity2$.start,
      stop = _useActivity2$.stop,
      delayStart = _useActivity2$.delayStart;

  var active = activity === TapState.active || activity === TapState.exiting;
  var containerRef = useExternRef(getRootRef); // hover propagation

  var childContext = react.useRef({
    onHoverChange: setChildHover
  }).current;
  useIsomorphicLayoutEffect(function () {
    if (!hovered) {
      return noop$1;
    }

    onHoverChange(true);
    return function () {
      return onHoverChange(false);
    };
  }, [hovered]);
  /*
   * [a11y]
   * Обрабатывает событие onkeydown
   * для кастомных доступных элементов:
   * - role="link" (активация по Enter)
   * - role="button" (активация по Space и Enter)
   */

  function onKeyDown(e) {
    if (isCustomElement && shouldTriggerClickOnEnterOrSpace(e)) {
      e.preventDefault();
      containerRef.current.click();
    }

    if (typeof _onKeyDown === 'function') {
      return _onKeyDown(e);
    }
  }

  function onStart(_ref2) {
    var originalEvent = _ref2.originalEvent;

    if (hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        // r сожалению я так и не понял, что это делает и можно ли упихнуть его в Touch
        return stop();
      }

      if (platform === ANDROID) {
        var _getOffsetRect = getOffsetRect(containerRef.current),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = coordX(originalEvent) - left;
        var y = coordY(originalEvent) - top;
        setClicks([].concat(_toConsumableArray(clicks), [{
          x: x,
          y: y,
          id: Date.now().toString()
        }]));
      }

      delayStart();
    }
  }

  function onMove(_ref3) {
    var isSlide = _ref3.isSlide;

    if (isSlide) {
      stop();
    }
  }

  function onEnd(_ref4) {
    var duration = _ref4.duration;

    if (activity === TapState.none) {
      return;
    }

    if (activity === TapState.pending) {
      // активировать при коротком тапе
      start();
    } // отключить без задержки при длинном тапе


    var activeDuraion = duration - ACTIVE_DELAY;
    stop(activeDuraion >= 100 ? 0 : activeEffectDelay - activeDuraion);
  }

  var classes = classNames(getClassName('Tappable', platform), "Tappable--sizeX-".concat(sizeX), (_classNames = {
    'Tappable--active': hasActive && active,
    'Tappable--mouse': hasMouse
  }, _defineProperty(_classNames, "Tappable--hover-".concat(hoverMode), hasHover && hovered && isPresetHoverMode), _defineProperty(_classNames, "Tappable--active-".concat(activeMode), hasActive && active && isPresetActiveMode), _defineProperty(_classNames, hoverMode, hasHover && hovered && !isPresetHoverMode), _defineProperty(_classNames, activeMode, hasActive && active && !isPresetActiveMode), _classNames));
  var handlers = {
    onStart: onStart,
    onMove: onMove,
    onEnd: onEnd,
    onClick: onClick,
    onKeyDown: onKeyDown
  };
  var role = props.href ? 'link' : 'button';
  return createScopedElement(Touch, _extends({
    onEnter: function onEnter() {
      return setHovered(true);
    },
    onLeave: function onLeave() {
      return setHovered(false);
    },
    type: Component === 'button' ? 'button' : undefined,
    tabIndex: isCustomElement && !props.disabled ? 0 : undefined,
    role: isCustomElement ? role : undefined,
    "aria-disabled": isCustomElement ? props.disabled : null,
    stopPropagation: stopPropagation && !insideTouchRoot && !props.disabled
  }, props, {
    slideThreshold: 20,
    usePointerHover: true,
    vkuiClass: classes,
    Component: Component,
    getRootRef: containerRef
  }, props.disabled ? {} : handlers), createScopedElement(TappableContext.Provider, {
    value: childContext
  }, children), platform === ANDROID && !hasMouse && hasActive && activeMode === 'background' && createScopedElement("span", {
    "aria-hidden": "true",
    vkuiClass: "Tappable__waves"
  }, clicks.map(function (wave) {
    return createScopedElement(Wave, _extends({}, wave, {
      key: wave.id,
      onClear: function onClear() {
        return setClicks(clicks.filter(function (c) {
          return c.id !== wave.id;
        }));
      }
    }));
  })), hasHover && hoverMode === 'background' && createScopedElement("span", {
    "aria-hidden": "true",
    vkuiClass: "Tappable__hoverShadow"
  }), !props.disabled && createScopedElement(FocusVisible, {
    mode: focusVisibleMode
  }));
};

var Tappable$1 = withAdaptivity(Tappable, {
  sizeX: true,
  hasMouse: true,
  deviceHasHover: true
});

function Wave(_ref5) {
  var x = _ref5.x,
      y = _ref5.y,
      onClear = _ref5.onClear;
  var timeout = useTimeout(onClear, 225);
  react.useEffect(function () {
    return timeout.set();
  }, []);
  return createScopedElement("span", {
    vkuiClass: "Tappable__wave",
    style: {
      top: y,
      left: x
    }
  });
}

var _excluded$h = ["children", "weight", "Component", "getRootRef"];

var Text = function Text(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'span' : _ref$Component,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, _excluded$h);

  var platform = usePlatform();

  return createScopedElement(Component, _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames(getClassName('Text', platform), "Text--w-".concat(weight))
  }), children);
};

var Text$1 = Text;

var _excluded$g = ["children", "weight", "Component"];

var Headline = function Headline(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'h3' : _ref$Component,
      restProps = _objectWithoutProperties(_ref, _excluded$g);

  var platform = usePlatform();
  return createScopedElement(Component, _extends({}, restProps, {
    vkuiClass: classNames(getClassName('Headline', platform), "Headline--w-".concat(weight))
  }), children);
};

var Headline$1 = Headline;

var _excluded$f = ["children", "weight", "level", "Component"];

var Title = function Title(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? '1' : _ref$level,
      Component = _ref.Component,
      restProps = _objectWithoutProperties(_ref, _excluded$f);

  var platform = usePlatform();

  if (!Component) {
    Component = 'h' + level;
  }

  if (platform === ANDROID && level === '3') {
    var headlineWeight = weight === 'regular' ? weight : 'medium';
    return createScopedElement(Headline$1, _extends({
      Component: Component
    }, restProps, {
      weight: headlineWeight
    }), children);
  }

  return createScopedElement(Component, _extends({}, restProps, {
    vkuiClass: classNames(getClassName('Title', platform), "Title--w-".concat(weight), "Title--l-".concat(level))
  }), children);
};

var Title$1 = Title;

var _excluded$e = ["children", "primary", "label"];

var ButtonTypography = function ButtonTypography(_ref) {
  var primary = _ref.primary,
      children = _ref.children;
  var platform = usePlatform();

  if (platform === IOS) {
    return createScopedElement(Title$1, {
      Component: "span",
      level: "3",
      weight: primary ? 'semibold' : 'regular'
    }, children);
  }

  return createScopedElement(Text$1, {
    weight: platform === VKCOM ? 'regular' : 'medium'
  }, children);
};

var PanelHeaderButton = function PanelHeaderButton(_ref2) {
  var children = _ref2.children,
      primary = _ref2.primary,
      label = _ref2.label,
      restProps = _objectWithoutProperties(_ref2, _excluded$e);

  var isPrimitive = isPrimitiveReactNode(children);
  var isPrimitiveLabel = isPrimitiveReactNode(label);
  var platform = usePlatform();
  var hoverMode;
  var activeMode;

  switch (platform) {
    case ANDROID:
      hoverMode = 'background';
      activeMode = 'background';
      break;

    case IOS:
      hoverMode = 'background';
      activeMode = 'opacity';
      break;

    case VKCOM:
      hoverMode = 'PanelHeaderButton--hover';
      activeMode = 'PanelHeaderButton--active';
  }

  return createScopedElement(Tappable$1, _extends({}, restProps, {
    hoverMode: hoverMode,
    Component: restProps.href ? 'a' : 'button',
    activeEffectDelay: 200,
    activeMode: activeMode,
    vkuiClass: classNames(getClassName('PanelHeaderButton', platform), {
      'PanelHeaderButton--primary': primary,
      'PanelHeaderButton--primitive': isPrimitive,
      'PanelHeaderButton--notPrimitive': !isPrimitive && !isPrimitiveLabel
    })
  }), isPrimitive ? createScopedElement(ButtonTypography, {
    primary: primary
  }, children) : children, isPrimitiveLabel ? createScopedElement(ButtonTypography, {
    primary: primary
  }, label) : label);
};
PanelHeaderButton.defaultProps = {
  'primary': false,
  'aria-label': 'Закрыть'
};

function useGlobalEventListener(element, event, cb, options) {
  var listener = useEventListener(event, cb, options);
  useIsomorphicLayoutEffect(function () {
    return cb ? listener.add(element) : listener.remove();
  }, [Boolean(cb)]);
}

var _excluded$d = ["children", "style", "vertical", "getRootRef", "getRef", "filled"];

var FixedLayout = function FixedLayout(_ref) {
  var children = _ref.children,
      style = _ref.style,
      vertical = _ref.vertical,
      getRootRef = _ref.getRootRef,
      getRef = _ref.getRef,
      filled = _ref.filled,
      restProps = _objectWithoutProperties(_ref, _excluded$d);

  var platform = usePlatform();

  var _React$useState = react.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      width = _React$useState2[0],
      setWidth = _React$useState2[1];

  var _useDOM = useDOM(),
      window = _useDOM.window;

  var _React$useContext = react.useContext(SplitColContext),
      colRef = _React$useContext.colRef;

  var doResize = function doResize() {
    return setWidth(colRef !== null && colRef !== void 0 && colRef.current ? "".concat(colRef.current.offsetWidth, "px") : null);
  };

  react.useEffect(doResize, []);
  useGlobalEventListener(window, 'resize', doResize);
  return createScopedElement(TooltipContainer, _extends({}, restProps, {
    fixed: true,
    ref: getRootRef,
    vkuiClass: classNames(getClassName('FixedLayout', platform), {
      'FixedLayout--filled': filled
    }, "FixedLayout--".concat(vertical)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width
    })
  }), createScopedElement("div", {
    vkuiClass: "FixedLayout__in",
    ref: getRef
  }, children));
};

var FixedLayout$1 = FixedLayout;

var _excluded$c = ["wide", "expanded"];

var Separator = function Separator(_ref) {
  var wide = _ref.wide,
      expanded = _ref.expanded,
      restProps = _objectWithoutProperties(_ref, _excluded$c);

  var platform = usePlatform();
  return createScopedElement("div", _extends({}, restProps, {
    "aria-hidden": "true",
    vkuiClass: classNames(getClassName('Separator', platform), {
      'Separator--wide': wide
    })
  }), createScopedElement("div", {
    vkuiClass: classNames('Separator__in', {
      'Separator__in--expanded': expanded
    })
  }));
};

var Separator$1 = /*#__PURE__*/react.memo(Separator);

var _excluded$b = ["left", "children", "right", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX", "sizeY", "fixed"];

var PanelHeaderInTypography = function PanelHeaderInTypography(_ref) {
  var children = _ref.children;
  var platform = usePlatform();
  return platform === VKCOM ? createScopedElement(Text$1, {
    weight: "medium"
  }, children) : createScopedElement("span", {
    vkuiClass: "PanelHeader__content-in"
  }, children);
};

var PanelHeaderIn = function PanelHeaderIn(_ref2) {
  var children = _ref2.children,
      left = _ref2.left,
      right = _ref2.right;

  var _React$useContext = react.useContext(ConfigProviderContext),
      webviewType = _React$useContext.webviewType;

  var isPrimitive = isPrimitiveReactNode(children);
  return createScopedElement(TooltipContainer, {
    fixed: true,
    vkuiClass: "PanelHeader__in"
  }, createScopedElement("div", {
    vkuiClass: "PanelHeader__left"
  }, left), createScopedElement("div", {
    vkuiClass: "PanelHeader__content"
  }, isPrimitive ? createScopedElement(PanelHeaderInTypography, null, children) : children), createScopedElement("div", {
    vkuiClass: "PanelHeader__right"
  }, webviewType !== WebviewType.VKAPPS && right));
};

var PanelHeader = function PanelHeader(props) {
  var left = props.left;
      props.children;
      var right = props.right,
      separator = props.separator,
      visor = props.visor,
      transparent = props.transparent,
      shadow = props.shadow,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      sizeX = props.sizeX;
      props.sizeY;
      var fixed = props.fixed,
      restProps = _objectWithoutProperties(props, _excluded$b);

  var platform = usePlatform();

  var _React$useContext2 = react.useContext(ConfigProviderContext),
      webviewType = _React$useContext2.webviewType;

  var needShadow = shadow && sizeX === SizeType.REGULAR;
  var isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;
  return createScopedElement("div", _extends({}, restProps, {
    vkuiClass: classNames(getClassName('PanelHeader', platform), {
      'PanelHeader--trnsp': transparent,
      'PanelHeader--shadow': needShadow,
      'PanelHeader--vis': visor,
      'PanelHeader--sep': separator && visor,
      'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
      'PanelHeader--no-left': !left,
      'PanelHeader--no-right': !right,
      'PanelHeader--fixed': isFixed
    }, "PanelHeader--sizeX-".concat(sizeX)),
    ref: isFixed ? getRootRef : getRef
  }), isFixed ? createScopedElement(FixedLayout$1, {
    vkuiClass: "PanelHeader__fixed",
    vertical: "top",
    getRootRef: getRef
  }, createScopedElement(PanelHeaderIn, props)) : createScopedElement(PanelHeaderIn, props), separator && visor && platform !== VKCOM && createScopedElement(Separator$1, {
    vkuiClass: "PanelHeader__separator",
    expanded: sizeX === SizeType.REGULAR
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
var PanelHeader$1 = withAdaptivity(PanelHeader, {
  sizeX: true,
  sizeY: true
});

var _excluded$a = ["children", "weight", "level", "caps", "Component"];

var Caption = function Caption(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? '1' : _ref$level,
      caps = _ref.caps,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'span' : _ref$Component,
      restProps = _objectWithoutProperties(_ref, _excluded$a);

  var platform = usePlatform();
  return createScopedElement(Component, _extends({}, restProps, {
    vkuiClass: classNames(getClassName('Caption', platform), "Caption--w-".concat(weight), "Caption--l-".concat(level), {
      'Caption--caps': caps
    })
  }), children);
};

var Caption$1 = Caption;

var useAdaptivity = function useAdaptivity() {
  return react.useContext(AdaptivityContext);
};

var _excluded$9 = ["popout", "modal", "viewWidth", "viewHeight", "hasMouse", "children", "getRootRef"];
var PopoutRootComponent = function PopoutRootComponent(props) {
  var popout = props.popout,
      modal = props.modal,
      viewWidth = props.viewWidth,
      viewHeight = props.viewHeight,
      hasMouse = props.hasMouse,
      children = props.children,
      getRootRef = props.getRootRef,
      restProps = _objectWithoutProperties(props, _excluded$9);

  var _useDOM = useDOM(),
      document = _useDOM.document;

  var isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  react.useEffect(function () {
    popout && blurActiveElement(document);
  }, [!!popout]);
  return createScopedElement("div", _extends({}, restProps, {
    vkuiClass: "PopoutRoot",
    ref: getRootRef
  }), children, createScopedElement(AppRootPortal, null, !!popout && createScopedElement("div", {
    vkuiClass: isDesktop ? 'PopoutRoot--absolute' : 'PopoutRoot__popout'
  }, popout), !!modal && createScopedElement("div", {
    vkuiClass: "PopoutRoot__modal"
  }, modal)));
};
PopoutRootComponent.displayName = 'PopoutRoot';
var PopoutRoot = withAdaptivity(PopoutRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true
});

var _excluded$8 = ["popout", "modal", "header", "children", "getRootRef", "getRef"];
var SplitLayout = function SplitLayout(_ref) {
  var popout = _ref.popout,
      modal = _ref.modal,
      header = _ref.header,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      getRef = _ref.getRef,
      restProps = _objectWithoutProperties(_ref, _excluded$8);

  var platform = usePlatform();
  return createScopedElement(PopoutRoot, {
    vkuiClass: getClassName('SplitLayout', platform),
    popout: popout,
    modal: modal,
    getRootRef: getRootRef
  }, header, createScopedElement("div", _extends({}, restProps, {
    ref: getRef,
    vkuiClass: classNames('SplitLayout__inner', {
      'SplitLayout__inner--header': !!header
    })
  }), children));
};

var _excluded$7 = ["children", "weight", "Component"];

var Subhead = function Subhead(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'h4' : _ref$Component,
      restProps = _objectWithoutProperties(_ref, _excluded$7);

  var platform = usePlatform();
  return createScopedElement(Component, _extends({}, restProps, {
    vkuiClass: classNames(getClassName('Subhead', platform), "Subhead--w-".concat(weight))
  }), children);
};

var Subhead$1 = Subhead;

var ModalRootContext = /*#__PURE__*/react.createContext({
  updateModalHeight: function updateModalHeight() {
    return undefined;
  },
  registerModal: function registerModal() {
    return undefined;
  },
  isInsideModal: false
});
var ModalRootContext$1 = ModalRootContext;

var _excluded$6 = ["badge", "before", "indicator", "children", "after", "description", "expandable", "multiline", "sizeY"];

var SimpleCellTypography = function SimpleCellTypography(props) {
  var _useAdaptivity = useAdaptivity(),
      sizeY = _useAdaptivity.sizeY;

  return sizeY === SizeType.COMPACT ? createScopedElement(Text$1, _extends({
    Component: "span",
    weight: "regular"
  }, props)) : createScopedElement(Title$1, _extends({
    Component: "span",
    level: "3",
    weight: "regular"
  }, props));
};

var SimpleCell = function SimpleCell(_ref) {
  var badge = _ref.badge,
      before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      sizeY = _ref.sizeY,
      restProps = _objectWithoutProperties(_ref, _excluded$6);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  return createScopedElement(Tappable$1, _extends({}, restProps, {
    vkuiClass: classNames(getClassName('SimpleCell', platform), {
      'SimpleCell--exp': expandable,
      'SimpleCell--mult': multiline
    }, "SimpleCell--sizeY-".concat(sizeY))
  }), before, createScopedElement("div", {
    vkuiClass: "SimpleCell__main"
  }, createScopedElement("div", {
    vkuiClass: "SimpleCell__content"
  }, createScopedElement(SimpleCellTypography, {
    vkuiClass: "SimpleCell__children"
  }, children), hasReactNode(badge) && createScopedElement("span", {
    vkuiClass: "SimpleCell__badge"
  }, badge)), description && createScopedElement(Subhead$1, {
    Component: "span",
    weight: "regular",
    vkuiClass: "SimpleCell__description"
  }, description)), hasReactNode(indicator) && createScopedElement(SimpleCellTypography, {
    Component: "span",
    vkuiClass: "SimpleCell__indicator"
  }, indicator), hasAfter && createScopedElement("div", {
    vkuiClass: "SimpleCell__after"
  }, after, expandable && platform === IOS && createScopedElement(Icon24Chevron$1, null)));
};

var SimpleCell$1 = withAdaptivity(SimpleCell, {
  sizeY: true
});

var _excluded$5 = ["platform", "mode"],
    _excluded2 = ["platform"],
    _excluded3 = ["mode"],
    _excluded4 = ["mode", "children", "subtitle", "indicator", "aside", "getRootRef", "multiline"];

var HeaderContent = function HeaderContent(_ref) {
  var platform = _ref.platform,
      mode = _ref.mode,
      restProps = _objectWithoutProperties(_ref, _excluded$5);

  if (platform === Platform.IOS) {
    switch (mode) {
      case 'primary':
      case 'tertiary':
        return createScopedElement(Title$1, _extends({
          weight: "semibold",
          level: "3"
        }, restProps));

      case 'secondary':
        return createScopedElement(Caption$1, _extends({
          level: "1",
          weight: "semibold",
          caps: true
        }, restProps));
    }
  }

  if (platform === Platform.VKCOM) {
    switch (mode) {
      case 'primary':
        return createScopedElement(Headline$1, _extends({
          weight: "regular"
        }, restProps));

      case 'secondary':
      case 'tertiary':
        return createScopedElement(Caption$1, _extends({
          level: "1",
          weight: "regular"
        }, restProps));
    }
  }

  switch (mode) {
    case 'primary':
    case 'tertiary':
      return createScopedElement(Headline$1, _extends({
        weight: "medium"
      }, restProps));

    case 'secondary':
      return createScopedElement(Caption$1, _extends({
        level: "1",
        weight: "medium",
        caps: true
      }, restProps));
  }
};

var HeaderAside = function HeaderAside(_ref2) {
  var platform = _ref2.platform,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return platform === Platform.VKCOM ? createScopedElement(Subhead$1, _extends({
    weight: "regular"
  }, restProps)) : createScopedElement(Text$1, _extends({
    weight: "regular"
  }, restProps));
};

var HeaderSubtitle = function HeaderSubtitle(_ref3) {
  var mode = _ref3.mode,
      restProps = _objectWithoutProperties(_ref3, _excluded3);

  return mode === 'secondary' ? createScopedElement(Subhead$1, _extends({
    weight: "regular"
  }, restProps)) : createScopedElement(Caption$1, _extends({
    weight: "regular",
    level: "1"
  }, restProps));
};

var Header = function Header(_ref4) {
  var mode = _ref4.mode,
      children = _ref4.children,
      subtitle = _ref4.subtitle,
      indicator = _ref4.indicator,
      aside = _ref4.aside,
      getRootRef = _ref4.getRootRef,
      multiline = _ref4.multiline,
      restProps = _objectWithoutProperties(_ref4, _excluded4);

  var platform = usePlatform();
  return createScopedElement("header", _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames(getClassName('Header', platform), "Header--mode-".concat(mode), {
      'Header--pi': isPrimitiveReactNode(indicator)
    })
  }), createScopedElement("div", {
    vkuiClass: "Header__main"
  }, createScopedElement(HeaderContent, {
    vkuiClass: "Header__content",
    Component: "span",
    mode: mode,
    platform: platform
  }, createScopedElement("span", {
    vkuiClass: classNames('Header__content-in', {
      'Header__content-in--multiline': multiline
    })
  }, children), hasReactNode(indicator) && createScopedElement(Caption$1, {
    vkuiClass: "Header__indicator",
    weight: mode === 'primary' || mode === 'secondary' ? 'medium' : 'regular',
    level: "1"
  }, indicator)), hasReactNode(subtitle) && createScopedElement(HeaderSubtitle, {
    vkuiClass: "Header__subtitle",
    Component: "span"
  }, subtitle)), hasReactNode(aside) && createScopedElement(HeaderAside, {
    vkuiClass: "Header__aside",
    Component: "span",
    platform: platform
  }, aside));
};

Header.defaultProps = {
  mode: 'primary'
};
var Header$1 = Header;

var _excluded$4 = ["header", "description", "children", "separator", "getRootRef", "mode", "sizeX"];

var Group = function Group(props) {
  var header = props.header,
      description = props.description,
      children = props.children,
      separator = props.separator,
      getRootRef = props.getRootRef,
      mode = props.mode,
      sizeX = props.sizeX,
      restProps = _objectWithoutProperties(props, _excluded$4);

  var _React$useContext = react.useContext(ModalRootContext$1),
      isInsideModal = _React$useContext.isInsideModal;

  var platform = usePlatform();
  var computedMode = mode;

  if (!mode) {
    computedMode = sizeX === SizeType.COMPACT || isInsideModal ? 'plain' : 'card';
  }

  return createScopedElement("section", _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames(getClassName('Group', platform), "Group--sizeX-".concat(sizeX), "Group--".concat(computedMode))
  }), createScopedElement("div", {
    vkuiClass: "Group__inner"
  }, header, children, hasReactNode(description) && createScopedElement(Caption$1, {
    vkuiClass: "Group__description",
    weight: "regular",
    level: "1"
  }, description)), separator !== 'hide' && createScopedElement(Separator$1, {
    vkuiClass: classNames('Group__separator', {
      'Group__separator--force': separator === 'show'
    }),
    expanded: computedMode === 'card'
  }));
};

Group.defaultProps = {
  separator: 'auto'
};
var Group$1 = withAdaptivity(Group, {
  sizeX: true
});

var _excluded$3 = ["children"];
var Footer = function Footer(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$3);

  return createScopedElement(Caption$1, _extends({
    Component: "footer"
  }, restProps, {
    level: "1",
    weight: "regular",
    vkuiClass: "Footer"
  }), children);
};

function useEnsuredControl(props, options) {
  var isControlled = props.hasOwnProperty('value');

  var _React$useState = react.useState(options.defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      localValue = _React$useState2[0],
      setLocalValue = _React$useState2[1];

  var onChange = react.useCallback(function (e) {
    !isControlled && setLocalValue(e.target.value);
    props.onChange && props.onChange(e);
  }, [props.onChange]);
  return [isControlled ? props.value : localValue, onChange];
}

var _excluded$2 = ["before", "className", "defaultValue", "placeholder", "after", "getRef", "platform", "icon", "onIconClick", "style"];

var Search = function Search(_ref) {
  var before = _ref.before,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      placeholder = _ref.placeholder,
      after = _ref.after,
      getRef = _ref.getRef,
      platform = _ref.platform,
      icon = _ref.icon,
      _ref$onIconClick = _ref.onIconClick,
      onIconClick = _ref$onIconClick === void 0 ? noop : _ref$onIconClick,
      style = _ref.style,
      inputProps = _objectWithoutProperties(_ref, _excluded$2);

  var inputRef = useExternRef(getRef);

  var _React$useState = react.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isFocused = _React$useState2[0],
      setFocused = _React$useState2[1];

  var _useEnsuredControl = useEnsuredControl(inputProps, {
    defaultValue: defaultValue
  }),
      _useEnsuredControl2 = _slicedToArray(_useEnsuredControl, 2),
      value = _useEnsuredControl2[0],
      onChange = _useEnsuredControl2[1];

  var onFocus = function onFocus(e) {
    setFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };

  var onBlur = function onBlur(e) {
    setFocused(false);
    inputProps.onBlur && inputProps.onBlur(e);
  };

  var onCancel = function onCancel() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputRef.current, '');
    var ev2 = new Event('input', {
      bubbles: true
    });
    inputRef.current.dispatchEvent(ev2);
  };

  var onIconClickStart = react.useCallback(function (e) {
    return onIconClick(e.originalEvent);
  }, [onIconClick]);
  var onIconCancelClickStart = react.useCallback(function (e) {
    e.originalEvent.preventDefault();
    inputRef.current.focus();
    onCancel();
  }, [onCancel]);
  return createScopedElement("div", {
    vkuiClass: classNames(getClassName('Search', platform), {
      'Search--focused': isFocused,
      'Search--has-value': !!value,
      'Search--has-after': !!after,
      'Search--has-icon': !!icon
    }),
    className: className,
    style: style
  }, createScopedElement("div", {
    vkuiClass: "Search__in"
  }, createScopedElement("div", {
    vkuiClass: "Search__width"
  }), createScopedElement("label", {
    vkuiClass: "Search__control"
  }, createScopedElement("input", _extends({
    type: "search"
  }, inputProps, {
    ref: inputRef,
    vkuiClass: "Search__input",
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange,
    value: value
  })), platform === IOS && after && createScopedElement("div", {
    vkuiClass: "Search__after-width"
  }, after), createScopedElement("div", {
    vkuiClass: "Search__placeholder"
  }, createScopedElement("div", {
    vkuiClass: "Search__placeholder-in"
  }, before, platform === VKCOM ? createScopedElement(Text$1, {
    vkuiClass: "Search__placeholder-text",
    weight: "regular"
  }, placeholder) : createScopedElement(Title$1, {
    vkuiClass: "Search__placeholder-text",
    level: "3",
    weight: "regular"
  }, placeholder)), isFocused && platform === IOS && after && createScopedElement("div", {
    vkuiClass: "Search__after-width"
  }, after))), createScopedElement("div", {
    vkuiClass: "Search__after",
    onClick: onCancel
  }, createScopedElement("div", {
    vkuiClass: "Search__icons"
  }, icon && createScopedElement(Touch, {
    onStart: onIconClickStart,
    vkuiClass: "Search__icon"
  }, icon), !!value && createScopedElement(Touch, {
    onStart: onIconCancelClickStart,
    vkuiClass: "Search__icon"
  }, platform === IOS ? createScopedElement(Icon16Clear$1, null) : createScopedElement(Icon24Cancel$1, null))), platform === IOS && after && createScopedElement("div", {
    vkuiClass: "Search__after-in"
  }, after))), platform === VKCOM && createScopedElement(Separator$1, {
    vkuiClass: "Search__separator",
    wide: true
  }));
};

Search.defaultProps = {
  autoComplete: 'off',
  defaultValue: '',
  placeholder: 'Поиск',
  after: 'Отмена',
  before: createScopedElement(Icon16SearchOutline$1, null)
};
var Search$1 = withPlatform(Search);

function useKeyboardInputTracker() {
  var _useDOM = useDOM(),
      document = _useDOM.document;

  var _React$useState = react.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isKeyboardInputActive = _React$useState2[0],
      toggleKeyboardInput = _React$useState2[1];

  var enableKeyboardInput = react.useCallback(function (e) {
    if (pressedKey(e) === Keys.TAB) {
      toggleKeyboardInput(true);
    }
  }, []);
  var disableKeyboardInput = react.useCallback(function () {
    toggleKeyboardInput(false);
  }, []);
  var eventOptions = {
    passive: true,
    capture: true
  };
  useGlobalEventListener(document, 'keydown', enableKeyboardInput, eventOptions);
  useGlobalEventListener(document, 'mousedown', disableKeyboardInput, eventOptions);
  useGlobalEventListener(document, 'touchstart', disableKeyboardInput, eventOptions);
  return isKeyboardInputActive;
}

var initialState = {
  bottom: null,
  top: null,
  left: null,
  right: null
};

function resolveInsets(e) {
  var _e$detail = e.detail,
      type = _e$detail.type,
      data = _e$detail.data;

  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets':
      // Устаревшее событие vk-bridge
      var insets = data.insets;

      if (insets) {
        return _objectSpread(_objectSpread({}, insets), {}, {
          bottom: insets.bottom > 150 ? 0 : insets.bottom // если больше 150 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить

        });
      }

  }

  return null;
}

bridge.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    initialState = insets;
  }
});
function useInsets() {
  var _React$useState = react.useState(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      insets = _React$useState2[0],
      setInsets = _React$useState2[1];

  useIsomorphicLayoutEffect(function () {
    function connectListener(e) {
      var insets = resolveInsets(e);

      if (insets) {
        setInsets(insets);
      }
    }

    bridge.subscribe(connectListener);
    return function () {
      bridge.unsubscribe(connectListener);
    };
  }, []);
  return insets;
}

var _excluded$1 = ["children", "mode", "embedded", "sizeX", "hasMouse", "noLegacyClasses", "scroll"];
var AppRoot = withAdaptivity(function (_ref) {
  var children = _ref.children,
      _mode = _ref.mode,
      _embedded = _ref.embedded,
      sizeX = _ref.sizeX,
      hasMouse = _ref.hasMouse,
      _ref$noLegacyClasses = _ref.noLegacyClasses,
      noLegacyClasses = _ref$noLegacyClasses === void 0 ? false : _ref$noLegacyClasses,
      _ref$scroll = _ref.scroll,
      scroll = _ref$scroll === void 0 ? 'global' : _ref$scroll,
      props = _objectWithoutProperties(_ref, _excluded$1);

  // normalize mode
  var mode = _mode || (_embedded ? 'embedded' : 'full');
  var isKeyboardInputActive = useKeyboardInputTracker();
  var rootRef = react.useRef();

  var _React$useState = react.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      portalRoot = _React$useState2[0],
      setPortalRoot = _React$useState2[1];

  var _useDOM = useDOM(),
      window = _useDOM.window,
      document = _useDOM.document;

  var insets = useInsets();
  var initialized = react.useRef(false);

  if (!initialized.current) {
    if (window && mode === 'full') {
      document.documentElement.classList.add('vkui');
    }

    classScopingMode.noConflict = noLegacyClasses;
    initialized.current = true;
  }


  useIsomorphicLayoutEffect(function () {
    var portal = document.createElement('div');
    portal.classList.add('vkui__portal-root');
    document.body.appendChild(portal);
    setPortalRoot(portal);
    return function () {
      portal.parentElement.removeChild(portal);
    };
  }, []); // setup root classes

  useIsomorphicLayoutEffect(function () {
    var _parent$classList;

    if (mode === 'partial') {
      return noop;
    }

    var parent = rootRef.current.parentElement;
    var classes = ['vkui__root'].concat(mode === 'embedded' ? 'vkui__root--embedded' : []);

    (_parent$classList = parent.classList).add.apply(_parent$classList, _toConsumableArray(classes));

    return function () {
      var _parent$classList2;

      (_parent$classList2 = parent.classList).remove.apply(_parent$classList2, _toConsumableArray(classes));

      if (mode === 'full') {
        document.documentElement.classList.remove('vkui');
      }
    };
  }, []); // setup insets

  useIsomorphicLayoutEffect(function () {
    if (mode === 'partial') {
      return noop;
    }

    var parent = rootRef.current.parentElement;

    for (var key in insets) {
      if (insets.hasOwnProperty(key) && typeof insets[key] === 'number') {
        var inset = insets[key];
        parent.style.setProperty("--safe-area-inset-".concat(key), "".concat(inset, "px"));
        portalRoot && portalRoot.style.setProperty("--safe-area-inset-".concat(key), "".concat(inset, "px"));
      }
    }

    return function () {
      for (var _key in insets) {
        if (insets.hasOwnProperty(_key)) {
          parent.style.removeProperty("--safe-area-inset-".concat(_key));
          portalRoot && portalRoot.style.removeProperty("--safe-area-inset-".concat(_key));
        }
      }
    };
  }, [insets, portalRoot]); // adaptivity handler

  useIsomorphicLayoutEffect(function () {
    if (mode === 'partial' || sizeX !== SizeType.REGULAR) {
      return noop;
    }

    var container = mode === 'embedded' ? rootRef.current.parentElement : document.body;
    container.classList.add('vkui--sizeX-regular');
    return function () {
      return container.classList.remove('vkui--sizeX-regular');
    };
  }, [sizeX]);
  var scrollController = react.useMemo(function () {
    return scroll === 'contain' ? elementScrollController(rootRef) : globalScrollController(window, document);
  }, [scroll]);
  var content = createScopedElement(AppRootContext.Provider, {
    value: {
      appRoot: rootRef,
      portalRoot: portalRoot,
      embedded: mode === 'embedded',
      keyboardInput: isKeyboardInputActive,
      mode: mode
    }
  }, createScopedElement(ScrollContext.Provider, {
    value: scrollController
  }, createScopedElement(IconSettingsProvider, {
    classPrefix: "vkui",
    globalClasses: !noLegacyClasses
  }, children)));
  return mode === 'partial' ? content : createScopedElement("div", _extends({
    ref: rootRef,
    vkuiClass: classNames('AppRoot', {
      'AppRoot--no-mouse': !hasMouse,
      'AppRoot--keyboard-input': isKeyboardInputActive
    })
  }, props), content);
}, {
  sizeX: true,
  hasMouse: true
});

var DESKTOP_SIZE = 1280;
var TABLET_SIZE = 1024;
var SMALL_TABLET_SIZE = 768;
var MOBILE_SIZE = 320;
var MOBILE_LANDSCAPE_HEIGHT = 414;
var MEDIUM_HEIGHT = 720;
function AdaptivityProvider(props) {
  var adaptivityRef = react.useRef(null);

  var _React$useState = react.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updateAdaptivity = _React$useState2[1];

  var _useDOM = useDOM(),
      window = _useDOM.window;

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(window ? window.innerWidth : 0, window ? window.innerHeight : 0, props);
  }

  react.useEffect(function () {
    function onResize() {
      var calculated = calculateAdaptivity(window.innerWidth, window.innerHeight, props);
      var _adaptivityRef$curren = adaptivityRef.current,
          viewWidth = _adaptivityRef$curren.viewWidth,
          viewHeight = _adaptivityRef$curren.viewHeight,
          sizeX = _adaptivityRef$curren.sizeX,
          sizeY = _adaptivityRef$curren.sizeY,
          hasMouse = _adaptivityRef$curren.hasMouse,
          deviceHasHover = _adaptivityRef$curren.deviceHasHover;

      if (viewWidth !== calculated.viewWidth || viewHeight !== calculated.viewHeight || sizeX !== calculated.sizeX || sizeY !== calculated.sizeY || hasMouse !== calculated.hasMouse || deviceHasHover !== calculated.deviceHasHover) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    onResize();
    window.addEventListener('resize', onResize, false);
    return function () {
      window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.viewHeight, props.sizeX, props.sizeY, props.hasMouse, props.deviceHasHover]);
  return createScopedElement(AdaptivityContext.Provider, {
    value: adaptivityRef.current
  }, props.children);
}

function calculateAdaptivity(windowWidth, windowHeight, props) {
  var _props$hasMouse, _props$deviceHasHover;

  var viewWidth = ViewWidth.SMALL_MOBILE;
  var viewHeight = ViewHeight.SMALL;
  var sizeY = SizeType.REGULAR;
  var sizeX = SizeType.REGULAR;
  var hasMouse$1 = (_props$hasMouse = props.hasMouse) !== null && _props$hasMouse !== void 0 ? _props$hasMouse : hasMouse;
  var deviceHasHover = (_props$deviceHasHover = props.deviceHasHover) !== null && _props$deviceHasHover !== void 0 ? _props$deviceHasHover : hasHover;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
  }

  props.viewWidth && (viewWidth = props.viewWidth);
  props.viewHeight && (viewHeight = props.viewHeight);

  if (viewWidth <= ViewWidth.MOBILE) {
    sizeX = SizeType.COMPACT;
  }

  if (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse$1 || viewHeight <= ViewHeight.EXTRA_SMALL) {
    sizeY = SizeType.COMPACT;
  }

  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);
  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    sizeX: sizeX,
    sizeY: sizeY,
    hasMouse: hasMouse$1,
    deviceHasHover: deviceHasHover
  };
}

var _excluded = ["children", "schemeTarget"];

function useSchemeDetector(node, _scheme) {
  var inherit = _scheme === 'inherit';

  var getScheme = function getScheme() {
    if (!inherit || !canUseDOM) {
      return undefined;
    }

    return node.getAttribute('scheme');
  };

  var _React$useState = react.useState(getScheme()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      resolvedScheme = _React$useState2[0],
      setScheme = _React$useState2[1];

  react.useEffect(function () {
    if (!inherit) {
      return noop;
    }

    setScheme(getScheme());
    var observer = new MutationObserver(function () {
      return setScheme(getScheme());
    });
    observer.observe(node, {
      attributes: true,
      attributeFilter: ['scheme']
    });
    return function () {
      return observer.disconnect();
    };
  }, [inherit]);
  return _scheme === 'inherit' ? resolvedScheme : _scheme;
}

var deriveAppearance = function deriveAppearance(scheme) {
  return scheme === Scheme.SPACE_GRAY || scheme === Scheme.VKCOM_DARK ? 'dark' : 'light';
};

function normalizeScheme(scheme, platform) {
  if (scheme === 'inherit') {
    return scheme;
  }

  if (scheme === Scheme.VKCOM) {
    return Scheme.VKCOM_LIGHT;
  }

  if (platform === VKCOM && (scheme === Scheme.BRIGHT_LIGHT || scheme === Scheme.SPACE_GRAY)) {
    return Scheme.VKCOM_LIGHT;
  }

  switch (scheme) {
    case Scheme.DEPRECATED_CLIENT_LIGHT:
      return Scheme.BRIGHT_LIGHT;

    case Scheme.DEPRECATED_CLIENT_DARK:
      return Scheme.SPACE_GRAY;

    default:
      return scheme;
  }
}

var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
      schemeTarget = _ref.schemeTarget,
      config = _objectWithoutProperties(_ref, _excluded);

  var scheme = normalizeScheme(config.scheme, config.platform);

  var _useDOM = useDOM(),
      document = _useDOM.document;

  var target = schemeTarget || (document === null || document === void 0 ? void 0 : document.body);
  useIsomorphicLayoutEffect(function () {
    if (scheme === 'inherit') {
      return noop;
    }

    target.setAttribute('scheme', scheme);
    return function () {
      return target.removeAttribute('scheme');
    };
  }, [scheme]);
  var realScheme = useSchemeDetector(target, scheme);
  var configContext = useObjectMemo(_objectSpread({
    appearance: deriveAppearance(realScheme)
  }, config));
  return createScopedElement(ConfigProviderContext.Provider, {
    value: configContext
  }, children);
}; // Деструктуризация нужна из бага в react-docgen-typescript
// https://github.com/styleguidist/react-docgen-typescript/issues/195


ConfigProvider.defaultProps = _objectSpread({}, defaultConfigProviderProps);
var ConfigProvider$1 = ConfigProvider;

export { AdaptivityProvider, AppRoot, ConfigProvider$1 as ConfigProvider, Footer, Group$1 as Group, Header$1 as Header, Panel, PanelHeader$1 as PanelHeader, PanelHeaderButton, Search$1 as Search, SimpleCell$1 as SimpleCell, SplitCol, SplitLayout, View$1 as View, ViewWidth, withAdaptivity };
