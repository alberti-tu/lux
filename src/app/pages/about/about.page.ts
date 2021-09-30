import { Component } from '@angular/core';
import { Profile } from 'src/app/models/interfaces';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public profiles: Profile[] = [
		{
			name: 'Santi Mirón',
			role: 'viola de gamba',
			photo: 'santi.jpg',
			links: [
				{ icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=100008669134913' }
			]
		}
	];

	public reports: string[] = [ '2018', '2017', '2016', '2015' ];

	public press: string[] = [ 'Núvol', 'Revista musical catalana'];

	public openFile(file: string): void {
        window.open('/assets/files/report-' + file + '.pdf');
    }

}
