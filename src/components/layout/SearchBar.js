// SearchBar.js
import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <form
      onSubmit={handleSearch}
      className="d-flex justify-content-center align-items-center mt-5"
      role="search"
      style={{ width: "1600px" }}
    >
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ width: "600px" }}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        style={{ backgroundColor: "#3a416f" }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
