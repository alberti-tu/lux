import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export interface StreamState {
	playing: boolean;
	canplay: boolean;
	currentTime: number;
	duration: number;
	error: boolean;
}

@Injectable({ providedIn: 'root' })
export class AudioService {

	private audioPlayer = new Audio();

	private audioEvents = [
		"ended",
		"error",
		"play",
		"playing",
		"pause",
		"timeupdate",
		"canplay",
		"loadedmetadata",
		"loadstart"
	];

	private state: StreamState = this.initialState();

	private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);
	private stop$ = new Subject();

	constructor() { }

	public play(): void {
		this.audioPlayer.play();
	}

	public pause(): void {
		this.audioPlayer.pause();
	}

	public stop(): void {
		this.stop$.next(null);
	}

	public seekTo(seconds: number): void {
		this.audioPlayer.currentTime = seconds;
	}

	public playStream(url: string): Observable<Event> {
		this.stop();
		return this.streamObservable(url).pipe(takeUntil(this.stop$));
	}

	public getState(): Observable<StreamState> {
		return this.stateChange.asObservable();
	}

	private updateStateEvents(event: Event): void {
		switch (event.type) {
			case "canplay":
				this.state.duration = this.audioPlayer.duration;
				this.state.canplay = true;
				break;
			case "playing":
				this.state.playing = true;
				break;
			case "pause":
				this.state.playing = false;
				break;
			case "timeupdate":
				this.state.currentTime = this.audioPlayer.currentTime;
				break;
			case "error":
				this.state = this.initialState();
				this.state.error = true;
				break;
		}

		this.stateChange.next(this.state);
	}

	private streamObservable(url: string): Observable<Event> {
		return new Observable<Event>(observer => {
			// Play audio
			this.audioPlayer.src = url;
			this.audioPlayer.load();
			this.audioPlayer.play();

			const handler = (event: Event) => {
				this.updateStateEvents(event);
				observer.next(event);
			};

			this.addEvents(this.audioPlayer, this.audioEvents, handler);

			return () => {
				// Stop Playing
				this.audioPlayer.pause();
				this.audioPlayer.currentTime = 0;

				// remove event listeners
				this.removeEvents(this.audioPlayer, this.audioEvents, handler);

				// reset state
				this.state = this.initialState();
			};
		});
	}

	private addEvents(obj: any, events: any, handler: any): any {
		events.forEach((event: any) => {
			obj.addEventListener(event, handler);
		});
	}

	private removeEvents(obj: any, events: any, handler: any): any {
		events.forEach((event: any) => {
			obj.removeEventListener(event, handler);
		});
	}

	public initialState(): StreamState {
		return {
			playing: false,
			canplay: false,
			currentTime: 0,
			duration: 0,
			error: false
		};
	}
}
