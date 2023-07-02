import React from 'react'

const DownloadApp = () => {
  return (
    <div className='mt-20 mb-20'>
        <p className='text-4xl font-bold  mb-10 font-sans text-center'>Download the HelpyMoto App</p>
        <div className='grid grid-cols-4 px-4 gap-x-3 gap-y-6'>
            <div className='flex w-full justify-center col-span-4 md:col-span-1 lg:col-span-1'>
                <img src="mobile.jpeg" alt="" className='rounded-2xl' />
            </div>
            <div className='md:col-span-2 lg:col-span-2 col-span-4 flex flex-col items-center justify-evenly'>
                <p className='text-lg text-center w-2/3 text-green-400'>Choose and book a seamless car service experience and get upto Rs 750 off with the HelpyMoto App</p>

                <div className='grid grid-cols-2'>
                    <div className='cursor-pointer'>
                    <img src="appstore.png" alt=""  className='h-[80px] object-contain' />

                    </div>

                    <div className='cursor-pointer'>
                       <img src="playstore.png" alt="" className='h-[76px] object-contain' />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center col-span-4 md:col-span-1 lg:col-span-1'>
                <img src="mobile.jpeg" alt="" className='rounded-2xl'/>
            </div>

        </div>
    </div>
  )
}

export default DownloadApp