import React, { useRef, useEffect } from 'react';
import Xarrow from 'react-xarrows';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Works = () => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const titleControl = useAnimation();
  const [titleRef, titleinView] = useInView();

  useEffect(() => {
    if (titleinView) {
      titleControl.start('visible');
    } else {
      titleControl.start('hidden');
    }
  }, [titleControl, titleinView]);

  const titleVariants = {
    hidden: { opacity: 1, scale: 1, x: '-100%' },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0 }, x: '0%' },
  };



  return (
    <div className='px-4 -skew-y-2 bg-white text-black mt-12 py-4'>
      <motion.div ref={titleRef} variants={titleVariants}
        initial='hidden'
        animate={titleControl}>
      <p  className='text-4xl font-bold text-center mt-10 mb-2 skew-y-2'>
        How <span className='text-black'>HelpyMoto</span> Works?
      </p>
      </motion.div>
      

      <div className='grid  lg:grid-rows-5 lg:grid-flow-col gap-4 skew-y-2 mt-5'>
      <div className='lg:row-start-1 lg:row-span-3 bg-white px-3 py-3   flex justify-center items-center flex-col text-black rounded-md m-4 justify-center shadow-gray-400 shadow-lg mx-auto w-[250px]' ref={step1}>
        <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/Select-The-Perfect-Car-Service.png" alt="" className='w-2/3 object-contain' />
        <div className='flex flex-col w-full '>
        <p className='text-start text-lg font-semibold'>Select the Perfect Car Service</p>
        <p className='text-start text-sm'>From HelpyMoto's broad portfolio of services.</p>
        </div>
       
      </div>
      <div className='lg:row-start-2 lg:row-span-3 bg-white px-3 py-3  flex justify-center items-center flex-col text-black rounded-md m-4 justify-center shadow-gray-400 shadow-lg mx-auto w-[250px]' ref={step2}>
        <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/Schedule-Free-Doorstep-Pick-up.png" alt="" className='w-2/3 object-contain' />
        <div className='flex flex-col w-full '>
        <p className='text-start text-lg font-semibold'>Schedule a Free Doorstep Pick-up</p>
        <p className='text-start text-sm'>We offer free pick up and drop for all services booked</p>
        </div>
        
      </div>
      <div className='lg:row-start-1 lg:row-span-3 bg-white px-3 py-3 flex justify-center items-center flex-col text-black rounded-md m-4 justify-center shadow-gray-400 shadow-lg mx-auto w-[250px]' ref={step3}>
        <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/track-your-car-service-real-time.png" alt="" className='w-2/3 object-contain' />
        <div className='flex flex-col w-full '>
        <p className='text-start text-lg font-semibold'>Track your car service Real-Time</p>
        <p className='text-start text-sm'>We will take care of everything from here!</p>
        </div>
        
      </div>
     
      </div>

      <Xarrow start={step1} end={step2} />
      <Xarrow start={step2} end={step3} />

      
    </div>
  );
};

export default Works;
