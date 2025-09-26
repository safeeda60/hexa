import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function NewsInsight() {
  return (
    <section className="flat-spacing pt-5">
      <div className="container">
        {/* Heading */}
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">News insight</h3>
        </div>

        {/* News Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          dir="ltr"
          className="tf-sw-recent"
        >
          {/* News Item 1 */}
          <SwiperSlide>
            <div className="wg-blog style-1 hover-image wow fadeInUp">
              <div className="image">
                <img src="images/new/explore5.jpg" alt="News 1" />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">10 August</p>
                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.html">
                      Tobacco Lovers Rejoice – Premium Products Now Available Online
                    </a>
                  </h6>
                  <div className="body-text">
                    thrilled to share exciting news with our valued customers — our online
                    tobacco store has expanded its product line its shopping experience
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* News Item 2 */}
          <SwiperSlide>
            <div
              className="wg-blog style-1 hover-image wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="image">
                <img src="images/new/all.jpg" alt="News 2" />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">13 August</p>
                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.html">
                      New Flavored Tobacco Line Launched – Explore Unique Blends
                    </a>
                  </h6>
                  <div className="body-text">
                    We’re proud to introduce our new line of flavored tobacco blends,
                    crafted for those who enjoy bold, aromatic smoking experiences.
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* News Item 3 */}
          <SwiperSlide>
            <div
              className="wg-blog style-1 hover-image wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="image">
                <img src="images/new/explore6.jpg" alt="News 3" />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">15 August</p>
                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.html">
                      Industry Insight: Demand for Hand-Rolled Tobacco on the Rise
                    </a>
                  </h6>
                  <div className="body-text">
                    Recent trends in the tobacco industry show a strong shift toward
                    hand-rolled tobacco preferences among adult consumers.
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

export default NewsInsight;
