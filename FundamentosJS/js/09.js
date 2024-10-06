// Operaciones con arreglos

// const tecnologías = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Agregar elementos al array
// tecnologías.push('GraphQL') // Añade elementos al final del array
// tecnologías.unshift('GraphQL') // Añade elementos al final del array
// nuevaTecnología = ['GraphQL', ...tecnologías] // añade elemento al inicio del array pero sin modificar el array original de tecnología
// nuevaTecnología = [...tecnologías, 'GraphQL'] // añade elemento al inicio del array pero sin modificar el array original de tecnología


// Eliminar elementos del array
// nuevaTecnología.pop() // Elimina del final
// nuevaTecnología.shift() // Elimina del principio
// nuevaTecnología.splice(2,1) // Elimina de una posicion especifica

// nuevaTecnología = tecnologías.filter(function(tech){
//     return tech === 'JavaScript'
// })
const tecnologías = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

console.table(tecnologías)

const nuevaTecnología = tecnologías.map(function(tech){
    if (tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(nuevaTecnología)

