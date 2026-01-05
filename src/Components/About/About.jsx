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
          <div className=' px-20 mt-5 py-2  h-100 bg-emerald-500'>
               <div className='grid grid-cols-2 gap-4 mt-10  '>
                    <div className=' col-span-1 border-2 border-gray-200 rounded-md px-3  shadow-lg'>
                       <div className='h-80 px-30 text-justify'>
                           <span className='text-[1.5rem] flex justify-center mb-5 font-medium  '>
                                ABOUT 
                           </span>
                           <p>
                               Hi there! I'm Jane, a front-end developer who's passionate about building innovative web applications.
                                 What drives me is the opportunity to transform my passion into practical 
                                 solutions that address real-life challenges. I specialize in creating web apps
                                  that combine creativity with solid functionality. I'm committed to continuous learning
                                   and expanding my expertise into new areas of development.
                           </p>
                      </div> 
                    </div> 
                    <div >
                       
                         <div className='border-2 col-span-1 border-gray-200 rounded-md px-3 shadow-lg '>
                               <p className=' text-[1.5rem] font-medium flex mt-2 justify-center ' >Technical Skills</p>
                               <div className=' relative h-80 flex justify-center items-center '
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                               
                               >
                             
                                 

                                  <Swiper
                                          effect={'cards'}
                                          grabCursor={true}
                                          modules={[EffectCards]}
                                          className=" w-50 h-50 " 
                                      >
                                         
                                          <SwiperSlide >
                                            <div  className='bg-[#f4ddb9] h-80 w-80 pt-20 pl-15 text-[1.5rem] ' title='swipe'>HTML</div> 
                                          </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-80 w-80  pt-20 pl-15 text-[1.5rem]'>CSS</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-80 w-80 pt-20 pl-15 text-[1.5rem]'>REACT</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-80 w-80 pt-20 pl-10 text-[1.5rem]'>JAVASCRIPT</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9]   h-80 w-80 pt-20 pl-10 text-[1.5rem]'>TAILWIND</div> 
                                        </SwiperSlide>
                                          <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-80 w-80 pt-20 pl-10 text-[1.5rem]'>BOOTSTRAP</div> 
                                        </SwiperSlide>
                                            <SwiperSlide>
                                            <div className='bg-[#f4ddb9] h-80 w-80 pt-20 pl-15 text-[1.5rem]'>GIT</div> 
                                        </SwiperSlide>
                                        
                                      </Swiper>    
                                      
                                 </div>  
                              {
                                  isHovered?
                                   <div className=' flex items-center justify-between w-151 absolute  bottom-0'> 
                                   <button className='bg-gray-200 h-10 w-10 ml-10 rounded-[50px] flex justify-center items-center text-[1.5rem] animate-pulse '>
                                     <icon><IoChevronForwardOutline /></icon>
                                    </button>
                                   <button  className='bg-gray-200 h-10 w-10 mr-10 rounded-[50px] flex justify-center items-center text-[1.5rem] animate-pulse'> 
                                     <IoChevronBackOutline/>
                                   </button>
                                 </div>
                                 :
                                 ""


                              }
                         </div>
                           
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About