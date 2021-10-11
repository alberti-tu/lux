import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Show } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './shows.page.html',
	styleUrls: ['./shows.page.scss']
})
export class ShowsPage {

	public shows: Show[];
	public mapList: boolean[] = [];

	constructor(private sanitizer: DomSanitizer) {
		if (environment.shows) {
			this.shows = environment.shows
				.filter(item => (item.date && new Date(item.date) > new Date()))
				.sort((a, b) => (a.date && b.date ? new Date(a.date).getTime() - new Date(b.date).getTime() : 0));
			this.mapList = new Array(this.shows.length).fill(false);
		}
	}

	public openLink(url: string): void {
		if (url) {
			window.open(url);
		}
	}

	public getMap(query: string): SafeResourceUrl {
		const url = "https://www.google.com/maps/embed/v1/place?key=" + environment.key + "&q=" + query;
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

	public displayMap(item: Show): boolean {
		if (this.shows) {
			const index = this.shows.indexOf(item);
			return this.mapList[index];
		} else {
			return false;
		}
	}

	public toggleMap(item: Show): void {
		if (this.shows) {
			const index = this.shows.indexOf(item);
			this.mapList[index] = !this.mapList[index];
		}
	}
}
