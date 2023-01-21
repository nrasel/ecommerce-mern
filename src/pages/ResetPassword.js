import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <BreadCrumb title="reset password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Password</h3>

              <form className="d-flex flex-column gap-15" action="">
                <CustomInput
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <CustomInput
                  type="password"
                  placeholder="Reset Password"
                  name="password"
                />
                <div>
                  <div className="mt-1">
                    <div className="d-flex mt-1 justify-content-center gap-15 align-items-center flex-column">
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
      </Container>
    </div>
  );
};

export default ResetPassword;
