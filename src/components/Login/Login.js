import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  let history = useHistory();
  const handleCreateNewAccount = () => {
    history.push("/register");
  };

  return (
    <div className="login-container ">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-sm-7 d-none d-sm-block ">
            <div className="brand">Magic Post</div>
            <div className="detail">
              Fast and Reliable delivery to the correct address nationwide
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Magic Post</div>
            <div className="form-group d-flex flex-row">
              <FontAwesomeIcon icon={faUser} className="my-icon" />
              <input
                type="text"
                placeholder="Username"
                className="form-control"
              />
            </div>

            <div className="form-group d-flex flex-row">
              <FontAwesomeIcon icon={faLock} className="my-icon" />
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Login</button>
            </div>
            <span className="text-center">
              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleCreateNewAccount()}
              >
                Create new account
              </button>
            </div>
            <span className="text-center">Or login with</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
