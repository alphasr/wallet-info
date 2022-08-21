"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/native";
exports.ids = ["pages/native"];
exports.modules = {

/***/ "./pages/native.jsx":
/*!**************************!*\
  !*** ./pages/native.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\stuff\\\\crypto\\\\wallet-info\\\\pages\\\\native.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\stuff\\\\crypto\\\\wallet-info\\\\pages\\\\native.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\stuff\\\\crypto\\\\wallet-info\\\\pages\\\\native.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x9e8f0f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f\";\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.account.getNativeBalance({\n        address\n    });\n    return {\n        props: {\n            address,\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRTlCLFNBQVNDLE1BQU0sQ0FBQyxFQUFFQyxhQUFhLEdBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQzFDLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTs7b0JBQUMsVUFBUTtvQkFBQ0YsT0FBTzs7Ozs7O29CQUFNOzBCQUMxQiw4REFBQ0UsSUFBRTs7b0JBQUMsa0JBQWdCO29CQUFDSCxhQUFhO29CQUFDLE1BQUk7Ozs7OztvQkFBSzs7Ozs7O1lBQ3hDLENBQ047Q0FDSDtBQUVNLGVBQWVJLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFDaEQsTUFBTVAsb0RBQWEsQ0FBQztRQUFFUyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0tBQUUsQ0FBQyxDQUFDO0lBRTdELE1BQU1ULE9BQU8sR0FBRyw0Q0FBNEM7SUFFNUQsTUFBTUQsYUFBYSxHQUFHLE1BQU1GLDhFQUF1QyxDQUFDO1FBQ2xFRyxPQUFPO0tBQ1IsQ0FBQztJQUVGLE9BQU87UUFDTGEsS0FBSyxFQUFFO1lBQUViLE9BQU87WUFBRUQsYUFBYSxFQUFFQSxhQUFhLENBQUNlLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLO1NBQUU7S0FDdEUsQ0FBQztDQUNIO0FBRUQsaUVBQWVsQixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsZXQtaW5mby8uL3BhZ2VzL25hdGl2ZS5qc3g/ZTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tIFwibW9yYWxpc1wiO1xyXG5cclxuZnVuY3Rpb24gTmF0aXZlKHsgbmF0aXZlQmFsYW5jZSwgYWRkcmVzcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMz5XYWxsZXQ6IHthZGRyZXNzfTwvaDM+XHJcbiAgICAgIDxoMz5OYXRpdmUgQmFsYW5jZToge25hdGl2ZUJhbGFuY2V9IEVUSDwvaDM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBcIjB4OWU4ZjBmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZlwiO1xyXG5cclxuICBjb25zdCBuYXRpdmVCYWxhbmNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYWNjb3VudC5nZXROYXRpdmVCYWxhbmNlKHtcclxuICAgIGFkZHJlc3MsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhZGRyZXNzLCBuYXRpdmVCYWxhbmNlOiBuYXRpdmVCYWxhbmNlLnJlc3VsdC5iYWxhbmNlLmV0aGVyIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlO1xyXG4iXSwibmFtZXMiOlsiTW9yYWxpcyIsIk5hdGl2ZSIsIm5hdGl2ZUJhbGFuY2UiLCJhZGRyZXNzIiwiZGl2IiwiaDMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiRXZtQXBpIiwiYWNjb3VudCIsImdldE5hdGl2ZUJhbGFuY2UiLCJwcm9wcyIsInJlc3VsdCIsImJhbGFuY2UiLCJldGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/native.jsx"));
module.exports = __webpack_exports__;

})();