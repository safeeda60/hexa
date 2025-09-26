// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDet from "./ProductDet";
import { useProductActions } from "../hooks/useProductActions";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Reusable actions for cart & wishlist
  const { handleAddToCart, handleAddToWishlist } = useProductActions();

  // Fetch products from JSON
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error loading products:", err));
  }, []);

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
              <h3 className="heading text-center">Our Products</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="flat-spacing">
        <div className="container flat-animate-tab">
          <div className="tab-content">
            <div className="tab-pane active show" id="productList">
              <div className="row">
                {products.length > 0 ? (
                  products.map((p) => (
                    <div className="col-md-3 mb-4" key={p.id}>
                      <div className="card-product">
                        <div className="card-product-wrapper">
                          {/* Product Image */}
                          <Link
                            to={p.link || "/productdet"}
                            className="product-img"
                          >
                            <img
                              className="img-product"
                              src={p.image}
                              alt={p.title}
                            />
                            {p.hoverImage && (
                              <img
                                className="img-hover"
                                src={p.hoverImage}
                                alt={p.title}
                              />
                            )}
                          </Link>

                          {/* Action Buttons */}
                          <div className="list-product-btn">
                            <button
                              className="box-icon wishlist btn-icon-action"
                              onClick={() => handleAddToWishlist(p)}
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Wishlist</span>
                            </button>

                            <button
                              className="box-icon quickview tf-btn-loading"
                              onClick={() => setSelectedProduct(p)}
                            >
                              <span className="icon icon-eye"></span>
                              <span className="tooltip">Quick View</span>
                            </button>
                          </div>

                          {/* Add to Cart */}
                          <div className="list-btn-main">
                            <button
                              className="btn-main-product"
                              onClick={() => handleAddToCart(p)}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="card-product-info">
                          <Link
                            to={p.link || "/productdet"}
                            className="title link"
                          >
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
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No products found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="quickview-modal">
          <div
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="modal-content">
            <button
              className="btn-close"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>
            <ProductDet product={selectedProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
