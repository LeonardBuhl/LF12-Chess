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
            return new Pawn(position, "white", "../images/wpawn", "Wpawn");
        }
        // Black Pawns
        else if (i === 6) {
            return new Pawn(position, "black", "../images/bpawn", "Bpawn");
        }
        // White Knights (Springer)
        else if (i === 0 && j === 1 || i === 0 && j === 6) {
            return new Knight(position, "white", "../images/wknight", "Wknight");
        }
        // Black Knights (Springer)
        else if (i === 7 && j === 1 || i === 7 && j === 6) {
            return new Knight(position, "black", "../images/bknight", "Bknight");
        }
        // White Bishops (Läufer)
        else if (i === 0 && j === 2 || i === 0 && j === 5) {
            return new Bishop(position, "white", "../images/wbishop", "Wbishop");
        }
        // Black Bishops (Läufer)
        else if (i === 7 && j === 2 || i === 7 && j === 5) {
            return new Bishop(position, "black", "../images/bbishop", "Bbishop");
        }
        // White Queen
        else if (i === 0 && j === 3) {
            return new Queen(position, "white", "../images/wqueen", "Wqueen");
        }
        // Black Queen
        else if (i === 7 && j === 3) {
            return new Queen(position, "black", "../images/bqueen", "Bqueen");
        }
        // White King
        else if (i === 0 && j === 4) {
            return new King(position, "white", "../images/wking", "Wking");
        }
        // Black King
        else if (i === 7 && j === 4) {
            return new King(position, "black", "../images/bking", "Bking");
        }
        // White Rooks (Türme)
        else if (i === 0 && j === 0 || i === 0 && j === 7) {
            return new Rook(position, "white", "../images/wrook", "Wrook");
        }
        // Black Rooks (Türme)
        else if (i === 7 && j === 0 || i === 7 && j === 7) {
            return new Rook(position, "black", "../images/brook", "Brook");
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
        /*
            if newPosition IS IN piece.getLegalMoves (Done)
            AND IS NOT currentPosition (Not necessary because the event Listener will register click on own position as click on the piece)
            AND IS NOT (isOccupying AND getOccupyingPiece.getColor != piece.getColor)
        */

        const piece = this.board[startRow][startCell];

        // check if newPosition is IN piece.getLegalMoves()
        if (this.isLegalMove(piece, endRow, endCell) === true) {
            // save the spliced object in a temp variable
            const temp = this.board[startRow].splice(startCell, 1, null);

            // update currentPosition parameter of the object
            temp[0].currentPosition = [endRow, endCell];

            // insert at desired position
            this.board[endRow].splice(endCell, 1, temp[0]);
        }
    };

    isLegalMove(piece, i, j) {
        let isLegal = false;
        piece.getLegalMoves().forEach(element => {
            element.forEach(element => {
                if (element[0] === i && element[1] === j) {
                    isLegal = true;
                    return isLegal
                }
            })
        });
        return isLegal
    }

}

export { Board };