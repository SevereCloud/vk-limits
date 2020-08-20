import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var fullscreen = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);



var _sprite = _interopRequireDefault(sprite);

var _SvgIcon = _interopRequireDefault(SvgIcon_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 24 24';
var id = 'fullscreen_24';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="fullscreen_24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.9a.9.9 0 01.9-.9h4.2a.9.9 0 01.9.9v4.2a.9.9 0 11-1.8 0V7.073l-3.664 3.663a.9.9 0 11-1.272-1.272L16.927 5.8H14.9a.9.9 0 01-.9-.9zm-3.264 8.364a.9.9 0 010 1.272L7.073 18.2h2.025a.9.9 0 110 1.8H4.9a.9.9 0 01-.9-.9v-4.2a.9.9 0 011.8 0v2.027l3.664-3.663a.9.9 0 011.272 0z" fill="currentColor" /></symbol>';

if (_sprite.default) {
  var browserSymbol$1 = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol$1);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(fullscreen);

export default __pika_web_default_export_for_treeshaking__;
