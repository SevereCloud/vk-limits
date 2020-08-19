import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var user_outline = createCommonjsModule(function (module, exports) {

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
var id = 'user_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.5 8.5C17.5 6.566 15.934 5 14 5a3.499 3.499 0 00-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5zm2 0c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 01-5.5-5.5C8.5 5.461 10.961 3 14 3s5.5 2.461 5.5 5.5zM7 20.643c0 .943-.08.857.456.857h13.588c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643S7 18.355 7 20.643zm-2 0C5 16.763 9.299 15 14.25 15s9.25 1.763 9.25 5.643c0 2.016-.781 2.857-2.456 2.857H7.456C5.78 23.5 5 22.66 5 20.643z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(user_outline);

export default __pika_web_default_export_for_treeshaking__;
