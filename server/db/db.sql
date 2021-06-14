CREATE DATABASE fblogin;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name_first VARCHAR(255) NOT NULL,
  user_name_last VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name_first, user_name_last, user_email, user_password) values ('bob', 'bobs', 'bob@gmail.com', 'bob');
INSERT INTO users (user_name_first, user_name_last, user_email, user_password) values ('tom', 'toms', 'tom@gmail.com', 'tom');