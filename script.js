const container=document.querySelector('.container');

const buttonReset=document.querySelector('#reset');
    buttonReset.addEventListener('click',clearGridAndAskLenght)

/*const buttonStart=document.querySelector('#start');
    buttonStart.addEventListener('click',() => {
        let gridAmount=prompt("How many squares per side?");
        createGrid(gridAmount);
    })*/

//function that colors grid when "mouseenter" listener activates
function colorGrid(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

//function that clears the grid
function clearGridAndAskLenght (e) {
    const grids=container.querySelectorAll('div');
    grids.forEach((div) => {
        div.setAttribute('style','background: white');
    })
    let gridAmount=prompt("How many squares per side?");
    createGrid(gridAmount);
}

//function that asks for the number of squares per side
function createGrid(gridAmount) {
    for(let i=1;i<=(gridAmount*gridAmount);i++) {
        let grid=document.createElement('div');
        grid.className=i;
        let sideLenght=640/gridAmount;
        console.log(sideLenght);
        grid.style.width=sideLenght+'px';
        grid.style.height=sideLenght+'px';
        container.setAttribute('style','grid-template-columns: repeat(' + gridAmount + ', 1fr)');
        container.appendChild(grid);
    }
    enableDraw()
}

//this function enables drawing
function enableDraw() {
    const grids=container.querySelectorAll('div');
    grids.forEach((div) => {
        div.addEventListener('mouseenter',colorGrid)    
        })  
}