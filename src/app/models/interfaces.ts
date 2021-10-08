export interface Configuration {
	bank: string;
	concerts: string;
	contact: Contact;
	donations: string;
	discography: Disc[];
	foundations: Link[];
	key: string;
	links: Link[];
	organizations: Link[];
	pages: string[];
	press: string[];
	production: boolean;
	profiles: Profile[];
	reports: string[];
	shows: Show[];
}

export interface Contact {
	address?: string;
	email?: string;
	phone?: string;
}

export interface Disc {
	name: string;
	image: string;
	songs: Link[];
}

export interface Profile {
	name: string;
	role?: string;
	photo: string;
	links?: Link[];
}

export interface Link {
	name?: string;
	url?: string;
	icon?: string;
}

export interface Show {
	name: string;
	address: string;
	date: string;
	price: string;
	url: string;
}

export interface StreamState {
	playing: boolean;
	readableCurrentTime: string;
	readableDuration: string;
	duration: number;
	currentTime: number;
	canplay: boolean;
	error: boolean;
}