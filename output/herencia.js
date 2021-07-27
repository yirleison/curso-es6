"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, apellidos, direccion, telefono, correo) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre, this.apellidos = apellidos, this.direccion = direccion, this.telefono = telefono, this.correo = correo;
  }

  _createClass(Usuario, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "<b>".concat(this.nombre, "</b><br/>\n                <b>").concat(this.apellidos, "</b><br/>\n                <b>").concat(this.direccion, "</b><br/>\n                <b>").concat(this.telefono, "</b><br/>\n                <b>").concat(this.correo, "</b><br/>");
    }
  }]);

  return Usuario;
}();

var Estudiante = /*#__PURE__*/function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  var _super = _createSuper(Estudiante);

  function Estudiante(nombre, apellidos, direccion, telefono, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    _this = _super.call(this, nombre, apellidos, direccion, telefono, correo);
    _this.carrera = carrera;
    return _this;
  }
  /**Sobre escribimos el metodo mostrarInfo() de la clase padre la cual estamos heredando,para asi mostrar tambien
   * los atributos propios de la clase hija
  */


  _createClass(Estudiante, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "<b>".concat(this.nombre, "</b><br/>\n                <b>").concat(this.apellidos, "</b><br/>\n                <b>").concat(this.direccion, "</b><br/>\n                <b>").concat(this.telefono, "</b><br/>\n                <b>").concat(this.correo, "</b><br/>\n                <b>").concat(this.carrera, "</b><br/>\n                <hr/>");
    }
  }]);

  return Estudiante;
}(Usuario);

var estudiante1 = new Estudiante('Camilo', 'Lopez', 'Calle 45 # 34 - 98', '3342312', 'carlos@gmail.com', 'Ingeniero');
var estudiante2 = new Estudiante('Cristian', 'Marrugo', 'Calle 56 # 34 - 99', '564332453', 'camilo@gmail.com', 'Fisico');
document.write(estudiante1.mostrarInfo());
document.write(estudiante2.mostrarInfo());