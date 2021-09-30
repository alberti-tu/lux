export interface Configuration {
	foundations: Link[];
	organizations: Link[];
	pages: string[];
	press: string[];
	production: boolean;
	profiles: Profile[];
	reports: string[];
	links: Link[];
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