const container = document.getElementById('container');
const slider = document.getElementById("size");
const output = document.getElementById("outputSize");
const defaultButton = document.getElementById('default');
const rainbowButton = document.getElementById('rainbow');
let mode = "default";
let gridSize = 16;
let cellsize = 0;

slider.oninput = function () {
    output.innerText = "Size: " + slider.value + "x" + slider.value;
}

//Creates the grid
function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = "display: flex; flex-direction: row;"
        cellsize = (600-(gridSize*2))/gridSize;

        container.appendChild(row);

        for (let j = 0; j < gridSize; j++){
            let item = document.createElement('div');
            item.classList.add('item');
            item.addEventListener("mousedown", draw);
            item.addEventListener("mouseover", draw);
            row.appendChild(item);
            item.style.height=`${cellsize}px`;
            item.style.width= `${cellsize}px`;
        }
    }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click",reset);
defaultButton.addEventListener("click",setMode);
rainbowButton.addEventListener("click",setMode);

function setMode(e){ mode=this.id ;}

//changes the color if the mouse is hovering over the square and left mouse button down
function draw(e){
    if (e.type === 'mouseover' && e.buttons != 1){return};
    if (mode === "default"){e.target.style.backgroundColor = 'rgb(255,255,255)';};
    if (mode === "rainbow"){e.target.style.backgroundColor = 
            `rgb(${Math.floor(Math.random() * 254)},
                 ${Math.floor(Math.random() * 254)},
                 ${Math.floor(Math.random() * 254)})`;};
}

//delete the old grid and make a new one with the set grid size
function reset(e){
    const items = document.querySelectorAll('.item');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    gridSize = slider.value;
    createGrid(gridSize);
}

createGrid(gridSize);



