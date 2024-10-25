"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const techStackData = [
  { src: '/html.png', alt: 'html' },
  { src: '/css.png', alt: 'css' },
  { src: '/js.png', alt: 'js' },
  { src: '/nodejs.png', alt: 'nodejs' },
  { src: '/expressjs.png', alt: 'expressjs', className: 'invert' },
  { src: '/mongodb.png', alt: 'mongodb' },
  { src: '/socketio.png', alt: 'socketio' },
  { src: '/reactjs.png', alt: 'reactjs' },
  { src: '/nextjs.png', alt: 'nextjs', className: 'invert' },
  { src: '/tailwindcss.png', alt: 'tailwindcss' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay each child element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const TechStacks = () => {
  return (
    <div>
      <section id='techstacks' className='dm-sans flex justify-center items-center flex-col gap-4 min-h-screen'>
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='text-4xl font-bold'
        >
          My Tech Stack
        </motion.h2>
        
        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className='text-gray-400 text-lg'
        >
          Technologies I have been working with recently
        </motion.div>

        {/* Tech Stack Icons with Staggered and Enhanced Effects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex justify-center items-center flex-wrap gap-12 max-w-[800px] mt-10"
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="stack"
            >
              <Image src={tech.src} width={80} height={80} priority alt={tech.alt} className={tech.className} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TechStacks;