import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { SharedModule } from "src/app/shared.module";

import { AboutPage } from "./about.page";

const routes: Routes = [
	{ path: '', component: AboutPage }
];

@NgModule({
	declarations: [
		AboutPage
	],
	imports: [
		ComponentsModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class AboutModule { }