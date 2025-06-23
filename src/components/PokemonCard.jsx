import { useEffect, useState } from "react";
import { getPokemonList, getPokemonByNameOrId } from "../api/pokeApi";

const typeToColor = (type) => {
  const colors = {
    fire: "#EE8130",
    normal: "#A8A77A",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#8f62fc",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  return colors[type] || "white";
};

function PokemonCard({ filterText, selectedType, showOnlySelectedCards }) {
  const [pokemonArrayInfo, setPokemonArrayInfo] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    async function loadData() {
      const names = await getPokemonList(500);
      const allInfo = [];

      for (const pokemon of names) {
        const info = await getPokemonByNameOrId(pokemon.name);
        allInfo.push(info);
      }

      setPokemonArrayInfo(allInfo);
    }

    loadData();
  }, []);

  const toggleCollected = (id) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id] //FIXME
    );
  };

  const filteredList = pokemonArrayInfo.filter((pokemon) => {
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesType =
      !selectedType ||
      pokemon.types.some((tt) => tt.type.name.toLowerCase() === selectedType);
    const isCollected = selectedIds.includes(pokemon.id);
    return (
      matchesSearch && matchesType && (!showOnlySelectedCards || isCollected)
    );
  });

  return (
    <div className="card-container">
      {filteredList.length > 0 ? (
        filteredList.map((pokemon) => {
          const isDualType = pokemon.types.length > 1;
          const backgroundStyle = isDualType
            ? {
                backgroundImage: `linear-gradient(${pokemon.types.map((t) => typeToColor(t.type.name)).join(", ")})`,
              }
            : { backgroundColor: typeToColor(pokemon.types[0].type.name) };

          return (
            <div
              className={`pokemon-card ${pokemon.types.map((tt) => `type-${tt.type.name}`).join(" ")}`}
              key={pokemon.id}
              style={backgroundStyle}
              onClick={() => {
                toggleCollected(pokemon.id);
              }}
            >
              <h2>{pokemon.name.toLocaleUpperCase()}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>
                <b>TYPE</b>:{" "}
                {pokemon.types.map((tt) => tt.type.name).join(", ")}
              </p>
              <p>
                <b>ABILITIES</b>:{" "}
                {pokemon.abilities.map((aa) => aa.ability.name).join(", ")}
              </p>
              <div className="stat-popup">
                <p>
                  <b>STATS</b>
                </p>
                <ul className="stat-list">
                  {pokemon.stats.map((ss) => (
                    <li key={ss.stat.name}>
                      {ss.stat.name.toUpperCase()}: {ss.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedIds.includes(pokemon.id) && (
                <p className="collected-symbol">⭐️</p>
              )}
            </div>
          );
        })
      ) : (
        <div className="sad-pika-container">
          <p>No Pokémon Found!</p>
          <img
            className="sadPikaImage"
            src="src/assets/sadPikachu.jpg"
            alt="sad pikachu"
          />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
