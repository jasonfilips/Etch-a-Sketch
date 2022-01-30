const container = document.getElementById('container');

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