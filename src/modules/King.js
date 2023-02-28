import { Piece } from "./Piece";

class King extends Piece {
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

    getLegalMoves() {
        let position = this.position;

        return [
            [position[0], position[1]],
            [position[0]+1, position[1]],
            [position[0], position[1]+1],
            [position[0]+1, position[1]+1],
            [position[0]-1, position[1]],
            [position[0], position[1]-1],
            [position[0]-1, position[1]-1],
            [position[0]-1, position[1]+1],
            [position[0]+1, position[1]-1]
        ];
    }

    disable_castling() {
        this.canCastle = false;
    }
}


/* Castling Rules

1. King has not moved yet
2. Rook has not moved yet
3. King is not in check
4. Any position on the way to the castling is not in check
5. The position at the end of castling is not in check
6. There are no pieces between the King and the Rook
*/

export {King}