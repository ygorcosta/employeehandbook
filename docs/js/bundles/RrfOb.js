var pageComponent =
webpackJsonppageComponent([11],{

/***/ 310:
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

var _servicoentregaSoy = __webpack_require__(311);

var _servicoentregaSoy2 = _interopRequireDefault(_servicoentregaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RrfOb = function (_Component) {
  _inherits(RrfOb, _Component);

  function RrfOb() {
    _classCallCheck(this, RrfOb);

    return _possibleConstructorReturn(this, (RrfOb.__proto__ || Object.getPrototypeOf(RrfOb)).apply(this, arguments));
  }

  return RrfOb;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RrfOb, _servicoentregaSoy2.default);

exports.default = RrfOb;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RrfOb = undefined;

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

  // This file was automatically generated from servicoentrega.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RrfOb.
   * @public
   */

  goog.module('RrfOb.incrementaldom');

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
    var param549 = function param549() {
      ie_open('h6');
      var dyn42 = opt_data.page.description;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('Para utiliaza\xE7\xE3o corporativa, o servi\xE7o \xE9 gratuito e n\xE3o h\xE1 limites de solicita\xE7\xF5es.');
      ie_close('p');
      ie_open('p');
      itext('J\xE1 para o uso pessoal, pode-se utilizar este servi\xE7o gratuitamente ');
      ie_open('b');
      itext('at\xE9 duas vezes por m\xEAs');
      ie_close('b');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('N\xF3s trabalhamos com duas ag\xEAncias: ');
      ie_open('b');
      itext('Ecolivery');
      ie_close('b');
      itext(' para servi\xE7os de bicicleta e ');
      ie_open('b');
      itext('Pontual');
      ie_close('b');
      itext(' para servi\xE7os de moto.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Ecolivery');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Regi\xE3o de entrega:');
      ie_close('b');
      itext(' Recife (');
      ie_open('b');
      itext('n\xE3o');
      ie_close('b');
      itext(' contempla as regi\xF5es de Olinda e Jaboat\xE3o dos Guararapes)');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Hor\xE1rio de Funcionamento:');
      ie_close('b');
      itext(' Segunda \xE0 sexta das 8h \xE0s 18h');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Como solicitar:');
      ie_close('b');
      itext(' Ligar para ');
      ie_open('b');
      itext('(81) 4112-0616');
      ie_close('b');
      itext(' e se identificar, informando que \xE9 funcion\xE1rio da Liferay.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h4');
      itext('Pontual');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Regi\xE3o de entrega:');
      ie_close('b');
      itext(' Regi\xE3o Metropolitana do Recife');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Hor\xE1rio de Funcionamento:');
      ie_close('b');
      itext(' Segunda \xE0 sexta das 8h \xE0s 18h');
      ie_close('p');
      ie_open('p');
      ie_open('b');
      itext('Como solicitar:');
      ie_close('b');
      itext(' Ligar para ');
      ie_open('b');
      itext('(81) 3254-1036');
      ie_close('b');
      itext(', se identificar informando que \xE9 funcion\xE1rio da Liferay e solicitar um ticket* com Operations (Amanda Santos).');
      ie_close('p');
      ie_open('p');
      ie_open('i');
      itext('*Para algumas regi\xF5es mais distantes, \xE9 poss\xEDvel que a empresa (Pontual) solicite 2 tickets para realizar o servi\xE7o.');
      ie_open('i');
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
    $templateAlias1(soy.$$assignDefaults({ content: param549 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RrfOb.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RrfOb = function (_Component) {
  _inherits(RrfOb, _Component);

  function RrfOb() {
    _classCallCheck(this, RrfOb);

    return _possibleConstructorReturn(this, (RrfOb.__proto__ || Object.getPrototypeOf(RrfOb)).apply(this, arguments));
  }

  return RrfOb;
}(_metalComponent2.default);

_metalSoy2.default.register(RrfOb, templates);
exports.RrfOb = RrfOb;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);