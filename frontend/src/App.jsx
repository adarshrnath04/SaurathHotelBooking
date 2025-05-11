import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import Navbar
import UserBookings from "./pages/UserBookings";
import HotelPage from "./pages/HotelPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {user && <Navbar user={user} setUser={setUser} />} {/* Show Navbar only if logged in */}
        <Routes>
          <Route path="/home" element={user ? <Home /> : <Login setUser={setUser} />} />
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/my-bookings" element={<UserBookings />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
