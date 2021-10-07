import { Component } from '@angular/core';
import { Discography } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: Discography[] | undefined;

	constructor() {
		this.discography = environment.discography;
	}

}
