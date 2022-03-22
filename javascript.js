const container = document.getElementById('container');
let gridSize = 32;
let cellsize = 0;

//Creates the grid of specific square size
function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = "display: flex; flex-direction: row;"
        cellsize = (600-gridSize)/gridSize;

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


//changes the color if the mouse is hovering over the square and left mouse button down
function draw(e){
    if (e.type === 'mouseover' && e.buttons != 1){return};
    e.target.style.backgroundColor = 'white';
}

//resets all of the squares back to the color gray
function reset(e){
    const items = document.querySelectorAll('.item');
    for( let i = 0; i < items.length; i++)
    {
        items[i].style.backgroundColor = "gray";
    }
}





