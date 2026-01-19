import React, { useState } from 'react'
import SwiperCarousel from '../SwiperCarousel/Swiper'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Motion from '../Motion/Motion';




const About = () => {
  const [isHovered, setIsHovered] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animate only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
          
          <div className=' lg:px-5 px-5 mt-5  py-10 md:py-0  xl:h-max '>
               <div className=' gap-4 mt-10   '>
                    <div className=' col-span-1   rounded-md px-3 '> 
                       <div data-aos="fade-up"

                           className='h-70 px-5 xl:px-15 lg:px-10 sm:px-20 md:px-0 overflow-scroll md:overflow-hidden shadow-sm border-2 border-[#f4ddb9]'>
                           <span className='text-[1.5rem] md:text-[2rem] mb-5 flex justify-center  font-medium '>
                                ABOUT 
                           </span>
                           <p >
                               Hi there! I'm Jane, a front-end developer who's passionate about building innovative web applications.
                                 What drives me is the opportunity to transform my passion into practical 
                                 solutions that address real-life challenges. I specialize in creating web apps
                                  that combine creativity with solid functionality. I'm committed to continuous learning
                                   and expanding my expertise into new areas of development.
                           </p>
                      </div> 
                    </div> 
                    <div >
                       
                         <div className='col-span-1 h-80 md:h-90  rounded-md px-3 mt-10 sm:mt-20  '>
                               <p className=' text-[1.5rem] sm:text-[2rem]  font-medium sm:font-semibold flex mb-5 justify-center ' >Technical Skills</p>
                               <div className='h-40 sm:h-40 md:h-70  pt-10 relative'>
                                 
                                <div className='flex justify-center'>
                                     <Motion/>

                                </div>
                                
                                 
                                <p className='  text-[1rem] text-center mt-5 font-medium '>The tools I use to build clean, functional web projects.</p>
                                 
  
                                      
                                 </div>  
                              {/* {
                                  isHovered?
                                   <div className=' flex items-center justify-between xl:w-151 absolute bg-amber-500  bottom-0'> 
                                   <button className='bg-gray-200 h-10 w-10 ml-10 rounded-[50px] flex justify-center items-center text-[1.5rem] animate-pulse '>
                                     <icon><IoChevronForwardOutline /></icon>
                                    </button>
                                   <button  className='bg-gray-200 h-10 w-10 mr-10 rounded-[50px] flex justify-center items-center text-[1.5rem] animate-pulse'> 
                                     <IoChevronBackOutline/>
                                   </button>
                                 </div>
                                 :
                                 ""


                              } */}
                         </div>
                           
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About