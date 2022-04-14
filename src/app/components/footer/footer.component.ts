import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/global.config';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	public bank: string;
	public footer: string;
	public links: ILink[];

	constructor() {
		this.bank = configuration.bank;
		this.footer = configuration.footer;
		this.links = configuration.links;
	}

}
