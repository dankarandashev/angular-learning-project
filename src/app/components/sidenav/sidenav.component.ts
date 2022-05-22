import {
	Component,
	Input,
	Output,
	EventEmitter,
	TemplateRef,
	ViewChild,
	ContentChild,
	OnInit,
	SimpleChanges,
	AfterViewInit,
	ViewContainerRef,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@ViewChild('navListContainer', {
		read: ViewContainerRef,
		static: true,
	})
	private navListContainer!: ViewContainerRef;

	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	@ContentChild('navListTpl', { static: true })
	private navListTemplate!: TemplateRef<unknown>;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

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
		// this.changeDetectorRef.markForCheck();
		this.changeDetectorRef.detectChanges();
	}

	viewNavListTemplate(): void {
		this.navListContainer.createEmbeddedView(this.navListTemplate);
	}
}
