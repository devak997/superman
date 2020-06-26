import React, { useState } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthedUser } from "../../actions/auth";

const Login = ({ dispatch, history }) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e) => {
    setFormState({ ...formState, email: e.target.value });
    setErrorMsg("");
  };

  const handlePasswordChange = (e) => {
    setFormState({ ...formState, password: e.target.value });
    setErrorMsg("");
  };

  const onSubmit = () => {
    dispatch(showLoading());
    authenticateUser(formState.email, formState.password)
      .then((res) => {
        if (!res.data.authenticated) {
          setErrorMsg(res.data.message);
        } else {
          dispatch(setAuthedUser(res.data.id));
          history.push("/");
        }
        dispatch(hideLoading());
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response.data.message);
        dispatch(hideLoading());
      });
  };

  return (
    <React.Fragment>
      <div className="input-form">
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
      <div className="error-message">{errorMsg}</div>
      <div className="buttons">
        <button className="btn forget-btn">Forgot Password?</button>
        <button className="btn" onClick={onSubmit}>
          Log In
        </button>
      </div>
    </React.Fragment>
  );
};

export default connect()(Login);
