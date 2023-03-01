import { Piece } from "./Piece";

class Knight extends Piece {
    constructor(position, color, imgSource, id) {
        let wasMoved = false;
        super(position, color, imgSource, id);
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