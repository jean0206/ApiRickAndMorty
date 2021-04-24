module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/characters/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/characters/Character.module.css":
/*!***********************************************!*\
  !*** ./pages/characters/Character.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"characterContainer": "Character_characterContainer__n6Uze",
	"header": "Character_header__6GUjr",
	"profilePhoto": "Character_profilePhoto__A5uMX",
	"headerImage": "Character_headerImage__1HjeH"
};


/***/ }),

/***/ "./pages/characters/[id].js":
/*!**********************************!*\
  !*** ./pages/characters/[id].js ***!
  \**********************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Character_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character.module.css */ "./pages/characters/Character.module.css");
/* harmony import */ var _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Character_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jan carlos\\Documents\\2021\\NextJs\\RickAndMorty\\pages\\characters\\[id].js";

function Character({
  character
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.characterContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profilePhoto,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: character.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), character.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: character.location.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Character_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsInformation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  console.log(characters);
  const paths = characters['results'].map(character => ({
    params: {
      id: character.id.toString()
    }
  }));
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  // params contains the character `id`.
  // If the route is like /characters/1, then params.id is 1
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  const character = await res.json(); // Pass character data to the page via props

  return {
    props: {
      character
    }
  };
}

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhcmFjdGVycy9DaGFyYWN0ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXJzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJjaGFyYWN0ZXIiLCJzdHlsZXMiLCJjaGFyYWN0ZXJDb250YWluZXIiLCJoZWFkZXIiLCJoZWFkZXJJbWFnZSIsInByb2ZpbGVQaG90byIsImltYWdlIiwibmFtZSIsImxvY2F0aW9uIiwiY2FyZHNJbmZvcm1hdGlvbiIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJjaGFyYWN0ZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUI7QUFBQ0M7QUFBRCxDQUFuQixFQUFnQztBQUU3QyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNERBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELDREQUFNLENBQUNFLE1BQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRiw0REFBTSxDQUFDRyxXQUF2QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBRUgsNERBQU0sQ0FBQ0csV0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUVILDREQUFNLENBQUNHLFdBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUk7QUFBSyxlQUFTLEVBQUVILDREQUFNLENBQUNJLFlBQXZCO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUVMLFNBQVMsQ0FBQ007QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUtOLFNBQVMsQ0FBQ08sSUFGZixlQUdJO0FBQUEsa0JBQUlQLFNBQVMsQ0FBQ1EsUUFBVixDQUFtQkQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBaUJJO0FBQUssZUFBUyxFQUFFTiw0REFBTSxDQUFDUTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDJDQUFELENBQXZCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF6QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUVBLFFBQU1JLEtBQUssR0FBR0osVUFBVSxDQUFDLFNBQUQsQ0FBVixDQUFzQkssR0FBdEIsQ0FBMEJsQixTQUFTLEtBQUs7QUFDcERtQixVQUFNLEVBQUU7QUFBRUMsUUFBRSxFQUFFcEIsU0FBUyxDQUFDb0IsRUFBVixDQUFhQyxRQUFiO0FBQU47QUFENEMsR0FBTCxDQUFuQyxDQUFkO0FBSUEsU0FBTztBQUNMSixTQURLO0FBRUxLLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUo7QUFBRixDQUE5QixFQUEwQztBQUMvQztBQUNBO0FBQ0EsUUFBTVIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIsNkNBQTRDTyxNQUFNLENBQUNDLEVBQUcsRUFEbEMsQ0FBdkI7QUFHQSxRQUFNcEIsU0FBUyxHQUFHLE1BQU1XLEdBQUcsQ0FBQ0csSUFBSixFQUF4QixDQU4rQyxDQVEvQzs7QUFDQSxTQUFPO0FBQUVVLFNBQUssRUFBRTtBQUFFeEI7QUFBRjtBQUFULEdBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3RERCxrRCIsImZpbGUiOiJwYWdlcy9jaGFyYWN0ZXJzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoYXJhY3RlcnMvW2lkXS5qc1wiKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYXJhY3RlckNvbnRhaW5lclwiOiBcIkNoYXJhY3Rlcl9jaGFyYWN0ZXJDb250YWluZXJfX242VXplXCIsXG5cdFwiaGVhZGVyXCI6IFwiQ2hhcmFjdGVyX2hlYWRlcl9fNkdVanJcIixcblx0XCJwcm9maWxlUGhvdG9cIjogXCJDaGFyYWN0ZXJfcHJvZmlsZVBob3RvX19BNXVNWFwiLFxuXHRcImhlYWRlckltYWdlXCI6IFwiQ2hhcmFjdGVyX2hlYWRlckltYWdlX18xSGplSFwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NoYXJhY3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcmFjdGVyKHtjaGFyYWN0ZXJ9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJhY3RlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3Byb3h5L3ZYVV9uSXBTZVlaSDRrVU9uVTVQN19VZmxQLWZQSjBhX1ZGOEVxQk1uM0wyNU5sTHkxZTFUMU4zdzNMbkhJRXRqS2steDVzY0ZGeF91VnhXVDFkZWJwYXdSM1pLOFkwekhjRGdSVzF4ekliZy02MHhvUjVobEdtVWpUaExYNG54RjFIbjJTYVlOMlBmZGxTQ2dXUVdKSm9RRWluSTRYdzBjcGs3d1lmQzRIQUh1Y1ZUT1Rrb3RfWm5OelgtdjR2RF9zRUdoZjFieUVqZlFIUDJIdEJzRWJzNEhrT1RpcTFfbzBtNSd9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS92WFVfbklwU2VZWkg0a1VPblU1UDdfVWZsUC1mUEowYV9WRjhFcUJNbjNMMjVObEx5MWUxVDFOM3czTG5ISUV0aktrLXg1c2NGRnhfdVZ4V1QxZGVicGF3UjNaSzhZMHpIY0RnUlcxeHpJYmctNjB4b1I1aGxHbVVqVGhMWDRueEYxSG4yU2FZTjJQZmRsU0NnV1FXSkpvUUVpbkk0WHcwY3BrN3dZZkM0SEFIdWNWVE9Ua290X1puTnpYLXY0dkRfc0VHaGYxYnlFamZRSFAySHRCc0ViczRIa09UaXExX28wbTUnfT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vcHJveHkvdlhVX25JcFNlWVpINGtVT25VNVA3X1VmbFAtZlBKMGFfVkY4RXFCTW4zTDI1TmxMeTFlMVQxTjN3M0xuSElFdGpLay14NXNjRkZ4X3VWeFdUMWRlYnBhd1IzWks4WTB6SGNEZ1JXMXh6SWJnLTYweG9SNWhsR21ValRoTFg0bnhGMUhuMlNhWU4yUGZkbFNDZ1dRV0pKb1FFaW5JNFh3MGNwazd3WWZDNEhBSHVjVlRPVGtvdF9abk56WC12NHZEX3NFR2hmMWJ5RWpmUUhQMkh0QnNFYnM0SGtPVGlxMV9vMG01J30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBob3RvfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlci5pbWFnZX0vPlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgIDxhPntjaGFyYWN0ZXIubG9jYXRpb24ubmFtZX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc0luZm9ybWF0aW9ufT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyXCIpO1xyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGNoYXJhY3RlcnMpXHJcblxyXG4gIGNvbnN0IHBhdGhzID0gY2hhcmFjdGVyc1sncmVzdWx0cyddLm1hcChjaGFyYWN0ZXIgPT4gKHtcclxuICAgIHBhcmFtczogeyBpZDogY2hhcmFjdGVyLmlkLnRvU3RyaW5nKCkgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gcGFyYW1zIGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXIgYGlkYC5cclxuICAvLyBJZiB0aGUgcm91dGUgaXMgbGlrZSAvY2hhcmFjdGVycy8xLCB0aGVuIHBhcmFtcy5pZCBpcyAxXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtwYXJhbXMuaWR9YFxyXG4gICk7XHJcbiAgY29uc3QgY2hhcmFjdGVyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gUGFzcyBjaGFyYWN0ZXIgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBjaGFyYWN0ZXIgfSB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9