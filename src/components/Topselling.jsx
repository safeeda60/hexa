import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



function TopSelling() {
  const products = [
    {
      id: 1,
      title: "Mint Nicotin Pouch Combo",
      price: "$69.99",
      img: "images/new/mintpouch.jpg",
      link: "/products/1",
    },
    {
      id: 2,
      title: "Peach Flavoured Cigarette Combo",
      price: "$69.99",
      img: "images/new/product1.jpg",
      link: "product-detail.html",
    },
    {
      id: 3,
      title: "Cherry Nicotin Pouch Combo",
      price: "$69.99",
      img: "images/new/berrypouch.jpg",
      link: "product-detail.html",
    },
    {
      id: 4,
      title: "Rasberry Flavoured Cigarette Combo",
      price: "$69.99",
      img: "images/new/product3.jpg",
      link: "product-detail.html",
    },
  ];

  return (
    <section className="flat-spacing" style={{ backgroundColor: "#1A1A1A" }} id="top-selling">
      <div className="container">
        {/* Section Heading */}
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Top Selling</h3>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="tf-sw-latest"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card-product">
                <div className="card-product-wrapper">
                  <a href={product.link} className="product-img">
                    <img
                      className="img-product"
                      src={product.img}
                      alt={product.title}
                    />
                    <img
                      className="img-hover"
                      src={product.img}
                      alt={product.title}
                    />
                  </a>

                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart"></span>
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye"></span>
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>

                  <div className="list-btn-main">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </a>
                  </div>
                </div>

                <div className="card-product-info">
                  <a href={product.link} className="title link">
                    {product.title}
                  </a>
                  <span className="price" style={{ color: "orangered" }}>
                    {product.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TopSelling;
