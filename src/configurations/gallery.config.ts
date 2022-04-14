import { IDisc } from "src/app/models/interfaces";

interface IConfigurationGallery {
	discography?: IDisc[];
}

export const configuration: IConfigurationGallery = {
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
}