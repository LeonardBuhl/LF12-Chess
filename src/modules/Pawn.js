import { Piece } from "./Piece";

class Pawn extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        return undefined
    }
}

export {Pawn}