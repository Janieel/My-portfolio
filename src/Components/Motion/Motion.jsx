import { motion } from "motion/react";
import { ImTelegram } from "react-icons/im";
import html from "../../assets/Pictures/Imagehtml.png"
import css from "../../assets/Pictures/Imagecss.png"
import js from "../../assets/Pictures/Imagejs.png"
import react from "../../assets/Pictures/Imagereact.png"
import tw from "../../assets/Pictures/Imagetw.png"
import bt from "../../assets/Pictures/Imagebt.png"
import git from "../../assets/Pictures/Imagegit.png"
import next from "../../assets/Pictures/Next.png"
import { img } from "motion/react-client";

const LoopingScroll = () => {
  const items = [
       { name:"Html",
         image:html
       },
        { name:"Css",
         image: css
       },
       { name:"JavaScript",
         image: js
       },
         { name:"React",
         image: react
       },
        { name:"Tailwind ",
         image: tw
       },
        { name:"Bootstrap",
         image: bt
       },
        { name:"GitHub",
         image: git
       },
         { name:"Next.js",
         image: next
       },
      
      
      

  ];

  // duplicate the array for seamless loop
  const loopedItems = [ ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%", 
     height:"150px", border: "", backgroundColor:"", display:"flex" }}>
       
      <motion.div
        style={{
          display: "flex",
          width: "max-content"
        }}
        animate={{ x: ["0%", "-50%"] }} // move left by half of total width
        transition={{
          repeat: Infinity,
            repeatType: "loop",
          duration: 12,
          ease: "linear"
        }}
      >
        {loopedItems.map((items) => (
          <div key={items} style={{ minWidth: "100px",
           display:"flex", justifyContent:"center", alignItems:"center"}}>
           <div className=" h-30 w-[170px] pt-5 border-[#ac9797] border mx-2 ">
               <div className=" flex items-center justify-center  "> <img src={items.image} style={{height:"50px"}} alt="" /> </div>
               <div><p className="text-[20px] font-medium text-center "> {items.name}</p></div>
           </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoopingScroll;








  



