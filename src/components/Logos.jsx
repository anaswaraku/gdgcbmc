import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { assets } from "../assets/assets";

const Logos = () => {
  const logos = [
    { id: 1, src: assets.AD, alt: "Logo 1" },
    { id: 2, src: assets.firebase, alt: "Logo 2" },
    { id: 3, src: assets.flutter, alt: "Logo 3" },
    { id: 4, src: assets.cloud, alt: "Logo 4" },
    { id: 5, src: assets.Unitylogo, alt: "Logo 5" },
  ];

  // Use the intersection observer to detect when component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div ref={ref} className="p-3">
      {/* Apply animation when inView is true */}
      <div
        className={`grid sm:grid-cols-5 gap-2 grid-cols-2 transform transition-opacity duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="p-4 flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
          >
            <img src={logo.src} alt={logo.alt} className="h-24 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
