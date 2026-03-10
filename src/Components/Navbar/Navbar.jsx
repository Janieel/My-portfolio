import React, { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { Link,useNavigate } from 'react-router-dom'
import logo from "../../assets/Icon/Logo.svg"


const Navbar = () => {
   const [Dropdown,setDropdown]=useState(false)
  return (
    <div className='bg-[#ddd3c3] z-100 sticky top-0'>
        <div className='md:w-full  md:h-20 flex h-15 w-full   px-5 '>
           <div className=' w-[50%] flex items-center 
             md:w-[50%] md:flex  md:items-center'>
              <img src={logo} className=' h-[130px]' alt="" />
           </div>
            {/* small screen */}
            <div className=' md:hidden w-[50%] flex justify-end items-center relative '>
              
                <IoMenuOutline style={{fontSize:"30px"}}
                   onClick={()=>setDropdown(!Dropdown)}
                  
                />

              
            </div>
            {    Dropdown &&
                  <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    
                         className='md:hidden absolute top-15 right-0 text-center  bg-[#e8e6e3] w-50 h-20' >
                       <Link to={'/'}><h2 className=' mt-3 hover:bg-[#876267] ' >Home</h2></Link>
               
                      <Link to={'/project'}><h2 className='mt-3  hover:bg-[#876267]'>Projects</h2></Link> 
                      
                 </div>
            }
           
            {/* tablet */}
           <div className=' w-[50%] hidden  
            md:w-[50%] lg:gap-5  md:flex  md:items-center md:justify-end'>
             <Link to={'/'}><h2 className='hover:bg-[#876267] w-30 h-10  flex items-center justify-center'>Home</h2></Link>
         
              <Link to={'/project'}><h2 className='hover:bg-[#876267] w-30 h-10  flex items-center justify-center'>Projects</h2></Link> 
        
           </div>
        </div>
    </div>
  )
}

export default Navbar