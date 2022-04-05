import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disc } from 'src/app/models/interfaces';
import { configuration } from 'src/configurations/configuration';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: Disc[];
	public discIndex: number;

	constructor(private router: Router) {
		this.discography = configuration.discography.sort((a, b) => (a.year && b.year ? a.year - b.year : 0));
	}

	public open(item: Disc, index: number): void {
		if (this.discIndex == index) {
			this.router.navigateByUrl('/gallery/player', { state: item });
		}
	}
}
