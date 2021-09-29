import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { SharedModule } from "src/app/shared.module";

import { GalleryPage } from "./gallery.page";

const routes: Routes = [
	{ path: '', component: GalleryPage }
];

@NgModule({
	declarations: [
		GalleryPage
	],
	imports: [
		ComponentsModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class GalleryModule { }