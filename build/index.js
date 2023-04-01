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

/***/ "./src/Component/Navbar/index.ts":
/*!***************************************!*\
  !*** ./src/Component/Navbar/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.scss */ \"./src/Component/Navbar/Navbar.scss\");\n/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Navbar_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Navbar(isSignIn) {\n    if (isSignIn) {\n        return `\r\n        <!-- Navbar -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <!-- Container wrapper -->\r\n  <div class=\"container-fluid\">\r\n    <!-- Toggle button -->\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-mdb-toggle=\"collapse\"\r\n      data-mdb-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n\r\n    <!-- Collapsible wrapper -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <!-- Navbar brand -->\r\n      <a class=\"navbar-brand mt-2 mt-lg-0\" href=\"#\">\r\n        <img\r\n          src=\"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp\"\r\n          height=\"15\"\r\n          alt=\"MDB Logo\"\r\n          loading=\"lazy\"\r\n        />\r\n      </a>\r\n      <!-- Left links -->\r\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Team</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Projects</a>\r\n        </li>\r\n      </ul>\r\n      <!-- Left links -->\r\n    </div>\r\n    <!-- Collapsible wrapper -->\r\n\r\n    <!-- Right elements -->\r\n    <div class=\"d-flex align-items-center\">\r\n      <!-- Icon -->\r\n      <a class=\"text-reset me-3\" href=\"#\">\r\n        <i class=\"fas fa-shopping-cart\"></i>\r\n      </a>\r\n\r\n      <!-- Notifications -->\r\n      <div class=\"dropdown\">\r\n        <a\r\n          class=\"text-reset me-3 dropdown-toggle hidden-arrow\"\r\n          href=\"#\"\r\n          id=\"navbarDropdownMenuLink\"\r\n          role=\"button\"\r\n          data-mdb-toggle=\"dropdown\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          <i class=\"fas fa-bell\"></i>\r\n          <span class=\"badge rounded-pill badge-notification bg-danger\">1</span>\r\n        </a>\r\n        <ul\r\n          class=\"dropdown-menu dropdown-menu-end\"\r\n          aria-labelledby=\"navbarDropdownMenuLink\"\r\n        >\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">Some news</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">Another news</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- Avatar -->\r\n      <div class=\"dropdown\">\r\n        <a\r\n          class=\"dropdown-toggle d-flex align-items-center hidden-arrow\"\r\n          href=\"#\"\r\n          id=\"navbarDropdownMenuAvatar\"\r\n          role=\"button\"\r\n          data-mdb-toggle=\"dropdown\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          <img\r\n            src=\"https://mdbcdn.b-cdn.net/img/new/avatars/2.webp\"\r\n            class=\"rounded-circle\"\r\n            height=\"25\"\r\n            alt=\"Black and White Portrait of a Man\"\r\n            loading=\"lazy\"\r\n          />\r\n        </a>\r\n        <ul\r\n          class=\"dropdown-menu dropdown-menu-end\"\r\n          aria-labelledby=\"navbarDropdownMenuAvatar\"\r\n        >\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">My profile</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">Settings</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"#\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Right elements -->\r\n  </div>\r\n  <!-- Container wrapper -->\r\n</nav>\r\n<!-- Navbar -->\r\n        `;\n    }\n    else {\n        return `<!-- Navbar -->\r\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n          <!-- Container wrapper -->\r\n          <div class=\"container\">\r\n            <!-- Navbar brand -->\r\n            <a class=\"navbar-brand me-2\" href=\"https://mdbgo.com/\">\r\n              <img\r\n                src=\"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp\"\r\n                height=\"16\"\r\n                alt=\"MDB Logo\"\r\n                loading=\"lazy\"\r\n                style=\"margin-top: -1px;\"\r\n              />\r\n            </a>\r\n        \r\n            <!-- Toggle button -->\r\n            <button\r\n              class=\"navbar-toggler\"\r\n              type=\"button\"\r\n              data-mdb-toggle=\"collapse\"\r\n              data-mdb-target=\"#navbarButtonsExample\"\r\n              aria-controls=\"navbarButtonsExample\"\r\n              aria-expanded=\"false\"\r\n              aria-label=\"Toggle navigation\"\r\n            >\r\n              <i class=\"fas fa-bars\"></i>\r\n            </button>\r\n        \r\n            <!-- Collapsible wrapper -->\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarButtonsExample\">\r\n              <!-- Left links -->\r\n              <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n                </li>\r\n              </ul>\r\n              <!-- Left links -->\r\n        \r\n              <div class=\"d-flex align-items-center\">\r\n                <button type=\"button\" class=\"btn btn-link px-3 me-2\">\r\n                  Login\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary me-3\">\r\n                  Sign up for free\r\n                </button>\r\n                <a\r\n                  class=\"btn btn-dark px-3\"\r\n                  href=\"https://github.com/mdbootstrap/mdb-ui-kit\"\r\n                  role=\"button\"\r\n                  ><i class=\"fab fa-github\"></i\r\n                ></a>\r\n              </div>\r\n            </div>\r\n            <!-- Collapsible wrapper -->\r\n          </div>\r\n          <!-- Container wrapper -->\r\n        </nav>\r\n        <!-- Navbar -->`;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Component/Navbar/index.ts?");

/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$),\n/* harmony export */   \"appendChild\": () => (/* binding */ appendChild)\n/* harmony export */ });\nconst $ = document.querySelector.bind(document);\nconst $$ = document.querySelectorAll.bind(document);\nconst appendChild = (parentElement, elementChildString) => {\n    parentElement.appendChild(new DOMParser().parseFromString(elementChildString, 'text/html').body.lastElementChild);\n};\n\n\n//# sourceURL=webpack:///./src/global.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/* harmony import */ var _Component_Navbar_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/Navbar/index */ \"./src/Component/Navbar/index.ts\");\n\n\nfunction App() {\n    var _a;\n    (0,_global__WEBPACK_IMPORTED_MODULE_0__.appendChild)((0,_global__WEBPACK_IMPORTED_MODULE_0__.$)(\".root\"), (0,_Component_Navbar_index__WEBPACK_IMPORTED_MODULE_1__.Navbar)((_a = Boolean(localStorage.getItem(\"isSignUp\"))) !== null && _a !== void 0 ? _a : false));\n}\nApp();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/Component/Navbar/Navbar.scss":
/*!******************************************!*\
  !*** ./src/Component/Navbar/Navbar.scss ***!
  \******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/Component/Navbar/Navbar.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;