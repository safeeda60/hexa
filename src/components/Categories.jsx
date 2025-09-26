
// src/components/Shop.jsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Products
const products = [
  {
    id: 1,
    title: "Mint Flavoured Cigarettes",
    price: "$59.99",
    oldPrice: null,
    category: "Cigarettes",
    image: "/images/categories/product1.jpg",
    link: "/categories/cigarettes",
  },
  {
    id: 2,
    title: "Nicotin Peach Pouch",
    price: "$79.99",
    oldPrice: "$98.00",
    category: "Nicotine Pouches",
    image: "/images/categories/pineapplepouch.jpg",
    link: "/categories/pouches",
  },
  {
    id: 3,
    title: "Vapes",
    price: "$89.99",
    oldPrice: "$98.00",
    category: "Vapes",
    image: "/images/categories/vapesimg.jpg",
    link: "/categories/vapes",
  },
  {
    id: 4,
    title: "Mango Nicotin Pouch",
    price: "$69.99",
    oldPrice: null,
    category: "Shisha Alternatives",
    image: "/images/categories/hooka.jpg",
    link: "/categories/shisha",
  },
  {
    id: 5,
    title: "Smart Vending Machine",
    price: "$499.99",
    oldPrice: null,
    category: "Vending Machines",
    image: "/images/categories/vend1.jpg",
    link: "/categories/vending",
  },
];

export default function Categories() {
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
              <h3 className="heading text-center">Shop</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="flat-spacing">
        <div className="container flat-animate-tab">
          <div className="row">
            {products.map((p) => (
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

                    {/* Hover Action Buttons */}
                    

                    {/* ✅ Explore instead of Add to Cart */}
                    <div className="list-btn-main">
                      <Link to={p.link} className="btn-main-product">
                        Explore
                      </Link>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="card-product-info text-center">
                    <Link to={p.link} className="title link d-block mb-2">
                      {p.title}
                    </Link>
                    <span className="price d-block mb-3">
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
      </section>
    </div>
  );
}
