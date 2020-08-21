import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var grid_square_outline = createCommonjsModule(function (module, exports) {

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
var id = 'grid_square_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="grid_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.41 3l7.516.002c1.958.02 2.954.231 3.988.784a5.543 5.543 0 012.3 2.3c.583 1.091.786 2.14.786 4.324l-.002 7.516c-.02 1.958-.231 2.954-.784 3.988a5.543 5.543 0 01-2.3 2.3c-1.091.583-2.14.786-4.324.786l-7.516-.002c-1.958-.02-2.954-.231-3.988-.784a5.543 5.543 0 01-2.3-2.3C3.203 20.823 3 19.774 3 17.59l.002-7.516c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 012.3-2.3C7.177 3.203 8.226 3 10.41 3zm7.18 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.365.68-.517 1.343-.545 2.822L5 10.41v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545l.558.005h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.365-.68.517-1.343.545-2.822L23 17.59v-7.18c0-1.881-.142-2.62-.55-3.38a3.543 3.543 0 00-1.48-1.48c-.68-.365-1.343-.517-2.822-.545L17.59 5zM12 17.5a1 1 0 01.117 1.993L12 19.5H9a1 1 0 01-.117-1.993L9 17.5h3zm7 0a1 1 0 01.117 1.993L19 19.5h-3a1 1 0 01-.117-1.993L16 17.5h3zM12 13a1 1 0 01.117 1.993L12 15H9a1 1 0 01-.117-1.993L9 13h3zm7 0a1 1 0 01.117 1.993L19 15h-3a1 1 0 01-.117-1.993L16 13h3zm0-4.5a1 1 0 01.117 1.993L19 10.5h-3a1 1 0 01-.117-1.993L16 8.5h3zm-7 0a1 1 0 01.117 1.993L12 10.5H9a1 1 0 01-.117-1.993L9 8.5h3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(grid_square_outline);

export default __pika_web_default_export_for_treeshaking__;
