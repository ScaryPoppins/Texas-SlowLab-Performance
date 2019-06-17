import React from 'react';


const ShopCard = (props) =>{
    return (
        <div className="ShopCard" >
            <img src={props.features} alt={props.name}/>
            <div className="productInfo">
                <h4>{props.name}</h4>
                <h4>{props.description}</h4>
            shop card test
            </div>
        </div>
    );
}

export default ShopCard
