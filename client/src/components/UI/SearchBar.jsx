import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar__container">
      <div className="search-bar__input-wrapper">
        <input
          type="text"
          placeholder={placeholder} // The default value 'Search...' will be used if no placeholder prop is provided
          value={value}
          onChange={onChange}
          className="search-bar__input"
        />
        <button type="submit" className="search-bar__button">
          <BiSearch />
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
