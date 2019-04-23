var pageComponent =
webpackJsonppageComponent([23],{

/***/ 286:
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

var _feriasSoy = __webpack_require__(287);

var _feriasSoy2 = _interopRequireDefault(_feriasSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HncuZ = function (_Component) {
  _inherits(HncuZ, _Component);

  function HncuZ() {
    _classCallCheck(this, HncuZ);

    return _possibleConstructorReturn(this, (HncuZ.__proto__ || Object.getPrototypeOf(HncuZ)).apply(this, arguments));
  }

  return HncuZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(HncuZ, _feriasSoy2.default);

exports.default = HncuZ;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.HncuZ = undefined;

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

  // This file was automatically generated from ferias.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace HncuZ.
   * @public
   */

  goog.module('HncuZ.incrementaldom');

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
    var param421 = function param421() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      itext('Voc\xEA tem 11 meses para pedir suas f\xE9rias atrav\xE9s do Jira. Anualmente, voc\xEA estar\xE1 apto \xE0 tirar suas f\xE9rias, ent\xE3o fique atento!');
      ie_close('p');
      ie_open('h4');
      itext('Para CLTs');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('30 dias corridos ou 22 dias \xFAteis, podendo vender 10 dias corridos ou 7 dias \xFAteis;');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Para provedores de servi\xE7os');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('30 dias corridos ou 22 dias \xFAteis;');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Estagi\xE1rios');
      ie_close('h4');
      ie_open('ul');
      ie_open('li');
      itext('30 dias corridos;');
      ie_close('li');
      ie_close('ul');
      ie_open('h4');
      itext('Para solicitar');
      ie_close('h4');
      ie_open('p');
      itext('Voc\xEA precisa solicitar suas f\xE9rias atr\xE1ves do JIRA. Aqui voc\xEA encontrar\xE1 as instru\xE7\xF5es, e esse v\xEDdeo pode te ajudar :)');
      ie_close('p');
      ie_open('h4');
      itext('Mais informa\xE7\xF5es?');
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
    $templateAlias1(soy.$$assignDefaults({ content: param421 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'HncuZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var HncuZ = function (_Component) {
  _inherits(HncuZ, _Component);

  function HncuZ() {
    _classCallCheck(this, HncuZ);

    return _possibleConstructorReturn(this, (HncuZ.__proto__ || Object.getPrototypeOf(HncuZ)).apply(this, arguments));
  }

  return HncuZ;
}(_metalComponent2.default);

_metalSoy2.default.register(HncuZ, templates);
exports.HncuZ = HncuZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);