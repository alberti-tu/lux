import { Component } from '@angular/core';
import { Contact, Profile } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public contact: Contact;
	public press: string[];
	public profiles: Profile[];
	public reports: string[];

	constructor() {
		this.contact = environment.contact;
		this.press = environment.press;
		this.profiles = environment.profiles;
		this.reports = environment.reports;
	}

	public openFile(file: string): void {
		window.open('/assets/files/' + file);
	}

}
