import * as React from "react";
import "./SearchBar.css";

/**
 * SearchBar Component
 * @param {Object} Props
 * @param {Function} Props.handleChange
 */
function SearchBar({ handleChange }) {
  return (
    <div className="search-box">
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
