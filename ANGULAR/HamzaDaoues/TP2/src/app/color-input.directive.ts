import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorInput]'
})
export class ColorInputDirective {

  COLOR_TABLE = ['#1152', '#445' , '#4471' , '#122336'];
  i = 1 ;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#4444';
  }

  @HostListener('input') input() {
    this.modifyColor();
  }
  modifyColor() {
    this.el.nativeElement.style.color = this.COLOR_TABLE[this.i];
    this.i = (this.i +1) % 4 ;
  }


}
