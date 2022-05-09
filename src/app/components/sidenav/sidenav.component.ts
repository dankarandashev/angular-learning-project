import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnChanges, AfterViewInit {
	@Input() isOpened = true;
	@Input() navListTemplate!: TemplateRef<unknown>;
	@Output() isOpenedChange = new EventEmitter<boolean>();

	// essentially replacing the query-selector; if you need access from the ngOnInit method, you must specify static: true
	@ViewChild('navListContainer')
	private navListContainer!: ElementRef<HTMLElement>;

	/*******************************
	 * NG HOOKS
	 *******************************/

	ngOnChanges({ navListTemplate }: SimpleChanges): void {
		if (navListTemplate) {
			this.viewNavListTemplate();
		}
	}

	ngAfterViewInit(): void {
		console.log(this.navListContainer);
		// nativeElement is a regular DOM element
		this.navListContainer.nativeElement.style.width = '100px';
		this.navListContainer.nativeElement.style.height = '100px';
		this.navListContainer.nativeElement.style.background = 'red';
	}


	/*******************************
	 * HELPERS
	 *******************************/

	private onToggleSidenav(): void {
		this.isOpenedChange.emit(!this.isOpened);
	}

	private viewNavListTemplate(): void { }
}
