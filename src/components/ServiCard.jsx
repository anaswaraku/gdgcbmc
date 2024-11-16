// ServiceCard.js
import React from "react";

const ServiceCard = ({ title, description, image, isVisible }) => {
  return (
    <div
      className={`relative text-center overflow-hidden w-[300px] ${
        isVisible ? "animate-in" : "opacity-0"
      } group transition-all duration-700 ease-out`}
    >
      <img
        src={image}
        alt={title}
        className={`w-[300px] h-[300px] object-cover justify-self-center transform ${
          isVisible ? "scale-110 opacity-100" : "scale-90 opacity-0"
        } transition-transform duration-[1500ms] ease-in-out`}
        style={{
          transitionTimingFunction: "ease-in-out",
          transitionDuration: "1.5s",
        }}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white shadow-md p-4 w-[80%] mx-auto border-l-8 border-[#4285F4] transition-transform duration-700 ease-in-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
