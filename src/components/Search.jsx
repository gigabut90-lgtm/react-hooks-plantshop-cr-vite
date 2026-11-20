import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, Setsearch]=useState("")
  function handleSearch(e){
    Setsearch(e.target.value)
    onSearch(e.target.value)
  }
  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
