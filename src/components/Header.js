import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :
                <a className="text-white" href="tel:+88 65837923">
                  +88 65837923
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white">PandaE</Link>
              </h1>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product here"
                  aria-label="Search Product here"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <img src="/images/compare.svg" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link>
                    <p></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
