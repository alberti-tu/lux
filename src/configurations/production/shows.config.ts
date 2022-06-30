import { IShow } from "src/app/models/interfaces";

interface IConfigurationShows {
	shows?: IShow[];
}

export const configuration: IConfigurationShows = {
	shows: [
		{ name: "El laberint d'Europa", address: "c/Sant Lluís, 90, Barcelona", date: "2022/7/7 20:30", price: "15€", url: "https://www.atrapalo.com/entradas/el-laberinto-de-europa_e4878303/" },
		{ name: "Bach!", address: "c/Sant Lluís, 90, Barcelona", date: "2022/9/15 20:30", price: "17€", url: undefined },
		{ name: "Bach!", address: "c/Sant Lluís, 90, Barcelona", date: "2022/10/6 20:30", price: "17€", url: undefined },
		{ name: "Bach!", address: "c/Sant Lluís, 90, Barcelona", date: "2022/11/3 20:30", price: "17€", url: undefined },
		{ name: "Vivaldi & Friends", address: "c/Sant Lluís, 90, Barcelona", date: "2022/12/1 20:30", price: "17€", url: undefined },
	]
}