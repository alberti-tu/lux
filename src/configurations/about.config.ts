import { IAccordion, IContact, ILink, IProfile, ISection } from "src/app/models/interfaces";

interface IConfigurationAbout {
	contact?: IContact;
	description?: ISection<string[]>;
	press?: ISection<ILink[]>;
	profiles?: ISection<IProfile[]>;
	projects?: ISection<IAccordion[]>;
	reports?: ISection<ILink[]>;
}

export const configuration: IConfigurationAbout = {
	contact: {
		address: "C/Cuba 2, 08030 Barcelona",
		email: "info@luxfundacio.org",
		phone: "+34 654 22 02 63"
	},
	description: {
		title: "about.title.1",
		data: ["about.description"]
	},
	press: {
		title: "about.title.5",
		data: [
			{ name: "Núvol", url: "núvol.pdf" },
			{ name: "Revista musical catalana", url: "revista-musical-catalana.pdf" },
		]
	},
	profiles: {
		title: "about.title.2",
		data: [
			{
				name: "Santi Mirón",
				role: "viola de gamba",
				photo: "santi.jpg",
				links: [
					{ name: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=100008669134913" }
				]
			}
		]
	},
	projects: {
		title: "about.title.3",
		data: [
			{ title: "about.project.1.title", description: "about.project.1.description" },
			{ title: "about.project.2.title", description: "about.project.2.description" },
			{ title: "about.project.3.title", description: "about.project.3.description" },
			{ title: "about.project.4.title", description: "about.project.4.description" },
		]
	},
	reports: {
		title: "about.title.4",
		data: [
			{ name: "2018", url: "report-2018.pdf" },
			{ name: "2017", url: "report-2017.pdf" },
			{ name: "2016", url: "report-2016.pdf" },
			{ name: "2015", url: "report-2015.pdf" },
		]
	},
}