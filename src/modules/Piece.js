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

        for (let move = this.currentPosition[0]; move >= 0; move -= 1) {
            let moveNorth = [move, this.currentPosition[1]];
            movesNorth.push(moveNorth);
        }

        return movesNorth;
    }

    getMovesSouth() {
        let movesSouth = [];

        for (let move = this.currentPosition[0]; move <= 7; move += 1) {
            let moveSouth = [move, this.currentPosition[1]];
            movesSouth.push(moveSouth);
        }

        return movesSouth;
    }

    getMovesEast() {
        let movesEast = [];

        for (let move = this.currentPosition[1]; move <= 7; move += 1) {
            let moveEast = [this.currentPosition[0], move];
            movesEast.push(moveEast);
        }

        return movesEast;
    }

    getMovesWest() {
        let movesWest = [];

        for (let move = this.currentPosition[1]; move >= 0; move -= 1) {
            let moveWest = [this.currentPosition[0], move];
            movesWest.push(moveWest);
        }

        return movesWest;
    }

    getMovesNorthWest() {
        let movesNorthWest = [];

        let x = this.currentPosition[0];
        let y = this.currentPosition[1];

        while(x >= 0 && y >= 0) {
            movesNorthWest.push([x, y]);
            x -= 1;
            y -= 1;
        }

        return movesNorthWest;
    }

    // [2, 3] initial --> [1, 4], [0, 5]
    getMovesNorthEast() {
        let movesNorthEast = [];

        let x = this.currentPosition[0];
        let y = this.currentPosition[1];

        while(x >= 0 && y <= 7) {
            movesNorthEast.push([x, y]);
            x -= 1;
            y += 1;
        }

        return movesNorthEast;
    }

    // [2, 3] initial --> [3, 2], [4, 1], [5, 0]
    getMovesSouthWest() {
        let movesSouthWest = [];

        let x = this.currentPosition[0];
        let y = this.currentPosition[1];

        while(x <= 7 && y >= 0) {
            movesSouthWest.push([x, y]);
            x += 1;
            y -= 1;
        }

        return movesSouthWest;
    }

    // [2, 3] initial --> [3, 4], [4, 5], [5, 6], [6, 7]
    getMovesSouthEast() {
        let movesSouthEast = [];

        let x = this.currentPosition[0];
        let y = this.currentPosition[1];

        while(x <= 7 && y <= 7) {
            movesSouthEast.push([x, y]);
            x += 1;
            y += 1;
        }

        return movesSouthEast;
    }

}

export { Piece }
