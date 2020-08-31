import React from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ handleSearch }) => {
  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="Search.."
      ></input>
    </div>
  );
};

SearchFilter.propTypes = {};

export default SearchFilter;
