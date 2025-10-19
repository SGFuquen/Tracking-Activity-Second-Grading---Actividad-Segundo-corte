let reservas = [];
let habitacionesReservadas = 0;
let personasOcupandoHotel = 0;

function reservarHabitacion() {
    let nombre = prompt("Por favor, indique el nombre completo del titular de la reserva:");
    let pais = prompt("Por favor, indique el país de procedencia del huésped:");

    let tipo;
    while (true) {
        tipo = prompt("Seleccione el tipo de habitación (Individual / Doble / Familiar):").toLowerCase();
        if (["individual", "doble", "familiar"].includes(tipo)) break;
        alert("Por favor, seleccione una opción válida para el tipo de habitación.");
    }

    let fumador = prompt("¿Requiere una habitación para fumadores? (Sí / No):").toLowerCase() === "si";

    let maxPersonas = tipo === "individual" ? 2 : tipo === "doble" ? 4 : 6;
    let numPersonas;
    while (true) {
        numPersonas = Number(prompt(`Indique el número de huéspedes (máximo permitido: ${maxPersonas}):`));
        if (numPersonas > 0 && numPersonas <= maxPersonas) break;
        alert("Por favor, ingrese una cantidad válida de huéspedes.");
    }

    let mascota = false;
    if (tipo === "familiar") {
        mascota = prompt("¿Viaja con mascota? (Sí / No):").toLowerCase() === "si";
    }

    let periodo = prompt("Indique la duración de la estadía (ejemplo: 3 noches):");

    reservas.push({
        nombre,
        pais,
        tipo,
        fumador,
        numPersonas,
        periodo,
        mascota
    });

    habitacionesReservadas++;
    personasOcupandoHotel += numPersonas;

    alert(
        `Reserva confirmada:\n` +
        `Titular: ${nombre}\n` +
        `País de procedencia: ${pais}\n` +
        `Tipo de habitación: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}\n` +
        `Habitación para fumadores: ${fumador ? "Sí" : "No"}\n` +
        `Cantidad de huéspedes: ${numPersonas}\n` +
        `Mascota: ${mascota ? "Sí" : "No"}\n` +
        `Duración de la estadía: ${periodo}\n` +
        `Total de habitaciones reservadas: ${habitacionesReservadas}\n` +
        `Total de huéspedes en el hotel: ${personasOcupandoHotel}`
    );
}

do {
    reservarHabitacion();
} while (prompt("¿Desea registrar una nueva reserva? (Sí / No):").toLowerCase() === "si");

alert(
    `RESUMEN GENERAL DEL HOTEL\n` +
    `Habitaciones reservadas: ${habitacionesReservadas}\n` +
    `Huéspedes alojados: ${personasOcupandoHotel}\n` +
    `Listado de reservas:\n` +
    reservas.map((r, i) =>
        `${i+1}. Titular: ${r.nombre} (${r.pais}) - Habitación: ${r.tipo}, ${r.numPersonas} huésped(es), ${r.fumador ? "fumadores" : "no fumadores"}, ${r.mascota ? "con mascota" : "sin mascota"}, Estadía: ${r.periodo}`
    ).join('\n')
);