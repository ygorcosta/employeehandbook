var pageComponent =
webpackJsonppageComponent([1],{

/***/ 324:
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

var _secondStepSoy = __webpack_require__(325);

var _secondStepSoy2 = _interopRequireDefault(_secondStepSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yUMtD = function (_Component) {
  _inherits(yUMtD, _Component);

  function yUMtD() {
    _classCallCheck(this, yUMtD);

    return _possibleConstructorReturn(this, (yUMtD.__proto__ || Object.getPrototypeOf(yUMtD)).apply(this, arguments));
  }

  return yUMtD;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yUMtD, _secondStepSoy2.default);

exports.default = yUMtD;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yUMtD = undefined;

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

  // This file was automatically generated from second-step.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yUMtD.
   * @public
   */

  goog.module('yUMtD.incrementaldom');

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
    var param618 = function param618() {
      ie_open('h3');
      var dyn47 = opt_data.page.title;
      if (typeof dyn47 == 'function') dyn47();else if (dyn47 != null) itext(dyn47);
      ie_close('h3');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/capa-dia-1.png', 'style', 'height: 200px; width= 200px;');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('Voc\xEA j\xE1 deve ter tido o que chamamos de ');
      ie_open('b');
      itext('Onboarding Institucional');
      ie_close('b');
      itext('. Um momento com o RH pra entender quem somos e nossas principais pol\xEDticas, benef\xEDcios e processos. A partir de agora, vamos te guiar nessa semana com alguns v\xEDdeos e instru\xE7\xF5es para que sua aterrissagem pelo universo Liferay seja feita de forma segura e suave ;)');
      ie_close('p');
      ie_open('p');
      itext('Aqui est\xE1 a apresenta\xE7\xE3o institucional que voc\xEA foi apresentado hoje.');
      ie_close('p');
      ie_open('h6');
      itext('Configura\xE7\xE3o de m\xE1quina e local de trabalho');
      ie_close('h6');
      ie_open('p');
      ie_open('b');
      itext('Come\xE7e pelo b\xE1sico');
      ie_close('b');
      itext(': organize sua mesa de trabalho, ligue seu notebook e come\xE7e a criar suas contas nas plataformas que utlizaremos. Nossas principais ferramentas de comunica\xE7\xE3o institucional s\xE3o o ');
      ie_open('b');
      itext('Gmail');
      ie_close('b');
      itext(', ');
      ie_open('b');
      itext('Hangouts');
      ie_close('b');
      itext(' e ');
      ie_open('b');
      itext('Loop');
      ie_close('b');
      itext('. Pergunte ao seu Buddy que outras plataformas s\xE3o importantes para a comunica\xE7\xE3o do seu time!');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('b');
      itext('Gmail');
      ie_close('b');
      itext(': Voc\xEA provavelmente j\xE1 recebeu um e-mail para verifica\xE7\xE3o de duas etapas de sua conta no Gmail. N\xE3o esque\xE7a de faz\xEA-la pois seu e-mail pode ser desativado por quest\xF5es de seguran\xE7a!');
      ie_close('li');
      ie_close('ul');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param618 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yUMtD.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yUMtD = function (_Component) {
  _inherits(yUMtD, _Component);

  function yUMtD() {
    _classCallCheck(this, yUMtD);

    return _possibleConstructorReturn(this, (yUMtD.__proto__ || Object.getPrototypeOf(yUMtD)).apply(this, arguments));
  }

  return yUMtD;
}(_metalComponent2.default);

_metalSoy2.default.register(yUMtD, templates);
exports.yUMtD = yUMtD;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[324]);