import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appClickShadow]',
})
export class ClickShadowDirective {
	@HostListener('click')
	onClick() {
		this.boxBorder = this.boxBorder ? '' : '#000 3px solid';
	}

	@HostBinding('style.border') // bind to value of DOM element, ex. style="border: `sth`"
	private boxBorder = '';
}
