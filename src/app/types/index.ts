
type Any = any;

type Info = {count: number, next: string|null, previous: string|null}

type Pokemon = { name: string, url: string }

type PokemonResume = { id: number, name: string, url: string, official_artwork: string }

type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export { Any, Info, Pokemon, PokemonResume, PokemonType}
