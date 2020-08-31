import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/actions/cart";
import { Link } from "react-router-dom";

const CartDetails = ({ cart, removeCartItem }) => {
  return (
    <div className="cart-details">
      <h1>My cart </h1>
      <table>
        <thead>
          <tr>
            <th>Image </th>
            <th>Price </th>
            <th>Quanitty </th>
            <th>Price </th>
            <th>Actions </th>
          </tr>
        </thead>

        <tbody>
          {cart === null
            ? null
            : cart.cartItems.map((item) => (
                <Fragment key={item._id}>
                  <tr>
                    <td>
                      {" "}
                      <img
                        src={`http://localhost:5000/${item.images[0]}`}
                        alt=""
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>1</td>
                    <td>$ {item.price}</td>
                    <td>
                      <button
                        onClick={() => removeCartItem(item._id)}
                        className="btn"
                      >
                        REMOVE
                      </button>
                    </td>
                  </tr>
                </Fragment>
              ))}
        </tbody>
      </table>
      <h1>
        Total ammount : $
        {cart.cartItems.reduce((acc, current) => acc + current.price, 0)}{" "}
      </h1>
      <Link to="/shipping">
        <button className="btn primary">ORDER </button>
      </Link>
    </div>
  );
};

CartDetails.propTypes = {};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeCartItem })(CartDetails);
