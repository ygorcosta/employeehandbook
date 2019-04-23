var pageComponent =
webpackJsonppageComponent([22],{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _ginasticalaboralSoy = __webpack_require__(289);

var _ginasticalaboralSoy2 = _interopRequireDefault(_ginasticalaboralSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DMtuL = function (_Component) {
  _inherits(DMtuL, _Component);

  function DMtuL() {
    _classCallCheck(this, DMtuL);

    return _possibleConstructorReturn(this, (DMtuL.__proto__ || Object.getPrototypeOf(DMtuL)).apply(this, arguments));
  }

  return DMtuL;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DMtuL, _ginasticalaboralSoy2.default);

exports.default = DMtuL;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DMtuL = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ginasticalaboral.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace DMtuL.
   * @public
   */

  goog.module('DMtuL.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param432 = function param432() {
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Gin\xE1stica Laboral - ');
      ie_open('b');
      itext('Recife');
      ie_close('b');
      ie_close('h4');
      ie_open('p');
      itext('Semanalmente, acontecem duas aulas de gin\xE1stica laboral em nosso escrit\xF3rio (REC). Sempre nas segundas e quartas-feiras, aproximadamente \xE0s 16h.');
      ie_close('p');
      ie_open('h4');
      itext('Shiatsu');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Recife');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('Mensalmente, h\xE1 uma sess\xE3o de Shiatsu de 15min dispon\xEDvel para todos os colaboradores. Ela acontece geralmente na primeira ou segunda semana do m\xEAs e \xE9 feita na sala de descanso, no bloco C.');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('S\xE3o Paulo');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('Quinzenalmente, h\xE1 uma sess\xE3o de Shiatsu de 30min dispon\xEDvel para todos os colaboradores no escrit\xF3rio.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param432 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DMtuL.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DMtuL = function (_Component) {
  _inherits(DMtuL, _Component);

  function DMtuL() {
    _classCallCheck(this, DMtuL);

    return _possibleConstructorReturn(this, (DMtuL.__proto__ || Object.getPrototypeOf(DMtuL)).apply(this, arguments));
  }

  return DMtuL;
}(_metalComponent2.default);

_metalSoy2.default.register(DMtuL, templates);
exports.DMtuL = DMtuL;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);