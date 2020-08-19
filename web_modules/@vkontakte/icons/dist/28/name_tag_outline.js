import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var name_tag_outline = createCommonjsModule(function (module, exports) {

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
var id = 'name_tag_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="name_tag_outline_28"><g fill-rule="nonzero" fill="none"><path opacity=".527" d="M0 0h28v28H0z" /><path d="M10.41 5c1.333 0 1.333 2 0 2l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 12.41v5.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545l.558.005h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.365-.68.517-1.343.545-2.822L23 17.59v-5.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.543 3.543 0 00-1.48-1.48c-.68-.364-1.343-.516-2.822-.544L17.59 7l-.133-.007c-1.156-.124-1.156-1.862 0-1.986L17.59 5H18l.071.003.172.004c1.649.038 2.581.232 3.499.69l.172.089a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.784 3.988l.002.336v5.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.034.553-2.03.764-3.988.784L10.41 25c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 01-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988L3 12.41c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3c.976-.522 1.92-.74 3.67-.78l.172-.003L10 5h.41zM15 17a1 1 0 010 2H9a1 1 0 010-2h6zm4-5a1 1 0 010 2H9a1 1 0 010-2h10zm-5-9a1 1 0 011 1v4a1 1 0 01-2 0V4a1 1 0 011-1z" fill="currentColor" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(name_tag_outline);

export default __pika_web_default_export_for_treeshaking__;
