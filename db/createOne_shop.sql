INSERT INTO slow_shop
(title, image_url, description, features, category, tags, price)

VALUES($1, $2, $3, $4, $5, $6, $7);

SELECT * FROM slow_shop;




-- INSERT INTO slow_shop
-- (title, image_url, description, features, category, tags)

-- VALUES(
-- 'Rotary Piston',
-- 'https://qph.fs.quoracdn.net/main-qimg-f340b5209f427c3aaa384c8a722cb87d.webp', 
-- '1 used Rotary Piston', 
-- 'Is your rotary engine knocking?  Refresh your engine with a new set of Rotary Pistons.   Dont forget to replace your connecting rods while youre in there.',
-- '{engine parts}', 
-- '{Piston, Rotary}'
-- );
