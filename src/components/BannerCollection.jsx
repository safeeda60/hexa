import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function BannerCollection() {
  return (
    <section className="section-gap-top">
      <div className="container">
        {/* Heading */}
        <h3 className="text-center">Find your best favourite</h3>
        <p className="text-center pb-5">
          quo accusantium natus. Facere iure earum reiciendis illo veritatis
          beatae nihil vero temporibus.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="tf-sw-lookbook"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="collection-default style-1 style-row hover-img">
              <a className="img-style aspect-ratio-0" href="#!">
                <img
                  className="lazyload"
                  src="/images/new/berryresize.jpg"
                  alt="Flavored Tobacco Line"
                />
              </a>
              <div className="content">
                <h4 className="title wow fadeInUp">
                  <Link to="/products" className="link">
                    Flavored Tobacco Line Launched – Explore Unique Blends
                  </Link>
                </h4>
                <p className="desc wow fadeInUp">
                  Flavored tobacco range designed for the modern connoisseur
                </p>
                <div className="wow fadeInUp">
                  <Link to="/products" className="btn-line">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="collection-default style-1 style-row hover-img">
              <a className="img-style aspect-ratio-0" href="#!">
                <img
                  className="lazyload"
                  src="/images/new/square2.jpg"
                  alt="Hand-rolled tobacco"
                />
              </a>
              <div className="content">
                <h4 className="title wow fadeInUp">
                  <Link to="/products" className="link">
                    Hand-rolled tobacco is making a comeback
                  </Link>
                </h4>
                <p className="desc wow fadeInUp">
                  Smokers are turning to rolling tobacco for its customizable
                  experience, richer flavor, and cost-effectiveness.
                </p>
                <div className="wow fadeInUp">
                  <Link to="/products" className="btn-line">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default BannerCollection;
