"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ###################### Funciones de flechas ######################
var nombres = ['Camilo', 'Miguel', 'Arturo', 'Zamir', 'Cristian']; //Forma # 1
//Cuando la funcion tipo flecha lleva llaves, se debe de retornar siempre con la palabra return.

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras ");
}); //Forma # 2

/**Map: es una funciion la cual recive como parametro otra funcion sea normal o de flecha
 * Cuando en en el map, la funcion que recibe como parametro solo tiene un solo parametro, se puede dejar todo en una sola linea son parentesis
 */

var num_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras ");
}); // console.log(num_caracteres);
// ###################### Destructuracion de arreglos ######################

var persona_1 = ['Francisco', 27, 'Colombia', 'Desarrollador de software'];
var persona_2 = ['Francisco', 27, 'Colombia']; //Con un espacio seguido de una coma se omiten los datos los cuales no se quieres mostarar.

var nombre = persona_2[0],
    edad = persona_2[1],
    _persona_2$ = persona_2[3],
    profesion = _persona_2$ === void 0 ? 'No especificado' : _persona_2$; //onsole.log(nombre, edad, profesion)
// Destructuración por medio de una funciom

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona_1,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'No especificado' : _ref2$;

  return console.log(nombre, profesion);
}; //mostrarInfo(persona_2)
// ###################### Destructuracion de objetos ######################


var usuario = {
  nom: 'Juan Camilo',
  correo: 'camilo@mail.com',
  edad: 22,
  pais: 'Colombia',
  profesion: 'Desarrollador de software'
};
var nom = usuario.nom,
    pais = usuario.pais;

var mostrarInfoObj = function mostrarInfoObj(_ref3) {
  var nom = _ref3.nom,
      pais = _ref3.pais;
  return console.log("".concat(nom, " es de: ").concat(pais));
};

mostrarInfoObj(usuario);