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
exports.id = "pages/api/balance";
exports.ids = ["pages/api/balance"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "(api)/./pages/api/balance.js":
/*!******************************!*\
  !*** ./pages/api/balance.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x9e8f0f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f\";\n    // Promise.all() for receiving data async from two endpoints\n    const [nativeBalance, tokenBalances] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.account.getNativeBalance({\n            address\n        }),\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.account.getTokenBalances({\n            address\n        }), \n    ]);\n    res.status(200).json({\n        // formatting the output\n        nativeBalance: nativeBalance.result.balance.ether,\n        tokenBalances: tokenBalances.result.map((token)=>token.display())\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFsYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFZixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDJEQUEyRDtJQUMzRCxNQUFNSCxvREFBYSxDQUFDO1FBQUVLLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7S0FBRSxDQUFDLENBQUM7SUFFN0QsTUFBTUMsT0FBTyxHQUFHLDRDQUE0QztJQUU1RCw0REFBNEQ7SUFDNUQsTUFBTSxDQUFDQyxhQUFhLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3ZEYiw4RUFBdUMsQ0FBQztZQUFFUyxPQUFPO1NBQUUsQ0FBQztRQUNwRFQsOEVBQXVDLENBQUM7WUFBRVMsT0FBTztTQUFFLENBQUM7S0FDckQsQ0FBQztJQUNGTixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ25CLHdCQUF3QjtRQUN4QlQsYUFBYSxFQUFFQSxhQUFhLENBQUNVLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLO1FBQ2pEWCxhQUFhLEVBQUVBLGFBQWEsQ0FBQ1MsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxHQUFLQSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO0tBQ3BFLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsbGV0LWluZm8vLi9wYWdlcy9hcGkvYmFsYW5jZS5qcz82M2ExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gXCJtb3JhbGlzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy8gcmVhZHMgdGhlIGFwaSBrZXkgZnJvbSAuZW52LmxvY2FsIGFuZCBzdGFydHMgTW9yYWxpcyBTREtcclxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBcIjB4OWU4ZjBmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZjhmOGY4ZlwiO1xyXG5cclxuICAvLyBQcm9taXNlLmFsbCgpIGZvciByZWNlaXZpbmcgZGF0YSBhc3luYyBmcm9tIHR3byBlbmRwb2ludHNcclxuICBjb25zdCBbbmF0aXZlQmFsYW5jZSwgdG9rZW5CYWxhbmNlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBNb3JhbGlzLkV2bUFwaS5hY2NvdW50LmdldE5hdGl2ZUJhbGFuY2UoeyBhZGRyZXNzIH0pLFxyXG4gICAgTW9yYWxpcy5Fdm1BcGkuYWNjb3VudC5nZXRUb2tlbkJhbGFuY2VzKHsgYWRkcmVzcyB9KSxcclxuICBdKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAvLyBmb3JtYXR0aW5nIHRoZSBvdXRwdXRcclxuICAgIG5hdGl2ZUJhbGFuY2U6IG5hdGl2ZUJhbGFuY2UucmVzdWx0LmJhbGFuY2UuZXRoZXIsXHJcbiAgICB0b2tlbkJhbGFuY2VzOiB0b2tlbkJhbGFuY2VzLnJlc3VsdC5tYXAoKHRva2VuKSA9PiB0b2tlbi5kaXNwbGF5KCkpLFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsImFkZHJlc3MiLCJuYXRpdmVCYWxhbmNlIiwidG9rZW5CYWxhbmNlcyIsIlByb21pc2UiLCJhbGwiLCJFdm1BcGkiLCJhY2NvdW50IiwiZ2V0TmF0aXZlQmFsYW5jZSIsImdldFRva2VuQmFsYW5jZXMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiYmFsYW5jZSIsImV0aGVyIiwibWFwIiwidG9rZW4iLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/balance.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/balance.js"));
module.exports = __webpack_exports__;

})();