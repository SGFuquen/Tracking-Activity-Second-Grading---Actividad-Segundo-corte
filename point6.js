let saldo = 1000;
let opcion;

do {
    opcion = parseInt(prompt(
        "Selecciona operación:\n" +
        "1. Consultar saldo\n" +
        "2. Retirar\n" +
        "3. Depositar\n" +
        "4. Salir"
    ), 10);

    while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {
        opcion = parseInt(prompt(
            "Opción inválida. Selecciona:\n" +
            "1. Consultar saldo\n" +
            "2. Retirar\n" +
            "3. Depositar\n" +
            "4. Salir"
        ), 10);
    }

    if (opcion == 1) {
        alert("Tu saldo actual es: $" + saldo);
    }

    if (opcion == 2) {
        let retiro = parseInt(prompt("¿Cuánto deseas retirar?"), 10);

        while (isNaN(retiro) || retiro < 0 || retiro > saldo) {
            retiro = parseInt(prompt("Monto inválido. Ingresa un valor entre 0 y " + saldo), 10);
        }

        saldo = saldo - retiro;
        alert("Retiro exitoso. Nuevo saldo: $" + saldo);
    }

    if (opcion == 3) {
        let deposito = parseInt(prompt("¿Cuánto deseas depositar?"), 10);

        while (isNaN(deposito) || deposito < 0) {
            deposito = parseInt(prompt("Monto inválido. Ingresa un valor mayor o igual a 0"), 10);
        }

        saldo = saldo + deposito;
        alert("Depósito exitoso. Nuevo saldo: $" + saldo);
    }

} while (opcion != 4);

alert("Gracias por usar el cajero. Operación finalizada.");