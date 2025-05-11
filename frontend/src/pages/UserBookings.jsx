import React, { useEffect, useState } from "react";
import { getUserBookings } from "../api";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const userId = 1; // Assume logged-in user ID

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getUserBookings(userId);
      setBookings(data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <strong>Hotel:</strong> {booking.hotel_name} | <strong>Room:</strong> {booking.room_name} | 
            <strong>Check-in:</strong> {booking.check_in} | <strong>Check-out:</strong> {booking.check_out}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBookings;
