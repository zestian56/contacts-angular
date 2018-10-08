import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTableRowColor]'
})
export class TableRowColorDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appTableRowColor') appTableRowColor: Boolean;
  constructor(private el: ElementRef) {
  }
  ngOnChanges() {
    this.changeColor(this.appTableRowColor);
  }
  changeColor(dark: Boolean) {
    if (dark === true) {
      this.el.nativeElement.style.background = 'rgba(0,0,0,0.09)';
    } else {
      this.el.nativeElement.style.background = 'rgba(0,0,0,0.05)';
    }
  }
}
