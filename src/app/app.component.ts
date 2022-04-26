import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learning-project';
	iconLink = 'https://ankaraozgursurucukursu.com/wp-content/uploads/2020/10/icon.png';

	log(event: Event): void {
		console.log('Click!', event);
	}
}
