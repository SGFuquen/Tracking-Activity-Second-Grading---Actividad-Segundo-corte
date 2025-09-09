let mesasReservadas = 0;

for (let mesa = 1; mesa <= 5; mesa++) {
    let reservada = prompt("¿Está reservada la mesa " + mesa + "? (sí/no)").toLowerCase();

    while (reservada != "sí" && reservada != "no") {
        reservada = prompt("Respuesta inválida. ¿Está reservada la mesa " + mesa + "? (sí/no)").toLowerCase();
    }

    if (reservada == "sí") {
        mesasReservadas = mesasReservadas + 1;
    }
}
let disponibles = 5 - mesasReservadas;

alert("Mesas disponibles: " + disponibles);