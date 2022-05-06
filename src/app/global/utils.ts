import { environment } from "src/environments/environment";

export function getMapUrl(query: string): string {
	return "https://www.google.com/maps/embed/v1/place?key=" + environment.key + "&q=" + query;
}