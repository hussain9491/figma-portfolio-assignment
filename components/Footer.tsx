import Link from "next/link"

function Footer() {
  return (
    <div className="bg-slate-300 text-black flex flex-row p-20 gap-80 ">
      <h2>
      Created by Mr Hussain Ali <br /><br /> 27-10-2024
      </h2>
      

        <div className="flex flex-row justify-around  gap-14 ">
      <ul>

        <Link href="https://www.linkedin.com/in/hussain-ali-7021aa2b8/">
      LinkedIn
        </Link>
      </ul>

        <ul>


        <Link href="https://github.com/hussain9491">
        Github
        </Link>
        </ul>
        
<ul>
  <Link href="" className=" gap-10 pl-3 ">
  Gmail <br /> <br  /> hfareed376@gmail.com
  </Link>
</ul>


      </div>
        </div>
      

    
  )
}

export default Footer
