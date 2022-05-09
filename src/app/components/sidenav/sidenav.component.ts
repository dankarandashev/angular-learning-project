import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	@Input() isOpened = true;
	@Input() navListTemplate!: TemplateRef<unknown>;
	@Output() isOpenedChange = new EventEmitter<boolean>();

	onToggleSidenav() {
		this.isOpenedChange.emit(!this.isOpened);
	}
}
