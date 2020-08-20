import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var key_square_outline = createCommonjsModule(function (module, exports) {

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
var id = 'key_square_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="key_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.784 3.988L25 17.59c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.034.553-2.03.764-3.988.784L16 25a1 1 0 01-.117-1.993L16 23h1.59l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.543 3.543 0 001.48-1.48c.364-.68.516-1.343.544-2.822L23 17.59v-7.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.543 3.543 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544L17.59 5h-7.18l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 10.41v1.593a1 1 0 01-1.993.117L3 12.003V10.41c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3c1.034-.553 2.03-.764 3.988-.784L17.59 3zM19 8a1 1 0 011 1v6a1 1 0 01-1 1h-1.501l.001 1.5a1 1 0 01-.883.993l-.117.007-2.594-.001.029.153c.029.186.048.373.058.563L14 19.5a5.5 5.5 0 11-4.53-5.415l.025.005 5.798-5.797a1 1 0 01.576-.284L16 8zm-1.001 2h-1.585l-5.9 5.9a1 1 0 01-.878.278l-.119-.028a3.5 3.5 0 102.12 1.795 1 1 0 01.895-1.445H15.5L15.5 15a1 1 0 01.883-.993L16.5 14h1.499v-4zM8 19a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(key_square_outline);

export default __pika_web_default_export_for_treeshaking__;
