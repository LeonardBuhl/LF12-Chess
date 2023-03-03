// Class for creating and changing the virtual board that keeps track of the pieces

import { Bishop } from "./Bishop";
import { Pawn } from "./Pawn";
import { Knight } from "./Knight";
import { King } from "./King";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

class Board {
    constructor(board) {
        // calls initializeBoard() when a new object instance is created (Singleton)
        if (typeof board !== "undefined") {
            this.board = board;
        }
        else {
            this.initializeBoard();
        }
    };

    // initializes the board with an 8*8 grid and places the pieces
    initializeBoard() {
        this.board = [];
        for (let i = 0; i < 8; i++) {
            this.board.push([]);
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = this.placePieces(i, j);
            }
        }
    };

    placePieces(i, j) {
        let position = [i, j];
        // White Pawns
        if (i === 1) {
            return new Pawn(position, "white", "../images/wpawn", "wpawn");
        }
        // Black Pawns
        else if (i === 6) {
            return new Pawn(position, "black", "../images/bpawn", "bpawn");
        }
        // White Knights (Springer)
        else if (i === 0 && j === 1 || i === 0 && j === 6) {
            return new Knight(position, "white", "../images/wknight", "wknight");
        }
        // Black Knights (Springer)
        else if (i === 7 && j === 1 || i === 7 && j === 6) {
            return new Knight(position, "black", "../images/bknight", "bknight");
        }
        // White Bishops (Läufer)
        else if (i === 0 && j === 2 || i === 0 && j === 5) {
            return new Bishop(position, "white", "../images/wbishop", "wbishop");
        }
        // Black Bishops (Läufer)
        else if (i === 7 && j === 2 || i === 7 && j === 5) {
            return new Bishop(position, "black", "../images/bbishop", "bbishop");
        }
        // White Queen
        else if (i === 0 && j === 3) {
            return new Queen(position, "white", "../images/wqueen", "wqueen");
        }
        // Black Queen
        else if (i === 7 && j === 3) {
            return new Queen(position, "black", "../images/bqueen", "bqueen");
        }
        // White King
        else if (i === 0 && j === 4) {
            return new King(position, "white", "../images/wking", "wking");
        }
        // Black King
        else if (i === 7 && j === 4) {
            return new King(position, "black", "../images/bking", "bking");
        }
        // White Rooks (Türme)
        else if (i === 0 && j === 0 || i === 0 && j === 7) {
            return new Rook(position, "white", "../images/wrook", "wrook");
        }
        // Black Rooks (Türme)
        else if (i === 7 && j === 0 || i === 7 && j === 7) {
            return new Rook(position, "black", "../images/brook", "brook");
        }
        else {
            return null;
        }
    };

    // returns true or false if the given position is occupied by another Piece
    isOccupying(i, j) {
        if (this.board[i][j] !== null) {
            return true
        }
        else {
            return false
        }
    };

    getOccupyingPiece(i, j) {
        return this.board[i][j]
    };

    // Move object to the new position
    updatePosition(startRow, startCell, endRow, endCell) {
        // How to move pieces:
        // if newPosition IS IN piece.getLegalMoves AND IS NOT currentPosition AND IS NOT (isOccupying AND getOccupyingPiece.getColor != piece.getColor)

        // save the spliced object in a temp variable
        const temp = this.board[startRow].splice(startCell, 1, null);

        // update currentPosition parameter of the object (Own method?)
        temp[0].currentPosition = [endRow, endCell];

        // insert at desired position
        this.board[endRow].splice(endCell, 1, temp[0]);
    };

}

export { Board };