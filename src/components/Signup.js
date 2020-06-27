import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const Signup = ({ dispatch }) => {
  const [formState, setFormState] = useState({
    userid: "",
    email: "",
    password: "",
  });

  const handleUserIdChange = (e) => {
    setFormState({ ...formState, userid: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormState({ ...formState, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormState({ ...formState, password: e.target.value });
  };

  const onSubmit = () => {
    dispatch(showLoading());
    addUser(formState.userid, formState.email, formState.password).then(
      (res) => {
        dispatch(hideLoading());
      }
    );
  };

  return (
    <React.Fragment>
      <div className="input-form">
        <div className="input-div">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="User Id"
            value={formState.userid}
            onChange={handleUserIdChange}
          />
        </div>
        <div className="input-div">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Email"
            value={formState.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-div">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            placeholder="Password"
            value={formState.password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <button onClick={onSubmit} className="btn right-btn" >Create Account</button>
    </React.Fragment>
  );
};

export default connect()(Signup);
