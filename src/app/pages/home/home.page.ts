import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public concerts: string | undefined;
	public donations: string | undefined;
	public foundations: Link[] | undefined;
	public organizations: Link[] | undefined;

	constructor() {
		this.concerts = environment.concerts;
		this.donations = environment.donations;
		this.foundations = environment.foundations;
		this.organizations = environment.organizations;
	}
}
