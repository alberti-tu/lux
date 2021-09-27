import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { SharedModule } from "src/app/shared.module";

import { HomePage } from "./home.page";

const routes: Routes = [
	{ path: '', component: HomePage }
];

@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		ComponentsModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class HomeModule { }