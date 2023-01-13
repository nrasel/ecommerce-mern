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
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Cateogries</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop </li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      checked
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-label">
                      Out of Stock (0)
                    </label>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label for="floatingInput">From</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="color-1" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="color-2"
                        className="form-check-input"
                      />
                      <label htmlFor="color-2" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
