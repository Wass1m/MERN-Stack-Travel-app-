import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Products from "./Products/Products";
import Bg1 from "../assets/images/bg-bot1.svg";
import Bg2 from "../assets/images/bg-bot2.svg";
import Spinner from "../assets/spinner.svg";
import Tours from "./Layout/Tours";

const HomeScreen = (props) => {
  return (
    <Fragment>
      <div className="home-hero">
        <div className="title">
          <h1>Travel and Discover</h1>
          <h1 className="beyond">The world!</h1>
        </div>

        <div className="gradient"></div>
        <div className="filter-box">
          <div className="filter-list">
            <div className="filter-item active">Hotels</div>
            <div className="filter-item">Car Rentals</div>
            <div className="filter-item">Flights</div>
            <div className="filter-item">Trips</div>
            <div className="filter-item">Cruises</div>
            <div className="filter-item">Activties</div>
          </div>
        </div>
      </div>
      <div className="products">
        <Products />
      </div>
      <Tours />
    </Fragment>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
