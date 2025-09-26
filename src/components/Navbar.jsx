import React from "react";

function Header() {
  return (
    <header id="header" className="header-default">
      {/* Top Bar */}
      <div className="top-bar bg-dark text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info">
            <span className="me-3">+971-582169786</span>
            <span className="me-3">mail@royalfalcongroup.com</span>
          </div>
          <div className="currency-lang d-flex align-items-center">
            <select
              className="form-select form-select-sm bg-dark text-white border-0"
              style={{ width: "auto" }}
            >
              <option defaultValue>English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header py-3">
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Menu Toggle */}
            <div className="col-3 d-xl-none">
              <a href="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas">
                <i className="icon icon-categories"></i>
              </a>
            </div>

            {/* Logo */}
            <div className="col-xl-3 col-sm-2 col-md-4 col-4">
              <a href="index.html" className="logo-header">
                <img
                  src="images/logo/falcon-logo.png"
                  alt="Falcon Logo"
                  className="img-fluid"
                />
              </a>
            </div>

            {/* Navigation */}
            <div className="col-xl-6 col-sm-4 col-md-4 d-none d-xl-block">
              <nav>
                <ul className="nav justify-content-center fw-bold">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="shop.html" className="nav-link">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a href="product.html" className="nav-link">Product</a>
                  </li>
                  <li className="nav-item">
                    <a href="about-us.html" className="nav-link">About Us</a>
                  </li>
                  {/* Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="servicesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li><a className="dropdown-item" href="service1.html">Service 1</a></li>
                      <li><a className="dropdown-item" href="service2.html">Service 2</a></li>
                      <li><a className="dropdown-item" href="service3.html">Service 3</a></li>
                      <li><a className="dropdown-item" href="service4.html">Service 4</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="nav-link">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Icons */}
            <div className="col-xl-3 col-sm-4 col-md-4 col-5">
              <ul className="nav justify-content-end align-items-center gap-3">
                {/* Account */}
                <li>
                  <a href="login.html" style={{ color: "black" }}>
                    <i className="bi bi-person fs-5"></i>
                  </a>
                </li>
                {/* Cart */}
                <li className="position-relative">
                  <a href="cart.html" style={{ color: "black" }}>
                    <i className="bi bi-bag fs-5"></i>
                  </a>
                </li>
                {/* Wishlist */}
                <li>
                  <a href="wishlist.html" style={{ color: "black" }}>
                    <i className="bi bi-heart fs-5"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
