import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { OrderCheckoutStep } from "./OrderCheckoutStep";
import { Link } from "react-router-dom";

const OrderPayment = (props) => {
  const [formData, setFormData] = useState({
    payment: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // addShipping(formData);
    // history.push("payment");
  };

  const { payment } = formData;

  return (
    <Fragment>
      <OrderCheckoutStep step2 />
      <div className="order-shipping">
        <div className="login">
          <div className="form-card">
            {" "}
            <h1>Enter Payment Infos : </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  value="paypal"
                  type="radio"
                  name="payment"
                  onChange={(e) => onChange(e)}
                  placeholder="Address"
                />
                <label htmlFor="payment">Paypal</label>
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

OrderPayment.propTypes = {};

export default OrderPayment;
