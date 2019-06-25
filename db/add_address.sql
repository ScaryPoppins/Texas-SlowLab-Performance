INSERT INTO slow_shipping_address 
    (first_name, 
    last_name, 
    address_line_1,
    address_line_2,
    city, 
    state,
    zip, 
    users_id
    )

VALUES ($1, $2, $3, $4, $5, $6, $7, $8)