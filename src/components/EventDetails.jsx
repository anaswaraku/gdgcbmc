import React from "react";
import { useParams } from "react-router-dom";
import { eventdetails } from "../assets/eventdetails"; // Import the event data

const EventDetails = () => {
  const { id } = useParams();
  const event = eventdetails.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        Event not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-20">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl mx-auto">
        {/* Event Poster */}
        {/* Placeholder for event poster */}
        {/* Event Title, Date, and Description */}
        <h1 className="text-4xl font-bold mb-5 text-blue-900">
          {event.title}
        </h1>
        <p className="text-gray-600 text-lg mb-5">{event.date}</p>
        <p className="text-gray-800 text-xl mb-8">{event.description}</p>

        {/* Speaker Information */}
        {event.speaker && (
          <div className="bg-blue-50 p-5 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">
              Speaker
            </h2>
            <p className="text-blue-800 text-lg">{event.speaker}</p>
          </div>
        )}

        {/* Glimpses Section */}
        {event.glimpses && event.glimpses.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-5 text-teal-600">
              Event Glimpses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.glimpses.map((glimpse, index) => (
                <img
                  key={index}
                  src={glimpse}
                  alt={`Glimpse ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
