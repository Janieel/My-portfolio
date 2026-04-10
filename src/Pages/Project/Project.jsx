import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { projectsData } from '../../Data/projectsData';
import check from "../../assets/Pictures/Image2.png"
import log from "../../assets/Pictures/Image3.png"
import det from "../../assets/Pictures/Image4.png"
import tip from "../../assets/Pictures/open.png"
import pool from "../../assets/Pictures/how.png"

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
    <div className="">
      <div className="w-full">
        <div className="text-[2rem] font-medium h-20 flex justify-center items-center">
          Project
        </div>
        <div className="text-center px-5">
          <p className="font-medium mb-2 text-[1.5rem]">Featured projects</p>
          <p className="text-[1rem] sm:text-[1.2rem] text-[#dbbfbf]">
            Highlighted project showing my frontend development skill
          </p>
        </div>

        {projectsData.map((project) => (
          <div
            key={project.id}
            className=" mt-10 mb-10 lg:px-0 lg:grid grid-cols-2 rounded-[10px] mx-5 md:mx-20  md:shadow-xl border  border-[#161515]"
          >
            {/* Image Swiper */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination,]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="w-full bg-[#161515] border border-[#161515] rounded-t-[10px] md:rounded-t-[0px]  md:rounded-tl-[10px] md:rounded-bl-[10px]  "
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  
                  <div className="h-90 sm:h-90 lg:h-90  w-full px-2 sm:p-10  md:p-10  lg:p-5 xl:px-15 shadow-xs" >
                    <img
                       src={img} 
                      className="h-[100%] object-contain w-[100%] "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Project Details */}
            <div className="col-span-1  bg-[#ebe9e5]  pt-5 px-10  md:mt-0  text-black 
             ">
              <p className="text-2xl text-center md:mt-5 ">{project.title}</p>
              <p className="mt-5 text-center ">{project.description}</p>

              {/* Tech Stack */}
              <div className="hidden lg:block md:text-center md:mt-5 md:text-[1.5rem] font-medium">
                <p>Tech Stack</p>
                <div className="md:mt-3 md:flex md:justify-center md:text-[1rem] md:items-center font-normal md:gap-4 ">
                  {project.techStack.map((tech, idx) => (
                    <button
                      key={idx}
                      className="bg-[#876267] h-[40px] w-[120px] rounded-[10px] px-4"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center py-5 gap-4 justify-center">
                <a href={project.links.github}>
                  <button className="bg-[#b8af76] h-10 w-30 rounded-[10px] hover:bg-[#d6d4c4]">
                    Github
                  </button>
                </a>
                <a href={project.links.liveDemo}>
                  <button className="bg-[#b8af76] h-10 w-30 rounded-[10px] hover:bg-[#d6d4c4]">
                    Live demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Project