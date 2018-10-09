import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';
/**
 * TableRowColorDirective
 * Directiva para cambiar el color del background de algun componente
 */
@Directive({
  selector: '[appTableRowColor]'
})
export class TableRowColorDirective {
  // tslint:disable-next-line:no-input-rename
  /**
   * Nombre: appTableRowColor
   * Tipo :Boolean
   * Descripción :recibido del padre para determinar si el color sera oscuro o claro
   */
  @Input('appTableRowColor') appTableRowColor: Boolean;
  /**
   * Constructor
   * Metódo que construye la directiva
   * @param el : Elemento rerferencia del dom al objeto que se le aplica la directiva
   */
  constructor(private el: ElementRef) {
  }
  /**
   * ngOnChanges
   * Método del ciclo de vida que se ejecuta cuando hay cambios en las variables de la clase
   */
  ngOnChanges() {
    this.changeColor(this.appTableRowColor);
  }
  /**
   * changeColor
   * Método que cambia el color del background del elemento
   * @param dark : Booleano que determina si el color sera oscuro o claro
   */
  changeColor(dark: Boolean) {
    if (dark === true) {
      this.el.nativeElement.style.background = 'rgba(0,0,0,0.08)';
    } else {
      this.el.nativeElement.style.background = 'rgba(0,0,0,0.04)';
    }
  }
}
