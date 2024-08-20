import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import React from 'react'
import App from "../App";
import Quotecreate from "../components/Assets/RandomQuote/quotecreate";
import Quotecollection from "../components/Assets/RandomQuote/quotecollection";
import Questinterface from "../components/Assets/RandomQuote/questinterface";
import RandomQuote from "../components/Assets/RandomQuote/RandomQuote";
import FavQuote from "../components/Assets/RandomQuote/FavQuote";
import Search from "../components/Assets/RandomQuote/Search";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RandomQuote/>,
      
      children:[
       {
        path : "/",
        element: <Questinterface/>
       },
       {
        path: "/quotecollection",
        element :< Quotecollection/>
       },
       {
        path: "/create",
        element :<Quotecreate/>
       },
       {
        path: "/search",
        element :<Search/>
       },
      ]
    }
  ]);
export default router;