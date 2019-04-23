var pageComponent =
webpackJsonppageComponent([25],{

/***/ 282:
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

var _employeevolunteerSoy = __webpack_require__(283);

var _employeevolunteerSoy2 = _interopRequireDefault(_employeevolunteerSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NuwHh = function (_Component) {
  _inherits(NuwHh, _Component);

  function NuwHh() {
    _classCallCheck(this, NuwHh);

    return _possibleConstructorReturn(this, (NuwHh.__proto__ || Object.getPrototypeOf(NuwHh)).apply(this, arguments));
  }

  return NuwHh;
}(_metalComponent2.default);

;

_metalSoy2.default.register(NuwHh, _employeevolunteerSoy2.default);

exports.default = NuwHh;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.NuwHh = undefined;

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

  // This file was automatically generated from employeevolunteer.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace NuwHh.
   * @public
   */

  goog.module('NuwHh.incrementaldom');

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
    var param399 = function param399() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('Ap\xF3s seis meses de empresa, cada funcion\xE1rio CLT possui 40 horas anuais (n\xE3o acumulativas) para realizar trabalho volunt\xE1rio, e R$1000,00 anuais (n\xE3o acumulativos) para doar \xE0 institui\xE7\xF5es de caridade e organiza\xE7\xF5es sem fins lucrativos.');
      ie_close('p');
      ie_open('p');
      itext('Caso o colaborador n\xE3o tenha seis meses de empresa, ele ainda poder\xE1 participar do EVP utilizando suas pr\xF3prias horas.');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('*OBS 1:');
      ie_close('b');
      itext(' Para os colaboradores que tem carga hor\xE1ria igual a 6 horas, o tempo m\xEDnimo que devem ter de empresa para ser eleg\xEDvel \xE0s 40 horas anais \xE9 de 1 ano;');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('*OBS 2:');
      ie_close('b');
      itext(' Estagi\xE1rios n\xE3o s\xE3o eleg\xEDveis para o EVP, mas podem participar doando suas pr\xF3prias horas de trabalho.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Para doar horas');
      ie_close('h4');
      ie_open('p');
      itext('Primeiramente, deve-se alinhar com o gestor o dia e hora que pretende realizar a a\xE7\xE3o, e em seguida entrar no site do EVP \u2013 www.evp.liferay.com, clicar em \u201CMY EVP\u201D que fica no canto superior \xE0 direita, clicar na aba \u201CService\u201D e selecionar em \u201CFill out Service Request Form\u201D, e preencher o formul\xE1rio com informa\xE7\xF5es da organiza\xE7\xE3o (nome e descri\xE7\xE3o da organiza\xE7\xE3o, endere\xE7o, CNPJ, site da ONG, CEP, descri\xE7\xE3o da atividade que realizar\xE1, nome e telefone do respons\xE1vel da ONG). Ap\xF3s enviado, o colaborador receber\xE1 um e-mail informando se a solicita\xE7\xE3o foi aprovada ou n\xE3o.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h4');
      itext('Para doar os Grants');
      ie_close('h4');
      ie_open('p');
      itext('Deve-se entrar no site do EVP, ir em \u201CMY EVP\u201D e na aba \u201CGrant\u201D clicar em \u201CFill out Grant Request Form\u201D, onde ter\xE1 que colocar as informa\xE7\xF5es da ONG e a quantia que deseja doar. Posteriormente, o colaborador receber\xE1 no e-mail se a requisi\xE7\xE3o foi aprovada ou n\xE3o. Se aprovada, o EVP ir\xE1 transferir o dinheiro para a ONG e atualizar\xE1 o saldo restante do colaborador no site do EVP.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h4');
      itext('Mais informa\xE7\xF5es');
      ie_close('h4');
      ie_open('p');
      itext('Ainda tem d\xFAvidas? Entra em contato com a gente! :)');
      ie_close('p');
      ie_open('h6');
      ie_open('a', null, null, 'href', 'mailto:cleydyr.albuquerque@liferay.com');
      itext('cleydyr.albuquerque@liferay.com');
      ie_close('a');
      itext(' (Coordenador do EVP)');
      ie_close('h6');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param399 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'NuwHh.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var NuwHh = function (_Component) {
  _inherits(NuwHh, _Component);

  function NuwHh() {
    _classCallCheck(this, NuwHh);

    return _possibleConstructorReturn(this, (NuwHh.__proto__ || Object.getPrototypeOf(NuwHh)).apply(this, arguments));
  }

  return NuwHh;
}(_metalComponent2.default);

_metalSoy2.default.register(NuwHh, templates);
exports.NuwHh = NuwHh;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[282]);