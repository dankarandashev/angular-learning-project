import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickShadow]'
})
export class ClickShadowDirective {
  @HostListener('click')
  onClick() {
    // alert('click')
    this.isBoxShadowActive = !this.isBoxShadowActive;
    if (this.isBoxShadowActive) {
      this.element.style.boxShadow = 'inset 0 0 10px #000';
      return;
    }
    this.element.style.boxShadow = '';
  }

  private element!: HTMLElement;
  private isBoxShadowActive: boolean = false;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }
}
