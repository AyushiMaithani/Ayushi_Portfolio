import { IoIosReturnRight } from "react-icons/io";
import React from 'react'

function Button({title="Get Started"}) {
  return (
   <div className='min-w-36 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer hover:bg-zinc-200/50 transition-all duration-300'>
    <span className='text-sm font-medium'>{title}</span>
    <IoIosReturnRight className='text-2xl'/>
   </div>
  )
}

export default Button