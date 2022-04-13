/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./loading-skinner.js */ \"./src/loading-skinner.js\");\n\n__webpack_require__(/*! ./splash-screen-module/splash-screen.js */ \"./src/splash-screen-module/splash-screen.js\");\n\n__webpack_require__(/*! ./ui-carousel-module/ui-carousel.js */ \"./src/ui-carousel-module/ui-carousel.js\");\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/index.js?");

/***/ }),

/***/ "./src/loading-skinner.js":
/*!********************************!*\
  !*** ./src/loading-skinner.js ***!
  \********************************/
/***/ ((module) => {

eval("/**\r\n * A valid CSS color.\r\n * \r\n * @typedef {string} Color\r\n */\n\n/**\r\n * A valid CSS selector.\r\n * \r\n * @typedef {string} Selector\r\n */\n\n/**\r\n * A valid image URL.\r\n * \r\n * @typedef {string} ImageUrl\r\n */\n\n/**\r\n * A valid img src.\r\n * \r\n * @typedef {Selector|ImageUrl} ImageSrc\r\n */\n\n/**\r\n * Component that skins the loading screen.\r\n * \r\n * @property {Color} primaryColor The primary color. Used for the top box on the loading screen.\r\n * @property {Color} secondaryColor The secondary color. Used for the prompt box.\r\n * @property {Color} backgroundColor The background color. Used for the loading screen and the prompt screen.\r\n * @property {Color} primaryButtonColor The primary button color. Used for the right button in the prompt box.\r\n * @property {Color} secondaryButtonColor The secondary button color. Used for the left button in the prompt box.\r\n * @property {Color} textColor The text color. Affects all text.\r\n * @property {string} fontFamily The typeface to use. Affects all text.\r\n * @property {ImageSrc} cameraIcon The src for the image to be used in the top box on the loading screen.\r\n * @property {ImageSrc} loadingIcon The src for the image to be used in the bottom box on the loading screen.\r\n * @property {ImageSrc} poweredByIcon The src for the image to be used as the \"Powered By 8th Wall\" icon at the bottom of the loading screen.\r\n * @property {('spin'|'pulse'|'scale'|'none'|'')}  loadingIconAnimation The kind of animation the loading screen icon should perform.\r\n * @property {string} promptText The text to include in the device motion sensors permissions prompt.\r\n * @property {string} primaryButtonText The text to include for the right button in the prompt box.\r\n * @property {string} secondaryButtonText  The text to include for the left button in the prompt box.\r\n */\nmodule.exports = AFRAME.registerComponent('loading-skinner', {\n  schema: {\n    primaryColor: {\n      \"default\": ''\n    },\n    secondaryColor: {\n      \"default\": ''\n    },\n    backgroundColor: {\n      \"default\": ''\n    },\n    primaryButtonColor: {\n      \"default\": ''\n    },\n    secondaryButtonColor: {\n      \"default\": ''\n    },\n    textColor: {\n      \"default\": ''\n    },\n    fontFamily: {\n      \"default\": ''\n    },\n    cameraIcon: {\n      \"default\": ''\n    },\n    loadingIcon: {\n      \"default\": ''\n    },\n    poweredByIcon: {\n      \"default\": ''\n    },\n    loadingIconAnimation: {\n      \"default\": ''\n    },\n    promptText: {\n      \"default\": ''\n    },\n    primaryButtonText: {\n      \"default\": ''\n    },\n    secondaryButtonText: {\n      \"default\": ''\n    }\n  },\n  init: function init() {\n    var _this$data = this.data,\n        primaryColor = _this$data.primaryColor,\n        secondaryColor = _this$data.secondaryColor,\n        backgroundColor = _this$data.backgroundColor,\n        primaryButtonColor = _this$data.primaryButtonColor,\n        secondaryButtonColor = _this$data.secondaryButtonColor,\n        textColor = _this$data.textColor,\n        fontFamily = _this$data.fontFamily,\n        cameraIcon = _this$data.cameraIcon,\n        loadingIcon = _this$data.loadingIcon,\n        loadingIconAnimation = _this$data.loadingIconAnimation,\n        poweredByIcon = _this$data.poweredByIcon,\n        promptText = _this$data.promptText,\n        primaryButtonText = _this$data.primaryButtonText,\n        secondaryButtonText = _this$data.secondaryButtonText;\n    var styles = '';\n\n    if (primaryColor) {\n      styles = styles.concat(\"\\n        #requestingCameraPermissions {\\n          background-color: \".concat(primaryColor, \";\\n        }\\n      \"));\n    }\n\n    if (secondaryColor) {\n      styles = styles.concat(\"\\n        .prompt-box-8w {\\n          background-color: \".concat(secondaryColor, \";\\n        }\\n      \"));\n    }\n\n    if (backgroundColor) {\n      styles = styles.concat(\"\\n        #loadBackground {\\n          background-color: \".concat(backgroundColor, \";\\n        }\\n      \"));\n    }\n\n    if (primaryButtonColor) {\n      styles = styles.concat(\"\\n        .button-primary-8w {\\n          background-color: \".concat(primaryButtonColor, \";\\n        }\\n      \"));\n    }\n\n    if (secondaryButtonColor) {\n      styles = styles.concat(\"\\n        .prompt-button-8w {\\n          background-color: \".concat(secondaryButtonColor, \";\\n        }\\n      \"));\n    }\n\n    if (textColor) {\n      styles = styles.concat(\"\\n        #loadingContainer * {\\n          color: \".concat(textColor, \";\\n        }\\n      \"));\n    }\n\n    if (fontFamily) {\n      styles = styles.concat(\"\\n        #loadingContainer * {\\n          font-family: \".concat(fontFamily, \";\\n        }\\n      \"));\n    }\n\n    if (cameraIcon) {\n      var cameraIconEl = document.getElementById('requestingCameraIcon');\n      cameraIconEl.src = cameraIcon;\n    }\n\n    if (loadingIcon) {\n      var loadingIconEl = document.getElementById('loadImage');\n      loadingIconEl.src = loadingIcon;\n    }\n\n    if (loadingIcon) {\n      var _loadingIconEl = document.getElementById('loadImage');\n\n      _loadingIconEl.src = loadingIcon;\n    }\n\n    if (loadingIconAnimation) {\n      var _loadingIconEl2 = document.getElementById('loadImage');\n\n      _loadingIconEl2.classList.remove('spin');\n\n      if (loadingIconAnimation !== 'none') {\n        _loadingIconEl2.classList.add(loadingIconAnimation);\n      }\n    }\n\n    if (poweredByIcon) {\n      var poweredByEl = document.querySelector('.poweredby-img');\n      poweredByEl.src = poweredByIcon;\n    }\n\n    if (promptText || primaryButtonText || secondaryButtonText) {\n      var inDom = false;\n      var observer = new MutationObserver(function () {\n        if (document.querySelector('.prompt-box-8w')) {\n          if (!inDom) {\n            if (promptText) {\n              document.querySelector('.prompt-box-8w p').innerHTML = promptText;\n            }\n\n            if (primaryButtonText) {\n              document.querySelector('.button-primary-8w').innerHTML = primaryButtonText;\n            }\n\n            if (secondaryButtonText) {\n              document.querySelector('.prompt-button-8w').innerHTML = secondaryButtonText;\n            }\n          }\n\n          inDom = true;\n        } else if (inDom) {\n          inDom = false;\n          observer.disconnect();\n        }\n      });\n      observer.observe(document.body, {\n        childList: true\n      });\n    }\n\n    var newStyle = document.createElement('style');\n    newStyle.innerText = styles;\n    document.head.appendChild(newStyle);\n  }\n});\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/loading-skinner.js?");

/***/ }),

/***/ "./src/splash-screen-module/splash-screen.js":
/*!***************************************************!*\
  !*** ./src/splash-screen-module/splash-screen.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! !style-loader!css-loader!./splash-screen.css */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css\");\n\nvar html = (__webpack_require__(/*! ./splash-screen.html */ \"./src/splash-screen-module/splash-screen.html\")[\"default\"]);\n/**\r\n * A valid CSS selector.\r\n * \r\n * @typedef {string} Selector\r\n */\n\n/**\r\n * A valid image URL.\r\n * \r\n * @typedef {string} ImageUrl\r\n */\n\n/**\r\n * A valid img src.\r\n * \r\n * @typedef {Selector|ImageUrl} ImageSrc\r\n */\n\n/**\r\n * Component that adds a splash screen to the experience.\r\n * \r\n * @property {ImageSrc} backgroundImage The src for the image to use as the splash screen background.\r\n * @property {string} title The title text.\r\n * @property {string} body The body text.\r\n * @property {string} cta The text for the call to action button.\r\n */\n\n\nmodule.exports = AFRAME.registerComponent('splash-screen', {\n  schema: {\n    backgroundImage: {\n      type: 'selector',\n      \"default\": null\n    },\n    title: {\n      \"default\": ''\n    },\n    body: {\n      \"default\": ''\n    },\n    cta: {\n      \"default\": 'Enter AR'\n    }\n  },\n  init: function init() {\n    var _this$data = this.data,\n        backgroundImage = _this$data.backgroundImage,\n        title = _this$data.title,\n        body = _this$data.body,\n        cta = _this$data.cta;\n    document.body.insertAdjacentHTML('beforeend', html);\n\n    if (backgroundImage) {\n      document.getElementById('splash-background').src = backgroundImage;\n    }\n\n    if (title) {\n      document.getElementById('splash-title').innerHTML = title;\n    }\n\n    if (body) {\n      document.getElementById('splash-body').innerHTML = body;\n    }\n\n    if (cta) {\n      document.getElementById('splash-cta').innerHTML = cta;\n    }\n\n    this.el.sceneEl.addEventListener('realityready', function () {\n      document.getElementById('splash-content').classList.add('fade-in');\n      document.getElementById('splash-cta').addEventListener('click', function () {\n        var splashPage = document.getElementById('splash');\n        splashPage.classList.add('fade-out');\n        setTimeout(function () {\n          splashPage.parentNode.removeChild(splashPage);\n        }, 1500);\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/splash-screen-module/splash-screen.js?");

/***/ }),

/***/ "./src/ui-carousel-module/ui-carousel.js":
/*!***********************************************!*\
  !*** ./src/ui-carousel-module/ui-carousel.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! !style-loader!css-loader!./ui-carousel.css */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css\");\n/**\r\n * A component that installs a carousel-style option select interface.\r\n * \r\n * @property {number} selected The index of the currently selected option.\r\n * \r\n * @fires carouselchanged\r\n */\n\n\nmodule.exports = AFRAME.registerComponent('ui-carousel', {\n  schema: {\n    selected: {\n      \"default\": 0\n    }\n  },\n  init: function init() {\n    var el = this.el;\n    el.setAttribute('id', 'carousel');\n    Array.from(el.children).forEach(function (cell) {\n      return cell.classList.add('carousel-cell');\n    });\n    var flickityScript = document.createElement('script');\n    flickityScript.type = 'text/javascript';\n\n    flickityScript.onload = function () {\n      var _this = this;\n\n      this.flickity = new Flickity(el, {\n        friction: 0.6,\n        pageDots: false,\n        prevNextButtons: false,\n        selectedAttraction: 0.25,\n        on: {\n          select: function select(cellIndex) {\n            el.setAttribute('ui-carousel', {\n              selected: cellIndex\n            });\n          },\n          staticClick: function staticClick(_, __, ___, cellIndex) {\n            _this.flickity.select(cellIndex);\n          }\n        }\n      });\n    };\n\n    flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';\n    document.querySelector('head').appendChild(flickityScript);\n  },\n  update: function update(oldData) {\n    var el = this.el;\n    var selected = this.data.selected;\n\n    if (this.flickity && oldData.selected !== selected) {\n      var allCells = el.querySelectorAll('.carousel-cell');\n\n      if (typeof oldData.selected === 'number') {\n        allCells[oldData.selected].classList.remove('carousel-selected');\n      }\n\n      allCells[selected].classList.add('carousel-selected');\n      this.el.sceneEl.emit('carouselchanged', {\n        newIndex: selected\n      });\n    }\n  }\n});\n/**\r\n * New option selected. Does not fire if the active option is reselected.\r\n * \r\n * @event carouselchanged\r\n * @type {object}\r\n * @property {number} newIndex The newly selected option.\r\n */\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/ui-carousel-module/ui-carousel.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes fade-in {\\r\\n  0% {opacity: 0;}\\r\\n  100% {opacity: 1;}\\r\\n}\\r\\n\\r\\n.fade-in {animation: fade-in 1.5s ease-out;}\\r\\n\\r\\n#splash {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: white;\\r\\n  z-index: 799;\\r\\n}\\r\\n\\r\\n#splash-background {\\r\\n  position: absolute;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: black;\\r\\n  z-index: 0;\\r\\n}\\r\\n\\r\\n#splash-content {\\r\\n  width: 80vw;\\r\\n  margin-bottom: 3rem;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#splash-content > * {\\r\\n  margin-bottom: 1.2rem;\\r\\n}\\r\\n\\r\\n#splash-title {\\r\\n  font-size: 2.5rem;\\r\\n  font-weight: 700;\\r\\n  line-height: 1;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#splash-body {\\r\\n  line-height: 1.4;\\r\\n}\\r\\n\\r\\n#splash-cta {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  color: black;\\r\\n  text-transform: uppercase;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 6px;\\r\\n  width: 100%;\\r\\n  height: 4rem;\\r\\n  box-sizing: border-box;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n  margin: 2.4rem 0 0;\\r\\n}\\r\\n\\r\\n#splash-cta:active {\\r\\n  background-color: #c9c9c9;\\r\\n  transform: scale(0.99);\\r\\n}\\r\\n\\r\\n#splash-footer {\\r\\n  position: absolute;\\r\\n  bottom: 3rem;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n}\\r\\n\\r\\n#splash-logo {\\r\\n  height: 1rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/splash-screen-module/splash-screen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#carousel {\\r\\n  position: absolute;\\r\\n  bottom: 28vmin;\\r\\n  width: 100%;\\r\\n  z-index: 798;\\r\\n}\\r\\n\\r\\n.carousel-cell {\\r\\n  font-size: 1rem;\\r\\n  border-radius: 500px;\\r\\n  border: 1px solid black;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 0.5rem 1.5rem;\\r\\n  margin: 0.5rem;\\r\\n}\\r\\n\\r\\n.carousel-cell.is-selected {\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/ui-carousel-module/ui-carousel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/splash-screen-module/splash-screen.html":
/*!*****************************************************!*\
  !*** ./src/splash-screen-module/splash-screen.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./rose-logo.png */ \"./src/splash-screen-module/rose-logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div id=\\\"splash\\\">\\r\\n  <img id=\\\"splash-background\\\" />\\r\\n  <div id=\\\"splash-content\\\">\\r\\n      <div id=\\\"splash-title\\\"></div>\\r\\n      <div id=\\\"splash-body\\\"></div>\\r\\n      <button id=\\\"splash-cta\\\"></button>\\r\\n  </div>\\r\\n  <p id=\\\"splash-footer\\\">\\r\\n      built by\\r\\n      <img id=\\\"splash-logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  </p>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/splash-screen-module/splash-screen.html?");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./splash-screen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/splash-screen-module/splash-screen.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_splash_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/splash-screen-module/splash-screen.css?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ui-carousel.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui-carousel-module/ui-carousel.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ui_carousel_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ui_carousel_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ui_carousel_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ui_carousel_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/ui-carousel-module/ui-carousel.css?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/splash-screen-module/rose-logo.png":
/*!************************************************!*\
  !*** ./src/splash-screen-module/rose-logo.png ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://@rosedigital/8frame-extras/./src/splash-screen-module/rose-logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;