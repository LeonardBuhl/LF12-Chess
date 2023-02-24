// Class for creating and changing the virtual board that keeps track of the pieces

import { Piece } from "./Piece";

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
            return new Piece(position, "white", "../images/wpawn");
        }
        // Black Pawns
        else if (i === 6) {
            return new Piece(position, "black", "../images/bpawn");
        }
        // White Knights (Springer)
        else if (i === 0 && j === 1 || i === 0 && j === 6) {
            return new Piece(position, "white", "../images/wknight");
        }
        // Black Knights (Springer)
        else if (i === 7 && j === 1 || i === 7 && j === 6) {
            return new Piece(position, "black", "../images/bknight");
        }
        // White Bishops (Läufer)
        else if (i === 0 && j === 2 || i === 0 && j === 5) {
            return new Piece(position, "white", "../images/wbishop");
        }
        // Black Bishops (Läufer)
        else if (i === 7 && j === 2 || i === 7 && j === 5) {
            return new Piece(position, "black", "../images/bbishop");
        }
        // White Queen
        else if (i === 0 && j === 3) {
            return new Piece(position, "white", "../images/wqueen");
        }
        // Black Queen
        else if (i === 7 && j === 3) {
            return new Piece(position, "black", "../images/bqueen");
        }
        // White King
        else if (i === 0 && j === 4) {
            return new Piece(position, "white", "../images/wking");
        }
        // Black King
        else if (i === 7 && j === 4) {
            return new Piece(position, "black", "../images/bking");
        }
        // White Rooks (Türme)
        else if (i === 0 && j === 0 || i === 0 && j === 7) {
            return new Piece(position, "white", "../images/wrook");
        }
        // Black Rooks (Türme)
        else if (i === 7 && j === 0 || i === 7 && j === 7) {
            return new Piece(position, "black", "../images/brook");
        }
        else {
            return null;
        }
    };

    isOccupying(i, j) {
        return (board.board[i][j] !== undefined);
    };

    getOccupyingPiece() {
        return board.board[i][j];
    };

    updatePosition() {

    };

}

export { Board };