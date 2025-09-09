const PASS_CORRECTA = "DayroMcqueen95";

let intentos = 0;

let accesoPermitido = false;

do {
    let entrada = prompt("Ingresa tu contraseña:");

    if (entrada != PASS_CORRECTA) {
        intentos = intentos + 1;
        alert("Contraseña incorrecta. Intento " + intentos + " de 3.");
    } else {
        accesoPermitido = true;
        alert("Acceso permitido. Bienvenido.");
    }

} while (accesoPermitido != true && intentos < 3);

if (accesoPermitido != true) {
    alert("Acceso bloqueado. Has superado el número de intentos.");
}