const sistemaTurnos = {
    cola: [],
    contador: 0,

    tomarTurno() {
        this.contador++;
        this.cola.push(this.contador);
        alert(`Turno asignado exitosamente. Su número de turno es: ${this.contador}`);
    },

    llamarCliente() {
        if (this.cola.length === 0) {
            alert("No hay clientes en espera.");
            return;
        }
        const turnoLlamado = this.cola.shift();
        alert(`Cliente con turno número ${turnoLlamado}, por favor diríjase al área de atención.`);
    },

    mostrarCola() {
        alert(
            this.cola.length === 0
                ? "No hay clientes en la fila de espera."
                : "Turnos en espera:\n" + this.cola.join(", ")
        );
    },

    mostrarContador() {
        alert(`Total de turnos generados: ${this.contador}`);
    }
};

// Menú principal
let salir = false;
do {
    let opcion = prompt(
        "Sistema de Gestión de Turnos - Banco\n" +
        "1. Solicitar turno\n" +
        "2. Llamar al siguiente cliente\n" +
        "3. Ver cola de espera\n" +
        "4. Ver total de turnos generados\n" +
        "5. Salir\n" +
        "Por favor, seleccione una opción:"
    );
    switch (opcion) {
        case "1":
            sistemaTurnos.tomarTurno();
            break;
        case "2":
            sistemaTurnos.llamarCliente();
            break;
        case "3":
            sistemaTurnos.mostrarCola();
            break;
        case "4":
            sistemaTurnos.mostrarContador();
            break;
        case "5":
            salir = true;
            alert("Gracias por utilizar el sistema de gestión de turnos.");
            break;
        default:
            alert("Opcion invalida. Por favor, seleccione una opción del menú.");
    }
} while (!salir);