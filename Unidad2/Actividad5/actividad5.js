let nombre = prompt("Indica tu nombre");
let apellidos = prompt("Indica tus apellidos");
let salario = parseFloat(prompt("Indica tu salario"));
let suma;
let edad = parseInt(prompt("Indica tu edad"));

if (salario >= 1000 && salario <= 2000) {
    if (edad > 45) {
        suma = salario * 0.03;
        salario += suma;
    }
    else {
        suma = salario * 0.1;
        salario += suma;
    }
} else if (salario < 1000) {
    if (edad >= 30 && edad <= 45) {
        suma = salario * 0.03;
        salario += suma;
    } else if (edad > 45) {
        suma = salario * 0.15;
        salario += suma;
    } else {
        salario = 1100;
    }
} 

alert('Nombre: ' + nombre + '\nApellidos: ' + apellidos +
'\nEdad: ' + edad + ' Salario: ' + salario);