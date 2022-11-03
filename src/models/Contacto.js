export class Contacto {
    Nombre = String;
    Apellido = String;
    Email = String
    Conectado = Boolean

    constructor(nombre,apellido,email,conectado){
        this.Nombre = nombre
        this.Apellido = apellido
        this.Email = email
        this.Conectado = conectado
    }
}