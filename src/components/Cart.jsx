// src/components/Cart.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  // ✅ Example discount (you can make this dynamic later)
  const discount = 20;

  // ✅ Shipping state (default free shipping)
  const [shippingCost, setShippingCost] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal - discount + shippingCost;

  return (
    <div className="preload-wrapper">
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}
      >
        <div className="container">
          <h3 className="heading text-center">Shopping Cart</h3>
        </div>
      </div>

      {/* Cart Section */}
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            {/* Cart Table */}
            <div className="col-xl-8">
              <table className="tf-table-page-cart">
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Your cart is empty
                      </td>
                    </tr>
                  ) : (
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img src={item.image} alt={item.title} width="60" />
                          <span className="cart-title">{item.title}</span>
                        </td>
                        <td className="text-center">
                          ${item.price.toFixed(2)}
                        </td>
                        <td>
                          <div className="wg-quantity">
                            <span
                              className="btn-quantity btn-decrease"
                              onClick={() => decreaseQty(item.id)}
                            >
                              -
                            </span>
                            <input
                              type="text"
                              className="quantity-product"
                              value={item.quantity}
                              readOnly
                            />
                            <span
                              className="btn-quantity btn-increase"
                              onClick={() => increaseQty(item.id)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td className="text-center">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove"
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Order Summary */}
            <div className="col-xl-4">
              <div className="fl-sidebar-cart">
                <div className="box-order bg-surface boxtext">
                  <h5 className="title boxtext">Order Summary</h5>

                  {/* Subtotal */}
                  <div className="subtotal text-button d-flex justify-content-between align-items-center">
                    <span>Subtotal</span>
                    <span className="total">${subtotal.toFixed(2)}</span>
                  </div>

                  {/* Discounts */}
                  <div className="discount text-button d-flex justify-content-between align-items-center">
                    <span>Discounts</span>
                    <span className="total">-${discount.toFixed(2)}</span>
                  </div>

                  {/* Shipping */}
                  <div className="ship">
                    <span className="text-button">Shipping</span>
                    <div className="flex-grow-1">
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="free"
                          defaultChecked
                          onChange={() => setShippingCost(0)}
                        />
                        <label htmlFor="free">
                          <span>Free Shipping</span>
                          <span className="price">$0.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="local"
                          onChange={() => setShippingCost(35)}
                        />
                        <label htmlFor="local">
                          <span>Local:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="rate"
                          onChange={() => setShippingCost(35)}
                        />
                        <label htmlFor="rate">
                          <span>Flat Rate:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                    </div>
                  </div>

                  {/* Total */}
                  <h5
                    className="total-order d-flex justify-content-between align-items-center"
                    style={{ color: "black" }}
                  >
                    <span>Total</span>
                    <span className="total">${total.toFixed(2)}</span>
                  </h5>

                  {/* Agreement & Checkout */}
                  <div className="box-progress-checkout">
                    <fieldset className="check-agree">
                      <input
                        type="checkbox"
                        id="check-agree"
                        className="tf-check-rounded"
                      />
                      <label htmlFor="check-agree">
                        I agree with the{" "}
                        <Link to="/terms-and-conditions">
                          terms and conditions
                        </Link>
                      </label>
                    </fieldset>

                    <Link to="/checkout" className="tf-btn btn-reset">
                      Proceed To Checkout
                    </Link>
                    <p className="text-button text-center">
                      Or continue shopping
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Order Summary */}
          </div>
        </div>
      </section>
    </div>
  );
}
