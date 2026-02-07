import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import check from "../../assets/Pictures/Image2.png"
import log from "../../assets/Pictures/Image3.png"
import det from "../../assets/Pictures/Image4.png"
import tip from "../../assets/Pictures/tip.png"
import pool from "../../assets/Pictures/pool.png"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Project = () => {

      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
      if (!progressCircle.current || !progressContent.current) return;
      progressCircle.current.style.setProperty('--progress', 1 - progress);
     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (

          
    <div className='' >
        <div className=' w-full    '>
            <div className=' text-[2rem] font-medium   h-20 flex justify-center items-center '>Project</div>
             <div className=' text-center px-5  '>
                <p className='font-medium mb-2 text-[1.5rem] '>Featured projects</p>
                 <p className='text-[1rem] text-[#dbbfbf]'>Highlighted project showing my frontend development skill</p>
             </div>
            <div className='  px-5 mt-10   mb-10 lg:px-0 sm:grid grid-cols-2  rounded-[10px] sm:bg-[#ebe9e5]  md:shadow-xl'>
               
                  <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        // autoplay={{
                        // delay: 1500,
                        // disableOnInteraction: false,
                        // }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination,]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className=" w-full  "
                    >
                        <SwiperSlide>
                            <div className=' h-100 pt-10  sm:px-0 md:px-0   w-full px-10   lg:px-15 xl:px-30'>
                                <img src={tip} className='h-[90%]  w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white h-100 pt-10 sm:px-0 md:px-0  w-full px-10  lg:px-15 xl:px-30'>
                                <img src={pool} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                       
                    
                      
                        
                       
                  
                  </Swiper>
               
                <div className='col-span-1   mt-10 pt-5 px-5 sm:mt-0 bg-[#ebe9e5] text-black  '>
                   <p className='text-2xl  text-center md:mt-5'> Landing Page Website </p>
                    <p className='mt-5'>This project is a Landing Page built with React,
                        JavaScript, and Tailwind CSS. It focuses on delivering a clean,
                        intuitive user interface and a smooth user experience across all devices. 
                        The application leverages reusable components and efficient state management to
                        ensure performance, scalability, and maintainability.
                    </p>

                        <div className='  hidden lg:block  md:text-center  md:mt-5 md:text-[1.5rem] font-medium'> <p>Tech Stack</p>
                            
                            <div className='md:mt-3  md:flex md:justify-center md:text-[1rem] md:items-center font-normal md:gap-4'>
                                <button className='bg-[#c9b5a0] h-[40px] w-[120px] rounded-[50px]'>React</button>
                                <button className='bg-[#c9b5a0] h-[40px] w-[152px] rounded-[50px]'>Javascript</button>
                                <button className='bg-[#c9b5a0] h-[40px] w-[150px] rounded-[50px]'>Tailwind</button>
                           </div>
                        </div>
                       <div className=' flex items-center py-5 gap-4 '>
                         <a 
                            href="https://github.com/Janieel/Tip-Pool-landing-page " >
                           <button className=' bg-[#a09a9a] h-12 w-30 rounded-[10px] hover:bg-[#7a7272] '> Github </button>
                        </a>  
                          <a href="https://tip-pool-page.vercel.app/">
                        <button className='  bg-[#a09a9a] h-12 w-30 rounded-[10px]  hover:bg-[#7a7272]  '> Live demo </button>
                       </a> 
                     </div>
                </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default Project