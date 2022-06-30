import { IShow } from "src/app/models/interfaces";

interface IConfigurationShows {
	shows?: IShow[];
}

export const configuration: IConfigurationShows = {
	shows: [
		{ name: "Test 1", address: "Les Rambles 4, Barcelona", date: "2022/11/1 16:00", price: "5€", url: "https://www.google.es" },
		{ name: "Test 2", address: "Plaza Catalunya 1, Barcelona", date: "2022/12/8 21:00", price: "15€", url: undefined },
		{ name: "Test 3", address: "Plaza España, Sevilla", date: "2023/5/3 18:30", price: undefined, url: "https://www.google.es" },
		{ name: "Test 4", address: "Parque del Retiro, Madrid", date: "2023/12/9 19:00", price: undefined, url: undefined }
	],
}