import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 🔹 Clear form when component mounts
  useEffect(() => {
    setFormData({ name: "", email: "", password: "" });
    setMessage("");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Registration successful! You can now log in.");
        setFormData({ name: "", email: "", password: "" }); // clear fields
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(`❌ Registration failed: ${data.message}`);
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong. Please try again.");
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Sign up to get started with your shopping experience.
        </p>

        {/* Show inline message */}
        {message && <div className="mb-4 text-center text-sm">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="new-email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
