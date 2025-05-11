import axios from "axios";

const API_URL = "http://localhost:5000";

export const getRooms = async () => {
  const response = await axios.get(`${API_URL}/rooms`);
  return response.data;
};


export const getUserBookings = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/user-bookings/${userId}`);
    console.log("Fetched User Bookings:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return [];
  }
};


export const getHotels = async () => {
  try {
    const response = await axios.get("http://localhost:5000/hotels");
    console.log("Fetched Hotels:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};


export const addHotel = async (hotelData) => {
  const response = await axios.post(`${API_URL}/add-hotel`, hotelData);
  return response.data;
};

export const getHotelById = async (hotelId) => {
  const response = await axios.get(`http://localhost:5000/hotels/${hotelId}`);
  return response.data;
};

export const getRoomsByHotel = async (hotelId, check_in, check_out) => {
  const response = await axios.get(`http://localhost:5000/hotels/${hotelId}/rooms`, {
    params: { check_in, check_out }
  });
  return response.data;
};


export const bookRoom = async (bookingData) => {
  const response = await axios.post(`http://localhost:5000/book-room`, bookingData);
  return response.data;
};


export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
