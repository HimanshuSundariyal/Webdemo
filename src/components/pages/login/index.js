import React, { useState } from "react";
import "./login.css";
import Button from "../../stories/button";
import TextBox from "../../stories/inputs/textbox";
import {Primary} from '../../stories/button/button.stories'
import {
  appTitle,
  appDescription,
  mandatoryFieldsError,
  errorMessage,
} from "../../../config";
import { validateLogin } from "../../utils";
import Errors from "../../stories/errors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mandatoryFiledsError, setMandatoryFiledsError] = useState(false);
  const navigate = useNavigate();

  const handelChange = (type, value) => {
    setError(false);
    setMandatoryFiledsError(false);
    if (type === "Username") {
      setUserName(value);
    }
    if (type === "Password") {
      setPassword(value);
    }
  };

  const handelSubmit = (e) => {
    if (userName.trim() === "" || password.trim() === "") {
      setMandatoryFiledsError(true);
      e.preventDefault();
    } else {
      if (validateLogin(userName, password)) {
        localStorage.setItem("Login", true);
        navigate("/home");
      } else {
        setError(true);
        e.preventDefault();
      }
    }
  };

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <form
                      onSubmit={(e) => {
                        handelSubmit(e);
                      }}
                    >
                      <div className="form-outline mb-4">
                        <TextBox
                          label="Username"
                          placeholder="User Name"
                          handelInputChange={handelChange}
                          type="text"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextBox
                          label="Password"
                          placeholder="Password"
                          handelInputChange={handelChange}
                          type="password"
                        />
                      </div>

                      {error && (
                        <Errors
                          errorType="critical"
                          errorMessage={errorMessage}
                        />
                      )}
                      {mandatoryFiledsError && (
                        <Errors
                          errorType="warning"
                          errorMessage={mandatoryFieldsError}
                        />
                      )}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <Button
                          buttonText="Log In"
                          handelClick={(e)=>handelSubmit(e)}
                          buttonType="primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">{appTitle}</h4>
                    <p className="small mb-0">{appDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
