//DOM script to create 16x16 div grid
const container=document.querySelector('.container');
for(let i=1;i<=(16*16);i++) {
    let grid=document.createElement('div');
    grid.className=i;
    container.appendChild(grid);   
}

//Add event listener "hover" for each div in the grid
const grids=container.querySelectorAll('div');
grids.forEach((div) => {
    div.addEventListener('mouseenter',colorGrid)

})

//function that colors grid when "mouseenter" listener activates
function colorGrid(e) {
    e.style.color='blue';
    console.log("colored");
}