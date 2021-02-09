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

/***/ "./src/helper-xhr.js":
/*!***************************!*\
  !*** ./src/helper-xhr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass HttpRequest {\r\n  constructor(method, uri, contentType, headers) {\r\n    this._fetchingPromise = null;\r\n    this.xhr = new XMLHttpRequest();\r\n    if (!!method && !!uri) {\r\n      this.xhr.open(method, uri);\r\n    }\r\n    if (!!contentType) {\r\n      this.xhr.setRequestHeader('Content-Type', contentType);\r\n    }\r\n    if (headers && headers.length) {\r\n      headers.forEach(h => {\r\n        this.xhr.setRequestHeader(h.header, h.value);\r\n      });\r\n    }\r\n  }\r\n\r\n  open(method, uri) {\r\n    if (!!method && !!uri) {\r\n      this.xhr.open(method, uri);\r\n    }\r\n  }\r\n\r\n  setRequestHeader(header, value) {\r\n    if (!!header && !!value) {\r\n      this.xhr.setRequestHeader(header, value);\r\n    }\r\n  }\r\n\r\n  getAllResponseHeaders() {\r\n    return this.headers;\r\n  }\r\n\r\n  fetchFromServer(payload) {\r\n    var ret = null;\r\n\r\n    ret = new Promise((resolve, reject) => {\r\n\r\n      this.xhr.onload = function () {\r\n\r\n        if (this.readyState == this.HEADERS_RECEIVED) {\r\n          this.headers = this.xhr.getAllResponseHeaders();\r\n        }\r\n\r\n        if (this.xhr.status === 200) {\r\n          var d = JSON.parse(this.xhr.responseText, function (k, v) {\r\n            if (!!v && (k === 'createdon' || k === 'updatedon' || k === 'askedon' || k === 'publishedon' || k === 'lastUpdated' && Date.parse(v))) {\r\n              return new Date(v);\r\n            }\r\n            if (!!v && (k === 'json') && typeof v == \"string\") {\r\n              return JSON.parse(v);\r\n            }\r\n            return v;\r\n          });\r\n          resolve(\r\n            {\r\n              json: d,\r\n              headers: this.headers\r\n            }\r\n          )\r\n        } else {\r\n          reject(this.xhr.statusText || (\"status \" + this.xhr.status));\r\n        }\r\n        this._fetchingPromise = null;\r\n      }.bind(this);\r\n\r\n      this.xhr.onerror = (e) => {\r\n        reject(e.target.status);\r\n        this._fetchingPromise = null;\r\n      };\r\n\r\n      if (payload instanceof FormData) {\r\n        this.xhr.send(payload);\r\n      } else {\r\n        this.xhr.send(JSON.stringify(payload));\r\n      }\r\n\r\n      //this.xhr.onreadystatechange = function () {\r\n      //  if (this.readyState == this.HEADERS_RECEIVED) {\r\n      //    console.log(\"headers\", request.getAllResponseHeaders());\r\n      //  }\r\n      //}\r\n    });\r\n\r\n    return ret;\r\n  }\r\n\r\n  send(payload) {\r\n    if (!this._fetchingPromise) {\r\n      this._fetchingPromise = this.fetchFromServer(payload);\r\n    } else {\r\n    }\r\n\r\n    return this._fetchingPromise;\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpRequest);\n\n//# sourceURL=webpack://helper-xhr/./src/helper-xhr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/helper-xhr.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;