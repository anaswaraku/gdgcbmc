import React from "react";
import { leads } from "../assets/Core team/leads";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Members from "./Members";
const Team = () => {



  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>

        {/* Centering Wrapper */}
        <div className="flex justify-center">
          <div >
            
<Members/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
