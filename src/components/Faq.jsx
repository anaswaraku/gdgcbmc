import { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-medium text-gray-800">{question}</span>
      <svg
        className={`w-6 h-6 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="px-6 pb-4 text-gray-600">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is GDG?",
      answer:
        "GDG stands for Google Developer Groups, a global community of developers who come together to learn, share knowledge, and grow their skills in various technologies. GDGCBMC is the campus chapter at Bharata Mata College, Thrikkakara, where we aim to empower students with the latest tech trends and skills.",
    },
    {
      question: "How do I become a club member?",
      answer:
        "To become a member of GDGCBMC, you can register by filling out our membership form available on the website or visit our next event to sign up in person. Stay tuned for announcements about events and meetings on our website and social media platforms!",
    },
    {
      question: "Why should I join GDG?",
      answer:
        "Joining GDGCBMC offers several benefits:\n\n- Access to a community of like-minded individuals passionate about technology.\n- Opportunities to learn from experts through talks, workshops, and events.\n- Get hands-on experience with the latest tools and technologies.\n- Build your portfolio by participating in projects, hackathons, and collaborations.\n- Networking opportunities with industry professionals and fellow students.",
    },
    {
      question: "What does GDG BMC do?",
      answer:
        "GDG BMC organizes a variety of tech events including workshops, hackathons, coding competitions, seminars, and community meetups. We focus on enhancing students' skills in programming, web development, cloud computing, artificial intelligence, and more. We also encourage members to work on collaborative projects and contribute to open-source communities.",
    },
    {
      question: "Who can join GDG?",
      answer:
        "Anyone with a passion for technology is welcome to join GDGCBMC! Whether you’re a beginner, a seasoned developer, or just curious about tech, you’ll find a place here. Our events and activities cater to all skill levels, from those starting out to advanced learners.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-[70%] mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden mb-10">
      <h2 className="text-2xl font-bold text-center my-6 text-gray-800">
        FAQs
      </h2>
      <div className="divide-y divide-gray-200">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
