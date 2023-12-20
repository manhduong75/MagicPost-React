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
              <FontAwesomeIcon icon={faEnvelope} className="my-icon" />
              <input
                type="text"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex flex-row">
              <FontAwesomeIcon icon={faPhone} className="my-icon" />
              <input
                type="text"
                placeholder="Your phone number"
                className="form-control"
              />
            </div>
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
            <div className="form-group d-flex flex-row">
              <FontAwesomeIcon icon={faKey} className="my-icon" />
              <input
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
