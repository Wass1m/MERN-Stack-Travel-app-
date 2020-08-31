import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/actions/cart";
import { Link } from "react-router-dom";

const PlaceOrder = ({ cart, removeCartItem }) => {
  return (
    <div className="order">
      <div className="order-details">
        <h1>Order Summary</h1>
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
      </div>
      <div className="order-actions">
        <div className="order-shipping">
          <h2>Shipping Informations : </h2>
          <h3>Address : {cart.shipping !== null && cart.shipping.address} </h3>
          <h3>
            Zip Code : {cart.shipping !== null && cart.shipping.postalCode}{" "}
          </h3>
          <h3>Country : {cart.shipping !== null && cart.shipping.country} </h3>
        </div>
        <div className="order-payment">
          <h3>
            Payment method : {cart.payment !== null && cart.payment.payment}{" "}
          </h3>
        </div>
        <div className="order-price">
          <h1>Total Ammount : </h1>
          <button className="btn primary">Proceed</button>
        </div>
      </div>
    </div>
  );
};

PlaceOrder.propTypes = {};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeCartItem })(PlaceOrder);
