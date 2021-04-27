webpackHotUpdate_N_E("pages/characters/[id]",{

/***/ "./pages/characters/[id].js":
/*!**********************************!*\
  !*** ./pages/characters/[id].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Character_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character.module.css */ "./pages/characters/Character.module.css");
/* harmony import */ var _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Character_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CardInformation */ "./components/CardInformation.js");

var _jsxFileName = "C:\\Users\\jan carlos\\Documents\\2021\\NextJs\\RickAndMorty\\pages\\characters\\[id].js";


var __N_SSG = true;
function Character(_ref) {
  var character = _ref.character;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characterContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profilePhoto,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: character.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), character.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: character.location.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsInformation,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Gender",
        message: character.gender
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Type",
        message: character.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Status",
        message: character.status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = Character;

var _c;

$RefreshReg$(_c, "Character");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy8uanMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwiY2hhcmFjdGVyQ29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGVySW1hZ2UiLCJwcm9maWxlUGhvdG8iLCJpbWFnZSIsIm5hbWUiLCJsb2NhdGlvbiIsImNhcmRzSW5mb3JtYXRpb24iLCJnZW5kZXIiLCJ0eXBlIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0EsU0FBVCxPQUFnQztBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUU3QyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNERBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELDREQUFNLENBQUNFLE1BQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRiw0REFBTSxDQUFDRyxXQUF2QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBRUgsNERBQU0sQ0FBQ0csV0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUVILDREQUFNLENBQUNHLFdBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUk7QUFBSyxlQUFTLEVBQUVILDREQUFNLENBQUNJLFlBQXZCO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUVMLFNBQVMsQ0FBQ007QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUtOLFNBQVMsQ0FBQ08sSUFGZixlQUdJO0FBQUEsa0JBQUlQLFNBQVMsQ0FBQ1EsUUFBVixDQUFtQkQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBaUJJO0FBQUssZUFBUyxFQUFFTiw0REFBTSxDQUFDUSxnQkFBdkI7QUFBQSw4QkFDSSxxRUFBQyxtRUFBRDtBQUFpQixhQUFLLEVBQUMsUUFBdkI7QUFBZ0MsZUFBTyxFQUFFVCxTQUFTLENBQUNVO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLG1FQUFEO0FBQWlCLGFBQUssRUFBQyxNQUF2QjtBQUE4QixlQUFPLEVBQUVWLFNBQVMsQ0FBQ1c7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMsbUVBQUQ7QUFBaUIsYUFBSyxFQUFDLFFBQXZCO0FBQWdDLGVBQU8sRUFBRVgsU0FBUyxDQUFDWTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEO0tBM0J1QmIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXJzL1tpZF0uNjA0ZGEzOWFjYjJjODE2MzI5YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGFyYWN0ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IENhcmRJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRJbmZvcm1hdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3Rlcih7Y2hhcmFjdGVyfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vd3d3Lm1vci5iby93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9ybS5wbmcnfT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL3d3dy5tb3IuYm8vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcm0ucG5nJ30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly93d3cubW9yLmJvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3JtLnBuZyd9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaG90b30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyYWN0ZXIuaW1hZ2V9Lz5cclxuICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICA8YT57Y2hhcmFjdGVyLmxvY2F0aW9uLm5hbWV9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNJbmZvcm1hdGlvbn0+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mb3JtYXRpb24gdGl0bGU9XCJHZW5kZXJcIiBtZXNzYWdlPXtjaGFyYWN0ZXIuZ2VuZGVyfS8+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mb3JtYXRpb24gdGl0bGU9XCJUeXBlXCIgbWVzc2FnZT17Y2hhcmFjdGVyLnR5cGV9Lz5cclxuICAgICAgICAgICAgPENhcmRJbmZvcm1hdGlvbiB0aXRsZT1cIlN0YXR1c1wiIG1lc3NhZ2U9e2NoYXJhY3Rlci5zdGF0dXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIik7XHJcbiAgY29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coY2hhcmFjdGVycylcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBjaGFyYWN0ZXJzWydyZXN1bHRzJ10ubWFwKGNoYXJhY3RlciA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBjaGFyYWN0ZXIuaWQudG9TdHJpbmcoKSB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBwYXJhbXMgY29udGFpbnMgdGhlIGNoYXJhY3RlciBgaWRgLlxyXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBsaWtlIC9jaGFyYWN0ZXJzLzEsIHRoZW4gcGFyYW1zLmlkIGlzIDFcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke3BhcmFtcy5pZH1gXHJcbiAgKTtcclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAvLyBQYXNzIGNoYXJhY3RlciBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGNoYXJhY3RlciB9IH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==