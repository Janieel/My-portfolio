import { motion } from "motion/react";
import { ImTelegram } from "react-icons/im";
import html from "../../assets/Pictures/Imagehtml.png"
import css from "../../assets/Pictures/Imagecss.png"
import js from "../../assets/Pictures/Imagejs.png"
import react from "../../assets/Pictures/Imagereact.png"
import tw from "../../assets/Pictures/Imagetw.png"
import bt from "../../assets/Pictures/Imagebt.png"
import git from "../../assets/Pictures/Imagegit.png"
import { img } from "motion/react-client";

const LoopingScroll = () => {
  const items = [
       { name:"HTML",
         image:html
       },
        { name:"CSS",
         image: css
       },
       { name:"JAVASCRIPT",
         image: js
       },
         { name:"REACT",
         image: react
       },
        { name:"TAILWIND",
         image: tw
       },
        { name:"BOOTSTRAP",
         image: bt
       },
        { name:"GITHUB",
         image: git
       },
      
      
      

  ];

  // duplicate the array for seamless loop
  const loopedItems = [ ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "700px", 
     height:"150px", border: "", backgroundColor:"", display:"flex" }}>
       
      <motion.div
        style={{
          display: "flex",
          width: "max-content"
        }}
        animate={{ x: ["0%", "-50%"] }} // move left by half of total width
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear"
        }}
      >
        {loopedItems.map((items) => (
          <div key={items} style={{ minWidth: "100px",
           display:"flex", justifyContent:"center", alignItems:"center"}}>
           <div className="  w-[120px] items-center justify-center ">
               <div className=" flex items-center justify-center"> <img src={items.image} style={{height:"50px"}} alt="" /> </div>
               <div><p className="text-[20px] font-medium text-center "> {items.name}</p></div>
           </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoopingScroll;








  



