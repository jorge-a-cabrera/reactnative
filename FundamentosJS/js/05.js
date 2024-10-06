// Object - Manipulacion


const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
}

// Object.freeze(producto) --> no permite modificar, ni agregar ni eliminar componentes
// Object.seal(producto) --> permite modificar, pero no permite agregar ni eliminar.

producto.nombre = "Monitor curvo"
producto.imagen = "imagen.jpg"

delete producto.disponible

console.table(producto)