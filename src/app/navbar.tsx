'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='md:h-16 mx-auto  rounded-2xl h-20 justify-between  z-50 flex md:flex-row flex-col items-center  sticky top-6 md:w-3/4 bg-white dark:bg-slate-900/50  shadow-md shadow-black'>
      <Image src={'/logo.png'} alt={'Logo'} width={150} height={100} className='md:ml-10'/>
<div className='flex gap-10  dark:text-white text-lg  mr-10 cursor-pointer font-semibold'>
   <div><Link href={''}>Home</Link></div>
      <div><Link href={''}>Courses</Link></div>
      <div><a href={''}>Our Team</a></div>
      <div><a href={''}>Contact Us</a></div>

      
      
</div>
   



    </div>

  )
}

export default Navbar
