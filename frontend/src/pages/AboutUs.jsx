import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Welcome to <strong>Hotel Booking</strong>, your trusted platform for finding the best hotels worldwide. 
        Our mission is to provide seamless and hassle-free hotel booking experiences for travelers.
      </p>

      {/* Mission & Vision */}
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To make hotel booking simple, fast, and reliable for everyone.</p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>To be the most preferred hotel booking platform globally, offering the best deals and customer service.</p>
      </div>

      {/* Team Section */}
      <div className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="https://source.unsplash.com/150x150/?person" alt="CEO" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="https://source.unsplash.com/150x150/?woman" alt="CTO" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-card">
            <img src="https://source.unsplash.com/150x150/?man" alt="COO" />
            <h3>Michael Johnson</h3>
            <p>Chief Operating Officer</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="about-section">
        <h2>Contact Us</h2>
        <p>Email: support@hotelbooking.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Travel Street, New York, USA</p>
      </div>
    </div>
  );
};

export default AboutUs;
