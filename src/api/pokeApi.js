// Offset is starting point in list
export async function getPokemonList(limit = 25, offset = 0) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getPokemonByNameOrId(pokemonNameOrId) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`,
  );
  const data = await res.json();
  return data;
}
