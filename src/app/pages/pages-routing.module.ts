import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pagesComponents
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, pathMatch: 'full',
  },
  {
    path: 'details/:id', component: DetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
