webpackHotUpdate_N_E("pages/[vehicle]/[bike]/[persion]",{

/***/ "./pages/[vehicle]/[bike]/[persion].js":
/*!*********************************************!*\
  !*** ./pages/[vehicle]/[bike]/[persion].js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return persion; });\n/* harmony import */ var _home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/admin-pc/Documents/NEXTJS/next-fetch-data/pages/[vehicle]/[bike]/[persion].js\",\n    _s = $RefreshSig$();\n\n\nfunction persion(_ref) {\n  _s();\n\n  var ownerList = _ref.ownerList;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(); // return <pre>{JSON.stringify(ownerList, null, 4)}</pre>;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n    children: \" This is from [vehicle]/[persion]\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}\n\n_s(persion, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\npersion.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, response, ownerList;\n    return _home_admin_pc_Documents_NEXTJS_next_fetch_data_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return fetch(\"https://jsonplaceholder.typicode.com/posts=\" + query.persion + \"&vehicle=\" + query.vehicle);\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            ownerList = _context.sent;\n            return _context.abrupt(\"return\", {\n              ownerList: ownerList\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZlaGljbGVdL1tiaWtlXS9bcGVyc2lvbl0uanM/ZThkNSJdLCJuYW1lcyI6WyJwZXJzaW9uIiwib3duZXJMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJmZXRjaCIsInZlaGljbGUiLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUQ2QyxDQUU3Qzs7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBSnVCSCxPO1VBQ1BHLHFEOzs7QUFLakJILE9BQU8sQ0FBQ0ksZUFBUjtBQUFBLHVUQUEwQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGlCQURnQixHQUNORCxHQURNLENBQ2hCQyxLQURnQjtBQUFBO0FBQUEsbUJBRURDLEtBQUssQ0FDMUIsZ0RBQ0VELEtBQUssQ0FBQ04sT0FEUixHQUVFLFdBRkYsR0FHRU0sS0FBSyxDQUFDRSxPQUprQixDQUZKOztBQUFBO0FBRWxCQyxvQkFGa0I7QUFBQTtBQUFBLG1CQVFBQSxRQUFRLENBQUNDLElBQVQsRUFSQTs7QUFBQTtBQVFsQlQscUJBUmtCO0FBQUEsNkNBU2pCO0FBQUVBLHVCQUFTLEVBQUVBO0FBQWIsYUFUaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9bdmVoaWNsZV0vW2Jpa2VdL1twZXJzaW9uXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzaW9uKHsgb3duZXJMaXN0IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIHJldHVybiA8cHJlPntKU09OLnN0cmluZ2lmeShvd25lckxpc3QsIG51bGwsIDQpfTwvcHJlPjtcbiAgcmV0dXJuIDxoMT4gVGhpcyBpcyBmcm9tIFt2ZWhpY2xlXS9bcGVyc2lvbl08L2gxPjtcbn1cblxucGVyc2lvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IGN0eDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz1cIiArXG4gICAgICBxdWVyeS5wZXJzaW9uICtcbiAgICAgIFwiJnZlaGljbGU9XCIgK1xuICAgICAgcXVlcnkudmVoaWNsZVxuICApO1xuICBjb25zdCBvd25lckxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IG93bmVyTGlzdDogb3duZXJMaXN0IH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[vehicle]/[bike]/[persion].js\n");

/***/ })

})