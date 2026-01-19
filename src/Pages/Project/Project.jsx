import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import check from "../../assets/Pictures/Image2.png"
import log from "../../assets/Pictures/Image3.png"
import det from "../../assets/Pictures/Image4.png"
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

          
    <div >
        <div className=' w-full  '>
            <div className=' text-[2rem] font-medium  border-b border-b-gray-500 h-20 flex justify-center items-center '>Project</div>
             <div className='h-20 flex justify-center items-center '>
                <p className='font-medium text-[1.5rem]'>Featured projects</p>
             </div>
            <div className='  px-5  mb-10 lg:px-20 sm:grid grid-cols-2'>
               
                  <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination,]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className=" w-full  "
                    >
                        <SwiperSlide>
                            <div className='bg-white h-100 pt-10 rounded-[10px]  w-full px-10 sm:px-15 lg:px-40'>
                                <img src={det} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white h-100 pt-10 rounded-[10px] w-full px-10 sm:px-15 lg:px-40'>
                                <img src={log} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='bg-white h-100 pt-10 rounded-[10px] w-full  px-10 lg:px-40'>
                                <img src={check} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                    
                      
                        
                       
                  
                    </Swiper>
               
               
               
               
                <div className='col-span-1  h-100 mt-10 pt-5 px-5 sm:mt-0'>
                   <p className='text-2xl'> Exclusive-Ecommerce </p>
                    <p className='mt-5'>This project is a responsive e-commerce frontend built with React,
                         JavaScript, and Tailwind CSS. It focuses on delivering a clean,
                         intuitive user interface and a smooth shopping experience across all devices. 
                         The application leverages reusable components and efficient state management to
                          ensure performance, scalability, and maintainability.</p>

                    <a href="https://github.com/Janieel/Exclusive-Ecommerce " > <p className='mt-10 hover:underline'> view github respository</p> </a>
                    
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Project