import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { registerUser } from "../../redux/actions/auth";

const Register = ({ setAlert, registerUser, auth }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });

  const { email, name, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="login register">
        <div className="form-card">
          {" "}
          <h1>Create an account on Wassines</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                onChange={(e) => onChange(e)}
                value={name}
                type="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => onChange(e)}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={(e) => onChange(e)}
                value={password}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => onChange(e)}
                value={password2}
                type="password"
                name="password2"
                placeholder="Repeat Password"
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Register" className="btn" />
            </div>
          </form>
          <h1>
            Yo do have an account ? <Link to="/login">Login</Link>
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, registerUser })(Register);
