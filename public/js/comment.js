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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/comment.js":
/*!*********************************!*\
  !*** ./resources/js/comment.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const COMMENTCONTAINER = document.getElementById('commentContainer');
// const COMMENT = document.getElementById('comment')
// // BOUTON AFFICHER INPUT
// COMMENT.addEventListener('click', function(e) {
// let inputComment = document.createElement("input");
// let btnComment = document.createElement("button")
// let closeComment = document.createElement("button");
// // Place holder de l'input
// inputComment.name ="description"
// inputComment.placeholder = "Ajouter un commentaire";
// //Contenu bouton Add
// btnComment.innerText = "Valider"
// // Contenu du bouton close
// closeComment.innerText = 'x'
// COMMENTCONTAINER.insertAdjacentElement('beforeend', inputComment);
// COMMENTCONTAINER.insertAdjacentElement('beforeend', btnComment);
// COMMENTCONTAINER.insertAdjacentElement('beforeend', closeComment);
// COMMENT.style.display = "none";
// // CLOSE BTN
// closeComment.addEventListener("click", function(e){
//     inputComment.remove();
//     btnComment.remove();
//     closeComment.remove();
//     COMMENT.style.display = "initial";
// });
// // Ajouter un commentaire
// btnComment.addEventListener("click" , async function(e){
//     let url = document.location.origin + "/comment/store/" + 4;
//     let description = inputComment.value;
//     let token = document
//         .querySelector('meta[name="csrf-token"]')
//         .getAttribute("content");
//     let body = {
//         description: description,
//         ticket_id: 4,
//         user_id: user.id,
//     };
//     //Corps de la requete et body
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-Requested-With": "XMLHttpRequest",
//             "X-CSRF-TOKEN": token
//         },
//         body: JSON.stringify(body)
//     };
//     try {
//         const response = await fetch(url, options);
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// })
// });
// let modalComment = document.getElementById("modalComment");
// let commentBackground = document.getElementById("commentBackground");
// let boxTicket = document.querySelector(".boxTicket")
// let closeModalComment = document.getElementById("closeModalComment");
// boxTicket.addEventListener("click", function(e){
// commentBackground.style.display = "block"
// modalComment.style.display = "block"
// closeModalComment.addEventListener("click", function(e){
//     commentBackground.remove();
//     modalComment.remove();
//  })
// })

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./resources/js/comment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/taskflow.webo/resources/js/comment.js */"./resources/js/comment.js");


/***/ })

/******/ });