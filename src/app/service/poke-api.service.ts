import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private httpClient: HttpClient) { }

   //Capturando Lista com os Pokemons
   get apiListAllPokemons() : Observable<any> {    
    return this.httpClient.get<any>(this.url).pipe(
      tap(res => {
        //atribuindo à variável resultsPokemonsList à lista de Pokemons capturada em 'res.results'
        res.results.map((resultsPokemonList: any) => {
          /**
           * Utilizando o método privado PokemonInformation para capturar as informações
           * de cada pokemon, criando uma propriedade 'status' em cada item da lista
           * resultsPokemonsList e atribuindo à ela, o jSon com as informações de cada Pokemon
           * em seu devido Pokemon.
           */
          this.apiGetPokemonInformation(resultsPokemonList.url).subscribe(
            res => resultsPokemonList.status = res
          );
        });
      })
    );

  }

  //Capturando Informações Individuais de cada Pokemon
  private apiGetPokemonInformation (url : string) : Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(
        //variável 'res' recebe o jSON com as informações de cada Pokemon
        res => res
      ),
    );
  }
 };