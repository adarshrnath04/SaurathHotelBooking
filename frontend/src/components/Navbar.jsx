import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user from local storage
    navigate("/"); // Redirect to login page
  };

  if (!user) return null; // Hide navbar if user is not logged in

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Website Name */}
        <Link to="/home" className="navbar-logo">Hotel Booking</Link>

        {/* User Profile */}
        <div className="navbar-user">
        
          <span className="username">{user.username}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
