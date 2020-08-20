import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var users_3_outline = createCommonjsModule(function (module, exports) {

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
var id = 'users_3_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_3_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 14.5c3.862 0 6.5 1.759 6.5 4.5 0 1.93-1.284 3-3 3h-7c-1.716 0-3-1.07-3-3 0-2.741 2.638-4.5 6.5-4.5zm8 0c2.746 0 4.5 1.657 4.5 3.75 0 1.692-1.293 2.75-2.75 2.75H23a1 1 0 010-2h.75c.431 0 .75-.26.75-.75 0-.962-.834-1.75-2.5-1.75a1 1 0 010-2zm-16 0a1 1 0 010 2c-1.666 0-2.5.788-2.5 1.75 0 .49.319.75.75.75H5a1 1 0 010 2h-.75c-1.457 0-2.75-1.058-2.75-2.75 0-2.093 1.754-3.75 4.5-3.75zm8 2c-2.888 0-4.5 1.075-4.5 2.5 0 .737.316 1 1 1h7c.684 0 1-.263 1-1 0-1.425-1.612-2.5-4.5-2.5zM20 6a3.5 3.5 0 010 7 1 1 0 010-2l.144-.007A1.5 1.5 0 0020 8l-.117-.007A1 1 0 0120 6zM8 6a1 1 0 01.117 1.993L8 8a1.5 1.5 0 00-.144 2.993L8 11a1 1 0 010 2 3.5 3.5 0 010-7zm6-1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(users_3_outline);

export default __pika_web_default_export_for_treeshaking__;
