-- CREATE TABLE slow_shop
-- (
-- id SERIAL PRIMARY KEY,
-- title VARCHAR(200),
-- image_url TEXT,
-- description TEXT,
-- features TEXT,
-- category VARCHAR(200),
-- tags VARCHAR(200), 
-- reviews VARCHAR (1000)
-- );



-- ALTER TABLE slow_shop
-- ALTER COLUMN category SET DATA TYPE TEXT [] USING ARRAY [category], 
-- ALTER COLUMN tags SET DATA TYPE TEXT [] USING ARRAY [tags];


----------------------------------------------------------------------------------------
-- CREATE TABLE slow_users (
-- users_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(100) NOT NULL, 
-- last_name VARCHAR (100) NOT NULL, 
-- email VARCHAR (200) NOT NULL, 
-- password VARCHAR (200) NOT NULL, 
-- receive_promotions BOOLEAN DEFAULT false,
-- is_admin BOOLEAN DEFAULT false
-- )
-------------------------------------------------------------------------------------

-- CREATE TABLE slow_shipping_address (
-- shipping_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(100),
-- last_name VARCHAR(100),
-- address_line_1 VARCHAR(200),
-- address_line_2 VARCHAR(150),
-- city VARCHAR(150), 
-- state VARCHAR (100),
-- zip VARCHAR(10),
-- users_id INTEGER REFERENCES slow_users(users_id)
-- )





