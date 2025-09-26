import React from "react";
import { Link } from "react-router-dom";

// Banner with Text
function BannerColl() {
  return (
    <section>
      <div className="container">
        <div className="flat-img-with-text">
          {/* Left Image */}
          <div className="banner banner-left wow fadeInLeft">
            <img src="images/new/square.jpg" alt="banner" />
          </div>

          {/* Content */}
          <div className="banner-content">
            <div className="content-text wow fadeInUp">
              <h3
                className="title text-center fw-5"
                style={{ color: "black" }}
              >
                Explore Unique <br /> Blends
              </h3>
              <p className="desc" style={{ color: "black" }}>
                flavored tobacco range Created
              </p>
            </div>
            <Link to="/shop" className="tf-btn btn-fill wow fadeInUp">
              <span className="text">Explore </span>
              <i className="icon icon-arrowUpRight"></i>
            </Link>
          </div>

          {/* Right Image */}
          <div className="banner banner-right wow fadeInRight">
            <img src="images/new/waterm.jpg" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BannerColl;

