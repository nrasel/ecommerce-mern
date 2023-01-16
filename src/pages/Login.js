import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <BreadCrumb title="login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-3">
                      <Link to="/forgot-password">Forgot Password?</Link>
                      <div className="d-flex mt-3 justify-content-center ">
                        <Link to="/sign-up" className="button signup ">
                          SignUp
                        </Link>
                        <button type="submit" className="button border-0 ms-3">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
