import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { AccordionComponent } from './accordion/accordion.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
	declarations: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		GoogleMapsComponent,
		ProfileComponent,
		ShowItemComponent,
		SideMenuComponent,
  		ToolbarComponent,
	],
	exports: [
		AccordionComponent,
		ContactComponent,
		FooterComponent,
		GoogleMapsComponent,
		ProfileComponent,
		ShowItemComponent,
		SideMenuComponent,
		ToolbarComponent
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }