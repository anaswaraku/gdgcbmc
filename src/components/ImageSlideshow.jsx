import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { leads } from "../assets/Core team/leads";



const TeamPage = () => {
  const images = [
    assets.nova,
    assets.ascend,
    assets.git,
    assets.nova,
    assets.zlat1,
    assets.flutterevent,
    assets.ascend,
  ]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="flex justify-center ">
        
          <div className="flex justify-center ">
            <img src={images[currentImageIndex]} alt="Slideshow" className="w-[auto] h-[380px] rounded m-10"/>
            
          </div>
        
      </div>
      
    </>
  );
};

export default TeamPage;
