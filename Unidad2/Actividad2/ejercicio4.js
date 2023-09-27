let mes = parseInt(prompt("Indica el número de un mes:"));

switch (mes) {
    case 1:
        alert('El mes ' + mes + ' (Enero), tiene 31 dias.');
        break;
    case 2:
        alert('El mes ' + mes + ' (Febrero), tiene 28 dias.');
        break;
    case 3:
        alert('El mes ' + mes + ' (Marzo), tiene 31 dias.');
        break;
    case 4:
        alert('El mes ' + mes + ' (Abril), tiene 30 dias.');
        break;
    case 5:
        alert('El mes ' + mes + ' (Mayo), tiene 31 dias.');
        break;
    case 6:
        alert('El mes ' + mes + ' (Junio), tiene 30 dias.');
        break;
    case 7:
        alert('El mes ' + mes + ' (Julio), tiene 31 dias.');
        break;
    case 8:
        alert('El mes ' + mes + ' (Agosto), tiene 31 dias.');
        break;
    case 9:
        alert('El mes ' + mes + ' (Septiembre), tiene 30 dias.');
        break;
    case 10:
        alert('El mes ' + mes + ' (Octubre), tiene 31 dias.');
        break;
    case 11:
        alert('El mes ' + mes + ' (Noviembre), tiene 30 dias.');
        break;
    case 12:
        alert('El mes ' + mes + ' (Diciembre), tiene 31 dias.');
        break;
    default:
        alert('El mes introducido no es valido');
}