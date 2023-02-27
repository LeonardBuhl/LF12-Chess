class Bishop extends Piece {
    constructor(position) {
        let wasMoved = false;
        super(position);
    }

    getLegalMoves() {
        this.getMovesNorthWest(),
        getMovesNorthEast(),
        getMovesSouthWest(),
        getMovesSouthEast()
    }
}
