import { Display } from "./modules/Display";
import { Board } from "./modules/Board";
import {Piece} from "./modules/Piece";
import { Queen } from "./modules/Queen";

// variables for dom access
const table = document.querySelector(".table");

// Initialize the board instance
const board = new Board();
    // 1. Event Listener triggers on click on a Piece (First click) and highlight Cell and Legal Moveset
    // 2. Event Listener gets position of target Field (second click)
    // 3. validates Move
    // 4. updates Position on virtual Board
    // 5. rerenders Gameboard

// Test with piece
const piece = new Piece([2, 3]);
// console.log(piece.getMovesSouthEast())

// Test with queen
const queen = new Queen([2, 3]);
// console.log(queen.getLegalMoves());

// Log display and initialize Display instance
const display = new Display(board);
display.render(document);



// test Event Listener for later use
let turn = "white";
let pieceClicked = false;
let movesetVisualized = false;
let initialPosition = [];
let destination = [];


// DIFFERENT Event Listeners for White and Black necessary (Depending on the turn the event Listeners will get created or removed)
// Or is it necessary to create EVent Listeners for all Pieces?
table.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        if (movesetVisualized === true) {
            display.clearMove();
            movesetVisualized = false;
        }
        initialPosition = [Number(e.target.parentNode.parentNode.id), Number(e.target.parentNode.id)];
        console.log("first click", initialPosition);
        // get legal Moveset of selected Piece and display it
        display.highlightMoveset(Number(e.target.parentNode.parentNode.id), Number(e.target.parentNode.id));
        movesetVisualized = true;
        pieceClicked = true;
    }
    else if (e.target.tagName === "TD" && pieceClicked) {
        destination = [Number(e.target.parentNode.id), Number(e.target.id)]
        console.log("2nd click", initialPosition, destination);
        // Validate Move
        // Updates Position on virtual Board
        board.updatePosition(initialPosition[0], initialPosition[1], destination[0], destination[1]);
        // Rerenders Gameboard
        display.rerender();
        pieceClicked = false;
    }
});