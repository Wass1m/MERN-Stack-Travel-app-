import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Products from "./Products/Products";
import Bg1 from "../assets/images/bg-bot1.svg";
import Bg2 from "../assets/images/bg-bot2.svg";
import Spinner from "../assets/spinner.svg";

const HomeScreen = (props) => {
  return (
    <Fragment>
      <div className="home-hero">
        <h1>Travel anywhere in the world</h1>
        <h1>With Wassines travels Always the best deals !</h1>

        <div className="gradient"></div>
      </div>
      <div className="products">
        <Products />
      </div>
    </Fragment>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
