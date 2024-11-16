import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import TeamPage from "./ImageSlideshow"
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
  {
    id: 4,
    imageSrc: assets.digitalmarketing, // Replace with actual image URL
    title: "DIGITAL MARKETING WORKSHOP",
    date: "12 Dec,2023",
  },
  {
    id: 5,
    imageSrc: assets.flutter, // Replace with actual image URL
    title: "HELLO FLUTTER",
    date: "16-17 Oct,2023",
  },
  {
    id: 6,
    imageSrc: "", // Replace with actual image URL
    title: "GOOGLE CLOUD STUDY JAMS",
    date: "3-30 Oct,2023",
  },
];

const PastEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  return (
    <>
      <TeamPage />
      <div className="container mx-auto text-center">
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
              <div className="p-2">
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
      </div>
    </>
  );
};

export default PastEvents;
