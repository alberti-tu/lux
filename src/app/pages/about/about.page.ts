import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Contact, Profile } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public mapUrl = 'https://www.google.com/maps/embed/v1/place?key=' + environment.key + '&q=C/Cuba 2, 08030 Barcelona';

	public mapUrlSafe: SafeResourceUrl;
	public contact: Contact | undefined;
	public press: string[] | undefined;
	public profiles: Profile[] | undefined;
	public reports: string[] | undefined;

	public openFile(file: string): void {
        window.open('/assets/files/' + file);
    }

	constructor(private sanitizer: DomSanitizer) {
		this.contact = environment.contact;
		this.press = environment.press;
		this.profiles = environment.profiles;
		this.reports = environment.reports;

		this.mapUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
	}

}
