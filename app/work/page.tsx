
import hero from "../../public/image/hero.png"
import Image from "next/image"

import React from 'react'

function page() {
  return (

    <div className='flex justify-between items-center h-screen  bg-white text-black p-6 '>

      <div className='flex flex-col gap-3 '>
        <h1 className='pb-32 text-4xl font-bold '>
          This is Me Hussain junior NextJS Developer
        </h1>
        
        <h4 className=' font-bold text-2xl mx-6 '>

          Hello! I am Hussain Ali
        </h4>


        <div className='w-1/2 mx-4 overflow-scroll '>
          <p className='text-[21px] ' >

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ex recusandae non vitae none this is our assignment this is our 5th assignmnet of giaic
          </p>
        </div>
        <div className='p-2 m-4'>
          <button className='bg-slate-900 text-white ml-6 mb-5 h-[40px] w-[140px]'>click here</button>
        </div>
      </div>
      <div className=' pt-6 '>
        <p className='px-12 text-gray-800 mb-6 '>
          A Junior-Year Developer and i am student of GIAIC who trying to who specialized in A.I and Metaverse
        </p>
        <Image src={hero} width={502} height={502}
          alt=" image" />
      </div>
      
    </div>

  )
}

export default page
