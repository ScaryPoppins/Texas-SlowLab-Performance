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


-- ALTER TABLE slow_shop
-- ADD COLUMN users_id INTEGER REFERENCES slow_users(users_id)

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


-------------------------------------------------------

-- CREATE TABLE slow_orders
-- (
-- orders_id SERIAL PRIMARY KEY,
-- product_id INT[],
-- customer_id INT,
-- quantity INT[],
-- delivered BOOLEAN DEFAULT false,
-- total DECIMAL,
-- address TEXT,
-- city TEXT,
-- state TEXT,
-- zip_code TEXT,
-- notes TEXT[],
-- shop_id INTEGER REFERENCES slow_shop(shop_id),
-- users_id INTEGER REFERENCES slow_users(users_id)
-- );
