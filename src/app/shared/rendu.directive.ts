import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  //maka ny element any am html
  constructor(el:ElementRef) { 
    el.nativeElement.style.color='green';
  }
 
}
