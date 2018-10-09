import { Component,  Input } from '@angular/core';
import { Contact } from '../../models/contact';
/**
  Nombre: ContactComponent
  Descripción: Componente para la visualización de los datos de un contacto
  Fecha creación: 09/10/2018
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  // tslint:disable-next-line:no-input-rename
  /** 
      Nombre: objContact,
      Tipo: Objeto de clase Contact,
      Descripción: Recibido del padre para imprimir los datos del mismo en el DOM
   */
  @Input('contact') objContact: Contact;

}
