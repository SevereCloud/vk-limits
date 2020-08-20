import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../../../../common/index-2cd4dd6b.js';
import { b as browserSymbol, s as sprite, S as SvgIcon_1, e as es6ObjectAssign } from '../../../../common/SvgIcon-981d2669.js';

var document_outline = createCommonjsModule(function (module, exports) {

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
var id = 'document_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="document_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.205 2.122c.406.093.772.245 1.124.466.356.222.63.456 1.192 1.02l4.872 4.87c.563.564.797.837 1.02 1.193.22.352.372.718.465 1.124.094.409.122.767.122 1.564v6.872c0 1.98-.185 2.94-.72 3.939a5.089 5.089 0 01-2.11 2.11c-.999.535-1.959.72-3.939.72H10.77c-1.98 0-2.94-.185-3.939-.72a5.089 5.089 0 01-2.11-2.11C4.184 22.17 4 21.21 4 19.23V8.066c0-1.285.232-2.324.72-3.236a5.089 5.089 0 012.11-2.11C7.742 2.231 8.781 2 10.066 2h3.575c.797 0 1.155.028 1.564.122zm-1.379 1.879L10.066 4c-.972 0-1.688.16-2.292.483a3.09 3.09 0 00-1.291 1.29C6.16 6.379 6 7.095 6 8.067v11.165c0 1.678.125 2.327.483 2.995.299.56.732.992 1.29 1.291.67.358 1.318.483 2.996.483h6.462c1.678 0 2.327-.125 2.995-.483a3.09 3.09 0 001.291-1.29c.358-.67.483-1.318.483-2.996V12.36c0-.137 0-.256-.002-.36L16.5 12A2.5 2.5 0 0114 9.5l.001-5.498-.175-.001zm2.281 1.02L16 4.915V9.5a.5.5 0 00.41.492l.09.008 4.587.002-.108-.11-4.872-4.87z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(document_outline);

export default __pika_web_default_export_for_treeshaking__;
