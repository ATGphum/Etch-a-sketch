
var currentColour = 000000;
var ascending = true;

function ascend(){
   ascending = true;
}

function descend(){
   ascending = false;
}

function grid(size){
   const container = document.querySelector('#container');
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
      piece.style.backgroundColor = '#' + currentColour;
     
      if(ascending == true){
         currentColour += 100000;
      }
      else{
         currentColour -= 100000;
      }
      if(currentColour <= 000000){
         ascend();
      }
      if(currentColour >= 900000){
         descend();
      }
   });
   piece.style.width = 500/size - 2 + 'px';
   piece.style.paddingTop = 500/size - 2 + 'px';
   pieces.appendChild(piece);
}

grid(50);





   
		
