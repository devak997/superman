import React, { useState } from "react";

import "./SignupLogin.css";
import Login from "../Login";
import Signup from "../Signup.js";

const SignupLogin = ({ history }) => {
  const [currentTab, setTab] = useState("login");
  return (
    <div className="container">
      <div className="middle-card">
        <div id="tabButtons">
          <button
            className={`tabButton ${currentTab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
          <button
            className={`tabButton ${currentTab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Log In
          </button>
        </div>
        <div className="tabContent">
          {currentTab === "login" ? <Login history={history} /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
