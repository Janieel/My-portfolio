import React from 'react'
import img from '../../assets/Pictures/Image.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';



const Hero = () => {
  return (
    <div>
        <div className=' 
        
             md:w-full  sm:grid grid-cols-2  sm:gap-4  sm:px-5 mt-5  sm:mb-10 '>
           <div className='  py-2 px-2 gap-2 flex-col
           
                 md:col-span-1   md:items-center md:justify-center  flex md:border-2 md:border-gray-200  rounded-md md:shadow-lg shadow-sm '>
              <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className=" w-[60%] sm:w-[100%]  h-90 sm:h-100 md:h-100    md:w-[90%] lg:w-[60%] lg:h-100   xl:w-[60%] xl:h-110  "
                    >
                    <SwiperSlide>
                            <div className='sm:w-full h-70 sm:h-90  md:h-90   lg:h-90 xl:h-100
                            
                                flex items-center justify-center'>
                              <img src={img} style={{width:"100%", height:"100%"}}  alt="" />
                            </div>
                    </SwiperSlide>
                        <SwiperSlide>
                            <div className=' w-full sm:h-90 md:h-90  h-70   lg:h-90 xl:h-100
                            
                              flex items-center justify-center'>
                                  <img src={img} style={{width:"100%", height:"100%"}} alt="" />
                            </div>
                    </SwiperSlide>
                        
                            
                    
                </Swiper> 

                {/* mobile */}

                 <div className=' sm:hidden mb-5 text-center  border-2 border-[#f4ddb9]   w-full ' >
                   <p className='  text-[2rem] mt-5   font-semibold '>Frontend Developer</p>
                   <p className=' text-[1rem]    '>building responsive and interactive web applications</p>
                   <div className=' flex  items-center justify-center mt-6 mb-5  gap-4'>
                    <button className=' w-30 h-15 shadow-lg border border-[#f4ddb9] '>view projects</button>
                    <button className='w-30 h-15  border shadow-lg border-[#f4ddb9] '>contact me</button>
                   </div>
                 </div>
          
           </div>
           <div className=' hidden
                    sm:col-span-1 sm:flex items-center sm:justify-center border-2 border-gray-200 rounded-md   shadow-lg '>
                  <div >
                     <p className='xl:text-[4rem] sm:text-[2rem] lg:text-[3rem]  font-medium '>Frontend Developer</p>
                     <p className='xl:text-[1.5rem] md:text-[1rem]   '>building  responsive and interactive web applications</p>
                  <div className='w-65 flex items-center justify-between mt-6 '>
                    <button className=' w-30 h-15 shadow-lg border border-[#f4ddb9]'>view projects</button>
                    <button className='w-30 h-15  border shadow-lg border-[#f4ddb9] '>contact me</button>
                  </div>
                </div>
           
           </div>
        </div>
    </div>
  )
}

export default Hero