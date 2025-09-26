import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

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
              <h3 className="heading text-center">Wish-list</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Products */}
      <section className="flat-spacing">
        <div className="container flat-animate-tab">
          <div className="row">
            {wishlistItems.length === 0 && (
              <div className="col-12 text-center">
                <p>Your wishlist is empty.</p>
              </div>
            )}

            {wishlistItems.map((p) => (
              <div className="col-md-3 mb-4" key={p.id}>
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <Link to={p.link} className="product-img">
                      <img className="img-product" src={p.image} alt={p.title} />
                    </Link>

                    <div className="list-btn-main">
                      <button
                        className="btn-main-product"
                        onClick={() => removeFromWishlist(p.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn-main-product btn-primary"
                        onClick={() => handleAddToCart(p)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="card-product-info">
                    <Link to={p.link} className="title link">
                      {p.title}
                    </Link>
                    <span className="price">{p.price}</span>
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
