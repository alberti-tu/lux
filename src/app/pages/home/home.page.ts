import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public concerts: number;
	public donations: string;
	public foundations: Link[];
	public organizations: Link[];

	constructor() {
		this.concerts = environment.concerts;
		this.donations = environment.donations;
		this.foundations = environment.foundations;
		this.organizations = environment.organizations;
	}

	public openLink(url: string): void {
		window.open(url);
	}
}
