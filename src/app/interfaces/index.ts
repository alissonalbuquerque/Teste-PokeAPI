
interface PokemonListResponse {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Array<{ name: string; url: string }>;
}

interface PokemonList {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Array<{ id: number, name: string; url: string, official_artwork: string }>;
}

export { PokemonListResponse, PokemonList }