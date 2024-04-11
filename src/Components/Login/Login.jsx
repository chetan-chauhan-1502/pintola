import React, { useState } from "react";
import "./Login.css";
import Title from "../Home/Title/Title";

const Login = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // State variables for form inputs and error messages
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [resetPasswordData, setResetPasswordData] = useState({ email: "" });
  const [resetPasswordError, setResetPasswordError] = useState("");

  // Function to handle tab button click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Validation functions
  const validateLogin = () => {
    let errors = {};
    let isValid = true;

    if (!loginData.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!loginData.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setLoginErrors(errors);
    return isValid;
  };

  const validateSignup = () => {
    let errors = {};
    let isValid = true;

    if (!signupData.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!signupData.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!signupData.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!signupData.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setSignupErrors(errors);
    return isValid;
  };

  const validateResetPassword = () => {
    if (!resetPasswordData.email) {
      setResetPasswordError("Email is required");
      return false;
    }
    return true;
  };

  // Event handlers for form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      // Submit login data
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      // Submit signup data
    }
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (validateResetPassword()) {
      // Submit reset password data
    }
  };

  return (
    <>
      {/* Tab buttons */}
      <div className="login_btns">
        <button
          className={activeTab === "tab1" ? "tab-btn active" : "tab-btn"}
          onClick={() => handleTabClick("tab1")}
        >
          Login
        </button>
        <button
          className={activeTab === "tab2" ? "tab-btn active" : "tab-btn"}
          onClick={() => handleTabClick("tab2")}
        >
          Sign Up
        </button>
      </div>
      {/* Login Form */}
      <div
        className="tab-content"
        style={{ display: activeTab === "tab1" ? "block" : "none" }}
      >
        <Title titleName={"Customer Login"} />
        <div className="loginform">
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="">Email address*</label>
            <input
              type="text"
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <span className="error">{loginErrors.email}</span>
            <label htmlFor="">Password*</label>
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <span className="error">{loginErrors.password}</span>
            <span className="loginArea">
              <button
                type="submit"
                className="customerLogin"
                onClick={() => handleTabClick("tab1")}
              >
                Login
              </button>
              <button
                className="forgetPass"
                onClick={() => handleTabClick("tab3")}
              >
                Forgot your password?
              </button>
            </span>
          </form>
        </div>
      </div>
      {/*  Signup Form */}
      <div
        className="tab-content"
        style={{ display: activeTab === "tab2" ? "block" : "none" }}
      >
        <Title titleName={"Create Account"} />
        <div className="registerform">
          <form onSubmit={handleSignupSubmit}>
            <label htmlFor="">First name*</label>
            <input
              type="text"
              placeholder="First name"
              value={signupData.firstName}
              onChange={(e) =>
                setSignupData({ ...signupData, firstName: e.target.value })
              }
            />
            <span className="error">{signupErrors.firstName}</span>

            <label htmlFor="">Last name*</label>
            <input
              type="text"
              placeholder="Last name"
              value={signupData.lastName}
              onChange={(e) =>
                setSignupData({ ...signupData, lastName: e.target.value })
              }
            />
            <span className="error">{signupErrors.lastName}</span>

            <label htmlFor="">Email address*</label>
            <input
              type="text"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
            <span className="error">{signupErrors.email}</span>

            <label htmlFor="">Password*</label>
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
            <span className="error">{signupErrors.password}</span>

            <span className="signupArea">
              <button
                type="submit"
                className="customerSignUp"
                onClick={() => handleTabClick("tab2")}
              >
                Sign Up
              </button>
              <button className="Indicates">
                * Indicates a required field
              </button>
            </span>
          </form>
        </div>
      </div>
      {/* Reset Password Form */}
      <div
        className="tab-content "
        style={{ display: activeTab === "tab3" ? "block" : "none" }}
      >
        <div className="forgetpassworMain">
          <div className="forgetpassword">
            <h3>Reset Password</h3>
            <form onSubmit={handleResetPasswordSubmit}>
              <label htmlFor="Email address">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                value={resetPasswordData.email}
                onChange={(e) =>
                  setResetPasswordData({
                    ...resetPasswordData,
                    email: e.target.value,
                  })
                }
              />
              <span className="error">{resetPasswordError}</span>
              <p>We will send you an email to reset your password.</p>
              <span>
                <button type="submit">submit</button>
                <button
                  className="cancel"
                  onClick={() => handleTabClick("tab1")}
                >
                  cancel
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
