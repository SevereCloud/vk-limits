import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var moon_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);



var _sprite = _interopRequireDefault(sprite);

var _SvgIcon = _interopRequireDefault(SvgIcon_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 28 28';
var id = 'moon_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="moon_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M24.166 15.685a1 1 0 011.277 1.275c-.569 1.614-1.445 3.046-2.632 4.229-4.418 4.418-11.58 4.417-15.997 0-4.419-4.417-4.419-11.58 0-15.998C8 4.006 9.431 3.129 11.042 2.559a1 1 0 011.276 1.277c-1.194 3.372-.394 7.133 2.16 9.69 2.554 2.553 6.317 3.353 9.688 2.16zm-11.102-.746a11.25 11.25 0 01-3.163-9.643c-.61.37-1.17.806-1.673 1.309-3.637 3.637-3.637 9.534 0 13.17a9.311 9.311 0 0013.17-.002 8.75 8.75 0 001.31-1.671 11.247 11.247 0 01-9.644-3.163z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(moon_outline);

export default __pika_web_default_export_for_treeshaking__;
