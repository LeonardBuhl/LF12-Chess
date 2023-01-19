class Piece {
    constructor(initPosition, color, img) {
        this.currentPosition = initPosition;
        this.color = color;
        this.img = img;
    }

    setPosition(position) {
        this.currentPosition = position;
    }

    getPosition() {
        return this.currentPosition;
    }

    createPiece() {
        let x = document.createElement("img");
        x.src = this.img;
        this.currentPosition.appendChild(x);
    }




}

export {Piece}