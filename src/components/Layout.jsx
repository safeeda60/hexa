import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollArrow from "./ScrollArrow";

function Layout({ children }) {
  return (
    <div className="preload-wrapper">
      <Header />
      
      <main style={{ paddingTop: "80px" }}>{children}</main>
      <Footer />
      <ScrollArrow />
    </div>
  );
}

export default Layout;
