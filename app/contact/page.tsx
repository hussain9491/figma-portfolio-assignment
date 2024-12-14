import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
        
        <div className="flex flex-col justify-around bg-white text-black h-screen text-left pl-12 gap-14 ">
      <ul>

        <Link href="https://www.linkedin.com/in/hussain-ali-7021aa2b8/">
      LinkedIn <br /><br /> Hussain Ali
        </Link>
      </ul>

        <ul>


        <Link href="https://github.com/hussain9491">
        Github
        </Link>
        </ul>
        
<ul>
  <Link href="" className=" gap-10 pl-3">
  Gmail <br /> <br /> hfareed376@gmail.com
  </Link>
</ul>


      </div>

    </div>
  )
}
