import React from 'react'
import loading from '../assets/loadingSpanner.gif'
import logo from '../assets/Logo.png'
import { motion } from "framer-motion"
export default function 
() {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='p-4'>
               <img src={logo} className='h-24 w-24'></img> 
            </div>
        <div className='flex flex-col justify-center items-center '>
          <img src={loading} className='h-52 w-52 justify-center ml-4 opacity-80 '></img>
        <h1 className='text-3xl font-semibold text-slate-800 mt-5 ml-3'>Searching For Providers</h1>
    


        </div>
        </div>
       
    </div>
  )
}

