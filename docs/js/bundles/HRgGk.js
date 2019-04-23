var pageComponent =
webpackJsonppageComponent([27],{

/***/ 278:
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

var _clubededescontosSoy = __webpack_require__(279);

var _clubededescontosSoy2 = _interopRequireDefault(_clubededescontosSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HRgGk = function (_Component) {
  _inherits(HRgGk, _Component);

  function HRgGk() {
    _classCallCheck(this, HRgGk);

    return _possibleConstructorReturn(this, (HRgGk.__proto__ || Object.getPrototypeOf(HRgGk)).apply(this, arguments));
  }

  return HRgGk;
}(_metalComponent2.default);

;

_metalSoy2.default.register(HRgGk, _clubededescontosSoy2.default);

exports.default = HRgGk;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.HRgGk = undefined;

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

  // This file was automatically generated from clubededescontos.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace HRgGk.
   * @public
   */

  goog.module('HRgGk.incrementaldom');

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
    var param377 = function param377() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('p');
      ie_open('aticicle', null, null, 'id', '1');
      ie_close('p');
      ie_open('h4');
      itext('Restaurantes/lanchonetes');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Vaporetto \u2013 10% de desconto no almo\xE7o durante os dias de semana. Endere\xE7o: Rua Leopoldino Silva, 100 - Santana, Recife \u2013 PE.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Villa A\xE7a\xED \u2013 10% de desconto nos produtos. V\xE1lido somente para a unidade de Casa Forte. Endere\xE7o: Av. Dezessete de Agosto, 1387 \u2013 Casa Forte.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Del\xEDcias da Pra\xE7a Delicatessen \u2013 Valor de R$38,90 por kg de refei\xE7\xE3o no self-service (almo\xE7o). Endere\xE7o: Rua Jer\xF4nimo de Albuquerque, 279 \u2013 Casa Forte.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Cursos');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Minds English School \u2013 40% de desconto nas mensalidades em qualquer unidade. Endere\xE7os: Madalena: R. Real da Torre, 854 - Madalena, Recife - PE, 50710-100; Gra\xE7as: Rua Senador Alberto Paiva, 213 \u2013 Gra\xE7as. Boa Viagem: Rua Ernesto de Paula Santos, 340. Olinda: Rua Professor Jos\xE9 C\xE2ndido Pessoa, 849. Piedade: Rua Fel\xEDcio Barros de Medeiros Correia, 4444.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('FCAP \u2013 Faculdade de Ci\xEAncias e Administra\xE7\xE3o de Pernambuco - 10% de desconto nas mensalidades dos cursos de p\xF3s-gradua\xE7\xE3o/MBA.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Cursos dispon\xEDveis: Gest\xE3o de Neg\xF3cios, Planejamento e Gest\xE3o P\xFAblica, MBA em Gest\xE3o com Pessoas, MBA em Gest\xE3o de Custos e Controladoria, MBA em Marketing, MBA em Planejamento e Gest\xE3o Organizacional, MBA em Log\xEDstica Empresarial, Administra\xE7\xE3o Financeira, Gest\xE3o da Capacidade Humana nas Organiza\xE7\xF5es e Planejamento e Gest\xE3o Organizacional.');
      ie_close('p');
      ie_open('p');
      itext('Endere\xE7o: Av. Sport Clube do Recife, 252.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('FBV \u2013 10% de desconto nas mensalidades em cursos de gradua\xE7\xE3o, p\xF3s e MBA (cursos dispon\xEDveis em anexo). \u2013 para utilizar, o colaborador deve comparecer ao setor financeiro da FBV com a declara\xE7\xE3o de v\xEDnculo, informando que a Liferay possui parceria com a FBV e por isso seus funcion\xE1rios tem uma Bolsa Corpore.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Rua Jean Emile Favre, 422 \u2013 Ipsep.');
      ie_close('p');
      ie_open('p');
      itext('Fone: (81) 3081-4444.');
      ie_close('p');
      ie_open('p');
      itext('Obs.: Para mais informa\xE7\xF5es sobre cursos dispon\xEDveis, ver a p\xE1gina 9 (anexos)');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('FIAP - 15% em cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o, e 20% de desconto na matr\xEDcula.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Av. Lins de Vasconcelos, 1222 \u2013 S\xE3o Paulo.');
      ie_close('p');
      ie_open('p');
      itext('Tel: (11) 3385 \u2013 8010.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('FAFIRE \u2013 descontos de:');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('15% no valor das mensalidades para cursos de Gradua\xE7\xE3o;');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('10% para cursos de p\xF3s-gradua\xE7\xE3o;');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('7% para cursos tecn\xF3logos;');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('10% para cursos de l\xEDnguas.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Cursos dispon\xEDveis:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Gradua\xE7\xE3o: Administra\xE7\xE3o, pedagogia, ci\xEAncias biol\xF3gicas, letras, turismo, psicologia, turismo e ci\xEAncias cont\xE1beis.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('P\xF3s-gradua\xE7\xE3o: Gest\xE3o empresarial, biologia, educa\xE7\xE3o, letras, tecnologia da informa\xE7\xE3o, direito, turismo e psicologia.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Tecn\xF3logos: Gest\xE3o comercial, gest\xE3o financeira, log\xEDstica, gest\xE3o em recursos humanos e processos escolares.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Curso de L\xEDnguas: Ingl\xEAs, franc\xEAs, espanhol, alem\xE3o, italiano, libras e curso de treinamento para professores de ingl\xEAs.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Av. Conde da Boa Vista, 921 \u2013 Boa Vista');
      ie_close('p');
      ie_open('p');
      itext('Fone: 81 2122-3500');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('CEDEPE Business School \u2013 descontos de:');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('14,4% nas parcelas de quem optar pelo parcelamento do curso em 21 (vinte e uma) parcelas;');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('23,9% nas parcelas de quem optar pelo pagamento \xE0 vista;');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Desconto pra todos os cursos de p\xF3s-gradua\xE7\xE3o oferecidos pela institui\xE7\xE3o.');
      ie_close('p');
      ie_open('p');
      itext('Para aderir ao desconto, o colaborador deve apresentar no momento da matr\xEDcula, a declara\xE7\xE3o ou contracheque que comprove o seu v\xEDnculo com a Liferay.');
      ie_close('p');
      ie_open('p');
      itext('Cursos dispon\xEDveis: Gest\xE3o Empresarial; Gest\xE3o de Marketing & Vendas, Gest\xE3o de pessoas e Lideran\xE7a; Gerenciamento de Projetos; Log\xEDstica e Supply Chain Management; Gest\xE3o Financeira, Cont\xE1bil e Controladoria; Gest\xE3o de neg\xF3cios Internacionais e Com\xE9rcio Exterior; Gest\xE3o de Neg\xF3cios Fitness (FIT) e Economia Internacional.');
      ie_close('p');
      ie_open('p');
      itext('Endere\xE7o: Av. Rep\xFAblica do L\xEDbano, 251. Torre B, 20\xBA andar - Pina Fone: 81 3468-4411');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Faculdade CESAR \u2013 descontos de:');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('20% no valor das mensalidades para cursos de p\xF3s-gradua\xE7\xE3o e mestrados profissionais;');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Para aderir ao desconto, o colaborador deve apresentar no momento da matr\xEDcula, a declara\xE7\xE3o ou contracheque que comprove o seu v\xEDnculo com a Liferay.');
      ie_close('p');
      ie_open('p');
      itext('Cursos dispon\xEDveis:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('P\xF3s-gradua\xE7\xE3o: Gest\xE3o \xC1gil de Projetos; Seguran\xE7a da Informa\xE7\xE3o em Engenharia de Software; Tecnologia, Inova\xE7\xE3o e Intelig\xEAncia; Design de Intera\xE7\xE3o para Artefatos Digitais; Internert of Things, Desenvolvimento de Aplica\xE7\xF5es M\xF3veis.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Mestrados: Mestrado profissional em Design; Mestrado profissional em Engenharia de Software.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Rua do Brum, 77 - Bairro do Recife');
      ie_close('p');
      ie_open('p');
      itext('Fone: 81 3419-6700');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Faculdade Nova Roma - FGV \u2013 descontos nos cursos:');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      itext('MBA Executivo');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('P\xF3s-Gradua\xE7\xE3o em Administra\xE7\xE3o de Empresas');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Cursos de curta dura\xE7\xE3o (CADEMP)');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Gradua\xE7\xE3o');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      itext('P\xF3s-MBA');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Para aderir ao desconto, o colaborador deve apresentar no momento da matr\xEDcula, a declara\xE7\xE3o ou contracheque que comprove o seu v\xEDnculo com a Liferay.');
      ie_close('p');
      ie_open('p');
      itext('v Sa\xFAde e beleza');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Odontoclinic \u2013 10% de desconto na limpeza e restaura\xE7\xF5es, 5% de desconto em tratamentos ortod\xF4nticos, 5% de desconto em procedimentos de pr\xF3tese, 5% de desconto em procedimentos de implante e 10% de desconto no clareamento de consult\xF3rio.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Obs.: Para obter o desconto, \xE9 preciso buscar a carteirinha de conv\xEAnio no RH e apresentar ao estabelecimento juntamente com um documento com foto. Quanto aos dependentes, \xE9 necess\xE1rio ir at\xE9 a cl\xEDnica para realizar o registro dos mesmos.');
      ie_close('p');
      ie_open('p');
      itext('Endere\xE7o: Avenida Conde da Boa Vista, 1425 \u2013 Boa Vista');
      ie_close('p');
      ie_open('p');
      itext('Fone: 3072-5848.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Top Fit \u2013 13% de desconto nos planos anuais ou semestrais para os colaboradores e c\xF4njuges nas unidades Pina, Casa Forte, Boa Viagem, Madalena, Set\xFAbal e Caxang\xE1.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Unidade Casa Forte: Pra\xE7a de Casa Forte, n\xBA 635\xAA;');
      ie_close('p');
      ie_open('p');
      itext('Unidade Boa Viagem: Rua Ant\xF4nio de S\xE1 Leit\xE3o, n\xBA 254;');
      ie_close('p');
      ie_open('p');
      itext('Unidade Madalena: Rua Costa Gomes, n\xBA 39;');
      ie_close('p');
      ie_open('p');
      itext('Unidade Set\xFAbal: Rua Major Armando de Souza Melo, n\xBA 220;');
      ie_close('p');
      ie_open('p');
      itext('Unidade Pina: Avenida Herculano Bandeira n\xBA 77;');
      ie_close('p');
      ie_open('p');
      itext('Unidade Caxang\xE1: Rua Caxang\xE1 \xC1gape, 4595.');
      ie_close('p');
      ie_open('p');
      itext('Site: www.academiatopfit.com');
      ie_close('p');
      ie_open('p');
      itext('Obs.: para mais informa\xE7\xF5es sobre os pre\xE7os e os planos, ver os anexos (p\xE1gina 10).');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Unihol\xEDstico \u2013 Espa\xE7o de Sa\xFAde e Bem-Estar \u2013 16,67% de desconto sobre o pre\xE7o da consulta, sendo uma consulta avulsa (com desconto) R$150,00, ou um pacote de tr\xEAs consultas por R$300,00.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Avenida Montevideu, n\xFAmero 172, Empresarial Desembargador Pedro Martiniano Lins, Sala 604 \u2013 Boa Vista \u2013 Recife.');
      ie_close('p');
      ie_open('p');
      itext('Fone: (81) 996987246 (WhatsApp) / 3128-1630.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Sal\xE3o La Beaut\xE9 Paris \u2013 15% de desconto nos servi\xE7os (de segunda \xE0 quinta)');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Pra\xE7a de Casa Forte, 583.');
      ie_close('p');
      ie_open('p');
      itext('Fone: (81) 3104-0583.');
      ie_close('p');
      ie_open('p');
      itext('Facebook: La Beaut\xE9 Paris');
      ie_close('p');
      ie_open('p');
      itext('Hor\xE1rio de funcionamento: Segunda a Quarta das 9:00 \xE0s 19:00 e Quinta a S\xE1bado das 9:00 \xE0s 20:00.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Petit Salon \u2013 10% de desconto nos servi\xE7os apenas de ter\xE7a \xE0 quinta.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Rua da Hora, n\xBA 534, Loja 02, Espinheiro.');
      ie_close('p');
      ie_open('p');
      itext('Hor\xE1rio de funcionamento: ter\xE7a \xE0 quinta das 9h \xE0s 19h; sexta e s\xE1bado das 9h \xE0s 20h.');
      ie_close('p');
      ie_open('p');
      itext('Tel: (81) 3032-2521.');
      ie_close('p');
      ie_open('p');
      itext('Facebook: Petit Salon');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Sal\xE3o L\xB4arm\xE9e (Unissex) \u2013 15% de desconto nos servi\xE7os.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Obs.: Em caso de promo\xE7\xF5es, h\xE1 desconto de apenas 5% nos servi\xE7os.');
      ie_close('p');
      ie_open('p');
      itext('Endere\xE7o: Rua professor Andrade Bezerra, 192 \u2013 Parnamirim.');
      ie_close('p');
      ie_open('p');
      itext('Hor\xE1rio de funcionamento: das 8:00 \xE0s 19:00.');
      ie_close('p');
      ie_open('p');
      itext('Tel: (81) 3037-6205.');
      ie_close('p');
      ie_open('p');
      itext('Facebook: Sal\xE3o L\xB4arm\xE9e.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('L\xE9o Cabelereiro (Unissex) \u2013 15% de desconto sobre os servi\xE7os. Endere\xE7o: Rua Jac\xF3 Velosino, 71 \u2013 Casa Forte.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Tel: 81 \u2013 3441-0797');
      ie_close('p');
      ie_open('p');
      itext('Obs.: informa\xE7\xF5es sobre pre\xE7os e servi\xE7os oferecidos, ver a p\xE1gina 9 (anexos).');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Movimento Studio Pilates \u2013 15% de desconto nas aulas.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Pra\xE7a de Casa Forte, 381, 5\xBA andar, sala 504.');
      ie_close('p');
      ie_open('p');
      itext('Fone: (81) 3074 \u2013 3440.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Fit Cookies \u2013 20% de desconto nos produtos oferecidos.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Endere\xE7o: Avenida Domingos Ferreira, 209 | Loja 03 \u2013 Boa Viagem | Recife/PE');
      ie_close('p');
      ie_open('p');
      itext('Fone: (81) 3031-0092.');
      ie_close('p');
      ie_open('p');
      itext('Site: www.fitcookies.com.br');
      ie_close('p');
      ie_open('p');
      itext('Obs.: Para ganhar os descontos \xE9 s\xF3 passar no RH, pegar a declara\xE7\xE3o de que trabalha na Liferay e apresentar na 1\xAA vez que comparecer ao estabelecimento.');
      ie_close('p');
      ie_open('p');
      itext('Anexos');
      ie_close('p');
      ie_open('p');
      itext('Top Fit: valores com o desconto');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Unidade Pina \u2013 Plano anual: 1 + 11: R$169,00 / Plano semestral: 1 + 5:');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('R$190,00.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Unidade Casa Forte \u2013 Plano anual: 1 + 11: 190 / Plano semestral: 1 + 5:');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('R$209,00.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Unidades Boa Viagem / Madalena / Set\xFAbal \u2013 Plano anual: 1 + 11: R$135,00 / Plano semestral: 1 + 5: R$152,00.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Unidade Caxang\xE1 \u2013 Plano anual: 1 + 11: R$121,00 / Plano semestral: 1 + 5:');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('R$138,00.');
      ie_close('p');
      ie_open('p');
      itext('Obs.:');
      ie_close('p');
      ie_open('p');
      itext('O plano d\xE1 direito a treinar em hor\xE1rio livre de domingo a domingo');
      ie_close('p');
      ie_open('p');
      itext('(unidades abertas aos domingos: Pina e Casa Forte);');
      ie_close('p');
      ie_open('p');
      itext('O plano inclui todas as aulas de gin\xE1stica, incluindo o Muay Thai e grupos de corrida;');
      ie_close('p');
      ie_open('p');
      itext('Nos planos semestral e anual, o aluno pode "trancar" sua matr\xEDcula por 30 e 60 dias respectivamente, sendo acrescido ao t\xE9rmino do plano (Os pagamentos continuam sendo compensados normalmente);');
      ie_close('p');
      ie_open('p');
      itext('Alunos Matriculados em quaisquer dos dois planos, tem acesso liberado em toda nossa rede de academias: Boa Viagem, Set\xFAbal,');
      ie_close('p');
      ie_open('p');
      itext('Madalena e Caxang\xE1* e na unidade Casa Forte e Pina (apenas aos domingos);');
      ie_close('p');
      ie_open('p');
      itext('*Alunos matriculados na unidade Caxang\xE1 s\xF3 podem treinar aos domingos;');
      ie_close('p');
      ie_open('p');
      itext('FBV: cursos dispon\xEDveis');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Gradua\xE7\xE3o Bacharelado: Administra\xE7\xE3o, an\xE1lise e desenvolvimento de sistemas, sistemas de informa\xE7\xE3o, arquitetura e urbanismo, biomedicina, ci\xEAncia da computa\xE7\xE3o, ci\xEAncias cont\xE1beis, design, direito, economia, educa\xE7\xE3o f\xEDsica, engenharia ambiental e sanit\xE1ria, engenharia civil, engenharia ambiental e sanit\xE1ria, engenharia civil, engenharia de alimentos, engenharia de alimentos, engenharia de controle e automa\xE7\xE3o, engenharia de petr\xF3leo, engenharia de produ\xE7\xE3o, engenharia el\xE9trica, engenharia mec\xE2nica, engenharia qu\xEDmica, farm\xE1cia, fisioterapia, hotelaria com \xEAnfase em gastronomia, jornalismo, nutri\xE7\xE3o, psicologia, publicidade e propaganda.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Gradua\xE7\xE3o Tecnol\xF3gico: An\xE1lise e desenvolvimento de sistemas, gest\xE3o de TI, gest\xE3o comercial, design gr\xE1fico, gest\xE3o financeira, gest\xE3o de RH, design de moda, design de interiores, gastronomia, log\xEDstica, gest\xE3o hospitalar.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Odontoclinic: valores aproximados (sem desconto)');
      ie_close('p');
      ie_open('p');
      itext('Profilaxia (limpeza com ultrassom) - R$120,00');
      ie_close('p');
      ie_open('p');
      itext('Restaura\xE7\xE3o em resina - R$100,00');
      ie_close('p');
      ie_open('p');
      itext('Tratamentos Ortod\xF4nticos - podem variar de R$2.600,00 \xE0 6.246,00, a depender do aparelho que o cliente necessitar.');
      ie_close('p');
      ie_open('p');
      itext('o   Trabalhamos com o pre\xE7o fechado do tratamento completo');
      ie_close('p');
      ie_open('p');
      itext('(aparelho + manuten\xE7\xF5es)');
      ie_close('p');
      ie_open('p');
      itext('o   O pagamento do tratamento \xE9 realizada da seguinte forma: entrada + 35x (convencional) ou 30x (autoligado e convencional Everest) ou 24x (autoligado Everest)');
      ie_close('p');
      ie_open('p');
      itext('o   O Everest \xE9 um produto exclusivo da rede Odontoclinic que garante maior precis\xE3o, mais conforto e rapidez no tratamento.');
      ie_close('p');
      ie_open('p');
      itext('Endodontia (canal) - R$350,00 \xE0 R$650,00');
      ie_close('p');
      ie_open('p');
      itext('Pr\xF3tese');
      ie_close('p');
      ie_open('p');
      itext('o   Existem diversos procedimentos prot\xE9ticos, o que dificulta passar os pre\xE7os atrav\xE9s de email');
      ie_close('p');
      ie_open('p');
      itext('Implante');
      ie_close('p');
      ie_open('p');
      itext('o   Pino de tit\xE2nio - R$1.000,00');
      ie_close('p');
      ie_open('p');
      itext('o   Coroa sobre implante - R$1.100,00');
      ie_close('p');
      ie_open('p');
      itext('o   Mas assim como procedimento de pr\xF3tese, existe muitos outros procedimentos de implantes, o que tamb\xE9m dificulta passar os pre\xE7os atrav\xE9s de email');
      ie_close('p');
      ie_open('p');
      itext('Clareamento');
      ie_close('p');
      ie_open('p');
      itext('o   Consult\xF3rio - R$300,00 (sess\xE3o avulsa) ou R$800,00 (3 sess\xF5es)');
      ie_close('p');
      ie_open('p');
      itext('o   Caseiro - R$400,00');
      ie_close('p');
      ie_open('p');
      itext('Leo Cabelereiro: valores (sem desconto)');
      ie_close('p');
      ie_open('p');
      itext('Corte com escova feminino: R$ 80,00');
      ie_close('p');
      ie_open('p');
      itext('Corte masculino: R$ 50,00');
      ie_close('p');
      ie_open('p');
      itext('Escova a partir de R$ 40,00');
      ie_close('p');
      ie_open('p');
      itext('P\xE9 e m\xE3o: R$ 40,00');
      ie_close('p');
      ie_open('p');
      itext('Balaiagem a partir de R$ 180,00');
      ie_close('p');
      ie_open('p');
      itext('Cauteriza\xE7\xE3o a partir de R$ 60,00');
      ie_close('p');
      ie_open('p');
      itext('Esfolia\xE7\xE3o capilar masculina: R$ 30,00');
      ie_close('p');
      ie_open('p');
      itext('Lavagem especial: R$ 25,00');
      ie_close('p');
      ie_open('p');
      itext('Esmalta\xE7\xE3o: R$ 10,00');
      ie_close('p');
      ie_open('p');
      itext('Redu\xE7\xE3o de volume: R$ 250,00');
      ie_close('p');
      ie_open('p');
      itext('Matiza\xE7\xE3o a partir de R$ 100,00');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param377 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'HRgGk.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var HRgGk = function (_Component) {
  _inherits(HRgGk, _Component);

  function HRgGk() {
    _classCallCheck(this, HRgGk);

    return _possibleConstructorReturn(this, (HRgGk.__proto__ || Object.getPrototypeOf(HRgGk)).apply(this, arguments));
  }

  return HRgGk;
}(_metalComponent2.default);

_metalSoy2.default.register(HRgGk, templates);
exports.HRgGk = HRgGk;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);