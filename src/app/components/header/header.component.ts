import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public links: Link[];
	public pages: string[];

	constructor() {
		this.links = environment.links;
		this.pages = environment.pages;
	}

}
