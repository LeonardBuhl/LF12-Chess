// Class for creating and changing the Display the user can see
import brook from "../images/brook.png"
import wrook from "../images/wrook.png"
import bbishop from "../images/bbishop.png"
import wbishop from "../images/wbishop.png"
import bknight from "../images/bknight.png"
import wknight from "../images/wknight.png"
import bpawn from "../images/bpawn.png"
import wpawn from "../images/wpawn.png"
import bqueen from "../images/bqueen.png"
import wqueen from "../images/wqueen.png"
import bking from "../images/bking.png"
import wking from "../images/wking.png"

class Display {
    constructor(board) {
        // initialize new instance of the virtual Board
        this.virtualBoard = board;
        this.table = document.querySelector(".table");
        this.rows = document.querySelector(".table").children;
        this.images = {
            Wpawn: wpawn,
            Bpawn: bpawn,
            Brook: brook,
            Wrook: wrook,
            Bbishop: bbishop,
            Wbishop: wbishop,
            Bknight: bknight,
            Wknight: wknight,
            Bqueen: bqueen,
            Wqueen: wqueen,
            Bking: bking,
            Wking: wking
        }
    }

    render(doc) {
        // outer loop will create rows
        for (let i = 0; i < 8; i++) {
            const row = doc.createElement("tr");
            row.setAttribute("id", i);
            for (let j = 0; j < 8; j++) {
            // inner loop will create cells
                const cell = doc.createElement("td");
                cell.setAttribute("id", j);
                
                // check if the cell should be colored white or black
                if((i + j) % 2 === 0) {
                cell.classList.add("white");
                row.appendChild(cell);
                }
                else {
                cell.classList.add("black");
                row.appendChild(cell);
                }

                // place pieces (at the moment only rooks)
                if (this.virtualBoard.board[i][j] !== null) {
                    const name = this.virtualBoard.board[i][j].id;
                    let imgSource;

                    for (const [key, value] of Object.entries(this.images)) {
                        if (key === name) {
                            imgSource = value;
                            break
                        }
                    }

                    const img = doc.createElement("img");

                    if (name.includes("W") === true) {
                        img.classList.add("Player_One")
                    }
                    else if (name.includes("B") === true) {
                        img.classList.add("Player_Two")
                    }

                    img.setAttribute("src", imgSource);
                    cell.appendChild(img);
                }
            }
        this.table.appendChild(row);
        }
    }

    // rerender the object that moved on the virtual Gameboard    
    rerender() {
        while (this.table.firstChild) {
            this.table.removeChild(this.table.lastChild);
        }
        
        this.render(document);
    }

    // Highlight the legal moveset of the selected Piece
    highlightMoveset(startRow, startCell) {
        // create obj with selected Piece
        const obj = this.virtualBoard.board[startRow][startCell];

        // Loop trough the arrays of legal moves
        obj.getLegalMoves().forEach(element => {
            element.forEach(element => {
                const cell = this.rows[element[0]].children[element[1]];
                cell.classList.add("allowed");
            })
        });
    }

    // clears the Highlighted Moveset after you click on another Piece
    clearMove() {
        const allowed = document.querySelectorAll(".allowed");
        allowed.forEach(element => {
            element.classList.remove("allowed");
        });
    }
}

export { Display }