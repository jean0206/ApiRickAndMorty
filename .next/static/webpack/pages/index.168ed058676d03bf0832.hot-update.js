webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./components/Card.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Index_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jan carlos\\Documents\\2021\\NextJs\\RickAndMorty\\pages\\index.js",
    _this = undefined;





var Index = function Index(_ref) {
  var characters = _ref.characters;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: function onClick() {
      return console.log('Hola');
    },
    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.index_container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title_container,
      children: "Personajes Rick And Morty"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.characters_container,
      children: characters === null ? 'Not Found' : characters.map(function (character) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
          image: character.image,
          name: character.name,
          status: character.status,
          id: character.id
        }, character.id, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGFyYWN0ZXJzIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImluZGV4X2NvbnRhaW5lciIsInRpdGxlX2NvbnRhaW5lciIsImNoYXJhY3RlcnNfY29udGFpbmVyIiwibWFwIiwiY2hhcmFjdGVyIiwiaW1hZ2UiLCJuYW1lIiwic3RhdHVzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDaEMsc0JBQ0U7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBQUo7QUFBQSxLQUFkO0FBQXVDLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsZUFBekQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFFRix3REFBTSxDQUFDRyxvQkFBdkI7QUFBQSxnQkFDR04sVUFBVSxLQUFLLElBQWYsR0FDRyxXQURILEdBRUdBLFVBQVUsQ0FBQ08sR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSw0QkFDYixxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBRUEsU0FBUyxDQUFDQyxLQURuQjtBQUVFLGNBQUksRUFBRUQsU0FBUyxDQUFDRSxJQUZsQjtBQUdFLGdCQUFNLEVBQUVGLFNBQVMsQ0FBQ0csTUFIcEI7QUFJRSxZQUFFLEVBQUVILFNBQVMsQ0FBQ0k7QUFKaEIsV0FLT0osU0FBUyxDQUFDSSxFQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZjtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXRCRDs7S0FBTWIsSzs7QUE0Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2OGVkMDU4Njc2ZDAzYmYwODMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coJ0hvbGEnKX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXhfY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9jb250YWluZXJ9PlxyXG5cclxuICAgICAgUGVyc29uYWplcyBSaWNrIEFuZCBNb3J0eVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAge2NoYXJhY3RlcnMgPT09IG51bGxcclxuICAgICAgICAgID8gJ05vdCBGb3VuZCdcclxuICAgICAgICAgIDogY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17Y2hhcmFjdGVyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBpZD17Y2hhcmFjdGVyLmlkfVxyXG4gICAgICAgICAgICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XHJcbiAgICAgICAgICAgICAgPjwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9cIik7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGNoYXJhY3RlcnMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzW1wicmVzdWx0c1wiXSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBjaGFyYWN0ZXJzOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9