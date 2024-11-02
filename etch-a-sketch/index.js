function createGrid() {
    const board = document.querySelector(".board");
    const size=300/16;
    for (let i = 0; i < (16 * 16); i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        board.appendChild(div);
    }
}

createGrid();