import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent,
		SideMenuComponent
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		SideMenuComponent
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }