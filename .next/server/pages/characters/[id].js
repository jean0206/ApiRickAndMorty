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

/***/ "./components/CardInformation.js":
/*!***************************************!*\
  !*** ./components/CardInformation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardInformation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardInformation.module.css */ "./components/CardInformation.module.css");
/* harmony import */ var _CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jan carlos\\Documents\\2021\\NextJs\\RickAndMorty\\components\\CardInformation.js";


function CardInformation(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CardInformation,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleContainer,
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _CardInformation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentCard,
      children: props.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/CardInformation.module.css":
/*!***********************************************!*\
  !*** ./components/CardInformation.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CardInformation": "CardInformation_CardInformation__Zh-LS",
	"titleContainer": "CardInformation_titleContainer__2fURy",
	"contentCard": "CardInformation_contentCard__3uVDf"
};


/***/ }),

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
	"cardsInformation": "Character_cardsInformation__33i3J",
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
/* harmony import */ var _components_CardInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CardInformation */ "./components/CardInformation.js");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkSW5mb3JtYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFyYWN0ZXJzL0NoYXJhY3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3RlcnMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2FyZEluZm9ybWF0aW9uIiwicHJvcHMiLCJzdHlsZXMiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwiY29udGVudENhcmQiLCJtZXNzYWdlIiwiQ2hhcmFjdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyQ29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGVySW1hZ2UiLCJwcm9maWxlUGhvdG8iLCJpbWFnZSIsIm5hbWUiLCJsb2NhdGlvbiIsImNhcmRzSW5mb3JtYXRpb24iLCJnZW5kZXIiLCJ0eXBlIiwic3RhdHVzIiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsImNoYXJhY3RlcnMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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Y0FGSixlQUdJLHFFQUFDLG1FQUFEO0FBQWlCLGFBQUssRUFBQyxRQUF2QjtBQUFnQyxlQUFPLEVBQUVWLFNBQVMsQ0FBQ1c7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDtBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQywyQ0FBRCxDQUF2QjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBekI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7QUFFQSxRQUFNSSxLQUFLLEdBQUdKLFVBQVUsQ0FBQyxTQUFELENBQVYsQ0FBc0JLLEdBQXRCLENBQTBCcEIsU0FBUyxLQUFLO0FBQ3BEcUIsVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRXRCLFNBQVMsQ0FBQ3NCLEVBQVYsQ0FBYUMsUUFBYjtBQUFOO0FBRDRDLEdBQUwsQ0FBbkMsQ0FBZDtBQUlBLFNBQU87QUFDTEosU0FESztBQUVMSyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVKO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0M7QUFDQTtBQUNBLFFBQU1SLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLDZDQUE0Q08sTUFBTSxDQUFDQyxFQUFHLEVBRGxDLENBQXZCO0FBR0EsUUFBTXRCLFNBQVMsR0FBRyxNQUFNYSxHQUFHLENBQUNHLElBQUosRUFBeEIsQ0FOK0MsQ0FRL0M7O0FBQ0EsU0FBTztBQUFFdkIsU0FBSyxFQUFFO0FBQUVPO0FBQUY7QUFBVCxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN6REQsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY2hhcmFjdGVycy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGFyYWN0ZXJzL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkSW5mb3JtYXRpb24ubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRJbmZvcm1hdGlvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcmRJbmZvcm1hdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q2FyZH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2FyZEluZm9ybWF0aW9uXCI6IFwiQ2FyZEluZm9ybWF0aW9uX0NhcmRJbmZvcm1hdGlvbl9fWmgtTFNcIixcblx0XCJ0aXRsZUNvbnRhaW5lclwiOiBcIkNhcmRJbmZvcm1hdGlvbl90aXRsZUNvbnRhaW5lcl9fMmZVUnlcIixcblx0XCJjb250ZW50Q2FyZFwiOiBcIkNhcmRJbmZvcm1hdGlvbl9jb250ZW50Q2FyZF9fM3VWRGZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYXJhY3RlckNvbnRhaW5lclwiOiBcIkNoYXJhY3Rlcl9jaGFyYWN0ZXJDb250YWluZXJfX242VXplXCIsXG5cdFwiaGVhZGVyXCI6IFwiQ2hhcmFjdGVyX2hlYWRlcl9fNkdVanJcIixcblx0XCJjYXJkc0luZm9ybWF0aW9uXCI6IFwiQ2hhcmFjdGVyX2NhcmRzSW5mb3JtYXRpb25fXzMzaTNKXCIsXG5cdFwicHJvZmlsZVBob3RvXCI6IFwiQ2hhcmFjdGVyX3Byb2ZpbGVQaG90b19fQTV1TVhcIixcblx0XCJoZWFkZXJJbWFnZVwiOiBcIkNoYXJhY3Rlcl9oZWFkZXJJbWFnZV9fMUhqZUhcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGFyYWN0ZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IENhcmRJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRJbmZvcm1hdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3Rlcih7Y2hhcmFjdGVyfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vd3d3Lm1vci5iby93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9ybS5wbmcnfT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL3d3dy5tb3IuYm8vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcm0ucG5nJ30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly93d3cubW9yLmJvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3JtLnBuZyd9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaG90b30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyYWN0ZXIuaW1hZ2V9Lz5cclxuICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICA8YT57Y2hhcmFjdGVyLmxvY2F0aW9uLm5hbWV9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNJbmZvcm1hdGlvbn0+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mb3JtYXRpb24gdGl0bGU9XCJHZW5kZXJcIiBtZXNzYWdlPXtjaGFyYWN0ZXIuZ2VuZGVyfS8+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mb3JtYXRpb24gdGl0bGU9XCJUeXBlXCIgbWVzc2FnZT17Y2hhcmFjdGVyLnR5cGV9Lz5cclxuICAgICAgICAgICAgPENhcmRJbmZvcm1hdGlvbiB0aXRsZT1cIlN0YXR1c1wiIG1lc3NhZ2U9e2NoYXJhY3Rlci5zdGF0dXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIik7XHJcbiAgY29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coY2hhcmFjdGVycylcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBjaGFyYWN0ZXJzWydyZXN1bHRzJ10ubWFwKGNoYXJhY3RlciA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBjaGFyYWN0ZXIuaWQudG9TdHJpbmcoKSB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBwYXJhbXMgY29udGFpbnMgdGhlIGNoYXJhY3RlciBgaWRgLlxyXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBsaWtlIC9jaGFyYWN0ZXJzLzEsIHRoZW4gcGFyYW1zLmlkIGlzIDFcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke3BhcmFtcy5pZH1gXHJcbiAgKTtcclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAvLyBQYXNzIGNoYXJhY3RlciBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGNoYXJhY3RlciB9IH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=