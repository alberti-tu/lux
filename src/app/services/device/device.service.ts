import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DeviceService {

	constructor() { }

	public userAgent(): string {
		return navigator.userAgent;
	}

	public isDesktop(): boolean {
		return !navigator.userAgent.includes('Mobile');
	}

	public isMobile(): boolean {
		return navigator.userAgent.includes('Mobile');
	}

}
