
// src/pages/Home.js
import React from "react";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import Marquee from "./Marquee";
import About from "./About";
import Catproduct from "./Catproduct";
import BannerWithText from "./BannerWithText";
import BannerCollection from "./BannerCollection";
import TopSelling from "./Topselling";
import Testimonials from "./TestimonialsSection";
import BannerColl from "./BannerColl";
import TestimonialSection from "./TestimonialsSection";

import Iconbox from "./Iconbox";
import CsrHighlights from "./Csrareas";




function Home() {
  const products = [
    { id: 1, title: "Luxury Tobacco Pack", price: "$89.99", image: "/images/products/product1.jpg" },
    { id: 2, title: "Classic Cigarette Combo", price: "$69.99", oldPrice: "$85.00", image: "/images/products/product2.jpg" },
    { id: 3, title: "Nicotin Pouch Pack", price: "$59.99", image: "/images/products/product3.jpg" },
  ];

  return (
    <>
      {/* home components Banner / Slider */}
    
      <HeroSlider />
      <Marquee/>
      <About/>
      <Catproduct/>
      <BannerWithText/>
      <BannerCollection/>
      <TopSelling/>
      <BannerColl/>
      <TestimonialSection/>
      <CsrHighlights/>
      <Iconbox/>
       

     
        
    </>
  );
}

export default Home;
