import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

import localeEn from "@angular/common/locales/en"
import localeEs from "@angular/common/locales/es"

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

		CustomDatePipe
	],
	providers: [
		CustomDatePipe
	]
})
export class SharedModule { }