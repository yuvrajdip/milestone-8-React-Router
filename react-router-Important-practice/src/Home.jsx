import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';
import RightSide from './RightSideBar';
import './Home.css'

const Home = () => {

  return (
    <div>
      <h2>React Router Practice</h2>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <footer><h2>This is footer</h2></footer>
    </div>
  );
};

export default Home;