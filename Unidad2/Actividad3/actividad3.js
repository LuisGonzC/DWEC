let hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
let color_aleatorio = "#";
let i;
let posArray;

for (i=0; i<6; i++){
   posArray = Math.floor(Math.random() * 16)
   color_aleatorio += hexadecimal[posArray]
}

document.documentElement.style.backgroundColor = color_aleatorio;