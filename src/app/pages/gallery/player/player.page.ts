import { Component } from '@angular/core';
import { Disc, StreamState } from 'src/app/models/interfaces';
import { AudioService } from 'src/app/services/audio/audio.service';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage {

	public discography: Disc[];
	public files = [
		{
			name: "Perfect",
			artist: " Ed Sheeran",
			url: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3"
		},
		{
			name: "Man Atkeya Beparwah",
			artist: "Nusrat Fateh Ali Khan",
			url: "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3"
		},
		{
			name: "Penny Lane",
			artist: "The Beatles",
			url: "https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3"
		}
	];

	public state: StreamState = undefined;
	private currentDisc: Disc;
	public currentFile: any;

	constructor(public audioService: AudioService,) {
		this.discography = environment.discography;

		this.audioService.getState().subscribe(state => {
			this.state = state;
		});
	}

	public selectDisc(item: Disc): void {
		this.currentDisc = item;
	}

	public selectedDisc(item: Disc): string {
		return this.currentDisc && this.currentDisc.name == item.name ? 'active' : '';
	}

	public playStream(url: string): void {
		this.audioService.playStream(url).subscribe(events => {
		// listening for fun here
		});
	}

	public openFile(file: any, index: any): void {
		this.currentFile = { index, file };
		this.audioService.stop();
		this.playStream(file.url);
	}

	public play(): void {
		this.audioService.play();
	}

	public stop(): void {
		this.audioService.stop();
	}

	public pause(): void {
		this.audioService.pause();
	}

	public previous(): void {
		const index = this.currentFile.index - 1;
		const file = this.files[index];
		this.openFile(file, index);
	}

	public next(): void {
		const index = this.currentFile.index + 1;
		const file = this.files[index];
		this.openFile(file, index);
	}

	public isFirstPlaying(): boolean {
		return this.currentFile.index === 0;
	}

	public isLastPlaying(): boolean {
		return this.currentFile.index === this.files.length - 1;
	}

	public onSliderChangeEnd(change: any): void {
		this.audioService.seekTo(change.value);
	}

}
