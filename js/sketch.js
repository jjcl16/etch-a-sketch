/*
Seleccionar el div del grid

crear filas dentro del grid.

crear division entre las filas y se crean "columnas"

 -------------------------------------------------------------
|                          grid                               |



*/

const grid = document.querySelector(".grid");


function makeGrid(size){

    //console.log(children);
    for (i=0;i<size;i++){
        const rows = document.createElement("div");
        rows.classList.add("row");
        rows.classList.add("noselect");
        rows.textContent = `R${i}`
        grid.appendChild(rows);

        
        
        for (j=0;j<size;j++){
            const columns = document.createElement("div"); 
            columns.classList.add("columns");
            columns.classList.add("noselect");
            columns.textContent = `C${j}`
            rows.appendChild(columns);
            columns.addEventListener('mousedown', colorColumn);
            columns.addEventListener('mouseenter', isClicked);
            
        }
    }
}

function removeGrid(){
    //grid.childNodes.forEach(removeNodes);    

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}
/*
function removeNodes(e){
    console.log(e);
    grid.removeChild(e);
}
*/

function getGridSize(){
    let size = prompt("Size of the grid");
    removeGrid();
    makeGrid(size);
}

function colorColumn(){
    this.classList.add("coloredRed");
}

function isClicked(e){
    if(e.buttons==1){
        this.classList.add("coloredRed");   

    };
}