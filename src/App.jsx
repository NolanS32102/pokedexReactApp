import "./App.css";
import SearchBar from "./components/searchBar";
import PokemonCard from "./components/pokemonCard";
import SortDropdown from "./components/SortDropdown";
import { FilterNameProvider } from "./context/FilterNameProvider.jsx";
import { FilterTypeProvider } from "./context/FilterTypeProvider.jsx";
import { ShowStarredCardsProvider } from "./context/ShowStarredCardsProvider.jsx";
function App() {
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
      <FilterTypeProvider>
        <FilterNameProvider>
          <ShowStarredCardsProvider>
            <div>
              <SearchBar />
              <SortDropdown />
            </div>

            <div>
              <PokemonCard />
            </div>
          </ShowStarredCardsProvider>
        </FilterNameProvider>
      </FilterTypeProvider>
    </main>
  );
}

export default App;
