import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  private setPokemonById(id: string) {}

  get getPokemon() {
    const id: string = this.activatedRoute.snapshot.params['id'];
    return this.setPokemonById(id);
  }
}
