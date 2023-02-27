export default class Piece {
    constructor(initPosition, color, imgSource, id) {
        this.currentPosition = initPosition;
        this.color = color;
        this.img = document.createElement("img");
        this.imgSource = imgSource;
        this.id = id;
    }

    setPosition(position) {
        this.currentPosition = position;
    }

    getPosition() {
        return this.currentPosition;
    }

    getMovesNorth() {
        /*
        Calculates the possible moves to the north using the pieces position

        return: array of possible moves
        */

        let movesNorth = [];

        // position [ 1, 0]
        // returns [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]

        for (let move = this.position[1]; move >= 0; move -= 1) {
            let moveNorth = [this.position[0], move];
            movesNorth.push(moveNorth);
        }

        return movesNorth;
    }

    getMovesSouth() {
        let movesSouth = [];

        for (let move = this.position[1]; move <= 7; move += 1) {
            let moveSouth = [this.position[0], move];
            movesSouth.push(moveSouth);
        }

        return movesSouth;
    }

    getMovesEast() {
        let movesEast = [];

        for (let move = this.position[0]; move <= 7; move += 1) {
            let moveEast = [this.position[0], move];
            movesEast.push(moveEast);
        }

        return movesEast;
    }

    getMovesWest() {
        let movesWest = [];

        for (let move = this.position[0]; move >= 0; move -= 1) {
            let moveWest = [this.position[0], move];
            movesWest.push(moveWest);
        }

        return movesWest;
    }

    getMovesNorthWest() {
        let movesNorthWest = [];

        let move = this.position;
        while(move[0] >= 0 && move[1] >= 0) {
            movesNorthWest.push(move);
            move[0]--;
            move[1]--;
        }

        return movesNorthWest;
    }

    getMovesNorthEast() {
        let movesNorthEast = [];

        let move = this.position;
        while(move[0] <= 7 && move[1] >= 0) {
            movesNorthEast.push(move);
            move[0]++;
            move[1]--;
        }

        return movesNorthEast;
    }

    getMovesSouthWest() {
        let movesSouthWest = [];

        let move = this.position;
        while(move[0] >= 0 && move[1] <= 7) {
            movesSouthWest.push(move);
            move[0]--;
            move[1]++;
        }

        return movesSouthWest;
    }

    getMovesSouthEast() {
        let movesSouthEast = [];

        let move = this.position;
        while(move[0] <= 7 && move[1] <= 7) {
            movesSouthEast.push(move);
            move[0]++;
            move[1]++;
        }

        return movesSouthEast;
    }

}

export { Piece }
