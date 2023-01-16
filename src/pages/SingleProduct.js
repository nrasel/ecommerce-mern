import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    offset: 1,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <div>
      <Helmet>
        <title>Single product</title>
      </Helmet>
      <BreadCrumb title="Single product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(2 Reviews)</p>
                  </div>
                </div>
                <a href="#review">Write a Review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3 rounded">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt, dicta? Neque totam necessitatibus unde omnis ipsam
                    tempore, voluptatum natus aspernatur autem ipsum doloribus
                    ex consequatur sit fugit quod cupiditate recusandae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="reviews-wrapper pb-5 home-wrapper-2 ">
          <div className="container">
            <div className="col-12">
              <h4 id="review">Reviews</h4>
              <div className="review-inner-wrapper rounded">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <div>
                        <a href="">Write a Review</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="review-form mt-4 ">
                  <h4>Write a Review</h4>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name="comment"
                        placeholder="Give Your Comments . . ."
                        className="w-100 form-control "
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Naimur</h6>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, excepturi! Optio soluta sed rerum! Necessitatibus,
                      nisi debitis. Illum, debitis, ullam eaque hic magnam vero,
                      enim repellat at quisquam tenetur eveniet!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
