import { Pokemon, PokemonResume } from "../types";

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

export { PokemonListResponse, PokemonList, PokemonListResume }
