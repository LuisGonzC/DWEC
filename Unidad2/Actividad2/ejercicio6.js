let num1 = parseInt(prompt('Introduce el primer número'));
let num2 = parseInt(prompt('Introduce el segundo número'));
let operacion = prompt('Introduce la operación');
let resultado;
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        alert('El resultado es: ' + resultado);
        break;
    case '-':
        resultado = num1 - num2;
        alert('El resultado es: ' + resultado);
        break;
    case '*':
        resultado = num1 * num2;
        alert('El resultado es: ' + resultado);
        break;
    case '/':
        resultado = num1 / num2;
        alert('El resultado es: ' + resultado);
        break;
    default:
        alert('No es una operación valida');
}