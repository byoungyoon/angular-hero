import { Component, NgModule, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  hero :Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
