

function buildGrid(elementType, amtX, amtY) {
    const gridContainer = document.querySelector('#grid-container');
    const biggest=Math.max(amtX, amtY);
    gridContainer.style.width=`${(1000-(1000%biggest)*.1)}vmin`;
    gridContainer.style.height=`${(1000-(1000%biggest)*.1)}vmin`;
    for (let i = 0; i<amtY; i++){
        let newRow = document.createElement('div');
        newRow.className='row';
        newRow.id=('row-'+i);
       
        

        for(let j = 0; j<amtX; j++){
            let newElement=document.createElement(elementType);
            newElement.classList.add('square');
            newElement.setAttribute('data-row', i);
            newElement.setAttribute('data-col', j);
            newElement.style.width = (80/amtX + 'vmin');
            newElement.style.height = (80/amtY + 'vmin');
            colorSet(newElement);
            newRow.appendChild(newElement);

        }

        gridContainer.appendChild(newRow);
    }
}

buildGrid('div', 16, 16);


function colorSet(a) {
    let color;
    if (isSame(a)) {
        color='red';
    }else color='blue';
    a.style.backgroundColor=color;
}

function isSame(a){
    const numRow = a.getAttribute('data-row');
    const numCol = a.getAttribute('data-col');
    return ((numRow%2)==(numCol%2));
}