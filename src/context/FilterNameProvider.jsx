import { createContext, useState } from "react";

const FilterNameContext = createContext({
  filterNameText: "",
  setFilterNameText: () => {},
});

const FilterNameProvider = ({ children }) => {
  const [filterNameText, setFilterNameText] = useState("");

  return (
    <FilterNameContext.Provider value={{ filterNameText, setFilterNameText }}>
      {children}
    </FilterNameContext.Provider>
  );
};

export { FilterNameContext, FilterNameProvider };
