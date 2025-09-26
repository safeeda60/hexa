
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Community() {
  const [activeTab, setActiveTab] = useState("training");

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
              <h3 className="heading text-center">Community Empowerment</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6">
              <div data-aos="fade-right" className="about-us-features">
                <img
                  className="img-fluid"
                  src="images/csr/imgcom.jpg"
                  alt="community empowerment"
                  data-aos="zoom-in"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 data-aos="fade-up" className="title">
                  Empowering <strong>Communities</strong> for a Healthier Future
                </h3>

                {/* Tabs */}
                <div className="widget-tabs style-3">
                  <ul data-aos="fade-up" className="widget-menu-tab">
                    <li
                      className={activeTab === "training" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("training")}
                    >
                      <span className="inner text-button">Vocational Training</span>
                    </li>
                    <li
                      className={activeTab === "support" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("support")}
                    >
                      <span className="inner text-button">Family Support</span>
                    </li>
                    <li
                      className={activeTab === "employment" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("employment")}
                    >
                      <span className="inner text-button">Employment Opportunities</span>
                    </li>
                  </ul>

                  <div data-aos="fade-up" className="widget-content-tab">
                    {activeTab === "training" && (
                      <div className="widget-content-inner active">
                        <h4>🤝 Vocational Training & Workshops</h4>
                        <p>
                          Royal Falcon organizes skill-based training programs and awareness 
                          workshops that empower individuals with practical knowledge, enabling 
                          them to build sustainable livelihoods.
                        </p>
                      </div>
                    )}

                    {activeTab === "support" && (
                      <div className="widget-content-inner active">
                        <h4>👨‍👩‍👧 Family Lifestyle Support</h4>
                        <p>
                          We help families transition to healthier lifestyles by providing 
                          education, guidance, and resources that promote wellness and 
                          long-term stability.
                        </p>
                      </div>
                    )}

                    {activeTab === "employment" && (
                      <div className="widget-content-inner active">
                        <h4>💼 Local Employment Opportunities</h4>
                        <p>
                          Through our vending distribution networks, Royal Falcon creates 
                          meaningful local job opportunities, supporting economic growth and 
                          community resilience.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Link to="/about" className="tf-btn btn-fill" data-aos="fade-up">
                  <span className="text text-button">Join Our Mission</span>
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
            <h3 className="heading">Community Voices</h3>
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
                  <div className="text-title">Skill Development</div>
                  <p className="text-secondary">
                    "The vocational training workshops helped me learn new skills and 
                    find better opportunities."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Fatima S.</div>
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
                  <div className="text-title">Family Guidance</div>
                  <p className="text-secondary">
                    "Royal Falcon’s family support programs guided us towards a 
                    healthier lifestyle. Truly life-changing!"
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Omar K.</div>
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
                  <div className="text-title">Local Jobs</div>
                  <p className="text-secondary">
                    "Thanks to Royal Falcon’s vending network, I found stable 
                    employment close to home."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Anjali R.</div>
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
