import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { SharedModule } from "src/app/shared.module";

import { ShowsPage } from "./shows.page";

const routes: Routes = [
	{ path: '', component: ShowsPage }
];

@NgModule({
	declarations: [
		ShowsPage
	],
	imports: [
		ComponentsModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class ShowsModule { }