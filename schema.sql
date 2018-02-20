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

DROP TABLE IF EXISTS nomads;
CREATE TABLE nomads(
    id SERIAL PRIMARY KEY,
    first VARCHAR(100),
    last VARCHAR(100),
    image TEXT,
    bio TEXT,
    gender VARCHAR(100),
    age INTEGER,
    location VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (1, 'Rebecca', 'Doe', 'image_link_here', 'Two things happened when I turned 12, my Father who used to beat the hell out of us left home and the other thing that happened is I started using drugs... One of my friends said "Here try this it will make you feel better", and it did. When I turned 13, my Mum found a new partner who lived at home with us. He raped me regularly and abused my younger sisters as well. I was only 13. He also use to beat Mum up and it was hell on earth. For about a year I suffered through it but when I was fourteen I couldn''t take it anymore, so I said to Mum "You have to get rid of this guy, either he goes or I go." Mum chose him and I landed on the streets. Initially I stayed with friends, and then slept with guys from the neighborhood to keep a roof over my head. Eventually I had to leave the suburbs for the city streets. Sleeping in abandoned houses and buildings, I lived on the streets with other young people who were like me.', 'Female', 24, 'Berlin - Friedrichshain');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (2, 'Megan', 'Doe','image_link_here', 'I''ve been homeless on and off since the age of 23 the reason I''ve choosen not to be around my family was because I was abused when I was a child and they''ve never supported me in any way. So I used to travel alot and ended up turning to prostitution. But I''m dealing with my own emotional issues and I don''t trust a lot of people, but I got off prostitution 9 years ago and I''m trying to get hold off my life right now.', 'Female', 49, 'Berlin - Mitte');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (3, 'Panda', 'Doe', 'image_link_here', 'I’ve been homeless 3 times. The problem isn’t drugs or mental illness — it’s poverty. I used to run a removals business. I worked with homelessness services, like Hanover to move their clients in to their homes. When the motor on my truck broke down, I couldn''t work, so I couldn''t afford the $300 rent which was due. I became homeless.', 'Male', 44, 'Berlin - Neukoll');
