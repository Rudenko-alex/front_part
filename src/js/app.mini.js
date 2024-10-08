/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/app.mini.js":
/*!****************************!*\
  !*** ./src/js/app.mini.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n/******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/js/app.js\":\n/*!***********************!*\\\n  !*** ./src/js/app.js ***!\n  \\***********************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \\\"./src/js/modules/functions.js\\\");\\n\\r\\n\\r\\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\\r\\n\\n\\n//# sourceURL=webpack://gulp/./src/js/app.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/app.mini.js\":\n/*!****************************!*\\\n  !*** ./src/js/app.mini.js ***!\n  \\****************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/*\\n * ATTENTION: The \\\"eval\\\" devtool has been used (maybe by default in mode: \\\"development\\\").\\n * This devtool is neither made for production nor for readable output files.\\n * It uses \\\"eval()\\\" calls to create a separate source file in the browser devtools.\\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\\n * or disable the default devtool with \\\"devtool: false\\\".\\n * If you are looking for production-ready output files, see mode: \\\"production\\\" (https://webpack.js.org/configuration/mode/).\\n */\\n/******/ (() => { // webpackBootstrap\\n/******/ \\t\\\"use strict\\\";\\n/******/ \\tvar __webpack_modules__ = ({\\n\\n/***/ \\\"./src/js/app.js\\\":\\n/*!***********************!*\\\\\\n  !*** ./src/js/app.js ***!\\n  \\\\***********************/\\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\\n\\neval(\\\"__webpack_require__.r(__webpack_exports__);\\\\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \\\\\\\"./src/js/modules/functions.js\\\\\\\");\\\\n\\\\r\\\\n\\\\r\\\\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\\\\r\\\\n\\\\n\\\\n//# sourceURL=webpack://gulp/./src/js/app.js?\\\");\\n\\n/***/ }),\\n\\n/***/ \\\"./src/js/modules/functions.js\\\":\\n/*!*************************************!*\\\\\\n  !*** ./src/js/modules/functions.js ***!\\n  \\\\*************************************/\\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\\n\\neval(\\\"__webpack_require__.r(__webpack_exports__);\\\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\\\n/* harmony export */   isWebp: () => (/* binding */ isWebp)\\\\n/* harmony export */ });\\\\nfunction isWebp() {\\\\r\\\\n  //проверка поддержки webp\\\\r\\\\n  function testWebP(callback) {\\\\r\\\\n    let webP = new Image();\\\\r\\\\n    webP.onload = webP.onerror = function () {\\\\r\\\\n      callback(webP.height == 2);\\\\r\\\\n    };\\\\r\\\\n    webP.src =\\\\r\\\\n      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\\\\r\\\\n  }\\\\r\\\\n\\\\r\\\\n  // Добавление класса _webp или _no-webp для HTML\\\\r\\\\n  testWebP(function (support) {\\\\r\\\\n    let className = support === true ? 'webp' : 'no-webp';\\\\r\\\\n    document.documentElement.classList.add(className);\\\\r\\\\n  });\\\\r\\\\n}\\\\r\\\\n\\\\n\\\\n//# sourceURL=webpack://gulp/./src/js/modules/functions.js?\\\");\\n\\n/***/ })\\n\\n/******/ \\t});\\n/************************************************************************/\\n/******/ \\t// The module cache\\n/******/ \\tvar __webpack_module_cache__ = {};\\n/******/ \\t\\n/******/ \\t// The require function\\n/******/ \\tfunction __nested_webpack_require_2577__(moduleId) {\\n/******/ \\t\\t// Check if module is in cache\\n/******/ \\t\\tvar cachedModule = __webpack_module_cache__[moduleId];\\n/******/ \\t\\tif (cachedModule !== undefined) {\\n/******/ \\t\\t\\treturn cachedModule.exports;\\n/******/ \\t\\t}\\n/******/ \\t\\t// Create a new module (and put it into the cache)\\n/******/ \\t\\tvar module = __webpack_module_cache__[moduleId] = {\\n/******/ \\t\\t\\t// no module.id needed\\n/******/ \\t\\t\\t// no module.loaded needed\\n/******/ \\t\\t\\texports: {}\\n/******/ \\t\\t};\\n/******/ \\t\\n/******/ \\t\\t// Execute the module function\\n/******/ \\t\\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2577__);\\n/******/ \\t\\n/******/ \\t\\t// Return the exports of the module\\n/******/ \\t\\treturn module.exports;\\n/******/ \\t}\\n/******/ \\t\\n/************************************************************************/\\n/******/ \\t/* webpack/runtime/define property getters */\\n/******/ \\t(() => {\\n/******/ \\t\\t// define getter functions for harmony exports\\n/******/ \\t\\t__nested_webpack_require_2577__.d = (exports, definition) => {\\n/******/ \\t\\t\\tfor(var key in definition) {\\n/******/ \\t\\t\\t\\tif(__nested_webpack_require_2577__.o(definition, key) && !__nested_webpack_require_2577__.o(exports, key)) {\\n/******/ \\t\\t\\t\\t\\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\\n/******/ \\t\\t\\t\\t}\\n/******/ \\t\\t\\t}\\n/******/ \\t\\t};\\n/******/ \\t})();\\n/******/ \\t\\n/******/ \\t/* webpack/runtime/hasOwnProperty shorthand */\\n/******/ \\t(() => {\\n/******/ \\t\\t__nested_webpack_require_2577__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\\n/******/ \\t})();\\n/******/ \\t\\n/******/ \\t/* webpack/runtime/make namespace object */\\n/******/ \\t(() => {\\n/******/ \\t\\t// define __esModule on exports\\n/******/ \\t\\t__nested_webpack_require_2577__.r = (exports) => {\\n/******/ \\t\\t\\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\\n/******/ \\t\\t\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\\n/******/ \\t\\t\\t}\\n/******/ \\t\\t\\tObject.defineProperty(exports, '__esModule', { value: true });\\n/******/ \\t\\t};\\n/******/ \\t})();\\n/******/ \\t\\n/************************************************************************/\\n/******/ \\t\\n/******/ \\t// startup\\n/******/ \\t// Load entry module and return exports\\n/******/ \\t// This entry module can't be inlined because the eval devtool is used.\\n/******/ \\tvar __webpack_exports__ = __nested_webpack_require_2577__(\\\"./src/js/app.js\\\");\\n/******/ \\t\\n/******/ })()\\n;\\n\\n//# sourceURL=webpack://gulp/./src/js/app.mini.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/formula.js\":\n/*!***************************!*\\\n  !*** ./src/js/formula.js ***!\n  \\***************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\nlet input = document.querySelector('.input');\\r\\nlet transform = document.querySelector('.transform');\\r\\nlet reset = document.querySelector('.reset');\\r\\nlet separatorSelect = document.querySelector('.separator-select');\\r\\nlet wrapperSelect = document.querySelector('.wrapper-select');\\r\\nlet space = document.getElementById('space');\\r\\n\\r\\ntransform.addEventListener('click', () => {\\r\\n  let separator;\\r\\n\\r\\n  space.checked\\r\\n    ? (separator = separatorSelect.value + ' ')\\r\\n    : (separator = separatorSelect.value);\\r\\n\\r\\n  let arr = input.value;\\r\\n  let arr2 = arr\\r\\n    .split('\\\\n')\\r\\n    .map((item) => {\\r\\n      item.trim();\\r\\n      return wrapperSelect.value + item + wrapperSelect.value;\\r\\n    })\\r\\n    .join(separator);\\r\\n  // .slice(0, -2);\\r\\n \\r\\n  input.value = arr2;\\r\\n});\\r\\n\\r\\nreset.addEventListener('click', () => {\\r\\n  document.location.reload();\\r\\n});\\r\\n\\n\\n//# sourceURL=webpack://gulp/./src/js/formula.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/modules/functions.js\":\n/*!*************************************!*\\\n  !*** ./src/js/modules/functions.js ***!\n  \\*************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   isWebp: () => (/* binding */ isWebp)\\n/* harmony export */ });\\nfunction isWebp() {\\r\\n  //проверка поддержки webp\\r\\n  function testWebP(callback) {\\r\\n    let webP = new Image();\\r\\n    webP.onload = webP.onerror = function () {\\r\\n      callback(webP.height == 2);\\r\\n    };\\r\\n    webP.src =\\r\\n      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\\r\\n  }\\r\\n\\r\\n  // Добавление класса _webp или _no-webp для HTML\\r\\n  testWebP(function (support) {\\r\\n    let className = support === true ? 'webp' : 'no-webp';\\r\\n    document.documentElement.classList.add(className);\\r\\n  });\\r\\n}\\r\\n\\n\\n//# sourceURL=webpack://gulp/./src/js/modules/functions.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_9428__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_9428__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_9428__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_9428__.o(definition, key) && !__nested_webpack_require_9428__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_9428__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_9428__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \t__nested_webpack_require_9428__(\"./src/js/app.js\");\n/******/ \t__nested_webpack_require_9428__(\"./src/js/app.mini.js\");\n/******/ \t__nested_webpack_require_9428__(\"./src/js/formula.js\");\n/******/ \tvar __webpack_exports__ = __nested_webpack_require_9428__(\"./src/js/modules/functions.js\");\n/******/ \t\n/******/ })()\n;\n\n//# sourceURL=webpack://gulp/./src/js/app.mini.js?");

/***/ }),

/***/ "./src/js/formula.js":
/*!***************************!*\
  !*** ./src/js/formula.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nlet input = document.querySelector('.input');\r\nlet transform = document.querySelector('.transform');\r\nlet reset = document.querySelector('.reset');\r\nlet separatorSelect = document.querySelector('.separator-select');\r\nlet wrapperSelect = document.querySelector('.wrapper-select');\r\nlet space = document.getElementById('space');\r\n\r\ntransform.addEventListener('click', () => {\r\n  let separator;\r\n\r\n  space.checked\r\n    ? (separator = separatorSelect.value + ' ')\r\n    : (separator = separatorSelect.value);\r\n\r\n  let arr = input.value;\r\n  let arr2 = arr\r\n    .split('\\n')\r\n    .map((item) => {\r\n      item.trim();\r\n      return wrapperSelect.value + item + wrapperSelect.value;\r\n    })\r\n    .join(separator);\r\n  // .slice(0, -2);\r\n \r\n  input.value = arr2;\r\n});\r\n\r\nreset.addEventListener('click', () => {\r\n  document.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://gulp/./src/js/formula.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isWebp: () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n  //проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP(function (support) {\r\n    let className = support === true ? 'webp' : 'no-webp';\r\n    document.documentElement.classList.add(className);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/functions.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	__webpack_require__("./src/js/app.mini.js");
/******/ 	__webpack_require__("./src/js/formula.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/functions.js");
/******/ 	
/******/ })()
;