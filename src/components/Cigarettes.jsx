// src/components/Cigarettes.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Cigarettes() {
  const cigaretteProducts = [
    {
      id: 1,
      title: "Classic Red Cigarettes",
      price: "$8.99",
      oldPrice: "$10.99",
      image: "/images/categories/product1.jpg",
      link: "/categories/cigarettes",
    },
    {
      id: 2,
      title: "Menthol Fresh Cigarettes",
      price: "$9.49",
      oldPrice: null,
      image: "/images/categories/product.jpg",
      link: "/categories/cigarettes",
    },
    {
      id: 3,
      title: "Gold Smooth Cigarettes",
      price: "$11.50",
      oldPrice: "$12.50",
      image: "/images/categories/cigimg.jpg",
      link: "/categories/cigarettes",
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url('/images/banner/banner2.jpg')" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Cigarettes</h3>
              <p className="text-center">
                Traditional tobacco products for a familiar experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="flat-spacing">
        <div className="container flat-animate-tab">
          <div className="tab-content">
            <div className="tab-pane active show">
              <div className="row">
                {cigaretteProducts.map((p) => (
                  <div className="col-md-3 mb-4" key={p.id}>
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        {/* Product Image */}
                        <Link to={p.link} className="product-img">
                          <img
                            className="img-product"
                            src={p.image}
                            alt={p.title}
                          />
                          <img
                            className="img-hover"
                            src={p.image}
                            alt={p.title}
                          />
                        </Link>

                        {/* Action Buttons */}
                        <div className="list-product-btn">
                          <button
                            className="box-icon wishlist btn-icon-action"
                            onClick={() => console.log("Added to wishlist")}
                          >
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Wishlist</span>
                          </button>
                          <button
                            className="box-icon quickview tf-btn-loading"
                            onClick={() => console.log("Quick view product")}
                          >
                            <span className="icon icon-eye"></span>
                            <span className="tooltip">Quick View</span>
                          </button>
                        </div>

                        {/* Add to Cart */}
                        <div className="list-btn-main">
                          <button
                            className="btn-main-product"
                            onClick={() => console.log("Added to cart")}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="card-product-info">
                        <Link to={p.link} className="title link">
                          {p.title}
                        </Link>
                        <span className="price">
                          {p.oldPrice && (
                            <span className="old-price">{p.oldPrice} </span>
                          )}
                          {p.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
