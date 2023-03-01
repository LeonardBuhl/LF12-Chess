import { Piece } from "./Piece";

class Pawn extends Piece {
    constructor(position, color, imgSource, id) {
        let wasMoved = false;
        super(position, color, imgSource, id);
    }

    getLegalMoves() {
        let position = this.currentPosition;
        let legalMoves = [];

        if (this.color == 'white') {
            if (position[1] == 1) {
                legalMoves = [
                    [position[0], position[1]+1],
                    [position[0], position[1]+2]
                ];
            }
        }
        else {
            if (position[1] == 6) {
                legalMoves = [
                    [position[0], position[1]-1],
                    [position[0], position[1]-2]
                ];                
            }
        }

        return legalMoves;
    }

    getAttackMoves() {
        let position = this.currentPosition;
        let attackMoves = [];

        if (this.color == 'white') {
            attackMoves = [
                [position[0]+1, position[1]+1],
                [position[0]-1, position[1]+1]
            ];
        }
        else {
            attackMoves = [
                [position[0]+1, position[1]-1],
                [position[0]-1, position[1]-1]
            ];
        }

        return attackMoves;
    }
}

export {Pawn}