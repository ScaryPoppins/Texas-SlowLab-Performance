import React from "react";

import './Services.css'

function ServicesCard(props) {

    return(
        <div className='services-card' >

            <div className='services-sub-section'>
             
           <div className = 'services-img-container'>  
           <img 
              className='services-img'
              src={props.item.image}
              id="service"
              alt='service'
            ></img>
            </div>

    
    
            <div className='services-description-container'>

                {/* <div className='services-description'>Description:</div> */}
                <div className='services-description'>{props.item.description}</div>
                   
            </div>

           </div>
        </div>
        )
    }
    
    export default ServicesCard;