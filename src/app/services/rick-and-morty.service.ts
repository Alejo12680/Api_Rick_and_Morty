import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }
  
  // Actualmente hay tres recursos que se pueden enviar como parametro: Character = Se usa para traer los personajes, Location = se usa para traer sus ubicaciones, Episode = se usa para traer los episodios.
  obtenerCharacter(params: any) {
    return this.http.get(environment.apiUrl + environment.character, {params})
  }

  obtenerCharacterById(id: string) {
    return this.http.get(environment.apiUrl + environment.character + id)
  }

  obtenerEpisodesById(url: string) {
    return this.http.get(url)
  }

}
