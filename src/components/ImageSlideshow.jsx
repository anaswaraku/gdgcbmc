import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const ImageSlideShow = () => {
  const images = [
    assets.nova,
    assets.ascend,
    assets.nova,
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
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slideshow Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold shadow-md">Events</h1>
      </div>

      {/* Optional Overlay for Darkening Background */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
  );
};

export default ImageSlideShow;
