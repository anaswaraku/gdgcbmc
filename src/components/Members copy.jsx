import React from 'react'
import { leads } from "../assets/Core team/leads";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

  const teamMembers = [
    {
      name: "John Doe",
      position: "Organizer",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      position: "Co-Organizer",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    // Add more team members as needed
  ];

  const images = [leads.lead1, leads.lead2];
const Members = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 justify-items-center">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={images[index]}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.position}</p>
            <div className="flex space-x-4">
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              )}
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              )}
              {member.socialLinks.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Members
