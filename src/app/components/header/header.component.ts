import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/global.config';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public links: ILink[];
	public pages: ILink[];

	constructor() {
		this.links = configuration.links;
		this.pages = configuration.pages;
	}

}
