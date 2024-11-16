// Services.js
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import ServiceCard from "../ServiCard"; // Import the new ServiceCard component

const Services = () => {
  const services = [
    {
      title: "BYTESTART- ORIENTATION PROGRAMME",
      description: "Dive into the exciting world of GDSC",
      image: assets.Bytestart,
    },
    {
      title: "ZERO LATENCY- GAMING EXPERIENCE",
      description: "Dive into the exciting world of GDSC",
      image: assets.Zerolatency,
    },
    {
      title: "DIGITAL MARKETING WORKSHOP",
      description: "Dive into the exciting world of GDSC",
      image: assets.digitalmarketing,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  const handleScroll = () => {
    const rect = servicesRef.current.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/65f081da1b39e42952a9be7d/65f18abb7c0ac41abb03ef99_Megafon.svg"
          loading="lazy"
          alt=""
          className="w-[100px]"
        />
        <h1 className="text-[70px] font-Agdasima text-gray-300">Our Events</h1>
      </div>
      <div className="container mx-auto py-12" ref={servicesRef}>
        <div className="grid grid-cols-3 gap-10 justify-self-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
