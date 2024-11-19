import React from "react";
import { assets } from "../assets/assets";

function Events() {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap p-12 m-12 bg-gradient-to-r from-yellow-400/70 to-green-600/60 rounded-lg max-w-max mx-auto">
        <div className="text-center flex-1">
          <div className="text-4xl font-bold mb-5 font-[Playwrite FR Moderne] text-white">
            Stay Updated with us
          </div>
          <h1 className="text-xl text-white mb-7"></h1>
          <a
            className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg cursor-pointer hover:bg-blue-600 transition"
            href="https://gdg.community.dev/accounts/login/?next=/gdg-on-campus-bharata-mata-college-thrikkakara-india/"
          >
            Join Us
          </a>
        </div>
       
      </div>
    </>
  );
}

export default Events;
