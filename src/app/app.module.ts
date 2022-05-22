import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgClassModule } from './shared/directives/ng-class/ng-class.module';
import { ClickShadowModule } from './shared/directives/click-shadow/click-shadow.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
		MatInputModule,
		MatListModule,
    NgClassModule,
    ClickShadowModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
