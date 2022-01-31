const container = document.getElementById('container');


//Creates the 16x16 grid
for (let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = "display: flex; flex-direction: row;"

    container.appendChild(row);

    for (let j = 0; j < 16; j++){
        let item = document.createElement('div');
        item.classList.add('item');
        row.appendChild(item);
    }
}

const item = document.querySelectorAll('.item');

function draw(e){
    e.target.style.cssText = 'background-color: blue;';
}

for (let i = 0; i < item.length; i++){
    item[i].addEventListener("mousedown", draw);
}