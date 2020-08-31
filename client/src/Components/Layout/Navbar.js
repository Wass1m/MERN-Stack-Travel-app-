import React, { Fragment } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { Nav } from "antd";

const Navbar = ({ logout, auth: { isAuthenticated, loading, user }, cart }) => {
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li id="cart">
        <Link to="/cart">
          Cart
          {cart === null ? null : cart.cartItems.length > 0 ? (
            <span>
              <i>{cart.cartItems.length}</i>
            </span>
          ) : null}
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <a onClick={(e) => logout()} href="!#">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
      <li>
        <Link to="/product/upload">Upload</Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <h1>Wassim Travel</h1>
          </div>
          <ul className="nav-links">
            {isAuthenticated ? authLinks : guestLinks}
            {isAuthenticated
              ? user === null
                ? null
                : user.isAdmin
                ? adminLinks
                : null
              : null}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

Navbar.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, { logout })(Navbar);
