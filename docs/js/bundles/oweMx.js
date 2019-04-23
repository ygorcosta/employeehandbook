var pageComponent =
webpackJsonppageComponent([15],{

/***/ 302:
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

var _presentedeanivesarioSoy = __webpack_require__(303);

var _presentedeanivesarioSoy2 = _interopRequireDefault(_presentedeanivesarioSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oweMx = function (_Component) {
  _inherits(oweMx, _Component);

  function oweMx() {
    _classCallCheck(this, oweMx);

    return _possibleConstructorReturn(this, (oweMx.__proto__ || Object.getPrototypeOf(oweMx)).apply(this, arguments));
  }

  return oweMx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(oweMx, _presentedeanivesarioSoy2.default);

exports.default = oweMx;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.oweMx = undefined;

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

  // This file was automatically generated from presentedeanivesario.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace oweMx.
   * @public
   */

  goog.module('oweMx.incrementaldom');

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
    var param505 = function param505() {
      ie_open('h4');
      var dyn38 = opt_data.page.description;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h4');
      ie_open('article', null, null, 'id', '1');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('b');
      itext('Recife');
      ie_close('b');
      itext(': o colaborador vem ao RH pedir o seu cart\xE3o, entregamos e recolhemos sua assinatura e data do recebimento do presente em uma "ata".');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('b');
      itext('S\xE3o Paulo');
      ie_close('b');
      itext(': Karina tem o costume de entregar os cart\xF5es sem precisar que a pessoa venha j\xE1 que o escrit\xF3rio \xE9 pequeno. Ela tamb\xE9m pede para que eles assinem uma "ata"');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('b');
      itext('Home Officers');
      ie_close('b');
      itext(': enviamos o vale da saraiva para os endere\xE7os correspondentes pelos correios com, pelo menos 3 semanas antes da data de anivers\xE1rio (ou no in\xEDcio do m\xEAs).');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_close('artcile');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param505 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'oweMx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var oweMx = function (_Component) {
  _inherits(oweMx, _Component);

  function oweMx() {
    _classCallCheck(this, oweMx);

    return _possibleConstructorReturn(this, (oweMx.__proto__ || Object.getPrototypeOf(oweMx)).apply(this, arguments));
  }

  return oweMx;
}(_metalComponent2.default);

_metalSoy2.default.register(oweMx, templates);
exports.oweMx = oweMx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[302]);