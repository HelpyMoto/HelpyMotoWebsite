import React from 'react'
import {BiStar} from 'react-icons/bi'
import { FaPhone } from 'react-icons/fa';


const ProviderInfo = ({providerData, otp, screen}) => {
  return (
    <div className={screen=='large' ? 'bg-white px-4 py-4 shadow-lg  md:flex lg:flex xl:flex flex-col z-[200] hidden  lg:absolute xl:absolute md:absolute md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2  xl:top-1/2 xl:right-4 xl:transform xl:-translate-y-1/2' : 'bg-white px-4 py-4  flex flex-col z-[200]   lg:hidden xl:hidden md:hidden md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2  xl:top-1/2 xl:right-4 xl:transform xl:-translate-y-1/2 shadow-inner rounded-tl-xl rounded-tr-xl '}>
        <p className='text-xl font-semibold font-sans text-center '>Provider Booked!</p>
        <p className='mb-6 mx-2 text-center text-sm'>An expert service provider is on it's way!</p>
        <div className='flex w-full  items-center space-x-2  mb-4 '>
            <img src={providerData.photo} alt="provider_photo" className='rounded-full w-[60px] h-[60px]' />
            <div>
                <p className='text-lg'>{providerData.name}</p>
                <p className='text-sm'><span className='font-semibold'>Workshop:</span> {providerData.workshopName}</p>
            </div>
            
            
        </div>
        <div className='flex   items-center space-x-2 mb-4'>
        <p className='my-2'>Rating : </p>
        <div className='flex'>
                    {Array.from({ length: providerData.rating}, (_, index) => {
                      return <BiStar key={index} color='gold' fill='gold'  className='w-[20px] h-[20px]'/>;
                    })}
                    </div>
        </div>

        {/* OTP */}
        <p className='text-lg text-center font-bold mb-4 '>
            OTP: <span className='px-3 py-1 bg-[#18f98f]/80 text-white font-semibold rounded-lg text-lg'>{otp}</span>
        </p>


        {/* Mim contact no. */}
        <div className='flex justify-between mt-20 mb-4'>
            <p>Contact Now at: </p>
            <div className='flex justify-start items-center space-x-1'>
                <FaPhone className='block w-[12px] h-[12px]' />
                <p className='font-bold'>+91 9098630635</p>
              </div>
        </div>
        

        {/* Cancel button */}
        <div className='bg-red-500 px-3 py-1 text-white font-semibold rounded-lg text-lg text-center  cursor-pointer'>
            Cancel Booking
        </div>
        
    </div>
  )
}

export default ProviderInfo