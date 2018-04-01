import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[authumnViewHost]',
})
export class AuthumnViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
