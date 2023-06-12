import React from 'react'
import Logo from '../assets/Logo.png';
import '../styles/navbar.css';
import { motion, useAnimation } from 'framer-motion';
const variants = {
    hidden: { opacity: 0, scale: 0, x:"200%"},
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 }, x:"0%"},
  };

const Form = () => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
        <form
                className=' h-full'
                action='#!'
                method='post'
              >
                <div className='card-navbar' style={{marginTop:0}}>
                  <div className='formImgContainer'>
                    <img src={Logo} alt='logo' />
                  </div>

                  <p className='font-bold text-2xl'>Hire A Mechanic Now!</p>
                  <div className='inputBox1-navbar'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Location</span>
                  </div>
                  <div className='inputBox2-navbar'>
                    <input type='text' required='required' />
                    <span>Vehicle Model</span>
                  </div>
                  <div className='inputBox3-navbar'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Vehicle Number</span>
                  </div>
                  <div className='inputBox4-navbar'>
                    <input type='text' required='required' />
                    <span>Issue</span>
                  </div>

                  <div className='w-[250px] text-lg  text-center hover:scale-2 bg-red-500 text-white font-bold rounded-lg px-3 py-2 mt-1 mb-3 cursor-pointer'>
                    Hire a Mechanic
                  </div>
                </div>
              </form>
    </motion.div>
  )
}

export default Form