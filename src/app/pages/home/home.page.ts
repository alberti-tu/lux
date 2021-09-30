import { Component } from '@angular/core';
import { Link } from 'src/app/models/interfaces';

@Component({
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage {

	public foundations: Link[] = [
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
	];

	public organizations: Link[] = [
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
	];
}
