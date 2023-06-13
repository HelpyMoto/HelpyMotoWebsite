import React from 'react';
import Logo from '../assets/Logo.png';

import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaPhone,
  FaRegCopyright
} from 'react-icons/fa';

import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      <div className='bg-black flex w-full justify-center md:justify-between lg:justify-between text-white px-4 py-3 items-center'>
        <p className='text-lg hidden md:block lg:block'>
          Get connected with us on our socials!
        </p>
        <div className='flex space-x-3'>
          <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <Link to='https://www.facebook.com/profile.php?id=100069828099402&mibextid=ZbWKwL'>
              <FaFacebookF color='blue' />
            </Link>
          </div>
          <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <Link to='//twitter.com/HelpyMoto?t=FmxcdcAnmVX6GO20FkKFzA&s=09'>
              <FaTwitter color='blue' />
            </Link>
          </div>

          <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <Link to='https://instagram.com/helpy_moto?igshid=YmMyMTA2M2Y='>
              <FaInstagram color='red' />
            </Link>
          </div>

          <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <Link to=''>
              <FaLinkedin color='blue' />
            </Link>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-5 px-4 py-4 gap-4'>
        <div className='flex flex-col col-span-5 lg:col-span-1 md:col-span-1 items-center lg:items-start md:items-start'>
          <img src={Logo} alt='' className='w-[80px] h-[80px] object-contain' />
          <p className='text-lg text-center md:text-start lg:text-start'>
            At our venture, we strive to restore motors all across India in an
            efficient manner that saves our customers' valuable time by
            eliminating the need to bring their cars to a repair shop
          </p>
        </div>

        <div className='md:col-start-3 lg:col-start-3 col-span-5 md:col-span-1 lg:col-span-1 ' >
          <p className='mb-5 after:h-[3px] after:bg-purple-400 after:w-1/5 after:bottom-0 after:left-0 after:abolute after:flex  font-bold'>USEFUL LINKS</p>

          <ul>
            <li className='hover:underline cursor-pointer mb-2'>About Us</li>
            <li className='hover:underline cursor-pointer mb-2'>Services</li>
            <li className='hover:underline cursor-pointer mb-2'>Home</li>
            <li className='hover:underline cursor-pointer mb-2'>Terms of service</li>
            <li className='hover:underline cursor-pointer mb-2'>Privacy policy</li>
          </ul>
        </div>

        <div className='col-span-5 md:col-span-1 lg:col-span-1'>
          <p className='mb-5 after:h-[3px] after:bg-purple-400 after:w-1/5 after:bottom-0 after:left-0 after:abolute after:flex  font-bold'>PRACTICE AREAS</p>

          <ul>
            <li className='hover:underline cursor-pointer mb-2'>Repairing</li>
            <li className='hover:underline cursor-pointer mb-2'>Engine</li>
            <li className='hover:underline cursor-pointer mb-2'>Painting</li>
            <li className='hover:underline cursor-pointer mb-2'>Body and Tires</li>
          </ul>
        </div>

        <div className='col-span-5 md:col-span-1 lg:col-span-1 '>
          <p className='mb-5 after:h-[3px] after:bg-purple-400 after:w-1/5 after:bottom-0 after:left-0 after:abolute after:flex  font-bold'>CONTACT</p>

          <ul>
            <li className='mb-2'>
              <div className='flex justify-start items-center space-x-3'>
                <FaHome className='block w-[20px] h-[20px]' />
                <p>Indranagar phase-2, New Delhi-110001, India</p>
              </div>
            </li>
            <li className='mb-2'>
            <div className='flex justify-start items-center space-x-3'>
                <IoMdMail className='block w-[20px] h-[20px]' />
                <p>officialbusiness.sb@gmail.com</p>
              </div>
            </li>
            <li className='mb-2'>
            <div className='flex justify-start items-center space-x-3'>
                <FaPhone className='block w-[20px] h-[20px]' />
                <p>+91 9098630635</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div className='text-white bg-black px-3 py-2 text-center flex w-full items-center justify-center'>
        <FaRegCopyright/> 2021-2023 Copyright : <span className='underline cursor-pointer'>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
