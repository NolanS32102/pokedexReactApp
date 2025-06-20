function FilterBar({ setFilterText }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search pokémon"
        onChange={(event) => {
          setFilterText(event.target.value);
        }}
      />
    </div>
  );
}

export default FilterBar;
