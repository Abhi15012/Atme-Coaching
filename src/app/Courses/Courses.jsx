"use client";
import React from 'react';
import { HoverEffect } from "../componets/Home/ui/card-hover-effect";
import { TextGenerateEffect } from "../../app/componets/Home/ui/text-generate-effect";
// import { HoverBorderGradient } from "../../app/componets/Home/ui/hover-border-gradient";
import { Button } from "../../app/componets/Home/ui/moving-border";
const Courses = () => {

  const Course = [
    {
      name: "AWS, Azure, GCP, Big Data, C",
      price: 500,
      rating: 4.6,
      description: "Learn cloud computing and big data with comprehensive training on AWS, Azure, GCP, and C programming."
    },
    {
      name: "C++ & JAVA (Core & Advance & Full Stack Java)",
      price: 450,
      rating: 4.7,
      description: "Master C++ and Java, from core concepts to advanced and full stack Java development."
    },
    {
      name: "Front-End (HTML & CSS & JavaScript)",
      price: 350,
      rating: 4.5,
      description: "Develop front-end skills with in-depth training on HTML, CSS, and JavaScript."
    },
    {
      name: "Back-End (Core Java & Advance Java & Spring, SQL, Oracle SQL)",
      price: 400,
      rating: 4.8,
      description: "Enhance your back-end development skills with core Java, advanced Java, Spring, and SQL."
    },
 
    {
      name: "Cyber Security",
      price: 600,
      rating: 4.9,
      description: "Become a cyber security expert with our advanced training program."
    },
    {
      name: "Ethical Hacking (Attacking VAPT & SOC)",
      price: 550,
      rating: 4.8,
      description: "Learn ethical hacking with a focus on Vulnerability Assessment and Penetration Testing (VAPT) and Security Operations Center (SOC)."
    },
    {
      name: "Windows Admin and Linux Admin",
      price: 400,
      rating: 4.6,
      description: "Gain expertise in managing Windows and Linux systems with our comprehensive admin course."
    },
 
    {
      name: "VMware Antivirus (End Point Production)",
      price: 450,
      rating: 4.7,
      description: "Protect systems with advanced VMware antivirus training focused on end point production."
    },
 
  ];
 
  const words = `Our Courses`
  return (
    <div className="max-w-full mx-auto  text-center px-8  ">
 <TextGenerateEffect words={words} className='text-white' />
      <HoverEffect items={Course} />
<div className='flex w-full items-center justify-center'>
<Button
        borderRadius="1.75rem"
        className="text-md text-slate-900 bg-gradient-to-r from-pink-500 to-purple-500 dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800 "
      >
        Explore more Courses
      </Button>



</div>
    </div>
  );
};

export default Courses;
