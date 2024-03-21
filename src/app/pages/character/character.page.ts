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

  constructor(
    private actRouter: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) 
  {
    // metodo para extraer el Id del parametro del Id
    this.characterId = this.actRouter.snapshot.paramMap.get('id') as string
   }

  ngOnInit() {
    console.log();
    
  }

  ionViewDidEnter() {
    this.getCharacter();
  }

  // Funcion que obtiene los personaje por id
  getCharacter() {    
    // Consumimos el servicio de la api, se suscribe
    this.rickAndMortySvc.obtenerCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        /* console.log(res); */
        this.character = res;

      },
      error: (err: any) => {
        
      }
    })
  }

}
