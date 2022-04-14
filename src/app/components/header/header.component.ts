import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public links: ILink[];
	public pages: string[];

	constructor() {
		this.links = configuration.links;
		this.pages = configuration.pages;
	}

}
