import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "animate.css/animate.min.css";

function About() {
  const [activeTab, setActiveTab] = useState(0);

 
  const tabs = [
    {
      title: "Introduction",
      content: (
        <p>
          At<strong> Royal Falcon</strong> is a UAE-based company dedicated to transforming lifestyles by offering safe and sustainable alternatives to traditional smoking. Our focus is on promoting well-being, supporting smoking cessation, and creating conscious lifestyle choices through innovation and responsibility.
        </p>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <p>
          Founded by a team of wellness experts and innovators, we were born from
          a vision to elevate quality of life through sustainable and innovative
          solutions. Driven by a commitment to wellbeing and the environment, we
          are passionate about creating new products and solutions that improve
          health and positively impact our planet.
        </p>
      ),
    },
    {
      title: "What Sets Us Apart",
      content: (
        <p>
          This presentation outlines our comprehensive strategy spanning
          marketing, operations, expansion, and mission-driven approach to reduce
          cigarette consumption through innovative alternatives.
        </p>
      ),
    },
    {
      title: "Our Commitment",
      content: (
        <p>
          Our company supplies hydroponic and aquaponic systems, with emphasis on
          tobacco and leaf manufacturing. We aim to export leaf through
          international contracts while producing organic tobacco leaf under the
          IEMA initiative.
        </p>
      ),
    },
  ];

  return (
    <section
      className="flat-spacing about-us-main pb_0"
      style={{ color: "white" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay="0.3s">
              <img
                className="lazyload"
                src="/images/new/truck.jpg"
                alt="Royal Falcon Truck"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp firsttitle">
                Welcome to <strong> Royal Falcon</strong>–Redefining Lifestyles with Safe & Sustainable Alternatives
              </h3>

              <div className="widget-tabs style-3">
                {/* Tabs Menu */}
                <ul className="widget-menu-tab wow fadeInUp">
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      className={`item-title ${
                        activeTab === index ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="inner text-button">{tab.title}</span>
                    </li>
                  ))}
                </ul>

                {/* Tabs Content with animation */}
                <div className="widget-content-tab wow fadeInUp">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab} // re-render when tab changes
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="widget-content-inner active"
                    >
                      {tabs[activeTab].content}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <Link to="/aboutus" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
