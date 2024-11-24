import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { leads
  
 } from "../assets/leads";
import PullUpText from './PullUpText'
const TeamPage = () => {
  const images = [
    leads.lead, // 0-lead
    leads.Operations, // 1-Operations
    leads.Tech, // 2-Tech
    leads.Developer, // 3-Developer
    leads.ContentLead, // 4-Content
    leads.ContentCo, // 5-Content-Co
    leads.Event, // 6-Event
    leads.PR, // 7-PR
    leads.PRCoLead, // 8-PR Co
    leads.Finance, // 9-Finance
    leads.DesignLead, // 10-Design
    leads.DesignCoLead, // 11-DesignCo
  ];

  const lead = {
    name: "VIJAYAKRISHNAN S R",
    position: "GDG on Campus Lead",
    image: images[0],
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  };

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
      image: images[2],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "STALINO A J",
      position: "Developer Lead",
      image: images[3],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "RITTU MARIYA SONEY",
      position: "Content Lead",
      image: images[4],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "SIDHRA C S",
      position: "Content Co-Lead",
      image: images[5],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "GAYATRI N V",
      position: "Event Lead",
      image: images[6],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "ADITHYA VINOD",
      position: "Public Relations Lead",
      image: images[7],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "MINNU SAJU",
      position: "Public Relations Co-Lead",
      image: images[8],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "NAHNA V MUSTAFA",
      position: "Finance Lead",
      image: images[9],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "MATHEW C S",
      position: "Design Lead",
      image: images[10],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "GOPIKA",
      position: "Design Co-Lead",
      image: images[11],
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  const renderSocialLinks = (links) => (
    <div className="flex justify-center space-x-4 mt-2">
      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-800"
        >
          <FaLinkedin size={24} />
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <FaTwitter size={24} />
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <FaGithub size={24} />
        </a>
      )}
    </div>
  );

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl text-center text-gray-800 head ">
        <PullUpText text=" GDGC BMC Core Team 2024-25" />
      </h2>
      <h1 className="text-center text-2xl text-gray-800">
        "We Make it Happen"
      </h1>
      <div className="flex justify-center items-center my-4 mb-10">
        <hr className="border-gray-300 w-20" />
        <div className="w-8 h-1 bg-green-600 mx-2"></div>
        <hr className="border-gray-300 w-20" />
      </div>
      {/* Lead Section */}
      <div className="mb-12 text-center">
        <div className="mb-12 text-center">
          <img
            src={lead.image}
            alt={lead.name}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-3xl font-semibold text-blue-900">{lead.name}</h2>
          <p className="text-gray-600 text-lg font-medium">{lead.position}</p>
          {renderSocialLinks(lead.socialLinks)}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105  "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-2"
            />
            <h3 className="text-2xl font-semibold text-gray-600">
              {member.name}
            </h3>
            <p className="text-gray-600 font-medium">{member.position}</p>
            {renderSocialLinks(member.socialLinks)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;