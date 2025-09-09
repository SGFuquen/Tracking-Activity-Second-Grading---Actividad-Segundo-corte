let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let total = 0;
let mayor = -1000;
let menor = 1000;
let diaMayor = "";
let diaMenor = "";

for (let a = 0; a < 7; a++) {

    let temp = parseInt(
        prompt("Temperatura máxima del día " + dias[a] + ":"), 
        10
    );

    while (isNaN(temp) || temp < -50 || temp > 60) {
        temp = parseInt(
            prompt("Valor inválido. Ingresa temperatura de " + dias[a] + " entre -50 y 60:"), 
            10
        );
    }

    total = total + temp;

    if (temp > mayor) {
        mayor = temp;
        diaMayor = dias[a];
    }

    if (temp < menor) {
        menor = temp;
        diaMenor = dias[a];
    }
}

let promedio = total / 7;

alert(
    "Resumen semanal:\n" +
    "Promedio de temperatura: " + promedio.toFixed(1) + "°C\n" +
    "Día más caluroso: " + diaMayor + " (" + mayor + "°C)\n" +
    "Día más frío: "    + diaMenor + " (" + menor + "°C)"
);