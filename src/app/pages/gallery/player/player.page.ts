import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disc, Link, StreamState } from 'src/app/models/interfaces';
import { AudioService } from 'src/app/services/audio/audio.service';

@Component({
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit, OnDestroy {

	public state: StreamState = this.audioService.initialState();
	public currentFile: { file: Link, index: number };

	public disc: Disc;

	constructor(public audioService: AudioService, private router: Router) {
		this.disc = this.router.getCurrentNavigation().extras.state;

		if (this.disc == null) {
			this.router.navigateByUrl("/gallery");
		}
	}

	public ngOnInit(): void {
		this.currentFile = { file: this.disc.songs[0], index: 0 };
		this.playStream(this.currentFile.file.url);
		this.audioService.pause();

		this.audioService.getState().subscribe(state => this.state = state);
	}

	public ngOnDestroy(): void {
		this.audioService.stop();
	}

	public openFile(file: Link, index: number): void {
		this.currentFile = { file, index };
		this.audioService.stop();
		this.playStream(file.url);
	}

	public playStream(name: string): void {
		this.audioService.playStream('/assets/music/' + name).subscribe(events => { /* listening for fun here */ });
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
		if (this.isFirstPlaying()) {
			return;
		}

		const index = this.currentFile.index - 1;
		const file = this.disc.songs[index];
		this.openFile(file, index);
	}

	public next(): void {
		if (this.isLastPlaying()) {
			return;
		}

		const index = this.currentFile.index + 1;
		const file = this.disc.songs[index];
		this.openFile(file, index);
	}

	public isFirstPlaying(): boolean {
		return this.currentFile && this.currentFile.index == 0;
	}

	public isLastPlaying(): boolean {
		return this.currentFile && this.currentFile.index == this.disc.songs.length - 1;
	}

	public onSliderChangeEnd(event: any): void {
		this.audioService.seekTo(event.target.value);
	}

	public goBack(): void {
		this.router.navigateByUrl("/gallery");
	}

}
