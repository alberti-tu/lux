import { Component } from '@angular/core';
import { Disc, Link } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: Disc[] | undefined;
	public songs: Link[] | undefined;

	private currentDisc: Disc | undefined;

	constructor() {
		this.discography = environment.discography;
	}

	public selectDisc(item: Disc): void {
		this.currentDisc = item;
		this.songs = item.songs;
	}

	public selectedDisc(item: Disc): string {
		return this.currentDisc && this.currentDisc.name == item.name ? 'active' : '';
	}

}
