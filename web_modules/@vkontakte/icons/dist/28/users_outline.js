import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var users_outline = createCommonjsModule(function (module, exports) {

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
var id = 'users_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9 15c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H3.647c-1.458 0-2.147-.797-2.147-2.571C1.5 16.542 5.003 15 9 15zm10.5 0c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H19a1 1 0 010-2h5.913a.83.83 0 01.042.002l.013.001.002-.015c.01-.081.024-.22.029-.427l.001-.132C25 18.095 22.513 17 19.5 17c-.428 0-.898.03-1.37.09a1 1 0 11-.256-1.983A12.87 12.87 0 0119.5 15zM9 17c-3.013 0-5.5 1.095-5.5 2.929 0 .28.017.462.03.56l.001.014.014-.001.019-.001h10.891l.013.002.002-.015c.013-.097.03-.28.03-.56C14.5 18.096 12.013 17 9 17zM19.5 5a4.25 4.25 0 014.25 4.25 4.25 4.25 0 01-4.25 4.25 4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 0119.5 5zM9 5a4.25 4.25 0 014.25 4.25A4.25 4.25 0 019 13.5a4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 019 5zm10.5 2a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5zM9 7a2.25 2.25 0 100 4.5A2.25 2.25 0 109 7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(users_outline);

export default __pika_web_default_export_for_treeshaking__;
