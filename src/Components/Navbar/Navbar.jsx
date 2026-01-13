import React, { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [Dropdown,setDropdown]=useState(false)
  return (
    <div className='bg-[#f0e3cd] z-100 sticky top-0'>
        <div className='md:w-full  md:h-20 flex h-15 w-full   px-5 '>
           <div className=' w-[50%] flex items-center
             md:w-[50%] md:flex  md:items-center'>
               logo
           </div>
            {/* small screen */}
            <div className=' md:hidden w-[50%] flex justify-end items-center relative'>
                <IoMenuOutline style={{fontSize:"30px"}}
                 onClick={()=>setDropdown(!Dropdown)}/>
            </div>
            {    Dropdown &&
                  <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    
                         className='md:hidden absolute top-10 right-0 text-center bg-[#fbedd7] w-50 h-40' >
                       <Link to={'/'}><h2 className=' mt-3 hover:bg-[#f4ddb9] ' >Home</h2></Link>
                      <h2 className='mt-3 border-b border-gray-200 hover:bg-[#f4ddb9]'>About</h2>
                      <Link to={'/project'}><h2 className='mt-3 border-b border-gray-200 hover:bg-[#f4ddb9]'>Projects</h2></Link> 
                      <h2 className='mt-3 border-b border-gray-200 hover:bg-[#f4ddb9]'>Contact</h2>
                 </div>
            }
           
            {/* tablet */}
           <div className=' w-[50%] hidden
            md:w-[50%] md:gap-5  md:flex  md:items-center md:justify-end md:mx-10'>
             <Link to={'/'}><h2>Home</h2></Link>
              <h2>About</h2>
              <Link to={'/project'}><h2>Projects</h2></Link> 
              <h2>Contact</h2>
           </div>
        </div>
    </div>
  )
}

export default Navbar