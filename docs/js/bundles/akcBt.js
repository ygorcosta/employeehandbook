var pageComponent =
webpackJsonppageComponent([13],{

/***/ 306:
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

var _programaintercambioSoy = __webpack_require__(307);

var _programaintercambioSoy2 = _interopRequireDefault(_programaintercambioSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var akcBt = function (_Component) {
  _inherits(akcBt, _Component);

  function akcBt() {
    _classCallCheck(this, akcBt);

    return _possibleConstructorReturn(this, (akcBt.__proto__ || Object.getPrototypeOf(akcBt)).apply(this, arguments));
  }

  return akcBt;
}(_metalComponent2.default);

;

_metalSoy2.default.register(akcBt, _programaintercambioSoy2.default);

exports.default = akcBt;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.akcBt = undefined;

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

  // This file was automatically generated from programaintercambio.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace akcBt.
   * @public
   */

  goog.module('akcBt.incrementaldom');

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
    var param527 = function param527() {
      ie_open('h6');
      var dyn40 = opt_data.page.description;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('Por ano, tr\xEAs (3) colaboradores ser\xE3o eleg\xEDveis ao benef\xEDcio para viajarem  para um de nossos escrit\xF3rios pelo per\xEDodo de 1 m\xEAs com passagem, comida, estadia e outras despesas paga pela Liferay.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Objetivos do Programa');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Promover uma melhor integra\xE7\xE3o entre os escrit\xF3rios da Liferay;');
      ie_close('li');
      ie_open('li');
      itext('Aprimorar a flu\xEAncia de uma l\xEDngua estrangeira;');
      ie_close('li');
      ie_open('li');
      itext('Desenvolvimento profissional;');
      ie_close('li');
      ie_open('li');
      itext('Treinamento;');
      ie_close('li');
      ie_open('li');
      itext('Prover a viv\xEAncia de uma experi\xEAncia internacional;');
      ie_close('li');
      ie_open('li');
      itext('Adquirir conhecimento t\xE9cnico;');
      ie_close('li');
      ie_open('li');
      itext('Disseminar aprendizado entre times;');
      ie_close('li');
      ie_open('li');
      itext('Ensinar ao time estrangeiro, boas pr\xE1ticas perfomadas pelo seu time Latam;');
      ie_close('li');
      ie_open('li');
      itext('Conhecer a cultura de outro pa\xEDs.');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Quem \xE9 eleg\xEDvel \xE0 se aplicar');
      ie_close('h4');
      ie_open('p');
      itext('Para se aplicar, \xE9 necess\xE1rio que voc\xEA tenha completado tr\xEAs (3) anos ou mais como CLT. Seu \xFAltimo performance quarter review deve ser +1 ou mais e voc\xEA deve ser fluente na linguagem do pa\xEDs desejado.');
      ie_close('p');
      ie_open('h4');
      itext('Crit\xE9rio de participa\xE7\xE3o');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Tenha certeza que voc\xEA pode se aplicar;');
      ie_close('li');
      ie_open('li');
      itext('Converse e pe\xE7a ao seu gestor para aprovar sua aplica\xE7\xE3o ao programa;');
      ie_close('li');
      ie_open('li');
      itext('Tenha consci\xEAncia que, submetendo-se ao programa, voc\xEA est\xE1 concordando com todos os crit\xE9rios;');
      ie_close('li');
      ie_open('li');
      itext('Aplique-se no per\xEDodo estabelecido.');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Como se aplicar');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Envie um e-mail ao RH (');
      ie_open('a', null, null, 'href', 'mailto:hr-br@liferay.com');
      itext('hr-br@liferay.com');
      ie_close('a');
      itext(') copiando seu gestor imediato e requisitando a aplica\xE7\xE3o no programa;');
      ie_close('li');
      ie_open('li');
      itext('Coloque 3 destinos que gostaria de ir e o m\xEAs de prefer\xEAncia para viajar;');
      ie_close('li');
      ie_open('li');
      itext('Submeta um documento com a proposta descrevendo o seguinte:');
      ie_open('ul');
      ie_open('li');
      itext('Regi\xE3o de interesse;');
      ie_close('li');
      ie_open('li');
      itext('Data da viagem;');
      ie_close('li');
      ie_open('li');
      itext('Objetivos de aprendizado;');
      ie_close('li');
      ie_open('li');
      itext('Plano de trabalho (validade pelo time e gestor);');
      ie_close('li');
      ie_open('li');
      itext('M\xE9todos de acompanhamento;');
      ie_close('li');
      ie_open('li');
      itext('M\xE9tricas e objetivos para avaliar resultados;');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Quando se aplicar');
      ie_close('h4');
      ie_open('p');
      itext('As solicita\xE7\xF5es devem ocorrer entre Setembro e Outubro.');
      ie_close('p');
      ie_open('h4');
      itext('Etapas de avalia\xE7\xE3o');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Primeira etapa | Elegibilidade');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('Voc\xEA bate com os crit\xE9rios descritos em "Crit\xE9rio de participa\xE7\xE3o"');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Segunda etapa | Avalia\xE7\xE3o objetiva e subjetiva feita pelo comit\xEA');
      ie_close('b');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Crit\xE9rios objetivos:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Tempo trabalhando na Liferay;');
      ie_close('li');
      ie_open('li');
      itext('\xDAltimos perfomance reviews;');
      ie_close('li');
      ie_open('li');
      itext('Se voc\xEA j\xE1 participou de outro programa de interc\xE2mbio por outra empresa.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Crit\xE9rios subjetivos:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Boa conduta e comportamento;');
      ie_close('li');
      ie_open('li');
      itext('Import\xE2ncia do projeto (\xE9 estrat\xE9gico para a empresa?);');
      ie_close('li');
      ie_open('li');
      itext('Aspectos de aprendizado.');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_open('b');
      itext('Terceira etapa | Apresenta\xE7\xE3o do projeto');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('Se voc\xEA passou nas \xFAltimas etapas, ser\xE1 convidado \xE0 apresentar seu projeto para o comit\xEA de avalia\xE7\xE3o. Nessa fase, voc\xEA precisar\xE1 explicar e convencer o comit\xEA porque o seu projeto \xE9 importante. ');
      ie_open('b');
      itext('Seja criativo e promova seu projeto!');
      ie_close('b');
      itext(' O comit\xEA far\xE1 algumas perguntas ao final de sua apresenta\xE7\xE3o. Voc\xEA ter\xE1 15 minutos para se apresentar.');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Quarta etapa | Avalia\xE7\xE3o e aprova\xE7\xE3o pelo gestor do escrit\xF3rio em quest\xE3o');
      ie_close('b');
      ie_close('p');
      ie_open('p');
      itext('O gestor dos escrit\xF3rios desejados ficar\xE3o cientes e aprovar\xE3o o per\xEDodo desejado.');
      ie_close('p');
      ie_open('h6');
      itext('*Todas as etapas s\xE3o eliminat\xF3rias');
      ie_close('h6');
      ie_open('h4');
      itext('Linha do tempo da avalia\xE7\xE3o');
      ie_close('h4');
      ie_open('p');
      itext('(colocar imagem aqui)');
      ie_close('p');
      ie_open('h4');
      itext('Comit\xEA avaliativo');
      ie_close('h4');
      ie_open('p');
      itext('O comit\xEA avaliativo ser\xE1 composto por Bruno Farache, Emanuel Di Matteo, Leyla Ferreira, Renato R\xEAgo e seu gestor. Membros do comit\xEA n\xE3o s\xE3o eleg\xEDveis para se aplicarem ao programa.');
      ie_close('p');
      ie_open('h4');
      itext('Dura\xE7\xE3o e escrit\xF3rios participantes');
      ie_close('h4');
      ie_open('p');
      itext('A dura\xE7\xE3o m\xEDnima \xE9 de 4 semanas, voc\xEA pode extender a viagem desde que seu gestor tenha aprovado. Todos os custos da expans\xE3o ser\xE3o pagos por voc\xEA.');
      ie_close('p');
      ie_open('p');
      itext('Todos os escrit\xF3rios participam do programa, mas voc\xEA s\xF3 poder\xE1 escolher ir para um que tenha uma equipe equivalente \xE0 sua equipe local. Por exemplo, algu\xE9m de engenharia s\xF3 poder\xE1 ir para escrti\xF3rios que tenham times de engenharia tamb\xE9m.');
      ie_close('p');
      ie_open('h4');
      itext('Custos');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('A Liferay pagar\xE1 as passagem e estadia durante o per\xEDodo do interc\xE2mbio, que ser\xE1 escolhido pela empresa;');
      ie_close('li');
      ie_open('li');
      itext('Despesas al\xE9m das descritas no item 1 dever\xE3o seguir o processo atual de reembolso;');
      ie_close('li');
      ie_open('li');
      itext('Qualquer outra despesa ser\xE1 paga pelo colaborador.');
      ie_close('li');
      ie_close('ul');
      ie_open('h6');
      itext('*O colaborador n\xE3o pode utilizar o benef\xEDcio de curso para realizar um curso da l\xEDngua estrangeira durante o per\xEDodo do interc\xE2mbio.');
      ie_close('h6');
      ie_open('h4');
      itext('Pagamento');
      ie_close('h4');
      ie_open('p');
      itext('O pragamento de despesas extras ser\xE1 feito de acordo com as regras atuais de reembolso que podem ser encontradas aqui (colocar link).');
      ie_close('p');
      ie_open('h4');
      itext('Aprova\xE7\xE3o da aplica\xE7\xE3o no programa');
      ie_close('h4');
      ie_open('p');
      itext('O RH ir\xE1 responder seu e-mail, como descrito no cronograma.');
      ie_close('p');
      ie_open('h4');
      itext('Valida\xE7\xE3o do pedido de aplica\xE7\xE3o');
      ie_close('h4');
      ie_open('p');
      itext('O pedido \xE9 v\xE1lido para o ano em que foi pedido.');
      ie_close('p');
      ie_open('h4');
      itext('Obriga\xE7\xE3o');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Quando retornar, o colaborador deve apresentar-se, reportando ao seu time local li\xE7\xF5es aprendidas;');
      ie_close('li');
      ie_open('li');
      itext('Respeitar as regras de conduta e procedimentos do escrit\xF3rio que visitou.');
      ie_close('li');
      ie_close('ul');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param527 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'akcBt.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var akcBt = function (_Component) {
  _inherits(akcBt, _Component);

  function akcBt() {
    _classCallCheck(this, akcBt);

    return _possibleConstructorReturn(this, (akcBt.__proto__ || Object.getPrototypeOf(akcBt)).apply(this, arguments));
  }

  return akcBt;
}(_metalComponent2.default);

_metalSoy2.default.register(akcBt, templates);
exports.akcBt = akcBt;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[306]);