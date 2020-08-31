import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { OrderCheckoutStep } from "./OrderCheckoutStep";
import { Link, withRouter } from "react-router-dom";
import { addShipping } from "../../redux/actions/cart";
import { connect } from "react-redux";

const OrderShipping = ({ history, addShipping }) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addShipping(formData);
    history.push("payment");
  };

  const { city, postalCode, address, country } = formData;

  return (
    <Fragment>
      <OrderCheckoutStep step1 />
      <div className="order-shipping">
        <div className="login">
          <div className="form-card">
            {" "}
            <h1>Enter Shipping Infos : </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  value={address}
                  type="text"
                  name="address"
                  onChange={(e) => onChange(e)}
                  placeholder="Address"
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => onChange(e)}
                  value={city}
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => onChange(e)}
                  value={postalCode}
                  type="text"
                  name="postalCode"
                  placeholder="postalCode"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => onChange(e)}
                  value={country}
                  type="text"
                  name="country"
                  placeholder="country"
                />
              </div>

              <div className="form-group">
                <input type="submit" value="Continue" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

OrderShipping.propTypes = {};

export default connect(null, { addShipping })(withRouter(OrderShipping));
