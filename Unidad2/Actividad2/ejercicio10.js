let num1 = parseInt(prompt('Introduce el número (Usuario1)'));
let num2;
do {
    num2 = parseInt(prompt('Adivina el número (Usuario2)'));
    
    if (num2 < num1) {
        alert('Tu número es menor que el numero buscado. \n ¡Prueba de nuevo!')
    } else if (num2 > num1) {
        alert('Tu número es mayor que el numero buscado. \n ¡Prueba de nuevo!')
    } else {
        alert('¡Numero correcto!') 
    }
        
} while (num1 != num2)