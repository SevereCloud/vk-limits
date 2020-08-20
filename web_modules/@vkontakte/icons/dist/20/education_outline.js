import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var education_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);



var _sprite = _interopRequireDefault(sprite);

var _SvgIcon = _interopRequireDefault(SvgIcon_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 20 20';
var id = 'education_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="education_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M17.5 9.063l-1.5.822V13c0 2.8-2.717 5-6 5s-6-2.2-6-5V9.885L1.649 8.596a1.25 1.25 0 010-2.192l7.75-4.25a1.25 1.25 0 011.202 0l7.75 4.25c.424.232.66.674.649 1.125v5.221a.75.75 0 11-1.5 0V9.063zm-3 1.645l-3.899 2.138a1.25 1.25 0 01-1.202 0L5.5 10.708V13c0 1.894 1.984 3.5 4.5 3.5s4.5-1.606 4.5-3.5v-2.292zM10 3.535L2.77 7.5 10 11.465 17.23 7.5 10 3.535z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(education_outline);

export default __pika_web_default_export_for_treeshaking__;
