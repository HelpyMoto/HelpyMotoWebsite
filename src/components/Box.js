import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Box = ({ num }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1,  transition: { duration: 0.5 }},
  };
  
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='bg-blue-500 text-white rounded-lg p-8 text-3xl'
    >
      Box {num}
    </motion.div>
  );
};

export default Box;
