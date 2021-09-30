import { Component } from '@angular/core';

@Component({
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss']
})
export class AboutPage {

	public files: string[] = [ '2015', '2016', '2017', '2018' ];

	public openFile(file: string): void {
        window.open('/assets/files/report-' + file + '.pdf');
    }

}
