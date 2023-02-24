import { Display } from "./modules/Display";
import { Board } from "./modules/Board";

// variables for dom access
const table = document.querySelector(".table");
const row = document.querySelectorAll("tr");
const cell = document.querySelectorAll("td");

// Log display
const display = new Display();
display.render(document);


// Log virtual board
// Change currentPosition parameter of this object in this position
// display.virtualBoard.board[0][0].currentPosition[0] = 1;
// console.log(display.virtualBoard.board[0][0].currentPosition);

const board = new Board();
board.updatePosition(0, 0, 2, 0)






// test Event Listener for later use
table.addEventListener("click", (e) => {
    if (e.target.className === "img") {
        console.log(e);
        let selectedPiece = e.target.offsetParent
        console.log(selectedPiece)
        // show legal moveset of piece --> depending on class (pawn, king, usw.)
        // user clicks on highlighted cell
        // piece.movePiece(to highlighted cell)
    }
});