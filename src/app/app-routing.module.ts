import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
//import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  //{path: 'detail/:id', component: HeroDetailComponent},
  //{path: 'heroes', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
