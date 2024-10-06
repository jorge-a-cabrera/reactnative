// Object - Union 

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
}
const cliente = {
    nombre: "Maria Liz",
    premium: true,
}

// producto.cliente = cliente // no se recomienda porque por principio en React un objeto no debe ser modificado
// const productoNuevo = Object.assign(producto, cliente) // esta opción tampoco se puede utilizar porque modifica el objeto producto.
// nuevoProducto = {...producto, ...cliente} // no modifica los objetos originales pero al unificar un campo comun queda con el valor de la ultima coincidencia.

nuevoProducto = {
    producto: {...producto},
    cliente: {...cliente},
}

console.log(producto)
console.log(cliente)
console.log(nuevoProducto)
