import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clients from '../data/Clients';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaRegStar,
} from 'react-icons/fa';
import {BiStar} from 'react-icons/bi'
import React, { useState, useEffect } from 'react';

const Clients = () => {
  const [sliderRef, setSliderRef] = useState(null);
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, x: '0%' },
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='my-12 flex w-full flex-col'>
      <div className='grid grid-cols-3 px-4 gap-y-3'>
        <div  className='flex flex-col justify-center px-3 col-span-3 lg:col-span-1'>
          <motion.div ref={titleRef} variants={titleVariants}
        initial='hidden'
        animate={titleControl}>
          <p className='text-4xl font-bold'>
            Don't just take our word for it... Read reviews from our customers
          </p>
          <p className='mt-2 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            earum perferendis omnis cumque corrupti officia, dolorem amet
            reprehenderi
          </p>
          </motion.div>
          

          <div className=' space-x-4 mt-5 hidden md:flex lg:flex xl:flex'>
            <button
              onClick={sliderRef?.slickPrev}
              className='bg-red-500 w-[60px] h-[60px] rounded-full stroke-white flex justify-center items-center'
            >
              <FaChevronLeft color='white' />
            </button>
            <button
              onClick={sliderRef?.slickNext}
              className='bg-red-500 w-[60px] h-[60px] rounded-full stroke-white flex justify-center items-center'
            >
              <FaChevronRight color='white' />
            </button>
          </div>
        </div>

        <div className='col-span-3 lg:col-span-2'>
          <Slider
            ref={setSliderRef}
            {...sliderSettings}
            centerMode={true}
            className='gap-x-4'
          >
            {clients.map((card, index) => (
              <div key={index} className=' lg:p-4 md:p-3 p-1 ' style={{ margin: '20px' }}>
                <div className='flex flex-col  bg-gray-400 rounded-md p-2 md:p-3 lg:p-4 shadow-md bg-opacity-20'>
                  <div className='flex w-full justify-between mb-8'>
                    <FaQuoteLeft color='green' />
                    <div className='flex'>
                    {Array.from({ length: card.stars }, (_, index) => {
                      return <BiStar key={index} color='gold' fill='gold' />;
                    })}
                    </div>
                    
                  </div>
                  <p>{card.disc}</p>
                  <div className='grid grid-cols-4 mt-8'>
                    <img
                      alt={card.name}
                      src={card.img_url}
                      width='50'
                      height='50'
                    />
                    <div className='col-span-3'>
                      <h2 className='text-lg font-semibold'>{card.name}</h2>
                      <p>{card.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='col-start-2 col-span-2 flex w-full justify-end md:hidden lg:hidden xl:hidden'>
        <div className='flex space-x-4'>
            <button
              onClick={sliderRef?.slickPrev}
              className='bg-red-500 w-[60px] h-[60px] rounded-full stroke-white flex justify-center items-center'
            >
              <FaChevronLeft color='white' />
            </button>
            <button
              onClick={sliderRef?.slickNext}
              className='bg-red-500 w-[60px] h-[60px] rounded-full stroke-white flex justify-center items-center'
            >
              <FaChevronRight color='white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
