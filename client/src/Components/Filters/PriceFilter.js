import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { prices } from "./Data";
import { useState } from "react";
import { check } from "express-validator";

const PriceFilter = ({ handle }) => {
  const [checked, setChecked] = useState(0);

  const onChange = (e) => {
    let value = parseInt(e.target.value);

    setChecked(value);
    console.log(value);
    handle(value, "price");
  };

  //   const onSubmiit = (e) => {
  //     console.log(checked);
  //   };

  return (
    <div className="filter-continent price">
      <h1>Filter by price range</h1>
      {prices.map((price) => (
        <Fragment key={price._id}>
          <input
            type="radio"
            id="price"
            name="price"
            onChange={(e) => onChange(e)}
            value={price._id}
          />
          <label for="price">{price.name}</label>
        </Fragment>
      ))}
    </div>
  );
};

PriceFilter.propTypes = {};

export default PriceFilter;
