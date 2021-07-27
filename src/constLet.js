// ###################### Funciones de flechas ######################

let nombres = ['Camilo', 'Miguel', 'Arturo', 'Zamir', 'Cristian']

//Forma # 1
//Cuando la funcion tipo flecha lleva llaves, se debe de retornar siempre con la palabra return.
let numero_caracteres = nombres.map((nombre) => {
    return `${nombre} tiene ${nombre.length} letras `
})

//Forma # 2
/**Map: es una funciion la cual recive como parametro otra funcion sea normal o de flecha
 * Cuando en en el map, la funcion que recibe como parametro solo tiene un solo parametro, se puede dejar todo en una sola linea son parentesis
 */
let num_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras `)

// console.log(num_caracteres);

// ###################### Destructuracion de arreglos ######################

const persona_1 = ['Francisco', 27, 'Colombia', 'Desarrollador de software']
const persona_2 = ['Francisco', 27, 'Colombia']

//Con un espacio seguido de una coma se omiten los datos los cuales no se quieres mostarar.
const [nombre, edad, , profesion = 'No especificado'] = persona_2

//onsole.log(nombre, edad, profesion)

// Destructuración por medio de una funciom

const mostrarInfo = ([nombre, , , profesion = 'No especificado'] = persona_1) => console.log(nombre, profesion)

//mostrarInfo(persona_2)

// ###################### Destructuracion de objetos ######################

const usuario = {
    nom: 'Juan Camilo',
    correo: 'camilo@mail.com',
    edad: 22,
    pais: 'Colombia',
    profesion: 'Desarrollador de software'
};

const { nom, pais } = usuario;

const mostrarInfoObj = ({ nom, pais }) => console.log(`${nom} es de: ${pais}`)

mostrarInfoObj(usuario)