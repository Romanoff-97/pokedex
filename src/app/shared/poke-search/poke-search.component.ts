import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  @Output() public emittSeach: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public searchPokemon(value: string) {
    this.emittSeach.emit(value);
  }
}
