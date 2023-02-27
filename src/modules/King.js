import { Piece } from "./Piece";

class King extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        return undefined
    }
}

export {King}