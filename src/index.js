import { createBoard } from "./modules/Board";
import { Piece } from "./modules/Piece";

// variables fro dom access
const table = document.querySelector(".table");
const row = document.querySelectorAll("tr");
const cell = document.querySelectorAll("td");

createBoard(document);

const position = table.querySelectorAll("td")[3];
const piece = new Piece(position, "white", "../src/images/wrook.png");
console.log(piece)
piece.createPiece();
piece.movePiece(table.querySelectorAll("tr")[1].querySelectorAll("td")[1]);

table.addEventListener("click", (e) => {
    if (e.target.className === "img") {
        //piece.movePiece(getDestination)
    }
});

// let img = document.createElement("img");
// img.src = "../src/images/wrook.png"
// document.querySelector(".table").querySelector("td").appendChild(img);


// Get all Rows: document.querySelector(".table").querySelectorAll("tr");
// Get all Cells in Row x: document.querySelector(".table").querySelectorAll("tr")[index].querySelectorAll("td");
// Get specific Cell in Row: document.querySelector(".table").querySelectorAll("tr")[index].querySelectorAll("td")[index];

// Pawn Movement
// --> Only forward one field (Two fields possible on first move)