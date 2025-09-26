import React, { useState } from "react";

export default function ProductDet({
  product,
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [selectedSize, setSelectedSize] = useState("L");

  if (!product) return null;

  const flavours = ["apple", "berry", "mint", "citrus"];
  const sizes = ["S", "M"];

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="modal-product">
      <div className="row">
        {/* Image */}
        <div className="col-md-6 mb-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h3 className="mb-2">{product.title}</h3>

          {product.category && (
            <div className="text-uppercase text-muted small mb-2">
              {product.category}
            </div>
          )}

          {/* Rating */}
          {product.reviews && (
            <div className="d-flex align-items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`icon icon-star ${
                    i < product.rating ? "text-warning" : "text-muted"
                  }`}
                />
              ))}
              <span className="text-muted small ms-2">
                ({product.reviews} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mb-3">
            <span className="fw-bold h5 text-dark me-2">
              ${(product.price * quantity).toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through me-2">
                {product.oldPrice}
              </span>
            )}
            {product.discount && (
              <span className="badge bg-danger">{product.discount}% OFF</span>
            )}
          </div>

          {/* Color Picker */}
          <div className="mb-3">
            <div className="mb-2">Flavours:</div>
            <div className="d-flex gap-2">
              {flavours.map((flavour) => (
                <div
                  key={flavour}
                  className={`color-btn p-2 border ${
                    selectedColor === flavour ? "border-dark" : "border-light"
                  }`}
                  onClick={() => setSelectedColor(flavour)}
                  style={{ cursor: "pointer" }}
                >
                  {flavour}
                </div>
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div className="mb-3">
            <div className="mb-2">Size:</div>
            <div className="d-flex gap-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`size-btn p-2 border ${
                    selectedSize === size ? "border-dark" : "border-light"
                  } ${size === "XXL" ? "text-muted" : ""}`}
                  onClick={() => size !== "XXL" && setSelectedSize(size)}
                  style={{ cursor: size === "XXL" ? "not-allowed" : "pointer" }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-3 d-flex align-items-center gap-2">
            <span>Quantity:</span>
            <div className="d-flex align-items-center border rounded">
              <button
                className="btn btn-sm btn-light"
                onClick={decreaseQty}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                style={{ width: "60px" }}
                value={quantity}
                readOnly
              />
              <button className="btn btn-sm btn-light" onClick={increaseQty}>
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="d-flex gap-2 mb-2">
            <button
              className="btn btn-dark flex-grow-1"
              onClick={() => onAddToCart(product, quantity, selectedColor, selectedSize)}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => onAddToWishlist(product)}
            >
              <i className="icon icon-heart"></i>
            </button>
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={() => onBuyNow(product, quantity, selectedColor, selectedSize)}
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}
