import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle],
})
export class PokemonCardComponent implements OnInit
{
  @Input() name!: string
  @Input() image!: string
  
  constructor() {}

  ngOnInit() {}
}
