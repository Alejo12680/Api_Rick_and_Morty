import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  // Variable va guarda el id que se envia como parametro en la Url
  public characterId: string = '';
  public character: any = '';

  // Variable que almacena los valores de los episodios de cada personaje por Id
  public episodes: any[] =[];

  constructor(
    private actRouter: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) {
    // metodo para extraer el Id del parametro del Id
    this.characterId = this.actRouter.snapshot.paramMap.get('id') as string
  }

  ngOnInit() {
    console.log();

  }

  ionViewDidEnter() {
    this.getCharacter();
  }

  // Funcion que obtiene los detalles del personaje por id
  getCharacter() {
    // Consumimos el servicio de la api, se suscribe
    this.rickAndMortySvc.obtenerCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        /* console.log(res); */
        this.character = res;

        // Llamado de la funcion para obtener los episodios
        this.getEpisodes();

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  // Funcion que obtiene los episodios del personaje por id
  getEpisodes() {
    // recorremos el arreglo que tiene los detalles del personaje para obtener los episodios
    for (let url of this.character.episode) {

      // Consumimos el servicio de la api, se suscribe para obtener los episodios
      this.rickAndMortySvc.obtenerEpisodesById(url).subscribe({
        next: (res: any) => {
          /* console.log(res); */
          this.episodes.push(res);

        },
        error: (err: any) => {
          console.log(err);
        }
      })

    }

  }

}
