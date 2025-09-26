import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function BannerWithText() {
  return (
    <section className="bg-black2 bg-banner">
      <div className="container">
        <div className="row flat-img-with-text-v3">
          {/* Left Image */}
          <div className="col-lg-6 col-md-5">
            <div className="banner-left">
              <div className="collection-position style-lg hover-img">
                <a className="img-style" href="#!">
                  <img
                    className="lazyload"
                    src="/images/new/hooka.jpg"
                    alt="banner"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side with Text + Swiper */}
          <div className="col-lg-6 col-md-7">
            <div className="banner-right">
              <div className="box-title">
                <h3 className="title wow fadeInUp firsttitle">
                  Everything you need is here.
                </h3>
                <div className="sub-title text-btn-uppercase wow fadeInUp">
                  Flavoured Tobacco Pack
                </div>
              </div>

              {/* Swiper Slider */}
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
                className="tf-sw-collection"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="card-product">
                    <div className="card-product-wrapper">
                      <a href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src="/images/new/every1.jpg"
                          alt="Peach Flavoured Pack"
                        />
                        <img
                          className="lazyload img-hover"
                          src="/images/new/every1.jpg"
                          alt="Peach Flavoured Pack"
                        />
                      </a>
                      <div className="list-product-btn">
                        <a
                          href="javascript:void(0);"
                          className="box-icon wishlist btn-icon-action"
                        >
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Wishlist</span>
                        </a>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="box-icon quickview tf-btn-loading"
                        >
                          <span className="icon icon-eye"></span>
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                      <div className="list-btn-main">
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="modal"
                          className="btn-main-product"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <a
                        href="product-detail.html"
                        className="title link"
                      >
                        Peach Flavoured Pack
                      </a>
                      <span className="price">$69.99</span>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="card-product card-product-size">
                    <div className="card-product-wrapper">
                      <a href="product-detail.html" className="product-img">
                        <img
                          className="lazyload img-product"
                          src="/images/new/every2.jpg"
                          alt="Pineapple Flavoured Pack"
                        />
                        <img
                          className="lazyload img-hover"
                          src="/images/new/every2.jpg"
                          alt="Pineapple Flavoured Pack"
                        />
                      </a>
                      <div className="list-product-btn">
                        <a
                          href="javascript:void(0);"
                          className="box-icon wishlist btn-icon-action"
                        >
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Wishlist</span>
                        </a>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="box-icon quickview tf-btn-loading"
                        >
                          <span className="icon icon-eye"></span>
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                      <div className="list-btn-main">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          className="btn-main-product"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <a
                        href="product-detail.html"
                        className="title link"
                      >
                        Pineapple Flavoured Pack
                      </a>
                      <span className="price">
                        <span className="old-price">$98.00</span> $89.99
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerWithText;
