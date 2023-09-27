let ciudad = prompt("¿En qué ciudad vives?")
let edad = prompt("Indica tu edad:");

if (ciudad == 'Alicante' && (edad >= 18 && edad <= 35)){
    alert('Puedes acceder al carnet de emprendedores.')
} else {
    alert('No puede acceder al carnet de emprendedores.')
}