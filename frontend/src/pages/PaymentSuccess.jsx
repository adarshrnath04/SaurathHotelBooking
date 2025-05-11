import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const hotelId = searchParams.get("hotelId");
  const roomId = searchParams.get("roomId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  useEffect(() => {
    const confirmBooking = async () => {
      await fetch("http://localhost:5000/book-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, hotel_id: hotelId, room_id: roomId, check_in: checkIn, check_out: checkOut }),
      });
    };

    confirmBooking();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Payment Successful! 🎉</h1>
      <p>Your booking has been confirmed.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default PaymentSuccess;
