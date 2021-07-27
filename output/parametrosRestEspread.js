"use strict";

/**parametros rest lo que nos permite es ir recibiendo los parametros que se envien y los va almacenando en
 * un arreglo.
 */
var mostrarDatosRest = function mostrarDatosRest() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log('Mostrando datos rest: ', datos);
};

mostrarDatosRest('Camilo', 23, 'Ingeniero de software');
/**
 * Parametros espread: si tenemos un arreglo podemos pasar todas las posiciones de ese arreglo como argumentos.
 */

var mostrarDatosEspread = function mostrarDatosEspread() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log('Mostrando datos spread', datos);
};

var arregloDatos = ['Juan David', 24, 'Ingeniero de químico'];
mostrarDatosEspread.apply(void 0, arregloDatos);