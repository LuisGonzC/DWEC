let cadena = 'Los numeros pares entre 25 y 1 son: ';
let i;
for (i = 25; i > 0; i--){
    if (i % 2 == 0){
        cadena += i + ' ';
    }
}

alert(cadena);