var pageComponent =
webpackJsonppageComponent([26],{

/***/ 280:
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

var _compradenotebookSoy = __webpack_require__(281);

var _compradenotebookSoy2 = _interopRequireDefault(_compradenotebookSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SbMbx = function (_Component) {
  _inherits(SbMbx, _Component);

  function SbMbx() {
    _classCallCheck(this, SbMbx);

    return _possibleConstructorReturn(this, (SbMbx.__proto__ || Object.getPrototypeOf(SbMbx)).apply(this, arguments));
  }

  return SbMbx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(SbMbx, _compradenotebookSoy2.default);

exports.default = SbMbx;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SbMbx = undefined;

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

  // This file was automatically generated from compradenotebook.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace SbMbx.
   * @public
   */

  goog.module('SbMbx.incrementaldom');

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
    var param388 = function param388() {
      ie_open('article', null, null, 'id', '1');
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('O pre\xE7o do notebook ser\xE1 determinado pelo pre\xE7o de mercado, aplicando um desconto de 50% no valor total.');
      ie_close('p');
      ie_open('p');
      itext('O pagamento poder\xE1 ser feito via ');
      ie_open('i');
      itext('payroll');
      ie_close('i');
      itext(' e pode ser dividido em at\xE9 6 vezes, desde que n\xE3o comprometa mais de 20% do lucro l\xEDquido do colaborador.');
      ie_close('p');
      ie_open('p');
      itext('Caso voc\xEA compre o notebook, n\xF3s lhe daremos um outro equipamento.');
      ie_close('p');
      ie_open('h4');
      itext('Como checar seu notebook est\xE1 apto?');
      ie_close('h4');
      ie_open('p');
      itext('Voc\xEA pode checar a data de fabrica\xE7\xE3o nas configura\xE7\xF5es, ou checar o n\xFAmero serial no site do suporte (Apple ou Dell).');
      ie_close('p');
      ie_open('p');
      itext('Se o seu notebook n\xE3o est\xE1 apto \xE0 participar, n\xF3s teremos duas oportunidades anuais para voc\xEA participar: janeiro e julho. Na pr\xF3xima vez, voc\xEA pode ser o beneficiado, ent\xE3o cuide bem do seu notebook <3');
      ie_close('p');
      ie_open('h6');
      itext('Esse \xE9 um programa para os colaboradores da Liferay. N\xE3o podemos vender os equipamentos para algu\xE9m de fora da Liferay.');
      ie_close('h6');
      ie_open('h4');
      itext('Mais informa\xE7\xF5es');
      ie_close('h4');
      ie_open('p');
      itext('Ainda tem d\xFAvidas? Entra em contato com a gente! :)');
      ie_close('p');
      ie_open('h6');
      ie_open('a', null, null, 'href', 'mailto:admin-br@liferay.com');
      itext('admin-br@liferay.com');
      ie_close('a');
      ie_close('h6');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param388 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SbMbx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var SbMbx = function (_Component) {
  _inherits(SbMbx, _Component);

  function SbMbx() {
    _classCallCheck(this, SbMbx);

    return _possibleConstructorReturn(this, (SbMbx.__proto__ || Object.getPrototypeOf(SbMbx)).apply(this, arguments));
  }

  return SbMbx;
}(_metalComponent2.default);

_metalSoy2.default.register(SbMbx, templates);
exports.SbMbx = SbMbx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);