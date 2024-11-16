import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Writtings from './Writtings'


function ImageMasked(){
  return(
    <>
      <div className="relative">
        <img
          src={assets.coretem}
          alt="Background"
          className="inset-0 h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#ea44355e] z-[1] rounded-lg"></div>
      </div>
    </>);
  }
function Join() {
  return (
    <>
    <section id="about">
      <div className="relative container mx-auto">
        <div className="grid gap-[30px] lg:grid-cols-2 m-5 items-center">
          <ImageMasked />
          <h1 className="text- text-base sm:text-2xl md:text-2xl lg:text-2.5xl p-2 sm:p-4 lg:p-5 md:p-10">
            <span className="text-3xl font-grotesk text-[#0F9D58]">
              <b>GDG BMC </b>
            </span>
            is a platform for budding and aspiring developers aiming to bridge
            the gap between theory and practice. Our goal is to help them
            broaden their understanding of emerging technologies and shape their
            skills into a better version. The club intends to provide students
            with hands-on technology through Google's curated resources.
          </h1>
        </div>

        <img
          src={assets.illus3}
          alt="Background"
          className="hidden lg:block h-[50%] absolute bottom-0 right-0 mb-4 mr-4"
        />
      </div></section>
      <Writtings/>
    </>
  );
}

export default Join;
