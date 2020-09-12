import { c as createCommonjsModule, r as react, g as getDefaultExportFromCjs } from '../common/index-f6a4afc8.js';
import { a as browserSymbol, e as es6ObjectAssign } from '../common/browser-sprite-1f8b4710.js';
import { s as sprite, S as SvgIcon_1 } from '../common/SvgIcon-63e51bce.js';
import { b as bridge } from '../common/index.es-626e8131.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

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
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

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

var defineProperty = _defineProperty;

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs, throwOnDirectAccess; {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function classNames() {
  var result = [];

  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  classnames.forEach(function (item) {
    if (!item) {
      return;
    }

    switch (_typeof_1(item)) {
      case 'string':
        result.push(item);
        break;

      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;

      default:
        result.push("".concat(item));
    }
  });
  return result.join(' ');
}

var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
})(OS || (OS = {}));

var ANDROID = OS.ANDROID;
var IOS = OS.IOS;
function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
  return /android/i.test(ua) ? ANDROID : IOS;
}
var osname = platform();

function getClassname(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}

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
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var SSRContext = react.createContext({
  platform: null,
  userAgent: ''
});

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = react.useContext(SSRContext); // @ts-ignore

    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      platform: ssrContext.platform || platform()
    }));
  }

  return WithPlatform;
}

/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
function animate(_ref) {
  var duration = _ref.duration,
      timing = _ref.timing,
      draw = _ref.draw;

  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();
  window.requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      window.requestAnimationFrame(animate);
    }
  });
}

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

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

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

var objectWithoutProperties = _objectWithoutProperties;

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.clientX || e.changedTouches && e.changedTouches[0].clientX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  return e.clientY || e.changedTouches && e.changedTouches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var events = getSupportedEvents();

var Touch = /*#__PURE__*/function (_Component) {
  inherits(Touch, _Component);

  var _super = _createSuper(Touch);

  function Touch(props) {
    var _this;

    classCallCheck(this, Touch);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "cancelClick", void 0);

    defineProperty(assertThisInitialized(_this), "gesture", {});

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "onStart", function (e) {
      _this.gesture = {
        startX: coordX(e),
        startY: coordY(e),
        startT: new Date(),
        isPressed: true
      }; // Вызываем нужные колбеки из props

      var outputEvent = _objectSpread({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !touchEnabled && _this.subscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = coordX(e) - startX;
        var shiftY = coordY(e) - startY; // абсолютные значения смещений

        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        } // если мы ещё не определились


        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;
          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs; // Вызываем нужные колбеки из props

          var _outputEvent = _objectSpread({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(_outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(_outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(_outputEvent);
          }
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;

      if (isPressed) {
        // Вызываем нужные колбеки из props
        var _outputEvent2 = _objectSpread({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(_outputEvent2);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(_outputEvent2);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(_outputEvent2);
        }
      }

      var target = e.target; // Если закончили жест на ссылке, выставляем флаг для отмены перехода

      _this.cancelClick = target.tagName === 'A' && isSlide;
      _this.gesture = {};
      !touchEnabled && _this.unsubscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onDragStart", function (e) {
      var target = e.target;

      if (target.tagName === 'A' || target.tagName === 'IMG') {
        e.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(container);
        } else {
          getRootRef.current = container;
        }
      }
    });

    _this.cancelClick = false;
    return _this;
  }

  createClass(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        this.container.addEventListener(events[0], this.onStart, {
          capture: this.props.useCapture,
          passive: false
        });
        touchEnabled && this.subscribe(this.container);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart);
      touchEnabled && this.unsubscribe(this.container);
    }
    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "subscribe",
    value: function subscribe(element) {
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.addEventListener(events[1], this.onMove, listenerParams);
      element.addEventListener(events[2], this.onEnd, listenerParams);
      element.addEventListener(events[3], this.onEnd, listenerParams);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(element) {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.removeEventListener(events[1], this.onMove, listenerParams);
      element.removeEventListener(events[2], this.onEnd, listenerParams);
      element.removeEventListener(events[3], this.onEnd, listenerParams);
    }
    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStart = _this$props.onStart,
          onStartX = _this$props.onStartX,
          onStartY = _this$props.onStartY,
          onMove = _this$props.onMove,
          onMoveX = _this$props.onMoveX,
          onMoveY = _this$props.onMoveY,
          onEnd = _this$props.onEnd,
          onEndX = _this$props.onEndX,
          onEndY = _this$props.onEndY,
          useCapture = _this$props.useCapture,
          Component = _this$props.Component,
          getRootRef = _this$props.getRootRef,
          restProps = objectWithoutProperties(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onEnd", "onEndX", "onEndY", "useCapture", "Component", "getRootRef"]);

      return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
        onDragStart: this.onDragStart,
        onClick: this.onClick,
        ref: this.getRef
      }), this.props.children);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(react.Component);

defineProperty(Touch, "defaultProps", {
  Component: 'div',
  children: '',
  useCapture: false
});

defineProperty(Touch, "contextTypes", {
  document: propTypes.object
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function removeObjectKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = _objectSpread$1({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });
  return newObj;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = 'VKUI:View:transition-end';
var SwipeBackResults;

(function (SwipeBackResults) {
  SwipeBackResults[SwipeBackResults["fail"] = 1] = "fail";
  SwipeBackResults[SwipeBackResults["success"] = 2] = "success";
})(SwipeBackResults || (SwipeBackResults = {}));

var scrollsCache = {};
var swipeBackExcludedTags = ['input', 'textarea'];

var View = /*#__PURE__*/function (_Component) {
  inherits(View, _Component);

  var _super = _createSuper$1(View);

  function View(props) {
    var _this;

    classCallCheck(this, View);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "transitionEndHandler", function (e) {
      if (!e || ['animation-ios-next-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].includes(e.animationName)) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;

        _this.document.dispatchEvent(new _this.window.CustomEvent(transitionEndEventName));

        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? removeObjectKeys(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && _this.window.scrollTo(0, _this.state.scrolls[activePanel]);
          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevPanel,
            to: activePanel
          });
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "swipingBackTransitionEndHandler", function (e) {
      // indexOf because of vendor prefixes in old browsers
      var target = e.target;

      if (e.propertyName.includes('transform') && target.classList.contains('View__panel--swipe-back-next')) {
        switch (_this.state.swipeBackResult) {
          case SwipeBackResults.fail:
            _this.onSwipeBackCancel();

            break;

          case SwipeBackResults.success:
            _this.onSwipeBackSuccess();

        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onScrollTop", function () {
      var activePanel = _this.state.activePanel;

      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.documentElement.scrollTop;

        if (scrollTop) {
          animate({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onMoveX", function (e) {
      var target = e.originalEvent.target;

      if (target && typeof target.tagName === 'string' && swipeBackExcludedTags.includes(target.tagName.toLowerCase())) {
        return;
      }

      var platform = _this.props.platform;

      if (platform === IOS && !_this.context.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({
          browserSwipe: true
        });
      }

      if (platform === IOS && _this.context.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: _objectSpread$2({}, _this.state.scrolls, defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
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

    defineProperty(assertThisInitialized(_this), "onEnd", function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (Date.now() - _this.state.startT.getTime()) * 1000;

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
      scrolls: scrollsCache[props.id] || {},
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

  createClass(View, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.id) {
        scrollsCache[this.props.id] = this.state.scrolls;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      this.props.popout && !prevProps.popout && this.blurActiveElement();
      this.props.modal && !prevProps.modal && this.blurActiveElement(); // Нужен переход

      if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === prevProps.activePanel || panel.props.id === _this2.props.activePanel;
        });
        var isBack = firstLayer && firstLayer.props.id === this.props.activePanel;
        this.blurActiveElement();
        this.setState({
          visiblePanels: [prevProps.activePanel, this.props.activePanel],
          prevPanel: prevProps.activePanel,
          nextPanel: this.props.activePanel,
          activePanel: null,
          animated: true,
          scrolls: _objectSpread$2({}, prevState.scrolls, defineProperty({}, prevProps.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      } // Закончилась анимация свайпа назад


      if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
        var nextPanel = this.props.activePanel;
        var prevPanel = prevProps.activePanel;
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
          scrolls: removeObjectKeys(prevState.scrolls, [prevState.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(new _this2.window.CustomEvent(transitionEndEventName));

          window.scrollTo(0, prevState.scrolls[_this2.state.activePanel]);
          prevProps.onTransition && prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel
          });
        });
      }

      var scrolls = this.state.scrolls; // Начался переход

      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);
        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];

        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }

        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      } // Начался свайп назад


      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();

        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);

        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      } // Началась анимация завершения свайпа назад.


      if (!prevState.swipeBackResult && this.state.swipeBackResult) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      } // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)


      if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
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
      return this.context.transitionMotionEnabled === false;
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(elem, eventHandler) {
      {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
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
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn("Element #".concat(id, " not found"));
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: "onSwipeBackSuccess",
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: "onSwipeBackCancel",
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(new _this3.window.CustomEvent(transitionEndEventName));
      });
    }
  }, {
    key: "calcPanelSwipeStyles",
    value: function calcPanelSwipeStyles(panelId) {
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

      var _this$props = this.props,
          style = _this$props.style,
          popout = _this$props.popout,
          modal = _this$props.modal,
          platform = _this$props.platform;
      var _this$state = this.state,
          prevPanel = _this$state.prevPanel,
          nextPanel = _this$state.nextPanel,
          activePanel = _this$state.activePanel,
          swipeBackPrevPanel = _this$state.swipeBackPrevPanel,
          swipeBackNextPanel = _this$state.swipeBackNextPanel,
          swipeBackResult = _this$state.swipeBackResult;
      var hasPopout = !!popout;
      var hasModal = !!modal;
      var panels = this.panels.filter(function (panel) {
        var panelId = panel.props.id;
        return _this4.state.visiblePanels.includes(panelId) || panelId === swipeBackPrevPanel || panelId === swipeBackNextPanel;
      });
      var modifiers = {
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack,
        'View--no-motion': this.shouldDisableTransitionMotion()
      };
      return /*#__PURE__*/react.createElement(Touch, {
        Component: "section",
        className: classNames(getClassname('View', platform), this.props.className, modifiers),
        style: style,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd
      }, /*#__PURE__*/react.createElement("div", {
        className: "View__panels"
      }, panels.map(function (panel) {
        var panelId = panel.props.id;
        return /*#__PURE__*/react.createElement("div", {
          className: classNames('View__panel', {
            'View__panel--active': panelId === activePanel,
            'View__panel--prev': panelId === prevPanel,
            'View__panel--next': panelId === nextPanel,
            'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
            'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
            'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
            'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail
          }),
          style: _this4.calcPanelSwipeStyles(panelId),
          key: panelId
        }, /*#__PURE__*/react.createElement("div", {
          className: "View__panel-in"
        }, panel));
      })), hasPopout && /*#__PURE__*/react.createElement("div", {
        className: "View__popout"
      }, popout), hasModal && /*#__PURE__*/react.createElement("div", {
        className: "View__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "panels",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(react.Component);

defineProperty(View, "defaultProps", {
  history: []
});

defineProperty(View, "contextTypes", {
  isWebView: propTypes.bool,
  window: propTypes.any,
  document: propTypes.any,
  transitionMotionEnabled: propTypes.bool
});

var tabbarHeight = 48;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
        return _objectSpread$3({}, insets, {
          bottom: insets.bottom > 150 ? 0 : insets.bottom // если больше 150 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить

        });
      }

  }

  return null;
}

bridge.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    var htmlElement = window.document.documentElement;

    for (var key in insets) {
      if (insets.hasOwnProperty(key) && insets[key] > 0) {
        htmlElement.style.setProperty("--safe-area-inset-".concat(key), "".concat(insets[key], "px"));
      }
    }

    initialState = insets;
  }
});
function useInsets() {
  var _useState = react.useState(initialState),
      _useState2 = slicedToArray(_useState, 2),
      insets = _useState2[0],
      setInsets = _useState2[1];

  react.useEffect(function () {
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

function withInsets(Component) {
  function WithInsets(props) {
    var insets = useInsets(); // @ts-ignore

    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      insets: insets
    }));
  }

  return WithInsets;
}

// Является ли переданное значение числовым
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
} // Является ли переданное значение функцией
function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null;
}

var PanelContext = react.createContext({});

function _createSuper$2(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_Component) {
  inherits(Panel, _Component);

  var _super = _createSuper$2(Panel);

  function Panel() {
    var _this;

    classCallCheck(this, Panel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(container);
        } else {
          getRootRef.current = container;
        }
      }
    });

    return _this;
  }

  createClass(Panel, [{
    key: "getContext",
    value: function getContext() {
      return {
        panel: this.props.id,
        separator: this.props.separator
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          insets = _this$props.insets,
          platform = _this$props.platform,
          separator = _this$props.separator,
          getRootRef = _this$props.getRootRef,
          restProps = objectWithoutProperties(_this$props, ["className", "centered", "children", "insets", "platform", "separator", "getRootRef"]);

      var tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
      return /*#__PURE__*/react.createElement(PanelContext.Provider, {
        value: this.getContext()
      }, /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('Panel', platform), className, {
          'Panel--centered': centered
        })
      }), /*#__PURE__*/react.createElement(Touch, {
        className: "Panel__in",
        style: {
          paddingBottom: isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null
        }
      }, platform === IOS && /*#__PURE__*/react.createElement("div", {
        className: "Panel__fade"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-before"
      }), centered ? /*#__PURE__*/react.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-after"
      }))));
    }
  }]);

  return Panel;
}(react.Component);

defineProperty(Panel, "defaultProps", {
  children: '',
  centered: false,

  /**
   * @deprecated будет удалено в 4-й версии. Сепаратор теперь устанавливается в PanelHeader
   */
  separator: true
});

defineProperty(Panel, "contextTypes", {
  hasTabbar: propTypes.bool
});

var Panel$1 = withPlatform(withInsets(Panel));

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = react.createContext(false);

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$3()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ts = function ts() {
  return +Date.now();
};

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
var storage = {};
/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */

function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();
    delete storage[id];
  });
}

var Tappable = /*#__PURE__*/function (_Component) {
  inherits(Tappable, _Component);

  var _super = _createSuper$3(Tappable);

  function Tappable(props) {
    var _this;

    classCallCheck(this, Tappable);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "id", void 0);

    defineProperty(assertThisInitialized(_this), "isSlide", void 0);

    defineProperty(assertThisInitialized(_this), "insideTouchRoot", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "timeout", void 0);

    defineProperty(assertThisInitialized(_this), "wavesTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onStart", function (_ref) {
      var originalEvent = _ref.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        deactivateOtherInstances();
        return;
      }

      if (_this.props.platform === ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {
        stop: _this.stop,
        activeTimeout: window.setTimeout(_this.start, ACTIVE_DELAY)
      };
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;

        _this.stop();
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (_ref3) {
      var originalEvent = _ref3.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;

        _this.stop();

        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);

          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    });

    defineProperty(assertThisInitialized(_this), "onDown", function (e) {
      if (_this.props.platform === ANDROID) {
        var _getOffsetRect = getOffsetRect(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = coordX(e) - left;
        var y = coordY(e) - top;
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: _objectSpread$4({}, state.clicks, defineProperty({}, key, {
              x: x,
              y: y
            }))
          };
        });

        _this.wavesTimeout = window.setTimeout(function () {
          _this.setState(function (state) {
            var clicks = _objectSpread$4({}, state.clicks);

            delete clicks[key];
            return {
              clicks: clicks
            };
          });
        }, 225);
      }
    });

    defineProperty(assertThisInitialized(_this), "start", function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }

      deactivateOtherInstances(_this.id);
    });

    defineProperty(assertThisInitialized(_this), "stop", function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }

      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    });

    defineProperty(assertThisInitialized(_this), "getStorage", function () {
      return storage[_this.id];
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(container);
        } else {
          getRootRef.current = container;
        }
      }
    });

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    _this.isSlide = false;
    return _this;
  }

  createClass(Tappable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);
        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicks = _this$state.clicks,
          active = _this$state.active;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Component = _this$props.Component,
          activeEffectDelay = _this$props.activeEffectDelay,
          stopPropagation = _this$props.stopPropagation,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["children", "className", "Component", "activeEffectDelay", "stopPropagation", "getRootRef", "platform"]);

      var classes = classNames(getClassname('Tappable', platform), className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });
      var RootComponent = !restProps.disabled ? Touch : Component;
      var props = {};

      if (!restProps.disabled) {
        props.Component = Component;
        /* eslint-disable */

        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        /* eslint-enable */

        props.getRootRef = this.getRef;
      } else {
        props.ref = this.getRef;
      }

      return /*#__PURE__*/react.createElement(TouchRootContext.Consumer, null, function (insideTouchRoot) {
        _this2.insideTouchRoot = insideTouchRoot;
        return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
          className: classes
        }, props), platform === ANDROID && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__waves"
        }, Object.keys(clicks).map(function (k) {
          return /*#__PURE__*/react.createElement("span", {
            className: "Tappable__wave",
            style: {
              top: clicks[k].y,
              left: clicks[k].x
            },
            key: k
          });
        })), children);
      });
    }
  }]);

  return Tappable;
}(react.Component);

defineProperty(Tappable, "defaultProps", {
  Component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
});

var Tappable$1 = withPlatform(Tappable);

function usePlatform() {
  var ssrContext = react.useContext(SSRContext);
  return ssrContext.platform || platform();
}

var PanelHeaderButton = function PanelHeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      label = _ref.label,
      restProps = objectWithoutProperties(_ref, ["className", "children", "primary", "label"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('PanelHeaderButton', platform), className, {
      'PanelHeaderButton--primary': primary,
      'PanelHeaderButton--primitive': isPrimitive
    })
  }), children, label);
};

PanelHeaderButton.defaultProps = {
  primary: false
};

function withPanelContext(Component) {
  function WithPanelContext(props) {
    var _useContext = react.useContext(PanelContext),
        panel = _useContext.panel,
        separator = _useContext.separator; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      panel: panel,
      separator: separator
    }));
  }

  return WithPanelContext;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$4()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FixedLayout = /*#__PURE__*/function (_React$Component) {
  inherits(FixedLayout, _React$Component);

  var _super = _createSuper$4(FixedLayout);

  function FixedLayout() {
    var _this;

    classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      position: null,
      top: null
    });

    defineProperty(assertThisInitialized(_this), "el", void 0);

    defineProperty(assertThisInitialized(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.props.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll
      });
    });

    defineProperty(assertThisInitialized(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.el = element;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(element);
        } else {
          getRootRef.current = element;
        }
      }
    });

    return _this;
  }

  createClass(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          insets = _this$props.insets,
          platform = _this$props.platform,
          filled = _this$props.filled,
          separator = _this$props.separator,
          restProps = objectWithoutProperties(_this$props, ["className", "children", "style", "vertical", "getRootRef", "insets", "platform", "filled", "separator"]);

      var tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
      var paddingBottom = vertical === 'bottom' && isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null;
      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, "FixedLayout--".concat(vertical), className),
        style: _objectSpread$5({}, style, {}, this.state, {
          paddingBottom: paddingBottom
        })
      }), /*#__PURE__*/react.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(react.Component);

defineProperty(FixedLayout, "contextTypes", {
  document: propTypes.any,
  hasTabbar: propTypes.bool
});

var FixedLayout$1 = withPlatform(withInsets(withPanelContext(FixedLayout)));

var Separator = function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      restProps = objectWithoutProperties(_ref, ["className", "wide"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Separator', platform), className, {
      'Separator--wide': wide
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: "Separator__in"
  }));
};

var Separator$1 = react.memo(Separator);

var Appearance;

(function (Appearance) {
  Appearance["DARK"] = "dark";
  Appearance["LIGHT"] = "light";
})(Appearance || (Appearance = {}));

var Scheme;

(function (Scheme) {
  Scheme["DEPRECATED_CLIENT_LIGHT"] = "client_light";
  Scheme["DEPRECATED_CLIENT_DARK"] = "client_dark";
  Scheme["BRIGHT_LIGHT"] = "bright_light";
  Scheme["SPACE_GRAY"] = "space_gray";
})(Scheme || (Scheme = {}));

var WebviewType;

(function (WebviewType) {
  WebviewType["VKAPPS"] = "vkapps";
  WebviewType["INTERNAL"] = "internal";
})(WebviewType || (WebviewType = {}));

var ConfigProviderContext = react.createContext({});

var PanelHeader = function PanelHeader(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "getRef", "getRootRef"]);

  var platform = usePlatform();

  var _useContext = react.useContext(ConfigProviderContext),
      webviewType = _useContext.webviewType;

  var panelContext = react.useContext(PanelContext);
  var needSeparator = separator;

  if (typeof separator !== 'boolean') {
    needSeparator = panelContext.separator;
  }

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('PanelHeader', platform), {
      'PanelHeader--trnsp': transparent,
      'PanelHeader--vis': visor,
      'PanelHeader--sep': needSeparator && visor,
      'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
      'PanelHeader--no-left': left === undefined,
      'PanelHeader--no-right': right === undefined
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/react.createElement(FixedLayout$1, {
    vertical: "top",
    className: "PanelHeader__fixed",
    getRootRef: getRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__left"
  }, left, platform !== ANDROID && addon), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__content"
  }, isPrimitive ? /*#__PURE__*/react.createElement("span", null, children) : children), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__right"
  }, webviewType !== WebviewType.VKAPPS && right))), needSeparator && visor && /*#__PURE__*/react.createElement(Separator$1, {
    className: "PanelHeader__separator"
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};

var Header = function Header(_ref) {
  var className = _ref.className,
      mode = _ref.mode,
      children = _ref.children,
      subtitle = _ref.subtitle,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "mode", "children", "subtitle", "indicator", "aside", "getRootRef"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Header', platform);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className, "Header--mode-".concat(mode), {
      'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: "Header__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Header__content"
  }, children, subtitle && /*#__PURE__*/react.createElement("div", {
    className: "Header__subtitle"
  }, subtitle)), indicator && /*#__PURE__*/react.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && /*#__PURE__*/react.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.defaultProps = {
  mode: 'primary'
};

var Group = function Group(props) {
  var header = props.header,
      description = props.description,
      className = props.className,
      children = props.children,
      separator = props.separator,
      getRootRef = props.getRootRef,
      restProps = objectWithoutProperties(props, ["header", "description", "className", "children", "separator", "getRootRef"]);

  var platform = usePlatform();
  var baseClassNames = getClassname('Group', platform);
  return /*#__PURE__*/react.createElement("section", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className)
  }), header, children, description && /*#__PURE__*/react.createElement("div", {
    className: "Group__description"
  }, description), separator !== 'hide' && /*#__PURE__*/react.createElement(Separator$1, {
    className: classNames('Group__separator', {
      'Group__separator--force': separator === 'show'
    })
  }));
};

Group.defaultProps = {
  separator: 'auto'
};

var chevron = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 24';
var id = 'chevron_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Chevron = function Icon24Chevron(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Chevron.mountIcon = mountIcon;
var _default = Icon24Chevron;
exports.default = _default;

});

var Icon24Chevron = /*@__PURE__*/getDefaultExportFromCjs(chevron);

var SimpleCell = function SimpleCell(_ref) {
  var before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      className = _ref.className,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      restProps = objectWithoutProperties(_ref, ["before", "indicator", "children", "after", "description", "className", "expandable", "multiline"]);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: restProps.href ? 'a' : 'div',
    className: classNames(className, getClassname('SimpleCell', platform), {
      'SimpleCell--exp': expandable,
      'SimpleCell--mult': multiline
    })
  }), before, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__children"
  }, children), description && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__description"
  }, description)), hasReactNode(indicator) && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__indicator"
  }, indicator), hasAfter && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__after"
  }, after, expandable && platform === IOS && /*#__PURE__*/react.createElement(Icon24Chevron, null)));
};

var Div = function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "children", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Div', platform), className)
  }), children);
};

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/react.createElement(Div, _extends_1({}, restProps, {
    className: classNames('Footer', className)
  }), children);
};

var search_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'search_outline_16';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_outline_16"><path d="M6.5 1a5.5 5.5 0 014.383 8.823l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16SearchOutline = function Icon16SearchOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16SearchOutline.mountIcon = mountIcon;
var _default = Icon16SearchOutline;
exports.default = _default;

});

var Icon16SearchOutline = /*@__PURE__*/getDefaultExportFromCjs(search_outline);

var clear = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'clear_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16"><path d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Clear = function Icon16Clear(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Clear.mountIcon = mountIcon;
var _default = Icon16Clear;
exports.default = _default;

});

var Icon16Clear = /*@__PURE__*/getDefaultExportFromCjs(clear);

function _createSuper$5(Derived) { return function () { var Super = getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$5()) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var searchId = 0;

var Search = /*#__PURE__*/function (_Component) {
  inherits(Search, _Component);

  var _super = _createSuper$5(Search);

  function Search(props) {
    var _this;

    classCallCheck(this, Search);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "inputEl", void 0);

    defineProperty(assertThisInitialized(_this), "searchId", void 0);

    defineProperty(assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    });

    defineProperty(assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      var target = e.target;

      if (!_this.isControlledOutside) {
        _this.setState({
          value: target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onCancel", function () {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeInputValueSetter.call(_this.inputEl, '');
      var ev2 = new Event('input', {
        bubbles: true
      });

      _this.inputEl.dispatchEvent(ev2);
    });

    defineProperty(assertThisInitialized(_this), "onIconClickStart", function (e) {
      _this.props.onIconClick && _this.props.onIconClick(e.originalEvent);
    });

    defineProperty(assertThisInitialized(_this), "onIconCancelClickStart", function (e) {
      e.originalEvent.preventDefault();

      _this.inputEl.focus();

      _this.onCancel();
    });

    defineProperty(assertThisInitialized(_this), "inputRef", function (element) {
      var getRef = _this.props.getRef;
      _this.inputEl = element;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });

    var state = {
      focused: false
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.searchId = "search-".concat(searchId++);
    _this.state = state;
    return _this;
  }

  createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          after = _this$props.after,
          getRef = _this$props.getRef,
          platform = _this$props.platform,
          icon = _this$props.icon,
          onIconClick = _this$props.onIconClick,
          inputProps = objectWithoutProperties(_this$props, ["className", "onFocus", "onBlur", "onChange", "defaultValue", "value", "placeholder", "after", "getRef", "platform", "icon", "onIconClick"]);

      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('Search', platform), {
          'Search--focused': this.state.focused,
          'Search--has-value': !!this.value,
          'Search--has-after': !!after,
          'Search--has-icon': !!icon
        }, className)
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__in"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__width"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Search__control"
      }, /*#__PURE__*/react.createElement("input", _extends_1({}, inputProps, {
        ref: this.inputRef,
        type: "text",
        className: "Search__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.value
      })), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-width"
      }, after), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-in"
      }, /*#__PURE__*/react.createElement(Icon16SearchOutline, null), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-text",
        dangerouslySetInnerHTML: {
          __html: placeholder
        }
      })))), /*#__PURE__*/react.createElement("div", {
        className: "Search__after",
        onClick: this.onCancel
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__icons"
      }, icon && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconClickStart,
        className: "Search__icon"
      }, icon), !!this.value && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconCancelClickStart,
        className: "Search__icon"
      }, /*#__PURE__*/react.createElement(Icon16Clear, null))), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-in"
      }, after))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Search;
}(react.Component);

defineProperty(Search, "defaultProps", {
  autoComplete: 'off',
  placeholder: 'Поиск',
  after: 'Отмена'
});

var Search$1 = withPlatform(Search);

export { Footer, Group, Header, Panel$1 as Panel, PanelHeader, PanelHeaderButton, Search$1 as Search, SimpleCell };
