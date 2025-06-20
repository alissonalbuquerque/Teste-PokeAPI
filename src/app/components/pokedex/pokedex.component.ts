import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/types';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
  imports: [CommonModule], // importa os módulos que ele usa
})
export class PokedexComponent  implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

}
