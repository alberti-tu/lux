import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { FooterComponent } from "./footer/footer.component";

@NgModule({
	declarations: [
		FooterComponent
	],
	exports: [
		FooterComponent
	],
	imports: [ SharedModule ]
})
export class ComponentsModule { }