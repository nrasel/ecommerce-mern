import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="" />
            <img className="img-fluid" src="/images/watch-1.png" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Product details of High quality Wifi Router Stand Shelf Double
              Layer Wall Mounted Shelf Storage Rack Home decorator
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex gap-15 flex-column">
              <Link to="/">
                <img src="/images/prodcompare.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="/images/view.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="/images/add-cart.svg" alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="" />
            <img className="img-fluid" src="/images/watch-1.png" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Product details of High quality Wifi Router Stand Shelf Double
              Layer Wall Mounted Shelf Storage Rack Home decorator
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex gap-15 flex-column">
              <Link to="/">
                <img src="/images/prodcompare.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="/images/view.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="/images/add-cart.svg" alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
