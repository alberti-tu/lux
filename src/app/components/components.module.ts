import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { AccordionComponent } from './accordion/accordion.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { HeaderComponent } from "./header/header.component";
import { ProfileComponent } from './profile/profile.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
	declarations: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		GoogleMapsComponent,
		HeaderComponent,
		ProfileComponent,
		ShowItemComponent,
		SideMenuComponent,
	],
	exports: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		GoogleMapsComponent,
		HeaderComponent,
		ProfileComponent,
		ShowItemComponent,
		SideMenuComponent,
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }