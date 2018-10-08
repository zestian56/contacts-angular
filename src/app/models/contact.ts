export class Contact {

    private _strNombre: String;
    private _strTelefono: String;
    private _strCorreo: String;

    constructor(nombre: string, telefono: string, correo: string) {
        this._strNombre = nombre;
        this._strTelefono = telefono;
        this._strCorreo = correo;
    }
    get nombre(): String {
        return this._strNombre;
    }
    get telefono(): String {
        return this._strTelefono;
    }
    get correo(): String {
        return this._strCorreo;
    }
    set nombre(nombre: String) {
        this._strNombre = nombre;
    }
    set correo(correo: String) {
        this._strCorreo = correo;
    }
    set telefono(telefono: String) {
        this._strTelefono = telefono;
    }
}
