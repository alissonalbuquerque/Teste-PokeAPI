import { Pokemon, PokemonResume, PokemonType } from "../types";

interface PokemonListResponse {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Array<Pokemon>;
}

interface PokemonList {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Array<PokemonResume>;
}

interface PokemonListResume {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  PokemonResume[][];
}

interface PokemonExpand {
  id : number;
  name : string;
  official_artwork: string;
  types : Array<PokemonType>;
}

export { PokemonListResponse, PokemonList, PokemonListResume, PokemonExpand }
