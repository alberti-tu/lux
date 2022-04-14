export interface IEnvironment {
	key: string;
	production: boolean;
}

export interface IConfiguration {
	bank?: string;
	concerts?: number;
	contact?: IContact;
	donations?: string;
	discography?: IDisc[];
	foundations?: ILink[];
	links?: ILink[];
	organizations?: ILink[];
	pages?: string[];
	press?: ILink[];
	profiles?: IProfile[];
	projects?: IAccordion[];
	reports?: ILink[];
	shows?: IShow[];
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

export interface IShow {
	name?: string;
	address?: string;
	date?: string;
	price?: string;
	url?: string;
}


/// experimental

export interface IConfigurationGlobal {
	bank?: string;
	footer?: string;
	links?: ILink[];
	pages?: ILink[];
}

export interface IConfigurationHome {
	concerts?: number;
	donations?: string;
	foundations?: ILink[];
	organizations?: ILink[];
}

export interface IConfigurationShows {
	shows?: IShow[];
}

export interface IConfigurationGallery {
	discography?: IDisc[];
}

export interface IConfigurationAbout {
	contact?: IContact;
	press?: ILink[];
	profiles?: IProfile[];
	projects?: IAccordion[];
	reports?: ILink[];
}