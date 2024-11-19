import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const TeamPage = () => {
  const images = [assets.nova, assets.ascend, assets.git];
  const images1 = [assets.zlat1, assets.flutterevent, assets.ascend];
  const backgroundImg = assets.someBackground; // Add your background image here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 max-w-screen-xl mx-auto items-center">
        {/* First column */}
        <div className="flex flex-col rounded-lg hover:scale-105 transition-all">
          <h1 className="text-3xl">
            "We make events that inspire, educate, and connect students with the
            latest in technology."
          </h1>
        </div>

        {/* Second column with two rows and a semi-transparent background */}
        <div
          className="relative grid grid-rows-2 gap-8 items-start p-6 rounded-lg"
          style={{
            backgroundImage: `url(${images1[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 bg-[#4285F480] z-[1] rounded-lg"
          ></div>

          {/* First row of the second column */}
          <div className="relative z-10 flex flex-col items-start rounded-lg hover:scale-105 transition-all">
            <img
              src={images1[currentImageIndex]}
              alt="Slideshow"
              className="w-auto h-[200px] rounded-lg object-cover"
            />
          </div>

          {/* Second row of the second column */}
          <div className="relative z-10 flex flex-col items-start rounded-lg hover:scale-105 transition-all">
            <img
              src={images[currentImageIndex]}
              alt="Slideshow"
              className="w-auto h-[200px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
