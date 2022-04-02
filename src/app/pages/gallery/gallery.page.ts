import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disc } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: Disc[];
	public discIndex: number;

	constructor(private router: Router) {
		this.discography = environment.discography.sort((a, b) => (a.year && b.year ? a.year - b.year : 0));
	}

	public open(item: Disc, index: number): void {
		if (this.discIndex == index) {
			this.router.navigateByUrl('/gallery/player', { state: item });
		}
	}
}
