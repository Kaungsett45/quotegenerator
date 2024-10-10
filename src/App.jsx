import React from 'react'

import { useState , useEffect } from 'react';
import Login from './autenticatiion/Login';

import rightcircle from '/public/rightcircle.svg'
export default function App() {
  return (
      <div  className='mx-[300px] border-2 border-red-500 '>
      <Login/>
      </div>

  )
}
