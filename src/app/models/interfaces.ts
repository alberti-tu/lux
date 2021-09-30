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