"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projectData = [
  {
    logo: '/sample.png',
    title: 'Project Title goes here',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.',
    techStack: 'HTML, CSS, JavaScript',
    liveLink: '#',
    codeLink: '#'
  },
  // Add more projects as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

const Projects = () => {
  return (
    <section id='projects' className='dm-sans flex justify-center items-center flex-col gap-4 min-h-screen mt-10'>
      
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='text-4xl font-bold'
      >
        Projects
      </motion.h2>

      {/* Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className='text-gray-400 text-lg'
      >
        Things I have built so far
      </motion.div>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="cards flex justify-center items-center flex-wrap max-w-[1000px] gap-10 mt-10"
      >
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4 p-4"
          >
            <div className="projectlogo flex justify-center mt-4">
              <Image src={project.logo} className='invert' width={80} height={80} priority alt='Project logo' />
            </div>
            <div className="projectdesc px-4 flex flex-col gap-2 mt-4">
              <h3 className='text-2xl font-semibold'>{project.title}</h3>
              <div>{project.description}</div>
              <div className='text-sm text-gray-400'>Tech Stack: {project.techStack}</div>
              <div className="buttons flex justify-between items-center mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='flex justify-center items-center gap-2'
                  onClick={() => window.open(project.liveLink)}
                >
                  <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                  <span className='text-sm underline'>Live Preview</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='flex justify-center items-center gap-2'
                  onClick={() => window.open(project.codeLink)}
                >
                  <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                  <span className='text-sm underline'>View Code</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
