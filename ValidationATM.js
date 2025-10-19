
let cuentas = [
    { numero: "1001", tipo: "Ahorros", saldo: 0 },
    { numero: "1002", tipo: "Corriente", saldo: 999999999999 }
];

const documentoCorrecto = "7392057790";
const pinCorrecto = "6969";

//funciones pr --------------------------------------------------------------------

function validarAcceso() {
    let intentos = 0;
    while (intentos < 3) {
        let doc = prompt("Ingrese su documento de identidad: (7392057790)");
        let pin = prompt("Ingrese su PIN de 4 dígitos: (6969)");
        if (doc === documentoCorrecto && pin === pinCorrecto) {
            return true;
        } else {
            intentos++;
            alert(`Datos incorrectos. Intento ${intentos} de 3.`);
        }
    }
    alert("Acceso bloqueado. Ha superado el numero maximo de intentos.");
    return false;
}

function seleccionarCuenta(mensaje) { //crear el texto usando map, esto permite mostrar la lista 
    let cuentasStr = cuentas.map((c, i) => `${i + 1}. ${c.tipo} (${c.numero}) - Saldo: $${c.saldo}`).join('\n');
    let idx = Number(prompt(`${mensaje}\n`
                     + `${cuentasStr}\nSeleccione el numero de cuenta:`)) - 1;
    if (idx >= 0 && idx < cuentas.length) {
        return idx;
    } else {
        alert("Selección invalida.");
        return null;
    }
}

//funciones operaciones

function retiro() {
    let idx = seleccionarCuenta("Seleccione la cuenta para retirar:");
    if (idx === null) return;
    let monto = Number(prompt("Ingrese el monto a retirar (multiplos de COP$50000):"));
    if (monto % 50000 !== 0 || monto <= 0) { 
        alert("Monto invalido. Debe ser múltiplo de COP$50000.");
        return;
    }
    if (monto > cuentas[idx].saldo) {
        alert("Fondos insuficientes.");
        return;
    }
    cuentas[idx].saldo -= monto;
    alert(`Retiro exitoso, puede tomar COP$${monto} de la bandeja principal.`);
}

function deposito() {
    let idx = seleccionarCuenta("Seleccione la cuenta para depositar:");
    if (idx === null) return;
    let monto = Number(prompt("Ingrese el monto a depositar:"));
    if (monto <= 0) {
        alert("Monto invalido.");
        return;
    }
    let tipo = prompt("El deposito es en efectivo o cheque? (escriba 'efectivo' o 'cheque')");
    cuentas[idx].saldo += monto;
    alert(`Deposito de COP$${monto} en ${tipo} realizado exitosamente.`);
}

function transferencia() {
    let idxOrigen = seleccionarCuenta("Seleccione la cuenta de origen:");
    if (idxOrigen === null) return;
    let idxDestino = seleccionarCuenta("Seleccione la cuenta de destino:");
    if (idxDestino === null || idxDestino === idxOrigen) {
        alert("Cuenta de destino invalida.");
        return;
    }
    let monto = Number(prompt("Ingrese el monto a transferir:"));
    if (monto <= 0 || monto > cuentas[idxOrigen].saldo) {
        alert("Monto invalido o fondos insuficientes.");
        return;
    }
    cuentas[idxOrigen].saldo -= monto;
    cuentas[idxDestino].saldo += monto;
    alert(`Transferencia exitosa de COP$${monto} de la cuenta ${cuentas[idxOrigen].numero} a la cuenta ${cuentas[idxDestino].numero}.`);
}

function consultaSaldo() {
    let idx = seleccionarCuenta("Seleccione la cuenta para consultar saldo:");
    if (idx === null) return;
    alert(`Saldo actual de la cuenta ${cuentas[idx].numero}: COP$${cuentas[idx].saldo}`);
}

// menu
let continuar = true;
while (continuar) {
    if (!validarAcceso()) break;
    let salirCliente = false;
    while (!salirCliente) {
        let opcion = prompt(
            "ATM // Menu Cajero Automáatico\n" +
            "1. Retirar efectivo\n" +
            "2. Depositar dinero\n" +
            "3. Transferir entre cuentas\n" +
            "4. Consultar saldo\n" +
            "5. Salir\n" +
            "Seleccione una opción:"
        );
        switch (opcion) {
            case "1":
                retiro();
                break;
            case "2":
                deposito();
                break;
            case "3":
                transferencia();
                break;
            case "4":
                consultaSaldo();
                break;
            case "5":
                alert("chao");
                salirCliente = true;
                break;
            default:
                alert("Opcion no valida.");
        }
        if (!salirCliente) {
            salirCliente = prompt("Desea realizar otra transacción? (si/no)").toLowerCase() !== "si";
        }
    }
    continuar = false; // solo un cliente a la vez
}