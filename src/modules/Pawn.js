import { Piece } from "./Piece";

class Pawn extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        let position = this.position;
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
        let position = his.position;
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