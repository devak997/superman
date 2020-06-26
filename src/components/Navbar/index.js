import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = ({ authedUser }) => {
  if (authedUser === null) {
    return (
      <nav>
        <div className="brand">InfyNet</div>
        <div className="items">
          <NavLink to="/login" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="brand">InfyNet</div>
      <div className="items">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>
      </div>
      <div className="right-items">
        <NavLink to="/profile" exact activeClassName="active">
          Profile
        </NavLink>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(Navbar);
