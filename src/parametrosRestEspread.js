/**parametros rest lo que nos permite es ir recibiendo los parametros que se envien y los va almacenando en
 * un arreglo.
 */

const mostrarDatosRest = (...datos) => {
    console.log('Mostrando datos rest: ', datos);
}

mostrarDatosRest('Camilo', 23, 'Ingeniero de software')

/**
 * Parametros espread: si tenemos un arreglo podemos pasar todas las posiciones de ese arreglo como argumentos.
 */

const mostrarDatosEspread = (...datos) => {
    console.log('Mostrando datos spread', datos);
}

const arregloDatos = ['Juan David', 24, 'Ingeniero de químico']
mostrarDatosEspread(...arregloDatos)

