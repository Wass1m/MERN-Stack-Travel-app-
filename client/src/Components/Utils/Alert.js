import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alert }) => {
  return (
    <Fragment>
      {alert.map((alert) => (
        <div className={`alert ${alert.typeAlert}`}>{alert.msg}</div>
      ))}
    </Fragment>
  );
};

Alert.propTypes = {};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
