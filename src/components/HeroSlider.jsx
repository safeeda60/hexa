
// src/components/HeroSlider.jsx
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import { Link } from "react-router-dom";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function HeroSlider() {
  useEffect(() => {
    new Swiper(".hero-swiper", {
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".sw-pagination-slider",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="tf-slideshow slider-style2 slider-effect-fade">
      <div dir="ltr" className="swiper hero-swiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="wrap-slider">
              <img src="/images/banner/bg1.jpg" alt="fashion-slideshow" style={{ filter: "brightness(60%)" }} />
              <div className="box-content">
                <div className="container">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div className="fade-item fade-item-1 heading title-display">
                       A Healthier Alternative, <br /> for a Conscious You
                      </div>
                      <p className="fade-item fade-item-2 body-text-1" style={{ color: "#f3f1e7ff" }}>
                        Quality You Can Taste, Experience You Can Trust
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <Link to="/categories" className="tf-btn btn-fill">
                        <span className="text">Explore Collection</span>
                        <i className="icon icon-arrowUpRight"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="wrap-slider">
              <img src="/images/banner/new.jpg" alt="fashion-slideshow" style={{ filter: "brightness(60%)" }}/>
              <div className="box-content">
                <div className="container">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div className="fade-item fade-item-1 heading title-display">
                        Sustainability, at the<br /> Heart of Every Experience
                      </div>
                      <p className="fade-item fade-item-2 body-text-1"  style={{ color: "rgba(228, 226, 216, 1)" }}>
                        Quality You Can Taste, Experience You Can Trust
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <Link to="/products" className="tf-btn btn-fill">
                        <span className="text">Shop Sale</span>
                        <i className="icon icon-arrowUpRight"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="wrap-slider">
              <img src="/images/banner/banner4.jpg" alt="fashion-slideshow" style={{ filter: "brightness(60%)" }}/>
              <div className="box-content">
                <div className="container">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div className="fade-item fade-item-1 heading title-display">
                        Elevating Lifestyle,  <br />the Responsible Way
                      </div>
                      <p className="fade-item fade-item-2 body-text-1">
                        Quality You Can Taste, Experience You Can Trust
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <Link to="/categories" className="tf-btn btn-fill">
                        <span className="text">Shop New</span>
                        <i className="icon icon-arrowUpRight"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-circle justify-content-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
