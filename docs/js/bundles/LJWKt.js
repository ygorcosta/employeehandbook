var pageComponent =
webpackJsonppageComponent([16],{

/***/ 300:
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

var _lavanderiaSoy = __webpack_require__(301);

var _lavanderiaSoy2 = _interopRequireDefault(_lavanderiaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LJWKt = function (_Component) {
  _inherits(LJWKt, _Component);

  function LJWKt() {
    _classCallCheck(this, LJWKt);

    return _possibleConstructorReturn(this, (LJWKt.__proto__ || Object.getPrototypeOf(LJWKt)).apply(this, arguments));
  }

  return LJWKt;
}(_metalComponent2.default);

;

_metalSoy2.default.register(LJWKt, _lavanderiaSoy2.default);

exports.default = LJWKt;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.LJWKt = undefined;

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

  // This file was automatically generated from lavanderia.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace LJWKt.
   * @public
   */

  goog.module('LJWKt.incrementaldom');

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
    var param494 = function param494() {
      ie_open('h6');
      var dyn37 = opt_data.page.description;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('As roupas que pretendem ser lavadas devem ser trazidas sempre nas ');
      ie_open('b');
      itext('segundas-feiras');
      ie_close('b');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Deve-se colocar as roupas em uma sacola e preencher um formul\xE1rio (ambos encontrados nos arm\xE1rio das copas). Ao finalizar, a sacola com o formul\xE1rio deve ser colocada na sala da impressora no 10\xBA andar (pr\xE9dio Lucas Suassuna) ou na copa do 4\xBAandar (pr\xE9dio Alcides Fernandes).');
      ie_close('p');
      ie_open('p');
      itext('Na ');
      ie_open('b');
      itext('sexta-feira');
      ie_close('b');
      itext(' da mesma semana, a lavanderia entrega as roupas limpas que ser\xE3o distribu\xEDdas ou guardadas no 10\xBA ou 4\xBAandar.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h4');
      itext('Informa\xE7\xF5es importantes');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('A empresa de lavanderia com a qual trabalhamos n\xE3o lava roupas \xEDntimas, roupas de cama, toalhas e vestidos de festa.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('A Liferay n\xE3o se responsabiliza por perda ou problemas com as roupas. Caso ocorram, deve-se tratar diretamente com a Lavanderia prestadora de servi\xE7o \u2013no caso, a Bolh\xE3o Lavanderia.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('A lavanderia n\xE3o se responsabiliza por danos no caso de \u201C1\xAA lavagem\u201D de pe\xE7as novas, onde podem ocorrer desbotamentos e poss\xEDveis altera\xE7\xF5es nas cores. Por isso,\xE9 necess\xE1rio informar se for a 1\xAA lavagem de uma pe\xE7a nova no momento da entrega das roupas.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
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
    $templateAlias1(soy.$$assignDefaults({ content: param494 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'LJWKt.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var LJWKt = function (_Component) {
  _inherits(LJWKt, _Component);

  function LJWKt() {
    _classCallCheck(this, LJWKt);

    return _possibleConstructorReturn(this, (LJWKt.__proto__ || Object.getPrototypeOf(LJWKt)).apply(this, arguments));
  }

  return LJWKt;
}(_metalComponent2.default);

_metalSoy2.default.register(LJWKt, templates);
exports.LJWKt = LJWKt;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);