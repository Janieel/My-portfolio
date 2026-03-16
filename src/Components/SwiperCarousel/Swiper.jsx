import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Js from "../../assets/Pictures/Imagejs.png"
import HT from "../../assets/Pictures/Imagehtml.png"
import CSS from "../../assets/Pictures/Imagecss.png"
import RT from "../../assets/Pictures/Imagereact.png"
import TW from "../../assets/Pictures/Imagetw.png"
import git from "../../assets/Pictures/Imagegit.png"
import BT from "../../assets/Pictures/Imagebt.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className=" w-full sm:w-[70%] md:w-[60%] lg:w-[50%] h-[150px] sm:h-[110px] md:h-[150px] "
       
      >
        <SwiperSlide > 
           <div className=' bg-white  h-[90%] mt-2 '>
            <div className=' h-[50%]  flex  items-end justify-center pt-2 '> <img src={HT} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
             <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>HTML</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className=' bg-white  h-[90%] mt-2 '>
              <div className=' h-[50%]  flex  items-end justify-center pt-2 '> <img src={CSS} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
                <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>CSS</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' bg-white h-[90%] mt-2 '>
            <div className=' h-[50%]  flex  items-end justify-center pt-2 '> <img src={Js} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
              <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>Javascript</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' bg-white h-[90%] mt-2'>
            <div className=' h-[50%]  flex  items-end justify-center '> <img src={RT} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
              <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>React</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className=' bg-white  h-[90%] mt-2'>
              <div className=' h-[50%]  flex  items-end justify-center '> <img src={TW} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
                <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>Tailwind</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className=' bg-white  h-[90%] mt-2'>
              <div className=' h-[50%]  flex  items-end justify-center '> <img src={git} className="h-[80%] w-[40%] sm:h-[100%]"/> </div> 
                <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>GitHub</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className=' bg-white  h-[90%] mt-2'>
              <div className=' h-[50%]  flex  items-end justify-center pt-3 '> <img src={BT} className="h-[70%] w-[40%] sm:h-[100%]"/> </div> 
                <p className='  text-center text-[1rem] sm:text-[1.5rem] font-semibold  '>Bootstrap</p>
            </div>
        </SwiperSlide>
        
      </Swiper>
       </>
  );
}
