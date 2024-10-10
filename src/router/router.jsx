import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import React from 'react'
  import App from '../App'
import Login from "../autenticatiion/Login";
  
  const router = createBrowserRouter([
    {
      path: "",
      element: <App/>,
      
      children:[
       { 
        path: "/login",
        element: <Login/>,
        },
      
      
       
      ]
    }
  ]);
export default router;