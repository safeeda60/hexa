
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
  const [activeTab, setActiveTab] = useState("access");

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
              <h3 className="heading text-center">Education for Children</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6">
              <div data-aos="fade-right" className="about-us-features">
                <img
                  className="img-fluid"
                  src="images/csr/imgedu.jpg"
                  alt="education"
                  data-aos="zoom-in"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 data-aos="fade-up" className="title">
                  Empowering <strong>Young Minds</strong> through Education
                </h3>

                {/* Tabs */}
                <div className="widget-tabs style-3">
                  <ul data-aos="fade-up" className="widget-menu-tab">
                    <li
                      className={activeTab === "access" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("access")}
                    >
                      <span className="inner text-button">Access to Education</span>
                    </li>
                    <li
                      className={activeTab === "scholarship" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("scholarship")}
                    >
                      <span className="inner text-button">Scholarships</span>
                    </li>
                    <li
                      className={activeTab === "supplies" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("supplies")}
                    >
                      <span className="inner text-button">School Supplies</span>
                    </li>
                    <li
                      className={activeTab === "partners" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("partners")}
                    >
                      <span className="inner text-button">NGO Partnerships</span>
                    </li>
                  </ul>

                  <div data-aos="fade-up" className="widget-content-tab">
                    {activeTab === "access" && (
                      <div className="widget-content-inner active">
                        <h4>🎓 Access to Quality Education</h4>
                        <p>
                          Royal Falcon supports underprivileged children in gaining access to 
                          quality education by removing barriers and creating equal opportunities.
                        </p>
                      </div>
                    )}

                    {activeTab === "scholarship" && (
                      <div className="widget-content-inner active">
                        <h4>📘 Scholarship Programs</h4>
                        <p>
                          Our scholarship initiatives provide financial aid to bright students 
                          who lack the means, ensuring they can continue their academic journey.
                        </p>
                      </div>
                    )}

                    {activeTab === "supplies" && (
                      <div className="widget-content-inner active">
                        <h4>✏️ School Supply Drives</h4>
                        <p>
                          We organize school supply distribution campaigns, equipping children 
                          with essential materials such as books, uniforms, and stationery.
                        </p>
                      </div>
                    )}

                    {activeTab === "partners" && (
                      <div className="widget-content-inner active">
                        <h4>🤝 Partnerships with Schools & NGOs</h4>
                        <p>
                          In collaboration with schools and NGOs across the UAE and beyond, 
                          we extend our impact and reach more children in need of educational support.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Link to="/about" className="tf-btn btn-fill" data-aos="fade-up">
                  <span className="text text-button">Learn More</span>
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
            <h3 className="heading">Voices of Change</h3>
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
                  <div className="text-title">Scholarship Impact</div>
                  <p className="text-secondary">
                    "Thanks to Royal Falcon’s scholarship, I can now attend school without 
                    worrying about financial challenges."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Ahmed S.</div>
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
                  <div className="text-title">School Supplies</div>
                  <p className="text-secondary">
                    "The books and uniforms provided made my school year so much easier. 
                    I feel more confident in class now."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Maya T.</div>
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
                  <div className="text-title">Partnership Programs</div>
                  <p className="text-secondary">
                    "Through Royal Falcon’s partnership with our school, more students 
                    are getting the support they need to succeed."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Fatima R.</div>
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
