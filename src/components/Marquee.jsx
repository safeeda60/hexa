import React from "react";

function Marquee() {
  const items = [
    "Free shipping on all orders over $20.00",
    "Order Now",
  ];

  // Repeat items to make the loop effect (instead of hardcoding 6 times)
  const repeatedItems = Array(6).fill(items).flat();

  return (
    <section className="tf-marquee">
      <div className="marquee-wrapper">
        <div className="initial-child-container">
          {repeatedItems.map((text, index) => (
            <React.Fragment key={index}>
              <div className="marquee-child-item">
                <p className="text-btn-uppercase">{text}</p>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-lightning-line"></span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
