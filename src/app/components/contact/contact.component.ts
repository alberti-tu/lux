import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IContact } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/about.config';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

	public contact: IContact;

	constructor(private sanitizer: DomSanitizer) {
		this.contact = configuration.contact;
	}

	public getMap(query: string): SafeResourceUrl {
		const url = "https://www.google.com/maps/embed/v1/place?key=" + environment.key + "&q=" + query;
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

}
