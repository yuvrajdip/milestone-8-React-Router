import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <h2>This is the Common Component</h2>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <h3>Footer</h3>
    </div>
  );
};

export default Home;