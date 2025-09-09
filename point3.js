let totalAhorrado = 0;
let semana = 1;

while (semana <= 4) {
    let aporte = parseInt(prompt("Semana " + semana + ": ¿Cuánto deseas ahorrar?"), 10);

    while (isNaN(aporte) || aporte < 0) {
        aporte = parseInt(prompt("Valor inválido. Semana " + semana + ": Ingresa un monto válido mayor o igual a 0"), 10);
    }

    totalAhorrado = totalAhorrado + aporte;
    semana = semana + 1;
}
alert("Total ahorrado después de 4 semanas: $" + totalAhorrado);