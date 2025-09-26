
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Healthcare() {
  const [activeTab, setActiveTab] = useState("funding");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(images/banner/banner3.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Healthcare Support</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Section */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6">
              <div data-aos="fade-right" className="about-us-features">
                <img
                  className="img-fluid"
                  src="images/csr/imghealth.jpg"
                  alt="healthcare"
                  data-aos="zoom-in"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 data-aos="fade-up" className="title">
                  Caring for <strong>Communities</strong> through Healthcare
                </h3>

                {/* Tabs */}
                <div className="widget-tabs style-3">
                  <ul data-aos="fade-up" className="widget-menu-tab">
                    <li
                      className={activeTab === "funding" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("funding")}
                    >
                      <span className="inner text-button">Funding Healthcare</span>
                    </li>
                    <li
                      className={activeTab === "hospitals" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("hospitals")}
                    >
                      <span className="inner text-button">Hospital Support</span>
                    </li>
                    <li
                      className={activeTab === "community" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("community")}
                    >
                      <span className="inner text-button">Community Health</span>
                    </li>
                  </ul>

                  <div data-aos="fade-up" className="widget-content-tab">
                    {activeTab === "funding" && (
                      <div className="widget-content-inner active">
                        <h4>🏥 Contributing to Healthcare Funding</h4>
                        <p>
                          A portion of Royal Falcon’s profits is directed towards healthcare
                          programs, ensuring that people in need have access to essential 
                          treatments and medical support.
                        </p>
                      </div>
                    )}

                    {activeTab === "hospitals" && (
                      <div className="widget-content-inner active">
                        <h4>🩺 Supporting Hospitals</h4>
                        <p>
                          We extend financial and logistical assistance to hospitals and clinics,
                          helping them upgrade facilities, provide medical equipment, and deliver
                          better care.
                        </p>
                      </div>
                    )}

                    {activeTab === "community" && (
                      <div className="widget-content-inner active">
                        <h4>🤝 Community Health Programs</h4>
                        <p>
                          Through partnerships with community health initiatives, we promote 
                          wellness campaigns, health awareness drives, and free medical camps 
                          for underserved populations.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Link to="/about" className="tf-btn btn-fill" data-aos="fade-up">
                  <span className="text text-button">Discover More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="flat-spacing">
        <div className="container">
          <div className="heading-section text-center" data-aos="fade-up">
            <h3 className="heading">Healthcare Stories</h3>
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
                  <div className="text-title">Life-Saving Support</div>
                  <p className="text-secondary">
                    "Royal Falcon’s healthcare funding allowed my family to afford treatment we 
                    could not otherwise access."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Khalid M.</div>
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
                  <div className="text-title">Hospital Assistance</div>
                  <p className="text-secondary">
                    "The upgraded facilities supported by Royal Falcon have made healthcare 
                    services in our area much more reliable."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Sarah L.</div>
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
                  <div className="text-title">Community Health</div>
                  <p className="text-secondary">
                    "The free health camp organized in our community gave hundreds of people 
                    access to check-ups and treatment."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Ravi K.</div>
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
