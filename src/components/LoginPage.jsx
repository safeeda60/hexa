import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Something went wrong. Your password is incorrect.");
    }
  };

  return (
    <div className="login-page">
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(images/banner/banner2.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Login</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap">
            {/* Left: Login Form */}
            <div className="left">
              <div className="heading">
                <h4>Login</h4>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form
                className="form-login form-has-password"
                onSubmit={handleSubmit}
                autoComplete="off" // ✅ disables autofill
              >
                <div className="wrap">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      placeholder="Username or email address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      required
                    />
                  </fieldset>

                  <fieldset className="position-relative password-item">
                    <input
                      className="input-password"
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                    />
                    <span className="toggle-password unshow">
                      <i className="icon-eye-hide-line"></i>
                    </span>
                  </fieldset>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input type="checkbox" defaultChecked />
                        <div>
                          <i className="icon-check"></i>
                        </div>
                      </div>
                      <label>Remember me</label>
                    </div>
                    <Link
                      to="/forget-password"
                      className="font-2 text-button forget-password link"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                </div>

                <div className="button-submit">
                  <button className="tf-btn btn-fill" type="submit">
                    <span className="text text-button">Login</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Register Prompt */}
            <div className="right">
              <h4 className="mb_8">New Customer</h4>
              <p className="text-secondary-sec">
                Be part of our growing family of new customers! Join us today and
                unlock a world of exclusive benefits, offers, and personalized
                experiences.
              </p>
              <Link to="/register" className="tf-btn btn-fill">
                <span className="text text-button">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
