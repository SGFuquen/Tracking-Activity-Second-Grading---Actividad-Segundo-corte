let totalPuntos = 0;

for (let a = 1; a <= 10; a++) {
    
    let satisfaccion = parseInt(prompt("Cliente " + a + ": Califica nuestro servicio (1-5):"), 10);

    while (satisfaccion != 1 && satisfaccion != 2 && satisfaccion != 3 && satisfaccion != 4 && satisfaccion != 5) {
        satisfaccion = parseInt(prompt("Valor inválido. Cliente " + a + ": Califica del 1 al 5:"), 10);
    }
    totalPuntos = totalPuntos + satisfaccion;
}
let promedio = totalPuntos / 10;

alert("Promedio de satisfacción: " + promedio);