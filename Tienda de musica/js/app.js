let carrito = [];
let stickers = new Set();

function agregarDisco(nombre, precio, viniloId) {
    let vinilo = document.getElementById(viniloId);

    if (vinilo.checked) {
        precio += 10000;
        nombre += " + Vinilo";
    }

    carrito.push({nombre, precio});

    actualizarCarrito();
}

function agregarSticker(nombre, precio) {
    if (!stickers.has(nombre)) {
        stickers.add(nombre);
        carrito.push({nombre, precio});
        actualizarCarrito();
    } else {
        alert("Ese sticker ya está agregado");
    }
}

function agregarLibro(nombre, precio, tapaName) {
    let tapas = document.getElementsByName(tapaName);

    let tipoTapa = "";

    tapas.forEach(tapa => {
        if (tapa.checked) {
            tipoTapa = tapa.parentElement.textContent.trim();
        }
    });

    carrito.push({
        nombre: nombre + " - " + tipoTapa,
        precio: precio
    });

    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let totalTexto = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    let subtotal = 0;
    let descuento = 0;
    let porcentaje = 0;

    carrito.forEach(producto => {
        lista.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
        subtotal += producto.precio;
    });

    if (carrito.length > 3) {
        descuento = subtotal * 0.10;
        porcentaje = 10;
    }

    if (subtotal > 50000) {
        descuento = subtotal * 0.15;
        porcentaje = 15;
    }

    let totalFinal = subtotal - descuento;

    totalTexto.innerHTML = `
        Subtotal: $${subtotal}<br>
        Descuento (${porcentaje}%): $${descuento}<br>
        Total: $${totalFinal}<br>
    `;
}



