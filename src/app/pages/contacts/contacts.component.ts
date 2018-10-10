import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
/**
  Nombre: ContactsComponent
  Descripción: Componente padre para alojar todos los componentes de la pagina principal
  Fecha creación: 06/10/2018
 */
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  /** 
    Nombre: arrContacts,
    Tipo: Array de Objetos de la clase Contact,
    Descripción: Utilizado para la impresión de cada uno de los contactos en la tabla
 */
  arrContacts: Array<Contact> = [
    new Contact('Alejandro Quinonez', '1244583', 'javier@gmail.com'),
    new Contact('Sebastian Botero', '3750405', 'sebas-565@hotmail.com'),
    new Contact('Mateo Tafurtz', '1244583', 'mateo@gmail.com'),
    new Contact('Juan Cardona', '3750405', 'j.cardona@uao.edu.co'),
    new Contact('Helén Brion', '3750405', 'Helen@brion.com')
  ];
  /** 
    Nombre: arrContacts,
    Tipo: Objeto de la clase Contact,
    Descripción: Objeto que representa el objeto que sera editado, visualizado o añadido
 */
  objContactFocus: Contact = new Contact('', '', '');
  /** 
    Nombre: numbContactFocusIndex,
    Tipo: Número,
    Descripción: Utilizado para obtener la posición en el arreglo para el objeto focus
 */
  numbContactFocusIndex: number = 0;
  /** 
    Nombre: boolIsOpen,
    Tipo: Booleano,
    Descripción: Utilizado para detectar  si está abierto o no el modal y/o abrirlo y cerrarlo
 */
  boolIsOpen: Boolean = false;
  /** 
    Nombre: strAction,
    Tipo: Cadena,
    Descripción: Utilizado para enviar la acción a ejecutar al modal (editar,visualizar,añadir)
 */
  strAction: String = '';
  /**
   * openModal
   * Método que abre el modal
   */
  openModal() {
    this.boolIsOpen = true;
  }
  /**
 * closeModal
 * Método que cierra el modal
 */
  closeModal() {
    this.boolIsOpen = false;
    this.objContactFocus = new Contact('', '', '');
  }
  /**
   * handleModal
   * Evento que realiza las acciones correspientes al evento que se envia en el componente modal
   * @param event : evento que recibe del event emitter en el componente modal
   */
  handleModal(event: any) {
    switch (event.action) {
      case 'close':
        this.closeModal();
        break;
      case 'editar':
        this.closeModal();
        this.arrContacts[event.index] = event.contact
        break;
      case 'añadir':
        this.closeModal();
        this.arrContacts.push(event.contact)
        break;
    }
  }
  /**
   * contactActionHandler
   * Método que realiza las acciones correspondientes a los botónes de los contactos(visualizar,editar,eliminar,añadir)
   * @param actionId :id de la acción a realizar
   * @param contactIndex : posición en el arreglo de contactos del contacto
   */
  contactActionHandler(actionId: number, contactIndex: number) {
    switch (actionId) {
      case 1:
        this.openModal()
        this.objContactFocus = this.arrContacts[contactIndex];
        this.numbContactFocusIndex = contactIndex;
        this.strAction = 'editar';
        break;
      case 2:
        this.openModal()
        this.objContactFocus = this.arrContacts[contactIndex];
        this.strAction = 'visualizar';
        break;
      case 3:
        this.arrContacts.splice(contactIndex, 1);
        break;
      case 4:
        this.openModal();
        this.strAction = 'añadir'
        break;
      default:
        break;
    }
  }


}
