import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const textInput = event.target.value;
    setSearchText(textInput);
    onSearch(textInput);
  };

  return (
    <div className="search-bar">
      <h1>Search Transaction</h1>
      <br/>
      
      <input
        type="text"
        placeholder="Search by description"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
