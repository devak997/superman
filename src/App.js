import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

import Navbar from "./components/Navbar";
import SignupLogin from "./components/SignupLogin";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LoadingBar />
      <Switch>
        <Route path="/login" component={SignupLogin} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
};


export default App;
