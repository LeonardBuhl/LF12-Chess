import { Display } from "./modules/Display";

// variables for dom access
const table = document.querySelector(".table");
const row = document.querySelectorAll("tr");
const cell = document.querySelectorAll("td");

// create new object instances
const display = new Display();
// console.log(display)
// console.log(display.virtualBoard)
// console.log(display.virtualBoard.board[1][0])
display.render(document);


// const board = new Board()
// console.log(board.board[1][0]);
// console.log(board)






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