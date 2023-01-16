import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const ResetPassword = () => {
  return (
    <div>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <BreadCrumb title="reset password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Password</h3>

                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <div className="mt-3">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        type="password"
                        placeholder="Reset Password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="d-flex mt-3 justify-content-center gap-15 align-items-center flex-column">
                        <button type="submit" className="button border-0">
                          Ok
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

export default ResetPassword;
