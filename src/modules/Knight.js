import { Piece } from "./Piece";

class Knight extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        let position = this.currentPosition;

        return [
            [position[0], position[1]],
            [position[0]+2, position[1]-1],
            [position[0]+2, position[1]+1],
            [position[0]-2, position[1]-1],
            [position[0]-2, position[1]+1],
            [position[0]+1, position[1]+2],
            [position[0]-1, position[1]+2],
            [position[0]+1, position[1]-2],
            [position[0]-1, position[1]-2]
        ];
    }
}

export {Knight}