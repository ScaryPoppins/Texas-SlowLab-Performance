import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="navHeader">

    <img id = 'snail' src='https://image.flaticon.com/icons/svg/87/87989.svg'/>         

    <Link to="/">
            <button className='navButton'>Home</button>
    </Link>

    <Link to="/services">
            <button className='navButton'>Services</button>
    </Link>

    <Link to="/shop">
            <button className='navButton'>Shop</button>
    </Link>

    <Link to="/testimonials">
            <button className='navButton'>Testimonials</button>
    </Link>

    <Link to="/about">
            <button className='navButton'>About Us</button>
    </Link>

    <Link to="/contact">
            <button className='navButton'>Contact Us</button>
    </Link>















    </div>
  );
}

export default Header;


