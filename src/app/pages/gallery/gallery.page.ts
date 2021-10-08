import { Component } from '@angular/core';
import { Disc, StreamState } from 'src/app/models/interfaces';
import { AudioService } from 'src/app/services/audio/audio.service';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: Disc[];

	constructor(public audioService: AudioService,) {
		this.discography = environment.discography;
	}
}
