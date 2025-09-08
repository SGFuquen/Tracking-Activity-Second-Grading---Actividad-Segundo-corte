//nombre del jugador
function obtenerNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre de jugador:");
    } while (!nombre || nombre.length<2||nombre.split(" ").join("") == "");
    return nombre.split(" ").join("");
}

//nivel del jugador (1 a 5)
function obtenerNivel() {
    let nivel;
    let opciones = ["1", "2", "3", "4", "5"];
    do {
        nivel = prompt("Ingresa tu nivel actual (1-5):");
    } while (!opciones.includes(nivel));
    return Number(nivel); 
}

//calculadora de experiencia acumulada segun el nivel
function calcularExperiencia(nivel) {
    switch (nivel) {
        case 1: return 150;
        case 2: return 400;
        case 3: return 800;
        case 4: return 1300;
        case 5: return 2000;
        default: return 0;
    }
}

//recompensa segun el nivel
function obtenerRecompensa(nivel) {
    switch (nivel) {
        case 1: return ["Machete de madera", "50 monedas"];
        case 2: return ["Machete de diamante", "100 monedas"];
        case 3: return ["Armadura de diamante", "150 monedas"];
        case 4: return ["Pocion de vida", "Machete de Hierro"];
        case 5: return ["Espada ultra legendaria HD 4k ultra taqui taqui rumba", "300 monedas", "Gema magica"];
        default: return ["Sin recompensa"];
    }
}

//mensaje segun el nivel
function mensajeNivel(nivel) {
    switch (nivel) {
        case 1: return "Tu aventura comienza.";
        case 2: return "Has cruzado el puente y vencido a los ladrones.";
        case 3: return "Tu nombre es famoso en las fondas. Los campesinos te observan.";
        case 4: return "El patron te convoco. Tu machete brilla.";
        case 5: return "Has derrotado al ogro schrek. El pueblo cuenta tu historia.";
        default: return "Historia desconocida.";
    }
}

//barra de progreso
function mostrarProgreso(nivel) {
    let barra = "";
    let a = 1;
    while (a <= 5) {
        barra += (nivel >= a) * 1 ? "[#]" : "[ ]";
        a = a + 1;
    }
    return barra;
}

// resumen juego
function mostrarResumen(nombre, nivel, experiencia, recompensa, mensaje, progreso) {
    let texto = "=== RESUMEN DE JUGADOR ===\n";
    texto += "Nombre: " + nombre + "\n";
    texto += "Nivel actual: " + nivel + "\n";
    texto += "Experiencia acumulada: " + experiencia + " XP\n";
    texto += "Recompensas obtenidas:\n";
    for (let a = 0; a < recompensa.length; a++) {
        texto += " - " + recompensa[a] + "\n";
    }
    texto += "Historia: " + mensaje + "\n";
    texto += "Progreso: " + progreso;
    alert(texto);
}

// sistema de niveles
function sistemaDeNiveles() {
    let continuar = "s";
    let opciones = ["s", "n"];
    do {
        let nombre = obtenerNombre();
        let nivel = obtenerNivel();
        let experiencia = calcularExperiencia(nivel);
        let recompensa = obtenerRecompensa(nivel);
        let mensaje = mensajeNivel(nivel);
        let progreso = mostrarProgreso(nivel);

        mostrarResumen(nombre, nivel, experiencia, recompensa, mensaje, progreso);

        continuar = prompt("¿Deseas ingresar otro jugador? (s/n):").toLowerCase();
    } while (opciones.indexOf(continuar) == 0);
}

sistemaDeNiveles();