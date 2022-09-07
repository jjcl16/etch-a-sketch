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
            columns.addEventListener('mousedown', isClicking); //if is clicked
            columns.addEventListener('mouseenter', isDrawing); // if is moved into boxes
            if (gridActive) columns.classList.add("borders"); //adds only if the button is activated
            columns.style.backgroundColor = '#FFFFFF';
            
        }
    }

     
}





/*------------------------- Events click and mouse enter---*/

function isClicking(){//if is clicked
    //console.log(shadowActive);
    colorBox(this);
    
}

function isDrawing(e){ // if is moved into boxes
    if(e.buttons==1){ // only if is clicked
        colorBox(this);
    };
}

/*-------------------- function Color - erase --------------------------------- */


function colorBox(element){
    if(eraserEnable){
        //console.log(colorSelector.value);
        element.style.cssText = `background-color: #FFFFFF;`;
        
    }else if(shadowActive){
        //console.log(this.style.backgroundColor);

        element.style.backgroundColor = reduceLight(element.style.backgroundColor);

    }else if(rainbowActive){
        element.style.backgroundColor = makeRainbow();
    }
    
    else{
        element.style.cssText = `background-color: ${colorSelector.value};`; 
    }
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
    e.style.cssText = `background-color: #ffffff;`;  
}

/*------------------- Eraser -----------------------*/
let eraserEnable = false;

function selectEraser(){
    const eraser = document.querySelector(".selectEraser");
    eraserEnable = (!eraserEnable) ? true : false ;
    eraser.style.cssText = (eraserEnable) ?   `background-color: #79867d;` :   `background-color: buttonface;`;

}


/*----------------- Enable grid -------------*/

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


/*-------------------------- Shadow Effect ------------------------*/ 

let shadowActive = false;
function setShadow(){
    const selectShadow = document.querySelector(".selectShadow");
    shadowActive = (!shadowActive) ? true : false;
    selectShadow.style.cssText = (shadowActive) ?   `background-color: #79867d;` :   `background-color: buttonface;`;
}

/*-----------  return -10% color bright function --------- */
function reduceLight( rgbString){
    let rgb = rgbString.substring(4, rgbString.length-1)
            .replace(/ /g, '')
            .split(',');
    
    let newRgb = [];

    for (color of rgb){
        color = (color*10 - color)/10;
        //console.log(color);
        newRgb.push(color);

    }

    newRgb = `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`

    return newRgb;

}


/*-----------------Rainbbow Effect --------------------------**/

let rainbowActive = false;
function setRainbow(){
    const selectRainbow = document.querySelector(".selectRainbow");
    rainbowActive = (!rainbowActive) ? true : false;
    selectRainbow.style.cssText = (rainbowActive) ?   `background-color: #79867d;` :   `background-color: buttonface;`;
}
    
/*--------- Making rainbow---------*/
function makeRainbow(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgbString = `rgb(${red}, ${green}, ${blue})`
    return rgbString;
}









/*------------------------ INICIAL GRID --------------------------------------- */
makeGrid(12); //initialization grid 12x12