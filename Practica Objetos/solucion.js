import * as listaChistes from './DWEC_U03_A02_CP_E.js'

function Manejador() {
    this.handleEvent = function(evento) {
        alert(chiste.respuesta);
    }
}

let div = document.createElement('div');
    let boton = document.createElement('button');
    boton.innerHTML = "Ver respuesta";

for (let chiste of listaChistes.chistes) {
    let div = document.createElement('div');
    let boton = document.createElement('button');
    boton.innerHTML = "Ver respuesta";

    div.innerHTML = chiste.enunciado + "\n" + boton;

    let manejador = new Manejador();
    manejador.chiste = chiste;
    boton.addEventListener('onClick', manejador);
}