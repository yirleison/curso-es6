class Usuario {

    constructor(nombre, apellidos, direccion, telefono, correo) {
        this.nombre = nombre,
            this.apellidos = apellidos,
            this.direccion = direccion,
            this.telefono = telefono,
            this.correo = correo
    }

    mostrarInfo() {
        return `<b>${this.nombre}</b><br/>
                <b>${this.apellidos}</b><br/>
                <b>${this.direccion}</b><br/>
                <b>${this.telefono}</b><br/>
                <b>${this.correo}</b><br/>`

    }
}

class Estudiante extends Usuario {
    constructor(nombre, apellidos, direccion, telefono, correo, carrera) {
        super(nombre, apellidos, direccion, telefono, correo)
        this.carrera = carrera
    }

    /**Sobre escribimos el metodo mostrarInfo() de la clase padre la cual estamos heredando,para asi mostrar tambien
     * los atributos propios de la clase hija
    */
    mostrarInfo() {
        return `<b>${this.nombre}</b><br/>
                <b>${this.apellidos}</b><br/>
                <b>${this.direccion}</b><br/>
                <b>${this.telefono}</b><br/>
                <b>${this.correo}</b><br/>
                <b>${this.carrera}</b><br/>
                <hr/>`
    }
}

let estudiante1 = new Estudiante('Camilo', 'Lopez', 'Calle 45 # 34 - 98', '3342312', 'carlos@gmail.com', 'Ingeniero')
let estudiante2 = new Estudiante('Cristian', 'Marrugo', 'Calle 56 # 34 - 99', '564332453', 'camilo@gmail.com', 'Fisico')

document.write(estudiante1.mostrarInfo())
document.write(estudiante2.mostrarInfo())
