let num = parseInt(prompt('Introduce un número'))
let resultado = 'El número ' + num;

if (num % 2 == 0) {
    resultado += ' es par';
} else {
    resultado += ' es impar';
}

if (num % 3 == 0) {
    resultado += ', es múltiplo de 3';
}

if (num % 5 == 0) {
    resultado += ', es múltiplo de 5';
}

alert(resultado);