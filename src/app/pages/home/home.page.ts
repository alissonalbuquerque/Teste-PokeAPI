import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { PokemonList } from 'src/app/interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, PokemonCardComponent, CommonModule],
})
class HomePage {
  
  public data: PokemonList|null = null;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {

    this.pokemonService.listPokemons().subscribe({
      next: (data) => {
        this.data = data

        console.log(this.data)
      },
      error: (err) => {
        console.error('Erro ao buscar pokemons', err);
      }
    })

  }

}

export { HomePage }
