'use client'
import React from 'react'
import { IoIosPhonePortrait } from 'react-icons/io'
import { MdAttachEmail } from 'react-icons/md'

const Infobar = () => {
  return (
    <div className='bg-cyan-500 rounded-sm h-10 text-md font-medium mb-2 '>
<div className='flex flex-row  items-center gap-5'>
  <div className='flex gap-2 mt-2'>
    <div className='mt-1 '><IoIosPhonePortrait/></div>
  <div>:+91 0000000000</div>
  </div>
<div className='flex gap-2 '> <div className='mt-2'><MdAttachEmail /></div> <div>:xyz@mnop.com</div></div>
</div>

<div className='float-right flex md:gap-10 gap-4 md:mr-12  -mt-[30px]'>
 <button className='bg-gradient-to-r from-green-500 to-lime-500 h-9 md:w-24 rounded-lg'>Login</button>
<button>Sign up</button>
</div>
    </div>
  )
}

export default Infobar
