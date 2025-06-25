import { useContext, useMemo, useState } from "react";
import { FilterTypeContext } from "../context/FilterTypeProvider.jsx";
import { ShowStarredCardsContext } from "../context/ShowStarredCardsProvider.jsx";

function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { filterTypeText, setFilterTypeText, allTypes } =
    useContext(FilterTypeContext);

  const { setShowStarredCards, showStarredCards } = useContext(
    ShowStarredCardsContext,
  );

  const selectedFilter = useMemo(() => {
    if (showStarredCards) {
      return "starred";
    }
    if (!filterTypeText) {
      return "none";
    }
    return filterTypeText;
  }, [showStarredCards, filterTypeText]);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        Filter:&nbsp;{selectedFilter}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a
            href="#"
            onClick={() => {
              setFilterTypeText("");
              setShowStarredCards(false);
              setIsOpen(false);
            }}
          >
            <b>Clear Filter</b>
          </a>
          <a
            href="#"
            onClick={() => {
              setFilterTypeText("");
              setShowStarredCards(true);
              setIsOpen(false);
            }}
          >
            Starred ⭐️
          </a>
          {allTypes.map((type) => (
            <a
              href="#"
              key={type}
              onClick={() => {
                setFilterTypeText(type.toLocaleLowerCase());
                setShowStarredCards(false);
                setIsOpen(false);
              }}
            >
              {type}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
