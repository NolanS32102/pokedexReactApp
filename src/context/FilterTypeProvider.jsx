import { createContext, useState } from "react";

const ALL_TYPES = [
  "Flying",
  "Fighting",
  "Poison",
  "Psychic",
  "Dragon",
  "Ghost",
  "Dark",
  "Ground",
  "Fire",
  "Fairy",
  "Water",
  "Normal",
  "Rock",
  "Electric",
  "Bug",
  "Grass",
  "Ice",
  "Steel",
];

const FilterTypeContext = createContext({
  filterTypeText: "",
  setFilterTypeText: () => {},
  allTypes: ALL_TYPES
});

const FilterTypeProvider = ({ children }) => {
  const [filterTypeText, setFilterTypeText] = useState("");

  return (
    <FilterTypeContext.Provider
      value={{ filterTypeText, setFilterTypeText, allTypes: ALL_TYPES }}
    >
      {children}
    </FilterTypeContext.Provider>
  );
};

export { FilterTypeContext, FilterTypeProvider };
