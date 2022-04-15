import { Component } from '@angular/core';
import { ILink } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/home.config';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public concerts: number;
	public donations: string;
	public foundations: ILink[];
	public logo: string;
	public organizations: ILink[];
	public parallax: string[];

	constructor() {
		this.concerts = configuration.concerts;
		this.donations = configuration.donations;
		this.foundations = configuration.foundations;
		this.logo = configuration.logo;
		this.organizations = configuration.organizations;
		this.parallax = configuration.parallax
	}

	public openLink(url: string): void {
		window.open(url);
	}
}
