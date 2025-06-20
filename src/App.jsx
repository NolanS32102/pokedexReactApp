import { useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import PokemonCard from "./components/pokemonCard";
import SortDropdown from "./components/SortDropdown";

function App() {
  const [filterText, setFilterText] = useState("");
  return (
    <main>
      <div>
        <h1>Pokémon List:</h1>
      </div>
      <div>
        <PokemonCard filterText={filterText} />
      </div>
      <div>
        <FilterBar filterText={filterText} setFilterText={setFilterText} />
      </div>
      <div>
        <SortDropdown />
      </div>
    </main>
  );
}

export default App;
