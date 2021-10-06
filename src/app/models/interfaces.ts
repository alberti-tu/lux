export interface Configuration {
	bank?: string;
	concerts?: string;
	contact?: Contact;
	donations?: string;
	foundations?: Link[];
	key?: string;
	organizations?: Link[];
	pages?: string[];
	press?: string[];
	production?: boolean;
	profiles?: Profile[];
	reports?: string[];
	links?: Link[];
}

export interface Contact {
	address?: string;
	email?: string;
	phone?: string;
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