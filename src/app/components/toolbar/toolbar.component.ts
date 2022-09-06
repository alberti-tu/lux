import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/development/global.config';

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	public links: ILink[];
	public pages: ILink[];

	constructor() {
		this.links = configuration.links;
		this.pages = configuration.pages;
	}

}
