import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './LeftSideBar.css'

const LeftSideBar = () => {
  return (
    <>
      <div className='leftsidebar'>
        <NavLink to='/'>Inbox</NavLink>
        <NavLink to='/sent'>Sent</NavLink>
        <NavLink to='/draft'>Draft</NavLink>
        <NavLink to='/spam'>Spam</NavLink>
        <NavLink to='/deleted'>Deleted</NavLink>
      </div>
    </>
  );
};

export default LeftSideBar;