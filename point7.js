let producto;
let totalVendido = 0;

while (producto != "terminar") {
    producto = prompt("Ingresa producto vendido (escribe 'terminar' para finalizar):");

    if (producto != "terminar") {
        totalVendido = totalVendido + 1;
    }
}
alert("Total de productos vendidos hoy: " + totalVendido);