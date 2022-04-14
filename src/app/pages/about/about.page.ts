import { Component } from '@angular/core';
import { Accordion, Contact, Link, Profile } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/configuration';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public contact: Contact;
	public press: Link[];
	public profiles: Profile[];
	public projects: Accordion[];
	public reports: Link[];

	constructor() {
		this.contact = configuration.contact;
		this.press = configuration.press;
		this.profiles = configuration.profiles;
		this.projects = configuration.projects;
		this.reports = configuration.reports;
	}

}
