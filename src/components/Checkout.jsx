// src/pages/Checkout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems } = useCart();

  // ✅ Order summary calculations
  const discount = 20; // example discount
  const shipping = 0; // free shipping default
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal - discount + shipping;

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}
      >
        <div className="container">
          <h3 className="heading text-center">Check Out</h3>
        </div>
      </div>

      {/* Section checkout */}
      <section>
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-xl-6">
              <div className="flat-spacing tf-page-checkout">
                {/* Login */}
                <div className="wrap">
                  <div className="title-login">
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-button">
                      Login here
                    </Link>
                  </div>
                  <form className="login-box">
                    <div className="grid-2">
                      <input type="text" placeholder="Your name/Email" />
                      <input type="password" placeholder="Password" />
                    </div>
                    <button className="tf-btn" type="submit">
                      <span className="text">Login</span>
                    </button>
                  </form>
                </div>

                {/* Information */}
                <div className="wrap">
                  <h5 className="title">Information</h5>
                  <form className="info-box">
                    <div className="grid-2">
                      <input type="text" placeholder="First Name*" />
                      <input type="text" placeholder="Last Name*" />
                    </div>
                    <div className="grid-2">
                      <input type="text" placeholder="Email Address*" />
                      <input type="text" placeholder="Phone Number*" />
                    </div>

                    {/* Country select */}
                    <div className="tf-select">
                      <select className="text-title" name="address[country]">
                        <option value="Choose Country/Region" defaultValue>
                          Choose Country/Region
                        </option>
                        <option value="United States">United States</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>

                    <div className="grid-2">
                      <input type="text" placeholder="Town/City*" />
                      <input type="text" placeholder="Street,..." />
                    </div>

                    <div className="grid-2">
                      <div className="tf-select">
                        <select className="text-title">
                          <option value="Choose State" defaultValue>
                            Choose State
                          </option>
                          <option value="California">California</option>
                          <option value="Texas">Texas</option>
                          <option value="Florida">Florida</option>
                        </select>
                      </div>
                      <input type="text" placeholder="Postal Code*" />
                    </div>

                    <textarea placeholder="Write note..."></textarea>
                  </form>
                </div>

                {/* Payment Options */}
                <div className="wrap">
                  <h5 className="title">Choose payment Option:</h5>
                  <form className="form-payment">
                    <div className="payment-box" id="payment-box">
                      {/* Credit Card */}
                      <div className="payment-item payment-choose-card active">
                        <label
                          htmlFor="credit-card-method"
                          className="payment-header"
                          data-bs-toggle="collapse"
                          data-bs-target="#credit-card-payment"
                          aria-controls="credit-card-payment"
                        >
                          <input
                            type="radio"
                            name="payment-method"
                            className="tf-check-rounded"
                            id="credit-card-method"
                            defaultChecked
                          />
                          <span className="text-title">Credit Card</span>
                        </label>
                        <div
                          id="credit-card-payment"
                          className="collapse show"
                          data-bs-parent="#payment-box"
                        >
                          <div className="payment-body">
                            <p className="text-secondary">
                              Make your payment directly into our bank account.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                            <div className="input-payment-box">
                              <input type="text" placeholder="Name On Card*" />
                              <div className="ip-card">
                                <input type="text" placeholder="Card Numbers*" />
                                <div className="list-card">
                                  <img
                                    src="images/payment/img-7.png"
                                    width="48"
                                    height="16"
                                    alt="card"
                                  />
                                  <img
                                    src="images/payment/img-8.png"
                                    width="21"
                                    height="16"
                                    alt="card"
                                  />
                                </div>
                              </div>
                              <div className="grid-2">
                                <input type="date" />
                                <input type="text" placeholder="CVV*" />
                              </div>
                            </div>
                            <div className="check-save">
                              <input
                                type="checkbox"
                                className="tf-check"
                                id="check-card"
                                defaultChecked
                              />
                              <label htmlFor="check-card">
                                Save Card Details
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cash on Delivery */}
                      <div className="payment-item">
                        <label
                          htmlFor="delivery-method"
                          className="payment-header collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#delivery-payment"
                          aria-controls="delivery-payment"
                        >
                          <input
                            type="radio"
                            name="payment-method"
                            className="tf-check-rounded"
                            id="delivery-method"
                          />
                          <span className="text-title" style={{ color: "white" }}>
                            Cash on delivery
                          </span>
                        </label>
                        <div
                          id="delivery-payment"
                          className="collapse"
                          data-bs-parent="#payment-box"
                        />
                      </div>

                      {/* PayPal */}
                      <div className="payment-item paypal-item">
                        <label
                          htmlFor="paypal-method"
                          className="payment-header collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#paypal-method-payment"
                          aria-controls="paypal-method-payment"
                        >
                          <input
                            type="radio"
                            name="payment-method"
                            className="tf-check-rounded"
                            id="paypal-method"
                          />
                          <span className="paypal-title">
                            <img src="images/payment/paypal.png" alt="paypal" />
                          </span>
                        </label>
                        <div
                          id="paypal-method-payment"
                          className="collapse"
                          data-bs-parent="#payment-box"
                        />
                      </div>
                    </div>

                    <button className="tf-btn btn-reset">Payment</button>
                    <button className="tf-btn btn-reset" type="submit">
        Place Your Order
      </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="col-xl-1">
              <div className="line-separation"></div>
            </div>

            {/* Right Section: Shopping Cart */}
            <div className="col-xl-5">
              <div className="flat-spacing flat-sidebar-checkout">
                <div className="sidebar-checkout-content">
                  <h5 className="title" style={{ color: "white" }}>
                    Shopping Cart
                  </h5>

                  {/* ✅ Dynamic Cart Items */}
                  <div className="list-product">
                    {cartItems.length === 0 ? (
                      <p className="text-center">Your cart is empty</p>
                    ) : (
                      cartItems.map((item) => (
                        <div className="item-product" key={item.id}>
                          <Link to={`/product/${item.id}`} className="img-product">
                            <img src={item.image} alt={item.title} width="60" />
                          </Link>
                          <div className="content-box">
                            <div className="info">
                              <Link
                                to={`/product/${item.id}`}
                                className="name-product link text-title"
                              >
                                {item.title}
                              </Link>
                            </div>
                            <div className="total-price text-button">
                              <span className="count">{item.quantity}</span>X
                              <span className="price">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Cart summary */}
                  <div className="sec-total-price">
                    <div className="top">
                      <div className="item d-flex align-items-center justify-content-between text-button">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="item d-flex align-items-center justify-content-between text-button">
                        <span>Discounts</span>
                        <span>- ${discount.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="bottom">
                      <h5 className="d-flex justify-content-between">
                        <span>Total</span>
                        <span className="total-price-checkout">
                          ${total.toFixed(2)}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Section */}
          </div>
        </div>
      </section>
    </>
  );
}
