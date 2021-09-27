import { Component } from '@angular/core';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public foundations: string[] = [
		"El sombriure dels nens",
		"Banc d'aliments",
		"LINFACAT",
		"AECC",
		"El caliu",
		"Fundació Sant Vicenç de Paül",
		"Fundació amics de la gent gran",
		"Live! Hoy empieza una nueva vida",
		"Associació d'hemoglubinúria paroxisticanocturna",
		"Centre de faunasalvatge de la masia camadoca (Berguedà)",
		"Save the children"
	];

	public organizations: string[] = [
		"hotel-subur.png",
		"bcn-alberg.jpg",
		"xarxa-evolució.png",
		"xanas.jpg",
		"espai-ferrer.png",
		"vall-formosa.png",
		"generalitat-catalunya.jpg",
		"bcn-ajuntament.jpg",
		"laCaixa.jpg",
		"bcn-diputació.jpg"
	];
}
