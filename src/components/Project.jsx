import React from 'react'
import Button from './Button'

function Project({val,count,mover,liveLink,sourceCode}) {
  return (
    <>
  <div onMouseEnter={()=>mover(count)} className=' h-[320px] flex pb-16 justify-between items-center'>
    <div className='font-mono text-5xl pl w-[20vw]'>
        <h1>{val.name}</h1>
    </div>
    <div className='w-1/4 '>
       <p className='mb-10'> {val.desc}</p>
      <div className='flex gap-5 '>
        {val.live&&<Button title='Live link'link={liveLink}/>}
        <Button title='Source Code' link={sourceCode}/>
      </div>
    </div>
  
  </div>
  
  </>
  )
}

export default Project