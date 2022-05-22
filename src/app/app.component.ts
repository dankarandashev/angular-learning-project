import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'Angular learninig project';

	@ViewChild(SidenavComponent, { static: true })
	private sidenavComponent!: SidenavComponent;

	onMenuClick() {
		this.sidenavComponent.onToggleSidenav();
	}

	isOpenedChange() {}
}
