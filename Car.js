const inventario = [
    { producto: "Huevos AAA", precio: 40000, stock: 10 },
    { producto: "Pan integral", precio: 1500, stock: 20 },
    { producto: "Vinagre blanco", precio: 3500, stock: 15 },
    { producto: "Pera", precio: 500, stock: 30 },
    { producto: "Carne de Res", precio: 5000, stock: 2 },
    { producto: "Agua con gas", precio: 1000, stock: 5 },
    { producto: "Aceite de Oliva", precio: 1500, stock: 30 },
    { producto: "Leche Entera", precio: 4500, stock: 21 },
    { producto: "Pan de 7000", precio: 7000, stock: 11 },
    { producto: "Pan de 50000", precio: 50000, stock: 3 }
];

const carrito = [];

function mostrarInventario() {
    alert(
        "Catálogo de productos disponibles:\n" +
        inventario.map((p, i) => `${i + 1}. ${p.producto} - $${p.precio} (Stock: ${p.stock})`).join('\n')
    );
}

function agregarAlCarrito() {
    mostrarInventario();
    const idx = Number(prompt("Ingrese el número del producto que desea añadir al carrito:")) - 1;
    if (idx < 0 || idx >= inventario.length) return alert("Producto no válido.");
    const cantidad = Number(prompt(`¿Cuántas unidades de "${inventario[idx].producto}" desea añadir?`));
    if (cantidad <= 0 || cantidad > inventario[idx].stock) return alert("Cantidad no válida o stock insuficiente.");

    let item = carrito.find(i => i.producto === inventario[idx].producto);
    if (item) {
        if (item.cantidad + cantidad > inventario[idx].stock + item.cantidad) return alert("No hay suficiente stock disponible.");
        item.cantidad += cantidad;
    } else {
        carrito.push({ producto: inventario[idx].producto, precio: inventario[idx].precio, cantidad });
    }
    inventario[idx].stock -= cantidad;
    alert(`"${inventario[idx].producto}" añadido al carrito.`);
}

function mostrarCarrito() {
    if (!carrito.length) return alert("El carrito está vacío.");
    let total = 0;
    let resumen = "Resumen de compra:\n" + carrito.map(item => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        return `- ${item.producto}: ${item.cantidad} x $${item.precio} = $${subtotal}`;
    }).join('\n');
    alert(`${resumen}\n\nTOTAL A PAGAR: $${total}`);
}

let salir = false;
do {
    switch (prompt(
        "Sistema de Carrito de Compras\n" +
        "1. Ver catálogo de productos\n" +
        "2. Añadir producto al carrito\n" +
        "3. Ver resumen y total\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    )) {
        case "1": mostrarInventario(); break;
        case "2": agregarAlCarrito(); break;
        case "3": mostrarCarrito(); break;
        case "4": salir = true; alert("Gracias por utilizar nuestro sistema de compras."); break;
        default: alert("Opción no válida. Por favor, seleccione una opción del menú.");
    }
} while (!salir);