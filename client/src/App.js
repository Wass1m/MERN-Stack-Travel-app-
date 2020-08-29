import React, { Fragment, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./Components/Utils/Alert";
import { loadUser } from "./redux/actions/auth";
import UploadProducts from "./Components/Products/UploadProducts";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Alert />
          <Route exact path="/" component={HomeScreen} />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/product/upload" component={UploadProducts} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
