import { useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import PokemonCard from "./components/pokemonCard";
import SortDropdown from "./components/SortDropdown";

function App() {
  const [filterText, setFilterText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  return (
    <main>
      <div>
        <h1>Pokémon List:</h1>
      </div>
      <div>
        <PokemonCard filterText={filterText} selectedType={selectedType} />
      </div>
      <div>
        <FilterBar filterText={filterText} setFilterText={setFilterText} />
      </div>
      <div>
        <SortDropdown
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
    </main>
  );
}

export default App;
