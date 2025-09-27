// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";



import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

import Orders from "./components/Orders"; 
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import RegisterPage from "./components/RegisterPage";
import Layout from "./components/Layout";
import Products from "./components/Products";


import Vending from "./components/Vending";
import Pouches from "./components/Pouches";
import Vapes from "./components/Vapes";
import Shisha from "./components/Shisha"
import Cigarettes from "./components/Cigarettes";
import Healthcare from "./components/Healthcare";
import Environment from "./components/Environment";
import Categories from "./components/Categories";
import Services from "./components/Services";
import Education from "./components/Education";
import Community from "./components/Community";

import Checkout from "./components/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() 
{
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/products" element={<Products />} />
       <Route path="/services" element={<Services />} />
      <Route path="/healthcare" element={<Healthcare />} />
      <Route path="/education" element={<Education />} />
      <Route path="/community" element={<Community />} />
      <Route path="/environment" element={<Environment />} />
      <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories/vending" element={<Vending />} />
        <Route path="/categories/pouches" element={<Pouches />} />
        <Route path="/categories/vapes" element={<Vapes />} />
        <Route path="/categories/shisha" element={<Shisha />} />
        <Route path="/categories/cigarettes" element={<Cigarettes />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      {/* ✅ Toast container for notifications */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
    </Layout>
  );
}

export default App;
