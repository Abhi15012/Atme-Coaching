'use client'
import React, { useEffect, useState } from 'react';
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from 'next/image';
 const slides: string | any[]=[
"/salesforce.jpg",
"/cybersec.jpg",
  "/ielts.avif",
"/cloud.avif"
 ]


const Home: React.FC = () => {
  const words = [
    { text: "ONLINE" },
    { text: "COMPUTER", className: "text-red-500 md:text-6xl dark:text-blue-500" },
    { text: "COURSES", className: "text-yellow-700 md:text-6xl dark:text-blue-500" },
    { text: "FOR" },
    { text: "YOUR" },
    { text: "BRIGHT", className: "text-red-500 dark:text-blue-500 md:text-7xl font-bold" },
    { text: "FUTURE", className: "text-pink-500 dark:text-blue-500 md:text-7xl font-bold" },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount + 1) % slides.length);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const img = slides[count];

  return (
    <div className='h-screen flex items-center'>
      <div className='flex flex-col w-1/3 md:ml-10 -mt-32'>
        <TypewriterEffect words={words} className='text-justify' />
      </div>
  
      <Image src={img} width={600} height={600} alt={`Slide ${count}`} className='md:-mt-28 float-right translate-x-28 rounded-lg transition-shadow' />
    
    </div>
  );
};

export default Home;
