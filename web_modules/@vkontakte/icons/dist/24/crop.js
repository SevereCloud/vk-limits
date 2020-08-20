import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var crop = createCommonjsModule(function (module, exports) {

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
var id = 'crop_24';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="crop_24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.1a.9.9 0 01.9.9v12A1.1 1.1 0 009 16.1h12a.9.9 0 110 1.8H9A2.9 2.9 0 016.1 15V3a.9.9 0 01.9-.9z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 7a.9.9 0 01.9-.9H15A2.9 2.9 0 0117.9 9v12a.9.9 0 11-1.8 0V9A1.1 1.1 0 0015 7.9h-4.5a.9.9 0 01-.9-.9zM2.1 7a.9.9 0 01.9-.9h3.5a.9.9 0 010 1.8H3a.9.9 0 01-.9-.9z" fill="currentColor" /></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(crop);

export default __pika_web_default_export_for_treeshaking__;
