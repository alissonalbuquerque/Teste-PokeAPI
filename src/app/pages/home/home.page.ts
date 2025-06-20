import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { PokemonListResume } from 'src/app/interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Info, PokemonResume } from 'src/app/types';
import chunk from 'lodash/chunk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, PokemonCardComponent, CommonModule],
})
class HomePage {

  public data: PokemonListResume|null = null

  public info: Info|null = null

  public pokemons: PokemonResume[][] = []

  constructor(
    private pokemonService: PokemonService
  ) {}

  private toMatrix(pokemons: Array<PokemonResume>, size: number = 3) : PokemonResume[][] {
    return chunk<PokemonResume>(pokemons, size);
  }

  ngOnInit() {

    this.pokemonService.listPokemons().subscribe({
      next: (data) =>
      {
        this.data = {
          count:    data.count,
          next:     data.next,
          previous: data.previous,
          results:  this.toMatrix(data.results)
        }

        this.info = {
          count:    data.count,
          next:     data.next,
          previous: data.previous,
        }

        this.pokemons = this.data.results;
      },
      error: (err) => {
        console.error('Erro ao buscar pokemons', err);
      }
    })

  }

}

export { HomePage }
