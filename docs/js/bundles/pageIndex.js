var pageComponent =
webpackJsonppageComponent([4],{

/***/ 172:
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

var _indexSoy = __webpack_require__(261);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageIndex, _indexSoy2.default);

exports.default = pageIndex;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageIndex = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pageIndex.
   * @public
   */

  goog.module('pageIndex.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('Footer.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {{
   *    site: (?),
   *    year: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param157 = function param157() {
      $header(opt_data, null, opt_ijData);
      $why(null, null, opt_ijData);
      $banana(null, null, opt_ijData);
      $candybar(null, null, opt_ijData);
      $products(null, null, opt_ijData);
      $lolipop(null, null, opt_ijData);
      $how(null, null, opt_ijData);
      $highlights(null, null, opt_ijData);
      $templateAlias2(opt_data, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ content: param157 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageIndex.render';
  }

  /**
   * @param {{
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $header(opt_data, opt_ignored, opt_ijData) {
    ie_open('header', null, null, 'class', 'header headerMainPage');
    ie_open('div', null, null, 'class', 'container');
    ie_open('h1', null, null, 'class', 'header-title');
    itext('Liferay Culture Book');
    ie_close('h1');
    ie_open('h2', null, null, 'class', 'header-subtitle');
    var dyn14 = opt_data.site.index.description;
    if (typeof dyn14 == 'function') dyn14();else if (dyn14 != null) itext(dyn14);
    ie_close('h2');
    ie_open('div', null, null, 'class', 'header-cta');
    ie_open('a', null, null, 'href', 'https://culture-book.wedeploy.io/tutorials/example/intro.html', 'class', 'btn btn-accent');
    itext('First days');
    ie_close('a');
    ie_open('a', null, null, 'href', 'https://culture-book.wedeploy.io/docs/', 'class', 'btn btn-default');
    itext('Documents');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('header');
  }
  exports.header = $header;
  if (goog.DEBUG) {
    $header.soyTemplateName = 'pageIndex.header';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $why(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about whycontainer');
    ie_void('a', null, null, 'name', 'topo');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('Welcome to our family!');
    ie_close('h3');
    ie_open('h1', null, null, 'class', 'about-description');
    itext('We are thrilled that now you are a member of the Liferay family and we hope that you\'ll enjoy working here as much as we do. Liferay is an unique place full of passionate and committed people, and we\'ve just gotten this far because of our amazing team. As Liferay continues to grow, we try our best to deliver a great experience not only to our customers, but to our employees as well. We hope that this guide helps you and makes your first days here as easy as possible.');
    ie_close('h1');
    ie_open('h5', null, null, 'class', 'about-title');
    itext('The HR Latam Team ');
    ie_close('h5');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.why = $why;
  if (goog.DEBUG) {
    $why.soyTemplateName = 'pageIndex.why';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $banana(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about ourhistory');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'highlight-title', 'style', 'user-select: text;');
    itext('Where we came from');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    ie_open('img', null, null, 'src', '/images/linhadotempo.png');
    ie_close('img');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.banana = $banana;
  if (goog.DEBUG) {
    $banana.soyTemplateName = 'pageIndex.banana';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $candybar(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about mapbackground');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'highlight-title', 'style', 'user-select: text;');
    itext('Liferay Worldwide');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    ie_open('img', null, null, 'src', '/images/mapa1.png', 'style', 'height: 600px; width= 600px; center');
    ie_close('img');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.candybar = $candybar;
  if (goog.DEBUG) {
    $candybar.soyTemplateName = 'pageIndex.candybar';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $features(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'features');
    ie_open('div', null, null, 'class', 'container');
    ie_open('h3', null, null, 'class', 'highlight-title-center', 'style', 'user-select: text;');
    itext('Our products');
    ie_close('h3');
    ie_open('div', null, null, 'class', 'row');
    ie_open('section', null, null, 'class', 'feature col-md-4 col-md-offset-2');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('svg', null, null, 'width', '152', 'height', '152', 'viewBox', '0 0 304 304', 'fill', 'none', 'xmlns', 'http://www.w3.org/2000/svg');
    ie_void('path', null, null, 'fill-rule', 'evenodd', 'clip-rule', 'evenodd', 'd', 'M105.726 80.238c23.31-32.69 88.123-28.142 123.088 3.411 65.95 59.413-19.614 205.813-99.778 147.252-1.99-1.421-3.98-2.842-5.97-4.548-25.3-21.889-45.768-52.874-24.163-131.901 1.421-5.401 3.98-9.95 6.823-14.214z', 'fill', '#1AA0E8');
    ie_void('path', null, null, 'fill-rule', 'evenodd', 'clip-rule', 'evenodd', 'd', 'M105.725 80.239c67.372-27.574 151.8 38.66 86.133 112.287-15.35 17.056-39.229 32.122-62.823 38.376-17.056 4.548-34.112 4.264-47.473-3.411-32.122-17.91-40.082-81.586-15.35-115.698 11.37-15.35 25.015-25.584 39.513-31.554z', 'fill', '#0B63CE');
    ie_void('path', null, null, 'd', 'M191.859 192.526c65.666-73.626-18.762-139.861-86.134-112.287-2.843 4.264-5.401 8.812-6.822 14.213-21.605 79.028-1.137 110.013 24.163 131.902 1.99 1.705 3.98 3.127 5.97 4.548 23.594-6.254 47.472-21.32 62.823-38.376z', 'fill', '#134194');
    ie_close('svg');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('DXP');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Liferay Digital Experience Platform (DXP) is a software to create and connect digital experiences across web, mobile and connected devices in context and tailored to the individual. Liferay DXP helps companies minimize or eliminate silos in their users\u2019 experiences so that mobile, conventional web, legacy and can be distributed consistently and intelligently across all touchpoints.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('svg', null, null, 'width', '152', 'height', '152', 'viewBox', '0 0 152 152', 'fill', 'none', 'xmlns', 'http://www.w3.org/2000/svg');
    ie_void('path', null, null, 'd', 'M61.764 39.967l27.882 23.899c3.393 3.098 3.836 8.409.738 11.802l-32.75 38.06c-1.439 1.727-3.438 2.681-5.519 2.865-.327.056-.7.086-1.12.086l-24.932-.295c-3.098 0-6.196-2.655-6.638-5.753l-3.812-23.576c-.413-2.695-.35-5.803 1.599-8.142l32.75-38.061c2.95-3.54 8.262-3.836 11.802-.885z', 'fill', '#1AA0E8');
    ie_void('path', null, null, 'd', 'M90.236 113.139L62.502 89.24c-3.54-2.95-3.983-8.261-.885-11.802l32.75-38.061c1.907-2.289 4.433-2.897 7.565-2.798l24.153.143c3.098 0 6.196 2.655 6.638 5.753l3.983 24.636c.054.376.08.719.079 1.028a8.646 8.646 0 0 1-1.996 6.054l-32.75 38.06c-2.951 3.541-8.262 3.836-11.803.886z', 'fill', '#0B63CE');
    ie_void('path', null, null, 'd', 'M80.236 55.8l9.41 8.066c3.393 3.098 3.836 8.409.738 11.802l-18.578 21.59-9.304-8.018c-3.54-2.95-3.983-8.261-.885-11.802L80.236 55.8z', 'fill', '#134194');
    ie_close('svg');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Commerce');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('We provide two types of services in order to help our customer make a better use of the Liferay portal: Enterprise Subscription - the customer gets the services of professional support, maintenance updates, open source confidence, management tools, besides other benefits. Global Services - the customer gets consulting services to help on the client\'s project.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('svg', null, null, 'width', '152', 'height', '152', 'viewBox', '0 0 304 304', 'fill', 'none', 'xmlns', 'http://www.w3.org/2000/svg');
    ie_void('path', null, null, 'fill', '#fff', 'd', 'M0 0h304v304H0z');
    ie_void('path', null, null, 'd', 'M129.7 155.039c5.53 0 10.14 4.504 10.14 9.908v77.464c0 5.404-4.61 9.908-10.14 9.908H64.86c-5.53 0-10.14-4.504-10.14-9.908v-77.464c0-5.404 4.61-9.908 10.14-9.908h64.84zM251.298 100.32c5.532 0 10.141 4.335 10.141 9.536v132.928c0 5.201-4.61 9.536-10.14 9.536h-64.84c-5.53 0-10.14-4.335-10.14-9.536V109.856c0-5.201 4.61-9.536 10.14-9.536h64.84z', 'fill', '#1AA0E8');
    ie_void('path', null, null, 'd', 'M190.5 51.68c5.53 0 10.14 4.311 10.14 9.486v181.668c0 5.174-4.61 9.486-10.14 9.486h-64.84c-5.53 0-10.14-4.312-10.14-9.486V61.166c0-5.175 4.61-9.486 10.14-9.486h64.84z', 'fill', '#0B63CE');
    ie_void('path', null, null, 'd', 'M115.832 155.044h13.719s10.289-.6 10.289 11.1v77.998s0 8.1-12.16 8.1c0 0-10.29 1.5-12.16-8.7v-88.498h.312zM186.608 100.325s-10.289-.578-10.289 10.686V244.447s0 7.798 12.16 7.798c0 0 10.29 1.445 12.16-8.375V100.325h-14.03z', 'fill', '#134194');
    ie_close('svg');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Analytics Cloud');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.features = $features;
  if (goog.DEBUG) {
    $features.soyTemplateName = 'pageIndex.features';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $products(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'highlights');
    ie_open('div', null, null, 'class', 'container');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'highlight-title1', 'style', 'user-select: text;');
    itext('Our Products');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Since the beginning of Liferay Portal\u2019s development in 2000, Liferay has been a proud part of the open source community and has strived to create software that is useful and effective for a range of project types and sizes. Today, we offer ');
    ie_open('b');
    itext('Liferay Portal Community Edition (CE)');
    ie_close('b');
    itext(', ');
    ie_open('b');
    itext('Liferay Digital Experience Platform (DXP), DXP Cloud, Analytics Cloud and Commerce');
    ie_close('b');
    itext('.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image1', 'src', '/images/products.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_close('div');
    ie_close('div');
  }
  exports.products = $products;
  if (goog.DEBUG) {
    $products.soyTemplateName = 'pageIndex.products';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $lolipop(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'features');
    ie_open('div', null, null, 'class', 'container');
    ie_open('h3', null, null, 'class', 'highlight-title', 'style', 'user-select: text;');
    itext('Our business model');
    ie_close('h3');
    ie_open('div', null, null, 'class', 'row');
    ie_open('section', null, null, 'class', 'feature col-md-4 col-md-offset-2');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_void('span', null, null, 'class', 'icon-16-liferay-logo-2-tiny');
    ie_close('div');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Subscription');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Services of professional support, maintenance updates, open source confidence, management tools, and other benefits.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_void('span', null, null, 'class', 'icon-16-globe');
    ie_close('div');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Global Services');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('The customer gets consulting services to help on the client\'s project, no matter in which stage his project is.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_open('div', null, null, 'class', 'feature-graphic');
    ie_void('span', null, null, 'class', 'icon-16-pen');
    ie_close('div');
    ie_close('div');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Trainings');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Our Liferay trainers teach how to manage and understand the portal\'s functions, where they can also apply for a certification program.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.lolipop = $lolipop;
  if (goog.DEBUG) {
    $lolipop.soyTemplateName = 'pageIndex.lolipop';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $how(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about howcontainer');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h1', null, null, 'class', 'about-title');
    itext('Our mission');
    ie_close('h1');
    ie_open('h1', null, null, 'class', 'about-description');
    itext('By building a vibrant business, making technology useful, and investing in communities, we make it possible for people to reach their full potential to serve others.');
    ie_close('h1');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.how = $how;
  if (goog.DEBUG) {
    $how.soyTemplateName = 'pageIndex.how';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $highlights(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'highlights');
    ie_open('div', null, null, 'class', 'container');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'highlight-title1', 'style', 'user-select: text;');
    itext('Produce with Excelence');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Do excellent work wherever you are. The process is also important: we won\'t betray our values just to get the job done.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/images/community.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-push-9');
    ie_open('h4', null, null, 'class', 'highlight-title1');
    itext('Lead by Serving');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Leadership is a calling to serve others and stay humble. Our people lead by example, regardless of position or title.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-2 col-md-pull-6');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/images/rayandalloy.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h4', null, null, 'class', 'highlight-title1');
    itext('Value People');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('People are inherently valuable. Therefore, we respect people, invest in relationships, and celebrate one another.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/images/rayhoodie.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-push-9');
    ie_open('h4', null, null, 'class', 'highlight-title1');
    itext('Grow and Get Better');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('It\'s not about being better than someone else, it\'s about being better that you were yesterday. We seek to learn and grow from every experience. We believe that there\'s always more to learn and if you grow ow if your team grows, the whole company grows.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-2 col-md-pull-6');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/images/discover.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'highlight-title1', 'style', 'user-select: text;');
    itext('Stay Nerdy');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('We enjoy the unique personalities we have at Liferay. We encourage our people to share their interests, have fun, and be comfortable being themselves. Bring something you\'re passioned to the office.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/images/liferaynerd.png', 'alt', 'Placeholder');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_close('div');
    ie_close('div');
  }
  exports.highlights = $highlights;
  if (goog.DEBUG) {
    $highlights.soyTemplateName = 'pageIndex.highlights';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $popcorn(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about popcorncontainer');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('Company Structure');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    itext('We are proud of being a fairly flat and flexible company, where anyone can take initiatives, lead projects, seize opportunities and have fun while doing it! The LATAM company is divided in eight departments: Engineering, Global Services, Human Resources, Legal, Marketing, Operations, Sales and Support. You will see that we address and treat each other as friends rather than just co workers, and that everyone is very accessible and willing to help not just people from their team, but other teams as well.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.popcorn = $popcorn;
  if (goog.DEBUG) {
    $popcorn.soyTemplateName = 'pageIndex.popcorn';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $finale(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about headerfinale');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_void('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.finale = $finale;
  if (goog.DEBUG) {
    $finale.soyTemplateName = 'pageIndex.finale';
  }

  exports.render.params = ["site"];
  exports.render.types = { "site": "?" };
  exports.header.params = ["site"];
  exports.header.types = { "site": "?" };
  exports.why.params = [];
  exports.why.types = {};
  exports.banana.params = [];
  exports.banana.types = {};
  exports.candybar.params = [];
  exports.candybar.types = {};
  exports.features.params = [];
  exports.features.types = {};
  exports.products.params = [];
  exports.products.types = {};
  exports.lolipop.params = [];
  exports.lolipop.types = {};
  exports.how.params = [];
  exports.how.types = {};
  exports.highlights.params = [];
  exports.highlights.types = {};
  exports.popcorn.params = [];
  exports.popcorn.types = {};
  exports.finale.params = [];
  exports.finale.types = {};
  exports.templates = templates = exports;
  return exports;
});

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

_metalSoy2.default.register(pageIndex, templates);
exports.pageIndex = pageIndex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[172]);