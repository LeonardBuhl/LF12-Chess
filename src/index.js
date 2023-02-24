import { Display } from "./modules/Display";
import { Board } from "./modules/Board";

// variables for dom access
const table = document.querySelector(".table");

// Initialize the board instance
const board = new Board();
    // 1. Event Listener triggers on click on a Piece (First click) and highlight Cell and Legal Moveset
    // 2. Event Listener gets position of target Field (second click)
    // 3. validates Move
    // 4. updates Position on virtual Board
    // 5. rerenders Gameboard


// Log display and initialize Display instance
const display = new Display(board);
display.render(document);



// test Event Listener for later use
let pieceClicked = false;
let initialPosition = [];
let destination = [];


// PROBLEM: there are 2 board instances and I only want one (Singleton)
table.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        initialPosition = [e.target.parentNode.parentNode.id, e.target.parentNode.id];
        console.log("first click", initialPosition);
        pieceClicked = true;
        // Highlight Cell and Legal Moveset
    }
    else if (e.target.tagName === "TD" && pieceClicked) {
        destination = [e.target.parentNode.id, e.target.id]
        console.log("2nd click", initialPosition, destination);
        // Validate Move
        // Updates Position on virtual Board
        board.updatePosition(initialPosition[0], initialPosition[1], destination[0], destination[1]);
        // Rerenders Gameboard
        display.rerender();
        pieceClicked = false;
    }
});