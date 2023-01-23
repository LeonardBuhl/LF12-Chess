class Piece {
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
}

export {Piece}