const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "hotel_booking3",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/signup", async (req, res) => {
  try {
    console.log("Signup request received"); // Debugging

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "Email already exists" });
          }
          return res.status(500).json({ message: "Database error" });
        }

        res.json({ message: "Signup successful! Please log in." });
      }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Signup failed. Please try again." });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(401).json({ message: "Invalid email or password" });

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ message: "Invalid email or password" });

    res.json({
      id: user.id,
      email: user.email,
      username: user.username,
      profilePhoto: user.profile_photo,
    });
  });
});


// API to get all rooms
app.get("/rooms", (req, res) => {
  db.query("SELECT * FROM rooms", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/book-room", (req, res) => {
  const { user_id, hotel_id, room_id, check_in, check_out } = req.body;

  db.query(
    "INSERT INTO bookings (user_id, hotel_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?, ?)",
    [user_id, hotel_id, room_id, check_in, check_out],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ message: "Booked Successfully!" });
      }
    }
  );
});


app.get("/hotels", (req, res) => {
  db.query("SELECT * FROM hotels", (err, result) => {
    if (err) {
      console.error("Error fetching hotels:", err);
      res.status(500).send(err);
    } else {
      console.log("Hotels Data:", result); // Debugging
      res.json(result);
    }
  });
});


app.get("/hotels/:id", (req, res) => {
  const hotelId = req.params.id;
  db.query("SELECT * FROM hotels WHERE id = ?", [hotelId], (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({ message: "Hotel not found" });
    } else {
      res.json(result[0]);
    }
  });
});
app.get("/hotels/:id/rooms", (req, res) => {
  const hotelId = req.params.id;
  const { check_in, check_out } = req.query;

  if (!check_in || !check_out) {
    return res.status(400).json({ message: "Check-in and check-out dates are required." });
  }

  let query = `
    SELECT * FROM rooms 
    WHERE hotel_id = ? 
    AND available_from <= ? 
    AND available_to >= ?
  `;
  let params = [hotelId, check_in, check_out];

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Error fetching available rooms:", err);
      res.status(500).send(err);
    } else {
      console.log("Filtered Rooms Data:", result); // Debugging
      res.json(result);
    }
  });
});



app.get("/user-bookings/:userId", (req, res) => {
  const userId = req.params.userId;

  let query = `
    SELECT bookings.*, hotels.name AS hotel_name, rooms.name AS room_name 
    FROM bookings 
    JOIN hotels ON bookings.hotel_id = hotels.id 
    JOIN rooms ON bookings.room_id = rooms.id 
    WHERE bookings.user_id = ?
  `;

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error("Error fetching user bookings:", err);
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});
