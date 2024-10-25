import React from 'react'

import { Link } from "react-router-dom";
export default function registernoti({noti}) {
  return (
    <>
    <div className="fixed flex inset-0 bg-black bg-opacity-50  items-center justify-center  z-50 ">
      
      <div className=" p-4 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
            <p className='font-jua font-bold text-lg'>Regirsteration Completed!</p>

            <Link  to="/" onClick={() => noti(false)}><button className="bg-[#295F98] font-jua text-white  mx-4 my-2 px-4 p-1 rounded-lg">Done</button></Link>
      </div>
    </div>
    </ >
  )
}
