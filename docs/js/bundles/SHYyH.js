var pageComponent =
webpackJsonppageComponent([32],{

/***/ 268:
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

var _auxiliocrecheSoy = __webpack_require__(269);

var _auxiliocrecheSoy2 = _interopRequireDefault(_auxiliocrecheSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHYyH = function (_Component) {
  _inherits(SHYyH, _Component);

  function SHYyH() {
    _classCallCheck(this, SHYyH);

    return _possibleConstructorReturn(this, (SHYyH.__proto__ || Object.getPrototypeOf(SHYyH)).apply(this, arguments));
  }

  return SHYyH;
}(_metalComponent2.default);

;

_metalSoy2.default.register(SHYyH, _auxiliocrecheSoy2.default);

exports.default = SHYyH;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SHYyH = undefined;

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

  // This file was automatically generated from auxiliocreche.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace SHYyH.
   * @public
   */

  goog.module('SHYyH.incrementaldom');

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
    var param322 = function param322() {
      ie_open('h6');
      var dyn23 = opt_data.page.description;
      if (typeof dyn23 == 'function') dyn23();else if (dyn23 != null) itext(dyn23);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Valor do reembolso');
      ie_close('h4');
      ie_open('p');
      itext('O valor que pode ser reembolsado mensalmente para cada filho \xE9 de R$600,00 (Seiscentos reais) e pode ser utilizado para despesas de creches ou escolas da sua escolha).');
      ie_close('p');
      ie_open('p');
      itext('O reembolso tamb\xE9m pode ser solicitado para despesas com empregada dom\xE9stica contratada para cuidar dos filhos(as) mediante comprova\xE7\xE3o de legalidade da empregabilidade.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Como solicitar');
      ie_close('h4');
      ie_open('p');
      itext('A certid\xE3o de nascimento deve ser apresentada ao Departamento Pessoal. Ap\xF3s isso, o pedido de reembolso dever\xE1 ser feito seguindo o fluxo padr\xE3o.');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('*OBS:');
      ie_close('b');
      itext(' no caso do reembolso de bab\xE1, deve-se acrescentar uma x\xE9rox da carteira de trabalho e extrato de pagamento ou contracheque');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h6');
      itext('O novo valor estabelecido pela Liferay Latam tem validade para pagamentos realizados a partir de Abril/2018. N\xE3o servindo para pagamentos retroativos a essa data.');
      ie_close('h6');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
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
    $templateAlias1(soy.$$assignDefaults({ content: param322 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SHYyH.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var SHYyH = function (_Component) {
  _inherits(SHYyH, _Component);

  function SHYyH() {
    _classCallCheck(this, SHYyH);

    return _possibleConstructorReturn(this, (SHYyH.__proto__ || Object.getPrototypeOf(SHYyH)).apply(this, arguments));
  }

  return SHYyH;
}(_metalComponent2.default);

_metalSoy2.default.register(SHYyH, templates);
exports.SHYyH = SHYyH;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);