import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public links: string[] = [];

	constructor() {
		this.links = environment.pages
	}

}
