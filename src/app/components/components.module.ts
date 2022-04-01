import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
	declarations: [
		AccordionComponent,
		FooterComponent,
		HeaderComponent,
		SideMenuComponent,
	],
	exports: [
		AccordionComponent,
		FooterComponent,
		HeaderComponent,
		SideMenuComponent
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }