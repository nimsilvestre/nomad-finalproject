DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS nomads;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first VARCHAR(100),
    last VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE nomads(
    id SERIAL PRIMARY KEY,
    first VARCHAR(100),
    last VARCHAR(100),
    bio TEXT ,
    image TEXT,
    location VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO nomads (first, last, bio, image, location) VALUES ('MQwozP4QM5uK84XgPs4Q0oUIVWiwzN-w.jpg', 'funkychicken', 'Welcome to Berlin and the future!', 'This photo brings back so many great memories.');
