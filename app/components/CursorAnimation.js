"use client";
import React from 'react'
import gsap from 'gsap'
import { useState, useEffect } from 'react';

const CursorAnimation = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
    
  return (
    <div
    className="cursor fixed top-0 left-0 w-6 h-6 bg-transparent border border-white rounded-full pointer-events-none"
    style={{
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    }}
  />
  )
}

export default CursorAnimation
