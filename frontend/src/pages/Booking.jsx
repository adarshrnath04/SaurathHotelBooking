import React, { useState } from "react";
import { bookRoom } from "../api";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    user_id: 1, // Assume logged-in user ID
    hotel_id: "",
    room_id: "",
    check_in: "",
    check_out: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookRoom(bookingData);
    alert("Room booked successfully!");
  };

  return (
    <div>
      <h1>Book a Room</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Hotel ID"
          onChange={(e) => setBookingData({ ...bookingData, hotel_id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Room ID"
          onChange={(e) => setBookingData({ ...bookingData, room_id: e.target.value })}
        />
        <input
          type="date"
          onChange={(e) => setBookingData({ ...bookingData, check_in: e.target.value })}
        />
        <input
          type="date"
          onChange={(e) => setBookingData({ ...bookingData, check_out: e.target.value })}
        />
        <button type="submit">Book Room</button>
      </form>
    </div>
  );
};

export default Booking;
