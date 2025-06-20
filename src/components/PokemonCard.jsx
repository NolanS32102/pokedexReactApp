import { useEffect, useState } from "react";
import { getPokemonList, getPokemonByNameOrId } from "../api/pokeApi";

function PokemonCard({ filterText }) {
  const [pokemonArrayInfo, setPokemonArrayInfo] = useState([]);

  useEffect(() => {
    async function loadData() {
      const names = await getPokemonList(150);
      const allInfo = [];

      for (const pokemon of names) {
        const info = await getPokemonByNameOrId(pokemon.name);
        allInfo.push(info);
      }

      setPokemonArrayInfo(allInfo);
    }

    loadData();
  }, []);

  const filteredList = pokemonArrayInfo.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(filterText.toLowerCase())
  );

  return (
    <div className="card-container">
      {filteredList.length > 0 ? (
        filteredList.map((pokemon) => {
          return (
            <div
              className={`pokemon-card ${pokemon.types.map((tt) => `type-${tt.type.name}`).join(" ")}`}
              key={pokemon.id}
            >
              <h2>{pokemon.name.toUpperCase()}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>
                <b>TYPE</b>:{" "}
                {pokemon.types.map((tt) => tt.type.name).join(", ")}
              </p>
              <p>
                <b>ABILITIES</b>:{" "}
                {pokemon.abilities.map((aa) => aa.ability.name).join(", ")}
              </p>
              <h3>STATS:</h3>
              <ul className="stat-list">
                {pokemon.stats.map((s) => (
                  <li key={s.stat.name}>
                    {s.stat.name.toUpperCase()}: {s.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      ) : (
        <p>No Pokémon Found!</p>
      )}
    </div>
  );
}

export default PokemonCard;
