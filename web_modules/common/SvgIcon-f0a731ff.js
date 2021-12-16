import { a as browserSprite$1 } from './browser-sprite-29b2ca92.js';
import { r as react } from './index-50b0b662.js';

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IconSettingsContext = /*#__PURE__*/react.createContext({});
var IconSettingsProvider = function IconSettingsProvider(_ref) {
  var children = _ref.children,
      settings = _objectWithoutProperties$1(_ref, ["children"]);

  var contextValue = react.useMemo(function () {
    return settings;
  }, [settings.classPrefix, settings.globalClasses]);
  return /*#__PURE__*/react.createElement(IconSettingsContext.Provider, {
    value: contextValue
  }, children);
};

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite = new browserSprite$1({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite.attach(spriteNode);
    } else {
      browserSprite.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite) {
    browserSprite.add(symbol);
  }
}
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var svgStyle = {
  display: 'block'
};

function iconClass(fragments, _ref) {
  var classPrefix = _ref.classPrefix,
      globalClasses = _ref.globalClasses;
  var res = '';

  for (var i = 0; i < fragments.length; i++) {
    if (classPrefix) {
      res += ' ' + (classPrefix + fragments[i]);
    }

    if (!classPrefix || globalClasses) {
      res += ' ' + fragments[i];
    }
  }

  return res;
}

var SvgIcon = function SvgIcon(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      viewBox = _ref2.viewBox,
      id = _ref2.id,
      className = _ref2.className,
      style = _ref2.style,
      fill = _ref2.fill,
      getRootRef = _ref2.getRootRef,
      Component = _ref2.Component,
      restProps = _objectWithoutProperties(_ref2, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef", "Component"]);

  var size = Math.max(width, height);
  var iconSettings = react.useContext(IconSettingsContext);
  var ownClass = iconClass(['Icon', "Icon--".concat(size), "Icon--w-".concat(width), "Icon--h-".concat(height), "Icon--".concat(id)], iconSettings);
  return /*#__PURE__*/react.createElement(Component, _extends({
    role: "presentation"
  }, restProps, {
    ref: getRootRef,
    className: "".concat(ownClass, " ").concat(className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/react.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};
SvgIcon.defaultProps = {
  Component: 'div',
  className: '',
  style: {}
};

export { IconSettingsProvider as I, SvgIcon as S, addSpriteSymbol as a, useIsomorphicLayoutEffect as u };
