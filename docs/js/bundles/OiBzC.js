var pageComponent =
webpackJsonppageComponent([12],{

/***/ 308:
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

var _segurovidaSoy = __webpack_require__(309);

var _segurovidaSoy2 = _interopRequireDefault(_segurovidaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OiBzC = function (_Component) {
  _inherits(OiBzC, _Component);

  function OiBzC() {
    _classCallCheck(this, OiBzC);

    return _possibleConstructorReturn(this, (OiBzC.__proto__ || Object.getPrototypeOf(OiBzC)).apply(this, arguments));
  }

  return OiBzC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(OiBzC, _segurovidaSoy2.default);

exports.default = OiBzC;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.OiBzC = undefined;

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

  // This file was automatically generated from segurovida.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace OiBzC.
   * @public
   */

  goog.module('OiBzC.incrementaldom');

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
    var param538 = function param538() {
      ie_open('h6');
      var dyn41 = opt_data.page.description;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      ie_open('b');
      itext('Seguradora');
      ie_close('b');
      itext(': Mapfre');
      ie_open('br');
      ie_close('br');
      ie_open('b');
      itext('Tipo');
      ie_close('b');
      itext(': Multiflex Empresarial');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Cobertura do Seguro');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      ie_open('b');
      itext('Morte');
      ie_close('b');
      itext(' - valor de R$ 21.460,00');
      ie_close('li');
      ie_open('li');
      ie_open('b');
      itext('Invalidez Funcional Permanente Total por Doen\xE7a (IFPD)');
      ie_close('b');
      itext(' - R$ 21.460,00');
      ie_close('li');
      ie_open('li');
      ie_open('b');
      itext('Invalidez Permanente Total ou Parcial por Acidente (IPA)');
      ie_close('b');
      itext(' - R$ 21.460,00');
      ie_close('li');
      ie_open('li');
      ie_open('b');
      itext('Cobertura de Funeral');
      ie_close('b');
      itext(' - at\xE9 R$2.000,00 (\xE9 a empresa que prepara o funeral, utilizando o limite desse valor).');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h4');
      itext('Dependentes');
      ie_close('h4');
      ie_open('p');
      itext('Os dependentes eleg\xEDveis a receber os valores s\xE3o os ');
      ie_open('b');
      itext('dependentes legais maiores de idade');
      ie_close('b');
      itext('.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('b');
      itext('Em caso de estado civil solteiro(a) e sem filhos');
      ie_close('b');
      itext(': o valor ser\xE1 recebido pelos pais;');
      ie_close('li');
      ie_open('li');
      ie_open('b');
      itext('Em caso de estado civil solteiro(a) com filhos');
      ie_close('b');
      itext(': se os filhos forem maior de idade, os mesmos recebem o valor. Caso n\xE3o sejam, o valor ir\xE1 para os pais do(a) titular falecido(a);');
      ie_close('li');
      ie_open('li');
      ie_open('b');
      itext('Em caso de estado civil casado(a)');
      ie_close('b');
      itext(': o valor ir\xE1 para c\xF4njuge;');
      ie_close('li');
      ie_close('ul');
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
    $templateAlias1(soy.$$assignDefaults({ content: param538 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'OiBzC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var OiBzC = function (_Component) {
  _inherits(OiBzC, _Component);

  function OiBzC() {
    _classCallCheck(this, OiBzC);

    return _possibleConstructorReturn(this, (OiBzC.__proto__ || Object.getPrototypeOf(OiBzC)).apply(this, arguments));
  }

  return OiBzC;
}(_metalComponent2.default);

_metalSoy2.default.register(OiBzC, templates);
exports.OiBzC = OiBzC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[308]);