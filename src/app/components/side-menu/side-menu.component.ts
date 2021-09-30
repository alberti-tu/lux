import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

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

	constructor() {
		this.pages = environment.pages;
	}

	public isOpen: boolean = false;

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
