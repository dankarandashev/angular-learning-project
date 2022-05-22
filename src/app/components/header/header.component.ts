import { Component, EventEmitter, HostListener, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() title!: string;
	@Output() menuClick = new EventEmitter<void>();

	// as an example
	// @HostListener('click', ['$event.target', '$event'])
	// hostLog(target: HTMLElement, event: Event): void {
	//   console.log('host click', target, event);
	// }
}
