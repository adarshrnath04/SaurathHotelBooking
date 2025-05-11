import React, { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(userData);
    alert("Signup successful! Please log in.");
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Join Us</h1>
        <p className="subtitle">Create an account and start your journey!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
