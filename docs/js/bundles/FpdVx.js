var pageComponent =
webpackJsonppageComponent([18],{

/***/ 296:
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

var _horasextrasSoy = __webpack_require__(297);

var _horasextrasSoy2 = _interopRequireDefault(_horasextrasSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FpdVx = function (_Component) {
  _inherits(FpdVx, _Component);

  function FpdVx() {
    _classCallCheck(this, FpdVx);

    return _possibleConstructorReturn(this, (FpdVx.__proto__ || Object.getPrototypeOf(FpdVx)).apply(this, arguments));
  }

  return FpdVx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(FpdVx, _horasextrasSoy2.default);

exports.default = FpdVx;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.FpdVx = undefined;

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

  // This file was automatically generated from horasextras.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace FpdVx.
   * @public
   */

  goog.module('FpdVx.incrementaldom');

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
    var param474 = function param474() {
      ie_open('h4');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h4');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      itext('Para que as horas extraordin\xE1rias sejam computadas ao banco de horas ou sejam  pagas em folha, ser\xE1 necess\xE1rio que o(a) colaborador(a) informe com 01 (uma) semana de anteced\xEAncia ao DP por email, tendo nesse mesmo email a aprova\xE7\xE3o do gestor da \xE1rea solicitante.');
      ie_close('p');
      ie_open('h4');
      itext('Atente-se!');
      ie_close('h4');
      ie_open('p');
      itext('Por horas extraordin\xE1rias entende-se: extras (acima das 8h), noturnas (das 22h \xE0s 5h), feriados e finais de semana. As horas extras realizadas de segunda \xE0 sexta poder\xE3o acontecer esporadicamente, contanto que sejam devidamente compensadas ao final dos fechamentos de banco de horas. Que ocorrem sempre em ');
      ie_open('b');
      itext('Junho e Dezembro');
      ie_close('b');
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('Solicita\xE7\xE3o das horas extraordin\xE1rias');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('Alinhar com o l\xEDder a necessidade de realizar;');
      ie_close('li');
      ie_open('li');
      itext('Enviar um email para o gestor informando a data e hor\xE1rio das horas que ser\xE3o feitas;');
      ie_close('li');
      ie_open('li');
      itext('Autoriza\xE7\xE3o do gestor como resposta da solicita\xE7\xE3o do(a) colaborador(a);');
      ie_close('li');
      ie_open('li');
      itext('Encaminhar o email trocado com a autoriza\xE7\xE3o do gestor para o DP, dando ci\xEAncia do fato.');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Lembre-se!');
      ie_close('h4');
      ie_open('p');
      itext('Em caso de horas noturnas, em feriados e finais de semana trabalhadas e informadas posteriormente n\xE3o ser\xE3o aceitas.');
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
    $templateAlias1(soy.$$assignDefaults({ content: param474 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'FpdVx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var FpdVx = function (_Component) {
  _inherits(FpdVx, _Component);

  function FpdVx() {
    _classCallCheck(this, FpdVx);

    return _possibleConstructorReturn(this, (FpdVx.__proto__ || Object.getPrototypeOf(FpdVx)).apply(this, arguments));
  }

  return FpdVx;
}(_metalComponent2.default);

_metalSoy2.default.register(FpdVx, templates);
exports.FpdVx = FpdVx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);