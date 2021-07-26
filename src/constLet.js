// ###################### Funciones de flechas ######################

let nombres = ['Paulo', 'Miguel', 'Arturo', 'Zamir', 'Cristian']

//Forma # 1
//Cuando la funcion tipo flecha lleva llaves, se debe de retornar siempre con la palabra return.
let numero_caracteres = nombres.map((nombre) => {
    return `${nombre} tiene ${nombre.length} letras `
})

//Forma # 2
//Cuano en la funcion map solo tiene un solo parametro, se puede dejar todo en una sola linea son parentesis
let num_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras `)

console.log(num_caracteres);

// ###################### Destructuracion de arreglos ######################
