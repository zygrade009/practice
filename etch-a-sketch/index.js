// constants size=16

let size=16;


/// function to change color
function randomColor(){
    let red=Math.round(Math.random()*256);
    let green=Math.round(Math.random()*256);
    let blue=Math.round(Math.random()*256);
    return `rgb(${red},${green},${blue})`;    
}


/// function to create grid
function createGrid() {
    const board = document.querySelector(".board");
    board.innerHTML = ''; // Clear existing grid
    const squareSize = 300/size;
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.class=`${i}`;
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener("mousemove", ()=>{
            div.style.backgroundColor = randomColor();
        });
        board.appendChild(div);
    }
}

/// reset button
const resetButton = document.querySelector("#reset");
function resetGrid() {
    const board = document.querySelector(".board");
    const divs = board.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
}
resetButton.addEventListener("click", resetGrid);


///resize button

const resizeButton = document.querySelector("#resize");
function resizeGrid(){
    const board = document.querySelector(".board");
    input = document.querySelector("#size");
    if(input.value>=100){
        alert("Size should be less than 100");
        return;
    }else{
        size = input.value;
        board.innerHTML="";
        createGrid();    
    }
    return;
}
resizeButton.addEventListener("click", resizeGrid);

createGrid();
