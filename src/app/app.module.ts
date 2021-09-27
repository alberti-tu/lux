import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AlertService } from './services/alert/alert.service';
import { TranslationService } from './services/translation/translation.service';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const routes: Routes = [
	{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
	{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ComponentsModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		TranslateModule.forRoot({
			loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
		})
	],
	providers: [
		AlertService,
        TranslationService
	]
})
export class AppModule { }