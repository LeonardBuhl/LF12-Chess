import { Piece } from "./Piece";

class Rook extends Piece {
    constructor(position) {
        let wasMoved = false;
        let canCastle = true;
        super(position);
    }

    setPosition(position) {
        this.currentPosition = position;

        // sets canCastle to false if the piece is moved for the first time
        if (this.canCastle == true) {
            this.disable_castling();
        }
    }

    disable_castling() {
        this.canCastle = false;
    }

    getLegalMoves() {
        return [
            this.getMovesNorth(),
            this.getMovesEast(),
            this.getMovesSouth(),
            this.getMovesWest()
        ];
    }
}

export {Rook}