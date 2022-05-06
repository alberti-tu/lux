import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getMapUrl } from 'src/app/global/utils';
import { IShow } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/shows.config';

@Component({
	templateUrl: './shows.page.html',
	styleUrls: ['./shows.page.scss']
})
export class ShowsPage {

	public shows: IShow[];
	public mapList: boolean[] = [];

	constructor(private sanitizer: DomSanitizer) {
		if (configuration.shows) {
			this.shows = configuration.shows
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
		return this.sanitizer.bypassSecurityTrustResourceUrl(getMapUrl(query));
	}

	public displayMap(item: IShow): boolean {
		if (this.shows) {
			const index = this.shows.indexOf(item);
			return this.mapList[index];
		} else {
			return false;
		}
	}

	public toggleMap(item: IShow): void {
		if (this.shows) {
			const index = this.shows.indexOf(item);
			this.mapList[index] = !this.mapList[index];
		}
	}
}
