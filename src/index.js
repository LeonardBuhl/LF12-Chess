import { createBoard } from "./modules/Board";
import { Piece } from "./modules/Piece";

createBoard(document);

const x = document.querySelector(".table").querySelector("td");
const nice = new Piece(x, "white", "../src/images/wrook.png");
nice.createPiece();

// let img = document.createElement("img");
// img.src = "../src/images/wrook.png"
// document.querySelector(".table").querySelector("td").appendChild(img);


// Get all Rows: document.querySelector(".table").querySelectorAll("tr");
// Get all Cells in Row x: document.querySelector(".table").querySelectorAll("tr")[index].querySelectorAll("td");
// Get specific Cell in Row: document.querySelector(".table").querySelectorAll("tr").querySelectorAll("td")[index];

// Pawn Movement
// --> Only forward one field (Two fields possible on first move)