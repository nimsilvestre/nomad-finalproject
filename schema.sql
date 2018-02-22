DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS nomads;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first VARCHAR(100),
    last VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    favorite TEXT
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

CREATE TABLE needs(
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


INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (1, 'Rebecca', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/rebecca.jpg', 'Two things happened when I turned 12, my Father who used to beat the hell out of us left home and the other thing that happened is I started using drugs... One of my friends said "Here try this it will make you feel better", and it did. When I turned 13, my Mum found a new partner who lived at home with us. He raped me regularly and abused my younger sisters as well. I was only 13. He also use to beat Mum up and it was hell on earth. For about a year I suffered through it but when I was fourteen I couldn''t take it anymore, so I said to Mum "You have to get rid of this guy, either he goes or I go." Mum chose him and I landed on the streets. Initially I stayed with friends, and then slept with guys from the neighborhood to keep a roof over my head. Eventually I had to leave the suburbs for the city streets. Sleeping in abandoned houses and buildings, I lived on the streets with other young people who were like me.', 'Female', 24, 'Berlin - Friedrichshain');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (2, 'Megan', 'Doe','https://s3.amazonaws.com/nomadfinalproject/megan.jpg
', 'I''ve been homeless on and off since the age of 23 the reason I''ve choosen not to be around my family was because I was abused when I was a child and they''ve never supported me in any way. So I used to travel alot and ended up turning to prostitution. But I''m dealing with my own emotional issues and I don''t trust a lot of people, but I got off prostitution 9 years ago and I''m trying to get hold off my life right now.', 'Female', 49, 'Berlin - Mitte');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (3, 'Panda', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/panda.jpg
', 'I’ve been homeless 3 times. The problem isn’t drugs or mental illness — it’s poverty. I used to run a removals business. I worked with homelessness services, like Hanover to move their clients in to their homes. When the motor on my truck broke down, I couldn''t work, so I couldn''t afford the $300 rent which was due. I became homeless.', 'Male', 44, 'Berlin - Neukoll');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (4, 'Grahan', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/Grahan.jpg
', 'Some people brought me to Townsville from Bundaberg and abandoned me. That''s how I ended up living on the streets.', 'Male', 56, 'Berlin - Kreuzberg');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (5, 'Jasmine', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/jasmine.jpg
', 'It started when I was in year nine. My mother was suffering from mental illness, which meant I could not live at home. I moved in with my uncle and aunt, and I stayed with them for two years until they thought my mum was well enough to look after me, which she was not.', 'Female', 16, 'Berlin - Mitte');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (6, 'Chris', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/chris.jpg
', 'I moved out from home because I had some issues with my family. I had made friends with people that I actually could connect with, and those weren''t the sort of people my parents liked. They were people who were a bit more creative, a bit more outside the norm. Really nice people, but they weren''t the sort of people my parents supported me hanging out with.', 'Male', 23, 'Berlin - Prenzlauerberg');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (7, 'Alex', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/alex.jpg
', 'My name is Gary. I moved out of a drug house, so I''m homeless. I couldn''t handle being around drugs anymore.', 'Male', 35, 'Berlin - Kreuzberg');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (8, 'Saly', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/saly.jpg
', 'I''ve had my ups and downs but I''m getting through it. I''m a single mum, so I''m trying as hard as I can. I was in a relationship, but we broke-up before I discovered I was pregnant. The father knows I am pregnant.', 'Female', 29, 'Berlin - Hohenschönhausen');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (9, 'Kylie', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/kylie.jpg
', 'I didn''t choose to be homeless. I found myself in a situation I couldn''t escape from and I hit the road in an attempt to make the most of a bad situation — and it was the best thing I ever did.', 'Female', 32, 'Berlin - Warschauer');
INSERT INTO nomads (id, first, last, image, bio, gender, age, location) VALUES (10, 'Tammy', 'Doe', 'https://s3.amazonaws.com/nomadfinalproject/tammy.jpg
', 'I go to school and everyone is so happy and I try to act happy to fit in with the other kids, but really I''m actually miserable. It would be so much easier knowing that I''ve got a place to go home to after school.', 'Male', 18, 'Berlin - Neukoll');
