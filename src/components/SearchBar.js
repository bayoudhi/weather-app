import PropTypes from "prop-types";
import "./SearchBar.css";

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

SearchBar.propTypes = {
  handleChange: PropTypes.func,
};

export default SearchBar;
