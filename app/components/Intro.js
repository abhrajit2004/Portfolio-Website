"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import CursorAnimation from './CursorAnimation';

const Intro = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1uCZt3wUnuA3owfUbpsBYthuZX9eQcqjk/view?usp=sharing");
    };

    return (
        <>
            <CursorAnimation />

            <section className='flex justify-center items-center gap-28 min-h-[80vh]'>
                {/* Animated Text Section */}
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="dm-sans desc h-[400px] w-[400px] text-5xl font-bold flex flex-col justify-center items-start gap-5"
                >
                    <div>Hi Folks, This is Abhrajit Gupta</div>

                    {/* Animated Button */}
                    <motion.button 
                        onClick={handleResumeClick} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="resume"
                    >
                        <p className="text">Download Resume</p>
                        <div className="svg container mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-download" viewBox="0 0 16 16"> 
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> 
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> 
                            </svg>
                        </div>
                    </motion.button>
                </motion.h1>

                {/* Animated Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="borderline h-[310px] w-[310px] flex justify-center items-center rounded-full"
                >
                    <Image src={"/abhra.jpg"} priority className="rounded-full" width={300} height={300} alt='abhra profile' />
                </motion.div>
            </section>
        </>
    );
};

export default Intro;