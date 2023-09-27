let numHermanos = prompt("¿Cuantos hermanos tienes?:");
let cantidad = parseFloat(prompt("Indica una cantidad"));

if (numHermanos >= 3) {
    cantidad *= 0.85;
    alert('La cantidad total es: ' + cantidad + ' (15% descuento)');
} else if (numHermanos > 0 && numHermanos < 3) {
    cantidad *= 0.95;
    alert('La cantidad total es: ' + cantidad + ' (5% descuento)');
} else {
    alert('La cantidad total es: ' + cantidad + ' (sin descuento)')
}