/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/board.js":
/*!*******************************!*\
  !*** ./resources/js/board.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Applications/MAMP/htdocs/taskflow/resources/js/board.js: Unexpected token (246:0)\n\n\u001b[0m \u001b[90m 244 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 245 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 246 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 247 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 248 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 249 |\u001b[39m \u001b[33m>>>\u001b[39m\u001b[33m>>>\u001b[39m\u001b[33m>\u001b[39m \u001b[35m0\u001b[39ma53c3d13a8d24febec64a1183a444257a11d03d\u001b[0m\n    at Parser._raise (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.unexpected (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:9736:16)\n    at Parser.parseExprAtom (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:11132:20)\n    at Parser.parseExprSubscripts (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10709:23)\n    at Parser.parseUpdate (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10689:21)\n    at Parser.parseMaybeUnary (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10667:23)\n    at Parser.parseExprOps (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10524:23)\n    at Parser.parseMaybeConditional (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10498:23)\n    at Parser.parseMaybeAssign (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10461:21)\n    at Parser.parseExpressionBase (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10406:23)\n    at /Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10400:39\n    at Parser.allowInAnd (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12099:16)\n    at Parser.parseExpression (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:10400:17)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12391:23)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12260:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12846:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12837:10)\n    at Parser.parseProgram (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12191:10)\n    at Parser.parseTopLevel (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:12182:25)\n    at Parser.parse (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:13893:10)\n    at parse (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/parser/lib/index.js:13945:38)\n    at parser (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/core/lib/transformation/normalize-file.js:55:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Applications/MAMP/htdocs/taskflow/node_modules/@babel/core/lib/transform.js:19:41)\n    at transform.next (<anonymous>)\n    at step (/Applications/MAMP/htdocs/taskflow/node_modules/gensync/index.js:261:32)\n    at /Applications/MAMP/htdocs/taskflow/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Applications/MAMP/htdocs/taskflow/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./resources/js/board.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/taskflow/resources/js/board.js */"./resources/js/board.js");


/***/ })

/******/ });