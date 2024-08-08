import React from 'react'
import Home from './componets/Home/Home'
import Courses from './Courses/Courses'
import { SignupFormDemo } from './componets/Home/FormQuick'
import { TypewriterEffect } from "../app/componets/Home/ui/typewriter-effect";
import { CardStackDemo } from './componets/Home/reviews';
import { FlipWordsDemo } from './componets/Home/reviewsec';
import Quicklinks from './quicklinks'
const Page = () => {

  const words = [

    { text: "Quick", className: "text-red-500 md:text-5xl dark:text-blue-500" },
    { text: "Contact", className: "text-purple-600 md:text-5xl dark:text-blue-500" },

  ];
  return (
    <div className=' h-full '>
      <Home/>

    <div className='-mt-36  hover:blur-none
    py-10 bg-gradient-to-b flex justify-center flex-row gap-32 items-center from-white  to-cyan-200  dark:to-slate-900  h-screen '>   
    
    
     <div className='-mt-20'><SignupFormDemo/> </div>      <div className='-mt-14'> <TypewriterEffect words={words} className='text-justify' />
     </div>  
   </div>  
 
  <div className='-mt-28 py-10 bg-gradient-to-b  from-cyan-200  to-white dark:to-slate-900  h-screen overflow-y-scroll'> <Courses/></div>  

  <div className='  hover:blur-none
    py-10 bg-gradient-to-b flex justify-center  gap-10 items-center from-white  to-cyan-200  dark:to-slate-900  h-screen '>   

 <div> < FlipWordsDemo/></div>
 <div> <CardStackDemo/></div>
</div> 
<Quicklinks/>
</div>
  )
}

export default Page
