import { Piece } from "./Piece";

class Bishop extends Piece {
    constructor(position, color, imgSource, id) {
        let wasMoved = false;
        super(position, color, imgSource, id);
    }

    getLegalMoves() {
        return [
            this.getMovesNorthWest(),
            this.getMovesNorthEast(),
            this.getMovesSouthWest(),
            this.getMovesSouthEast()
        ];
    }
}

export { Bishop }