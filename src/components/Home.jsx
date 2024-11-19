import { assets } from "../assets/assets";
import Join from "./Join";
import EventHome from "./EventHome";
import Footer from "./Footer";
import TeamPage from "./TeamPage";
import JoinUs from "./JoinUs";
const About = () => {
  return (
    <>
      {" "}
      <section id="">
        <div className="flex flex-row h-screen gap-8 justify-center items-center">
          {/* First Image */}
          <img
            src={assets.illus1}
            alt="Left Illustration"
            className="hidden sm:block w-1/3 h-auto text-center xl:object-cover rounded-lg opacity-50"
          />

          {/* Heading */}
          <h1 className="p-8 text-7xl text-gray-600 font-bold text-center">
            <span className="text-[#DB4437]">G</span>OOGLE<br></br>
            <span className="text-[#4285F4]">D</span>EVELOPER<br></br>
            <span className="text-[#0F9D58]">G</span>ROUP ON<br></br>
            <span className="text-[#F4B400]">C</span>AMPUS
            <span className="block text-gray-600 text-4xl font-normal font-grotesk p-5">
              BHARATA MATA COLLEGE,<br></br>THRIKKAKARA
            </span>
          </h1>

          {/* Second Image */}
          <img
            src={assets.illus2}
            alt="Right Illustration"
            className="hidden sm:block w-1/3 h-auto text-center xl:object-cover rounded-lg opacity-50"
          />
          {/*<div className="flex justify-center mt-6">
        <span className="dot h-2.5 w-2.5 bg-gray-400 rounded-full mx-1"></span>
        <span className="dot h-2.5 w-2.5 bg-green-500 rounded-full mx-1"></span>
      </div>
      <div className="flex justify-center align-center"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#DB4437] rounded-full mix-blend-multiply "></div>
      <div className="absolute top-10 right-0 w-64 h-64 bg-[#F4B400] rounded-full mix-blend-multiply  animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#0F9D58] rounded-full mix-blend-multiply "></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#4285F4] rounded-full mix-blend-multiply "></div>
      <div className="overflow:hidden"></div>*/}
        </div>
      </section>
      <Join />
    
      <EventHome />
      <TeamPage/><JoinUs/>
      <Footer/>
      
    </>
  );
};

export default About;