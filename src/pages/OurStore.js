import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const OurStore = () => {
  return (
    <div>
      <Helmet>
        <title>Our Store</title>
      </Helmet>
      <BreadCrumb title="Our Store" />
    </div>
  );
};

export default OurStore;
