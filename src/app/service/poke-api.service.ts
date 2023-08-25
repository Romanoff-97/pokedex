import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private httpClient: HttpClient) { }

 /**
  * link para acessar a pokeApi
  * https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100
  */
}
