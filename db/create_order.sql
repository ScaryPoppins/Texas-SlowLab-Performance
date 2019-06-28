-- list where to get stuff from on CheckOut Controller line 35 --

INSERT INTO slow_orders
(customer_id, total, items_ordered)

VALUES 
($1, $2, $3)