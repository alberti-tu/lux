import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDisc, ISection } from 'src/app/models/interfaces';
import { DeviceService } from 'src/app/services/device/device.service';
import { configuration } from 'src/configurations/development/gallery.config';

@Component({
	templateUrl: './gallery.page.html',
	styleUrls: ['./gallery.page.scss']
})
export class GalleryPage {

	public discography: ISection<IDisc[]> = {};
	public discIndex: number;

	constructor(private router: Router, private device: DeviceService) {
		this.discography = configuration.discography;
		this.discography.data = this.discography?.data?.sort((a, b) => (a.year && b.year ? a.year - b.year : 0));
	}

	public open(item: IDisc, index: number): void {
		if (this.discIndex == index || this.device.isDesktop()) {
			this.router.navigateByUrl('/gallery/player', { state: item });
		}
	}
}
