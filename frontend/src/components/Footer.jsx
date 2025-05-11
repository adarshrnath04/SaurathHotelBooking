import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Hotel Booking</h3>
          <p>Your trusted platform for finding the best hotels worldwide.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
       
        <p>© 2024 Hotel Booking. All rights reserved.</p>
         <p className="design">Designed and Developed by Ashki Media</p>
      </div>
    </footer>
  );
};

export default Footer;
