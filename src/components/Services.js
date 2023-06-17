import React, { useRef, useEffect } from 'react';
import servicesData from '../data/Data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = ({setService}) => {
  const titleControl = useAnimation();
  const serviceControl = useAnimation();
  const [titleRef, titleinView] = useInView();
  const [serviceRef, serviceinView] = useInView();

  useEffect(() => {
    if (titleinView) {
      titleControl.start('visible');
    } else {
      titleControl.start('hidden');
    }
  }, [titleControl, titleinView]);
  console.log(serviceinView)

  useEffect(() => {
    if (titleinView) {
      serviceControl.start('visible');
    } /* else {
      serviceControl.start('hidden');
    } */
  }, [serviceControl, titleinView]);

  const titleVariants = {
    hidden: { opacity: 1, scale: 1, x: '-100%' },
    visible: { opacity: 1, scale: 1, transition: { duration:1.0 }, x: '0%' },
  };

  const serviceVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
  };

  const handleServiceClick = () => {
    
  }
  return (
    <div className='px-4'>
      <motion.div
        
        variants={titleVariants}
        initial='hidden'
        animate={titleControl}
      >
        <p className='text-4xl  font-bold text-center mt-10 mb-2'>
          Our <span className='text-black'>Best</span> Services
        </p>
        <p className='mx-auto md:w-1/2 lg:w-1/3 xl:w-1/3 text-center mb-5'>
          Get affordable and hassle-free periodic car service, car repair, wheel
          care services, cashless insurance claim and much more!
        </p>
      </motion.div>

      <motion.div ref={titleRef} className='flex w-full justify-center gap-x-3 gap-y-3 px-4 my-2 flex-wrap mx-auto'>
        {servicesData.map((val, index) => {
          return (
            <>
              <motion.div
                variants={serviceVariants}
                initial='hidden'
                animate={serviceControl}
                key={index}
                
              >
                <div className='shadow-lg hover:scale-105 transition transform duration-200 ease-in-out w-[130px] md:w-[200px] lg:w-[300px] md:h-[200px] lg:h-[200px] h-[130px] md:w-[200px] lg:w-[200px] md:h-[200px] lg:h-[300px] rounded-md bg-gray-200 p-3 flex justify-center items-center flex-col cursor-pointer' onClick={() => setService({show: true, id:val.id})}>

                
                
                <img src={val.image} alt='' className='w-2/3 object-contain' />
                <p className='md:text-xl lg:text-xl font-sans font-semibold text-center'>
                  {val.name}
                </p>
                </div>
                
              </motion.div>
            </>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
