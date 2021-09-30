import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	public links: Link[];

	constructor() {
		this.links = environment.links;
	}

}
