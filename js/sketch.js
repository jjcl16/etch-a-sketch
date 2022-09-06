/*
Seleccionar el div del grid

crear filas dentro del grid.

crear division entre las filas y se crean "columnas"

 -------------------------------------------------------------
|                          grid                               |



*/

const grid = document.querySelector(".grid");
const colorSelector = document.querySelector(".setedColor");




function makeGrid(size){

    //console.log(children);
    for (i=0;i<size;i++){
        const rows = document.createElement("div");
        rows.classList.add("row");
        rows.classList.add("noselect");
        grid.appendChild(rows);

        
        
        for (j=0;j<size;j++){
            const columns = document.createElement("div"); 
            columns.classList.add("columns");
            columns.classList.add("noselect");
            rows.appendChild(columns);
            columns.addEventListener('mousedown', colorColumn); //if is clicked
            columns.addEventListener('mouseenter', isClicked); // if is moved into boxes
            
        }
    }
}




/*------------------------- colored ---*/

function colorColumn(){//if is clicked
    if(!eraserEnable){
        //console.log(colorSelector.value);
        this.style.cssText = `background-color: ${colorSelector.value};`; 
    }else{
        this.style.cssText = `background-color: #FFFFFF;`;
    }
    
}

function isClicked(e){ // if is moved into boxes
    if(e.buttons==1){ // only if is clicked

        if(!eraserEnable){
            this.style.cssText = `background-color: ${colorSelector.value};`;  
        }else{
            this.style.cssText = `background-color: #FFFFFF;`;
        }
        

    };
}

/*------------------ Insert new grid ---------------------*/
function getGridSize(){
    let size = prompt("Size of the grid");
    size = Number(size);
    if(Number.isNaN(size)){ // check if is a number 
        alert("Only numerics values");

    } else if(size){
        size = (size>64) ? 64 : size;
        removeGrid(); //remove old
        makeGrid(size); //create new
    }    
}

function removeGrid(){    /// remove grid 

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}




/*------------- ERASE GRID -----------------*/
function eraseGrid(){
    const rows = document.querySelectorAll(".columns");

    rows.forEach(clearGrid);
}

function clearGrid(e){
    e.style.cssText = `background-color: $ffffff;`;  
}

/*------------------- Eraser -----------------------*/
let eraserEnable = false;

function selectEraser(){
    const eraser = document.querySelector(".selectEraser");
    eraserEnable = (!eraserEnable) ? true : false ;
    eraser.style.cssText = (eraserEnable) ?   `background-color: #79867d;` :   `background-color: buttonface;`;

}


let gridActive = false;
function gridEnabler(){
    const gridEnabler = document.querySelector(".gridEnabler");
    const columns = document.querySelectorAll(".columns");
    gridActive = (!gridActive) ? true : false ;
    gridEnabler.style.cssText = (gridActive) ?   `background-color: #79867d;` :   `background-color: buttonface;`;
    
    (gridActive) ?  columns.forEach(gridOn) : columns.forEach(gridOff);
    
}

function gridOn(e){
    e.classList.add('borders'); 
}

function gridOff(e){
    e.classList.remove('borders');; 
}