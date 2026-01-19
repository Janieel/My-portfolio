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
        <div className=' w-full    '>
            <div className=' text-[2rem] font-medium  border-b border-b-gray-500 h-20 flex justify-center items-center '>Project</div>
             <div className=' text-center px-5  '>
                <p className='font-medium mb-2 text-[1.5rem]'>Featured projects</p>
                 <p className='text-[1rem]'>Highlighted project showing my frontend development skill</p>
             </div>
            <div className='  px-5 mt-10  mb-10 lg:px-0 sm:grid grid-cols-2 md:mx-15 rounded-[10px] sm:bg-[#f8f2f2]     md:shadow-xl'>
               
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
                            <div className='bg-white h-100 pt-10   w-full px-10 sm:px-15 lg:px-40'>
                                <img src={det} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white h-100 pt-10  w-full px-10 sm:px-15 lg:px-40'>
                                <img src={log} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='bg-white h-100 pt-10  w-full  px-10 lg:px-40'>
                                <img src={check} className='h-[90%] w-[100%]' alt="" />
                            </div>
                            
                        </SwiperSlide>
                    
                      
                        
                       
                  
                  </Swiper>
               
                <div className='col-span-1   mt-10 pt-5 px-5 sm:mt-0 bg-[#f8f2f2]   '>
                   <p className='text-2xl'> Exclusive-Ecommerce </p>
                    <p className='mt-5'>This project is a responsive e-commerce frontend built with React,
                         JavaScript, and Tailwind CSS. It focuses on delivering a clean,
                         intuitive user interface and a smooth shopping experience across all devices. 
                         The application leverages reusable components and efficient state management to
                          ensure performance, scalability, and maintainability.
                    </p>

                        <div className='  hidden lg:block  md:text-center  md:mt-5 md:text-[1.5rem] font-medium'> <p>Tech Stack</p>
                            
                            <div className='md:mt-3  md:flex md:justify-center md:text-[1rem] md:items-center font-normal md:gap-4'>
                                <button className='bg-[#e3dddd] h-[40px] w-[120px] rounded-[50px]'>React</button>
                                <button className='bg-[#e3dddd] h-[40px] w-[152px] rounded-[50px]'>Javascript</button>
                                <button className='bg-[#e3dddd] h-[40px] w-[150px] rounded-[50px]'>Tailwind</button>
                           </div>
                        </div>
                       <div className=' flex items-center py-5 gap-4'>
                         <a 
                            href="https://github.com/Janieel/Exclusive-Ecommerce " >
                           <button className='mt-10 bg-[#7a7272] h-12 w-30 rounded-[10px] hover:bg-[#a09797] '> Github </button>
                        </a>
                        <button className='mt-10  bg-[#7a7272] h-12 w-30 rounded-[10px]  hover:bg-[#a09797]  '> Live demo </button>
                     </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Project