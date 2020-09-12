import { r as react } from '../common/index-f6a4afc8.js';
import { b as browserSprite$1, e as es6ObjectAssign, a as browserSymbol } from '../common/browser-sprite-1f8b4710.js';

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
var SvgIcon = function SvgIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      viewBox = _ref.viewBox,
      id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      fill = _ref.fill,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef"]);

  var size = Math.max(width, height);
  return /*#__PURE__*/react.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
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
  className: '',
  style: {}
};

var viewBox = '0 0 20 20';
var id = 'education_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="education_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M17.5 9.063l-1.5.822V13c0 2.8-2.717 5-6 5s-6-2.2-6-5V9.885L1.649 8.596a1.25 1.25 0 010-2.192l7.75-4.25a1.25 1.25 0 011.202 0l7.75 4.25c.424.232.66.674.649 1.125v5.221a.75.75 0 11-1.5 0V9.063zm-3 1.645l-3.899 2.138a1.25 1.25 0 01-1.202 0L5.5 10.708V13c0 1.894 1.984 3.5 4.5 3.5s4.5-1.606 4.5-3.5v-2.292zM10 3.535L2.77 7.5 10 11.465 17.23 7.5 10 3.535z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
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

var Icon20EducationOutline = function Icon20EducationOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
};

Icon20EducationOutline.mountIcon = mountIcon;

var viewBox$1 = '0 0 24 24';
var id$1 = 'crop_24';
var content$1 = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="crop_24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.1a.9.9 0 01.9.9v12A1.1 1.1 0 009 16.1h12a.9.9 0 110 1.8H9A2.9 2.9 0 016.1 15V3a.9.9 0 01.9-.9z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 7a.9.9 0 01.9-.9H15A2.9 2.9 0 0117.9 9v12a.9.9 0 11-1.8 0V9A1.1 1.1 0 0015 7.9h-4.5a.9.9 0 01-.9-.9zM2.1 7a.9.9 0 01.9-.9h3.5a.9.9 0 010 1.8H3a.9.9 0 01-.9-.9z" fill="currentColor" /></symbol>';
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

var Icon24Crop = function Icon24Crop(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$1();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Crop.mountIcon = mountIcon$1;

var viewBox$2 = '0 0 24 24';
var id$2 = 'fullscreen_24';
var content$2 = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="fullscreen_24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.9a.9.9 0 01.9-.9h4.2a.9.9 0 01.9.9v4.2a.9.9 0 11-1.8 0V7.073l-3.664 3.663a.9.9 0 11-1.272-1.272L16.927 5.8H14.9a.9.9 0 01-.9-.9zm-3.264 8.364a.9.9 0 010 1.272L7.073 18.2h2.025a.9.9 0 110 1.8H4.9a.9.9 0 01-.9-.9v-4.2a.9.9 0 011.8 0v2.027l3.664-3.663a.9.9 0 011.272 0z" fill="currentColor" /></symbol>';
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

var Icon24Fullscreen = function Icon24Fullscreen(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$2();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Fullscreen.mountIcon = mountIcon$2;

var viewBox$3 = '0 0 28 28';
var id$3 = 'advertising_outline_28';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="advertising_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M13.952 20.477a3 3 0 01-5.908 1.042l-.458-2.598A5.5 5.5 0 018.5 8h7.917l3.972-2.528A3 3 0 0125 8.002v10.996a3 3 0 01-4.611 2.53L16.417 19h-2.725l.26 1.477zm-3.939.694a1 1 0 001.97-.347l-.322-1.825h-2.03l.382 2.172zM21.463 7.16L17 10v7l4.463 2.841A1 1 0 0023 18.998V8.002a1 1 0 00-1.537-.843zM15 9.999L8.5 10a3.5 3.5 0 000 7H15v-7z" fill="currentColor" /></g></symbol>';
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

var Icon28AdvertisingOutline = function Icon28AdvertisingOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$3();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28AdvertisingOutline.mountIcon = mountIcon$3;

var viewBox$4 = '0 0 28 28';
var id$4 = 'article_outline_28';
var content$4 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="article_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 012.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 01-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18zm0 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.408.76-.55 1.499-.55 3.38v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.408-.76.55-1.499.55-3.38v-7.18c0-1.881-.142-2.62-.55-3.38a3.543 3.543 0 00-1.48-1.48c-.76-.408-1.499-.55-3.38-.55zM13 17.5a1 1 0 010 2H9a1 1 0 010-2zm6-4.5a1 1 0 010 2H9a1 1 0 010-2zm0-4.5a1 1 0 010 2H9a1 1 0 010-2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$4 = false;

function mountIcon$4() {
  if (!isMounted$4) {
    addSpriteSymbol(new browserSymbol({
      id: id$4,
      viewBox: viewBox$4,
      content: content$4
    }));
    isMounted$4 = true;
  }
}

var Icon28ArticleOutline = function Icon28ArticleOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$4();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$4,
    id: id$4,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ArticleOutline.mountIcon = mountIcon$4;

var viewBox$5 = '0 0 28 28';
var id$5 = 'attach_outline_28';
var content$5 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="attach_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14.189 10.897a1 1 0 111.414 1.414l-4.172 4.172a1.504 1.504 0 000 2.121c.6.6 1.554.567 2.121 0l7.778-7.778c1.602-1.601 1.514-4.143 0-5.657-1.514-1.514-4.055-1.601-5.656 0l-7.779 7.779c-2.55 2.55-2.503 6.689 0 9.192s6.642 2.55 9.193 0l4.172-4.172a1 1 0 011.414 1.414l-4.172 4.172c-3.34 3.34-8.744 3.277-12.02 0-3.278-3.277-3.34-8.682 0-12.02l7.777-7.779c2.406-2.405 6.212-2.274 8.486 0 2.274 2.274 2.405 6.08 0 8.485l-7.779 7.779c-1.327 1.327-3.546 1.403-4.95 0-1.403-1.404-1.326-3.623 0-4.95l4.173-4.172z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$5 = false;

function mountIcon$5() {
  if (!isMounted$5) {
    addSpriteSymbol(new browserSymbol({
      id: id$5,
      viewBox: viewBox$5,
      content: content$5
    }));
    isMounted$5 = true;
  }
}

var Icon28AttachOutline = function Icon28AttachOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$5();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$5,
    id: id$5,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28AttachOutline.mountIcon = mountIcon$5;

var viewBox$6 = '0 0 28 28';
var id$6 = 'document_outline_28';
var content$6 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="document_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.205 2.122c.406.093.772.245 1.124.466.356.222.63.456 1.192 1.02l4.872 4.87c.563.564.797.837 1.02 1.193.22.352.372.718.465 1.124.094.409.122.767.122 1.564v6.872c0 1.98-.185 2.94-.72 3.939a5.089 5.089 0 01-2.11 2.11c-.999.535-1.959.72-3.939.72H10.77c-1.98 0-2.94-.185-3.939-.72a5.089 5.089 0 01-2.11-2.11C4.184 22.17 4 21.21 4 19.23V8.066c0-1.285.232-2.324.72-3.236a5.089 5.089 0 012.11-2.11C7.742 2.231 8.781 2 10.066 2h3.575c.797 0 1.155.028 1.564.122zm-1.379 1.879L10.066 4c-.972 0-1.688.16-2.292.483a3.09 3.09 0 00-1.291 1.29C6.16 6.379 6 7.095 6 8.067v11.165c0 1.678.125 2.327.483 2.995.299.56.732.992 1.29 1.291.67.358 1.318.483 2.996.483h6.462c1.678 0 2.327-.125 2.995-.483a3.09 3.09 0 001.291-1.29c.358-.67.483-1.318.483-2.996V12.36c0-.137 0-.256-.002-.36L16.5 12A2.5 2.5 0 0114 9.5l.001-5.498-.175-.001zm2.281 1.02L16 4.915V9.5a.5.5 0 00.41.492l.09.008 4.587.002-.108-.11-4.872-4.87z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$6 = false;

function mountIcon$6() {
  if (!isMounted$6) {
    addSpriteSymbol(new browserSymbol({
      id: id$6,
      viewBox: viewBox$6,
      content: content$6
    }));
    isMounted$6 = true;
  }
}

var Icon28DocumentOutline = function Icon28DocumentOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$6();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$6,
    id: id$6,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28DocumentOutline.mountIcon = mountIcon$6;

var viewBox$7 = '0 0 28 28';
var id$7 = 'download_outline_28';
var content$7 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="download_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21 22a1 1 0 110 2H7a1 1 0 010-2h14zM14 2a1 1 0 011 1v13.585l5.293-5.292a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L13 16.585V3a1 1 0 011-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$7 = false;

function mountIcon$7() {
  if (!isMounted$7) {
    addSpriteSymbol(new browserSymbol({
      id: id$7,
      viewBox: viewBox$7,
      content: content$7
    }));
    isMounted$7 = true;
  }
}

var Icon28DownloadOutline = function Icon28DownloadOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$7();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$7,
    id: id$7,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28DownloadOutline.mountIcon = mountIcon$7;

var viewBox$8 = '0 0 28 28';
var id$8 = 'favorite_outline_28';
var content$8 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="favorite_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 19.178l5.69 3.476a.205.205 0 00.306-.223l-1.547-6.485 5.064-4.338a.205.205 0 00-.117-.36l-6.646-.533-2.56-6.156a.205.205 0 00-.38 0l-2.56 6.156-6.646.533a.205.205 0 00-.117.36l5.064 4.338-1.547 6.485a.205.205 0 00.306.223L14 19.178zm0 2.344L9.352 24.36a2.205 2.205 0 01-3.294-2.393l1.264-5.297-4.136-3.543a2.205 2.205 0 011.258-3.873l5.429-.435 2.091-5.028a2.205 2.205 0 014.072 0l2.091 5.028 5.429.435a2.205 2.205 0 011.258 3.873l-4.136 3.543 1.264 5.297a2.205 2.205 0 01-3.294 2.393L14 21.522z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$8 = false;

function mountIcon$8() {
  if (!isMounted$8) {
    addSpriteSymbol(new browserSymbol({
      id: id$8,
      viewBox: viewBox$8,
      content: content$8
    }));
    isMounted$8 = true;
  }
}

var Icon28FavoriteOutline = function Icon28FavoriteOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$8();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$8,
    id: id$8,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28FavoriteOutline.mountIcon = mountIcon$8;

var viewBox$9 = '0 0 28 28';
var id$9 = 'grid_square_outline_28';
var content$9 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="grid_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.41 3l7.516.002c1.958.02 2.954.231 3.988.784a5.543 5.543 0 012.3 2.3c.583 1.091.786 2.14.786 4.324l-.002 7.516c-.02 1.958-.231 2.954-.784 3.988a5.543 5.543 0 01-2.3 2.3c-1.091.583-2.14.786-4.324.786l-7.516-.002c-1.958-.02-2.954-.231-3.988-.784a5.543 5.543 0 01-2.3-2.3C3.203 20.823 3 19.774 3 17.59l.002-7.516c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 012.3-2.3C7.177 3.203 8.226 3 10.41 3zm7.18 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.365.68-.517 1.343-.545 2.822L5 10.41v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545l.558.005h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.365-.68.517-1.343.545-2.822L23 17.59v-7.18c0-1.881-.142-2.62-.55-3.38a3.543 3.543 0 00-1.48-1.48c-.68-.365-1.343-.517-2.822-.545L17.59 5zM12 17.5a1 1 0 01.117 1.993L12 19.5H9a1 1 0 01-.117-1.993L9 17.5h3zm7 0a1 1 0 01.117 1.993L19 19.5h-3a1 1 0 01-.117-1.993L16 17.5h3zM12 13a1 1 0 01.117 1.993L12 15H9a1 1 0 01-.117-1.993L9 13h3zm7 0a1 1 0 01.117 1.993L19 15h-3a1 1 0 01-.117-1.993L16 13h3zm0-4.5a1 1 0 01.117 1.993L19 10.5h-3a1 1 0 01-.117-1.993L16 8.5h3zm-7 0a1 1 0 01.117 1.993L12 10.5H9a1 1 0 01-.117-1.993L9 8.5h3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$9 = false;

function mountIcon$9() {
  if (!isMounted$9) {
    addSpriteSymbol(new browserSymbol({
      id: id$9,
      viewBox: viewBox$9,
      content: content$9
    }));
    isMounted$9 = true;
  }
}

var Icon28GridSquareOutline = function Icon28GridSquareOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$9();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$9,
    id: id$9,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28GridSquareOutline.mountIcon = mountIcon$9;

var viewBox$a = '0 0 28 28';
var id$a = 'horse_toy_outline_28';
var content$a = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="horse_toy_outline_28"><path clip-rule="evenodd" d="M7.518 14.412A3 3 0 0110.459 12H13.4c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C15 11.24 15 10.96 15 10.4v-.9C15 6.467 17.467 4 20.5 4a5.47 5.47 0 013.39 1.171c.295.232.565.493.808.779.541.64.309.99-.698 1.05v4.25a.75.75 0 01-.75.75h-.132c-.34 0-.567 0-.97-.36A3.642 3.642 0 0122 11.5l-1.43-1.194a7.64 7.64 0 01-.066-.05c-.134-.103-.18-.14-.304-.09-.126.05-.206.527-.205.752A.526.526 0 0020 11l1.63 9.005c.05.276.075.414.147.51a.514.514 0 00.35.194c.119.012.243-.037.493-.134a.997.997 0 011.311.56 1 1 0 01-.567 1.296l-.016.007a21.235 21.235 0 01-3.14.941c-.292.064-.588.123-.888.177C17.672 23.852 15.9 24 14 24c-1.9 0-3.673-.148-5.32-.444a24.107 24.107 0 01-1.466-.311 21.199 21.199 0 01-2.562-.807l-.017-.007a1 1 0 11.745-1.856c.27.106.406.159.536.14a.515.515 0 00.31-.17c.085-.098.115-.247.174-.545zm-2.861 4.107l.9-4.5A5 5 0 0110.459 10H13v-.5C13 5.363 16.363 2 20.5 2a7.49 7.49 0 015.724 2.657c.214.254.491.634.644 1.122.172.552.196 1.314-.273 2.02a2.385 2.385 0 01-.595.616v2.835A2.75 2.75 0 0123.25 14h-.165c-.098 0-.283.002-.514-.027l.824 4.553a3 3 0 01.698 5.768C21.133 25.452 17.754 26 14 26s-7.134-.548-10.094-1.706a3 3 0 01.75-5.775zm4.351 2.773c.006.099.009.148.032.194.019.038.053.076.089.099.043.028.094.036.197.053C10.771 21.88 12.33 22 14 22c1.785 0 3.44-.138 4.966-.413a5 5 0 10-9.957-.295zm7.772-1.421a3 3 0 00-5.56 0c.878.085 1.804.13 2.78.13.976 0 1.902-.045 2.78-.13z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted$a = false;

function mountIcon$a() {
  if (!isMounted$a) {
    addSpriteSymbol(new browserSymbol({
      id: id$a,
      viewBox: viewBox$a,
      content: content$a
    }));
    isMounted$a = true;
  }
}

var Icon28HorseToyOutline = function Icon28HorseToyOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$a();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$a,
    id: id$a,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28HorseToyOutline.mountIcon = mountIcon$a;

var viewBox$b = '0 0 28 28';
var id$b = 'key_square_outline_28';
var content$b = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="key_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.784 3.988L25 17.59c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.034.553-2.03.764-3.988.784L16 25a1 1 0 01-.117-1.993L16 23h1.59l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.543 3.543 0 001.48-1.48c.364-.68.516-1.343.544-2.822L23 17.59v-7.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.543 3.543 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544L17.59 5h-7.18l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 10.41v1.593a1 1 0 01-1.993.117L3 12.003V10.41c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3c1.034-.553 2.03-.764 3.988-.784L17.59 3zM19 8a1 1 0 011 1v6a1 1 0 01-1 1h-1.501l.001 1.5a1 1 0 01-.883.993l-.117.007-2.594-.001.029.153c.029.186.048.373.058.563L14 19.5a5.5 5.5 0 11-4.53-5.415l.025.005 5.798-5.797a1 1 0 01.576-.284L16 8zm-1.001 2h-1.585l-5.9 5.9a1 1 0 01-.878.278l-.119-.028a3.5 3.5 0 102.12 1.795 1 1 0 01.895-1.445H15.5L15.5 15a1 1 0 01.883-.993L16.5 14h1.499v-4zM8 19a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$b = false;

function mountIcon$b() {
  if (!isMounted$b) {
    addSpriteSymbol(new browserSymbol({
      id: id$b,
      viewBox: viewBox$b,
      content: content$b
    }));
    isMounted$b = true;
  }
}

var Icon28KeySquareOutline = function Icon28KeySquareOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$b();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$b,
    id: id$b,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28KeySquareOutline.mountIcon = mountIcon$b;

var viewBox$c = '0 0 28 28';
var id$c = 'like_outline_28';
var content$c = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="like_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9.026 4.88A6.526 6.526 0 002.5 11.406c0 3.613 1.445 5.421 7.493 10.126l2.78 2.16a2 2 0 002.455 0l2.779-2.16c6.048-4.705 7.493-6.513 7.493-10.126a6.526 6.526 0 00-6.526-6.526c-1.872 0-3.538.85-4.974 2.487C12.564 5.73 10.898 4.88 9.026 4.88zm0 2c1.52 0 2.889.858 4.152 2.683l.205.298a.75.75 0 001.234 0l.205-.298c1.263-1.825 2.633-2.683 4.152-2.683 2.5 0 4.526 2.027 4.526 4.526 0 2.78-1.137 4.204-6.721 8.547L14 22.114l-2.779-2.161C5.637 15.61 4.5 14.187 4.5 11.406c0-2.5 2.027-4.526 4.526-4.526z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$c = false;

function mountIcon$c() {
  if (!isMounted$c) {
    addSpriteSymbol(new browserSymbol({
      id: id$c,
      viewBox: viewBox$c,
      content: content$c
    }));
    isMounted$c = true;
  }
}

var Icon28LikeOutline = function Icon28LikeOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$c();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$c,
    id: id$c,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28LikeOutline.mountIcon = mountIcon$c;

var viewBox$d = '0 0 28 28';
var id$d = 'list_outline_28';
var content$d = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="list_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M4.5 14c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5S7.5 8.83 7.5 8 6.83 6.5 6 6.5 4.5 7.17 4.5 8zm0 12c0 .823.677 1.5 1.5 1.5s1.5-.677 1.5-1.5a1.5 1.5 0 10-3 0zM25 20a1 1 0 00-1-1H10a1 1 0 000 2h14a1 1 0 001-1zm0-6a1 1 0 00-1-1H10a1 1 0 000 2h14a1 1 0 001-1zM10 9h14a1 1 0 000-2H10a1 1 0 100 2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$d = false;

function mountIcon$d() {
  if (!isMounted$d) {
    addSpriteSymbol(new browserSymbol({
      id: id$d,
      viewBox: viewBox$d,
      content: content$d
    }));
    isMounted$d = true;
  }
}

var Icon28ListOutline = function Icon28ListOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$d();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$d,
    id: id$d,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ListOutline.mountIcon = mountIcon$d;

var viewBox$e = '0 0 28 28';
var id$e = 'market_like_outline_28';
var content$e = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="market_like_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.842 15A4.158 4.158 0 0126 19.158c0 2.242-.892 3.358-4.447 6.124l-1.647 1.28a1.476 1.476 0 01-1.812 0l-1.647-1.28C12.892 22.516 12 21.4 12 19.158A4.158 4.158 0 0116.158 15c.986 0 1.895.28 2.705.824l.137.096.137-.096a4.751 4.751 0 012.438-.817zm-.688-7c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135l.093.185c.201.438.308.956.308 2.126V12a1 1 0 01-2 0v-.154c0-.917-.043-1.142-.164-1.368a.727.727 0 00-.314-.314c-.194-.103-.386-.15-1.015-.161L21.154 10H6.846l-.353.003c-.629.011-.821.058-1.015.161a.727.727 0 00-.314.314c-.112.21-.157.418-.163 1.182L5 18.95c0 1.933.13 2.604.498 3.293.293.548.711.966 1.259 1.259.69.368 1.36.498 3.294.498H11a1 1 0 010 2h-.95l-.58-.005c-2.02-.04-2.835-.29-3.656-.73a4.998 4.998 0 01-2.08-2.079c-.459-.859-.712-1.71-.733-3.938L3 11.846c0-1.337.14-1.822.4-2.311A2.726 2.726 0 014.536 8.4l.185-.093c.407-.187.882-.292 1.885-.306zm.688 9c-.803 0-1.498.3-2.135.937l-.353.353a.501.501 0 01-.708 0l-.353-.353c-.637-.636-1.332-.937-2.135-.937A2.158 2.158 0 0014 19.158c0 1.41.584 2.14 3.675 4.545L19 24.733l1.845-1.438c2.555-2.02 3.12-2.763 3.153-4.015l.002-.122A2.158 2.158 0 0021.842 17zM9 12a1 1 0 110 2 1 1 0 010-2zm5-10a6 6 0 016 6h-2a4 4 0 10-8 0H8a6 6 0 016-6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$e = false;

function mountIcon$e() {
  if (!isMounted$e) {
    addSpriteSymbol(new browserSymbol({
      id: id$e,
      viewBox: viewBox$e,
      content: content$e
    }));
    isMounted$e = true;
  }
}

var Icon28MarketLikeOutline = function Icon28MarketLikeOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$e();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$e,
    id: id$e,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28MarketLikeOutline.mountIcon = mountIcon$e;

var viewBox$f = '0 0 28 28';
var id$f = 'market_outline_28';
var content$f = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="market_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M21.154 8c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135l.093.185c.201.438.308.956.308 2.126v7.103l-.005.582c-.04 2.018-.29 2.834-.73 3.655a4.998 4.998 0 01-2.079 2.08c-.896.479-1.785.734-4.237.734h-7.898l-.582-.005c-2.018-.04-2.834-.29-3.655-.73a4.998 4.998 0 01-2.08-2.079c-.459-.859-.712-1.71-.733-3.938L3 11.846c0-1.337.14-1.822.4-2.311A2.726 2.726 0 014.536 8.4l.185-.093c.407-.187.882-.292 1.885-.306L21.155 8zm0 2H6.846l-.353.003c-.629.011-.821.058-1.015.161a.727.727 0 00-.314.314c-.112.21-.157.418-.163 1.182L5 18.95c0 1.933.13 2.604.498 3.293.293.548.711.966 1.259 1.259.69.368 1.36.498 3.294.498h7.898c1.934 0 2.605-.13 3.294-.498.548-.293.966-.711 1.259-1.259.368-.69.498-1.36.498-3.294v-7.103c0-.917-.043-1.142-.164-1.368a.727.727 0 00-.314-.314c-.194-.103-.386-.15-1.015-.161L21.154 10zM19 12a1 1 0 110 2 1 1 0 010-2zM9 12a1 1 0 110 2 1 1 0 010-2zm5-10a6 6 0 016 6h-2a4 4 0 10-8 0H8a6 6 0 016-6z" fill="currentColor" /></g></symbol>';
var isMounted$f = false;

function mountIcon$f() {
  if (!isMounted$f) {
    addSpriteSymbol(new browserSymbol({
      id: id$f,
      viewBox: viewBox$f,
      content: content$f
    }));
    isMounted$f = true;
  }
}

var Icon28MarketOutline = function Icon28MarketOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$f();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$f,
    id: id$f,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28MarketOutline.mountIcon = mountIcon$f;

var viewBox$g = '0 0 28 28';
var id$g = 'message_outline_28';
var content$g = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 01-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 01.196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 011.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$g = false;

function mountIcon$g() {
  if (!isMounted$g) {
    addSpriteSymbol(new browserSymbol({
      id: id$g,
      viewBox: viewBox$g,
      content: content$g
    }));
    isMounted$g = true;
  }
}

var Icon28MessageOutline = function Icon28MessageOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$g();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$g,
    id: id$g,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28MessageOutline.mountIcon = mountIcon$g;

var viewBox$h = '0 0 28 28';
var id$h = 'music_outline_28';
var content$h = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="music_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M11 16.93v2.464c0 4.687-4.583 7.1-7.073 4.61-2.49-2.491-.078-7.074 4.61-7.074H11zm-2 2h-.463c-3.014 0-4.339 2.516-3.196 3.659C6.484 23.732 9 22.408 9 19.394v-.464zM19.388 3.523A3 3 0 0123 6.46v10.434c0 4.687-4.583 7.1-7.073 4.61-2.49-2.491-.078-7.074 4.61-7.074h.462V9.729l-10 2.083L11 18H9V8.917c0-.943.079-1.43.313-1.954.222-.496.56-.911 1-1.23.465-.336.926-.513 1.849-.705zM21 16.43h-.463c-3.014 0-4.339 2.516-3.196 3.659C18.484 21.232 21 19.908 21 16.894v-.464zm-.021-10.174a1 1 0 00-1.183-.775L12.57 6.986c-.67.14-.88.22-1.085.368-.156.112-.268.25-.346.426-.103.23-.139.451-.139 1.137v.853l10-2.083V6.46a1 1 0 00-.005-.103z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$h = false;

function mountIcon$h() {
  if (!isMounted$h) {
    addSpriteSymbol(new browserSymbol({
      id: id$h,
      viewBox: viewBox$h,
      content: content$h
    }));
    isMounted$h = true;
  }
}

var Icon28MusicOutline = function Icon28MusicOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$h();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$h,
    id: id$h,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28MusicOutline.mountIcon = mountIcon$h;

var viewBox$i = '0 0 28 28';
var id$i = 'name_tag_outline_28';
var content$i = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="name_tag_outline_28"><g fill-rule="nonzero" fill="none"><path opacity=".527" d="M0 0h28v28H0z" /><path d="M10.41 5c1.333 0 1.333 2 0 2l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 12.41v5.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545l.558.005h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.365-.68.517-1.343.545-2.822L23 17.59v-5.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.543 3.543 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544L17.59 7l-.133-.007c-1.156-.124-1.156-1.862 0-1.986L17.59 5H18l.071.003.172.004c1.649.038 2.581.232 3.499.69l.172.089a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.784 3.988l.002.336v5.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.034.553-2.03.764-3.988.784L10.41 25c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 01-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988L3 12.41c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3c.976-.522 1.92-.74 3.67-.78l.172-.003L10 5h.41zM15 17a1 1 0 010 2H9a1 1 0 010-2h6zm4-5a1 1 0 010 2H9a1 1 0 010-2h10zm-5-9a1 1 0 011 1v4a1 1 0 01-2 0V4a1 1 0 011-1z" fill="currentColor" /></g></symbol>';
var isMounted$i = false;

function mountIcon$i() {
  if (!isMounted$i) {
    addSpriteSymbol(new browserSymbol({
      id: id$i,
      viewBox: viewBox$i,
      content: content$i
    }));
    isMounted$i = true;
  }
}

var Icon28NameTagOutline = function Icon28NameTagOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$i();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$i,
    id: id$i,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28NameTagOutline.mountIcon = mountIcon$i;

var viewBox$j = '0 0 28 28';
var id$j = 'picture_stack_outline_28';
var content$j = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="picture_stack_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.872 7c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v6.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H8.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 01-1.512-1.512c-.33-.618-.514-1.23-.532-2.81L3 12.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512c.618-.33 1.23-.514 2.81-.532L19.872 7zM20 14.414l-4.938 4.94a1.5 1.5 0 01-2.008.103l-.114-.103L11 17.414l-4.483 4.483c.3.066.706.097 1.373.102L19.872 22c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692l.076-.155c.15-.345.213-.76.221-1.745v-1.696l-3-3zm.11-5.413H7.89l-.416.008c-.821.025-1.15.11-1.484.289-.304.162-.53.388-.692.692l-.076.155c-.15.345-.213.76-.221 1.745v7.22l.008.416c.013.43.043.726.094.958l4.836-4.838a1.5 1.5 0 012.008-.103l.114.103L14 17.586l4.94-4.94a1.5 1.5 0 012.007-.103l.114.103L23 14.585v-2.457c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 00-.692-.692l-.155-.076c-.345-.15-.76-.213-1.745-.221zM8.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8.936-8c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.131.246.216.49.25.976H8.017c.034-.486.119-.73.25-.976.174-.326.43-.582.756-.756.326-.174.65-.267 1.54-.267h6.873z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$j = false;

function mountIcon$j() {
  if (!isMounted$j) {
    addSpriteSymbol(new browserSymbol({
      id: id$j,
      viewBox: viewBox$j,
      content: content$j
    }));
    isMounted$j = true;
  }
}

var Icon28PictureStackOutline = function Icon28PictureStackOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$j();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$j,
    id: id$j,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28PictureStackOutline.mountIcon = mountIcon$j;

var viewBox$k = '0 0 28 28';
var id$k = 'recent_outline_28';
var content$k = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="recent_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2c6.626 0 12 5.372 12 12s-5.374 12-12 12C7.372 26 2 20.628 2 14S7.372 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10c5.522 0 10-4.478 10-10S19.522 4 14 4zm-.5 4a1 1 0 011 1v5.104l4.875 1.969a1 1 0 11-.75 1.854l-5.5-2.222a1 1 0 01-.625-.927V9a1 1 0 011-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$k = false;

function mountIcon$k() {
  if (!isMounted$k) {
    addSpriteSymbol(new browserSymbol({
      id: id$k,
      viewBox: viewBox$k,
      content: content$k
    }));
    isMounted$k = true;
  }
}

var Icon28RecentOutline = function Icon28RecentOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$k();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$k,
    id: id$k,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28RecentOutline.mountIcon = mountIcon$k;

var viewBox$l = '0 0 28 28';
var id$l = 'search_28';
var content$l = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="search_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M20.522 18.966l3.756 3.756a1.1 1.1 0 11-1.556 1.556l-3.756-3.756A9.56 9.56 0 0113 22.6a9.6 9.6 0 119.6-9.6 9.56 9.56 0 01-2.078 5.966zM13 20.4a7.4 7.4 0 100-14.8 7.4 7.4 0 000 14.8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$l = false;

function mountIcon$l() {
  if (!isMounted$l) {
    addSpriteSymbol(new browserSymbol({
      id: id$l,
      viewBox: viewBox$l,
      content: content$l
    }));
    isMounted$l = true;
  }
}

var Icon28Search = function Icon28Search(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$l();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$l,
    id: id$l,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28Search.mountIcon = mountIcon$l;

var viewBox$m = '0 0 28 28';
var id$m = 'search_outline_28';
var content$m = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="search_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M13 4.5a8.5 8.5 0 016.676 13.762l4.531 4.53a1 1 0 01-1.414 1.415l-4.53-4.531A8.5 8.5 0 1113 4.5zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$m = false;

function mountIcon$m() {
  if (!isMounted$m) {
    addSpriteSymbol(new browserSymbol({
      id: id$m,
      viewBox: viewBox$m,
      content: content$m
    }));
    isMounted$m = true;
  }
}

var Icon28SearchOutline = function Icon28SearchOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$m();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$m,
    id: id$m,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28SearchOutline.mountIcon = mountIcon$m;

var viewBox$n = '0 0 28 28';
var id$n = 'services_outline_28';
var content$n = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="services_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9.116 15c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419H6.884c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26C3.108 22.739 3 22.18 3 21.116v-2.232c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26.582-.311 1.14-.419 2.205-.419h2.232zm12 0c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419h-2.232c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26-.311-.582-.419-1.14-.419-2.205v-2.232c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26.582-.311 1.14-.419 2.205-.419h2.232zm-12 2H6.884c-.763 0-1.01.048-1.261.182a1.045 1.045 0 00-.44.44c-.135.253-.183.499-.183 1.262v2.232c0 .763.048 1.01.182 1.261.103.193.248.338.44.44.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182.193-.103.338-.248.44-.44.135-.253.183-.499.183-1.262v-2.232c0-.763-.048-1.01-.182-1.261a1.045 1.045 0 00-.44-.44c-.253-.135-.499-.183-1.262-.183zm12 0h-2.232c-.763 0-1.01.048-1.261.182a1.045 1.045 0 00-.44.44c-.135.253-.183.499-.183 1.262v2.232c0 .763.048 1.01.182 1.261.103.193.248.338.44.44.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182.193-.103.338-.248.44-.44.135-.253.183-.499.183-1.262v-2.232c0-.763-.048-1.01-.182-1.261a1.045 1.045 0 00-.44-.44c-.253-.135-.499-.183-1.262-.183zM20.89 2.413c.631.19 1.102.51 1.856 1.263l1.577 1.577c.754.754 1.072 1.225 1.263 1.856a3.044 3.044 0 010 1.782c-.19.631-.51 1.102-1.263 1.856l-1.577 1.577c-.754.754-1.225 1.072-1.856 1.263a3.044 3.044 0 01-1.782 0c-.631-.19-1.102-.51-1.856-1.263l-1.577-1.577c-.754-.754-1.072-1.225-1.263-1.856a3.044 3.044 0 010-1.782c.19-.631.51-1.102 1.263-1.856l1.577-1.577c.754-.754 1.225-1.072 1.856-1.263a3.044 3.044 0 011.782 0zM9.116 3c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419H6.884c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26C3.108 10.739 3 10.18 3 9.116V6.884c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26C5.261 3.108 5.82 3 6.884 3h2.232zm10.573 1.327c-.274.082-.482.223-1.021.763L17.09 6.668c-.54.54-.68.747-.763 1.02a1.045 1.045 0 000 .623c.082.274.223.482.763 1.021l1.578 1.578c.54.54.747.68 1.02.763.21.064.415.064.623 0 .274-.082.482-.223 1.021-.763l1.578-1.578c.54-.54.68-.747.763-1.02a1.045 1.045 0 000-.623c-.082-.274-.223-.482-.763-1.021L21.332 5.09c-.54-.54-.747-.68-1.02-.763a1.045 1.045 0 00-.623 0zM9.116 5H6.884c-.763 0-1.01.048-1.261.182a1.045 1.045 0 00-.44.44C5.047 5.876 5 6.122 5 6.885v2.232c0 .763.048 1.01.182 1.261.103.193.248.338.44.44.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182.193-.103.338-.248.44-.44.135-.253.183-.499.183-1.262V6.884c0-.763-.048-1.01-.182-1.261a1.045 1.045 0 00-.44-.44C10.124 5.047 9.878 5 9.115 5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$n = false;

function mountIcon$n() {
  if (!isMounted$n) {
    addSpriteSymbol(new browserSymbol({
      id: id$n,
      viewBox: viewBox$n,
      content: content$n
    }));
    isMounted$n = true;
  }
}

var Icon28ServicesOutline = function Icon28ServicesOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$n();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$n,
    id: id$n,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ServicesOutline.mountIcon = mountIcon$n;

var viewBox$o = '0 0 28 28';
var id$o = 'upload_outline_28';
var content$o = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="upload_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21 22a1 1 0 110 2H7a1 1 0 010-2h14zM14 3h.02c.023 0 .046.002.07.004L14 3a1.008 1.008 0 01.595.196c.04.03.077.061.112.097l-.09-.08.008.007.082.073 7 7a1 1 0 01-1.414 1.414L15 6.414V19a1 1 0 01-2 0V6.414l-5.293 5.293a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l7-7 .082-.073A1.005 1.005 0 0114 3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$o = false;

function mountIcon$o() {
  if (!isMounted$o) {
    addSpriteSymbol(new browserSymbol({
      id: id$o,
      viewBox: viewBox$o,
      content: content$o
    }));
    isMounted$o = true;
  }
}

var Icon28UploadOutline = function Icon28UploadOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$o();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$o,
    id: id$o,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28UploadOutline.mountIcon = mountIcon$o;

var viewBox$p = '0 0 28 28';
var id$p = 'user_outline_28';
var content$p = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.5 8.5C17.5 6.566 15.934 5 14 5a3.499 3.499 0 00-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5zm2 0c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 01-5.5-5.5C8.5 5.461 10.961 3 14 3s5.5 2.461 5.5 5.5zM7 20.643c0 .943-.08.857.456.857h13.588c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643S7 18.355 7 20.643zm-2 0C5 16.763 9.299 15 14.25 15s9.25 1.763 9.25 5.643c0 2.016-.781 2.857-2.456 2.857H7.456C5.78 23.5 5 22.66 5 20.643z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$p = false;

function mountIcon$p() {
  if (!isMounted$p) {
    addSpriteSymbol(new browserSymbol({
      id: id$p,
      viewBox: viewBox$p,
      content: content$p
    }));
    isMounted$p = true;
  }
}

var Icon28UserOutline = function Icon28UserOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$p();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$p,
    id: id$p,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28UserOutline.mountIcon = mountIcon$p;

var viewBox$q = '0 0 28 28';
var id$q = 'users_3_outline_28';
var content$q = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_3_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 14.5c3.862 0 6.5 1.759 6.5 4.5 0 1.93-1.284 3-3 3h-7c-1.716 0-3-1.07-3-3 0-2.741 2.638-4.5 6.5-4.5zm8 0c2.746 0 4.5 1.657 4.5 3.75 0 1.692-1.293 2.75-2.75 2.75H23a1 1 0 010-2h.75c.431 0 .75-.26.75-.75 0-.962-.834-1.75-2.5-1.75a1 1 0 010-2zm-16 0a1 1 0 010 2c-1.666 0-2.5.788-2.5 1.75 0 .49.319.75.75.75H5a1 1 0 010 2h-.75c-1.457 0-2.75-1.058-2.75-2.75 0-2.093 1.754-3.75 4.5-3.75zm8 2c-2.888 0-4.5 1.075-4.5 2.5 0 .737.316 1 1 1h7c.684 0 1-.263 1-1 0-1.425-1.612-2.5-4.5-2.5zM20 6a3.5 3.5 0 010 7 1 1 0 010-2l.144-.007A1.5 1.5 0 0020 8l-.117-.007A1 1 0 0120 6zM8 6a1 1 0 01.117 1.993L8 8a1.5 1.5 0 00-.144 2.993L8 11a1 1 0 010 2 3.5 3.5 0 010-7zm6-1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$q = false;

function mountIcon$q() {
  if (!isMounted$q) {
    addSpriteSymbol(new browserSymbol({
      id: id$q,
      viewBox: viewBox$q,
      content: content$q
    }));
    isMounted$q = true;
  }
}

var Icon28Users3Outline = function Icon28Users3Outline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$q();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$q,
    id: id$q,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28Users3Outline.mountIcon = mountIcon$q;

var viewBox$r = '0 0 28 28';
var id$r = 'users_outline_28';
var content$r = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9 15c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H3.647c-1.458 0-2.147-.797-2.147-2.571C1.5 16.542 5.003 15 9 15zm10.5 0c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H19a1 1 0 010-2h5.913a.83.83 0 01.042.002l.013.001.002-.015c.01-.081.024-.22.029-.427l.001-.132C25 18.095 22.513 17 19.5 17c-.428 0-.898.03-1.37.09a1 1 0 11-.256-1.983A12.87 12.87 0 0119.5 15zM9 17c-3.013 0-5.5 1.095-5.5 2.929 0 .28.017.462.03.56l.001.014.014-.001.019-.001h10.891l.013.002.002-.015c.013-.097.03-.28.03-.56C14.5 18.096 12.013 17 9 17zM19.5 5a4.25 4.25 0 014.25 4.25 4.25 4.25 0 01-4.25 4.25 4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 0119.5 5zM9 5a4.25 4.25 0 014.25 4.25A4.25 4.25 0 019 13.5a4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 019 5zm10.5 2a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5zM9 7a2.25 2.25 0 100 4.5A2.25 2.25 0 109 7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$r = false;

function mountIcon$r() {
  if (!isMounted$r) {
    addSpriteSymbol(new browserSymbol({
      id: id$r,
      viewBox: viewBox$r,
      content: content$r
    }));
    isMounted$r = true;
  }
}

var Icon28UsersOutline = function Icon28UsersOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$r();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$r,
    id: id$r,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28UsersOutline.mountIcon = mountIcon$r;

var viewBox$s = '0 0 28 28';
var id$s = 'user_square_outline_28';
var content$s = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_square_outline_28"><mask id="user_square_outline_28_a" height="18" maskUnits="userSpaceOnUse" width="18" x="5" y="5"><path d="M9.852 5.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822v8.296c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544h8.296c1.479-.028 2.141-.18 2.823-.545a3.544 3.544 0 001.48-1.48c.364-.68.516-1.343.544-2.822V9.852c-.028-1.479-.18-2.141-.545-2.823a3.544 3.544 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544z" fill="currentColor" /></mask><path d="M17.926 3.002c1.958.02 2.954.231 3.988.784a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.784 3.988v7.852c-.02 1.958-.231 2.954-.784 3.988a5.543 5.543 0 01-2.3 2.3c-1.034.553-2.03.764-3.988.784h-7.852c-1.958-.02-2.954-.231-3.988-.784a5.543 5.543 0 01-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-7.852c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 012.3-2.3c1.034-.553 2.03-.764 3.988-.784zM9.852 5.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822v8.296c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544h8.296c1.479-.028 2.141-.18 2.823-.545a3.544 3.544 0 001.48-1.48c.364-.68.516-1.343.544-2.822V9.852c-.028-1.479-.18-2.141-.545-2.823a3.544 3.544 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544z" fill="currentColor" /><g mask="url(#user_square_outline_28_a)"><circle cx="14" cy="31.5" r="12" stroke="currentColor" stroke-width="2" /><path d="M14 7.5a4.749 4.749 0 014.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0114 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" fill="currentColor" /></g><g fill="currentColor"><path d="M14 7.5a4.749 4.749 0 014.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0114 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" /><path clip-rule="evenodd" d="M21.914 3.786c-1.034-.553-2.03-.764-3.988-.784h-7.852c-1.958.02-2.954.231-3.988.784a5.543 5.543 0 00-2.3 2.3c-.553 1.034-.764 2.03-.784 3.988v7.852c.02 1.958.231 2.954.784 3.988a5.543 5.543 0 002.3 2.3c1.034.553 2.03.764 3.988.784h7.852c1.958-.02 2.954-.231 3.988-.784a5.543 5.543 0 002.3-2.3c.553-1.034.764-2.03.784-3.988v-7.852c-.02-1.958-.231-2.954-.784-3.988a5.543 5.543 0 00-2.3-2.3zM7.029 5.55c.682-.365 1.344-.517 2.823-.545h8.296c1.479.028 2.141.18 2.823.545.64.342 1.137.839 1.48 1.48.364.68.516 1.343.544 2.822v8.296c-.028 1.479-.18 2.141-.545 2.823-.08.15-.17.293-.267.427C19.95 19.586 17.101 18.5 14 18.5s-5.949 1.086-8.183 2.898a3.72 3.72 0 01-.267-.427c-.365-.682-.517-1.344-.545-2.823V9.852c.028-1.479.18-2.141.545-2.823.342-.64.839-1.137 1.48-1.48zM14 7.5a4.749 4.749 0 014.75 4.75c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75A4.749 4.749 0 0114 7.5zM9.852 22.995h8.296c1.169-.022 1.828-.122 2.39-.343C18.71 21.3 16.447 20.5 14 20.5s-4.71.8-6.537 2.152c.561.221 1.22.32 2.39.343zM11.25 12.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S15.52 15 14 15s-2.75-1.23-2.75-2.75z" fill-rule="evenodd" /></g></symbol>';
var isMounted$s = false;

function mountIcon$s() {
  if (!isMounted$s) {
    addSpriteSymbol(new browserSymbol({
      id: id$s,
      viewBox: viewBox$s,
      content: content$s
    }));
    isMounted$s = true;
  }
}

var Icon28UserSquareOutline = function Icon28UserSquareOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$s();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$s,
    id: id$s,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28UserSquareOutline.mountIcon = mountIcon$s;

var viewBox$t = '0 0 28 28';
var id$t = 'videocam_outline_28';
var content$t = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="videocam_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M14.872 6c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.232.434.392.866.473 1.633l2.007-1.253A2.65 2.65 0 0126 10.673v6.654a2.65 2.65 0 01-4.054 2.247l-2.007-1.253c-.081.767-.241 1.199-.473 1.633a3.635 3.635 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 01-1.512-1.512C2.186 19.302 2 18.655 2 16.872v-5.744c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512C4.698 6.186 5.345 6 7.128 6h7.744zm.238 2H7.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.206.385-.288.764-.297 1.9L4 16.872c0 1.324.078 1.727.298 2.138.162.304.388.53.692.692.411.22.814.298 2.138.298h7.744c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692.22-.411.298-.814.298-2.138v-5.744c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 00-.692-.692c-.385-.206-.764-.288-1.9-.297zm7.896 2.122L20 12v4l3.006 1.878a.65.65 0 00.994-.55v-6.655a.65.65 0 00-.994-.551z" fill="currentColor" /></g></symbol>';
var isMounted$t = false;

function mountIcon$t() {
  if (!isMounted$t) {
    addSpriteSymbol(new browserSymbol({
      id: id$t,
      viewBox: viewBox$t,
      content: content$t
    }));
    isMounted$t = true;
  }
}

var Icon28VideocamOutline = function Icon28VideocamOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$t();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$t,
    id: id$t,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28VideocamOutline.mountIcon = mountIcon$t;

var viewBox$u = '0 0 28 28';
var id$u = 'work_outline_28';
var content$u = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="work_outline_28"><path clip-rule="evenodd" d="M13.46 3h1.08c.666 0 1.226 0 1.683.037.48.04.934.124 1.366.344a3.5 3.5 0 011.53 1.53c.22.432.304.887.344 1.366.046.572.037 1.15.037 1.723h1.54c.666 0 1.226 0 1.683.037.48.04.934.124 1.366.344a3.5 3.5 0 011.53 1.53c.22.432.304.887.344 1.366.037.457.037 1.017.037 1.683v1.676c0 .39 0 .74-.024 1.03-.09 1.103-.85 2.068-1.976 2.268 0 .772.019 1.548-.044 2.318-.046.562-.145 1.079-.392 1.564a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H9.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.063-.77-.044-1.546-.044-2.318-1.126-.2-1.886-1.165-1.976-2.267C2 15.375 2 15.025 2 14.637V12.96c0-.666 0-1.226.037-1.683.04-.48.124-.934.344-1.366a3.5 3.5 0 011.53-1.53c.432-.22.887-.304 1.366-.344C5.734 8 6.294 8 6.96 8H8.5c0-.574-.01-1.15.037-1.723.04-.48.124-.934.344-1.366a3.5 3.5 0 011.53-1.53c.432-.22.887-.304 1.366-.344C12.234 3 12.794 3 13.46 3zM5.4 16h17.2c.436 0 .704 0 .904-.017.305-.025.456-.194.479-.48.016-.2.017-.467.017-.903V13c0-.717 0-1.194-.03-1.56-.03-.356-.081-.518-.133-.621a1.5 1.5 0 00-.656-.656c-.103-.052-.265-.103-.62-.132C22.194 10 21.717 10 21 10H7c-.717 0-1.194 0-1.56.03-.356.03-.518.081-.621.134a1.5 1.5 0 00-.656.655c-.052.103-.103.265-.132.62C4 11.806 4 12.283 4 13v1.6c0 .436 0 .704.017.904.026.31.187.455.48.479.2.016.466.017.903.017zm.6 2c0 .695-.02 1.395.038 2.089.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C8.361 22 8.943 22 9.8 22h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.057-.694.038-1.394.038-2.089zM17.47 6.44c.03.366.03.843.03 1.56h-7c0-.717 0-1.194.03-1.56.03-.356.081-.518.134-.621a1.5 1.5 0 01.655-.656c.103-.052.265-.103.62-.132C12.306 5 12.783 5 13.5 5h1c.717 0 1.194 0 1.56.03.356.03.518.081.621.133a1.5 1.5 0 01.655.656c.053.103.104.265.133.62z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted$u = false;

function mountIcon$u() {
  if (!isMounted$u) {
    addSpriteSymbol(new browserSymbol({
      id: id$u,
      viewBox: viewBox$u,
      content: content$u
    }));
    isMounted$u = true;
  }
}

var Icon28WorkOutline = function Icon28WorkOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$u();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$u,
    id: id$u,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28WorkOutline.mountIcon = mountIcon$u;

export { Icon20EducationOutline, Icon24Crop, Icon24Fullscreen, Icon28AdvertisingOutline, Icon28ArticleOutline, Icon28AttachOutline, Icon28DocumentOutline, Icon28DownloadOutline, Icon28FavoriteOutline, Icon28GridSquareOutline, Icon28HorseToyOutline, Icon28KeySquareOutline, Icon28LikeOutline, Icon28ListOutline, Icon28MarketLikeOutline, Icon28MarketOutline, Icon28MessageOutline, Icon28MusicOutline, Icon28NameTagOutline, Icon28PictureStackOutline, Icon28RecentOutline, Icon28Search, Icon28SearchOutline, Icon28ServicesOutline, Icon28UploadOutline, Icon28UserOutline, Icon28UserSquareOutline, Icon28Users3Outline, Icon28UsersOutline, Icon28VideocamOutline, Icon28WorkOutline };
