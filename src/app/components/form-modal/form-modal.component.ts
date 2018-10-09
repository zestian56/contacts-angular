import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from './../../models/contact';

/**
  Nombre: FormModalComponent
  Descripción: Componente para la ejecución de las acciones sobre cada uno de los contactos (añadir,visualizar,editar)
  Fecha creación: 09/10/2018
 */
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormMOdalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  /** 
      Nombre: strAction,
      Tipo: Cadena,
      Descripción: cadena que representa la acción a ejecutar (añadir,visualizar,editar)
   */
  @Input('action') strAction: string;
  /** 
      Nombre: objContact,
      Tipo: Objeto de clase Contact,
      Descripción:  Objeto recibido del padre representante del contacto
   */
  @Input('contact') objContact: Contact;
  /** 
      Nombre: numbContactIndex,
      Tipo: Número,
      Descripción: objeto utilizado como entrada para referenciar la posición en el arreglo del contacto
   */
  @Input('contactIndex') numbContactIndex: number;
  /** 
      Nombre: actionEmitter,
      Tipo: EventEmitter,
      Descripción: Objeto utilizado para manejar el envio de datos con el componente padre
   */
  @Output('actionPerformed') actionEmitter = new EventEmitter<any>();
  /** 
     Nombre: objFormValues,
      Tipo: Objeto,
      Descripción: objeto utilizado como referencia para dar los valores iniciales al form en el dom
   */
  objFormValues: {
    nombre: String,
    telefono: String,
    correo: String
  }

  /**
   * handleSubmit
   * Método que recibe los datos del form para enviarlos en el emitter
   * @param action :cadena que representa la acción a enviar (añadir,visualizar,editar)
   * @param form : objeto form generado por ngForm  con los valores del contacto
   * @param index : posición en el arreglo del contacto
   */
  handleSubmit(action: String, form: any, index: number) {
    const objTempContact = new Contact(form.value.nombre, form.value.telefono, form.value.correo);
    this.handleActionEmitter(action, objTempContact, index);
  }
  /**
   * handleActionEmitter
   * Método que ejecuta el emitter
   * @param action :cadena que representa la acción a enviar (añadir,visualizar,editar)
   * @param contact : objeto form generado por ngForm  con los valores del contacto
   * @param index : posición en el arreglo del contacto
   */
  handleActionEmitter(action: String, contact: Contact, index: number) {
    this.actionEmitter.emit({
      action: action,
      contact: contact,
      index: index
    });
  }
/**
 *  ngOnInit
 *  Metódo del ciclo de vida del componente ejecutado al iniciar
 */
  ngOnInit() {
    this.objFormValues = {
      nombre: this.objContact.nombre,
      correo: this.objContact.correo,
      telefono: this.objContact.telefono
    }
  }

}
