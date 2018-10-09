import { Component, Input } from '@angular/core';
/**
  Nombre: CardComponent
  Descripción: Componente que sirve para mostrar contenido dentro de una card
  Fecha creación: 06/10/2018
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  // tslint:disable-next-line:no-input-rename
  /** 
      Nombre: strCardTitle,
      Tipo: Cadena,
      Descripción: recibido del padre, para asignar un titúlo a la card en el DOM
   */
  @Input('title') strCardTitle: String;
}
