 import Link from "next/link"

import React from 'react'

function Header() {
  return (
    <div className="bg-slate-300 h-24 text-black w-screen   flex-row flex pt-10 justify-end hover:  " >
      <div className="relative">

       <ul className="flex flex-reverse gap-16 px-40 hover:bg-blue-200 duration-1000 ">  <Link href="/"><li>home</li></Link>
       <Link  href="about"><li>about</li></Link>
      <Link href="work"><li>work</li></Link>
       <Link href="contact"><li>contact</li></Link> </ul>
      </div>
    </div>
  )
}

export default Header