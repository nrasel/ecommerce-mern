import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <BreadCrumb title="Privacy Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
