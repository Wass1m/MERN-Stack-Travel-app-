import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Products from "./Products/Products";

const HomeScreen = (props) => {
  return (
    <Fragment>
      <div className="products">
        <h1>Travel anywhere in the world</h1>
        <Products />
      </div>
    </Fragment>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
