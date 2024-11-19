import React from "react";
import ImageSlideShow from "../../../src/components/ImageSlideshow copy";
// Sample events data with unique links
const eventsData = {
  2024: [
    {
      date: "August 2,2024",
      title: "BYTESTART-ORIENTATION PROGRAMME",
      description: "Orientation Programme for first years",
      buttonColor: "bg-red-500 hover:bg-red-600",
      link: "https://example.com/grade-tracking-react-redux",
    },
    {
      date: "February 7,2024",
      title: "ZERO LATENCY",
      description: "Intercollegiate  VR Gaming Event",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      link: "https://example.com/google-apps-script",
    },
    {
      date: "February 6,2024",
      title: "UNITY WORKSHOP",
      description: "Game Development Workshop",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      link: "https://example.com/personal-website-workshop",
    },
    {
      date: "January 16,2024",
      title: "NAVIGATING AI IN ZOOLOGY",
      description:
        "A session to explore the integration of AI in Zoological studies",
      buttonColor: "bg-green-500 hover:bg-green-600",
      link: "https://example.com/data-science-python",
    },
  ],
  2023: [
    {
      date: "December 12, 2023",
      title: "DIGITAL MARKETING WORKSHOP",
      description:
        "Workshop on Digital Marketing. Topics : Social Media Marketing, Search engine optimization, Search engine Marketing, Mobile Marketing, Content Marketing",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      link: "https://example.com/web-development-intro",
    },
    {
      date: "October 16-17, 2023",
      title: "HELLO FLUTTER",
      description:
        "Two day flutter workshop. An expert session with Angelo Seby, a passionate Flutter Developer and former GDSC lead",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      link: "https://example.com/data-science-python",
    },
  ],
};

const EventsSection = () => {
  return (
    <div><ImageSlideShow />
  
  
      <div className="py-12 px-6">
        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-8"></h2>
          {Object.keys(eventsData)
            .reverse()
            .map((year) => (
              <div key={year} className="mb-12 ml-10 text-black ">
                <h3 className="text-xl font-semibold text-blue-600">{year}</h3>
                <hr className="border-t border-gray-700 w-16 mt-2 mb-6" />
                {/* Events Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10 mr-10">
                  {eventsData[year].map((event, index) => (
                    <div
                      key={index}
                      className="bg-gray-500 rounded-lg p-6 shadow-lg "
                    >
                      <p className="text-black  mb-2">{event.date}</p>
                      <h3 className="text-xl font-semibold mb-4">
                        {event.title}
                      </h3>
                      <p className="text-black mb-6">{event.description}</p>
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block ${event.buttonColor} text-white px-4 py-2 rounded`}
                      >
                        View Details
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
