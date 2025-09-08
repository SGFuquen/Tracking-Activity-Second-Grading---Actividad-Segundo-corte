//seleciion de programa
function seleccionarPrograma() {
    let opcion = "";
    const entrada = ["1", "2", "3", "4"];
    let valido = false;

    do {
        opcion = prompt(
            "Selecciona tipo de lavado:\n" +
            "1 - Rapido\n" +
            "2 - Normal\n" +
            "3 - Pesado\n" +
            "4 - Delicado"
         );

        let a = 0;
        while (a < entrada.length) {
            if (entrada[a] != opcion) {
                a = a + 1;
            } else {
                valido = true;
                break;
            }
        }
    } while (!valido);

    return Number(opcion);
}

function obtenerDetalles(opcion) {
    switch (opcion) {
        case 1:
            return {
                nombre: "Rapido",
                duracion: 30,
                precio: 5,
                descripcion: "Lavado ligero para poco sucias."
            };
        case 2:
            return {
                nombre: "Normal",
                duracion: 45,
                precio: 7,
                descripcion: "Lavado estandar para uso diario."
            };
        case 3:
            return {
                nombre: "Pesado",
                duracion: 60,
                precio: 10,
                descripcion: "Lavado profundo para gruesa o muy sucia."
            };
        case 4:
            return {
                nombre: "Delicado",
                duracion: 40,
                precio: 8,
                descripcion: "Lavado suave para delicadas."
            };
        default:
            return {
                nombre: "Desconocido",
                duracion: 0,
                precio: 0,
                descripcion: "Programa no valido."
            };
    }
}

//resumen
function mostrarResumen(detalles) {
    let mensaje = "=== PROGRAMA SELECCIONADO ===\n";
    mensaje += "Tipo: " + detalles.nombre + "\n";
    mensaje += "Duracion: " + detalles.duracion + " minutos\n";
    mensaje += "Precio: $" + detalles.precio + "\n";
    mensaje += "Descripcion: " + detalles.descripcion;
    alert(mensaje);
}

//simulador que ejecuta
function simuladorLavadora() {
    let continuar = "s";

    do {
        let programa = seleccionarPrograma();
        let detalles = obtenerDetalles(programa);
        mostrarResumen(detalles);

        let respuesta = "";
        const opciones = ["s", "n"];
        let valido = false;

        do {
            respuesta = prompt("¿Desea seleccionar otro programa? (s/n):").toLowerCase();
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

simuladorLavadora();