import React from 'react'
import {useState } from 'react';
import quitea from '/logo.svg'

import { Link } from "react-router-dom";
// import rightcircle from '/rightcircle.svg'
export default function Login() {


    const [formdata,setformdata] =useState ({
        email: '',
        password: '',
    });
    const handleinputchange =(e) =>{
      const { name , value } =e.target;
      
      setformdata({
        ...formdata,
        [name]:value ,
      })
    }
  
  return (
    // overall-login-container
    <div className=''>

        {/* logocontainer */}
       <div className='  my-20 flex justify-center'>
        
         <img src={quitea} alt="quitea-logo" className='w-64 h-24 flex justify-center' />
       
       </div>


       {/* Loginform */}
       <div className=' flex justify-center'>
          <form action="#">
              
              <label >
                  <p className='text-lg font-bold'>Email</p>
                  <input type="email" name="email" value={formdata.email} placeholder='enter your email' onChange={handleinputchange} className='border-4 rounded-lg border-[#295F98] p-1'/>
              </label>
              <hr className='py-3'/>
              <label >
                <p className='text-lg font-bold'>Password</p>
                <input type="password" name="password" placeholder='password' value={formdata.password} onChange={handleinputchange} className='border-[#295F98] border-4 rounded-lg p-1'/>
              </label>
            
              <hr className='py-3'/>
            <div className='flex justify-between'>
               <input type="submit" value="Log in"  className='cursor-pointer text-white font-bold bg-[#295F98]  rounded-lg p-2 px-4'/>
               <Link to="/Register">
                <button className='text-white font-bold bg-[#295F98]  rounded-lg p-2 px-4'> Register</button>
               </Link>
             </div>
          </form>

        
       </div>
       {/* loginquote */}
       <div className='flex justify-center my-14 font-jua'> 
            <p>Log in to  <span className='text-[#295F98]'>discover , share </span> and be <span className='text-[#295F98]'>inspired</span></p>

        </div>
            <Link to="#" className='flex justify-center my-12 font-jua text-[#295F98] '>**Forgot Password**</Link>
    </div>
  )
}
