export interface Environment {
	key: string;
	production: boolean;
}

export interface Configuration {
	bank?: string;
	concerts?: number;
	contact?: Contact;
	donations?: string;
	discography?: Disc[];
	foundations?: Link[];
	links?: Link[];
	organizations?: Link[];
	pages?: string[];
	press?: string[];
	profiles?: Profile[];
	reports?: string[];
	shows?: Show[];
}

export interface Contact {
	address?: string;
	email?: string;
	phone?: string;
}

export interface Disc {
	name?: string;
	image?: string;
	year?: number;
	songs?: Link[];
}

export interface Profile {
	name?: string;
	role?: string;
	photo?: string;
	links?: Link[];
}

export interface Link {
	name?: string;
	url?: string;
	icon?: string;
}

export interface Show {
	name?: string;
	address?: string;
	date?: string;
	price?: string;
	url?: string;
}
