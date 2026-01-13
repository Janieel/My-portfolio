import React from 'react'
import img from '../../assets/Pictures/Image.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className='px-10 md:px-5'>
        <div className=' 
        
             md:w-full  sm:grid grid-cols-2  sm:gap-4   mt-5  md:shadow-none md:border-0  mx-5  md:mx-0    '>
           <div className='  py-2 px-2 gap-2 flex-col 
           
                 md:col-span-1   md:items-center md:justify-center  flex  rounded-md   '>
              <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, ]}
                    className=" w-full h-[70%]
                       sm:w-[90%] sm:h-full md:w-[70%] lg:h-full  lg:w-[60%] "
                    >
                    <SwiperSlide>
                            <div className=' mt-10 md:mt-10 
                              
                                flex items-center justify-center'>
                              <img src={img} className=' rounded-[50%] h-[50%]  sm:h-full sm:w-full w-[80%] lg:w-[90%] lg:h-[90%] ' alt="" />
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className=' mt-10 md:mt-10 
                                flex items-center justify-center'>
                              <img src={img} className=' rounded-[50%] h-[50%]  sm:h-full sm:w-full w-[80%] lg:w-[90%] lg:h-[90%] ' alt="" />
                            </div>
                    </SwiperSlide>
                        
                            
                    
                </Swiper> 

                {/* mobile */}

                 <div  className=' sm:hidden mb-5 text-center   w-full ' >
                   <p className='  text-[2rem]   font-semibold '>Frontend Developer</p>
                   <p className=' text-[1rem]    '>building responsive and interactive web applications</p>
                   <div className=' flex  items-center justify-center mt-6  gap-4'>
                    <button className=' w-30 h-15 shadow-lg border border-[#f4ddb9] '>view projects</button>
                   <button className='w-30 h-15  border shadow-lg border-[#f4ddb9] '><a href='#connect'>contact me </a></button>
                   </div>
                 </div>
          
           </div>
           <div  className='  hidden
                    sm:col-span-1 sm:flex items-center sm:justify-center   rounded-md    px-10  '>
                  <div >
                     <p className=' sm:text-[2rem] md:text-[3rem]  font-semibold '>Frontend Developer</p>
                     <p className='xl:text-[1.5rem] md:text-[1rem]   '>building  responsive and interactive web applications</p>
                  <div className='w-65 flex items-center justify-between mt-6 '>
                    <button className=' w-30 h-15 shadow-lg border border-[#f4ddb9]'>view projects</button>
                    <button className='w-30 h-15  border shadow-lg border-[#f4ddb9] '><a href='#connect'>contact me </a></button>
                  </div>
                </div>
           
           </div>
        </div>
    </div>
  )
}

export default Hero