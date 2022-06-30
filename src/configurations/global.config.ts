import { ILink } from "src/app/models/interfaces";

interface IConfigurationGlobal {
	bank?: string;
	footer?: string;
	links?: ILink[];
	pages?: ILink[];
}

export const configuration: IConfigurationGlobal = {
	bank: "IBAN ES 43 2100 3049 1622 0035 6171",
	footer: "footer.text",
	links: [
		{ name: "Facebook", icon: "facebook", url: "https://www.facebook.com/luxfundacio" },
		{ name: "Instagram", icon: "instagram", url: "https://www.instagram.com/lux_fundacio" },
		{ name: "YouTube", icon: "youtube", url: "https://www.youtube.com/channel/UCgjysEgq2bRrLgKF1psSyFg" }
	],
	pages: [
		{ name: "header.home", url: "/home"},
		{ name: "header.shows", url: "/shows"},
		{ name: "header.gallery", url: "/gallery"},
		{ name: "header.about", url: "/about"},
	]
}