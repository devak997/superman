import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => {
  if (authedUser === null) {
    return <Redirect exact to="/login" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(PrivateRoute);
