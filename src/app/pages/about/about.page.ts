import { Component } from '@angular/core';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public reports: string[] = [ '2018', '2017', '2016', '2015' ];

	public press: string[] = [ 'Núvol', 'Revista musical catalana'];

	public openFile(file: string): void {
        window.open('/assets/files/report-' + file + '.pdf');
    }

}
