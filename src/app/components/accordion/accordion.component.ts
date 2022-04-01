import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

	@Input() public title: string;
	@Input() public description: string;

	public showContent: boolean = false;

	constructor() { }

	public toggle(): void {
		this.showContent = !this.showContent;
	}

}
