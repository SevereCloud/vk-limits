import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var videocam_outline = createCommonjsModule(function (module, exports) {

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
var id = 'videocam_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="videocam_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M14.872 6c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.232.434.392.866.473 1.633l2.007-1.253A2.65 2.65 0 0126 10.673v6.654a2.65 2.65 0 01-4.054 2.247l-2.007-1.253c-.081.767-.241 1.199-.473 1.633a3.635 3.635 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 01-1.512-1.512C2.186 19.302 2 18.655 2 16.872v-5.744c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512C4.698 6.186 5.345 6 7.128 6h7.744zm.238 2H7.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.206.385-.288.764-.297 1.9L4 16.872c0 1.324.078 1.727.298 2.138.162.304.388.53.692.692.411.22.814.298 2.138.298h7.744c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692.22-.411.298-.814.298-2.138v-5.744c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 00-.692-.692c-.385-.206-.764-.288-1.9-.297zm7.896 2.122L20 12v4l3.006 1.878a.65.65 0 00.994-.55v-6.655a.65.65 0 00-.994-.551z" fill="currentColor" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(videocam_outline);

export default __pika_web_default_export_for_treeshaking__;
