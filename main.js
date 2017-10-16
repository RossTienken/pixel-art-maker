const colors = {
  'yellow': ['yellow'],
  'pink': ['pink'],
  'red': ['red'],
  'green': ['green'],
  'teal': ['teal'],
  'blue': ['blue'],
  'purple': ['purple'],
  'white': ['white'],
  'black': ['black']

}
let mouseDown = false;
initialColor('green');
createPalette();
createGrid(28,40);

function createPalette(palette){
  let happyCol = document.getElementById('happyCol');

  for (let bR in colors){
    // let divbR = document.createElement("div");
    for(let color of colors[bR]){
      let divColor = document.createElement('div');
      divColor.id = "div" + color;
      divColor.className += "palette-color";
      divColor.style.backgroundColor = color;
      divColor.setAttribute("title", color);
      // divbR.appendChild(divColor);
      happyCol.appendChild(divColor);
      divColor.addEventListener("click", newPalette);
    }
  }
}

function initialColor(color){
  let divCurrentCol = document.getElementById("divCurrentCol");
  let spanCurrentCol = document.getElementById("spanCurrentCol");

  divCurrentCol.style.backgroundColor = color;
  spanCurrentCol.innerHTML = color;
}

function newPalette(){
  let divCurrentCol = document.getElementById("divCurrentCol");
  let spanCurrentCol = document.getElementById("spanCurrentCol");

  divCurrentCol.style.backgroundColor = this.style.backgroundColor;
  spanCurrentCol.innerHTML = this.style.backgroundColor;
}

function createGrid(rows, cols){
  var divGrid = document.getElementById('divGrid');
  let i = 0;

  for(let r = 0; r < rows; r++){
    let divRow = document.createElement('div');
    divRow.className = "row";

    for(let c = 0; c < cols; c++){
      let tile = document.createElement('div');
      // tile.id = "tile" + longInt(i);
      tile.className += "tile";
      tile.addEventListener("click", tileMouseClick);
      tile.addEventListener("mousedown", tileMouseDown);
      tile.addEventListener("mouseup", tileMouseUp);
      tile.addEventListener("mouseenter", tileMouseEnter);

      divRow.appendChild(tile);
      i++
    }
    divGrid.appendChild(divRow);
  }
}

function longInt(x){
  let int = x.toString();

  while(int.length < 4){
    int = "0" + int;
  }
  return int;
}

function tileMouseClick(){
  let divCurrentCol = document.getElementById("divCurrentCol");

  this.style.backgroundColor = divCurrentCol.style.backgroundColor
}
function tileMouseDown(){
  mouseDown = true;

  let divCurrentCol = document.getElementById("divCurrentCol");

  this.style.backgroundColor = divCurrentCol.style.backgroundColor
}

function tileMouseUp(){
  mouseDown = false;
}
function tileMouseEnter(){
  let divCurrentCol = document.getElementById("divCurrentCol")

  if (mouseDown === true){
    this.style.backgroundColor = divCurrentCol.style.backgroundColor;
  }
}
