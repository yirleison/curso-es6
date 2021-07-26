"use strict";

// ###################### Funciones de flechas ######################
var nombres = ['Paulo', 'Miguel', 'Arturo', 'Zamir', 'Cristian']; //Forma # 1

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras ");
}); //Forma # 2

var num_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras ");
});
console.log(num_caracteres); // ###################### Destructuracion de arreglos ######################