import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent
	],
	exports: [
		FooterComponent,
		HeaderComponent
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }