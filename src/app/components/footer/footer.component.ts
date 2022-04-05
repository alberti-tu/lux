import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	public bank: string;
	public links: Link[];

	constructor() {
		this.bank = configuration.bank;
		this.links = configuration.links;
	}

}
