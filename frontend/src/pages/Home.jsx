import React, { useEffect, useState } from "react";
import { getHotels } from "../api";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import Home styles

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  // Filter hotels based on search term, location, and rating
  const filteredHotels = hotels.filter((hotel) =>
    (hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (locationFilter ? hotel.location.toLowerCase().includes(locationFilter.toLowerCase()) : true) &&
    (ratingFilter ? hotel.rating >= parseFloat(ratingFilter) : true)
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">Find Your Perfect Hotel</div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by hotel name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Filter by rating (min)..."
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </div>

      {/* Hotel Cards */}
      <div className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <Link to={`/hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
              <img src={hotel.image_url} alt={hotel.name} className="hotel-image" />
              <div className="hotel-details">
                <h2>{hotel.name}</h2>
                <p>{hotel.description}</p>
                <p><strong>Location:</strong> {hotel.location}</p>
                <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
              </div>
              <button className="book-button">View Details</button>
            </Link>
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
