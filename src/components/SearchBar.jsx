import { useContext } from "react";
import { FilterNameContext } from "../context/FilterNameProvider.jsx";

function SearchBar() {
  const { setFilterNameText } = useContext(FilterNameContext);
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search pokémon"
        onChange={(event) => {
          setFilterNameText(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
