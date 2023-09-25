import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUS'
import Services from './Services';
import HomeMainContent from "./HomeMainContent"
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Inbox from './Inbox';
import Sent from './Sent';
import Draft from './Draft';
import Spam from './Spam';
import Deleted from './Deleted'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <HomeMainContent></HomeMainContent>,
        children:[
          {
            path:'/',
            element: <Inbox></Inbox>,
            
          },
          {
            path:'/sent',
            element:<Sent></Sent>
          },
          {
            path:'/draft',
            element:<Draft></Draft>
          },
          {
            path:'/spam',
            element:<Spam></Spam>
          },
          {
            path:'/deleted',
            element:<Deleted></Deleted>
          }
        ]
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
