
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(images/banner/banner2.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">About Our Store</h3>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6">
              <div data-aos="fade-right" className="about-us-features">
                <img
                  className="img-fluid"
                  src="images/new/waterm.jpg"
                  alt="about-us"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 data-aos="fade-up" className="title">
                  Welcome to <strong>Royal Falcon</strong> – Redefining
                  Lifestyles with Safe & Sustainable Alternatives
                </h3>

                {/* Tabs */}
                <div className="widget-tabs style-3">
                  <ul data-aos="fade-up" className="widget-menu-tab">
                    <li
                      className={
                        activeTab === "intro" ? "item-title active" : "item-title"
                      }
                      onClick={() => setActiveTab("intro")}
                    >
                      <span className="inner text-button">Introduction</span>
                    </li>
                    <li
                      className={
                        activeTab === "vision" ? "item-title active" : "item-title"
                      }
                      onClick={() => setActiveTab("vision")}
                    >
                      <span className="inner text-button">Our Vision</span>
                    </li>
                    <li
                      className={
                        activeTab === "apart" ? "item-title active" : "item-title"
                      }
                      onClick={() => setActiveTab("apart")}
                    >
                      <span className="inner text-button">What Sets Us Apart</span>
                    </li>
                    <li
                      className={
                        activeTab === "commit" ? "item-title active" : "item-title"
                      }
                      onClick={() => setActiveTab("commit")}
                    >
                      <span className="inner text-button">Our Commitment</span>
                    </li>
                  </ul>

                  <div data-aos="fade-up" className="widget-content-tab">
                    {activeTab === "intro" && (
                      <div className="widget-content-inner active">
                        <p>
                          At <strong>Royal Falcon</strong>, we’re committed to
                          delivering the finest tobacco products for discerning
                          customers. From rich hand-rolled cigars to classic
                          cigarettes and premium rolling tobacco, our collection
                          is curated for quality, tradition, and satisfaction.
                        </p>
                      </div>
                    )}

                    {activeTab === "vision" && (
                      <div className="widget-content-inner active">
                        <p>
                          Founded by a team of wellness experts and innovators, we
                          were born from a vision to elevate quality of life
                          through sustainable and innovative solutions. Driven by
                          a commitment to wellbeing and the environment, we are
                          passionate about creating new products that improve
                          health and positively impact our planet.
                        </p>
                      </div>
                    )}

                    {activeTab === "apart" && (
                      <div className="widget-content-inner active">
                        <p>
                          This presentation outlines our comprehensive strategy
                          spanning marketing, operations, expansion, and
                          mission-driven approach to reduce cigarette consumption
                          through innovative alternatives.
                        </p>
                      </div>
                    )}

                    {activeTab === "commit" && (
                      <div className="widget-content-inner active">
                        <p>
                          Our company supplies hydroponic and aquaponic systems,
                          with emphasis on tobacco and leaf manufacturing. We aim
                          to export leaf through international contracts while
                          producing organic tobacco leaf under the IEMA initiative.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Link to="/about" className="tf-btn btn-fill" data-aos="fade-up">
                  <span className="text text-button">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconbox Section */}
      <section className="flat-spacing line-bottom-container">
        <div className="container">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="tf-icon-box style-2" data-aos="fade-up">
                <div className="icon-box">
                  <span className="icon icon-return"></span>
                </div>
                <div className="content">
                  <h6>14-Day Returns</h6>
                  <p className="text-secondary-last">
                    Risk-free shopping with easy returns.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tf-icon-box style-2" data-aos="fade-up">
                <div className="icon-box">
                  <span className="icon icon-shipping"></span>
                </div>
                <div className="content">
                  <h6>Free Shipping</h6>
                  <p className="text-secondary-last">
                    No extra costs, just the price you see.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tf-icon-box style-2" data-aos="fade-up">
                <div className="icon-box">
                  <span className="icon icon-headset"></span>
                </div>
                <div className="content">
                  <h6>24/7 Support</h6>
                  <p className="text-secondary-last">
                    24/7 support, always here just for you.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tf-icon-box style-2" data-aos="fade-up">
                <div className="icon-box">
                  <span className="icon icon-sealCheck"></span>
                </div>
                <div className="content">
                  <h6>Member Discounts</h6>
                  <p className="text-secondary-last">
                    Special prices for our loyal customers.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="flat-spacing">
        <div className="container">
          <div className="heading-section text-center" data-aos="fade-up">
            <h3 className="heading">Customer Review</h3>
          </div>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="testimonial-item style-4" data-aos="fade-up">
                <div className="content-top">
                  <div className="box-icon">
                    <i className="icon icon-quote"></i>
                  </div>
                  <div className="text-title">Variety of Cigarette!</div>
                  <p className="text-secondary">
                    "The Finest Selection of Tobacco, Delivered good quality"
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Sybil Sharp</div>
                    </div>
                    <div className="list-star-default color-primary">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon icon-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item style-4" data-aos="fade-up">
                <div className="content-top">
                  <div className="box-icon">
                    <i className="icon icon-quote"></i>
                  </div>
                  <div className="text-title">Quality of Cigarette!</div>
                  <p className="text-secondary">
                    "Burns evenly and lasts a good while. No relighting needed."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Mark G.</div>
                    </div>
                    <div className="list-star-default color-primary">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon icon-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item style-4" data-aos="fade-up">
                <div className="content-top">
                  <div className="box-icon">
                    <i className="icon icon-quote"></i>
                  </div>
                  <div className="text-title">Customer Service!</div>
                  <p className="text-secondary">
                    "I love this shop! The products are always friendly and
                    helpful."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Emily S.</div>
                    </div>
                    <div className="list-star-default color-primary">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon icon-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item style-4" data-aos="fade-up">
                <div className="content-top">
                  <div className="box-icon">
                    <i className="icon icon-quote"></i>
                  </div>
                  <div className="text-title">Variety of Styles!</div>
                  <p className="text-secondary">
                    "Fantastic shop! Great selection, fair prices, and friendly
                    staff. Highly recommended."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Sybil Sharp</div>
                    </div>
                    <div className="list-star-default color-primary">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon icon-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
