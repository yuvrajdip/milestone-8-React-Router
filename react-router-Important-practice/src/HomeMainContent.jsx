import React from 'react';
import RightSideBar from './RightSideBar';
import LeftSideBar from './LeftSideBar';
import { Outlet } from 'react-router-dom';

const HomeMainContent = () => {
  return (
    <div>
      <div className='main-content'>
        <div className="left-side">
          <LeftSideBar className='left-side'></LeftSideBar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>

  );
};

export default HomeMainContent;