import { Component } from '@angular/core';
import { IAccordion, IContact, ILink, IProfile, ISection } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/about.config';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public contact: IContact;
	public description: ISection<string[]>;
	public press: ILink[];
	public profiles: IProfile[];
	public projects: IAccordion[];
	public reports: ILink[];

	constructor() {
		this.contact = configuration.contact;
		this.description = configuration.description;
		this.press = configuration.press;
		this.profiles = configuration.profiles;
		this.projects = configuration.projects;
		this.reports = configuration.reports;
	}

}
