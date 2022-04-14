import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/configuration';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public concerts: number;
	public donations: string;
	public foundations: ILink[];
	public organizations: ILink[];

	constructor() {
		this.concerts = configuration.concerts;
		this.donations = configuration.donations;
		this.foundations = configuration.foundations;
		this.organizations = configuration.organizations;
	}

	public openLink(url: string): void {
		window.open(url);
	}
}
