import { IAccordion, IContact, ILink, IProfile, ISection } from "src/app/models/interfaces";

interface IConfigurationAbout {
	contact?: ISection<IContact>;
	description?: ISection<string[]>;
	press?: ISection<ILink[]>;
	profiles?: ISection<IProfile[]>;
	projects?: ISection<IAccordion[]>;
	reports?: ISection<ILink[]>;
}

export const configuration: IConfigurationAbout = {
	contact: {
		title: "about.contact.title",
		data: {
			address: "C/Cuba 2, 08030 Barcelona",
			email: "info@luxfundacio.org",
			phone: "+34 654 22 02 63"
		}
	},
	description: {
		title: "about.description.title",
		data: [
			"about.description.data.1",
			"about.description.data.2",
			"about.description.data.3",
			"about.description.data.4",
			"about.description.data.5",
			"about.description.data.6"
		]
	},
	press: {
		title: "about.press.title",
		data: [
			{ name: "Núvol", url: "núvol.pdf" },
			{ name: "Revista musical catalana", url: "revista-musical-catalana.pdf" },
		]
	},
	profiles: {
		title: "about.profiles.title",
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
		title: "about.projects.title",
		data: [
			{ title: "about.projects.data.1.title", description: "about.projects.data.1.description" },
			{ title: "about.projects.data.2.title", description: "about.projects.data.2.description" },
			{ title: "about.projects.data.3.title", description: "about.projects.data.3.description" },
			{ title: "about.projects.data.4.title", description: "about.projects.data.4.description" },
		]
	},
	reports: {
		title: "about.reports.title",
		data: [
			{ name: "2018", url: "report-2018.pdf" },
			{ name: "2017", url: "report-2017.pdf" },
			{ name: "2016", url: "report-2016.pdf" },
			{ name: "2015", url: "report-2015.pdf" },
		]
	},
}