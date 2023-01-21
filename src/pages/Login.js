import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <BreadCrumb title="login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form className="d-flex flex-column gap-15" action="">
                <CustomInput type="email" placeholder="Email" name="email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-1">
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
      </Container>
    </>
  );
};

export default Login;
