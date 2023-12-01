import * as listaChistes from './chistes.js';

let divCont = document.getElementById('enunChiste');

function Manejador() {
    this.handleEvent = function(evento) {
        alert(chiste.respuesta);
    }
}

for (let chiste of listaChistes.chistes) {
    let divEnun = document.createElement('div');

    let boton = document.createElement('button');
    boton.innerHTML = "Ver respuesta";

    let manejador = new Manejador();
    manejador.chiste = chiste;
    boton.addEventListener("click", manejador);

    divEnun.innerHTML = chiste.enunciado + "\n" + boton;

    divCont.append(divEnun);
}