
const gridContainer = document.querySelector('#grid-container');
let currentColor = 'black';

function buildGrid(elementType, amtX, amtY) {
    
    const biggest=Math.max(amtX, amtY);
    console.log(`The Largest Dimension is ${biggest} squares.`);
    const dimension=((1000-(1000%biggest))*.1)-10;
    console.log(`The best percentage is ${dimension} percent.`);
    const dimVmin=`${dimension}vmin`;
    console.log(`The chosen dimension is ${biggest} square.`);
    const squareSize=dimension/biggest;
    const squareSizeVmin=`${squareSize}vmin`;
    gridContainer.style.width=dimVmin;
    gridContainer.style.height=dimVmin;
    for (let i = 0; i<amtY; i++){
        let newRow = document.createElement('div');
        newRow.className='row';
        newRow.id=('row-'+i);
        newRow.style.width=dimVmin;
        newRow.style.height=squareSizeVmin;
       
        

        for(let j = 0; j<amtX; j++){
            let newElement=document.createElement(elementType);
            newElement.classList.add('square');
            newElement.setAttribute('data-row', i);
            newElement.setAttribute('data-col', j);
            newElement.style.width = squareSizeVmin;
            newElement.style.height = squareSizeVmin;
            newElement.style.backgroundColor="white";
            newElement.addEventListener("mouseover", setColor);
            newRow.appendChild(newElement);

        }

        gridContainer.appendChild(newRow);
    }
}

buildGrid('div', 16, 16);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", resetGrid);

const gridSizeBtn = document.querySelector("#gridSizeSubmit");
gridSizeBtn.addEventListener("click", submitGridSize);
const drawColorBtn = document.querySelector("#drawColorSubmit");
drawColorBtn.addEventListener("click", submitDrawColor);

function submitGridSize(){
    removeGrid();
    const newSize = document.querySelector("#gridSize").value;
    buildGrid('div', newSize, newSize);
}

function submitDrawColor(){
    const newColor = document.querySelector("#drawColor").value;
    currentColor=newColor;
}

function removeGrid() {
    let rows = Array.from(gridContainer.children);
    for (let row of rows) {
        gridContainer.removeChild(row);
    }
}


function resetGrid(e){
    let squares = Array.from(document.querySelectorAll('.square'));
    for (let square of squares) {
        square.style.backgroundColor="white";
    }
}

function setColor(e) {
    e.target.style.backgroundColor=currentColor;
    console.log(currentColor);
}

