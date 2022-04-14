import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDisc, ILink } from 'src/app/models/interfaces';
import { AudioService, StreamState } from 'src/app/services/audio/audio.service';

@Component({
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit, OnDestroy {

	public state: StreamState = this.audioService.initialState();
	public currentFile: { file: ILink, index: number };

	private errorList: string[] = [];
	private playerAction: "previous" | "next" | "play";

	public disc: IDisc;

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

		this.audioService.getState().subscribe(state => {
			if (state.error) {
				this.errorList.push(this.currentFile.file.url);

				if (this.isFirstPlaying()) {
					this.playerAction = "next";
				}

				if (this.isLastPlaying()) {
					this.playerAction = "previous";
				}

				this.playerAction == "previous" ? this.previous() : this.next();
			}

			if (state.currentTime > 0 && state.currentTime == state.duration) {
				this.playerAction = "next";
				this.next();
			}

			this.state = state;
		});
	}

	public ngOnDestroy(): void {
		this.audioService.stop();
	}

	public openFile(file: ILink, index: number): void {
		this.currentFile = { file, index };
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
		this.playerAction = "previous";
		this.openFile(file, index);
	}

	public next(): void {
		if (this.isLastPlaying()) {
			return;
		}

		const index = this.currentFile.index + 1;
		const file = this.disc.songs[index];
		this.playerAction = "next";
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

	public formatDate(time: number): Date {
		return new Date(time * 1000);
	}

	public styleSong(index: number): string[] {
		const result: string[] = [];

		if (this.currentFile.index == index) {
			result.push("selected");
		}

		if (this.errorList.find(item => this.disc.songs[index].url == item)) {
			result.push("error");
		}

		return result;
	}

	public goBack(): void {
		this.router.navigateByUrl("/gallery");
	}

}
