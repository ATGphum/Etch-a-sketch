
var red = 255;
var green = 0;
var blue = 0;


var redAscend = false;
var greenAscend = true;
var blueAscend = undefined;


function firstGrid(size){
   const master = document.querySelector('#container');
   const container = document.createElement('div');
   container.classList.add('temp');
   master.appendChild(container);
   for(var i = 0; i < size; i++){
      row(container, size);
   }
}

function grid(size){
   const master = document.querySelector('#container');
   const oldGrid = document.querySelector('.temp');
   master.removeChild(oldGrid);
   const container = document.createElement('div');
   container.classList.add('temp');
   master.appendChild(container);
   for(var i = 0; i < size; i++){
      row(container, size);
   }
}

function row(grid, size){
   const pieces = document.createElement('div');
   pieces.classList.add('row');
   for(var i = 0; i < size; i++){
      square(pieces, size);
   }
   grid.appendChild(pieces);
}

function square(pieces, size){
   const piece = document.createElement('div');
   piece.classList.add('square');
   piece.addEventListener('mouseover', function(){
      piece.classList.add('fill');
      piece.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')';

      if(redAscend == true){
         red++;
      }
      else if(redAscend == false){
         red--;
      }
      if(greenAscend == true){
         green++;
      }
      else if(greenAscend == false){
         green--;
      }
      if(blueAscend == true){
         blue++;
      }
      else if(blueAscend == false){
         blue--;
      }
console.log(blue);
console.log(blueAscend);

      if(red == 255){
         redAscend = false;
         greenAscend = true;
         blueAscend = undefined;
console.log('1');
      }
      if(green == 255){
         redAscend = undefined;
         greenAscend = false;
         blueAscend = true;
console.log('2');
      }
      if(blue == 255){
         redAscend = true;
         greenAscend = undefined;
         blueAscend = false;
console.log('3');
      } 
   });
   piece.style.width = 500/size - 2 + 'px';
   piece.style.paddingTop = 500/size - 2 + 'px';
   pieces.appendChild(piece);
}

//make button click sensitive
const resize = document.querySelector('#resize');
resize.addEventListener('click', ask);


//request size of new grid and call reset function
function ask(){
   var newSize;
   while(!(newSize <= 100 && newSize > 0)){
      newSize = window.prompt("new grid size?");
   }
   grid(parseInt(newSize, 10));
}
   

function reset(){   
   
   grid(80);

}

   


//initiate the grid
firstGrid(16);





   
		
