import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pagesComponents
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

//Navegação entre as páginas (pagesRoutes)
import { PagesRoutingModule } from './pages-routing.module';

//Módulo de componentes compartilhados no projeto
import { SharedModule } from '../shared/shared.module';
import { PokeListComponent } from '../shared/poke-list/poke-list.component';
import { PokeSearchComponent } from '../shared/poke-search/poke-search.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
