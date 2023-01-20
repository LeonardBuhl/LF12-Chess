class Piece {
    constructor(initPosition, color, imgSource) {
        this.currentPosition = initPosition;
        this.color = color;
        this.img = document.createElement("img");
        this.imgSource = imgSource;
    }

    setPosition(position) {
        this.currentPosition = position;
    }

    getPosition() {
        return this.currentPosition;
    }
}

export {Piece}