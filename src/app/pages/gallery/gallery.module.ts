import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { SharedModule } from "src/app/shared.module";

import { GalleryPage } from "./gallery.page";
import { PlayerPage } from "./player/player.page";

const routes: Routes = [
	{ path: '', component: GalleryPage },
	{ path: 'player', component: PlayerPage }
];

@NgModule({
	declarations: [
		GalleryPage,
		PlayerPage
	],
	imports: [
		ComponentsModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class GalleryModule { }