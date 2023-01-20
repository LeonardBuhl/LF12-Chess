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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Board */ \"./src/modules/Board.js\");\n/* harmony import */ var _modules_Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Display */ \"./src/modules/Display.js\");\n\n\n\n// variables for dom access\nconst table = document.querySelector(\".table\");\nconst row = document.querySelectorAll(\"tr\");\nconst cell = document.querySelectorAll(\"td\");\n\n// create new object instances\nconst display = new _modules_Display__WEBPACK_IMPORTED_MODULE_1__.Display();\nconst board = new _modules_Board__WEBPACK_IMPORTED_MODULE_0__.Board();\n\n// Access object on specific cell\nconsole.log(board.board[1][0]);\nconsole.log(board)\n\ndisplay.render(document);\n\n\n\n\n\n\n\n// test Event Listener for later use\ntable.addEventListener(\"click\", (e) => {\n    if (e.target.className === \"img\") {\n        console.log(e);\n        let selectedPiece = e.target.offsetParent\n        console.log(selectedPiece)\n        // show legal moveset of piece --> depending on class (pawn, king, usw.)\n        // user clicks on highlighted cell\n        // piece.movePiece(to highlighted cell)\n    }\n});\n\n//# sourceURL=webpack://LF12-Chess/./src/index.js?");

/***/ }),

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/modules/Piece.js\");\n// Class for creating and changing the virtual board that keeps track of the pieces\n\n\n\nclass Board {\n    constructor(board) {\n        // calls initializeBoard() when a new object instance is created\n        if (typeof board !== \"undefined\") {\n            this.board = board;\n        }\n        else {\n            this.initializeBoard();\n        }\n    };\n\n    initializeBoard() {\n        this.board = [];\n        for (let i = 0; i < 8; i++) {\n            this.board.push([]);\n            for (let j = 0; j < 8; j++) {\n                this.board[i][j] = this.placePieces(i, j);\n            }\n        }\n    };\n\n    placePieces(i, j) {\n        let position = [i, j];\n        // White Pawns\n        if (i === 1) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wpawn\");\n        }\n        // Black Pawns\n        else if (i === 6) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/bpawn\");\n        }\n        // White Knights (Springer)\n        else if (i === 0 && j === 1 || j === 6) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wknight\");\n        }\n        // Black Knights (Springer)\n        else if (i === 7 && j === 1 || j === 6) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/bknight\");\n        }\n        // White Bishops (Läufer)\n        else if (i === 0 && j === 2 || j === 5) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wbishop\");\n        }\n        // Black Bishops (Läufer)\n        else if (i === 7 && j === 2 || j === 5) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/bbishop\");\n        }\n        // White Queen\n        else if (i === 0 && j === 3) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wqueen\");\n        }\n        // Black Queen\n        else if (i === 7 && j === 3) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/bqueen\");\n        }\n        // White King\n        else if (i === 0 && j === 4) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wking\");\n        }\n        // Black King\n        else if (i === 7 && j === 4) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/bking\");\n        }\n        // White Rooks (Türme)\n        else if (i === 0 && j === 0) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"white\", \"../images/wrook\");\n        }\n        // White Rooks (Türme)\n        else if (i === 0 && j === 0) {\n            return new _Piece__WEBPACK_IMPORTED_MODULE_0__.Piece(position, \"black\", \"../images/brook\");\n        }\n    };\n}\n\n\n\n//# sourceURL=webpack://LF12-Chess/./src/modules/Board.js?");

/***/ }),

/***/ "./src/modules/Display.js":
/*!********************************!*\
  !*** ./src/modules/Display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n// Class for creating and changing the Display the user can see\n\nclass Display {\n    constructor(board) {\n        this.board = board;\n    }\n\n    render(doc) {\n        const board = doc.querySelector(\".table\");\n        // outer loop will create rows\n        for (let i = 0; i < 8; i++) {\n            const row = doc.createElement(\"tr\");\n            row.setAttribute(\"id\", i);\n            for (let j = 0; j < 8; j++) {\n            // inner loop will create cells\n                const cell = doc.createElement(\"td\");\n                cell.setAttribute(\"id\", j);\n                \n                // check if the cell should be colored white or black\n                if((i + j) % 2 === 0) {\n                cell.classList.add(\"white\");\n                row.appendChild(cell);\n                }\n                else {\n                cell.classList.add(\"black\");\n                row.appendChild(cell);\n                }\n            }\n        board.appendChild(row);\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://LF12-Chess/./src/modules/Display.js?");

/***/ }),

/***/ "./src/modules/Piece.js":
/*!******************************!*\
  !*** ./src/modules/Piece.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Piece\": () => (/* binding */ Piece)\n/* harmony export */ });\nclass Piece {\n    constructor(initPosition, color, imgSource) {\n        this.currentPosition = initPosition;\n        this.color = color;\n        this.img = document.createElement(\"img\");\n        this.imgSource = imgSource;\n    }\n\n    setPosition(position) {\n        this.currentPosition = position;\n    }\n\n    getPosition() {\n        return this.currentPosition;\n    }\n}\n\n\n\n//# sourceURL=webpack://LF12-Chess/./src/modules/Piece.js?");

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