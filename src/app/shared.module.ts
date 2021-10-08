import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import localeEn from "@angular/common/locales/en"
import localeEs from "@angular/common/locales/es"
import { registerLocaleData } from "@angular/common";
import { CustomDatePipe } from "src/app/pipes/date.pipe";

registerLocaleData(localeEn);
registerLocaleData(localeEs);

@NgModule({
	declarations: [
		CustomDatePipe
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		TranslateModule,

		MatButtonModule,
		MatDialogModule,
		MatListModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatToolbarModule,

		MatButtonModule,
		MatListModule,
		MatSliderModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,

		CustomDatePipe
	],
	providers: [
		CustomDatePipe
	]
})
export class SharedModule { }