import { Component, Input } from '@angular/core';
import { IContact } from 'src/app/models/interfaces';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

	@Input() public data: IContact;

	constructor() {	}

}
