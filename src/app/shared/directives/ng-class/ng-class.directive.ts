import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appNgClass]',
})
export class NgClassDirective implements OnChanges {
	@Input() appNgClass: Record<string, unknown> = {};

  private element!: HTMLElement;

	constructor(
    private elementRef: ElementRef                    // DI; to get a current element
  ) {
    this.element = this.elementRef.nativeElement;     // getting a current element to chahge classList
  }

	ngOnChanges({ appNgClass }: SimpleChanges): void {
		const prevValue: Record<string, unknown> = appNgClass.previousValue;

		Object.entries(this.appNgClass)
			.filter(([className, isActive]) => (prevValue
        ? prevValue[className] !== isActive            // if previous value IS NOT active -> add class (toggle)
        : isActive)                                    // if current value IS active -> add class
      )
			.forEach(([className, isActive]) => {
				this.toggleClass(className, isActive);
			});
	}

  private toggleClass(className: string, isActive: unknown): void {
    if (isActive) {
      this.element.classList.add(className);
      return;
    }
    this.element.classList.remove(className);
  }
}
