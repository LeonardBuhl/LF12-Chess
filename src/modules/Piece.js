class Piece {
    constructor(initPosition, color, imgSource) {
        this.currentPosition = initPosition;
        this.color = color;
        this.img = document.createElement("img"); //document.createElement("img");
        this.imgSource = imgSource
    }

    setPosition(position) {
        this.currentPosition = position;
    }

    getPosition() {
        return this.currentPosition;
    }

    createPiece() {
        this.img.src = this.imgSource;
        this.img.classList.add("img");
        this.currentPosition.appendChild(this.img);
    }

    movePiece(destination) {
        // destination is the position the user clicks on
        // we set the currentPosition to the destination cell
        this.setPosition(destination);
        // we place it at the new position
        this.currentPosition.appendChild(this.img);
    }




}

export {Piece}