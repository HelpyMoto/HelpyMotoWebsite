import React, {useState} from 'react'
import Logo from '../assets/Logo.png';
import '../styles/navbar.css';
import { motion, useAnimation } from 'framer-motion';
import classNames from 'classnames';

const variants = {
    hidden: { opacity: 0, scale: 0, x:"200%"},
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 }, x:"0%"},
  };

const Form = () => {
  const [mechanicSelected, setMechanicSelected]= useState(true);
  const [cleanerSelected, setCleanerSelected]= useState(false);
  const [driverSelected, setDriverSelected]= useState(false);
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
       {/* <form
                className=' h-full'
                action='#!'
                method='post'
              >
                 */}
                <div className='card-navbar' style={{marginTop:0}}>
                  
                  <p className='font-bold text-2xl'>Hire Now!</p>
                  <div className='flex flex-row'>
                  <button className= {classNames("m-2 p-2 border-red-500 border-2 rounded-lg",{
                    'font-bold':mechanicSelected===true,
                    'shadow-lg': mechanicSelected===true,
                    'bg-red-500': mechanicSelected===true,
                    'text-white':mechanicSelected===true
                  })}   onClick={()=>{setMechanicSelected(!mechanicSelected);
                        setCleanerSelected(false);
                        setDriverSelected(false);
                  }}>Mechanic</button>
                  <button className={classNames(cleanerSelected?" m-2  p-2 font-bold shadow-lg  border-red-500 border-2 rounded-lg bg-red-500 text-white ":"m-2 p-2 border-red-500 border-2 rounded-lg")
                  } onClick={()=>{setCleanerSelected(!cleanerSelected);
                        setMechanicSelected(false);
                        setDriverSelected(false);}}>Cleaner</button>
                  <button className={classNames("m-2  p-2  border-red-500 border-2 rounded-lg",{
                    'font-bold':driverSelected===true,
                    'shadow-lg': driverSelected===true,
                    'bg-red-500': driverSelected===true,
                    'text-white':driverSelected===true

                  })} onClick={()=>{setDriverSelected(!driverSelected);
                        setMechanicSelected(false);
                        setCleanerSelected(false);}}>Driver</button>
                  </div>
                  
                {mechanicSelected?
                <>
                 <motion.div variants={variants} initial="hidden" animate="visible">
       <form
                className=' h-full'
                action='#!'
                method='post'
              >
                
       <div className='inputBox1-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Location</span>
                  </div>
                  <div className='inputBox2-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Vehicle Model</span>
                  </div>
                  <div className='inputBox3-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Vehicle Number</span>
                  </div>
                  <div className='inputBox4-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Issue</span>
                  </div>

                  <div className='w-[250px] text-lg  text-center hover:scale-2 bg-red-500 text-white font-bold rounded-lg px-3 py-2 mt-1 mb-3 cursor-pointer'>
                    Hire a Mechanic
                  </div>
                  </form>
                  </motion.div>
                </>
                :
                <>
                </>}
                {cleanerSelected?
                <>
                  <motion.div variants={variants} initial="hidden" animate="visible">

                
                 <form
                className=' h-full'
                action='#!'
                method='post'
              >
                
                  <div className='inputBox1-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Location</span>
                  </div>
                  <div className='inputBox2-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Vehicle Model</span>
                  </div>
                  <div className='inputBox3-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Vehicle Number</span>
                  </div>
                  <div className='inputBox4-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Issue</span>
                  </div>

                  <div className='w-[250px] text-lg  text-center hover:scale-2 bg-red-500 text-white font-bold rounded-lg px-3 py-2 mt-1 mb-3 cursor-pointer'>
                    Hire a Cleaner
                  </div>
                </form>
                </motion.div>
                
                </>:
                <>
                </>}
                {driverSelected?
                <>
                <motion.div variants={variants} initial="hidden" animate="visible">
                <form
                className=' h-full'
                action='#!'
                method='post'
              >
                  <div className='inputBox1-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Location</span>
                  </div>
                  <div className='inputBox2-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Vehicle Model</span>
                  </div>
                  <div className='inputBox3-navbar mb-5'>
                    <input type='text' required='required' />
                    <span className='user-navbar'>Vehicle Number</span>
                  </div>
                  <div className='inputBox4-navbar mb-5'>
                    <input type='text' required='required' />
                    <span>Issue</span>
                  </div>

                  <div className='w-[250px] text-lg  text-center hover:scale-2 bg-red-500 text-white font-bold rounded-lg px-3 py-2 mt-1 mb-3 cursor-pointer'>
                    Hire a Driver
                  </div>
                  
              </form>
              </motion.div>
                </>:
                <>
                </>}
              </div>
              {/* </form> */}
       
    </motion.div>
  )
}

export default Form