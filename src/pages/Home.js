import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="/images/main-banner-1.jpg"
                  alt="mainBanner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  <Link className="button" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/catbanner-01.jpg"
                    alt="mainBanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/catbanner-02.jpg"
                    alt="mainBanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/catbanner-03.jpg"
                    alt="mainBanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/catbanner-04.jpg"
                    alt="mainBanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-05.png" alt="" />
                  <div>
                    <h6>Secure payment</h6>
                    <p className="mb-0">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper-3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories flex-wrap px-3 d-flex justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music and Gaming</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music and Gaming</h6>
                    <p>10 item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section marque-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <secion className="famous-wrapper  py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <h3 className="section-heading">Famous Products</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="famous-card  rounded position-relative bg-dark">
                <img
                  className="img-fluid  bg-dark rounded"
                  src="/images/watch-2.png"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $999 $16.62/mo. for 24mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card  shadow rounded position-relative ">
                <img
                  className="img-fluid  rounded"
                  src="/images/watch-2.png"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $999 $16.62/mo. for 24mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card  shadow rounded position-relative ">
                <img
                  className="img-fluid  rounded"
                  src="/images/watch-2.png"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $999 $16.62/mo. for 24mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card mb-5 shadow rounded position-relative ">
                <img
                  className="img-fluid  rounded"
                  src="/images/watch-2.png"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $999 $16.62/mo. for 24mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </secion>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Sepcial Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </section>
      <section className="popular-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
