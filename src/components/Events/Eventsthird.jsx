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
    <div className="">
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
