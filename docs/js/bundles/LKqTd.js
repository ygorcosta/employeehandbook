var pageComponent =
webpackJsonppageComponent([14],{

/***/ 304:
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

var _programadeindicacaoSoy = __webpack_require__(305);

var _programadeindicacaoSoy2 = _interopRequireDefault(_programadeindicacaoSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LKqTd = function (_Component) {
  _inherits(LKqTd, _Component);

  function LKqTd() {
    _classCallCheck(this, LKqTd);

    return _possibleConstructorReturn(this, (LKqTd.__proto__ || Object.getPrototypeOf(LKqTd)).apply(this, arguments));
  }

  return LKqTd;
}(_metalComponent2.default);

;

_metalSoy2.default.register(LKqTd, _programadeindicacaoSoy2.default);

exports.default = LKqTd;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.LKqTd = undefined;

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

  // This file was automatically generated from programadeindicacao.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace LKqTd.
   * @public
   */

  goog.module('LKqTd.incrementaldom');

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
    var param516 = function param516() {
      ie_open('h4');
      var dyn39 = opt_data.page.description;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h4');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      itext('Voc\xEA pode indicar colegas de classe, amigos, ou algu\xE9m que voc\xEA j\xE1 trabalhou.');
      ie_close('p');
      ie_open('h4');
      itext('Como funciona?');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Para indicar, voc\xEA precisa trabalhar na Liferay por, pelo menos, 6 meses;');
      ie_close('li');
      ie_open('li');
      itext('Conhe\xE7a algu\xE9m que voc\xEA ache que compartilhe nossos valores e que tenha habilidades t\xE9cnicas esperadas para a posi\xE7\xE3o;');
      ie_close('li');
      ie_open('li');
      itext('Indique atrav\xE9s do Jobvite');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Certo! E a\xED?');
      ie_close('h4');
      ie_open('p');
      itext('Se sua indica\xE7\xE3o for aprovada durante o processo seletivo e ele(a)  permanecer trabalhando na Liferay durante 6 meses, voc\xEA receber\xE1 R$500,00 (quinhentos reais).');
      ie_close('p');
      ie_open('h4');
      itext('Quem pode participar?');
      ie_close('h4');
      ie_open('p');
      itext('Todos os colaboradores ');
      ie_open('b');
      itext('exceto');
      ie_close('b');
      itext(': estagi\xE1rios, coordenadores, gestores e diretores.');
      ie_close('p');
      ie_open('h4');
      itext('Mais informa\xE7\xF5es');
      ie_close('h4');
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
    $templateAlias1(soy.$$assignDefaults({ content: param516 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'LKqTd.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var LKqTd = function (_Component) {
  _inherits(LKqTd, _Component);

  function LKqTd() {
    _classCallCheck(this, LKqTd);

    return _possibleConstructorReturn(this, (LKqTd.__proto__ || Object.getPrototypeOf(LKqTd)).apply(this, arguments));
  }

  return LKqTd;
}(_metalComponent2.default);

_metalSoy2.default.register(LKqTd, templates);
exports.LKqTd = LKqTd;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[304]);