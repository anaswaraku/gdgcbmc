import React, { useEffect, useState } from "react";
import {assets} from "../assets/assets"; // Adjust the path to where your assets are located

const Events = () => {
  const images1 = [assets.coretem, assets.nova, assets.ascend,assets.AD];
  const [currentImgIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images1.length]); // Dependency array to re-run effect if images array changes

  return (
    <div className="w-[30%] h-auto ">
      <img src={images1[currentImgIndex]} alt={`Event ${currentImgIndex}`} />
      <div className="image-indicators">
        {images1.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImgIndex ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)} // Allow manual selection
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
