import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProducts = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/watch.jpg" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6>Samsung Galaxy Note10+ Mobile Phone...</h6>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price mb-0">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle p-2 bg-warning">1</span>
                <span className="badge rounded-circle p-2 bg-warning">1</span>
                <span className="badge rounded-circle p-2 bg-warning">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// 3 hours 9 minutes

export default SpecialProducts;
