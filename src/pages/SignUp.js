import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form className="d-flex flex-column gap-15" action="">
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" placeholder="Email" name="email" />
                <CustomInput
                  type="tel"
                  placeholder="Mobile Number"
                  name="moile"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3">
                    <div className="d-flex mt-3 justify-content-center ">
                      <Link to="/login" type="submit" className="button signup">
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
      </Container>
    </div>
  );
};

export default SignUp;
