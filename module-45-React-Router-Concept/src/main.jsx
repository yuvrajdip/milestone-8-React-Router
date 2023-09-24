import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutUs from './AboutUs.jsx'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import ContactUS from './ContactUS.jsx'
import Services from './Services.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contactus",
        element: <ContactUS></ContactUS>
      },
      {
        path: "/services",
        element:<Services></Services>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
