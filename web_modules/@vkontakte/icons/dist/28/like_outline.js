import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var like_outline = createCommonjsModule(function (module, exports) {

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
var id = 'like_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="like_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9.026 4.88A6.526 6.526 0 002.5 11.406c0 3.613 1.445 5.421 7.493 10.126l2.78 2.16a2 2 0 002.455 0l2.779-2.16c6.048-4.705 7.493-6.513 7.493-10.126a6.526 6.526 0 00-6.526-6.526c-1.872 0-3.538.85-4.974 2.487C12.564 5.73 10.898 4.88 9.026 4.88zm0 2c1.52 0 2.889.858 4.152 2.683l.205.298a.75.75 0 001.234 0l.205-.298c1.263-1.825 2.633-2.683 4.152-2.683 2.5 0 4.526 2.027 4.526 4.526 0 2.78-1.137 4.204-6.721 8.547L14 22.114l-2.779-2.161C5.637 15.61 4.5 14.187 4.5 11.406c0-2.5 2.027-4.526 4.526-4.526z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(like_outline);

export default __pika_web_default_export_for_treeshaking__;
