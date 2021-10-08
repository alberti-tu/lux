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

	constructor(private router: Router) {
		this.discography = environment.discography;
	}

	public open(item: Disc): void {
		this.router.navigateByUrl('/gallery/player', { state: item });
	}
}
