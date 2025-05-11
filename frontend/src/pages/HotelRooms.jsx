import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomsByHotel, bookRoom } from "../api";

const HotelRooms = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [bookingData, setBookingData] = useState({
    user_id: 1, // Assume logged-in user ID
    room_id: "",
    check_in: "",
    check_out: "",
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRoomsByHotel(id);
      setRooms(data);
    };
    fetchRooms();
  }, [id]);

  const handleBooking = async (roomId) => {
    await bookRoom({ ...bookingData, room_id: roomId });
    alert("Room booked successfully!");
  };

  return (
    <div>
      <h1>Rooms in Hotel</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} - ${room.price}{" "}
            {room.available ? (
              <button onClick={() => handleBooking(room.id)}>Book Now</button>
            ) : (
              "Not Available"
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelRooms;
