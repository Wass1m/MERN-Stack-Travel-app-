import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { continents } from "./Data";
import { useState } from "react";
import { check } from "express-validator";

const ContinentFilter = ({ handle }) => {
  const [checked, setChecked] = useState([]);

  const onChange = (e) => {
    let value = parseInt(e.target.value);
    let currentIndex = checked.indexOf(value);
    let newChecked = checked;

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handle(newChecked, "continents");
  };

  //   const onSubmiit = (e) => {
  //     console.log(checked);
  //   };

  return (
    <div className="filter-continent">
      <h1>Filter by continent</h1>
      {continents.map((continent) => (
        <Fragment key={continent._id}>
          <input
            type="checkbox"
            id="continent"
            name="continent"
            onChange={(e) => onChange(e)}
            value={continent._id}
          />
          <label for="continent">{continent.name}</label>
        </Fragment>
      ))}
    </div>
  );
};

ContinentFilter.propTypes = {};

export default ContinentFilter;
