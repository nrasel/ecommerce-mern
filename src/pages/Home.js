import React from "react";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container class1="home-wrapper-1 py-5">
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((service, index) => (
                <div key={index} className="d-flex align-items-center gap-10">
                  <img src={service.image} alt="" />
                  <div>
                    <h6>{service.tagline}</h6>
                    <p className="mb-0">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="wrapper-3 py-5">
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
      </Container>
      <Container class1="section marque-wrapper home-wrapper-2  mt-4 py-5">
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
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sepcial Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
      </Container>
      <Container class1="popular-product-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
