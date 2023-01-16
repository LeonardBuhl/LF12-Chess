const createBoard = (doc) => {
    const board = doc.querySelector(".table");
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
        }
    board.appendChild(row);
    }
}

export {createBoard};