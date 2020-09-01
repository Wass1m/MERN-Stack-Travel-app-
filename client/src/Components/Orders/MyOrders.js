import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import { loadUser } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MyOrders = ({ order, auth: { user }, getMyOrders, loadUser }) => {
  useEffect(() => {
    loadUser();
    getMyOrders();
  }, []);

  return order === null ? (
    <Fragment>Waiting...</Fragment>
  ) : (
    <div className="cart-details">
      <h1>My orders </h1>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Price </th>
            <th>ID of Order </th>
            <th> Date of delivery </th>
          </tr>
        </thead>

        <tbody>
          {order === null
            ? null
            : order.orders.map((item) => (
                <Fragment key={item._id}>
                  <tr>
                    <td>{item.createdAt}</td>
                    <td>{item.totalPrice}</td>
                    <td>{item._id} </td>
                    <td>Date</td>
                  </tr>
                </Fragment>
              ))}
        </tbody>
      </table>
    </div>
  );
};

MyOrders.propTypes = {};

const mapStateToProps = (state) => ({
  order: state.order,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getMyOrders,
  loadUser,
})(MyOrders);
