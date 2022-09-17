import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // appUnless variable needs to hae exact same name as the selector, 
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
// templateRef is the "what is rendered", vcRef is the "where it is rendered"
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
