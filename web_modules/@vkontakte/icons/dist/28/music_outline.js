import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var music_outline = createCommonjsModule(function (module, exports) {

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
var id = 'music_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="music_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M11 16.93v2.464c0 4.687-4.583 7.1-7.073 4.61-2.49-2.491-.078-7.074 4.61-7.074H11zm-2 2h-.463c-3.014 0-4.339 2.516-3.196 3.659C6.484 23.732 9 22.408 9 19.394v-.464zM19.388 3.523A3 3 0 0123 6.46v10.434c0 4.687-4.583 7.1-7.073 4.61-2.49-2.491-.078-7.074 4.61-7.074h.462V9.729l-10 2.083L11 18H9V8.917c0-.943.079-1.43.313-1.954.222-.496.56-.911 1-1.23.465-.336.926-.513 1.849-.705zM21 16.43h-.463c-3.014 0-4.339 2.516-3.196 3.659C18.484 21.232 21 19.908 21 16.894v-.464zm-.021-10.174a1 1 0 00-1.183-.775L12.57 6.986c-.67.14-.88.22-1.085.368-.156.112-.268.25-.346.426-.103.23-.139.451-.139 1.137v.853l10-2.083V6.46a1 1 0 00-.005-.103z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(music_outline);

export default __pika_web_default_export_for_treeshaking__;
