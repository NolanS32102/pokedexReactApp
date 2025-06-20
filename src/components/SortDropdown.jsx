import { useState } from "react";

function SortDropdown({ selectedType, setSelectedType }) {
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
        Filter: {selectedType || "none"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a
            href="#"
            onClick={() => {
              setSelectedType("");
              setIsOpen(false);
            }}
          >
            <b>Clear Filter</b>
          </a>
          <a href="#">Starred ⭐️</a>
          {types.map((type) => {
            return (
              <a
                href="#"
                key={type}
                onClick={() => {
                  setSelectedType(type.toLowerCase());
                  setIsOpen(false);
                }}
              >
                {type}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
