/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Board */ \"./src/modules/Board.js\");\n/* harmony import */ var _modules_Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Piece */ \"./src/modules/Piece.js\");\n\n\n\n(0,_modules_Board__WEBPACK_IMPORTED_MODULE_0__.createBoard)(document);\n\nconst x = document.querySelector(\".table\").querySelector(\"td\");\nconst nice = new _modules_Piece__WEBPACK_IMPORTED_MODULE_1__.Piece(x, \"white\", \"../src/images/wrook.png\");\nnice.createPiece();\n\n// let img = document.createElement(\"img\");\n// img.src = \"../src/images/wrook.png\"\n// document.querySelector(\".table\").querySelector(\"td\").appendChild(img);\n\n\n// Get all Rows: document.querySelector(\".table\").querySelectorAll(\"tr\");\n// Get all Cells in Row x: document.querySelector(\".table\").querySelectorAll(\"tr\")[index].querySelectorAll(\"td\");\n// Get specific Cell in Row: document.querySelector(\".table\").querySelectorAll(\"tr\").querySelectorAll(\"td\")[index];\n\n// Pawn Movement\n// --> Only forward one field (Two fields possible on first move)\n\n//# sourceURL=webpack://LF12-Chess/./src/index.js?");

/***/ }),

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard)\n/* harmony export */ });\nconst createBoard = (doc) => {\n    const board = doc.querySelector(\".table\");\n    // outer loop will create rows\n    for (let i = 0; i < 8; i++) {\n        const row = doc.createElement(\"tr\");\n        row.setAttribute(\"id\", i);\n        for (let j = 0; j < 8; j++) {\n        // inner loop will create cells\n            const cell = doc.createElement(\"td\");\n            cell.setAttribute(\"id\", j);\n            \n            // check if the cell should be colored white or black\n            if((i + j) % 2 === 0) {\n            cell.classList.add(\"white\");\n            row.appendChild(cell);\n            }\n            else {\n            cell.classList.add(\"black\");\n            row.appendChild(cell);\n            }\n        }\n    board.appendChild(row);\n    }\n}\n\n\n\n//# sourceURL=webpack://LF12-Chess/./src/modules/Board.js?");

/***/ }),

/***/ "./src/modules/Piece.js":
/*!******************************!*\
  !*** ./src/modules/Piece.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Piece\": () => (/* binding */ Piece)\n/* harmony export */ });\nclass Piece {\n    constructor(initPosition, color, img) {\n        this.currentPosition = initPosition;\n        this.color = color;\n        this.img = img;\n    }\n\n    setPosition(position) {\n        this.currentPosition = position;\n    }\n\n    getPosition() {\n        return this.currentPosition;\n    }\n\n    createPiece() {\n        let x = document.createElement(\"img\");\n        x.src = this.img;\n        this.currentPosition.appendChild(x);\n    }\n\n\n\n\n}\n\n\n\n//# sourceURL=webpack://LF12-Chess/./src/modules/Piece.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;