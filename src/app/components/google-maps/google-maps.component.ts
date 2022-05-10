import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'google-maps',
	templateUrl: './google-maps.component.html',
	styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent {

	@Input() public search: string;

	constructor(private sanitizer: DomSanitizer) { }

	public getMap(zoom: number = 16): SafeResourceUrl {
		const url = `https://maps.google.com?output=embed&q=${this.search}&z=${zoom}`
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

}
