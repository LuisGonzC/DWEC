import * as listaChistes from './DWEC_U03_A02_CP_E.js'

function Manejador() {
    this.handleEvent = function(evento) {
        alert(chiste.respuesta);
    }
}

for (let chiste of listaChistes.chistes) {
    let divCont = document.getElementById('enunChiste');

    let divEnun = document.createElement('div');

    let boton = document.createElement('button');
    boton.innerHTML = "Ver respuesta";

    let manejador = new Manejador();
    manejador.chiste = chiste;
    boton.addEventListener('click', manejador);

    divEnun.innerHTML = chiste.enunciado + "\n" + boton;

    divCont.append(divEnun);
}