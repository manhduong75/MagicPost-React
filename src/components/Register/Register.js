import React from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className="register-container ">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-sm-7 d-none d-sm-block ">
            <div className="brand">Magic Post</div>
            <div className="detail">
              Fast and Reliable delivery to the correct address nationwide
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand ">CREATE AN ACCOUNT</div>
            <div className="form-group d-flex flex-row">
              <label for="email">
                <FontAwesomeIcon icon={faEnvelope} className="my-icon" />
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex flex-row">
              <label for="phone">
                <FontAwesomeIcon icon={faPhone} className="my-icon" />
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Your phone number"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex flex-row">
              <label for="username">
                <FontAwesomeIcon icon={faUser} className="my-icon" />
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex flex-row">
              <label for="password">
                <FontAwesomeIcon icon={faLock} className="my-icon" />
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex flex-row">
              <label for="repeat-password">
                <FontAwesomeIcon icon={faKey} className="my-icon" />
              </label>
              <input
                id="repeat-password"
                type="password"
                placeholder="Repeat your password"
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Register</button>
            </div>

            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already've an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
