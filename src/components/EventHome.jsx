import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    imageSrc: assets.Bytestart, // Replace with actual image URL
    title: "BYTESTART-ORIENTATION PROGRAMME",
    date: "2 Aug, 2024",
  },
  {
    id: 2,
    imageSrc: assets.Zerolatency, // Replace with actual image URL
    title: "ZERO LATENCY",
    date: "7 Feb, 2023",
  },
  {
    id: 3,
    imageSrc: assets.zoo, // Replace with actual image URL
    title: "AI IN ZOOLOGY: AN INTRODUCTORY SESSION",
    date: "16 Jan, 2024",
  },
];


const EventHome = () => {
    
    const navigate = useNavigate();
    
  return (
    <div className="container mx-auto text-center pt-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-600 font-grotesk">
        Recent Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 relative p-5 group transition-all duration-300"
          >
            {/* Full border with animated color effect */}
            <div className="absolute inset-0 border-2 transition-all duration-300 pointer-events-none group-hover:border-transparent group-hover:animate-border-color-change group-hover:scale-100"></div>

            <img
              src={event.imageSrc}
              alt={event.title}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <div className="flex items-center justify-center mt-2 text-gray-500">
                <span className="material-icons text-lg mr-2"></span>
                <p>{event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/events")}
        className="relative inline-flex items-center px-10 py-5 mt-10 mb-10 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition duration-300"
      >
        <span>More Info</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3"></span>
      </button>
      
    </div>
  );
};

export default EventHome;
