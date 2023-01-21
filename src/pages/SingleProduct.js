import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
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
  const copyToClipboard = (text) => {
    console.log("text", text);
    let textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <div>
      <Helmet>
        <title>Single product</title>
      </Helmet>
      <BreadCrumb title="Single product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
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
                <a href="#review">Write a Review</a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex my-2 gap-10 align-items-center">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data mb-0">Watch</p>
                </div>
                <div className="d-flex my-2 gap-10 align-items-center">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data mb-0">Havels</p>
                </div>
                <div className="d-flex my-2 gap-10 align-items-center">
                  <h3 className="product-heading">Cateogry :</h3>
                  <p className="product-data mb-0">Watch</p>
                </div>
                <div className="d-flex my-2 gap-10 align-items-center">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data mb-0">Watch</p>
                </div>
                <div className="d-flex mb-2 gap-10 align-items-center">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data mb-0">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge  border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 flex-row  align-items-center mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      min={1}
                      max={10}
                      style={{ width: "50px" }}
                      type="number"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button signup border-0">
                      Add to Cart
                    </button>
                    <button type="submit" className="button border-0 ms-3">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" />
                      Add tp card
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex my-2 gap-10 align-items-center">
                  <h3 className="product-heading">Shipping & Return : </h3>
                  <p className="product-data mb-0">
                    Free shipping and returns available on all orders! <br />
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 rounded">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sunt, dicta? Neque totam necessitatibus unde omnis ipsam
                  tempore, voluptatum natus aspernatur autem ipsum doloribus ex
                  consequatur sit fugit quod cupiditate recusandae?
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="reviews-wrapper pb-5 home-wrapper-2">
          {" "}
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
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default SingleProduct;
