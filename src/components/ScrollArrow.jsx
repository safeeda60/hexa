// src/components/ScrollArrow.jsx
import React, { useState, useEffect } from "react";

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false);

  // Show arrow only when scrolled down
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Scroll to Top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to Bottom
  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll Up */}
      <button
        className="scroll-btn up"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        ↑
      </button>

      {/* Scroll Down */}
      <button className="scroll-btn down" onClick={scrollBottom}>
        ↓
      </button>
    </div>
  );
}
