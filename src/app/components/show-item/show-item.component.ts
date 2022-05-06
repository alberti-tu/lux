import { Component, Input } from '@angular/core';
import { IShow } from 'src/app/models/interfaces';

@Component({
	selector: 'show-item',
	templateUrl: './show-item.component.html',
	styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent {

	@Input() public data: IShow;

	public showMap: boolean = false;

	constructor() { }

	public toggleMap(): void {
		this.showMap = !this.showMap;
	}

}
