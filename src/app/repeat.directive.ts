import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeat]',
})
export class RepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('repeat') set count(c: number) {
    this.viewContainer.clear();
    for (var i = 0; i < c; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
