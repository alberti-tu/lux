import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getMapUrl } from 'src/app/global/utils';
import { IContact } from 'src/app/models/interfaces';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

	@Input() public data: IContact;

	constructor(private sanitizer: DomSanitizer) {	}

	public getMap(query: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(getMapUrl(query));
	}

}
