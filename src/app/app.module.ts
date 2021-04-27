import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
