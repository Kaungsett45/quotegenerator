import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import React from 'react'
  import App from '../App'
import Login from "../autenticatiion/Login";
import Register from "../autenticatiion/Register";
  
  const router = createBrowserRouter([
   
      {
      path: "/",
      element: <Login/>,
      },{
      path: "/register",
      element: <Register/>,
      }
      
      
       
    
    
  ]);
export default router;