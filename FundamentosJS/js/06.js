// Object - Destructuring

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
}
const cliente = {
    nombre: "Maria Liz",
    premium: true,
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premiun} = cliente

console.log(nombre)
console.log(nombreCliente)