import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageSlideshow from "./ImageSlideshow";
import { events } from "../assets/events";
import PullUpText from "./PullUpText";

const PastEvents = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <ImageSlideshow />
      </div>

      <div className="relative z-10 bg-white bg-opacity-20 p-10 min-h-screen backdrop-blur-sm">
        <h1 className="items-center text-xl text-center m-10 text-gray-800">
          "We make events that inspire, educate, and connect students with the
          latest in technology."
          <span className="block font-bold text-4xl text-gray-700 mt-5">
            <PullUpText text="Recent Events"/>
          </span>
        </h1>

        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 relative p-5 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-400"
              >
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="w-full h-[250px] object-cover rounded-t-lg border-2 border-gray-400"
                />

                <div className="p-4">
                  {/* Link to the event details page */}
                  <Link to={`/event/${event.id}`}>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                      {event.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-lg">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
