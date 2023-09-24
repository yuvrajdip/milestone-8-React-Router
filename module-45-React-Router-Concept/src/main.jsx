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
import Users from './Users.jsx'
import UserDetails from './UserDetails.jsx'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path: "/users/:id",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
