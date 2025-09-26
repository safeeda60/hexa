// src/components/Orders.jsx
import React from "react";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="preload-wrapper">
      {/* ---------- Page Title ---------- */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(images/banner/banner2.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h2 className="heading text-center">Wholesale & Retail Orders</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Orders Section ---------- */}
      <div className="main-content-page py-5">
        <div className="container">
          <div className="row">
            {/* Retail Orders */}
            <div className="col-lg-6 mb-4">
              <div className="box-order p-4 shadow-sm">
                <h4 className="mb-3">Retail Orders</h4>
                <p className="text-secondary">
                  Place individual orders at retail price.
                </p>
                <table className="table table-bordered text-center align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="images/products/activewear/cart2.jpg"
                          alt="Nicotin Peach Pouch"
                          width="60"
                          className="me-2"
                        />
                        Nicotin Peach Pouch
                      </td>
                      <td>$60</td>
                      <td>
                        <input type="number" min="1" className="form-control" />
                      </td>
                      <td>
                        <button className="tf-btn btn-reset">Add</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="images/products/activewear/cart3.jpg"
                          alt="Berry Flavoured Cigarette"
                          width="60"
                          className="me-2"
                        />
                        Berry Flavoured Cigarette
                      </td>
                      <td>$60</td>
                      <td>
                        <input type="number" min="1" className="form-control" />
                      </td>
                      <td>
                        <button className="tf-btn btn-reset">Add</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wholesale Orders */}
            <div className="col-lg-6 mb-4">
              <div className="box-order p-4 shadow-sm">
                <h4 className="mb-3">Wholesale Orders</h4>
                <p className="text-secondary">
                  Bulk ordering with wholesale pricing.
                </p>
                <table className="table table-bordered text-center align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Retail</th>
                      <th>Wholesale</th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="images/products/activewear/cigblack.jpg"
                          alt="Cigarette Black"
                          width="60"
                          className="me-2"
                        />
                        Cigarette Black
                      </td>
                      <td>$100</td>
                      <td>$75</td>
                      <td>
                        <input type="number" min="10" className="form-control" />
                      </td>
                      <td>
                        <button className="tf-btn btn-reset">Add Bulk</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="images/products/activewear/cigpeach.jpg"
                          alt="Cigarette Peach"
                          width="60"
                          className="me-2"
                        />
                        Cigarette Peach
                      </td>
                      <td>$80</td>
                      <td>$60</td>
                      <td>
                        <input type="number" min="10" className="form-control" />
                      </td>
                      <td>
                        <button className="tf-btn btn-reset">Add Bulk</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="text-center mt-4">
            <Link to="/checkout" className="tf-btn btn-reset">
              Proceed to Checkout
            </Link>
          </div>
          <div className="text-center mt-4">
            <Link to="/login" className="tf-btn btn-reset">
              wholesale Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
