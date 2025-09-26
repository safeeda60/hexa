// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset for email:", email);
    // 🔹 Here you can call API to send a password reset link
    setMessage("If an account with that email exists, a password reset link has been sent.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Forgot Password?</h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Send Reset Link
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-600 font-medium">{message}</p>
        )}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
