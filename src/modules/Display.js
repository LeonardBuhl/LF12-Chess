// Class for creating and changing the Display the user can see
import brook from "../images/brook.png"
import wrook from "../images/wrook.png"

class Display {
    constructor(board) {
        // initialize new instance of the virtual Board
        this.virtualBoard = board;
        this.table = document.querySelector(".table");
        this.rows = document.querySelector(".table").children;
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
                if (this.virtualBoard.board[i][j] !== null && cell.className === "white") {
                    const img = doc.createElement("img");
                    img.setAttribute("src", brook);
                    cell.appendChild(img);
                }
                else if (this.virtualBoard.board[i][j] !== null && cell.className === "black") {
                    const img = doc.createElement("img");
                    img.setAttribute("src", wrook);
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
                cell.style.backgroundColor = "red"
            })
        });
    }
}

export { Display }