let totalUsuarios = 0;
let atencionLlamada = 0;
let atencionAsesoria = 0;
let asesoriaEstudiante = 0;
let asesoriaDirectivo = 0;
let transferencias = 0;

let continuar = true;

while (continuar) {
    let cedula = prompt("Por favor, ingrese el número de cédula del usuario:");
    let tipoAtencion = prompt(
        "Seleccione el tipo de atención:\n" +
        "1. Llamada telefónica\n" +
        "2. Asesoría presencial"
    );

    if (tipoAtencion === "1") {
        atencionLlamada++;
        totalUsuarios++;
        alert("Atención por llamada telefónica registrada exitosamente.");
    } else if (tipoAtencion === "2") {
        atencionAsesoria++;
        totalUsuarios++;
        let tipoAsesoria = prompt(
            "Seleccione el tipo de asesoría:\n" +
            "1. Estudiante\n" +
            "2. Directivo"
        );
        if (tipoAsesoria === "1") {
            asesoriaEstudiante++;
            alert("Asesoría a estudiante registrada exitosamente.");
        } else if (tipoAsesoria === "2") {
            asesoriaDirectivo++;
            alert("Asesoría a directivo registrada exitosamente.");
        } else {
            alert("Tipo de asesoría no válido.");
        }

        let transferir = prompt("¿Desea transferir la asesoría a llamada telefónica? (Sí / No)").toLowerCase();
        if (transferir === "si") {
            atencionLlamada++;
            totalUsuarios++;
            transferencias++;
            alert("Transferencia realizada. Atención por llamada telefónica registrada exitosamente.");
        }
    } else {
        alert("Tipo de atención no válido.");
    }

    continuar = prompt("¿Desea registrar otra atención? (Sí / No)").toLowerCase() === "si";
}

alert(
    "ESTADÍSTICAS DE ATENCIÓN UNIVERSITARIA\n" +
    `Total de usuarios atendidos: ${totalUsuarios}\n` +
    `- Llamadas telefónicas: ${atencionLlamada}\n` +
    `- Asesorías presenciales: ${atencionAsesoria}\n` +
    `   - Estudiantes: ${asesoriaEstudiante}\n` +
    `   - Directivos: ${asesoriaDirectivo}\n` +
    `Transferencias de asesoría a llamada telefónica: ${transferencias}`
);