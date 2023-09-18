import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
      <motion.div whileHover={{ scale: 1.5 }}>
        <MotionImage src="/images/profile/Logo.png" alt="Мой Логотип" width={100} height={100} />
        
      </motion.div>
    </div>
  );
}

export default Logo;