class Rook extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        return [
            this.getMovesNorth(),
            this.getMovesEast(),
            this.getMovesSouth(),
            this.getMovesWest()
        ]
    }
}

export {Rook}