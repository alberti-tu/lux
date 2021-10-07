import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Show } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './shows.page.html',
	styleUrls: ['./shows.page.scss']
})
export class ShowsPage {

	public shows: Show[] | undefined;

	constructor(private sanitizer: DomSanitizer) {
		if (environment.shows) {
			this.shows = environment.shows.filter(item => (item.date && new Date(item.date) > new Date()));
		}
	}

	public openLink(url: string): void {
		window.open(url);
	}

	public getMap(query: string): SafeResourceUrl {
		const url = "https://www.google.com/maps/embed/v1/place?key=" + environment.key + "&q=" + query;
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
