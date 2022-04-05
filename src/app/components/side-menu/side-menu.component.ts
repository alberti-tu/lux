import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.scss'],
	animations: [
		trigger('menu', [
			state('open', style({ opacity: 1, background: '#000000e6' })),
			state('closed', style({ opacity: 0, height: '0px', width: '0px', 'font-size': '0em' })),
			transition('open <=> closed', [ animate('0.25s') ]),
		]),
	],
})
export class SideMenuComponent {

	public pages: string[];
	public isOpen: boolean;

	constructor() {
		this.pages = configuration.pages;
	}

	public open(): void {
		this.isOpen = true;
	}

	public close(): void {
		this.isOpen = false;
	}

	public toggle(): void {
		this.isOpen = !this.isOpen;
	}

}
