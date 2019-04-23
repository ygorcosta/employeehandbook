var pageComponent =
webpackJsonppageComponent([2],{

/***/ 322:
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

var _introSoy = __webpack_require__(323);

var _introSoy2 = _interopRequireDefault(_introSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gsdTv = function (_Component) {
  _inherits(gsdTv, _Component);

  function gsdTv() {
    _classCallCheck(this, gsdTv);

    return _possibleConstructorReturn(this, (gsdTv.__proto__ || Object.getPrototypeOf(gsdTv)).apply(this, arguments));
  }

  return gsdTv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(gsdTv, _introSoy2.default);

exports.default = gsdTv;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.gsdTv = undefined;

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

  // This file was automatically generated from intro.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace gsdTv.
   * @public
   */

  goog.module('gsdTv.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param607 = function param607() {
      ie_open('h3');
      var dyn46 = opt_data.page.title;
      if (typeof dyn46 == 'function') dyn46();else if (dyn46 != null) itext(dyn46);
      ie_close('h3');
      ie_open('p');
      itext('Estamos muito felizes em saber que voc\xEA \xE9 um membro da nossa fam\xEDlia e esperamos que voc\xEA goste de trabalhar aqui tanto quanto n\xF3s gostamos!');
      ie_close('p');
      ie_open('p');
      itext('A partir de agora, voc\xEA est\xE1 convidado a se preparar para decolar no universo Liferay, sua nova jornada. Para te ajudar com os equipamentos se seguran\xE7a e primeiras orienta\xE7\xF5es, criamos esse guia com ajuda do nosso mascote, Ray <3');
      ie_close('p');
      ie_open('p');
      itext('Pronto? Ent\xE3o vamos l\xE1!');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/dont-panic.png', 'style', 'height: 310px; width= 310px; center');
      ie_close('img');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param607 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'gsdTv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var gsdTv = function (_Component) {
  _inherits(gsdTv, _Component);

  function gsdTv() {
    _classCallCheck(this, gsdTv);

    return _possibleConstructorReturn(this, (gsdTv.__proto__ || Object.getPrototypeOf(gsdTv)).apply(this, arguments));
  }

  return gsdTv;
}(_metalComponent2.default);

_metalSoy2.default.register(gsdTv, templates);
exports.gsdTv = gsdTv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[322]);