import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnChanges {

	@Input() isOpened = true;
	@Input() navListTemplate!: TemplateRef<unknown>;
	@Output() isOpenedChange = new EventEmitter<boolean>();

  @ViewChild('navListContainer')
  private navListContainer!: ElementRef;

  ngOnChanges({navListTpl}: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

	onToggleSidenav() {
		this.isOpenedChange.emit(!this.isOpened);
	}
}
