import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getPokemonList, getPokemonByNameOrId } from "../api/pokeApi";
import { FilterNameContext } from "../context/FilterNameProvider.jsx";
import { FilterTypeContext } from "../context/FilterTypeProvider.jsx";
import { ShowStarredCardsContext } from "../context/ShowStarredCardsProvider.jsx";

const allPokemon = 1302;

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

function PokemonCard() {
  const { filterNameText } = useContext(FilterNameContext);
  const { filterTypeText } = useContext(FilterTypeContext);
  const { showStarredCards } = useContext(ShowStarredCardsContext);

  const [pokemonArrayInfo, setPokemonArrayInfo] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      const names = await getPokemonList(allPokemon);

      names.reduce((promise, { name }) => {
        return promise.then(() => {
          return getPokemonByNameOrId(name).then((newPokemon) => {
            return setPokemonArrayInfo((prevPokemonArray) => [
              ...prevPokemonArray,
              newPokemon,
            ]);
          });
        });
      }, Promise.resolve());
    }

    loadData().catch(() => {
      setError("Failed to load pokémon!");
    });
  }, []);

  const toggleCollected = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id],
    );
  }, []);

  const filteredList = useMemo(
    () =>
      pokemonArrayInfo.filter((pokemon) => {
        const matchesSearch = pokemon.name
          .toLocaleLowerCase()
          .includes(filterNameText.toLocaleLowerCase());

        const matchesType =
          !filterTypeText ||
          pokemon.types.some(
            (tt) => tt.type.name.toLocaleLowerCase() === filterTypeText,
          );

        const isCollected =
          !showStarredCards || selectedIds.includes(pokemon.id);

        return matchesSearch && matchesType && isCollected;
      }),
    [
      pokemonArrayInfo,
      filterNameText,
      filterTypeText,
      showStarredCards,
      selectedIds,
    ],
  );

  if (error) {
    return (
      <div className="error-container">
        <h2>Error:</h2>
        <p>{error}</p>
        <img
          className="error-pikachu"
          src="src/assets/errorPikachu.jpg"
          alt="pikachu on phone"
        />
      </div>
    );
  }

  if (Array.isArray(filteredList) && filteredList.length === 0) {
    return (
      <div className="card-container">
        <div className="sad-pika-container">
          <h2>No Pokémon Found!</h2>
          <img
            className="sadPikaImage"
            src="/src/assets/sadPikachu.jpg"
            alt="sad pikachu"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      {filteredList.map((pokemon) => {
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
              <b>TYPE</b>: {pokemon.types.map((tt) => tt.type.name).join(", ")}
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
      })}
    </div>
  );
}

export default PokemonCard;
