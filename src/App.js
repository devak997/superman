import React from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import SignupLogin from "./components/SignupLogin";
import LoadingBar from "react-redux-loading-bar";
import Home from "./components/Home";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";

const App = ({ authedUser }) => {
  return (
    <React.Fragment>
      <Navbar />
      <LoadingBar />
      {authedUser == null ? (
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/login" />} />
          <Route path="/login"  component={SignupLogin} />
          <Route path="/about" component={About} />
        </Switch>
      ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
        </Switch>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(App);
