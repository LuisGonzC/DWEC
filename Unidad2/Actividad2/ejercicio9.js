let num = parseInt(prompt('Introduce un número'));
let i = num - 1;
let res = num;

while (i > 0) {
    res *= i;
    i--;
}

alert('Factorial de: ' + num + ' es: ' + res);