CREATE TABLE hotels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  rating DECIMAL(2,1),
  location VARCHAR(255),
  image_url TEXT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  available BOOLEAN DEFAULT TRUE,
  hotel_id INT,
  available_from DATE,
  available_to DATE,
  image_url TEXT,
  FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  hotel_id INT,
  room_id INT,
  check_in DATE,
  check_out DATE,
  total_price DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (hotel_id) REFERENCES hotels(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

INSERT INTO users (name, email, password) VALUES
  (Admin, admin@gmail.com, admin123);

INSERT INTO hotels (name, description, rating, location, image_url) VALUES
('The Ocean View', 'Beautiful beachside hotel', 4.5, 'Goa', 'https://example.com/ocean.jpg'),
('Hilltop Retreat', 'Peaceful mountain escape', 4.2, 'Ooty', 'https://example.com/hilltop.jpg'),
('City Comfort Inn', 'Comfort in the heart of the city', 4.0, 'Bangalore', 'https://example.com/city.jpg'),
('Sunset Paradise', 'Luxury with ocean sunset views', 4.8, 'Kochi', 'https://example.com/sunset.jpg'),
('Green Valley Resort', 'Eco-friendly retreat in nature', 4.6, 'Munnar', 'https://example.com/greenvalley.jpg'),
('Royal Heritage', 'Stay like royalty', 4.4, 'Jaipur', 'https://example.com/royal.jpg'),
('Cloud Nine Hotel', 'Modern luxury in the sky', 4.3, 'Mumbai', 'https://example.com/cloud9.jpg'),
('Cozy Nest', 'Affordable comfort', 4.0, 'Chennai', 'https://example.com/cozy.jpg'),
('Palm Grove', 'Tropical paradise stay', 4.7, 'Alleppey', 'https://example.com/palm.jpg'),
('Urban Heights', 'Upscale city experience', 4.1, 'Delhi', 'https://example.com/urban.jpg');


INSERT INTO rooms (name, price, available, hotel_id, available_from, available_to, image_url) VALUES
-- Hotel 1
('Deluxe Room', 3000, TRUE, 1, '2025-05-12', '2025-06-30', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),
('Family Suite', 5000, TRUE, 1, '2025-05-15', '2025-06-30', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),
('Eco Deluxe', 2800, TRUE, 1, '2025-05-10', '2025-06-20', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),
('LakeSide Suite', 5500, TRUE, 1, '2025-05-20', '2025-06-25', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),

-- Hotel 2
('Executive Room', 3500, TRUE, 2, '2025-05-12', '2025-07-01', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'),
('Honeymoon Suite', 6000, TRUE, 2, '2025-05-14', '2025-06-30', 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'),
('Standard Room', 2500, TRUE, 2, '2025-05-11', '2025-06-20', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'),
('Family Suite', 5000, TRUE, 2, '2025-05-20', '2025-07-01', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),

-- Hotel 3
('Deluxe Room', 3200, TRUE, 3, '2025-05-10', '2025-06-30', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),
('Eco Deluxe', 2700, TRUE, 3, '2025-05-15', '2025-06-25', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),
('LakeSide Suite', 5200, TRUE, 3, '2025-05-20', '2025-06-30', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),
('Standard Room', 2300, TRUE, 3, '2025-05-12', '2025-06-18', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'),

-- Hotel 4
('Family Suite', 4800, TRUE, 4, '2025-05-13', '2025-06-29', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),
('Honeymoon Suite', 6200, TRUE, 4, '2025-05-16', '2025-07-01', 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'),
('Deluxe Room', 3100, TRUE, 4, '2025-05-10', '2025-06-15', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),
('Executive Room', 3600, TRUE, 4, '2025-05-18', '2025-06-28', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'),

-- Hotel 5
('Standard Room', 2400, TRUE, 5, '2025-05-11', '2025-06-20', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'),
('Eco Deluxe', 2900, TRUE, 5, '2025-05-13', '2025-06-25', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),
('Family Suite', 5100, TRUE, 5, '2025-05-15', '2025-07-01', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),
('LakeSide Suite', 5300, TRUE, 5, '2025-05-18', '2025-06-29', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),

-- Hotel 6
('Deluxe Room', 3000, TRUE, 6, '2025-05-12', '2025-06-30', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),
('Honeymoon Suite', 6200, TRUE, 6, '2025-05-16', '2025-06-30', 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'),
('Executive Room', 3700, TRUE, 6, '2025-05-18', '2025-06-28', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'),
('Eco Deluxe', 2600, TRUE, 6, '2025-05-20', '2025-06-25', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),

-- Hotel 7
('LakeSide Suite', 5400, TRUE, 7, '2025-05-12', '2025-06-30', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),
('Standard Room', 2350, TRUE, 7, '2025-05-14', '2025-06-28', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'),
('Family Suite', 4900, TRUE, 7, '2025-05-17', '2025-06-29', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),
('Deluxe Room', 3100, TRUE, 7, '2025-05-20', '2025-06-30', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),

-- Hotel 8
('Eco Deluxe', 2700, TRUE, 8, '2025-05-11', '2025-06-25', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),
('Executive Room', 3650, TRUE, 8, '2025-05-13', '2025-06-30', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'),
('Honeymoon Suite', 6400, TRUE, 8, '2025-05-15', '2025-07-01', 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'),
('Family Suite', 5200, TRUE, 8, '2025-05-18', '2025-06-29', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),

-- Hotel 9
('Deluxe Room', 3050, TRUE, 9, '2025-05-12', '2025-06-30', 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'),
('Standard Room', 2450, TRUE, 9, '2025-05-14', '2025-06-28', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'),
('Executive Room', 3750, TRUE, 9, '2025-05-17', '2025-06-30', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'),
('LakeSide Suite', 5600, TRUE, 9, '2025-05-19', '2025-07-01', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),

-- Hotel 10
('Family Suite', 5100, TRUE, 10, '2025-05-12', '2025-06-30', 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'),
('Honeymoon Suite', 6300, TRUE, 10, '2025-05-15', '2025-06-28', 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'),
('Eco Deluxe', 2650, TRUE, 10, '2025-05-18', '2025-07-01', 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg'),
('Standard Room', 2500, TRUE, 10, '2025-05-20', '2025-07-01', 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg');
