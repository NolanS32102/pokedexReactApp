import "./App.css";
import FilterBar from "./components/FilterBar";
import PokemonCard from "./components/pokemonCard";
import SortDropdown from "./components/SortDropdown";

function App() {
  return (
    <main>
      <div>
        <h1>Pokémon List:</h1>
      </div>
      <div>
        <PokemonCard />
      </div>
      <div>
        <FilterBar />
      </div>
      <div>
        <SortDropdown />
      </div>
    </main>
  );
}

export default App;
