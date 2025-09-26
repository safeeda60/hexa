// src/components/Vending.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Vending() {
  const vendingProducts = [
    {
      id: 1,
      title: "Snack Vending Machine",
      price: "$499.00",
      oldPrice: "$599.00",
      image: "/images/categories/vend1.jpg",
      link: "/categories/vending",
    },
    {
      id: 2,
      title: "Drink Vending Machine",
      price: "$799.00",
      oldPrice: null,
      image: "/images/categories/vend2.png",
      link: "/categories/vending",
    },
    {
      id: 3,
      title: "Combo Vending Machine",
      price: "$1,099.00",
      oldPrice: "$1,199.00",
      image: "/images/categories/vend3.png",
      link: "/categories/vending",
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
              <h3 className="heading text-center">Vending Machines</h3>
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
                {vendingProducts.map((p) => (
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
