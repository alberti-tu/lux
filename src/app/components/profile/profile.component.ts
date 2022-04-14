import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/interfaces';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{

	@Input() public user: IProfile;

	constructor() { }

}
