import { Component } from '@angular/core';
import { IShow } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/development/shows.config';

@Component({
	templateUrl: './shows.page.html',
	styleUrls: ['./shows.page.scss']
})
export class ShowsPage {

	public shows: IShow[];

	constructor() {
		if (configuration.shows) {
			this.shows = configuration.shows
				.filter(item => (item.date && new Date(item.date) > new Date()))
				.sort((a, b) => (a.date && b.date ? new Date(a.date).getTime() - new Date(b.date).getTime() : 0));
		}
	}

}
