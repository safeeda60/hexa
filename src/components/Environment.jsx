import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Environment() {
  const [activeTab, setActiveTab] = useState("eco");

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
              <h3 className="heading text-center">Environmental Responsibility</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Section */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6">
              <div data-aos="fade-right" className="about-us-features">
                <img
                  className="img-fluid"
                  src="images/csr/imgenv.jpg"
                  alt="environment"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 data-aos="fade-up" className="title">
                  Building a <strong>Greener Future</strong> with Royal Falcon
                </h3>

                {/* Tabs */}
                <div className="widget-tabs style-3">
                  <ul data-aos="fade-up" className="widget-menu-tab">
                    <li
                      className={activeTab === "eco" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("eco")}
                    >
                      <span className="inner text-button">Eco-Friendly</span>
                    </li>
                    <li
                      className={activeTab === "packaging" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("packaging")}
                    >
                      <span className="inner text-button">Sustainable Packaging</span>
                    </li>
                    <li
                      className={activeTab === "tree" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("tree")}
                    >
                      <span className="inner text-button">Tree Planting</span>
                    </li>
                    <li
                      className={activeTab === "commit" ? "item-title active" : "item-title"}
                      onClick={() => setActiveTab("commit")}
                    >
                      <span className="inner text-button">Our Commitment</span>
                    </li>
                  </ul>

                  <div data-aos="fade-up" className="widget-content-tab">
                    {activeTab === "eco" && (
                      <div className="widget-content-inner active">
                        <h4>🌱 Promoting Eco-Friendly Products</h4>
                        <p>
                          We prioritize sustainable and eco-conscious ingredients, such as herbal 
                          alternatives, in our product lines. This reduces environmental impact while 
                          encouraging healthier lifestyle choices.
                        </p>
                      </div>
                    )}

                    {activeTab === "packaging" && (
                      <div className="widget-content-inner active">
                        <h4>📦 Sustainable Packaging Solutions</h4>
                        <p>
                          Royal Falcon is committed to reducing plastic waste by introducing 
                          recyclable and biodegradable packaging for vending machines and 
                          retail products.
                        </p>
                      </div>
                    )}

                    {activeTab === "tree" && (
                      <div className="widget-content-inner active">
                        <h4>🌳 Tree-Planting Initiatives</h4>
                        <p>
                          In collaboration with local authorities and community groups, we 
                          organize tree-planting drives to create greener cities, cleaner air, 
                          and stronger ecosystems for future generations.
                        </p>
                      </div>
                    )}

                    {activeTab === "commit" && (
                      <div className="widget-content-inner active">
                        <h4>🌍 Our Commitment to a Greener Future</h4>
                        <p>
                          From sustainable farming partnerships to eco-conscious product 
                          development, Royal Falcon is dedicated to reducing carbon footprints 
                          and inspiring positive change in the communities we serve.
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

      {/* Testimonial Section */}
      <section className="flat-spacing">
        <div className="container">
          <div className="heading-section text-center" data-aos="fade-up">
            <h3 className="heading">Community Feedback</h3>
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
                  <div className="text-title">Eco-Friendly Focus</div>
                  <p className="text-secondary">
                    "I appreciate Royal Falcon’s dedication to eco-friendly initiatives. It feels 
                    good to support a brand that cares for the planet."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Amira K.</div>
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
                  <div className="text-title">Sustainable Packaging</div>
                  <p className="text-secondary">
                    "The recyclable packaging is a thoughtful step towards reducing waste. Kudos 
                    to Royal Falcon!"
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">James R.</div>
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
                  <div className="text-title">Green Initiatives</div>
                  <p className="text-secondary">
                    "Participating in the tree-planting drive was rewarding. It’s great to see 
                    companies take real action for the environment."
                  </p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">Leila P.</div>
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
