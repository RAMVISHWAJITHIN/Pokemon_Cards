import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      className="search-bar"
    />
  );
};

export default SearchBar;
