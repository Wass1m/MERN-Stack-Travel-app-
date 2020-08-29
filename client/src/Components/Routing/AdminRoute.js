import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : user === null ? (
          <Fragment>Loading...</Fragment>
        ) : user.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

AdminRoute.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
