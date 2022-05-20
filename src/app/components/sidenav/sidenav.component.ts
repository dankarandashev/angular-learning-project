import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ContentChild, OnInit, SimpleChanges, AfterViewInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit {

	@Input() isOpened = true;
	@Output() isOpenedChange = new EventEmitter<boolean>();

  @ViewChild('navListContainer', {
    read: ViewContainerRef,
    static: true
  })
  private navListContainer!: ViewContainerRef;

  @ContentChild('navListTpl', {static: true})
  private navListTemplate!: TemplateRef<unknown>;

  /**********************
  * NG HOOKS
  **********************/

  ngOnInit(): void {
    this.viewNavListTemplate();
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
