import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import Videos from '../assets/HM final.mp4';
import Form from './Form';

const NavbarUpdate = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='flex w-full items-center z-20 flex-col gap-0 relative'>
      {/* Details and Buttons */}
      <div
        className={
          menu
            ? 'flex flex-col w-full bg-black  text-white px-4 py-2'
            : 'flex flex-col w-full bg-gradient-to-b from-black to-transparent  text-white px-4 py-2'
        }
      >
        {/* Logo and Slogan */}
        <div className='flex items-center justify-between'>
          <div className='flex space-x-3 items-center'>
            <img
              src={Logo}
              alt='logo'
              className='w-[80px] h-[80px] object-contain'
            />
            <p className='text-center'>For Unstoppable Journey</p>

            {/* Rest buttons */}
            <ul className=' w-full text-lg items-center hidden md:flex lg:flex xl:flex space-x-3'>
              <li className='ml-3 nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px]  '>
                <Link
                  className='text-white hover:text-white hover:no-underline text-start'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] '>
                <Link
                  className='text-white hover:text-white hover:no-underline text-start'
                  to='/'
                >
                  Services
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] '>
                <Link
                  className='text-white hover:text-white hover:no-underline text-start'
                  to='/'
                >
                  HM Store
                </Link>
              </li>

              <p className=' after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[100px]  '>
                <Link
                  className='text-white hover:text-white hover:no-underline text-start'
                  to='/'
                >
                  About Us
                </Link>
              </p>
            </ul>
          </div>

          {/* Hamburger */}
          <div className='md:hidden lg:hidden xl:hidden  justify-end w-[35px] '>
            <div
              className='w-[35px] h-[25px] flex flex-col justify-between cursor-pointer'
              onClick={() => setMenu(!menu)}
            >
              <div className='h-[3px] bg-white w-full'></div>
              <div className='h-[3px] bg-white w-full'></div>
              <div className='h-[3px] bg-white w-full'></div>
            </div>
          </div>

          {/* Login */}
          <div className='hidden md:block lg:block xl:block'>
            <Link to='/LoginPage'>
              <button
                type='submit'
                className='bg-red-500 rounded-md px-4 py-2 text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out font-semibold'
              >
                Login/SignUp
              </button>
            </Link>
          </div>
        </div>

        {/* Menu */}

        <div
          className={
            menu
              ? ' z-40  duration-1000 ease-in-out transform transition'
              : ' z-40 h-[0px] hidden duration-100000 ease-in-out transform transition'
          }
        >
          <div className='flex w-full pb-1 justify-end'>
            <ul className=' text-lg items-end flex flex-col '>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end '>
                <Link
                  className='text-white hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-white hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  Services
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-white hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  HM Store
                </Link>
              </li>
              <li className='nav-item after:transition-all after:duration-300 after:ease-in-out after:flex after:absolute after:w-0 after:hover:w-[85px] after:bg-red-500 after:h-[2px] -bottom-[2px] w-[85px] text-end'>
                <Link
                  className='text-white hover:text-white hover:no-underline text-end'
                  to='/'
                >
                  About Us
                </Link>
              </li>

              <div className='block mt-2'>
                <Link to='/LoginPage'>
                  <button
                    type='submit'
                    className='bg-red-500 rounded-md px-4 py-2 text-white text-lg hover:scale-110 transform transition duration-300 ease-in-out font-semibold'
                  >
                    Login/SignUp
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className='block -z-40 -mt-28 relative top-0 left-0'>
        <video autoPlay muted preload='auto' loop={true}>
          <source src={Videos} type='video/mp4' className='' />
        </video>
        {/* <div className='absolute w-full justify-center flex  text-white md:hidden lg:hidden xl:hidden bottom-5 left-0 right-0 '>
          <div className='w-fit md:hidden lg:hidden xl:hidden bg-red-500 px-5 py-2 rounded-md font-semibold cursor-pointer'>
            Hire A Mechanic!
          </div>
        </div> */}


        {/* Form */}
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:block lg:block'>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default NavbarUpdate;
