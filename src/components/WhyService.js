import React from 'react'

const WhyService = () => {
  return (
    <div className='px-12 mb-12'>
        <p className='text-4xl font-bold font-sans text-center mt-16 mb-10'>Why Service of HelpyMoto?</p>
        <div className='grid grid-cols-4 gap-8'>
            <div className='col-span-4 md:col-span-2 lg:col-span-1 border-[1px] border-gray-400 rounded-lg  border-solid bg-black text-white'>
                <img src="service-1.jpg" alt="" className='w-full object-contain rounded-tr-lg rounded-tl-lg'/>
                <p className='font-semibold px-3 pt-3 text-lg text-green-400'>Available anytime, anywhere</p>
                <p className='px-3 pb-2 text-sm'>We are available 24/7 throughout India. You can hire a mechanic anytime through our app or website after filling in a few details. Everything will be at your fingertips only.</p>
            </div>

            <div className='col-span-4 md:col-span-2 lg:col-span-1 border-[1px] border-gray-400 rounded-lg  border-solid bg-black text-white'>
                <img src="service-2.jpg" alt="" className='w-full object-contain rounded-tr-lg rounded-tl-lg'/>
                <p className='font-semibold px-3 pt-3 text-lg text-green-400'>Fair service cost</p>
                <p className='px-3 pb-2 text-sm'>We offer fair and transparent pricing for our services, so you never have to worry about hidden fees or charges.</p>
            </div>

            <div className='col-span-4 md:col-span-2 lg:col-span-1 border-[1px] border-gray-400 rounded-lg  border-solid bg-black text-white'>
                <img src="service-3.jpg" alt="" className='w-full object-contain rounded-tr-lg rounded-tl-lg'/>
                <p className='font-semibold px-3 pt-3 text-lg text-green-400'>Use quality spare parts</p>
                <p className='px-3 pb-2 text-sm'>We only use high-quality spare parts for all our repairs and services, ensuring that your vehicle is in good hands.</p>
            </div>

            <div className='col-span-4 md:col-span-2 lg:col-span-1 border-[1px] border-gray-400 rounded-lg  border-solid bg-black text-white'>
                <img src="service-4.jpg" alt="" className='w-full object-contain rounded-tr-lg rounded-tl-lg'/>
                <p className='font-semibold px-3 pt-3 text-lg text-green-400'>Proven safety mechanism</p>
                <p className='px-3 pb-2 text-sm'>Our team of mechanics are highly trained and experienced, and we follow strict safety procedures to ensure the safety of our customers and their vehicles.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyService