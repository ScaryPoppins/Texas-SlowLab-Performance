import React from 'react';
import './CartCard.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import {add} from '../Images/add'

export default function ShopCard(props) {

    return (
        <div className = 'cart-card-container'>

            <div className = 'cart-card-product'>
{/* TITLE */}
            {props.title}
            </div>

            <div className = 'cart-card-quantity'>

{/* remove icon */}
            <div className = 'cart-card-quantity-remove'>
              <button className = 'quantity-button'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </button>
            </div>

{/* quantity number */}
            <div className = 'cart-card-quantity-amount'>
                {props.quantity}
            </div>
{/* add icon  */}
            <div className = 'cart-card-quantity-add'>
              <button className = 'quantity-button'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </button> 
            </div>

            </div>

            <div className = 'cart-card-price'>
{/* PRICE               */}
            {props.price}
            </div>

            <div className = 'cart-card-delete'>
            <IconButton  aria-label="Delete" >
                <DeleteOutlinedIcon />
            </IconButton>
            </div>

        </div>
    ) 
}    