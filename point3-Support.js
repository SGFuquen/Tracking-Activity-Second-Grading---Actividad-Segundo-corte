function seleccionarProblema() {
    let opcion = "";
    const opciones = ["1", "2", "3", "4"];
    let valido = false;

    do {
        opcion = prompt(
            "Selecciona el tipo de problema:\n" +
            "1 - Facturacion\n" +
            "2 - Problemas tecnicos\n" +
            "3 - Ventas\n" +
            "4 - Quejas y sugerencias"
        );

        let a = 0;
        while (a < opciones.length) {
            if (opciones[a] != opcion) {
                a = a + 1;
            } else {
                valido = true;
                break;
            }
        }
    } while (!valido);

    return Number(opcion);
}

function obtenerDepartamento(opcion) {
    switch (opcion) {
        case 1:
            return {
                nombre: "Departamento de Facturacion",
                contacto: "facturacion@empresa.com - Tel: 300 123 4567"
            };
        case 2:
            return {
                nombre: "Soporte Tecnico",
                contacto: "soporte@gmail.co - Tel: 320 696 7890"
            };
        case 3:
            return {
                nombre: "Departamento de Ventas",
                contacto: "ventas@gmail.co - Tel: 320 696 7890"
            };
        case 4:
            return {
                nombre: "Atencion al Cliente",
                contacto: "quejas@gmail.co - Tel: 320 696 7890"
            };
        default:
            return {
                nombre: "Desconocido",
                contacto: "No disponible"
            };
    }
}


function mostrarResumen(departamento) {
    let mensaje = "SOPORTE ASIGNADO\n";
    mensaje += "Area: " + departamento.nombre + "\n";
    mensaje += "Contacto: " + departamento.contacto;
    alert(mensaje);
}

function sistemaSoporte() {
    let continuar = "s";

    do {
        let tipo = seleccionarProblema();
        let departamento = obtenerDepartamento(tipo);
        mostrarResumen(departamento);

        let respuesta = "";
        const opciones = ["s", "n"];
        let valido = false;

        do {
            respuesta = prompt("¿Deseas registrar otro problema? (s/n):").toLowerCase();
            let a = 0;
            while (a < opciones.length) {
                if (opciones[a] != respuesta) {
                    a = a + 1;
                } else {
                    valido = true;
                    break;
                }
            }
        } while (!valido);

        continuar = respuesta;
    } while (continuar != "n");
}
sistemaSoporte();