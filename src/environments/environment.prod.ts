import { Configuration } from "src/app/models/interfaces";

export const environment: Configuration = {
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
		{ name: "Arrels fundació", url: "https://www.arrelsfundacio.org" },
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
	key: "AIzaSyBy5_DiEN6mNM3jf8VKLZy1JhymEa47UQk",
	links: [
		{ icon: "facebook", url: "https://www.facebook.com/luxfundacio" },
		{ icon: "instagram", url: "https://www.instagram.com/lux_fundacio" },
		{ icon: "youtube", url: "https://www.youtube.com/channel/UCgjysEgq2bRrLgKF1psSyFg" }
	],
	organizations: [
		{ icon: "hotel-subur.png", url: "https://www.hotelsubur.com" },
		{ icon: "bcn-alberg.jpg", url: "https://www.catalunya.com/mare-de-deu-de-montserrat-17-13005-25" },
		{ icon: "xarxa-evolució.png", url: "" },
		{ icon: "xanas.jpg", url: "https://xanascat.gencat.cat" },
		{ icon: "espai-ferrer.png", url: "https://www.ferrerguardia.org" },
		{ icon: "vall-formosa.png", url: "https://vallformosa.com" },
		{ icon: "generalitat-catalunya.jpg", url: "https://web.gencat.cat" },
		{ icon: "bcn-ajuntament.jpg", url: "https://www.barcelona.cat" },
		{ icon: "laCaixa.jpg", url: "https://www.caixabank.es" },
		{ icon: "bcn-diputació.jpg", url: "https://www.diba.cat" }
	],
	pages: [ "home", "shows", "gallery", "about" ],
	press: [ "Núvol", "Revista musical catalana"],
	production: true,
	profiles: [
		{
			name: "Santi Mirón",
			role: "viola de gamba",
			photo: "santi.jpg",
			links: [
				{ icon: "facebook", url: "https://www.facebook.com/profile.php?id=100008669134913" }
			]
		}
	],
	reports: [ "2018", "2017", "2016", "2015" ],
	shows: [
		{ name: "Test 1", address: "Les Rambles 4, Barcelona", date: "16:00 11-1-2021", price: "5€", url: "https://www.google.es" },
		{ name: "Test 2", address: "Plaza Catalunya, Barcelona", date: "21:00 12-8-2021", price: "15€", url: "https://www.facebook.com" },
		{ name: "Test 3", address: "Plaza España, Sevilla", date: "18:30 3-5-2022", price: undefined, url: undefined },
		{ name: "Test 4", address: "Parque del Retiro, Madrid", date: "19:00 9-12-2022", price: "10€", url: undefined }
	]
};