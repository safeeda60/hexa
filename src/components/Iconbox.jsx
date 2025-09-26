import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Iconbox() {
  return (
    <section className="flat-spacing bg-black2">
      <div className="container">
        {/* Iconbox Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          dir="ltr"
          className="tf-sw-iconbox"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="tf-icon-box">
              <div className="icon-box">
                <span className="icon icon-return"></span>
              </div>
              <div className="content text-center">
                <h6>14-Day Returns</h6>
                <p className="text-orange">Risk-free shopping with easy returns.</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="tf-icon-box">
              <div className="icon-box">
                <span className="icon icon-shipping"></span>
              </div>
              <div className="content text-center">
                <h6>Free Shipping</h6>
                <p className="text-orange">No extra costs, just the price you see.</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="tf-icon-box">
              <div className="icon-box">
                <span className="icon icon-headset"></span>
              </div>
              <div className="content text-center">
                <h6>24/7 Support</h6>
                <p className="text-orange">24/7 support, always here just for you</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="tf-icon-box">
              <div className="icon-box">
                <span className="icon icon-sealCheck"></span>
              </div>
              <div className="content text-center">
                <h6>Member Discounts</h6>
                <p className="text-orange">Special prices for our loyal customers.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Iconbox;
