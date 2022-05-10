export interface IEnvironment {
	production: boolean;
}

export interface IAccordion {
	title?: string;
	description?: string;
}

export interface IContact {
	address?: string;
	email?: string;
	phone?: string;
}

export interface IDisc {
	name?: string;
	image?: string;
	year?: number;
	songs?: ILink[];
}

export interface IProfile {
	name?: string;
	role?: string;
	photo?: string;
	links?: ILink[];
}

export interface ILink {
	name?: string;
	url?: string;
	icon?: string;
}

export interface ISection<T> {
	title?: string;
	data?: T;
}

export interface IShow {
	name?: string;
	address?: string;
	date?: string;
	price?: string;
	url?: string;
}
