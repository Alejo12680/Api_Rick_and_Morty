import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Variable que es un Array de los personajes
  public character: any [] = [];

  // Variable que es un objeto que envia los parametros
  public params = {} as any;

  constructor( private rickAndMortySvc: RickAndMortyService) { }

  ngOnInit() {
    // Se inicia la parametro con la pagina 0
    this.params.page = 0;

    // Cunado invocamos la funcion que suma 1 a la pagina al iniciar se empezaran con los primeros 20 personajes
    this.getCharacter();
  }

  // Funcion que obtiene los personaje por evento
  getCharacter(event?: any) {
    // Cada vez que se ejecute esta funcion el parametro de la pagina sumara 1, se inicia en la pagina uno para obtener los primeros 20 personajes.
    this.params.page += 1;

    // Consumimos el servicio de la api, se suscribe
    this.rickAndMortySvc.obtenerCharacter(this.params).subscribe({
      next: (res: any) => {

        // Revisamos la respuesta de la api en la cual hay un objeto que se llama 'results', como es un arreglo se necesita sacar los datos del arreglo y se puede hacer con sprit operaitor = (...)
        this.character.push(...res.results);
        console.log(this.character);        

      },
      error: (err: any) => {

      }
    })
  }

}
