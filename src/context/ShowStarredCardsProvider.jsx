import { createContext, useState } from "react";

const ShowStarredCardsContext = createContext({
  showStarredCards: false,
  setShowStarredCards: () => {},
});

const ShowStarredCardsProvider = ({ children }) => {
  const [showStarredCards, setShowStarredCards] = useState(false);

  return (
    <ShowStarredCardsContext.Provider
      value={{ showStarredCards, setShowStarredCards }}
    >
      {children}
    </ShowStarredCardsContext.Provider>
  );
};

export { ShowStarredCardsContext, ShowStarredCardsProvider };
