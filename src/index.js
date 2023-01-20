import { createBoard, initializePieces } from "./modules/Board";
import { Piece } from "./modules/Piece";

// variables fro dom access
const table = document.querySelector(".table");
const row = document.querySelectorAll("tr");
const cell = document.querySelectorAll("td");

createBoard(document);
initializePieces(document);

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

// Test piece
const piece = new Piece(table.querySelectorAll("tr")[5].querySelectorAll("td")[5], "white", "../src/images/wrook.png");
piece.createPiece();
console.log(piece.currentPosition);


// Get all Rows: document.querySelector(".table").querySelectorAll("tr");
// Get all Cells in Row x: document.querySelector(".table").querySelectorAll("tr")[index].querySelectorAll("td");
// Get specific Cell in Row: document.querySelector(".table").querySelectorAll("tr")[index].querySelectorAll("td")[index];

// Pawn Movement
// --> Only forward one field (Two fields possible on first move)

// Conclusion --> Handle board movements in 2d array in the background (Board.js)
//            --> Render board + update board (Display.js)