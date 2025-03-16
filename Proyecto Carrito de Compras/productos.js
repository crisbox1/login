// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    let productoExistente = carrito.find(p => p.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad++; // Si ya existe, aumentar la cantidad
    } else {
        carrito.push({ nombre, precio, cantidad: 1 }); // Si no, agregarlo como nuevo
    }

    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalElemento = document.getElementById("total");
    let contadorCarrito = document.getElementById("contador-carrito");

    listaCarrito.innerHTML = ""; // Limpiar lista antes de actualizar

    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;
        cantidadTotal += producto.cantidad;

        let item = document.createElement("li");
        item.classList.add("carrito-item");
        item.innerHTML = `
            ${producto.nombre} (x${producto.cantidad}) - $${producto.precio * producto.cantidad}
            <button class="btn-eliminar" data-index="${index}">❌</button>
        `;
        listaCarrito.appendChild(item);
    });

    totalElemento.innerText = total;
    contadorCarrito.innerText = cantidadTotal;

    // Asociar eventos a los botones de eliminar
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let index = e.target.getAttribute("data-index");
            eliminarDelCarrito(index);
        });
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para mostrar u ocultar el carrito cuando se hace clic en el icono
function toggleCarrito() {
    let carrito = document.getElementById("carrito");
    carrito.classList.toggle("mostrar");
}

// Asociar eventos a los botones de los productos
document.addEventListener("DOMContentLoaded", () => {
    let botonesAgregar = document.querySelectorAll(".producto button");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            let producto = boton.closest(".producto");
            let nombre = producto.querySelector("h2").innerText;
            let precio = parseFloat(producto.querySelector("p").innerText.replace("Precio: $", "").replace(".", ""));
            agregarAlCarrito(nombre, precio);
        });
    });

    document.getElementById("carrito-icono").addEventListener("click", toggleCarrito);
});
