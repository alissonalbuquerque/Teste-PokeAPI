import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonList, PokemonListResponse } from '../interfaces';
import { Any } from '../types';

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

            const id = Number(data.url.match(/\/pokemon\/(\d+)\//)?.[1])

            return {
              id:               id,
              name:             data.name,
              url:              data.url,
              official_artwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }
          })
        }
      })
    )

    return response;
  }

  getPokemon(id_or_name: number|string): Observable<Any> {
    const url : string = `${this.urlPokemon}` + `/${id_or_name}`
    return this.http.get<Any>(url)
  }

}
