import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Sign Up</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        name="moile"
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
                      <div className="d-flex mt-3 justify-content-center ">
                        <Link
                          to="/login"
                          type="submit"
                          className="button signup"
                        >
                          Login
                        </Link>
                        <button type="submit" className="button border-0 ms-3">
                          SignUp
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
    </div>
  );
};

export default SignUp;
