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
        <div className='w-full h-80 md:grid md:grid-cols-2  md:gap-4  md:px-20  mt-3 mb-20'>
           <div className='col-span-1  items-center flex border-2 border-gray-200 rounded-md   shadow-lg '>
              <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="w-100 h-full"
                    >
                    <SwiperSlide>
                            <div className='bg-red-400 w-100 h-full flex items-center justify-center'>
                              <img src={img} alt="" />
                            </div>
                    </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-red-400 w-100 h-full flex items-center justify-center'>slide 2</div>
                    </SwiperSlide>
                        
                            
                    
                </Swiper> 
          
           </div>
           <div className='col-span-1  flex items-center justify-center border-2 border-gray-200 rounded-md   shadow-lg '>
                <div >
                     <p className='text-[4rem] '>Frontend Developer</p>
                     <p className='text-[1.5rem]'>building responsive and interactive web applications</p>
                  <div className='w-65 flex items-center justify-between mt-6 '>
                    <button className=' w-30 h-15 shadow-lg border-1 border-[#f4ddb9]'>view projects</button>
                    <button className='w-30 h-15  border-1 shadow-lg border-[#f4ddb9] '>contact me</button>
                  </div>
                </div>
           
           </div>
        </div>
    </div>
  )
}

export default Hero