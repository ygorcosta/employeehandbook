var pageComponent =
webpackJsonppageComponent([24],{

/***/ 284:
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

var _empresacidadaSoy = __webpack_require__(285);

var _empresacidadaSoy2 = _interopRequireDefault(_empresacidadaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bkgol = function (_Component) {
  _inherits(Bkgol, _Component);

  function Bkgol() {
    _classCallCheck(this, Bkgol);

    return _possibleConstructorReturn(this, (Bkgol.__proto__ || Object.getPrototypeOf(Bkgol)).apply(this, arguments));
  }

  return Bkgol;
}(_metalComponent2.default);

;

_metalSoy2.default.register(Bkgol, _empresacidadaSoy2.default);

exports.default = Bkgol;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Bkgol = undefined;

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

  // This file was automatically generated from empresacidada.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Bkgol.
   * @public
   */

  goog.module('Bkgol.incrementaldom');

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
    var param410 = function param410() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Benef\xEDcio');
      ie_close('h4');
      ie_open('h6');
      itext('Para os homens');
      ie_close('h6');
      ie_open('p');
      itext('Aumento da licen\xE7a paternidade de 5 dias para ');
      ie_open('b');
      itext('20 dias');
      ie_close('b');
      itext(', com remunera\xE7\xE3o integral.');
      ie_close('p');
      ie_open('h6');
      itext('Para as mulheres');
      ie_close('h6');
      ie_open('p');
      itext('Aumento da licen\xE7a maternidade de 4 meses para ');
      ie_open('b');
      itext('6 meses');
      ie_close('b');
      itext(' com remunera\xE7\xE3o total durante esse per\xEDodo.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Como solicitar');
      ie_close('h4');
      ie_open('p');
      itext('O colaborador precisa pedir a extens\xE3o da licen\xE7a para o Departamento Pessoal ');
      ie_open('b');
      itext('at\xE9 trinta dias ap\xF3s o nascimento do filho(a)');
      ie_close('b');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h4');
      itext('Mais informa\xE7\xF5es');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Sobre o ');
      ie_open('a', null, null, 'href', 'http://www.receita.fazenda.gov.br/pessoajuridica/empresacidada/default.htm');
      itext('programa Empresa Cidad\xE3');
      ie_close('a');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('Ainda tem d\xFAvidas? Entra em contato com a gente! :)');
      ie_close('p');
      ie_open('h6');
      ie_open('a', null, null, 'href', 'mailto:pd-br@liferay.com');
      itext('pd-br@liferay.com');
      ie_close('a');
      ie_close('h6');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param410 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Bkgol.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var Bkgol = function (_Component) {
  _inherits(Bkgol, _Component);

  function Bkgol() {
    _classCallCheck(this, Bkgol);

    return _possibleConstructorReturn(this, (Bkgol.__proto__ || Object.getPrototypeOf(Bkgol)).apply(this, arguments));
  }

  return Bkgol;
}(_metalComponent2.default);

_metalSoy2.default.register(Bkgol, templates);
exports.Bkgol = Bkgol;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[284]);