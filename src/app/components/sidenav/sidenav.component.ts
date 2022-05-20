import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ContentChild, OnInit, SimpleChanges, AfterViewInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit {

  @ViewChild('navListContainer', {
    read: ViewContainerRef,
    static: true
  })
  private navListContainer!: ViewContainerRef;


  @ViewChild(MatDrawer, {static: true})
  private matDrawer!: MatDrawer;

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
    this.matDrawer.toggle();
	}

  viewNavListTemplate(): void {
    this.navListContainer.createEmbeddedView(this.navListTemplate);
  }
}
