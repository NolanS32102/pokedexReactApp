import { useEffect, useState } from "react";
import { getPokemonList, getPokemonByNameOrId } from "../api/pokeApi";

function PokemonCard() {
  const [pokemonArrayInfo, setPokemonArrayInfo] = useState([]);

  useEffect(() => {
    async function loadData() {
      const names = await getPokemonList();
      for (const pokemon of names) {
        const info = await getPokemonByNameOrId(pokemon.name);
        setPokemonArrayInfo((prev) => [...prev, info]);
      }
    }

    loadData();
  }, []);

  return (
    <div className="card-container">
      {pokemonArrayInfo.length > 0 ? (
        pokemonArrayInfo.map((pokemon) => {
          return (
            <div className="pokemon-card" key={pokemon.id}>
              <h3>{pokemon.name.toUpperCase()}</h3>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Type: {pokemon.types.map((tt) => tt.type.name).join(", ")}</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PokemonCard;
