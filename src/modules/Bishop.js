class Bishop extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        return [
            this.getMovesNorthWest(),
            this.getMovesNorthEast(),
            this.getMovesSouthWest(),
            this.getMovesSouthEast()
        ]
    }
}

export {Bishop}