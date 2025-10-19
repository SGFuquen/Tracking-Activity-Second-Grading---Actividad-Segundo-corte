let citas = [];

function programarCita() {
    let paciente = prompt("Por favor, ingrese nombres y apellidos del paciente:");
    let fecha = prompt("Ingrese la fecha de la cita (AAAA-MM-DD):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    let doctor = prompt("Ingrese el nombre del médico requerido:");

    if (!paciente || !fecha || !hora || !doctor) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    citas.push({ paciente, fecha, hora, doctor });
    alert("La cita ha sido programada exitosamente.");
}

function verCitas() {
    if (!citas.length) return alert("No hay citas programadas.");

    let citasOrdenadas = [...citas].sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));
    let resumen = "Listado de citas programadas:\n" +
        citasOrdenadas.map((c, i) =>
            `${i + 1}. ${c.fecha} ${c.hora} - Paciente: ${c.paciente}, Médico: ${c.doctor}`
        ).join('\n');
    alert(resumen);
}

function cancelarCita() {
    if (!citas.length) return alert("No hay citas para cancelar.");
    verCitas();
    let num = Number(prompt("Ingrese el número de la cita que desea cancelar:"));
    if (!num || num < 1 || num > citas.length) return alert("Número de cita inválido.");
    citas.splice(num - 1, 1);
    alert("La cita ha sido cancelada exitosamente.");
}

// Menú principal
let salir = false;
do {
    let opcion = prompt(
        "Sistema de Gestión de Citas Médicas\n" +
        "1. Programar una cita\n" +
        "2. Ver citas programadas\n" +
        "3. Cancelar una cita\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );
    switch (opcion) {
        case "1": programarCita(); break;
        case "2": verCita(); break;
        case "3": cancelarCita(); break;
        case "4": salir = true; alert("Muchas Gracias por utilizar el sistema de citas médicas."); break;
        default: alert("Opcion invalida. Por favor, seleccionar una opcion del menu.");
    }
} while (!salir);