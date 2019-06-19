UPDATE slow_shop SET
title = $2, 
image_url = $3,
category = $4,
price = $5,
description = $6,
features = $7

WHERE id = $1;