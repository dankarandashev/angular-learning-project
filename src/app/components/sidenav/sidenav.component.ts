import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnChanges {

	@Input() isOpened = true;
	@Input() navListTemplate!: TemplateRef<unknown>;
	@Output() isOpenedChange = new EventEmitter<boolean>();

  @ViewChild('navListContainer', {
    read: ViewContainerRef,
    static: true
  })
  private navListContainer!: ViewContainerRef;

  /**********************
  * NG HOOKS
  **********************/

  ngOnChanges({navListTemplate}: SimpleChanges): void {
    if (navListTemplate) {
      this.viewNavListTemplate();
    }
  }

  /**********************
  * HELPERS
  **********************/

	onToggleSidenav(): void {
		this.isOpenedChange.emit(!this.isOpened);
	}

  viewNavListTemplate(): void {
    this.navListContainer.createEmbeddedView(this.navListTemplate);
  }
}
