import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomsByHotel, getHotelById } from "../api";
import "../styles/HotelPage.css";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookingMessage, setBookingMessage] = useState(""); // Success message

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotelById(id);
      setHotel(data);
    };

    fetchHotel();
  }, [id]);

  const fetchRooms = async () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    try {
      const data = await getRoomsByHotel(id, checkIn, checkOut);
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleBooking = async (roomId) => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const confirmBooking = window.confirm("Are you sure you want to book this room?");
    if (!confirmBooking) return;

    try {
      const response = await fetch("http://localhost:5000/book-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: 1, hotel_id: id, room_id: roomId, check_in: checkIn, check_out: checkOut }),
      });

      const data = await response.json();
      setBookingMessage(data.message); // Show success message
      setTimeout(() => setBookingMessage(""), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.error("Error booking room:", error);
      setBookingMessage("Booking failed. Please try again.");
    }
  };

  if (!hotel) return <h1>Loading...</h1>;

  return (
    <div className="hotel-container">
      <h1>{hotel.name}</h1>
      <img src={hotel.image_url} alt={hotel.name} className="hotel-image" />
      <p>{hotel.description}</p>
      <p><strong>Location:</strong> {hotel.location}</p>
      <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>

      <h2>Select Dates</h2>
      <div className="date-selection">
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        <button onClick={fetchRooms}>Search Available Rooms</button>
      </div>

      {/* Booking Success Message */}
      {bookingMessage && <p className="booking-message">{bookingMessage}</p>}

      <h2>Available Rooms</h2>
      <div className="room-list">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image_url} alt={room.name} className="room-image" />
              <h3>{room.name}</h3>
              <p><strong>Price:</strong> ${room.price}</p>
              <p><strong>Available From:</strong> {room.available_from}</p>
              <p><strong>Available To:</strong> {room.available_to}</p>
              {room.available ? (
                <button onClick={() => handleBooking(room.id)}>Book Now</button>
              ) : (
                <p>Not Available</p>
              )}
            </div>
          ))
        ) : (
          <p>No rooms available for selected dates.</p>
        )}
      </div>
    </div>
  );
};

export default HotelPage;
