INSERT INTO slow_shop
(title, image_url, description, features, category, tags)

VALUES($1, $2, $3, $4, $5, $6);

SELECT * FROM slow_shop;




-- INSERT INTO slow_shop
-- (title, image_url, description, features, category, tags)
-- VALUES(
-- 'Blinker Fluid',
-- 'https://images-na.ssl-images-amazon.com/images/I/81VQalHl2-L._SL1500_.jpg', 
-- '1 BOTTLE OF PREMIUM BLINKER FLUID SUITABLE FOR ALL TYPES OF VEHICLES', 
-- 'Local mechanic shorting you on your fluid fill ups? Need a reliable product? Get yourself a bottle of Saltiel Goods Blinker Fluid!',
-- '{fluids, blinker}', 
-- '{fluids, blinker, DIY, maintainence}'
-- );