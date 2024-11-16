import React from "react";

const  Noevent= ()=>{
    return (
      <div className="flex justify-center items-center">
        <button className="relative inline-flex items-center px-10 py-5 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition duration-300">
          <span>Upcoming Event!!</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
           
          </span>
        </button>
      </div>
    );
}

const UpcomingEvent = () => {
  return (
    <>
    <Noevent/>
    </>
  );
};

export default UpcomingEvent;
