import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import "../assets/css/Teampage.css";
import { leads } from "../assets/Core team/leads";

// Lead Component
const Lead = ({ name, role, imgSrc }) => (
  <div className="team-container">
    <div className="coremembers">
      <img src={imgSrc} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
     
    </div>
  </div>
);

// TeamMember Component
const TeamMember = ({ name, role, imgSrc }) => (
  <div className="team-container">
    <div className="coremembers">
      <img src={imgSrc} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="icon"></div>
    </div>
  </div>
);

const TeamPage = () => {
  const images = [assets.coretem, assets.nova, assets.ascend]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <div className="text"></div>
          <div className="imgcontainer flex justify-center ">
            <img src={images[currentImageIndex]} alt="Slideshow" />
            <div className="centered">CORE TEAM</div>
          </div>
        </div>
        
      </div>
      <Lead name="Vijayakrishnan R" role="GDGC Lead'24" imgSrc={leads.lead} />

      <div className="team-container">
        <TeamMember name="" role="Operations Lead" imgSrc="" />
        <TeamMember name="" role="Tech Lead" imgSrc="" />
        <TeamMember name="" role="Finance Lead" imgSrc="" />
        <TeamMember name="" role="Public Relations Lead" imgSrc="" />
        <TeamMember name="" role="Design Lead" imgSrc="" />
        <TeamMember name="" role="Event Lead" imgSrc="" />
        <TeamMember name="" role="Content Lead" imgSrc="" />
      </div>
    </>
  );
};

export default TeamPage;
