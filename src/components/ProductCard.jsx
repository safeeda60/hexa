// src/components/ProductCard.jsx
import React from "react";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  // Add to Cart handler
  const handleAddToCart = () => {
    // 👉 your cart logic here
    toast.success(`${product.title} added to cart 🛒`);
  };

  // Add to Wishlist handler
  const handleAddToWishlist = () => {
    // 👉 your wishlist logic here
    toast.info(`${product.title} added to wishlist ❤️`);
  };

  return (
    <div className="card-product">
      {/* Product Image */}
      <div className="card-product-wrapper">
        <a href={`/product/${product.id}`} className="product-img">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </a>

        {/* Buttons */}
        <div className="list-btn-main">
          <button
            className="btn-main-product"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          <button
            className="btn-main-product ms-2"
            onClick={handleAddToWishlist}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="card-product-info">
        <a href={`/product/${product.id}`} className="title link">
          {product.title}
        </a>

        <span className="price">
          {product.oldPrice && (
            <span className="old-price me-2">{product.oldPrice}</span>
          )}
          {product.price}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
