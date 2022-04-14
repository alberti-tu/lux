import { Configuration } from "src/app/models/interfaces";

export const configuration: Configuration = {
	bank: "IBAN ES 43 2100 3049 1622 0035 6171",
	concerts: 76,
	contact: {
		address: "C/Cuba 2, 08030 Barcelona",
		email: "info@luxfundacio.org",
		phone: "+34 654 22 02 63"
	},
	donations: "16.336€",
	discography: [
		{
			name: "Rezos y danzas. De batallas, xácaras, pasacalles y otros tientos",
			image: "disc-1.png",
			year: 2015,
			songs: [ 
				{ name: "Song 1", url: "song-1.mp3" },
				{ name: "Song 2", url: "song-2.mp3" },
				{ name: "Song 3", url: "song-3.mp3" },
				{ name: "Song 4", url: "song-4.mp3" },
			]
		},
		{
			name: "Suonate en trio per diversi strumenti di JS Bach",
			image: "disc-2.png",
			year: 2016,
			songs: [ 
				{ name: "Song 5", url: "song-5.mp3" },
				{ name: "Song 6", url: "song-6.mp3" },
				{ name: "Song 7", url: "song-7.mp3" },
				{ name: "Song 8", url: "song-8.mp3" },
			]
		}
	],
	foundations: [
		{ name: "Arrels fundació", icon: "arrels.jpg", url: "https://www.arrelsfundacio.org" },
		{ name: "El somriure dels nens", url: "https://www.facebook.com/elsomriuredelsnens" },
		{ name: "Banc d'aliments", url: "https://www.bancdelsaliments.org" },
		{ name: "LIMFACAT", url: "https://sites.google.com/site/limfacatassociacio" },
		{ name: "AECC", url: "https://www.aecc.es" },
		{ name: "El caliu", url: "http://www.caliu.org" },
		{ name: "Fundació Sant Vicenç de Paül", url: "http://www.ksameu.cat" },
		{ name: "Fundació amics de la gent gran", url: "http://www.amicsdelagentgran.org" },
		{ name: "Live! Hoy empieza una nueva vida", url: "http://livehoycomienzaunanuevavida.com" },
		{ name: "Associació hemoglobinúria paroxística nocturna", url: "http://www.hpne.org/portal1/a_index.asp" },
		{ name: "Centre de fauna salvatge de la masia camadoca (Berguedà)", url: "https://www.descobrir.cat/ca/agenda/visita-al-centre-de-fauna-salvatge-de-la-masia-camadoca-153699.php" },
		{ name: "Save the children", url: "https://www.savethechildren.es" }
	],
	links: [
		{ name: "Facebook", icon: "facebook", url: "https://www.facebook.com/luxfundacio" },
		{ name: "Instagram", icon: "instagram", url: "https://www.instagram.com/lux_fundacio" },
		{ name: "YouTube", icon: "youtube", url: "https://www.youtube.com/channel/UCgjysEgq2bRrLgKF1psSyFg" }
	],
	organizations: [
		{ name: "Hotel Subur", icon: "hotel-subur.png", url: "https://www.hotelsubur.com" },
		{ name: "Alberg Barcelona", icon: "bcn-alberg.jpg", url: "https://www.catalunya.com/mare-de-deu-de-montserrat-17-13005-25" },
		{ name: "Xarxa evolució", icon: "xarxa-evolució.png", url: "" },
		{ name: "Xanas", icon: "xanas.jpg", url: "https://xanascat.gencat.cat" },
		{ name: "Espai Ferrer i Guàrdia", icon: "espai-ferrer.png", url: "https://www.ferrerguardia.org" },
		{ name: "Grup Vall Formosa", icon: "vall-formosa.png", url: "https://vallformosa.com" },
		{ name: "Generalitat de Catalunya", icon: "generalitat-catalunya.jpg", url: "https://web.gencat.cat" },
		{ name: "Ajuntament de Barcelona", icon: "bcn-ajuntament.jpg", url: "https://www.barcelona.cat" },
		{ name: "La Caixa", icon: "laCaixa.jpg", url: "https://www.caixabank.es" },
		{ name: "Diputació de Barcelona", icon: "bcn-diputació.jpg", url: "https://www.diba.cat" }
	],
	pages: [ "home", "shows", "gallery", "about" ],
	press: [
		{ name: "Núvol", url: "núvol.pdf" },
		{ name: "Revista musical catalana", url: "revista-musical-catalana.pdf" },
	],
	profiles: [
		{
			name: "Santi Mirón",
			role: "viola de gamba",
			photo: "santi.jpg",
			links: [
				{ name: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=100008669134913" }
			]
		}
	],
	projects: [
		{ title: "about.project.1.title", description: "about.project.1.description"},
		{ title: "about.project.2.title", description: "about.project.2.description"},
		{ title: "about.project.3.title", description: "about.project.3.description"},
		{ title: "about.project.4.title", description: "about.project.4.description"},
	],
	reports: [
		{ name: "2018", url: "report-2018.pdf" },
		{ name: "2017", url: "report-2017.pdf" },
		{ name: "2016", url: "report-2016.pdf" },
		{ name: "2015", url: "report-2015.pdf" },
	],
	shows: [
		{ name: "Test 1", address: "Les Rambles 4, Barcelona", date: "2022/11/1 16:00", price: "5€", url: "https://www.google.es" },
		{ name: "Test 2", address: "Plaza Catalunya, Barcelona", date: "2022/12/8 21:00", price: "15€", url: undefined },
		{ name: "Test 3", address: "Plaza España, Sevilla", date: "2023/5/3 18:30", price: undefined, url: "https://www.google.es" },
		{ name: "Test 4", address: "Parque del Retiro, Madrid", date: "2023/12/9 19:00", price: undefined, url: undefined }
	]
};
