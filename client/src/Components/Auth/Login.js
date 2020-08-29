import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { loginUser } from "../../redux/actions/auth";

const Login = ({ setAlert, loginUser, auth }) => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { email, password } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    loginUser(formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="login">
        <div className="form-card">
          {" "}
          <h1>Create an account on Wassim</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                value={email}
                type="email"
                name="email"
                onChange={(e) => onChange(e)}
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
              <input type="submit" value="Login" className="btn" />
            </div>
          </form>
          <h1>
            Don't have an account ? <Link to="/register">Register</Link>
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert, loginUser })(Login);
