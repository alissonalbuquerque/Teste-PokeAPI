import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonExpand } from 'src/app/interfaces';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow]
})
export class DetailsPage implements OnInit {

  public id : string = '';
  public pokemon : PokemonExpand|null = null

  constructor(
    private route : ActivatedRoute,
    private pokemonService : PokemonService
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')!

    this.pokemonService.fetchPokemon(this.id).subscribe(
      {
        next: (data) =>
          {
            this.pokemon = data

            console.log(this.pokemon)
          },
          error: (err) => {
            console.error('Erro ao buscar pokemons', err);
          }
      }
    )

  }

}
