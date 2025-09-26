import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import { Link } from "react-router-dom";
import Csrareas from "./Csrareas";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Services = () => {
  useEffect(() => {
    new Swiper(".services-swiper", {
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".sw-pagination-services",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="tf-slideshow slider-style2 slider-effect-fade">
      <div dir="ltr" className="swiper services-swiper">
        {/* ✅ Slides Wrapper */}
        <div className="swiper-wrapper">
          {/* Slide 1 - Health Care */}
          <div className="swiper-slide">
            <div className="wrap-slider">
              <img
                src="/images/banner/csrhero.jpg"
                alt="Healthcare"
                style={{ filter: "brightness(50%)" }}
                className="w-full h-full object-cover"
              />
              <div className="box-content">
                <div className="container text-center">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div className="fade-item fade-item-1 heading title-display text-4xl md:text-6xl font-bold text-white">
                        Building a Better, <br /> Tomorrow Together
                      </div>
                      <p className="text-white text-lg md:text-xl mt-4 max-w-3xl mx-auto">
                        Our commitment to corporate social responsibility drives meaningful change
                        <br />
                        in environmental sustainability, community engagement, and ethical business
                        practices.
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 mt-6">
     <Link
  to="/services"
 className="tf-btn btn-fill">
                        <span className="text">explore services</span>
                      </Link>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Pagination */}
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-services type-circle justify-content-center"></div>
          </div>
        </div>
         {/* ✅ Campaign Section */}
      {/*<section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quit Smoking. Save Lives.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-lg">
            Royal Falcon is more than a brand—it’s a movement. Through awareness
            campaigns, education, and innovative alternatives, we support every
            individual in their journey to quit smoking and reclaim life.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3">
              <img src="/images/campaign/video.jpg" alt="Highlight Video" className="rounded-lg mb-4" />
              <p className="text-gray-700 font-medium">Highlight Videos</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3">
              <img src="/images/campaign/infographic.jpg" alt="Infographics" className="rounded-lg mb-4" />
              <p className="text-gray-700 font-medium">Infographics</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3">
              <img src="/images/campaign/testimonial.jpg" alt="Testimonials" className="rounded-lg mb-4" />
              <p className="text-gray-700 font-medium">Testimonials</p>
            </div>
          </div>
          <Link
            to="/join"
            className="inline-block px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black transition"
          >
            Join the Movement
          </Link>
        </div>
      </section>*/}
        <Csrareas />
      </div>

      {/* ✅ Place Csrareas OUTSIDE swiper */}
     
    </section>
  );
};

export default Services;
