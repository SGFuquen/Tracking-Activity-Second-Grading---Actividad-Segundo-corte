let cantidad = parseInt(prompt("¿Cuántas asignaturas tienes?"), 10);

while (isNaN(cantidad) || cantidad < 1) {
    cantidad = parseInt(prompt("Valor inválido. Ingresa una cantidad mayor a 0:"), 10);
}

let suma = 0;

for (let a = 1; a <= cantidad; a++) {
    let nota = parseFloat(prompt("Ingresa la calificación de la asignatura " + a + ":"));

   while (isNaN(nota) || nota < 0 || nota > 5) {
        nota = parseFloat(prompt("Valor inválido. Ingresa una nota entre 0 y 5 para la asignatura " + a + ":"));
    }

     suma = suma + nota;
}
let promedio = suma / cantidad;

alert("Tu promedio final es: " + promedio.toFixed(2));