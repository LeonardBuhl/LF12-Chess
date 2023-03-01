import { Piece } from "./Piece";

class Queen extends Piece {
    constructor(position, color, imgSource, id) {
        let wasMoved = false;
        super(position, color, imgSource, id);
    }

    getLegalMoves() {
        return [
            this.getMovesNorth(),
            this.getMovesNorthEast(),
            this.getMovesEast(),
            this.getMovesSouthEast(),
            this.getMovesSouth(),
            this.getMovesSouthWest(),
            this.getMovesWest(),
            this.getMovesNorthWest()
        ];
    }
}

export {Queen}