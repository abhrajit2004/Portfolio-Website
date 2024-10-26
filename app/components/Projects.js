"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projectData = [
  {
    logo: '/mosaic.png',
    title: 'Mosaic',
    description: 'Mosaic is a platform where you can create posts and share them with the world. You can also read posts created by other users.',
    techStack: 'React, Tailwind CSS, Express.js, JWT, MongoDB',
    liveLink: 'https://mosaic-by-abhrajit.vercel.app/',
    codeLink: 'https://github.com/abhrajit2004/Mosaic'
  },
  {
    logo: '/netflix.png',
    title: 'Netflix Clone',
    description: 'This is a video streaming web application where you can see latest trailers and behind the scenes of movies and web series.',
    techStack: 'React, Tailwind CSS, Cloud Firestore',
    liveLink: 'https://netflixbyabhrajitgupta.vercel.app',
    codeLink: 'https://github.com/abhrajit2004/Netflix-Clone'
  },
  {
    logo: '/passop.png',
    title: 'PassOP',
    description: 'This is a password manager which stores passwords along with URLs and usernames. An user can also update or delete exisiting passwords.',
    techStack: 'React, Tailwind CSS',
    liveLink: 'https://password-manager-blush-seven.vercel.app',
    codeLink: 'https://github.com/abhrajit2004/Password-Manager'
  },
  {
    logo: '/buymechai.png',
    title: 'Patreon Clone',
    description: 'This project is a crowdfunding website where you can pay money to your favorite creator as appreciation and get their projects funded.',
    techStack: 'Nextjs14, NextAuth, Tailwind CSS, MongoDB',
    liveLink: '',
    codeLink: 'https://github.com/abhrajit2004/Buy-Me-A-Chai'
  },
  {
    logo: '/exoplanet.png',
    title: 'Eduexo',
    description: 'This is a hackathon group project which takes you to space and gives you overview of exoplanets with user-friendly design and fun quizzes.',
    techStack: 'React, Tailwind CSS, SCSS, Express.js',
    liveLink: 'https://nasa-space-apps-exoplanet-exploration-bdmi.vercel.app',
    codeLink: 'https://github.com/abhrajit2004/NASA-Space-Apps-Exoplanet-Exploration'
  },
  {
    logo: '/interview.png',
    title: 'Interview.io',
    description: 'This is a hackathon group project designed to help users improve their interview skills through a range of interactive and AI-driven features.',
    techStack: 'React, Tailwind CSS, SCSS, Express.js, Socket.io, MongoDB',
    liveLink: 'https://interview-io-six.vercel.app',
    codeLink: 'https://github.com/abhrajit2004/Interview.io'
  },
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
        className="cards flex flex-col sm:flex-row justify-center items-center flex-wrap w-[1000px] gap-10 mt-10"
      >
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="card bg-[#363636] w-[300px] min-h-[400px] text-gray-300 flex flex-col gap-4 pb-6 rounded-lg"
          >
            <div className="projectlogo flex justify-center rounded-lg">
              <Image src={project.logo} className='rounded-lg' width={300} height={400} priority alt='Project logo' />
            </div>
            <div className="projectdesc px-4 flex flex-col gap-2 mt-2">
              <h3 className='text-2xl font-semibold'>{project.title}</h3>
              <div>{project.description}</div>
              <div className='text-sm text-gray-400'>Tech Stack: {project.techStack}</div>
              <div className="buttons flex justify-between items-center mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='flex justify-center items-center gap-2'
                  onClick={() => {
                    if(project.liveLink.length === 0){
                      alert("currently not available")
                    }
                    else{
                      window.open(project.liveLink)}
                    }}
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
