import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { AccordionComponent } from './accordion/accordion.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		HeaderComponent,
		ProfileComponent,
		SideMenuComponent,
	],
	exports: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		HeaderComponent,
		ProfileComponent,
		SideMenuComponent,
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }