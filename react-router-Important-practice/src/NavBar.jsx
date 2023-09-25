import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <div className='navbar'>
      <NavLink to="/">Home</NavLink>  
      <NavLink to='/services'>Service</NavLink>  
      <NavLink to='/aboutus'>About Us</NavLink>  
    </div>
  );
};

export default NavBar;