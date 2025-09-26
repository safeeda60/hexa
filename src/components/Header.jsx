import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0); // ✅ use ref instead of state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header-default ${showHeader ? "show" : "hide"}`}
      style={{
        transition: "transform 0.3s ease",
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
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
      <div className="main-header py-2">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-3 col-sm-2 col-md-4 col-4">
              <Link to="/" className="logo-header">
                <img
                  src="images/logo/falcon-logo.png"
                  alt="Falcon Logo"
                  className="img-fluid"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="col-xl-6 col-sm-4 col-md-4 d-none d-xl-block">
              <nav>
                <ul className="nav justify-content-center fw-bold flex-nowrap">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categories" className="nav-link">Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/aboutus" className="nav-link">AboutUs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orders" className="nav-link">Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Icons */}
            <div className="col-xl-3 col-sm-4 col-md-4 col-5">
              <ul className="nav justify-content-end align-items-center gap-3">
                <li>
                  <Link to="/login" style={{ color: "black" }}>
                    <i className="bi bi-person fs-5"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" style={{ color: "black" }}>
                    <i className="bi bi-bag fs-5"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" style={{ color: "black" }}>
                    <i className="bi bi-heart fs-5"></i>
                  </Link>
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
