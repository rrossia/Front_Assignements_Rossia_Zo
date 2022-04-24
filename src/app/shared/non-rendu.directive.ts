import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]'
})
export class NonRenduDirective {

//maka ny element any am html, ilay eo am selector fotsiny no atao ao am balise
  constructor(el:ElementRef) { 
    el.nativeElement.style.color='red';
    el.nativeElement.style.border = '2px dashed orange';
  }
}
