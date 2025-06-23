//TODO cleanup code
//TODO add documentation
//TODO maybe add way to set how many pokemon being rendered

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
      <div>
        <h1>Pokémon List:</h1>
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
