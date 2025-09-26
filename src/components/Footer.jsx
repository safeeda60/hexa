import React from "react";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-wrap">
          <div className="footer-body">
            <div className="container">
              <div className="row">
                {/* Footer Left */}
                <div className="col-lg-4">
                  <div className="footer-infor">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="images/logo/royal-logo.png"
                          alt="Royal Falcon Logo"
                          width="150px"
                        />
                      </a>
                    </div>
                    <div className="footer-address">
                      <p>549 Oak St.Crystal Lake, IL 60014</p>
                      <a href="contact.html" className="tf-btn-default fw-6">
                        GET DIRECTION <i className="icon-arrowUpRight"></i>
                      </a>
                    </div>
                    <ul className="footer-info">
                      <li>
                        <i className="icon-mail" style={{ color: "white" }}></i>
                        <p>mail@royalfalcongroup.com</p>
                      </li>
                      <li>
                        <i
                          className="icon-phone"
                          style={{ color: "white" }}
                        ></i>
                        <p>+971-582169786</p>
                      </li>
                    </ul>
                    <ul className="tf-social-icon">
                      <li>
                        <a href="#" className="social-facebook" style={{ color: "white" }}>
                          <i className="icon icon-fb"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-twiter" style={{ color: "white" }}>
                          <i className="icon icon-x"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-instagram" style={{ color: "white" }}>
                          <i className="icon icon-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-amazon" style={{ color: "white" }}>
                          <i className="icon icon-amazon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Middle */}
                <div className="col-lg-4">
                  <div className="footer-menu">
                    <div className="footer-col-block">
                      <div className="footer-heading text-button footer-heading-mobile">
                        Information
                      </div>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li><a href="index.html" className="footer-menu_item">Home</a></li>
                          <li><a href="about-us.html" className="footer-menu_item">About Us</a></li>
                          <li><a href="shop.html" className="footer-menu_item">Shop</a></li>
                          <li><a href="product.html" className="footer-menu_item">Product</a></li>
                          <li><a href="service1.html" className="footer-menu_item">Service</a></li>
                          <li><a href="blog.html" className="footer-menu_item">Blog</a></li>
                          <li><a href="contact.html" className="footer-menu_item">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col-block">
                      <div className="footer-heading text-button footer-heading-mobile">
                        Customer Services
                      </div>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li><a href="#" className="footer-menu_item">Shipping</a></li>
                          <li><a href="#" className="footer-menu_item">Return & Refund</a></li>
                          <li><a href="#" className="footer-menu_item">Privacy Policy</a></li>
                          <li><a href="term-of-use.html" className="footer-menu_item">Terms & Conditions</a></li>
                          <li><a href="FAQs.html" className="footer-menu_item">Orders FAQs</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Right */}
                <div className="col-lg-4">
                  <div className="footer-col-block">
                    <div className="footer-heading text-button footer-heading-mobile">
                      Newsletter
                    </div>
                    <div className="tf-collapse-content">
                      <div className="footer-newsletter">
                        <p className="text-caption-1">
                          Sign up for our newsletter and get 10% off your first purchase
                        </p>
                        <form className="form-newsletter subscribe-form">
                          <div className="subscribe-content">
                            <fieldset className="email">
                              <input
                                type="email"
                                name="email-form"
                                className="subscribe-email"
                                placeholder="Enter your e-mail"
                                required
                              />
                            </fieldset>
                            <div className="button-submit">
                              <button className="subscribe-button" type="submit">
                                <i className="icon icon-arrowUpRight"></i>
                              </button>
                            </div>
                          </div>
                          <div className="subscribe-msg"></div>
                        </form>
                        <div className="tf-cart-checkbox">
                          <div className="tf-checkbox-wrapp">
                            <input type="checkbox" id="footer-Form_agree" name="agree_checkbox" />
                            <div><i className="icon-check"></i></div>
                          </div>
                          <label className="text-caption-1" htmlFor="footer-Form_agree">
                            By clicking subscribe, you agree to the{" "}
                            <a className="fw-6 link" href="term-of-use.html">Terms of Service</a> and{" "}
                            <a className="fw-6 link" href="#">Privacy Policy</a>.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-bottom-wrap">
                    <div className="left">
                      <p className="text-caption-1">©2025 hexa. All Rights Reserved.</p>
                      
                    </div>
                    <div className="tf-payment">
                      <p className="text-caption-1">Payment:</p>
                      <ul>
                        {[1,2,3,4,5,6].map((img) => (
                          <li key={img}>
                            <img src={`images/payment/img-${img}.png`} alt="payment method" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas"></span>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <div className="mb-content-top">
              <form className="form-search">
                <input type="text" placeholder="Search..." />
              </form>
              <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                <li><a href="index.html" className="collapsed mb-menu-link"><span>Home</span></a></li>
                <li><a href="shop.html" className="collapsed mb-menu-link"><span>Shop</span></a></li>
                <li><a href="product.html" className="collapsed mb-menu-link"><span>Products</span></a></li>
                <li><a href="about-us.html" className="collapsed mb-menu-link"><span>About Us</span></a></li>
                <li><a href="#dropdown-menu-five" className="collapsed mb-menu-link"><span>Services</span><span className="btn-open-sub"></span></a></li>
                <li><a href="contact.html" className="collapsed mb-menu-link"><span>Contact</span></a></li>
              </ul>
            </div>
            <div className="mb-other-content">
              <div className="group-icon">
                <a href="login.html" className="site-nav-icon">Login</a>
              </div>
              <div className="mb-notice">
                <a href="contact.html" className="text-need">Need Help?</a>
              </div>
              <div className="mb-contact">
                <p className="text-caption-1">549 Oak St.Crystal Lake, IL 60014</p>
                <a href="contact.html" className="tf-btn-default text-btn-uppercase">
                  GET DIRECTION <i className="icon-arrowUpRight"></i>
                </a>
              </div>
              <ul className="mb-info">
                <li><i className="icon icon-mail"></i><p>mail@royalfalcongroup.com</p></li>
                <li><i className="icon icon-phone"></i><p>+971-582169786</p></li>
              </ul>
            </div>
          </div>
          <div className="mb-bottom">
            <div className="tf-languages">
              <select className="image-select center style-default type-languages">
                <option>English</option>
                <option>Vietnam</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
