import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <nav>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default NavBar;