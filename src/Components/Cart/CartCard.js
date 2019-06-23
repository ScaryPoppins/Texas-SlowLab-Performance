import React from 'react';
import './CartCard.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


export default function ShopCard(props) {

    return (
        <div className = 'cart-card-container'>

            <div className = 'cart-card-product'>
                example product
            </div>

            <div className = 'cart-card-quantity'>
                1
            </div>

            <div className = 'cart-card-price'>
                $44
            </div>

            <div className = 'cart-card-delete'>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
            </div>

        </div>
    ) 
}    