import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonExpand, PokemonList, PokemonListResponse } from '../interfaces';
import { Any, PokemonType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlBase : string = `https://pokeapi.co/api/v2`;
  private urlPokemon : string = `${this.urlBase}/pokemon`;

  constructor(
    private http: HttpClient
  ) {

  }

  private capitalize(text: string|null) : string {
    return text ? (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()) : ''
  }

  listPokemons(limit: number = 20, offset: number = 0): Observable<PokemonList> {

    const url : string = `${this.urlPokemon}` + `?limit=${limit}&offset=${offset}`

    const pokeApi : Observable<PokemonListResponse> = this.http.get<PokemonListResponse>(url)

    const response : Observable<PokemonList> = pokeApi.pipe(
      map((pokeApi) => {
        return {
          count:    pokeApi.count,
          next:     pokeApi.next,
          previous: pokeApi.previous,
          results:  pokeApi.results.map((data) => {

            const id   = Number(data.url.match(/\/pokemon\/(\d+)\//)?.[1])
            const name = this.capitalize(data?.name)

            return {
              id:               id,
              name:             name,
              url:              data.url,
              official_artwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }
          })
        }
      })
    )

    return response;
  }


  fetchPokemon(id_or_name: number|string): Observable<PokemonExpand> {

    const url : string = `${this.urlPokemon}` + `/${id_or_name}`

    const pokeApi : Observable<Any> = this.http.get<Any>(url)

    const response : Observable<PokemonExpand> = pokeApi.pipe(
      map((pokeApi) => {

        const id   : number = pokeApi.id;
        const name = this.capitalize(pokeApi?.name)

        const types : PokemonType[] = pokeApi.types.map((pokemonType: PokemonType) => {

          return {
            slot : pokemonType.slot,
            type : {
              name : this.capitalize(pokemonType.type.name),
              url  : pokemonType.type.url
            }
          }

        })

        return {
          id               : id,
          name             : name,
          official_artwork : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          types            : types
        }
      })
    )

    return response
  }

}
