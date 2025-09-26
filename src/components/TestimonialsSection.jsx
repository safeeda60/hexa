import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function TestimonialSection() {
  return (
    <section className="flat-spacing bg-black2">
      <div className="container">
        {/* Heading */}
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            The Finest Selection of Tobacco, Delivered
          </p>
        </div>

        {/* Testimonial Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 1.3, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          dir="ltr"
          className="tf-sw-testimonial"
        >
          {/* Testimonial Item 1 */}
          <SwiperSlide>
            <div className="testimonial-item hover-img">
              <div className="img-style">
                <img src="images/new/product3.jpg" alt="Sybil Sharp Testimonial" />
              </div>
              <div className="content">
                <div className="content-top">
                  <div className="list-star-default">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                  <p className="text-secondary">
                    "Burns evenly and lasts a good while. No relighting needed."
                  </p>
                  <div className="box-author">
                    <span className="text-title author">Moni</span>
                    <svg
                      className="icon"
                      width="20"
                      height="21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                        stroke="#3DAB25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005
                             C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049
                             2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                        stroke="#3DAB25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="box-avt">
                  <div className="avatar avt-60 round">
                    <img src="images/new/user.jpg" alt="Product Avatar" />
                  </div>
                  <div className="box-price">
                    <p className="text-title">Flavoured Cigarette Combo</p>
                    <div className="text-button price" style={{ color: "orangered" }}>
                      $60.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial Item 2 */}
          <SwiperSlide>
            <div className="testimonial-item hover-img">
              <div className="img-style">
                <img src="images/new/panpouch.jpg" alt="Mark G. Testimonial" />
              </div>
              <div className="content">
                <div className="content-top">
                  <div className="list-star-default">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                  <p className="text-secondary">
                    "Smooth and slightly sweet with a mild throat hit. Leaves a pleasant aftertaste."
                  </p>
                  <div className="box-author">
                    <span className="text-title author">Mark G.</span>
                    <svg
                      className="icon"
                      width="20"
                      height="21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                        stroke="#3DAB25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005
                             C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049
                             2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                        stroke="#3DAB25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="box-avt">
                  <div className="avatar avt-60 round">
                    <img src="images/new/user.jpg" alt="Product Avatar" />
                  </div>
                  <div className="box-price">
                    <p className="text-title">Nicotin Pouch Combo</p>
                    <div className="text-button price" style={{ color: "orangered" }}>
                      $60.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSection;
