import { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import PokemonCard from "./components/pokemonCard";
import SortDropdown from "./components/SortDropdown";

function App() {
  const [filterText, setFilterText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showOnlySelectedCards, setShowOnlySelectedCards] = useState(false);

  return (
    <main>
      <div className="title-images">
        <img
          className="poke-ball left"
          src="src/assets/pokeBall.webp"
          alt="poke ball left"
        />
        <h1 className="pokemon-title">
          <img src="src/assets/pokemonLogo.png" alt="pokemon logo" />
        </h1>
        <img
          className="poke-ball right"
          src="src/assets/pokeBall.webp"
          alt="poke ball right"
        />
      </div>

      <div>
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
        <SortDropdown
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          showOnlySelectedCards={showOnlySelectedCards}
          setShowOnlySelectedCards={setShowOnlySelectedCards}
        />
      </div>

      <div>
        <PokemonCard
          filterText={filterText}
          selectedType={selectedType}
          showOnlySelectedCards={showOnlySelectedCards}
        />
      </div>
    </main>
  );
}

export default App;
