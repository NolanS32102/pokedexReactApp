import { useState } from "react";

function SortDropdown({
  selectedType,
  setSelectedType,
  showOnlySelectedCards,
  setShowOnlySelectedCards,
}) {
  const types = [
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        Filter:{" "}
        {showOnlySelectedCards
          ? "starred"
          : selectedType
            ? selectedType
            : "none"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a
            href="#"
            onClick={() => {
              setSelectedType("");
              setShowOnlySelectedCards(false);
              setIsOpen(false);
            }}
          >
            <b>Clear Filter</b>
          </a>
          <a
            href="#"
            onClick={() => {
              setSelectedType("");
              setShowOnlySelectedCards(true);
              setIsOpen(false);
            }}
          >
            Starred ⭐️
          </a>
          {types.map((type) => (
            <a
              href="#"
              key={type}
              onClick={() => {
                setSelectedType(type.toLocaleLowerCase());
                setShowOnlySelectedCards(false);
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
