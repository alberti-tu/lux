import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ],
	imports: [
		AppRoutingModule,
		BrowserModule
	],
	providers: [],
})
export class AppModule { }
