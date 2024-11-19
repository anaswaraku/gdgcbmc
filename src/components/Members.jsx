import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { leads } from "../assets/Core team/leads";
const TeamPage = () => {
  const images = [
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
    leads.lead,
  ];

  const lead = {
    name: "VIJAYAKRISHNAN S R",
    position: "GDG on Campus Lead",
    image: images[0] ,
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  };

  // Other Team Members (using images from the array if available)
  const teamMembers = [
    {
      name: "JOEL PUNNEN THOMAS",
      position: "Operations Lead",
      image: images[1],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "JUDE SAJU",
      position: "Technical Lead",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "STALINO A J",
      position: "Developer Lead",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "RITTU MARIYA SONEY",
      position: "Content Lead",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "SIDHRA C S",
      position: "Content Co-Lead",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "GAYATRI N V",
      position: "Event Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    {
      name: "ADITHYA VINOD",
      position: "Public Relations Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    {
      name: "MINNU SAJU",
      position: "Public Relations Co-Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    {
      name: "NAHNA V MUSTAFA",
      position: "Finance Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    {
      name: "Unknown",
      position: "Design Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    {
      name: "GOPIKA",
      position: "Design Co-Lead",
      image: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-center text-gray-800 mb-10">
We Make it Happen
      </h1>

      {/* Featured Lead Section */}
      <div className="flex justify-center mb-12">
        <div
          className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4"
          style={{ borderColor: "#4285F4" }} // Google Blue for the featured lead border
        >
          <img
            src={lead.image}
            alt={lead.name}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{lead.name}</h2>
          <p className="text-gray-600">{lead.position}</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={lead.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-blue-700 hover:text-blue-500"
                size={24}
              />
            </a>
            <a
              href={lead.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-blue-400 hover:text-blue-300"
                size={24}
              />
            </a>
            <a
              href={lead.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-gray-800 hover:text-gray-600"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Other Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => {
          //color for each row
          const rowColors = [
            ["#EA4335", "#4285F4", "#34A853"],//First row (Red, Blue, Green)
            ["#FBBC05", "#34A853", "#4285F4"], // Second row (Yellow, Green, Blue)
          ];

          // Determine the current row (0 for first row, 1 for second, etc.)
          const currentRow = Math.floor(index / 3);
          // Pick color based on current index within the row pattern
          const color = rowColors[currentRow % 2][index % 3];

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-9 text-center hover:shadow-xl transition-shadow duration-300 border-t-4"
              style={{ borderColor: color }}
            >
              <img
                src={images[index + 1] || member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-600">{member.position}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="text-blue-700 hover:text-blue-500"
                    size={20}
                  />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    className="text-blue-400 hover:text-blue-300"
                    size={20}
                  />
                </a>
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-gray-800 hover:text-gray-600"
                    size={20}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
