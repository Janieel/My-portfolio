import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const About = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
          <div className=' xl:px-20 px-5 mt-5  py-10 md:py-0  xl:h-80  rounded-md shadow-sm '>
               <div className='md:grid grid-cols-2 gap-4 mt-10  '>
                    <div className=' col-span-1 border-2 border-[#f4ddb9] rounded-md px-3  shadow-lg'>
                       <div className='h-70 xl:px-15 lg:px-10 sm:px-20 md:px-0 overflow-scroll'>
                           <span className='text-[1.5rem] mb-5 flex justify-center  font-medium '>
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
                       
                         <div className='border-2 col-span-1 border-[#f4ddb9] rounded-md px-3 shadow-lg mt-10 md:mt-0 '>
                               <p className=' text-[1.5rem] font-medium flex mb-5 justify-center ' >Technical Skills</p>
                               <div className='h-70 relative  '
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                               
                               >
                             
                                 

                                  <Swiper
                                          effect={'cards'}
                                          grabCursor={true}
                                          modules={[EffectCards]}
                                          className=" w-50 h-50  " title='swipe'
                                      >
                                         
                                          <SwiperSlide >
                                            <div  className='bg-[#f4ddb9] h-50 w-50 pt-20 pl-15 text-[1.5rem] ' title='swipe'>HTML</div> 
                                          </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-50 w-50  pt-20 pl-15 text-[1.5rem]'>CSS</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-50 w-50 pt-20 pl-15 text-[1.5rem]'>REACT</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-50 w-50 pt-20 pl-10 text-[1.5rem]'>JAVASCRIPT</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9]   h-50 w-50 pt-20 pl-10 text-[1.5rem]'>TAILWIND</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-50 w-50 pt-20 pl-10 text-[1.5rem]'>BOOTSTRAP</div> 
                                        </SwiperSlide>
                                            <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-50 w-50 pt-20 pl-15 text-[1.5rem]'>GIT</div> 
                                        </SwiperSlide>
                                        
                                      </Swiper>    
                                      
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