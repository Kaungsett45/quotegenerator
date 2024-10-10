import React, { useState } from "react";
import Questin from "./questinterface";
import { Outlet, Link } from "react-router-dom";

export default function RandomQuote() {
  return (
    <>
      <div className="flex items-center justify-between  bg-[#67B26F] text-center text-white p-4">
        <p className="text-base font-roboto font-bold rounded-full  bg-[#204057] text-white py-1 px-3">
          AKS
        </p>
        <Link to="/" className="">
          RandomQuote
        </Link>
        <Link to="/quotecollection">
          <button className="bg-white text-black rounded-lg p-1">
            Quote Collection
          </button>
        </Link>
      </div>

      <Outlet />
    </>
  );
}
