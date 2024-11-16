import React, { useEffect, useState } from "react";
import '../assets/css/styles.css'
const Writtings = () => {
  const colors = ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [colors.length]);

  return (
    <>
        <div className="lg:flex md:grid sm:grid gap-9 place-content-center bg-ba76543A justify-center items-center rounded-lg h-[300px] ">
          <h1
            className="font-londrinaoutline font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] text-center"
            style={{ color: colors[colorIndex] }}
          >
            WORKSHOPS
          </h1>
          <h1
            className="font-londrinaoutline font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] text-center"
            style={{ color: colors[(colorIndex + 1) % colors.length] }}
          >
            STUDY JAMS
          </h1>
          <h1
            className="font-londrinaoutline font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] text-center"
            style={{ color: colors[(colorIndex + 2) % colors.length] }}
          >
            TECH TALKS
          </h1>
        </div>
    </>
  );
};

export default Writtings;
