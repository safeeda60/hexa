import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const categories = [
  { img: "/images/new/image.jpg", title: "New in" },
  { img: "/images/new/pineapplepouch.jpg", title: "Promotion" },
  { img: "/images/new/explore2.jpg", title: "Pouches" ,link:"/shop/pouches"},
  { img: "/images/new/panpouch.jpg", title: "Cigarette" },
  { img: "/images/new/explore4.jpg", title: "Hooka" },
  { img: "/images/new/raspouch.jpg", title: "Vape" },
];

function Categories() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section-2">
          <h3 className="heading">Explore</h3>
          <Link to="/categories/pouches" className="btn-line">
            View All Collection
          </Link>
        </div>
      </div>

      <div className="container-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img src={cat.img} alt={cat.title} />
                </a>
                <div className="content">
                  <Link to="/categories" className="cls-btn">
                    <h6 className="text">{cat.title}</h6>
                    <i className="icon icon-arrowUpRight"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Categories;
