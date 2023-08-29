import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  //variável que armazenará a lista com os 100 pokemons
  public getAllPokemons!: any;
  constructor(private pokeApiService: PokeApiService){}
  
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        //a propriedade res.results retorna o jSON com name: '', status: '', url: ''
        console.log(res),
        //aqui, 
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons)
      } 
        );
  }
  
}
