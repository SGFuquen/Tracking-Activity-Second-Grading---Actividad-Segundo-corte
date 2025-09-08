function seleccionarDia() {
    let dia = "";
    const diasValidos = ["1", "2", "3", "4", "5", "6", "7"];
    let valido = false;

    do {
        dia = prompt(
            "Ingresa el dia (1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado, 7: Domingo):"
        );

        let a = 0;
        while (a < diasValidos.length) {
            if (diasValidos[a] != dia) {
                a = a + 1;
            } else {
                valido = true;
                break;
            }
        }
    } while (!valido);

    return Number(dia);
}

function obtenerDescuento(dia) {
    switch (dia) {
        case 1: return 10;
        case 3: return 15;
        case 5: return 20;
        default: return 0;
    }
}

function nombreDia(dia) {
    switch (dia) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
        case 7: return "Domingo";
        default: return "Desconocido";
    }
}

function mostrarResumen(dia, descuento) {
    let mensaje = "=== DESCUENTO DEL DIA ===\n";
    mensaje += "Dia: " + nombreDia(dia) + "\n";
    mensaje += "Descuento aplicado: " + descuento + "%";
    alert(mensaje);
}

function sistemaDescuentos() {
    let continuar = "s";

    do {
        let dia = seleccionarDia();
        let descuento = obtenerDescuento(dia);
        mostrarResumen(dia, descuento);

        let respuesta = "";
        const opciones = ["s", "n"];
        let valido = false;

        do {
            respuesta = prompt("¿Deseas consultar otro dia? (s/n):").toLowerCase();
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
sistemaDescuentos();